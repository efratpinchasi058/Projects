package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Models.Line;
import com.example.Models.Station;
import com.example.Models.StationLine;
import com.example.Repository.LineRepository;
import com.example.Repository.StationLineRepository;
import com.example.Repository.StationRepository;
import com.example.Services.StationLineService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/station-line")
public class StationLineController {

    @Autowired
    private StationLineService stationLineService; // ודא שהשירות מאותחל
    @Autowired
    private LineRepository lineRepository; // ודא שהשירות מאותחל
    @Autowired
    private StationRepository stationRepository;
    @Autowired
    private StationLineRepository stationLineRepository;

    @PostMapping("/add")
    public ResponseEntity<?> addStationToLine(@RequestParam Long lineId, @RequestParam Long stationId) {
        try {
            // חיפוש הקו
            Line line = lineRepository.findById(lineId)
                    .orElseThrow(() -> new EntityNotFoundException("קו לא נמצא עם מזהה " + lineId));

            // אם התחנה לא קיימת, צור תחנה חדשה
            Station station = stationRepository.findById(stationId)
                    .orElseGet(() -> {
                        Station newStation = new Station();
                        newStation.setId(stationId); // תן לזה מזהה תחנה חדש
                        // ניתן להוסיף כאן שדות נוספים אם צריך, למשל שם התחנה
                        return stationRepository.save(newStation); // שמור את התחנה החדשה
                    });

            // יצירת StationLine והוספה לקו
            StationLine stationLine = new StationLine();
            stationLine.setLine(line); // הוסף את הקו
            stationLine.setStation(station); // הוסף את התחנה
            stationLine.setStationOrder(1); // או מספר התחנה המתאים

            // שמור את הקשר בין התחנה לקו
            stationLineRepository.save(stationLine);

            // עדכון מספרי התחנות בקו
            List<StationLine> stationLines = stationLineRepository.findByLineId(lineId);
            for (int i = 0; i < stationLines.size(); i++) {
                stationLines.get(i).setStationOrder(i + 1); // עדכון מספר התחנה
                stationLineRepository.save(stationLines.get(i));
            }

            return ResponseEntity.ok("✅ תחנה הוספה בהצלחה לקו");

        } catch (Exception ex) {
            return ResponseEntity.status(400).body("❌ שגיאה בהוספת תחנה: " + ex.getMessage());
        }
    }

    @DeleteMapping("/remove")
    public ResponseEntity<?> removeStationFromLine(@RequestParam Long lineId, @RequestParam Long stationId) {
        try {
            stationLineService.removeStationFromLine(lineId, stationId);
            return ResponseEntity.ok("✅ תחנה הוסרה מהקו");
        } catch (Exception ex) {
            return ResponseEntity.status(400).body("❌ " + ex.getMessage());
        }
    }
}