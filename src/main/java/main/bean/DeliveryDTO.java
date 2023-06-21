package main.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class DeliveryDTO {
    private int seq;
    private int user;
    private String addr1;
    private String addr2;
    private String name;
    private String tel1;
    private String tel2;
    private String tel3;
}
