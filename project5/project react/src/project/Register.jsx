import swal from "sweetalert2";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useNavigate } from "react-router";

export const Register = () => {
    const manager = useSelector(store => store.managerUser);
    const navigate = useNavigate();
    const users = useSelector(store => store.users);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        let isValid = true;
        const newErrors = { ...errors };

        switch (name) {
            case 'username':
                const nameRegex = /^[א-תA-Za-z]{2,20}$/;
                if (!value.match(nameRegex)) {
                    newErrors.username = 'The name must be between 2 and 20 characters in English or Hebrew.';
                    isValid = false;
                } else {
                    delete newErrors.username;
                }
                break;
            case 'password':
                const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,15}$/;
                if (!value.match(passwordRegex)) {
                    newErrors.password = 'Password must be 8-15 characters long and include at least one letter, one number, and one special character.';
                    isValid = false;
                } else {
                    delete newErrors.password;
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validate(name, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formIsValid = Object.keys(formData).every(field => validate(field, formData[field]));

        if (!formIsValid) {
            return; // אם יש שגיאות, לא שולחים את הטופס
        }

        const newUser = {
            userName: formData.username,
            password: formData.password,
        };

        const existUser = users.find(x => x.userName === formData.username && x.password === formData.password);
        const m = manager.find(x => x.nameManager === formData.username && x.passwordManager === formData.password);

        if (m) {
            navigate('/Manager');
        } else if (existUser) {
            swal.fire({
                icon: "success",
                title: "You've logged in successfully",
                timer: 2000
            });
            navigate('/cars');
        } else {
            swal.fire({
                icon: "error",
                title: "You need to register",
                text: "Please sign up first.",
            });
            navigate('/login');
        }
    };

    return (
        <>
            <form id="Register" className="lg" onSubmit={handleSubmit}>
                <h4>Sign up</h4><br></br>
                <label htmlFor="username">User name:</label><br></br>
                <input
                    id="username"
                    name="username"
                    placeholder="Input username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <p id="s">{errors.username}</p>
                <label htmlFor="password">Password:</label><br></br>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Input password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br />
                <p id="s">{errors.password}</p>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};