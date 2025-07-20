// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { CityById,advertiseById } from "../api"; // נניח שה-API שלך נמצא בתיקייה ז
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from "react-router-dom";


// export const Details = () => {
//     const location = useLocation();
//     const { apartment } = location.state || {};
//     const [cityName, setCityName] = useState();
//     const [myDetails, setMyDetails] = useState();
//     const [token, setToken] = useState();
//     const [idUser, setidUser] = useState();
//     const navigate = useNavigate();

  
//     // Fetch city name and advertiser details
//     useEffect(() => {
//       if (!apartment) {
//         console.error("Apartment details are missing.");
//         return;
//       }
  
//       if (apartment.CodeCity) {
//         CityById(apartment.CodeCity)
//           .then((response) => {
//             if (response.data && response.data.City.CityName) {
//               setCityName(response.data.City.CityName);
//             } else {
//               console.error("CityName not found in API response");
//               setCityName("N/A");
//             }
//           })
//           .catch((err) => {
//             console.error("Error fetching city name:", err);
//             setCityName("N/A");
//           });
//       } else {
//         console.error("CodeCity is missing or invalid:", apartment?.CodeCity);
//         setCityName("N/A");
//       }
  
//       if (apartment.CodeAdvertisement) {
//         advertiseById(apartment.CodeAdvertisement)
//           .then((x) => {
//             if (x.data) {
//               setMyDetails(x.data);
//             } else {
//               console.error("Advertiser data not found in API response");
//               setMyDetails("N/A");
//             }
//           })
//           .catch((err) => {
//             console.error("Error fetching advertiser data:", err);
//             setMyDetails("N/A");
//           });
//       } else {
//         console.error("CodeAdvertisement is missing or invalid:", apartment?.CodeAdvertisement);
//         setMyDetails("N/A");
//       }
//     }, [apartment]); // השתמש ב-apartment כולו בתלות
  
//     // Fetch token and user ID
//     useEffect(() => {
//         const storedToken = sessionStorage.getItem("token");
//         const storedIdUser = sessionStorage.getItem("idUser");
        
//         if (storedIdUser && apartment?.CodeAdvertisement && storedIdUser === String(apartment.CodeAdvertisement)) {
//           setidUser(storedIdUser);
//           setToken(storedToken);
//         } else {
//           setidUser(null);
//           setToken(null);
//         }
//       }, [apartment]);
        
  
//     if (!apartment) {
//       return <p>No apartment details available.</p>;
//     }
  
//     const Mydelete = () => {
//         const confirmDelete = window.confirm("האם אתה בטוח שברצונך למחוק את הדירה?");
        
//         if (confirmDelete) {
//           // אם המשתמש מאשר, נווט לדף המחיקה
//           navigate("/delete", { state: { id: apartment._id } });
//         } else {
//           // אם המשתמש לא מאשר, לא נעשה שום דבר
//           console.log("מחיקה בוטלה");
//         }
//       };

//       const MyAdd=()=>{ navigate("/Add");}
     
  
//   return (
//     <div>
//       <h1>Apartment Details</h1>
//       <p>
//         <strong>Name:</strong> {apartment.NameApartment || "N/A"}
//       </p>
//       <p>
//         <strong>Description:</strong> {apartment.Description || "N/A"}
//       </p>
//       <p>
//         <strong>Image:</strong>
//         {apartment.Image ? (
//           <img
//             src={`/pic/${apartment.Image}`}
//             alt={apartment.NameApartment}
//             style={{ maxWidth: "300px", maxHeight: "200px", marginTop: "10px" }}
//           />
//         ) : (
//           "No image available"
//         )}
//       </p>
//       <p>
//         <strong>City:</strong> {cityName}
//       </p>
//       <p>
//         <strong>Address:</strong> {apartment.Adress || "N/A"}
//       </p>
//       <p>
//         <strong>Number of Beds:</strong> {apartment.NumBed || "N/A"}
//       </p>
//       <p>
//         <strong>Additives:</strong> {apartment.Additives || "N/A"}
//       </p>
//       <p>
//         <strong>Price:</strong> {apartment.Price ? `$${apartment.Price}` : "N/A"}
//       </p>
//       <div>
//         <h2>פרטי המפרסם</h2>
//         <p>
//           <strong>Home Phone:</strong>
//            {myDetails?.x.HomePhone}
//         </p>
//         <p>
//           <strong>Phone Number:</strong> 
//           {myDetails?.x.PhoneNumber}
//         </p>
//         <p>
//           <strong>Email:</strong>
//           {myDetails?.x.Email}
//         </p>
//       </div>
//       <img
//         src="/pic/4.jpg"
//         alt="Apartment Image"
//         style={{
//           maxWidth: "300px",
//           maxHeight: "200px",
//           marginTop: "10px",
//         }}
//       />
//        {idUser &&<div className="button-container">
//       <button className="action-button delete-btn"onClick={Mydelete}>
//         <FontAwesomeIcon icon={faTrashAlt}  /> 
//       </button>
//       <button className="action-button edit-btn" >
//         <FontAwesomeIcon icon={faEdit} /> 
//       </button>
//       <button className="action-button add-btn" onClick={MyAdd}>
//         <FontAwesomeIcon icon={faPlus} /> 
//       </button>
//     </div>}
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { advertiseById, CityById } from "../api";
import "../style.css";

