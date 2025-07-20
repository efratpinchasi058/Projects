import swal from "sweetalert";
import { useSelector, useDispatch } from 'react-redux'
import { addUser, setCurrentUser } from "./Actions";
import { useNavigate } from "react-router";

export const Register = () => {
    const navigate = useNavigate();
    const users = useSelector(store => store.users)
    // dispatch - משתנה שזורק פעולות לאויר
    const dispatch = useDispatch()
    const send = (event) => {
        event.preventDefault();
        const user = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }
        console.log(user);
        let u = users.filter(x => x.email == user.email)
        if (u.length == 0) {
            // add to users
            dispatch(addUser(user))
            dispatch(setCurrentUser(u))
            swal(`Hello ${user.username}`, 'register successfully! 😊😄😁😍', 'success')
            
            navigate('/Car')
        }
        else {
            swal('Oopss!', 'register failed... 😞😥😔 email has been exists already', 'error')
        }
    }

    return <>
        <h4>Login:</h4>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor="username">user name:</label><br></br>
            <input id="username" placeholder="input username"></input><br></br>

            <label htmlFor="email">email:</label><br></br>
            <input id="email" placeholder="input email"></input><br></br>

            <label htmlFor="password">password:</label><br></br>
            <input id="password" type="password" placeholder="input password"></input><br></br>

            <input type={'submit'}></input>
        </form>
    </>
}