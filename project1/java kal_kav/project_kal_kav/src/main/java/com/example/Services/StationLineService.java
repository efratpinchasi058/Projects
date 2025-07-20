package com.example.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.Line;
import com.example.Models.Station;
import com.example.Models.StationLine;
import com.example.Repository.LineRepository;
import com.example.Repository.StationLineRepository;
import com.example.Repository.StationRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class StationLineService {

    @Autowired
    private StationLineRepository stationLineRepository;

    @Autowired
    private LineRepository lineRepository;

    @Autowired
    private StationRepository stationRepository;

    @Transactional
public void addStationToLine(Long lineId, Long stationId) {
    Line line = lineRepository.findById(lineId)
            .orElseThrow(() -> new EntityNotFoundException("❌ קו לא נמצא עם מזהה " + lineId));
    Station station = stationRepository.findById(stationId)
            .orElseThrow(() -> new EntityNotFoundException("❌ תחנה לא נמצאה עם מזהה " + stationId));

    Optional<StationLine> existing = stationLineRepository.findByLineIdAndStationId(lineId, stationId);
    if (existing.isPresent()) {
        throw new IllegalStateException("⚠️ התחנה כבר קיימת בקו");
    }

    List<StationLine> stations = stationLineRepository.findByLineIdOrderByStationOrderAsc(lineId);
    int nextOrder = stations.size() + 1;

    StationLine stationLine = new StationLine();
    stationLine.setLine(line);
    stationLine.setStation(station);
    stationLine.setStationOrder(nextOrder);

    stationLineRepository.save(stationLine);
}

   @Transactional
public void removeStationFromLine(Long lineId, Long stationId) {
    Optional<StationLine> optional = stationLineRepository.findByLineIdAndStationId(lineId, stationId);
    if (optional.isEmpty()) {
        throw new EntityNotFoundException("❌ לא נמצא קשר בין הקו לתחנה");
    }

    StationLine toRemove = optional.get();
    int removedOrder = toRemove.getStationOrder();
    stationLineRepository.delete(toRemove);

    // עדכון תחנות שאחריו
    List<StationLine> stations = stationLineRepository.findByLineIdOrderByStationOrderAsc(lineId);
    for (StationLine s : stations) {
        if (s.getStationOrder() > removedOrder) {
            s.setStationOrder(s.getStationOrder() - 1);
            stationLineRepository.save(s);
        }
    }
}

}
