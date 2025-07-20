// import { useLocation } from 'react-router-dom';
// import {filter} from '../api'
// import React, { useState, useEffect } from "react";
// import {Card} from './Card';


// export const Filter = () => 
//     {
//             const location = useLocation(); // קבלת המיקום
//             const params = location.state; // קבלת הנתונים שנשלחו
//             const [list,setList]=useState()
          
//             console.log('Received parameters:', params);

//           useEffect(() => {
//             filter(params)
//             // console.log('Received parameters:', params)
//               .then((y) => {
//                 if (y.data) {
//                   setList(y.data); // שמירת המידע שהתקבל
//                 } else {
//                   setList({}); // אם אין נתונים, נשאיר את המערך ריק
//                 }
//               })
//               .catch((err) => {
//                 console.error("Error fetching data:", err);
//                 setList({}); // במקרה של שגיאה, המערך יהיה ריק
//               });
//           }, [params]);
//           console.log(list)
//         return <>
//           <div className="cards">
//           {list.map(x => <Card apartment={x}></Card>)}
//           </div>
//           {/* <div>
//             <p>jhj</p>
//           </div> */}
//         </>


//     };
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {filter} from '../api'
import {Card} from './Card';


// export const Filter = () => {
//   const location = useLocation();
//   const [list, setList] = useState([]);
//   const [params, setParams] = useState(() => {
//     // אם יש נתונים ב-localStorage, השתמש בהם, אחרת קח את הנתונים מ-location.state
//     const savedParams = localStorage.getItem('searchParams');
//     return savedParams ? JSON.parse(savedParams) : location.state || {};
//   });

//   console.log('Received parameters:', params);

//   useEffect(() => {
//     // אם params לא ריק, אז תבצע את הקריאה ל-API
//     if (params && Object.keys(params).length > 0) {
//       filter(params)
//         .then((y) => {
//           if (y.data) {
//             setList(y.data);
//           } else {
//             setList([]);
//           }
//         })
//         .catch((err) => {
//           console.error('Error fetching data:', err);
//           setList([]);
//         });
//     }
//   }, [params]);

//   console.log(list);

//   return (
//     <>
//       <div className="cards">
//         {list.length > 0 ? (
//           list.map((x) => <Card key={x.id} apartment={x} />)
//         ) : (
//           <p>No apartments found</p>
//         )}
//       </div>
//     </>
//   );
// };


// export const Filter = () => {
//   const location = useLocation();
//   const [list, setList] = useState([]);
//   const [params, setParams] = useState(() => {
//     // אם יש נתונים ב-localStorage, השתמש בהם, אחרת קח את הנתונים מ-location.state
//     const savedParams = localStorage.getItem('searchParams');
//     return savedParams ? JSON.parse(savedParams) : location.state || {};
//   });

//   // מעקב אחרי שינויים ב-location.state
//   useEffect(() => {
//     if (location.state) {
//       setParams(location.state); // עדכון params בכל שינוי ב-state של המיקום
//       localStorage.setItem('searchParams', JSON.stringify(location.state)); // שמירה ב-localStorage
//     }
//   }, [location.state]);

//   useEffect(() => {
//     if (params && Object.keys(params).length > 0) {
//       filter(params)
//         .then((y) => {
//           if (y.data) {
//             setList(y.data);
//           } else {
//             setList([]);
//           }
//         })
//         .catch((err) => {
//           console.error('Error fetching data:', err);
//           setList([]);
//         });
//     }
//   }, [params]); // הפעלה מחדש כש-params משתנה

//   return (
//     <>
//       <div className="cards">
//         {list.length > 0 ? (
//           list.map((x) => <Card key={x.id} apartment={x} />)
//         ) : (
//           <p>No apartments found</p>
//         )}
//       </div>
//     </>
//   );
// };
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { filter } from "./path/to/your/api"; // שים את ה-import של הפונקציה filter שלך
// import Card from "./Card"; // שים את ה-import של רכיב ה-Card שלך

export const Filter = () => {
  const location = useLocation();
  const [list, setList] = useState([]); // שמירת רשימת הדירות
  const [params, setParams] = useState(() => {
    // אם יש נתונים ב-localStorage, השתמש בהם, אחרת קח את הנתונים מ-location.state
    const savedParams = localStorage.getItem('searchParams');
    return savedParams ? JSON.parse(savedParams) : { CodeCity: '', NumBed: 0, Price: 0 }; // ברירת מחדל
  });

  // מעקב אחרי שינויים ב-location.state
  useEffect(() => {
    console.log('location.state:', location.state); // לראות את הערכים שמתקבלים מ-location.state
    if (location.state) {
      setParams(location.state); // עדכון params בכל שינוי ב-state של המיקום
      localStorage.setItem('searchParams', JSON.stringify(location.state)); // שמירה ב-localStorage
    }
  }, [location.state]);

  // קריאה ל-API בהתאם ל-params
  useEffect(() => {
    if (params && Object.keys(params).length > 0) {
      console.log('params changed:', params); // לראות שהparams משתנים
      filter(params) // כאן אנחנו שולחים את ה-params ל-API
        .then((y) => {
          if (y.data) {
            setList(y.data); // שמירת הנתונים שהתקבלו
          } else {
            setList([]); // אם אין תוצאות, נשאיר את המערך ריק
          }
        })
        .catch((err) => {
          console.error('Error fetching data:', err); // טיפול בשגיאות
          setList([]); // במקרה של שגיאה, נשאיר את המערך ריק
        });
    }
  }, [params]); // הפעלה מחדש כש-params משתנה

  return (
    <>
      <div className="cards">
        {list.length > 0 ? (
          list.map((x) => <Card key={x.id} apartment={x} />) // הצגת הדירות
        ) : (
          <p>No apartments found</p> // הודעה אם לא נמצאו דירות
        )}
      </div>
    </>
  );
};
