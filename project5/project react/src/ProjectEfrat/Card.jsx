import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Moredetails } from './MoreDedails'


import { useState } from "react"
export const Card = (props) => {

     const navigate = useNavigate();
    const myCar = props
    const my = myCar.myCar



    const currentUser = useSelector(x => x.currentUser)
    console.log(currentUser.email)

    function show(my) {
        const it = my.codeCars

        {
          
         currentUser.username &&   navigate(`/Moredetails/${it}`) }
         
        

        {
            
            (!currentUser.username) &&
                Swal.fire({
                    text: "You must be logged in to see more details.",
                    icon: "info"
                });
        }
    }
    const models = useSelector(x => x.carModels)
    const m = models.filter(x => x.modelCode == myCar.myCar.modelCode)[0]

    const type = useSelector(x => x.cartype)
    const t = type.filter(x => x.codeType == myCar.myCar.codeType)[0]


    const fuel = useSelector(x => x.propulsionType)
    const f = fuel.filter(x => x.propulsionTypeCode == myCar.myCar.DriveTypeCode)[0]
    const temp = useSelector(x => x.cars)
    const [cars, setCars] = useState(temp)


    return <>
        {cars.map(i => <Card myCar={i} key={i.codeCars}></Card>)}
        <div className={`card ${myCar.myCar.isvacant == 'false' ? 'active' : ''}`} >
            <img src={`${process.env.PUBLIC_URL}/pictures/${myCar.myCar.Image}`} id="p" className="imgCar"></img>
            <img src={`${process.env.PUBLIC_URL}/pictures/${f.description}.PNG`} id="p1"></img><br></br>
            <p className="pWords"> Company:{`${m.company}`} </p><br></br>
            <p className="pWords">Model: {`${m.model}`}</p><br></br>
            <p className="pWords"> Type car: {`${t.Description}`}</p><br></br>
            <p className="pWords"> Location: {`${myCar.myCar.Street}`}, {`${myCar.myCar.city}`} </p><br></br>
            <p className="pWords"> Number of seats:{`${myCar.myCar.Numberofplaces}`} seats</p><br></br>
            <button onClick={() => show(my)} id="a">More Details</button>
        </div>
    </>

}