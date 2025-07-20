
// 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css"; // ייבוא קובץ העיצוב החיצוני
import { CityById } from "../api";

export const Card = ({ apartment }) => {
  const [select, setSelect] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (apartment?.CodeCity) {
      console.log("Fetching city for CodeCity:", apartment.CodeCity);
      CityById(apartment.CodeCity)
        .then((response) => {
          console.log("City API response:", response); // בדיקה של תגובת ה-API
          if (response.data) {
            setSelect(response.data); // שומר את המידע על העיר
          } else {
            console.error("City data not found in API response");
            setSelect(null); // ערך ריק אם לא נמצא מידע
          }
        })
        .catch((error) => {
          console.error("Error fetching city:", error);
          setSelect(null); // ערך ריק במקרה של שגיאה
        });
    } else {
      console.error("CodeCity is missing or invalid:", apartment?.CodeCity);
      setSelect(null);
    }
  }, [apartment?.CodeCity]);

  // פונקציה לטיפול במעבר לדף פרטים נוספים
  const details = () => {
    console.log("Navigating with apartment and city:", apartment, select);
    navigate("/details", {
      state: {
        apartment,
        city: select?.CityName || "N/A", // מעביר את שם העיר או N/A במקרה של ערך ריק
      },
    });
  };

  return (
    <div className="cccc">
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(/pic/${apartment.Image})` }}
          ></div>
          <ul className="details">
            <li className="date">{apartment.Adress || "No address available"}</li>
          </ul>
        </div>
        <div className="description">

         <p
  style={{
    fontFamily: "'Amatica SC', sans-serif",
    fontSize: "40px",
    color: "#131877",
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  {apartment.NameApartment || "No name available"}
</p>
          
          <p>{apartment.Description || "No description available"}</p>
          <p className="read-more">
            <button className="button1" onClick={details}>
              פרטים נוספים
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

