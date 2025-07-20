package com.example.Models;

import java.util.List;

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
@Table(name = "Bus")
public class Bus {
   @Id
   private long id;
   private String licensePlate;
   private int seats;
   // יחיד לרבים אוטובוס אחד יכול ליהיות להרבה נסיעות
   @OneToMany(mappedBy = "bus")
   private List<Travel> travels;
}
