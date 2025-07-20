import {  Outlet, useNavigate } from "react-router";
import "./Pay.css"
import Swal from "sweetalert2";
import { useState } from "react";
export const Pay=()=>{


const [errors, setErrors] = useState({});
 // בדיקות תקינות  
 const checkName = (value) => {
    // ביטוי רגולרי המאפשר שימוש באותיות עבריות ואנגליות
    let nameRegex = /^[א-תA-Za-z]{2,20}$/;
    if (!value.match(nameRegex)) {
        setErrors(prevErrors => ({ ...prevErrors, name: 'The name must be between 2 and 20 characters in English or Hebrew.'}));
    } else {
        setErrors(prevErrors => ({ ...prevErrors, name: '' })); // מסיר שגיאה אם הקלט תקין
    }
};

const checkCardNumber = (value) => {
    let cardNumberRegex = /^[0-9]{16}$/;
    if (!cardNumberRegex.test(value)) {
        setErrors(prevErrors => ({ ...prevErrors, cardNumber: 'Credit card number must contain 16 digits!'}));
    } else {
        setErrors(prevErrors => ({ ...prevErrors, cardNumber: '' }));
    }
};


const checkCVV = (value) => {
    let cvvRegex = /^[0-9]{3,4}$/;
    if (!cvvRegex.test(value)) {
        setErrors(prevErrors => ({ ...prevErrors, cvv: 'CVV must contain 3 or 4 digits!'}));
    } else {
        setErrors(prevErrors => ({ ...prevErrors, cvv: '' }));
    }
};
const checkDateEnd = (value) => {
    let dateEndRegex = /^(0[1-9]|1[0-2])\/(2[0-9]{3})$/;
    if (!dateEndRegex.test(value)) {
        setErrors(prevErrors => ({ ...prevErrors, dateEnd: 'Invalid date'
}));
    } else {
        setErrors(prevErrors => ({ ...prevErrors, dateEnd: '' }));
    }
}; 
const navigate=useNavigate()

const isok=()=>{
    Swal.fire('success','The deal was approved!','success')
    navigate('/Home')
}
return <>
<form className="payment-form">
                                <label htmlFor="cardNumber">Credit card number</label>
                                {/* <input type="text" id="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" /> */}
                                <input type="text" id="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" onChange={(e) => checkCardNumber(e.target.value)} required />
                                <p id="s">{errors.cardNumber}</p>


                                <label htmlFor="expiryDate">validity</label>
                                {/* <input type="text" id="expiryDate" placeholder="MM/YY" /> */}
                                <input type="text" id="dateEnd" placeholder="MM/YY" onChange={(e) => checkDateEnd(e.target.value)} required />
                                <p  id="s">{errors.dateEnd}</p>


                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" placeholder="input cvv" onChange={(e) => checkCVV(e.target.value)} required />
                                <p  id="s">{errors.cvv}</p>

                                <label htmlFor="nameOnCard">Name </label>

                                <input id="username" name="username" placeholder="Name" onChange={(e) => checkName(e.target.value)} required />
                                <p  id="s">{errors.username}</p>

                                <button type="button" className="booking-button"onClick={isok} >which </button>
                            </form>
                            </>}