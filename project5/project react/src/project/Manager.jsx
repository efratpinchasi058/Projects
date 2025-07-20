
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, removeCar, updateCarPrice } from './Action';
import Swal from 'sweetalert2';
export const Manager = () => {
    const cars = useSelector(state => state.cars);
    const rents=useSelector(state => state.rents);
    const [inputValue, setInputValue] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isFormOpen1, setIsFormOpen1] = useState(false);
    const [isFormOpen2, setIsFormOpen2] = useState(false);
    const [isFormOpen3, setIsFormOpen3] = useState(false);
    const [isFormOpen4, setIsFormOpen4] = useState(false);
    const [carCode, setCarCode] = useState('');
    const [codeCars, setCodeCars] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [modelCode, setModelCode] = useState('');
    const [numberOfPlaces, setNumberOfPlaces] = useState('');
    const [image, setImage] = useState('');
    const [isVacant, setIsVacant] = useState('');
    const [automaticOrManual, setAutomaticOrManual] = useState('');
    const [driveTypeCode, setDriveTypeCode] = useState('');
    const [codeType, setCodeType] = useState('');
    const [pricePerHour, setPricePerHour] = useState('');
    const [consumptionPerKilometer, setConsumptionPerKilometer] = useState('');
    const [balanceInLiters, setBalanceInLiters] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [yearbook, setYearbook] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    // Delete-מחיקה
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(removeCar(inputValue));
        setInputValue('');
        Swal.fire('success','The car was deleted!','success')
        setIsFormOpen(false);
    };

    // Update-עדכון
    const handlePriceChange = (event) => {
        debugger
        setPrice(event.target.value);
    };

    const handleCarCodeChange = (event) => {
        setCarCode(event.target.value);
    };
 
    const handleSubmit1 = (event) => {
        event.preventDefault();
        dispatch(updateCarPrice(carCode, price));
        setCarCode('');
        setPrice('');
        Swal.fire('success','The car was updated!','success')
        setIsFormOpen1(false);
    };
