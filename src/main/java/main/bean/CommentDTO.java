package main.bean;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class CommentDTO {
	private int seq;
	private int user;
	private int product;
	private String name;
	private String title;
	private String content;
	private LocalDateTime logtime;
	private int connect_count;
}
