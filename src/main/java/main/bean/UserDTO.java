package main.bean;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class UserDTO {
	private int seq;
	private String id;
	private String pwd;
	private String name;
	private String email1;
	private String email2;
	private String tel1;
	private String tel2;
	private String tel3;
	private String zipcode;
	private String addr1;
	private String addr2;
	private LocalDateTime logtime;
}
