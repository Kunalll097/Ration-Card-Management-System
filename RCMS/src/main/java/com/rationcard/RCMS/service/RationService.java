package com.rationcard.RCMS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rationcard.RCMS.model.Ration;
import com.rationcard.RCMS.repository.RationRepository;

@Service
public class RationService {

    @Autowired
    private RationRepository rationRepository;

    public List<Ration> getAllRations() {
        return rationRepository.findAll();
    }
}