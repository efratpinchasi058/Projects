package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Models.Station;

public interface StationRepository extends JpaRepository<Station, Long> {
}