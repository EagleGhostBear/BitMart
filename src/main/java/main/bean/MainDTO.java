package main.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class MainDTO {
	private int seq;
	private String image;
	private String title;
	private String subtitle;
	private int price;
	private int sale;
}
