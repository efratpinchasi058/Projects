// // import { getall } from "../api";
// // import { useEffect, useState } from "react";
// // import { NavLink } from 'react-router-dom';
// // import "../style.css"; // Importamos el CSS

// // export const Nav = () => {
// //   const [list, setList] = useState([]); // Estado para las categorías

// //   // Fetch de datos al montar el componente
// //   useEffect(() => {
// //     getall()
// //       .then((x) => {
// //         console.log("Response:", x); 
// //         if (x.data && x.data.Category) {
// //           setList(x.data.Category); // Guardamos las categorías en el estado
// //         } else {
// //           console.error("Category data not found");
// //           setList([]);
// //         }
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching data:", err);
// //         setList([]);
// //       });
// //   }, []);

// //   return (
// //     <nav className="nav-container">
// //       {/* Logo */}
// //       <div className="nav-logo">MiLogo</div>

// //       {/* Categorías */}
// //       <ul className="nav-links">
// //         {list.length > 0 ? (
// //           list.map((category, index) => (
// //             <li key={index} className="nav-item">
// //             {/* <NavLink to={'card'}>  {category.CategoryName}</NavLink> */}
// //             {/* <NavLink to={`/card/${category.id}`}> */}
// //                 {category.CategoryName}
// //               {/* </NavLink> */}
// //             </li>
// //           ))
// //         ) : (
// //           <li className="nav-item">Loading...</li>
// //         )}
// //       </ul>

// //       {/* Botón Register */}
// //       <div className="nav-register">
// //         <a href="#" className="register-button">
// //           Register
// //         </a>
// //       </div>
// //     </nav>
// //   );
// // };
// import { getall } from "../api";
// import { useEffect, useState } from "react";
// import { NavLink } from 'react-router-dom';
// import "../style.css"; // Importamos el CSS

// export const Nav = () => {
//   const [list, setList] = useState([]); // Estado para las categorías
//   const [showAlert, setShowAlert] = useState(false); // Estado para el alert

//   // Fetch de datos al montar el componente
//   useEffect(() => {
//     getall()
//       .then((x) => {
//         console.log("Response:", x); 
//         if (x.data && x.data.Category) {
//           setList(x.data.Category); // Guardamos las categorías en el estado
//         } else {
//           console.error("Category data not found");
//           setList([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setList([]);
//       });
//   }, []);

//   const handleRegisterClick = (e) => {
//     e.preventDefault(); // Para prevenir el comportamiento por defecto del enlace
//     setShowAlert(true);
//   };

//   const handleCloseAlert = () => {
//     setShowAlert(false);
//   };

//   return (
//     <>
//       <nav className="nav-container">
//         {/* Logo */}
//         <div className="nav-logo">MiLogo</div>

//         {/* Categorías */}
//         <ul className="nav-links">
//           {list.length > 0 ? (
//             list.map((category, index) => (
//               <li key={index} className="nav-item">
//                 {/* <NavLink to={'card'}>  {category.CategoryName}</NavLink> */}
//                 {/* <NavLink to={`/card/${category.id}`}> */}
//                   {category.CategoryName}
//                 {/* </NavLink> */}
//               </li>
//             ))
//           ) : (
//             <li className="nav-item">Loading...</li>
//           )}
//         </ul>

//         {/* Botón Register */}
//         <div className="nav-register">
//           <a href="#" className="register-button" onClick={handleRegisterClick}>
//             Register
//           </a>
//         </div>
//       </nav>