export const Details = () => {
  const location = useLocation();
  const { apartment } = location.state || {};
  const [cityName, setCityName] = useState("Loading...");
  const [myDetails, setMyDetails] = useState(null);
  const [idUser, setidUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const getIconPath = (additive) => {
    switch (additive) {
      case "בריכה":
        return "/icons/piscina.png";
      case "מסעדה":
        return "/icons/restaurante.png";
      case "נדנדה":
        return "/icons/columpios.png";
      case "WiFi":
        return "/icons/wi-fi-gratis.png";
      case "מזגן":
        return "/icons/aire-acondicionado.png";
      case "בית כנסת":
        return "/icons/sinagoga.png";
      default:
        return "/icons/default-icon.png";
    }
  };

  useEffect(() => {
    if (apartment && apartment.CodeCity) {
      console.log(apartment.CodeCity)
      CityById(apartment.CodeCity)
     
        .then((response) => {
          console.log()
          if (response.data.City.CityName) {
            setCityName(response.data.City.CityName);
          } else {
            console.error("CityName not found in API response");
            setCityName("N/A");
          }
        })
        .catch(() => setCityName("N/A"));
    } else {
      setCityName("N/A");
    }
    console.log(cityName)

    if (apartment && apartment.CodeAdvertisement) {
      console.log(apartment.CodeAdvertisement)

      advertiseById(apartment.CodeAdvertisement)
        .then((x) => {
          if (x.data) {
            setMyDetails(x.data);
          } else {
            console.error("Advertiser data not found in API response");
            setMyDetails("N/A");
          }
        })
        .catch(() => setMyDetails("N/A"));
    }
  }, [apartment]);
  console.log(myDetails)

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedIdUser = sessionStorage.getItem("idUser");

    if (
      storedIdUser &&
      apartment?.CodeAdvertisement &&
      storedIdUser === String(apartment.CodeAdvertisement)
    ) {
      setidUser(storedIdUser);
      setToken(storedToken);
    } else {
      setidUser(null);
      setToken(null);
    }
  }, [apartment]);

  if (!apartment) {
    return <p>No apartment details available.</p>;
  }

  const Mydelete = () => {
    const confirmDelete = window.confirm("האם אתה בטוח שברצונך למחוק את הדירה?");
    
    if (confirmDelete) {
      // אם המשתמש מאשר, נווט לדף המחיקה
      navigate("/delete", { state: { id: apartment._id } });
    } else {
      // אם המשתמש לא מאשר, לא נעשה שום דבר
      console.log("מחיקה בוטלה");
    }
  };

  const MyAdd=()=>{ navigate("/Add");}

  return (
   
    <div className="details-wrapper">
      {/* Columna izquierda: Imagen y פרטי מפרסם */}
      <div className="left-image-container">
        <img
          src="/pic/mapa.png"
          alt="Side Illustration"
          className="left-image"
        />
        <div className="advertiser-details">
          <h3>פרטי מפרסם</h3>
          <p>טלפון: {myDetails?.x.HomePhone || "N/A"}</p>
          <p>פלאפון: {myDetails?.x.PhoneNumber || "N/A"}</p>
          <p>מייל: {myDetails?.x.Email || "N/A"}</p>
        </div>
      </div>

     
  
      {/* Columna derecha: Detalles */}
      <div className="details-container">
        <p className="my">פרטים נוספים</p>
        <img
          className="apartment-image"
          src={`/pic/${apartment.Image}`}
          alt={apartment.NameApartment}
        />
        <div className="details-info">
          <div className="details-section">
          <p>
  <strong style={{ color: "#131877" }}>שם:</strong> {apartment.NameApartment || "N/A"}
</p>

            <p>
            <strong style={{ color: "#131877" }}>תיאור:</strong> {apartment.Description || "N/A"}
            </p>
            <p>
            <strong style={{ color: "#131877" }}>עיר:</strong>{cityName}
            </p>
            <p>
            <strong style={{ color: "#131877" }}>כתובת:</strong> {apartment.Adress || "N/A"}
            </p>
          </div>
          <div className="details-section">
            <p>
            <strong style={{ color: "#131877" }}>מספר מיטות:</strong> {apartment.NumBed || "N/A"}
            </p>
            <p>
            <strong style={{ color: "#131877" }}>הוספות:</strong>{" "}
              {Array.isArray(apartment.Additives)
                ? apartment.Additives.join(", ")
                : apartment.Additives || "N/A"}
            </p>
            <div className="additives-icons">
              {apartment.Additives &&
                apartment.Additives.map((additive, index) => (
                  <img
                    key={index}
                    src={getIconPath(additive)}
                    alt={additive}
                    className="additive-icon"
                  />
                ))}
            </div>
            <p>
            <strong style={{ color: "#131877" }}>מחיר:</strong>{" "}
              {apartment.Price ? `$${apartment.Price}` : "N/A"}
            </p>

          </div>
        </div>
      </div>
  {  token&& idUser&&
      <div className="button-container">
      <button className="action-button delete-btn"onClick={Mydelete}>
        <FontAwesomeIcon icon={faTrashAlt}  /> 
      </button>
      <button className="action-button edit-btn" >
        <FontAwesomeIcon icon={faEdit} /> 
      </button>
      <button className="action-button add-btn" onClick={MyAdd}>
        <FontAwesomeIcon icon={faPlus} /> 
      </button>
    </div>}
     
    </div>
  
  );
};  