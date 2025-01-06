package com.rationcard.RCMS.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@SuppressWarnings("unused")
public class ConsumptionHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;
    private int quantity;
    private LocalDate purchaseDate;
    private String fairPriceShop;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}