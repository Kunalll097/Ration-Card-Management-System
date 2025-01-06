package com.rationcard.RCMS.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@SuppressWarnings("unused")
public class Ration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;
    private int monthlyQuota;
    private int utilized;
    private int balance;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}