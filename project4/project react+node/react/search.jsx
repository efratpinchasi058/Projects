import React, { useState } from "react";
import { useEffect } from "react";
import "../style.css";
import {AllCity} from "../api"

import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("0");
  const [beds, setBeds] = useState("0");
  const [list, setList] = useState(0);
  const [showCities, setShowCities] = useState(false);
  const [h,seth]=useState(null);
  // const [token, setToken] = useState();
  // const [idUser, setidUser] = useState();
  const navigate=useNavigate();
  const handleBedsChange = (e) => {
    const value = e.target.value;
    // עדכון הסטייט רק אם הערך הוא מספר
    if (!isNaN(value)) {
      setBeds(value);
    }
  };
  const handlePriceChange = (e) => {
    const value = e.target.value;
    // עדכון הסטייט רק אם הערך הוא מספר
    if (!isNaN(value)) {
      setPrice(value);
    }
  };
  // useEffect(() => {
  //   const storedToken = sessionStorage.getItem("token");
  //   const storedIdUser = sessionStorage.getItem("idUser");
    
  //   setToken(storedToken);
  //   setidUser(storedIdUser);
  // }, [sessionStorage.getItem("token"), sessionStorage.getItem("idUser")]); // עדכון עם התלות החדשה
  
useEffect(() => {
  AllCity()
    .then((y) => {
      if (y.data) {
        setList(y.data); // שמירת המידע שהתקבל
      } else {
        setList([]); // אם אין נתונים, נשאיר את המערך ריק
      }
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      setList([]); // במקרה של שגיאה, המערך יהיה ריק
    });
}, []);

// בדיקת הערך של list.city לפני השימוש בו
const cccc = list.city || []; // אם list.city אינו מוגדר, נשתמש במערך ריק
console.log(cccc);
// יצירת מערך שמות הערים
const cityNames = cccc.map((city) => city.CityName);
// sessionStorage.setItem("cityNames", JSON.stringify(cityNames));

console.log("cityNames:", cityNames);

  // const handleCityClick = (city) => {
  //   setDestination(city);
  //   setShowCities(false); // סגירת הרשימה לאחר בחירת עיר
  // };
  const handleCityClick = (selectedCityName) => {
    const selectedCity = cccc.find((city) => city.CityName === selectedCityName);
    if (selectedCity) {
     
      console.log("Selected City:", selectedCity); // הדפסת העיר הנבחרת
      console.log(selectedCity._id)
      seth(selectedCity._id)
      setDestination(selectedCity.CityName); // שמירת העיר הנבחרת (כולל שם וקוד)
      setShowCities(false); // סגירת הרשימה
    }
  };
  



  const myFunc = () => {

    console.log(h,price,beds)
    const searchParams = {
      CodeCity: h || null, // קוד העיר או null אם לא קיים
      NumBed: beds || 0,                      // מספר מיטות (ערך ברירת מחדל 0)
      Price: price || 0                       // מחיר (ערך ברירת מחדל 0)
    };
    console.log(searchParams); // הדפסת האובייקט
    localStorage.setItem('searchParams', JSON.stringify(searchParams));


    // שליחת האובייקט לדף אחר (למשל דרך state או query params)
    navigate('/search', { state: searchParams }); // דוגמה עם React Router


  };
  
  return (
    <div className="d">
    <div className="search-bar">
      {/* יעד / מקום אירוח */}
      <div className="search-destination">
        <p>באיזה עיר תרצו לנפוש??</p>
        <input 
          id="destination"
          type="text"
          placeholder="  בחרו עיר מהרשימה"
          value={destination}
          onFocus={() => setShowCities(true)} // הצגת רשימת הערים בלחיצה על השדה
          onChange={(e) => setDestination(e.target.value)}
        />
        {showCities && (
         

<ul className="cities-dropdown">
{cityNames.length > 0 ? (
  cityNames.map((cityName, index) => (
    <li key={index} onClick={() => handleCityClick(cityName)}>
      {cityName} {/* תצוגת שם העיר */}
    </li>
  ))
) : (
  <li>טוען ערים...</li>
)}
</ul>

          
          
        ) }
      </div>

      <div className="beds-input">
        <p>עד איזה מחיר ??</p>
        <input
          id="price"
          type="number"
          min="0"
          value={price}
          onChange={handlePriceChange}
        />
       
      </div>

      
       <div className="beds-input">
      <p>מספר מיטות?</p>
      <input
        id="beds"
        type="number"
        min="0"
        value={beds} // הסטייט יחליף את הערך המוצג
        onChange={handleBedsChange} // עדכון הסטייט בעת שינוי
      />
    </div>

      {/* כפתור חיפוש */}
      <button className="search-button" onClick={myFunc}>
        חיפוש <span>✔</span>
      </button>
    </div>
   
    </div>

    
  );
};

// export default SearchBar;
