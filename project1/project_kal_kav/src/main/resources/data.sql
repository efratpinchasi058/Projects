-- הוספת אוטובוסים
INSERT INTO bus (id, license_plate, seats) VALUES (1, '123-45-67', 50);
INSERT INTO bus (id, license_plate, seats) VALUES (2, '234-56-78', 60);
INSERT INTO bus (id, license_plate, seats) VALUES (3, '345-67-89', 50); -- נוספה נסיעה נוספת
INSERT INTO bus (id, license_plate, seats) VALUES (4, '456-78-90', 60); -- נוספה נסיעה נוספת

-- הוספת נהגים
INSERT INTO driver (id, name, phone, rating) VALUES (1, 'John Doe', '0501234567', 4.5);
INSERT INTO driver (id, name, phone, rating) VALUES (2, 'Jane Smith', '0507654321', 4.7);
INSERT INTO driver (id, name, phone, rating) VALUES (3, 'Alice Johnson', '0502345678', 4.8); -- נוספה נסיעה נוספת
INSERT INTO driver (id, name, phone, rating) VALUES (4, 'Bob Brown', '0508765432', 4.6); -- נוספה נסיעה נוספת

-- הוספת קווים
INSERT INTO line (id, number, source, destination) VALUES (1, '1', 'Station A', 'Station B');
INSERT INTO line (id, number, source, destination) VALUES (2, '2', 'Station B', 'Station C');

-- הוספת תחנות
INSERT INTO station (id, name, phone) VALUES (1, 'Station A', '03-1234567');
INSERT INTO station (id, name, phone) VALUES (2, 'Station B', '03-2345678');
INSERT INTO station (id, name, phone) VALUES (3, 'Station C', '03-3456789');
INSERT INTO station (id, name, phone) VALUES (4, 'Station D', '03-4567890');
INSERT INTO station (id, name, phone) VALUES (5, 'Station E', '03-5678901');

-- הוספת קשרים בין תחנות לקווים
INSERT INTO station_line (station_id, line_id, station_order) VALUES (4, 1, 3);
INSERT INTO station_line (station_id, line_id, station_order) VALUES (5, 2, 3);
INSERT INTO station_line (station_id, line_id, station_order) VALUES (1, 1, 1);
INSERT INTO station_line (station_id, line_id, station_order) VALUES (2, 1, 2);
INSERT INTO station_line (station_id, line_id, station_order) VALUES (2, 2, 1);
INSERT INTO station_line (station_id, line_id, station_order) VALUES (3, 2, 2);

-- הוספת נסיעות נוספות לקו 1
INSERT INTO travel (bus_id, driver_id, line_id, departure_time) VALUES (1, 1, 1, '2025-05-13 08:00:00');
INSERT INTO travel (bus_id, driver_id, line_id, departure_time) VALUES (2, 2, 1, '2025-05-13 09:00:00'); -- נסיעה לקו 1
INSERT INTO travel (bus_id, driver_id, line_id, departure_time) VALUES (3, 3, 1, '2025-05-13 10:00:00'); -- נסיעה נוספת לקו 1
INSERT INTO travel (bus_id, driver_id, line_id, departure_time) VALUES (4, 4, 1, '2025-05-13 11:00:00'); -- נסיעה נוספת לקו 1
