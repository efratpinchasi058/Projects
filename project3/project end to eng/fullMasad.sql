use DreamLand
go
--  קטגוריות
INSERT INTO Categories (CatId, CatName) VALUES (1, 'Dollhouses');
INSERT INTO Categories (CatId, CatName) VALUES (2, 'Board games');
INSERT INTO Categories (CatId, CatName) VALUES (3, 'Scooter & bikes');
INSERT INTO Categories (CatId, CatName) VALUES (4, 'Playmobil');
INSERT INTO Categories (CatId, CatName) VALUES (5, 'Remote controls');
INSERT INTO Categories (CatId, CatName) VALUES (6, 'Lego');

-- חברות
INSERT INTO Companies (CompId, CompName) VALUES (1, 'Lego');
INSERT INTO Companies (CompId, CompName) VALUES (2, 'Playmobil');
INSERT INTO Companies (CompId, CompName) VALUES (3, 'Mobile');
INSERT INTO Companies (CompId, CompName) VALUES (4, 'Hakubia');
INSERT INTO Companies (CompId, CompName) VALUES (5, 'Hot Wheels');
INSERT INTO Companies (CompId, CompName) VALUES (6, 'Bruder');

--  מוצרים
INSERT INTO Products (ProdId, ProdName, CatCode, CompanyCode, Description, Price, Image, StockQty, LastUpdated) 
VALUES (1, 'lego police', 6, 1, 'Police Lego', 69.99, 'lego.jpg', 50, GETDATE());
INSERT INTO Products (ProdId, ProdName, CatCode, CompanyCode, Description, Price, Image, StockQty, LastUpdated) 
VALUES (1, 'playmobil fireman', 4, 2, 'playmobil fireman', 58.99, 'playmobil.jpg', 100, GETDATE());

-- לקוחות
INSERT INTO Customers (CustId, CustName, CustPhone, CustEmail, CustDateOfBirth) 
VALUES (1, 'Miriam', '0548545957', 'mf0548545957@gmail.com', '2005-01-26');

-- הוספת קניות
INSERT INTO ShopDetails (ShopDetailsId, ShopCode, ProductCode, Quantity) 
VALUES (1, 1, 1, 4); 
INSERT INTO ShopDetails (ShopDetailsId, ShopCode, ProductCode, Quantity) 
VALUES (2, 2, 2, 3);

-- פרטי קניה