//add-הוספה
    const handleCodeCarsChange = (event) => {
        setCodeCars(event.target.value);
    };

    const handleLicenseNumberChange = (event) => {
        setLicenseNumber(event.target.value);
    };

    const handleModelCodeChange = (event) => {
        setModelCode(event.target.value);
    };

    const handleNumberOfPlacesChange = (event) => {
        setNumberOfPlaces(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleYearbookChange = (event) => {
        setYearbook(event.target.value);
    };

    const handleAutomaticOrManualChange = (event) => {
        setAutomaticOrManual(event.target.value);
    };

    const handleDriveTypeCodeChange = (event) => {
        setDriveTypeCode(event.target.value);
    };

    const handleCodeTypeChange = (event) => {
        setCodeType(event.target.value);
    };

    const handlePricePerHourChange = (event) => {
        setPricePerHour(event.target.value);
    };

    const handleBalanceInLitersChange = (event) => {
        setBalanceInLiters(event.target.value);
    };

    const handleConsumptionPerKilometerChange = (event) => {
        setConsumptionPerKilometer(event.target.value);
    };

    const handleStreetChange = (event) => {
        setStreet(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleIsVacantChange = (event) => {
        setIsVacant(event.target.value);
    };

    const handleSubmit2 = (event) => {
        const newCar = {
            "codeCars": codeCars,
            "licenseNumber": licenseNumber,
            "modelCode": modelCode,
            "Numberofplaces": numberOfPlaces,
            "Image": image,
            "yearbook": yearbook,
            "AutomaticOrManual": automaticOrManual,
            "DriveTypeCode": driveTypeCode,
            "codeType": codeType,
            "pricePerHour": pricePerHour,
            "ConsumptionPerKilometer":consumptionPerKilometer,
            "BalanceInLiters": balanceInLiters, 
            "Street":street,
            "city": city,
            "isvacant": isVacant, 
        };

        dispatch(addCar(newCar));
        setCodeCars('');
        setLicenseNumber('');
        setModelCode('');
        setNumberOfPlaces('');
        setImage('');
        setYearbook('');
        setAutomaticOrManual('');
        setDriveTypeCode('');
        setCodeType('');
        setPricePerHour('');
        setConsumptionPerKilometer('');
        setBalanceInLiters('');
        setStreet('');
        setCity('');
        setIsVacant('');
        Swal.fire('success','The car was added!','success')
        setIsFormOpen2(false);
    };
    const close=()=>{
        setIsFormOpen3(false);
    }
    const close1=()=>{
        setIsFormOpen4(false);
    }

    return (
        <div className='contain'>
        <div>
            <button className="managerDo1" onClick={() => setIsFormOpen(true)}>Delete</button><br />
            <button className="managerDo2"  onClick={() => setIsFormOpen1(true)}>Update</button><br />
            <button className="managerDo3"  onClick={() => setIsFormOpen2(true)}>Add</button><br />
            <button className="managerDo3"  onClick={() => setIsFormOpen3(true)}>View cars</button><br />
            <button className="managerDo3"  onClick={() => setIsFormOpen4(true)}>View lend</button><br />
            {isFormOpen1 && (
                <form className="form1" onSubmit={handleSubmit1}>
                    <input 
                        type="text" 
                        value={price} 
                        onChange={handlePriceChange} 
                        placeholder="Enter new price" 
                    />
                  
                    <br />
                    <input 
                        type="text" 
                        value={carCode} 
                        onChange={handleCarCodeChange} 
                        placeholder="Enter license number" 
                    /><br></br>
                    <button className='do' type="submit">Update</button>
                    <button className='cancel' type="button" onClick={() => setIsFormOpen1(false)}>Cancel</button>
                </form>
            )}

            {isFormOpen && (
                <form className="form1" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Enter license number" 
                    /><br></br>
                    <button className='do' type="submit">Delete</button>
                    <br />
                    <button className='cancel' type="button" onClick={() => setIsFormOpen(false)}>Cancel</button>
                </form>
            )}

            {isFormOpen2 && (
                <form className="form2" onSubmit={handleSubmit2}>
                    <div className='divLeft'>
                    <input 
                        type="text" 
                        value={codeCars} 
                        onChange={handleCodeCarsChange} 
                        placeholder="Code Cars" 
                    />
                    <br />
                    <input 
                        type="text" 
                        value={licenseNumber} 
                        onChange={handleLicenseNumberChange} 
                        placeholder="License Number" 
                    />
                    <br />
                    <input 
                        type="text" 
                        value={modelCode} 
                        onChange={handleModelCodeChange} 
                        placeholder="Model Code" 
                    />
                    <br />
                    <input 
                        type="text" 
                        value={numberOfPlaces} 
                        onChange={handleNumberOfPlacesChange} 
                        placeholder="Number of Places" 
                    />
                    <br />
                    <input 
                        type="text" 
                        value={image} 
                        onChange={handleImageChange} 
                        placeholder="Image" 
                    />
<br />
{/* <input type="file" id="fileInput" name="fileInput" accept="image/*"></input> */}
                    <input 
                        type="text" 
                        value={yearbook} 
                        onChange={handleYearbookChange} 
                        placeholder="Yearbook" 
                    />
                    <input 
                        type="text" 
                        value={automaticOrManual} 
                        onChange={handleAutomaticOrManualChange} 
                        placeholder="Automatic or Manual" 
                    />
                
                    
                    <input 
                        type="text" 
                        value={driveTypeCode} 
                        onChange={handleDriveTypeCodeChange} 
                        placeholder="Drive Type Code" 
                    />
                        </div>
                    <div className='divRight'>
                    <input 
                        type="text" 
                        value={codeType} 
                        onChange={handleCodeTypeChange} 
                        placeholder="Code Type" 
                    />
                    <input 
                        type="text" 
                        value={pricePerHour} 
                        onChange={handlePricePerHourChange} 
                        placeholder="Price Per Hour" 
                    />
                    <input 
                        type="text" 
                        value={consumptionPerKilometer} 
                        onChange={handleConsumptionPerKilometerChange} 
                        placeholder="Consumption Per Kilometer" 
                    />
                    <input 
                        type="text" 
                        value={balanceInLiters} 
                        onChange={handleBalanceInLitersChange} 
                        placeholder="Balance In Liters" 
                    />
                    <input 
                        type="text" 
                        value={street} 
                        onChange={handleStreetChange} 
                        placeholder="Street" 
                    />
                    <input 
                        type="text" 
                        value={city} 
                        onChange={handleCityChange} 
                        placeholder="City" 
                    />
                    <input 
                        type="text" 
                        // value={isVacant} 
                        onChange={handleIsVacantChange} 
                        placeholder="Is Vacant" 
                    /><br></br><br />
                    <button type="submit" className='do'>Add</button>
                    <br />
                    <button type="button" className='cancel' onClick={() => setIsFormOpen2(false)}>Cancel</button>
                    </div>
                </form>
            )}
{isFormOpen3 && (
       <div className="all_cars">
       <h1>all cars</h1>
       <button onClick={close}>X</button>
       <table>
           <thead>
               <tr >
                   <th>car code</th>
                   <th>num of places</th>
                   <th>year book</th>
                   <th>license number</th>
                   <th>price per hour</th>
                   <th>city</th>
                   <th>street</th>
                   <th>is vacant?</th>
               </tr>
           </thead>
           <tbody>
               {cars.map(car => (
                   <tr >
                    <td>{car.codeCars}</td>
                       <td>{car.Numberofplaces}</td>
                       <td>{car.yearbook}</td>
                       <td>{car.licenseNumber}</td>
                       <td>{car.pricePerHour}</td>
                       <td>{car.city}</td>
                       <td>{car.Street}</td>
                       <td>{car.isvacant}</td>
                   </tr>
               ))}
           </tbody>
       </table>
   </div>
)
}
{isFormOpen4 && (<div className="view-cars">
            <h1>all lends</h1>
            <button onClick={close1}>X</button>
            <table>
                <thead>
                    <tr >
                        <th>order code</th>
                        <th>password</th>
                        <th>licenseNumber</th>
                        <th>date of rent</th>
                        <th>time of rent</th>

                    </tr>
                </thead>
                <tbody>
               

                    {rents.map(rents=> (
                        <tr >
                            <td>{rents.rentCode}</td>
                            <td>{rents.passwordId}</td>
                            <td>{rents.licenseNumber}</td>
                            <td>{rents.rentDate}</td>
                            <td>{rents.rentTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
        </div>
        </div>
    );
};
