package com.example.Models;

import java.util.List;

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
public class Driver {
    @Id
    private long id;
    // יחיד לרבים נהג אחד להרבה נסיעות
    @OneToMany(mappedBy = "driver")
    private List<Travel> travels;
    private String name;
    private String phone;
    private double rating;

}
