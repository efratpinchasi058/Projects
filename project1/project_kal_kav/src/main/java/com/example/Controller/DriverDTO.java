package com.example.Controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // יוצר get ו-set אוטומטית
@NoArgsConstructor // יוצר בנאי ריק
@AllArgsConstructor // יוצר בנאי עם כל השדות
public class DriverDTO {

    // מזהה ייחודי של נהג
    private long id;

    // שם הנהג
    private String name;

    // טלפון של הנהג
    private String phone;

    // דירוג הנהג (לדוגמה: 4.7)
    private double rating;
}

