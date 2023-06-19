package main.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class FaqDTO {
    private int id;
    private String category;
    private String title;
    private String content;
}
