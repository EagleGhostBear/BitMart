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
	private String category;
	private int price;
	private int sale;
	private String unit;
	private String weight;
	private String delivery;
	private String packingtype;
	private String detailimage;
}
