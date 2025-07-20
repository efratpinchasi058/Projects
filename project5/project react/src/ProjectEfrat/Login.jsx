import swal from "sweetalert";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from "./Actions";
import { useNavigate } from "react-router";

export const Login = () => {
    const navigate = useNavigate();
    const users = useSelector(store => store.users)
    const dis = useDispatch() 

    const send = (event) => {
        event.preventDefault();
        const user = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value
        }
        console.log(user);
        let u = users.filter(x => x.email == user.email && x.password == user.password)[0]
        if (u) {
            swal(`Hello ${user.username}`, 'login successfully! 😊😄😁😍', 'success')
            dis(setCurrentUser(u))
            navigate('/Car')
        }
        else {
            swal('Oopss!', 'login failed..😥😔', 'error')
            navigate('/Register');
        }

    }
    return <>
        <h4>Register</h4>
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