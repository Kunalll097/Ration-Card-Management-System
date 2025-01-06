package com.rationcard.RCMS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rationcard.RCMS.model.Ration;
import com.rationcard.RCMS.repository.RationRepository;

@RestController
@RequestMapping("/api/ration")
public class RationController {
    @Autowired
    private RationRepository rationRepository;

    @GetMapping("/allocation")
    public ResponseEntity<List<Ration>> getRationAllocation() {
        return ResponseEntity.ok(rationRepository.findAll());
    }
}