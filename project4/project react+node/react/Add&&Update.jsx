
import React, { useState,useEffect } from 'react';
import "../style.css"
import { AllCity ,getall,AddApartment} from '../api';

export const Add=()=> {
  const [formData, setFormData] = useState({
    nameApartment: '',
    description: '',
    image: '',
    codeCategory: '',
    codeCity: '',
    adress: '',
    numBed: '',
    additives: [],
    price: '',
    codeAdvertisement: '',
  });
  const [list, setList] = useState([]);
  const [f,setF] = useState([]);

  const [filePreview, setFilePreview] = useState(null); // תצוגה מקדימה של התמונה
  const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        console.log(file.name)
        if (file) {
          setFilePreview(URL.createObjectURL(file)); // תצוגה מקדימה
          setFormData((prevFormData) => ({
            ...prevFormData,
            image: file.name, // שמירת התמונה בנתוני הטופס
          }));
        }
      };
  // שליפת הערים מ-sessionStorage
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

  useEffect(() => {
    getall()
      .then((x) => {
        console.log("Response:", x);
        if (x.data && x.data.Category) {
            setF(x.data.Category); // Guardamos las categorías en el estado
        } else {
          console.error("Category data not found");
          setF([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setF([]);
      });
  }, []);
  console.log(f);
  
  // בדיקת הערך של list.city לפני השימוש בו
  const cccc = list.city || []; // אם list.city אינו מוגדר, נשתמש במערך ריק
  console.log(cccc);
  // יצירת מערך שמות הערים
  const cityNames = cccc.map((city) => city.CityName);
  // sessionStorage.setItem("cityNames", JSON.stringify(cityNames));
  
  console.log("cityNames:", cityNames);
  

// const[chedva,setchedva] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        additives: checked
          ? [...prevState.additives, value]
          : prevState.additives.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("mkmkmk")
  
    // שליפת ה-ID מה-Session Storage
    const idUser = sessionStorage.getItem("idUser");
  
    if (idUser) {
        const updatedFormData = {
          ...formData,
          codeAdvertisement: idUser,
        }  
        console.log(updatedFormData)
        const objUpperCase = Object.keys(updatedFormData).reduce((acc, key) => {
            const newKey = key.replace(/^([a-z])/, (match) => match.toUpperCase()); // המרת האות הראשונה לגדולה
            acc[newKey] = updatedFormData[key]; // שמירת הערך עם המפתח החדש
            return acc;
          }, {});
          
          console.log(objUpperCase);
          
        AddApartment(objUpperCase)
        
    };
    
      
      // כאן ניתן להוסיף את הקוד לשליחת הנתונים לשרת
      // למשל fetch או axios
    
  };

  const handleCityClick = (selectedCityName) => {
    const selectedCity = cccc.find((city) => city.CityName === selectedCityName);
    if (selectedCity) {
      console.log("Selected City:", selectedCity); // הדפסת העיר הנבחרת
      console.log("Selected City ID:", selectedCity._id);
  
      // עדכון השדה codeCity ב-formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        codeCity: selectedCity._id, // עדכון ה-ID של העיר הנבחרת
      }));
    } else {
      console.log("City not found in cccc");
    }
  };
  const handleCategoryChange = (selectedCategoryId) => {
    const selectedCategory = f.find((category) => category._id === selectedCategoryId);
    if (selectedCategory) {
      console.log("Selected Category:", selectedCategory); // הדפסת הקטגוריה הנבחרת
      console.log("Category ID:", selectedCategory._id); // הדפסת ה-ID של הקטגוריה
    }
  };
  
  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={handleSubmit} className='add-apartment-form'>
          <p className="my1">פרסם באתר</p>

          <fieldset>
            <label htmlFor="nameApartment">שם הדירה:</label>
            <input
              type="text"
              id="nameApartment"
              name="nameApartment"
              value={formData.nameApartment}
              onChange={handleChange}
            />

            <label htmlFor="numBed">מספר מיטות:</label>
            <input
              type="number"
              id="numBed"
              name="numBed"
              value={formData.numBed}
              onChange={handleChange}
            />

            <label htmlFor="price">מחיר:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="description">תיאור הדירה:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            {/* <label htmlFor="image">תמונה (URL):</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
            /> */}
            <label htmlFor="image">העלה תמונה:</label>
            <input
              type="file"
              id="imageFile"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />

            {filePreview && (
              <div>
                <p>תצוגה מקדימה של התמונה:</p>
                <img src={filePreview} alt="תצוגה מקדימה" style={{ maxWidth: "200px" }} />
              </div>
            )}

            <label htmlFor="codeCategory">קטגוריה:</label>
<select
  id="codeCategory"
  name="codeCategory"
  value={formData.codeCategory} // שומר את ה-ID של הקטגוריה
  onChange={(e) => {
    const selectedCategoryId = e.target.value; // ה-ID של הקטגוריה שנבחרה
    setFormData((prevFormData) => ({
      ...prevFormData,
      codeCategory: selectedCategoryId, // עדכון השדה עם ה-ID
    }));
    handleCategoryChange(selectedCategoryId); // קריאה לפונקציה נוספת
  }}
