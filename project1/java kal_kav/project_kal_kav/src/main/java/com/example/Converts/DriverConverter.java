package com.example.Converts;

import com.example.Dto.DriverDTO;
import com.example.Models.Driver;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class DriverConverter {

    // המרה מ-Driver ל-DriverDTO
    public DriverDTO toDTO(Driver driver) {
        DriverDTO dto = new DriverDTO();
        dto.setId(driver.getId());
        dto.setName(driver.getName());
        dto.setPhone(driver.getPhone());
        dto.setRating(driver.getRating());
        return dto;
    }

    // המרה מ-DriverDTO ל-Driver
    public Driver toEntity(DriverDTO dto) {
        Driver driver = new Driver();
        driver.setId(dto.getId());
        driver.setName(dto.getName());
        driver.setPhone(dto.getPhone());
        driver.setRating(dto.getRating());
        return driver;
    }

    // המרה של רשימת Driver ל-DTO
    public List<DriverDTO> toDTOList(List<Driver> drivers) {
        return drivers.stream().map(this::toDTO).collect(Collectors.toList());
    }

    // המרה של רשימת DriverDTO ל-Driver
    public List<Driver> toEntityList(List<DriverDTO> driverDTOs) {
        return driverDTOs.stream().map(this::toEntity).collect(Collectors.toList());
    }
}
