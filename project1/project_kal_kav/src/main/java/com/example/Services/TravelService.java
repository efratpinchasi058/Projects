package com.example.Services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.example.Models.Line;
import com.example.Repository.BusRepository;
import com.example.Repository.DriverRepository;
import com.example.Repository.LineRepository;
import com.example.Repository.TravelRepository;
import com.example.Converts.TravelConverter;
import com.example.Dto.TravelDTO;
import com.example.Models.Bus;
import com.example.Models.Driver;
import com.example.Models.Travel;

import org.springframework.stereotype.Service;

@Service
public class TravelService {
        private final TravelRepository travelRepository;
        private final BusRepository busRepository;
        private final DriverRepository driverRepository;
        private final LineRepository lineRepository;

        // Constructor שמקבל את כל ה-Repositoryים
        public TravelService(TravelRepository travelRepository, BusRepository busRepository,
                        DriverRepository driverRepository, LineRepository lineRepository) {
                this.travelRepository = travelRepository;
                this.busRepository = busRepository;
                this.driverRepository = driverRepository;
                this.lineRepository = lineRepository;
        }

        // מתודולוגיה לקבלת נסיעה אחרונה ביום
        public Optional<Travel> getLastTravelOfDay(Long lineId, LocalDate date) {
                LocalDateTime startOfDay = date.atStartOfDay();
                LocalDateTime endOfDay = date.atTime(LocalTime.MAX);
                List<Travel> travels = travelRepository.findByLineIdAndDepartureTimeBetweenOrderByDepartureTimeDesc(
                                lineId,
                                startOfDay, endOfDay);
                return travels.stream().findFirst(); // מחזיר את הנסיעה האחרונה
        }

        // יצירת נסיעה חדשה
        public TravelDTO createTravel(TravelDTO dto) {
                // מציאת אוטובוס
                Bus bus = busRepository.findById(dto.getBusId())
                                .orElseThrow(() -> new RuntimeException("Bus not found"));

                // מציאת נהג
                Driver driver = driverRepository.findById(dto.getDriverId())
                                .orElseThrow(() -> new RuntimeException("Driver not found"));

                // מציאת קו
                Line line = lineRepository.findById(dto.getLineId())
                                .orElseThrow(() -> new RuntimeException("Line not found"));

                // המרת DTO ל-Entity
                Travel travel = TravelConverter.toEntity(dto, bus, driver, line);

                // שמירה במסד הנתונים
                travel = travelRepository.save(travel);

                // החזרת ה-DTO
                return TravelConverter.toDTO(travel);
        }

        public List<TravelDTO> getTravelByHour(LocalDateTime hour) {
                List<Travel> allTravels = travelRepository.findAll();

                List<Travel> filtered = allTravels.stream()
                                .filter(travel -> travel.getDepartureTime().equals(hour))
                                .collect(Collectors.toList());

                return TravelConverter.toDTOList(filtered);
        }

        public List<TravelDTO> getAllTravelBasicInfo() {
                List<Travel> all = travelRepository.findAll();
                all.forEach(travel -> {
                        System.out.println("Bus: " + (travel.getBus() != null ? travel.getBus().getId() : "null"));
                        System.out.println("Driver: "
                                        + (travel.getDriver() != null ? travel.getDriver().getId() : "null"));
                        System.out.println("Line: " + (travel.getLine() != null ? travel.getLine().getId() : "null"));
                });

                return TravelConverter.toDTOList(all);
        }

}
