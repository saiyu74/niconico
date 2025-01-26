package com.niconico.web.homepage;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NiconicoApplication {

	public static void main(String[] args) {
		SpringApplication.run(NiconicoApplication.class, args);
	}

    @Bean
    public ModelMapper modelMapper() {
     return new ModelMapper();
    }
}
