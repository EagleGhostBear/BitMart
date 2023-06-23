package main.bean;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class CommentDTO {
	private int seq;
	private int product;
	private String title;
	private String name;
	private LocalDateTime logtime;
	private int connect_count;
	
}
