package com.example.Services;

import com.example.Dto.StationDTO;
import com.example.Models.Line;
import com.example.Models.Station;
import com.example.Models.StationLine;
import com.example.Repository.LineRepository;
import com.example.Repository.StationLineRepository;
import com.example.Repository.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StationService {

    @Autowired
    private LineRepository lineRepository;

    @Autowired
    private StationLineRepository stationLineRepository;

    @Autowired
    private StationRepository stationRepository; // הזרקת ה־StationRepository
public Station createStation(Station station) {
    return stationRepository.save(station);
}

    public List<StationDTO> getStationsByLineNumber(String lineNumber) {
        // מוצא את הקו לפי המספר
        Line line = lineRepository.findByNumber(lineNumber)
                .orElseThrow(() -> new RuntimeException("קו לא נמצא"));

        // שואב את תחנות הקו לפי סדר
        List<StationLine> stationLines = stationLineRepository.findByLineIdOrderByStationOrder(line.getId());

        // ממיר כל תחנה ל־DTO בעזרת ה־repository
        return stationLines.stream()
                .map(stationLine -> {
                    Station station = stationRepository.findById(stationLine.getStation().getId())
                            .orElseThrow(() -> new RuntimeException("תחנה לא נמצאה"));
                            return new StationDTO(station.getId(), station.getName(), station.getPhone());
                        })
                .collect(Collectors.toList());
    }
}