>
  <option value="">בחר קטגוריה</option>
  {f.length > 0 ? (
    f.map((category) => (
      <option key={category._id} value={category._id}>
        {category.CategoryName} {/* מציג את השם בתפריט */}
      </option>
    ))
  ) : (
    <option disabled>אין קטגוריות זמינות</option>
  )}
</select>

<label htmlFor="codeCity">עיר:</label>
<select
  id="codeCity"
  name="codeCity"
  value={formData.codeCity} 
  // הערך שנבחר (ID של העיר)
  onChange={(e) => {
    const selectedCityName = e.target.value; // שם העיר שנבחרה
    handleCityClick(selectedCityName); // קריאה לפונקציה
  }}
>
  <option value="">בחר עיר</option>
  {cityNames.length > 0 ? (
    cityNames.map((city, index) => (
      <option key={index} value={city}  
      >
        {city}
      </option>
    ))
  ) : (
    <option disabled>אין ערים זמינות</option>
  )}
</select>


           <label htmlFor="adress">כתובת:</label>
            <input
              type="text"
              id="adress"
              name="adress"
              value={formData.adress}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <label>תוספות:</label>
            <input
              type="checkbox"
              id="wifi"
              value="Wi-Fi"
              name="wifi"
              checked={formData.additives.includes('Wi-Fi')}
              onChange={handleChange}
            />
            <label className="light" htmlFor="wifi">
              Wi-Fi
            </label>
            <br />
            <input
              type="checkbox"
              id="pool"
              value="Pool"
              name="pool"
              checked={formData.additives.includes('Pool')}
              onChange={handleChange}
            />
            <label className="light" htmlFor="pool">
              Pool
            </label>
            <br />
            <input
              type="checkbox"
              id="parking"
              value="Parking"
              name="parking"
              checked={formData.additives.includes('Parking')}
              onChange={handleChange}
            />
            <label className="light" htmlFor="parking">
              Parking
            </label>
          </fieldset>
          <button className="l"type="submit">פרסם דירה</button>
        </form>
      </div>
    </div>
  );
}
// import React, { useState, useEffect } from 'react';
// import "../style.css"
// import { AllCity, getall, AddApartment } from '../api';

// export const Add = () => {
//   const [formData, setFormData] = useState({
//     nameApartment: '',
//     description: '',
//     image: '',
//     codeCategory: '',
//     codeCity: '',
//     adress: '',
//     numBed: '',
//     additives: [],
//     price: '',
//     codeAdvertisement: '',
//   });
//   const [list, setList] = useState([]);
//   const [f, setF] = useState([]);
//   const [filePreview, setFilePreview] = useState(null); // תצוגה מקדימה של התמונה

//   useEffect(() => {
//     AllCity()
//       .then((y) => {
//         if (y.data) {
//           setList(y.data);
//         } else {
//           setList([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setList([]);
//       });
//   }, []);

//   useEffect(() => {
//     getall()
//       .then((x) => {
//         if (x.data && x.data.Category) {
//           setF(x.data.Category);
//         } else {
//           console.error("Category data not found");
//           setF([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setF([]);
//       });
//   }, []);

//   const cccc = list.city || [];
//   const cityNames = cccc.map((city) => city.CityName);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFilePreview(URL.createObjectURL(file)); // תצוגה מקדימה
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         image: file, // שמירת התמונה בנתוני הטופס
//       }));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setFormData((prevState) => ({
//         ...prevState,
//         additives: checked
//           ? [...prevState.additives, value]
//           : prevState.additives.filter((item) => item !== value),
//       }));
//     } else {
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const idUser = sessionStorage.getItem("idUser");

//     if (idUser) {
//       const updatedFormData = {
//         ...formData,
//         codeAdvertisement: idUser,
//       };

//       const objUpperCase = Object.keys(updatedFormData).reduce((acc, key) => {
//         const newKey = key.replace(/^([a-z])/, (match) => match.toUpperCase());
//         acc[newKey] = updatedFormData[key];
//         return acc;
//       }, {});

//       AddApartment(objUpperCase);
//     }
//   };

//   return (
//     <div className="row">
//       <div className="col-md-12">
//         <form onSubmit={handleSubmit} className='add-apartment-form'>
//           <h1>פרסם באתר</h1>

//           <fieldset>
//             <label htmlFor="nameApartment">שם הדירה:</label>
//             <input
//               type="text"
//               id="nameApartment"
//               name="nameApartment"
//               value={formData.nameApartment}
//               onChange={handleChange}
//             />

//             <label htmlFor="numBed">מספר מיטות:</label>
//             <input
//               type="number"
//               id="numBed"
//               name="numBed"
//               value={formData.numBed}
//               onChange={handleChange}
//             />

//             <label htmlFor="price">מחיר:</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//             />
//           </fieldset>

//           <fieldset>
//             <label htmlFor="description">תיאור הדירה:</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//             />

//             <label htmlFor="image">העלה תמונה:</label>
//             <input
//               type="file"
//               id="imageFile"
//               name="image"
//               accept="image/*"
//               onChange={handleFileChange}
//             />

//             {filePreview && (
//               <div>
//                 <p>תצוגה מקדימה של התמונה:</p>
//                 <img src={filePreview} alt="תצוגה מקדימה" style={{ maxWidth: "200px" }} />
//               </div>
//             )}
//           </fieldset>

//           <button className="l" type="submit">פרסם דירה</button>
//         </form>
//       </div>
//     </div>
//   );
// };


