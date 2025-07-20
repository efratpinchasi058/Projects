package com.example.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Models.StationLine;

public interface StationLineRepository extends JpaRepository<StationLine, Long> {

    List<StationLine> findByStationId(Long stationId);

    Optional<StationLine> findByStationIdAndLineId(Long stationId, Long lineId);

     
    List<StationLine> findByLineIdOrderByStationOrder(Long lineId);

   /**
     * שליפת קשר בין תחנה לקו לפי מזהי תחנה וקו
     */
    Optional<StationLine> findByLineIdAndStationId(Long lineId, Long stationId);

    /**
     * שליפת כל התחנות לפי מזהה קו, ממויינות לפי סדר התחנות
     */
    List<StationLine> findByLineIdOrderByStationOrderAsc(Long lineId);

    /**
     * שליפת כל קשרי התחנות בקו
     */
    List<StationLine> findByLineId(Long lineId);
}
