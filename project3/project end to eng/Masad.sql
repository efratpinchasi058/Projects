
create database [DreamLand]
go
USE [DreamLand]
GO
/****** Object:  Table [dbo].[Custumer_tbl]    Script Date: 30/10/2023 16:30:41 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE Categories (
    CatId INT PRIMARY KEY,
    CatName VARCHAR(255) NOT NULL
);

CREATE TABLE Companies (
    CompId INT PRIMARY KEY,
    CompName VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    ProdId INT PRIMARY KEY,
    ProdName VARCHAR(255) NOT NULL,
    CatCode INT,
    CompanyCode INT,
    Description TEXT,
    Price DECIMAL(10, 2),
    Image VARCHAR(255),
    StockQty INT,
    LastUpdated DATE,
    FOREIGN KEY (CatCode) REFERENCES Categories(CatId),
    FOREIGN KEY (CompanyCode) REFERENCES Companies(CompId)
);

CREATE TABLE Customers (
    CustId INT PRIMARY KEY,
    CustName VARCHAR(255) NOT NULL,
    CustPhone VARCHAR(15),
    CustEmail VARCHAR(255),
    CustDateOfBirth DATE
);

CREATE TABLE Shop (
    ShopId INT PRIMARY KEY,
    CustomerCode INT,
    ShopDate DATE,
    TotalAmount DECIMAL(10, 2),
    ShopNote TEXT,
    FOREIGN KEY (CustomerCode) REFERENCES Customers(CustId)
);

CREATE TABLE ShopDetails (
    ShopDetailsId INT PRIMARY KEY,
    ShopCode INT,
    ProductCode INT,
    Quantity INT,
    FOREIGN KEY (ShopCode) REFERENCES Shop(ShopId),
    FOREIGN KEY (ProductCode) REFERENCES Products(ProdId)
);

