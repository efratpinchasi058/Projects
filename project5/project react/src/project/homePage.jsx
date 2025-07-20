import { navigate, Outlet, useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addReturn, updateCarIsvacant, updateCarPrice } from "./Action";
import Swal from "sweetalert2";
export const Homepage = () => {
  const [itis, setItis] = useState('');
  const [showHiDiv, setShowHiDiv] = useState(false);
  const navigate = useNavigate();
  const rents = useSelector(state => state.rents);
  const cars = useSelector(state => state.cars);
  const dis = useDispatch();

  const lending = () => {
    navigate('/cars')
  }
  const return1 = async () => {
    const { value: orderNumber } = await Swal.fire({
      title: "Enter an order number",
      input: "text",
      inputAttributes: {
      autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    });
   // אם המשתמש לחץ על Cancel, orderNumber יהיה undefined
    if (!orderNumber) {
      Swal.showValidationMessage('You need to enter an order number!');
    } else {
      setItis(orderNumber); // עדכן את itis
      return2(orderNumber);  // קריאה לפונקציה return2 (אם יש צורך)
    }
  };

  const return2 = async (e) => {
    const codeR = rents.filter(x => e == x.rentCode)[0]
    // console.log(codeR)
    //תפס את מספר הרכב. זה מספר הרכב שהוחזר.
    const currentCarCode = codeR.licenseNumber;


    const now = new Date();
    const returnDate = now.toISOString().split('T')[0];
    const returnTime = now.toTimeString().split(' ')[0];

    const rentDate = codeR.rentDate
    const rentTime = codeR.rentTime

    const startDateTime = new Date(`${rentDate}T${rentTime}`);
    const endDateTime = new Date(`${returnDate}T${returnTime}`);
    const difference = endDateTime - startDateTime;
    const differenceInHours = difference / (1000 * 60 * 60);


    const thisCar = cars.filter(x => x.licenseNumber == currentCarCode)[0]
    const p = thisCar.pricePerHour * differenceInHours.toFixed(1);
    // alert("sum"+p)

    const result = await Swal.fire({
      html: "<h3>Use a credit card stored in the system?</h3>",
      title: "The amount to be paid is: " + p + "₪",
      icon: "question",
      confirmButtonText: "yes",
      cancelButtonText: "no",
      showCancelButton: true,
      showCloseButton: true
    });
    if (result.isConfirmed) {
      // אם נלחץ על yes, מראה את ה-dib

      // אם נלחץ על no, מציג התראה
      Swal.fire('success', 'The deal was approved!', 'success')
    } else if (result.isDismissed) {
      setShowHiDiv(false);
      navigate('/Pay')
    }
    const newReturn = {
      "rentCode": e,
      "returnDate": returnDate,
      "returnTime": returnTime,
      "AmountToPay": p,
      "paied": true,
    }

    dis(addReturn(newReturn))
    dis(updateCarIsvacant(currentCarCode, 'true'));
  };
  return <>
    <div className='news'>
      <h1 className='marquee'>|Comfortable vehicles   |    good prices  |  Good service
        |  A wide variety of vehicles  |
      </h1>
    </div>
    <div id="down">
      <img id="f" src={`${process.env.PUBLIC_URL}/pictures/fuel1.PNG`}></img>
      <div id="up">
        <button id="return1" onClick={return1}>return</button>
        <button id="lend1" onClick={lending}>rent</button>
      </div>
    </div>
  </>
}