//       {/* Alert personalizado */}
//       {showAlert && (
//         <div className="overlay">
//           <div className="custom-alert">
//             <h2>Alert Title</h2>
//             <p>This is a custom alert message.</p>
//             <button onClick={handleCloseAlert}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
import { getall ,Adduser,Loginuser} from "../api";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style.css"; // Importamos el CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export const Nav = () => {
  const [list, setList] = useState([]); // Estado para las categorías
  const [showAlert, setShowAlert] = useState(false); // Estado para el alert
  const[ showAlert2,setShowAlert2] = useState(false); //
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    homePhone: "",
  });
  const [formValues2, setFormValues2] = useState({
    email: "",
    password: "",
   
  });
 

  // Fetch de datos al montar el componente
  useEffect(() => {
    getall()
      .then((x) => {
        console.log("Response:", x);
        if (x.data && x.data.Category) {
          setList(x.data.Category); // Guardamos las categorías en el estado
        } else {
          console.error("Category data not found");
          setList([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setList([]);
      });
  }, []);
 
    

  const handleRegisterClick = (e) => {
    e.preventDefault(); // Para prevenir el comportamiento por defecto del enlace
    setShowAlert(true);
  };
  const handleLoginClick=(e)=>{
    e.preventDefault(); 
    setShowAlert2(true);
  }

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleInputChange2= (e) => {
    const { name, value } = e.target;
    setFormValues2({
      ...formValues2,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
    const { email, phoneNumber, homePhone } = formValues;

  // בדיקת תקינות של המייל
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert("המייל שצוין אינו תקין");
    return;
  }

  // בדיקת טלפון נייד (10 תווים)
  if (!/^\d{10}$/.test(phoneNumber)) {
    alert("מספר הטלפון צריך להיות 10 תווים.");
    return;
  }

  // בדיקת טלפון לבית (עד 9 תווים)
  if (!/^\d{1,9}$/.test(homePhone)) {
    alert("מספר הטלפון לבית צריך להיות עד 9 תווים.");
    return;
  }

  
    
    // מיפוי לשמות שדות מתאימים
    const mappedData = {
      Email: formValues.email,
      Password: formValues.password,
      PhoneNumber: formValues.phoneNumber,
      HomePhone: formValues.homePhone,
    };
    console.log(mappedData)
    Adduser(mappedData);
    
    setShowAlert(false);
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues2);
    const { email, password} = formValues2;

  // בדיקת תקינות של המייל
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert("המייל שצוין אינו תקין");
    return;
  }

 
    // מיפוי לשמות שדות מתאימים
    const mappedData2 = {
      Email: formValues2.email,
      Password: formValues2.password,
     
    };
    console.log(mappedData2)
    
    Loginuser(mappedData2);
    
    setShowAlert2(false);
  };

// חדש להעביר לכולם



  return (
    <>
      <nav className="nav-container">
        {/* Logo */}
        <div className="nav-logo"><img src="p2logoo.png" height="160vh" /></div>

        {/* Categorías */}
        <ul className="nav-links">
          {list.length > 0 ? (
            list.map((category, index) => (
        
          
            <li key={index} className="nav-item">
            <NavLink 
              to="/category"
              state={{ categoryId:category._id}}
              className="nav-link"
            >
              
              {category.CategoryName}
            </NavLink>
          </li>
            ))
          ) : (
            <li className="nav-item">Loading...</li>
          )}
        </ul>

        {/* Botón Register */}
        {/* <div className="nav-register">
          <a href="#" className="register-button" onClick={handleRegisterClick}>
            הרשמה
          </a>
        
        
          <a href="#" className="register-button" onClick={handleLoginClick}>
            התחברות
          </a>
        </div> */}
        {/* <div className="nav-register">
  <a href="#" className="register-button" onClick={handleRegisterClick}>
    <i className="fas fa-user-plus"></i> הרשמה
  </a>

  <a href="#" className="register-button" onClick={handleLoginClick}>
    <i className="fas fa-sign-in-alt"></i> התחברות
  </a>
</div> */}
<div className="nav-register">
  <a href="#" className="register-button" onClick={handleRegisterClick}>
    <FontAwesomeIcon icon={faUserPlus} /> 
  </a>
  <a href="#" className="register-button" onClick={handleLoginClick}>
    <FontAwesomeIcon icon={faSignInAlt} /> 
  </a>
</div>

      </nav>

      {/* Alert personalizado */}
      {showAlert && (
  <div className="overlay">
    <div className="register-container">
      {/* Imagen al lado del formulario */}
      <div className="register-image">
        <img src="p2logoo.png" alt="Imagen decorativa" />
      </div>

      <div className="register-alert">
        <h2>הרשמה לאתר הדירות</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label>Home Phone:</label>
            <input
              type="tel"
              name="homePhone"
              value={formValues.homePhone}
              onChange={handleInputChange}
              placeholder="Enter your home phone"
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">
              שלח
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCloseAlert}
            >
              ביטול
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

{showAlert2 && (
  <div className="overlay">
    <div className="register-container">
      <div className="register-image">
        <img src="p2logoo.png" alt="Imagen decorativa" />
      </div>
      <div className="register-alert">
        <h2>התחברות לאתר הדירות</h2>
        <form onSubmit={handleSubmit2}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formValues2.email}
              onChange={handleInputChange2}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formValues2.password}
              onChange={handleInputChange2}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">
              שלח
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setShowAlert2(false)}
            >
              ביטול
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}
  </>
  );
};