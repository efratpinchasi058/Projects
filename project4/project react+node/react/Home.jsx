import { useEffect, useState } from "react"
import { GetAllApartments } from "../api"
import { Card } from "./Card"
import '../style.css'
// import { Details } from "./Details"

export const Home = () => {

    // הגדרת מערך ששולף את כל המאמרים מהרידקס
    // const list = useSelector(x => x.article.list)

    const [list, setList] = useState([])
    // const [select, setSelect] = useState()

    // שליפה מהשרת של כל הכתבות
    // שמירה ברידקס
    // 
    // בעת טעינה
    useEffect(() => {
        GetAllApartments()
            .then(x => {
                console.log("Apartment:", x); // לבדוק מה מגיע מהשרת
                if (x.data ) {
                    setList(x.data); // שומר רק את מערך הערים
                } else {
                    console.error("Apartment data not found");
                    setList([]); // שמירה על ערך ריק במקרה של שגיאה
                }
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setList([]);
            })
    }, [])

    console.log(list);

    return ( 


//     <div>
//         {list.length>0 ?(
//     list.map((category,index) => (
//         <div key={index}> 
//         <p>{category.NameApartment}</p>
//         </div>
//     ))
// ):( 
//     <p>no</p>
// )}
//     </div>
<div className="cards">
{list.map(x => <Card apartment={x}></Card>)}
</div>
    
     
)}