package com.example.Converts;

import java.util.List;
import java.util.stream.Collectors;

import com.example.Dto.TravelDTO;
import com.example.Models.Bus;
import com.example.Models.Driver;
import com.example.Models.Line;
import com.example.Models.Travel;

public class TravelConverter {

    // המרה מ-Entity ל-DTO
    public static TravelDTO toDTO(Travel travel) {
        return new TravelDTO(
                travel.getId(),
                travel.getBus() != null ? travel.getBus().getId() : 0,
                travel.getDriver() != null ? travel.getDriver().getId() : 0,
                travel.getLine() != null ? travel.getLine().getId() : 0,
                travel.getDepartureTime());
    }

    // המרה מ-DTO ל-Entity
    public static Travel toEntity(TravelDTO dto, Bus bus, Driver driver, Line line) {
        Travel travel = new Travel();
        travel.setId(dto.getId()); // ✅ תיקון כאן
        travel.setBus(bus);
        travel.setDriver(driver);
        travel.setLine(line);
        travel.setDepartureTime(dto.getDepartureTime());
        return travel;
    }

    // המרה מרשימת Travel ל-List<TravelDTO>
    public static List<TravelDTO> toDTOList(List<Travel> travels) {
        return travels.stream()
                .map(TravelConverter::toDTO)
                .collect(Collectors.toList());
    }

    // המרה מרשימת DTO ל-List<Travel> – עם אותם Bus/Driver/Line
    public static List<Travel> toEntityList(List<TravelDTO> dtos, Bus bus, Driver driver, Line line) {
        return dtos.stream()
                .map(dto -> toEntity(dto, bus, driver, line))
                .collect(Collectors.toList());
    }
}
