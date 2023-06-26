package main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MailController {
	@Autowired
	private MailService mailService;
	
	@PostMapping("/sendMail")
	public String sendMail() {
		
		mailService.sendMail("awesomecreative@naver.com", "비트마트 인증번호");
		return "Mail sent successfully";
	}
	
	@GetMapping("/mailCert")
    public String getMailCert() {
        return mailService.getMailCert();
    }
	
}
