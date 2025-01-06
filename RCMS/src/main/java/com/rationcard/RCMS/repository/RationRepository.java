package com.rationcard.RCMS.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rationcard.RCMS.model.Ration;

public interface RationRepository extends JpaRepository<Ration, Long> {
}
