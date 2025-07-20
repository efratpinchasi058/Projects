package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.Dto.StationDTO;
import com.example.Services.StationService;

@RestController 
public class StationController {

    @Autowired
    private StationService stationService;

    // שליפת תחנות לפי מספר קו
    @GetMapping("/by-line-number/{lineNumber}")
    public List<StationDTO> getStationsByLineNumber(@PathVariable String lineNumber) {
        return stationService.getStationsByLineNumber(lineNumber);
    }
    
}
