package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Models.Driver;


   public interface DriverRepository extends JpaRepository< Driver, Long> {
 
}
