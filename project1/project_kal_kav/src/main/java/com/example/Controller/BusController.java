package com.example.Controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Converts.BusConverter;
import com.example.Dto.BusDTO;
import com.example.Models.Bus;
import com.example.Services.BusService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/api/buses")
public class BusController {

    @Autowired
    private BusService busService;

    @Autowired
    private BusConverter busConverter;

    @GetMapping
    public List<BusDTO> getAllBuses() {
        return busService.getAllBuses().stream()
                .map(busConverter::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BusDTO> getBusById(@PathVariable Long id) {
        Bus bus = busService.getBusById(id);
        if (bus == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(busConverter.toDTO(bus));
    }

    @PostMapping
    public BusDTO createBus(@RequestBody BusDTO dto) {
        Bus bus = busConverter.toEntity(dto);
        return busConverter.toDTO(busService.saveBus(bus));
    }

    @DeleteMapping("/{id}")
    public void deleteBus(@PathVariable Long id) {
        busService.deleteBus(id);
    }
}
