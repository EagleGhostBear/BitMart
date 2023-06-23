package main.bean;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class HistoryDTO {
	private int productSeq;
    private String productImage;
    private String productTitle;
    private int productPrice;
    private int productSale;
    private int historySeq;
    private int orderNum;
    private int user;
    private int product;
    private int number;
    private String deliveryState;
    private LocalDateTime logTime;
}
