package com.autocompleteapi;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.assertThat;

import com.autocompleteapi.service.UsersService;

import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestTemplate;

import io.restassured.RestAssured;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration (classes = App.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class ApplicationContextTest {
    
    @Autowired
    private UsersService usersService;

    @Autowired
    RestTemplate restTemplate;

    @Value("${local.server.port}")
    int port;

    @BeforeAll
    public void setUp() throws Exception {
        RestAssured.port = port;
    }

    @Test
    public void testDefault() throws Exception {      
        given().when().get("/api/users/").then()
                .body(is("This is the Users API."));
    }

    @Test
    public void testApplicationContext() throws Exception {
        assertThat(restTemplate, is(notNullValue()));
        assertThat(usersService, is(notNullValue()));
    }
}