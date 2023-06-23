package main.bean;

import java.sql.Date;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class CommentDTO {
	private int seq;
	private int product;
	private String title;
	private String name;
	private Date logtime;
	private int connect_count;
	
}
