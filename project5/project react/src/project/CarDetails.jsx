import swal from "sweetalert2";
//import { navigate, Outlet, useNavigate } from "react-router";
import "./car.css"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addRent,updateCarIsvacant,updateCarPrice } from "./Action";
import { useState } from "react";
export const Cardetails=()=>{
    const { it } = useParams();
    const dis = useDispatch();
    const cars = useSelector(state => state.cars); 
  
    const findCar = cars.find((element) => element.codeCars === it)
    // console.log(findCar)
    const model=useSelector(x=>x.carModels)
    const m=model.filter(x=>x.modelCode==findCar.modelCode)[0]

    const type=useSelector(x=>x.cartype)
    const t=type.filter(x=>x.codeType==findCar.codeType)[0]

   
   const initialText = findCar.isvacant === 'true' ? 'available' : 'not available';
    const [buttonText, setButtonText] = useState(initialText);
    const [isDisabled, setIsDisabled] = useState(findCar.isvacant === 'false');
    const currentUser = useSelector(x => x.currentUser)
     const orderCar=()=>{
     
      setButtonText('not available');
      setIsDisabled(true);
     
         const now = new Date();
         const rentDate = now.toISOString().split('T')[0];
         const rentTime = now.toTimeString().split(' ')[0];

         const newRent = {
             "rentCode": Math.floor(100000 + Math.random() * 900000),
            "passwordId": currentUser.password,
             "licenseNumber": findCar.licenseNumber,
             "rentDate": rentDate,
             "rentTime": rentTime,
             }
   
         swal.fire({
            icon: "success",
            title: "Order Number:"+newRent.rentCode,
            showConfirmButton: true,
            timer: 3500
          });
         dis(addRent(newRent))
         dis(updateCarIsvacant(findCar.licenseNumber, 'false'));
        
 }
    return (
       <div  id="container1">
        <div className="half1">
        <p id="title">{`${m.company} ${m.model}`}</p>
             <img src={`${process.env.PUBLIC_URL}/pictures/${findCar.Image}`} id="e"  className="imgBigCar"></img> 
         </div>
         <div className="half2">
            <p>type car: {t.Description} </p><br></br>
            <p>number of places: {findCar.Numberofplaces} </p><br></br>
            <p>yearbook:{findCar.yearbook}</p><br></br>
            <p >
                {findCar.AutomaticOrManual ? 'automatic' : 'manual'}</p><br></br>

            <p>consumption per kilometer: {findCar.ConsumptionPerKilometer}</p><br></br>
            <p>balance in liters: {findCar.BalanceInLiters}</p><br></br>
            <p>price per hour: {findCar.pricePerHour}₪</p><br></br>
            <button 
                 id="lend" 
                 variant="primary" 
                 onClick={orderCar} 
                 disabled={isDisabled}
             >
                 {buttonText}
           </button>
         </div>
       </div>
    );
 }