package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Services.LineService;

@RestController
@RequestMapping("/api/lines")
public class LineController {

    @Autowired
    private LineService lineService;

    // זמני הגעה של קו מסוים לתחנה מסוימת
    @GetMapping("/{lineId}/arrivals/{stationId}")
    public ResponseEntity<List<String>> getArrivalTimesByStation(@PathVariable Long lineId,
            @PathVariable Long stationId) {
        List<String> arrivalTimes = lineService.getArrivalTimesByStation(stationId, lineId);
        return ResponseEntity.ok(arrivalTimes);
    }

    // זמני הגעה של כל הקווים לתחנה מסוימת
    @GetMapping("/arrivals/{stationId}")
    public ResponseEntity<List<String>> getArrivalTimesAllLines(@PathVariable Long stationId) {
        List<String> arrivalTimes = lineService.getArrivalTimesAllLinesByStation(stationId);
        return ResponseEntity.ok(arrivalTimes);
    }
}
