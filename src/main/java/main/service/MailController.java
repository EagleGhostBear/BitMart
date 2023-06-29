package main.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MailController {
	@Autowired
	private MailService mailService;
	
	@PostMapping("/sendMail")
	public String sendMail(@RequestBody Map<String, String> requestData) {
		String email = requestData.get("email");
		System.out.println("Received email: " + email);
		mailService.sendMail(email, "비트컬리 인증번호");
		return "Mail sent successfully";
	}
	
	@GetMapping("/mailCert")
    public String getMailCert() {
        return mailService.getMailCert();
    }
	
}
