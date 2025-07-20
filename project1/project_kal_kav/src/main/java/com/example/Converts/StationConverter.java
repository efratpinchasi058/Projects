package com.example.Converts;

import com.example.Dto.StationDTO;
import com.example.Models.Station;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class StationConverter {

    // המרה של אובייקט Station ל-StationDTO
    public StationDTO toDTO(Station station) {
        StationDTO dto = new StationDTO();
        dto.setId(station.getId());
        dto.setName(station.getName());
        return dto;
    }

    // המרה של אובייקט StationDTO ל-Station
    public Station toEntity(StationDTO dto) {
        Station station = new Station();
        station.setId(dto.getId());
        station.setName(dto.getName());
        return station;
    }

    // המרה של רשימת אובייקטים Station ל-StationDTO
    public List<StationDTO> toDTOList(List<Station> stations) {
        return stations.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    // המרה של רשימת אובייקטים StationDTO ל-Station
    public List<Station> toEntityList(List<StationDTO> stationDTOs) {
        return stationDTOs.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
