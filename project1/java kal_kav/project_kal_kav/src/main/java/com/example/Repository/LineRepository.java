package com.example.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Models.Line;

public interface LineRepository extends JpaRepository<Line, Long> {
    Optional<Line> findByNumber(String number);
}
