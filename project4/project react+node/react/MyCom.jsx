
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApartmentByCdeCategory } from "../api";
import { Card } from "./Card";

export const MyCom = () => {
  const location = useLocation();
  const [select, setSelect] = useState([]); // מערך לדירות שנבחרו
  const { categoryId } = location.state || {}; 

  useEffect(() => {
    if (categoryId) { // בדיקה אם יש categoryId
      ApartmentByCdeCategory(categoryId)
        .then((y) => {
          if (y.data) {
            setSelect(y.data); // שמירת המידע שהתקבל
          } else {
            setSelect([]); // אם אין נתונים, נשאיר את המערך ריק
          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setSelect([]); // במקרה של שגיאה, המערך יהיה ריק
        });
    }
  }, [categoryId]); // הוספת categoryId לתלות

  return (
    <div className="cards">
      {select.map((x) => (
        <Card key={x._id} apartment={x} /> // הוספת key ייחודי לדירות
      ))}
    </div>
  );
};
