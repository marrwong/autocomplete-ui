package com.autocompleteapi.controller;

import com.autocompleteapi.service.UsersService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    private static final Logger log = LoggerFactory.getLogger(UsersController.class);

    @Autowired
    private UsersService usersService;

    @GetMapping("/")
    public @ResponseBody String api() {
        return "This is the Users API.";
    }

    @GetMapping("/{queryParam}")
	public String getName(@PathVariable String queryParam) {

        log.info("Getting users based on user input");
        String usersList = usersService.getUsersByParam(queryParam);

        return usersList;
    }
}