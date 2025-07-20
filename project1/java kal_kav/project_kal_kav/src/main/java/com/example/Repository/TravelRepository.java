package com.example.Repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Models.Travel;

@Repository
public interface TravelRepository extends JpaRepository<Travel, Long> {
    List<Travel> findByLineId(Long lineId);

    List<Travel> findByLineIdAndDepartureTimeBetweenOrderByDepartureTimeDesc(Long lineId, LocalDateTime start,
            LocalDateTime end);
}
