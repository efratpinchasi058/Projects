import { useSelector } from "react-redux"
import {  Outlet, useNavigate } from "react-router";
import Swal from "sweetalert2";
export const Card = (props) => {
    const navigate = useNavigate();
    const myCar=props
    const my=myCar.myCar
    
    
    const currentUser=useSelector(x=>x.currentUser)
    function details(my) {
        debugger
        const it = my.codeCars
        
        // {currentUser.tz&&
             navigate(`Cardetails/${it}`)
            // }
        // debugger
        // {(!currentUser.tz)&& 
        //    Swal.fire({ 
        //         text: "You must be logged in to see more details.",
        //         icon: "info"
        //       });
        // }
      }

   const models=useSelector(x => x.carModels)
   const m = models.filter(x => x.modelCode == myCar.myCar.modelCode)[0]
   
   const type=useSelector(x=>x.cartype)
   const t=type.filter(x=>x.codeType==myCar.myCar.codeType)[0]
    
  
    const fuel=useSelector(x=>x.propulsionType)
    const f=fuel.filter(x=>x.propulsionTypeCode==myCar.myCar.DriveTypeCode)[0]  

    
   return <>
  
        <div class="container">
            
            <div className="bigButton">
                <div className={`card ${myCar.myCar.isvacant=='false' ? 'active' : ''}`} >
          
                    <img src={`${process.env.PUBLIC_URL}/pictures/${myCar.myCar.Image}`} className="imgCar"></img>
                    <div className="words">

                        <p className="pWords"> Company:{`${m.company}`}</p><br></br>
                        <p className="pWords">Model: {`${m.model}`}</p><br></br>
                        <p className="pWords"> Type car: {`${t.Description}`}</p><br></br>
                        
                        
                    </div>
                    <div className="words">
                    <p className="pWords"> Location: {`${myCar.myCar.Street}`}, {`${myCar.myCar.city}`} </p><br></br>
                    <p className="pWords"> Number of seats:{`${myCar.myCar.Numberofplaces}`} seats</p><br></br>
                 
                    <img src={`${process.env.PUBLIC_URL}/pictures/${f.description}.PNG`} id="fuel"></img><br></br>
                    </div>
                </div>
                <button className="button1" onClick={() => details(my)}>more details</button>
            </div>
        </div>
        </>
}