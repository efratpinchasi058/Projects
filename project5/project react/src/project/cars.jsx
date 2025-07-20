import { useSelector } from "react-redux"
import "./car.css"
import { useState } from "react";
import {Card} from './Card'


export const Cars=()=>{

    const temp = useSelector(x => x.cars)
    const temp1 = useSelector(x => x.carModels)
    const [cares, setCares] = useState(temp)
    const cities = ['Tel-Aviv', 'jerusalem', 'kiryat-yearim','lod']
    const all=['allCars']
    const Numberofplaces=['5','7','9']  
    const pricePerHour=['50','60','70']
    const cars = useSelector(x => x.cars)
    const set = (e) => {
        //כל הרכבים
         if (all.find(x => x === e)) {
            setCares(temp)}
            //ערים
         else if (cities.find(x => x === e)) {
            setCares(temp.filter(x => x.city == e && x.isvacant == 'true'))
          }
          else if (Numberofplaces.find(x => x === e)) {
            setCares(temp.filter(x => x.Numberofplaces == e && x.isvacant == 'true'))
          }
          else if (pricePerHour.find(x => x === e)) {
            setCares(temp.filter(x => x.pricePerHour == e && x.isvacant == 'true'))
          }
          
    
    }
        return<>
        <select  onChange={(e) =>set(e.target.value)}>
      <option selected >filter by</option>
      <option>allCars</option>
      <optgroup  label="city">
        <option>Tel-Aviv</option>
        <option> jerusalem</option>
        <option>kiryat-yearim</option>
        <option>lod</option>
        </optgroup>
        <optgroup  label="Numberofplaces">
        <option>5</option>
        <option> 7</option>
        <option>9</option>
        </optgroup>
           <optgroup  label="pricePerHour">
        <option>50</option>
        <option> 60</option>
        <option>70</option>
        <option>80</option>
        <option>90</option>
        </optgroup>
       
        
      
    </select>
    {cares.map(i=><Card myCar={i} key={i.codeCars}></Card>)}
    </> 
}