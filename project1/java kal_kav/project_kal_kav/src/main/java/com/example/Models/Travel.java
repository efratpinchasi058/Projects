package com.example.Models;

import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Travel")
public class Travel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    // הרבה ליחיד הרבה הרבה נסיעות לאוטובוס אחד
    @ManyToOne
    @JoinColumn(name = "bus_id")
    private Bus bus;

    // הרבה ליחיד הרבה נסיעות לנהג אחד
    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;

    // הרבה ליחיד הרבה נסיעות לקו אחד
    @ManyToOne
    @JoinColumn(name = "line_id")
    private Line line;

    private LocalDateTime departureTime;
}
