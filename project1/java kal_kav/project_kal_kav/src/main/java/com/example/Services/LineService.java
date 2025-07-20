package com.example.Services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.StationLine;
import com.example.Models.Travel;
import com.example.Repository.TravelRepository;
import com.example.Repository.StationLineRepository;

@Service
public class LineService {

    @Autowired
    private TravelRepository travelRepository;

    @Autowired
    private StationLineRepository stationLineRepository;

    // חישוב זמני הגעה של קווים לתחנה (לכל הקווים)
    public List<String> getArrivalTimesAllLinesByStation(Long stationId) {
        List<StationLine> stationLines = stationLineRepository.findByStationId(stationId);
        List<String> result = new ArrayList<>();

        for (StationLine sl : stationLines) {
            Long lineId = sl.getLine().getId();
            int order = sl.getStationOrder();

            List<Travel> travels = travelRepository.findByLineId(lineId);
            for (Travel travel : travels) {
                LocalDateTime arrival = travel.getDepartureTime().plusMinutes(order);
                result.add("קו " + travel.getLine().getNumber() + " יגיע בשעה " + arrival.toString());
            }
        }

        return result;
    }

    // חישוב זמני הגעה של קו מסוים לתחנה
    public List<String> getArrivalTimesByStation(Long stationId, Long lineId) {
        StationLine stationLine = stationLineRepository.findByStationIdAndLineId(stationId, lineId)
                .orElseThrow(() -> new RuntimeException("Station-Line not found"));

        int order = stationLine.getStationOrder();
        List<Travel> travels = travelRepository.findByLineId(lineId);
        List<String> result = new ArrayList<>();

        for (Travel travel : travels) {
            LocalDateTime arrival = travel.getDepartureTime().plusMinutes(order);
            result.add("הקו יגיע בשעה " + arrival.toString());
        }

        return result;
    }
    
}
