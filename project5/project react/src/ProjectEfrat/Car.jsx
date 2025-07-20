import { useSelector } from "react-redux"
import { Card } from './Card'
import { useState } from "react"
export const Car =()=>{
    const temp=useSelector(x=>x.cars)
    const [cars, setCars] = useState(temp)
    return <>
      
        {  cars.map(i =><Card myCar={i} key={i.codeCars}></Card>)}
     </>
}