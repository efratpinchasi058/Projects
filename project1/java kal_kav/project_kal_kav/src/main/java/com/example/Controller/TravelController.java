package com.example.Controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Services.TravelService;
import com.example.Converts.TravelConverter;
import com.example.Dto.TravelDTO;
import com.example.Models.Travel;

@RestController
@RequestMapping("/api/travel")
public class TravelController {

    private final TravelService travelService;

    public TravelController(TravelService travelService) {
        this.travelService = travelService;
    }

    @GetMapping("/last")
    public ResponseEntity<TravelDTO> getLastTravel(
            @RequestParam Long lineId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        Optional<Travel> travelOpt = travelService.getLastTravelOfDay(lineId, date);
        return travelOpt
                .map(travel -> ResponseEntity.ok(TravelConverter.toDTO(travel)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<?> createTravel(@RequestBody TravelDTO dto) {
        try {
            TravelDTO created = travelService.createTravel(dto);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("שגיאה: " + e.getMessage());
        }
    }

    @GetMapping("/by-hour")
    public ResponseEntity<List<TravelDTO>> getTravelByHour(@RequestParam String hour) {
        try {
            LocalDateTime time = LocalDateTime.parse(hour); // "14:30"
            return ResponseEntity.ok().body(travelService.getTravelByHour(time));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
     @GetMapping("/basic")
    public List<TravelDTO> getAllTravelBasicInfo() {
        return travelService.getAllTravelBasicInfo();
    }
}