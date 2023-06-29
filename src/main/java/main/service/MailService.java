package main.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
@RequestMapping("/api")
public class MailService {
	@Autowired
	private JavaMailSender mailSender;
	private String mailCert;
	
	public void sendMail(String toEmail, String subject) {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper;
		try {
			helper = new MimeMessageHelper(message, true);
			helper.setFrom("emailstmptest@gmail.com");
			helper.setTo(toEmail);
			helper.setSubject(subject);

			mailCert = generateRandomNum();

			// HTML body 설정
			String htmlBody = "<html><body>" + "<p>비트컬리를 방문해주셔서 감사합니다</p>" + "<p>인증번호는 다음과 같습니다.</p>"
					+ "<p style=\"font-size: 24px;\">인증번호: " + mailCert + "</p>" + "</body></html>";

			helper.setText(htmlBody, true);

			mailSender.send(message);
			System.out.println("Mail Sent successfully...");
		} catch (MessagingException e) {
			System.out.println("Failed to send mail: " + e.getMessage());
		}
	}

	private String generateRandomNum() {
		Random r = new Random();
		int num = r.nextInt(888888) + 111111;
		System.out.println(num);
		return String.valueOf(num);
	}
	
	public String getMailCert() {
	    return mailCert;
	}
	
}
