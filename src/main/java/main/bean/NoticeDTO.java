package main.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

import java.util.Date;

@Component
@Data
public class NoticeDTO {
    private int id;
    private String title;
    private String content;
    private String author;
    private java.sql.Date date;
}
