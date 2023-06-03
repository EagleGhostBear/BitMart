package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"main.controller", "main.bean", "main.service", "main.dao"})
public class BitMartApplication {

	public static void main(String[] args) {
		SpringApplication.run(BitMartApplication.class, args);
	}
}