package main.bean;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class InquiryDTO {
	 private int id;
	 private String title;
	 private String content;
	 private LocalDateTime createdAt;
	 private String replyStatus;
	 private String type;
	 private String subType;
}
