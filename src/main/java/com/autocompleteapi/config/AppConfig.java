package com.autocompleteapi.config;

import com.autocompleteapi.service.UsersService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@ConfigurationProperties
public class AppConfig {
    private static final Logger log = LoggerFactory.getLogger(AppConfig.class);

    @Bean
    public UsersService getUsersService() {
        log.info("init UsersService");
        return new UsersService();
    }

    @Bean
    public RestTemplate getRestTemplate() {
        log.info("init RestTemplate");
        return new RestTemplate();
    }
}