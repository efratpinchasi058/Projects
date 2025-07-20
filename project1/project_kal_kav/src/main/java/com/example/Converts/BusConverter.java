package com.example.Converts;

import org.springframework.stereotype.Component;

import com.example.Dto.BusDTO;
import com.example.Models.Bus;

@Component
public class BusConverter {

    public BusDTO toDTO(Bus bus) {
        BusDTO dto = new BusDTO();
        dto.setId(bus.getId());
        dto.setLicensePlate(bus.getLicensePlate());
        dto.setSeats(bus.getSeats());
        return dto;
    }

    public Bus toEntity(BusDTO dto) {
        Bus bus = new Bus();
        bus.setId(dto.getId());
        bus.setLicensePlate(dto.getLicensePlate());
        bus.setSeats(dto.getSeats());
        return bus;
    }
}
