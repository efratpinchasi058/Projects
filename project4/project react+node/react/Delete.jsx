// import { useLocation } from "react-router-dom";
// import {MyDelete} from '../api'
// import React, { useState, useEffect } from "react";

// export const Delete = () => {

    
//   const location = useLocation();
//   const [select, setSelect] = useState(null);
  
//   const { id } = location.state || {};
//   useEffect(() => {
//     // קריאת שרת
//     MyDelete(id)
    
//         .then(x => {
//             console.log(x.data);
//             setSelect(x.data)
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }, [])
// // ;    

//   console.log(select);

 
// };
import { useLocation, useNavigate } from "react-router-dom";
import { MyDelete } from '../api'
import React, { useState, useEffect } from "react";

export const Delete = () => {
  const navigate = useNavigate(); // הוספת useNavigate
  const location = useLocation();
  const [select, setSelect] = useState(null);
  
  const { id } = location.state || {};

  useEffect(() => {
    if (id) {
      // קריאת שרת כדי למחוק את הדירה
      MyDelete(id)
        .then(x => {
          console.log(x.data);
          setSelect(x.data);
          
          // אחרי המחיקה, לנווט לדף הבית
          navigate("/"); // זה מנחה את המשתמש לדף הבית
        })
        .catch(err => {
          console.log(err);
          // במקרה של שגיאה, אפשר לניווט לדף אחר או להציג הודעת שגיאה
        });
    }
  }, [id, navigate]); // דאג שהפונקציה תתעדכן אם id משתנה

  // אם צריך, ניתן להציג הודעה בזמן שהנתונים טוענים, למשל:
  if (!select) {
    return <p>מחיקת הדירה... אנא המתן.</p>;
  }

  return <p>הדירה נמחקה בהצלחה!</p>;  // תוכל להציג את התוצאה לאחר המחיקה
};

