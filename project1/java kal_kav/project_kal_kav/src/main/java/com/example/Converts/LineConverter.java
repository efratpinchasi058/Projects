package com.example.Converts;

import com.example.Dto.LineDTO;
import com.example.Models.Line;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class LineConverter {

    // המרה של אובייקט Line ל-LineDTO
    public LineDTO toDTO(Line line) {
        LineDTO dto = new LineDTO();
        dto.setId(line.getId());
        dto.setNumber(line.getNumber());
        dto.setSource(line.getSource());
        dto.setDestination(line.getDestination());
        return dto;
    }

    // המרה של אובייקט LineDTO ל-Line
    public Line toEntity(LineDTO dto) {
        Line line = new Line();
        line.setId(dto.getId());
        line.setNumber(dto.getNumber());
        line.setSource(dto.getSource());
        line.setDestination(dto.getDestination());
        return line;
    }

    // המרה של רשימת אובייקטים Line ל-LineDTO
    public List<LineDTO> toDTOList(List<Line> lines) {
        return lines.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    // המרה של רשימת אובייקטים LineDTO ל-Line
    public List<Line> toEntityList(List<LineDTO> lineDTOs) {
        return lineDTOs.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
