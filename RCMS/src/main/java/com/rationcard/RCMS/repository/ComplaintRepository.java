package com.rationcard.RCMS.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rationcard.RCMS.model.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
}
