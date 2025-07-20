import { Link, NavLink } from 'react-router-dom'
import "./S.css";
import { useSelector } from 'react-redux';
export const Nav = () => {
    const user = useSelector(x => x.currentUser)

    debugger

    return <>
        <div className='nav'>

            {user.username && <label className='username'>hello:{user.username}</label>}

           
            <div id='routing'>
                <NavLink to={'home'} id="s" className='link'>Home</NavLink>
                <NavLink to={'login'} id="s" className='link'>Login</NavLink>
                <NavLink to={'car'} id="s" className='link'>Car</NavLink>
                <NavLink to={'register'} id="s" className='link'>Register</NavLink>
            </div>
        </div>
    </>
}