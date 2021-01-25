package com.autocompleteapi.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UsersService {

    private static final Logger log = LoggerFactory.getLogger(UsersService.class);
    
    private static final String apiQueryEndpoint = "https://api.github.com/search/users?q={query}+in:login&per_page=8";

    @Autowired
    RestTemplate restTemplate;

    public String getUsersByParam(String queryParam) {

        HttpHeaders headers = new HttpHeaders();
        HttpEntity <String> entity = new HttpEntity<String>(headers);

        String endpoint = apiQueryEndpoint.replace("{query}", queryParam);
        
        log.info("Calling Github Api to get users based on query input from user: " + queryParam);
        log.info(endpoint);
        ResponseEntity<String> responseEntity = restTemplate.exchange(endpoint, HttpMethod.GET, entity, String.class);
        
        return responseEntity.getBody();
    }
}