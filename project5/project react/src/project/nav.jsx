//import car from "./car.jpg"
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const Nav = () => {
    const currentUser = useSelector(x => x.currentUser)
    const b = currentUser.userName
    return <>
        <div className='nav'>
            <div className='logo'></div>
            <div className='wnav'>
                {b && <div id='currrentName'>  <h3>{currentUser.userName.charAt(0).toUpperCase()}</h3>
                </div>}
                <div id='routing'>
                    <NavLink to={'homePage'} className='link'>Home</NavLink>
                    <NavLink to={'login'} className='link'>Login</NavLink>
                    <NavLink to={'Register'} className='link'>Signup</NavLink>
                    <NavLink to={'cars'} className='link'>Cars</NavLink>

                </div>
            </div>
            <div className='phon'>*2002</div>
        </div>

    </>
}