package com.example.Models;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Entity
    @Table(name = "Station")
    public class Station {
        @Id
        private long id;
    
        @OneToMany(mappedBy = "station", cascade = CascadeType.ALL, orphanRemoval = true)
        private List<StationLine> stationLines;
    
        private String name;
        private String phone;
    }
    


