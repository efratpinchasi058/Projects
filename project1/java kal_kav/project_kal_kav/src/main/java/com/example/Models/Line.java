package com.example.Models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity

@Data
// בנאי ריק
@NoArgsConstructor
// בנאי עם כל השדות
@AllArgsConstructor
public class Line {
    @Id
    

    private long id;
    @OneToMany(mappedBy = "line", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StationLine> stationLines;
    private String number;
    private String source;
    private String destination;
}