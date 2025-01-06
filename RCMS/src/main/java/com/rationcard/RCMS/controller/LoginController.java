package com.rationcard.RCMS.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rationcard.RCMS.model.User;

@RestController
@RequestMapping("/api")
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        if ("test@example.com".equals(user.getEmail()) && "password123".equals(user.getPassword())) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }
}