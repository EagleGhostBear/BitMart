package main.bean;

import java.sql.Date;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class ViewsDTO {
	private int user;
	private int product;
	private int views;
	private Date logtime;
}
