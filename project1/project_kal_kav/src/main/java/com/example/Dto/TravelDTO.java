package com.example.Dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TravelDTO {
    private long id;
    private long busId;
    private long driverId;
    private long lineId;
    private LocalDateTime departureTime;
}
