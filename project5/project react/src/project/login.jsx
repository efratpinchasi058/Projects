import swal from "sweetalert2";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { useNavigate } from "react-router";
import { addUser, setCurrentUser } from "./Action";

export const Login = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        tz: '',
        phoneNumber: '',
        password: '',
        cardNumber: '',
        dateEnd: '',
        cvv: ''
    });
    const navigate = useNavigate();
    const users = useSelector(store => store.users)
    const dispatch = useDispatch();

    // Function to validate input fields
    const validate = (name, value) => {
        let isValid = true;
        const newErrors = { ...errors };

        switch (name) {
            case 'username':
                let nameRegex = /^[א-תA-Za-z]{2,20}$/;
                if (!value.match(nameRegex)) {
                    newErrors.username = 'The name must be between 2 and 20 characters in English or Hebrew.';
                    isValid = false;
                } else {
                    delete newErrors.username;
                }
                break;

            case 'tz':
                let tzRegex = /^[0-9]{9}$/;
                if (!value.match(tzRegex)) {
                    newErrors.tz = 'ID must contain only 9 digits!';
                    isValid = false;
                } else {
                    delete newErrors.tz;
                }
                break;
               
            case 'phoneNumber':
                let phoneNumberRegex = /^[0-9]{9,10}$/;
                if (!value.match(phoneNumberRegex)) {
                    newErrors.phonenumber = 'Invalid phone number';
                    isValid = false;
                } else {
                    delete newErrors.phonenumber;
                }
                break;

            case 'cardNumber':
                let cardNumberRegex = /^[0-9]{16}$/;
                if (!value.match(cardNumberRegex)) {
                    newErrors.cardNumber = 'Credit card number must contain 16 digits!';
                    isValid = false;
                } else {
                    delete newErrors.cardNumber;
                }
                break;
                case 'password':
                    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,15}$/;
                    if (!value.match(passwordRegex)) {
                        newErrors.password = 'Password must be 8-15 characters long and include at least one letter, one number, and one special character.';
                        isValid = false;
                    } else {
                        delete newErrors.password;
                    }
                    break;
            case 'cvv':
                let cvvRegex = /^[0-9]{3}$/;
                if (!value.match(cvvRegex)) {
                    newErrors.cvv = 'CVV must contain 3 digits!';
                    isValid = false;
                } else {
                    delete newErrors.cvv;
                }
                break;

            case 'dateEnd':
                let dateEndRegex = /^[0-9]{4}$/;
                if (!value.match(dateEndRegex)) {
                    newErrors.dateEnd = 'Invalid date';
                    isValid = false;
                } else {
                    delete newErrors.dateEnd;
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

        if (formIsValid) {
            const newUser = {
                userName: formData.username,
                tz: formData.tz,
                password: formData.password,
            };

            const existUser = users.find(x => x.userName === newUser.userName && x.password === newUser.password);
            if (existUser) {
                swal.fire({
                    text: "Username already exists in the system, you must signup!",
                    icon: "info"
                });
                navigate('/Register');
            } else {
                dispatch(addUser(newUser));
                dispatch(setCurrentUser(newUser));
                swal.fire({
                    icon: "success",
                    title: `${newUser.userName}, you are with us`,
                    timer: 2000
                });
                navigate('/cars');
            }
        }
    };

    return (
        <form id="login" className="lg" onSubmit={handleSubmit}>
            <h4>Login</h4><br />
            <label htmlFor="username">username:</label><br />
            <input
                id="username"
                name="username"
                placeholder="input username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <p id="s">{errors.username}</p>

            <label htmlFor="tz">tz:</label><br />
            <input
                type="text"
                id="tz"
                name="tz"
                placeholder="input tz"
                value={formData.tz}
                onChange={handleChange}
                required
            />
            <p id="s">{errors.tz}</p>

            <label htmlFor="phoneNumber">phone:</label><br />
            <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="input phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
            />
            <p id="s">{errors.phonenumber}</p>

            <label htmlFor="password">password:</label><br />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="input password"
                value={formData.password}
                onChange={handleChange}
                required
            /><br />
            <p id="s">{errors.password}</p>
            <label htmlFor="cardNumber">CreditCard:</label><br />
            <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="input cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
            />
            <p id="s">{errors.cardNumber}</p>

            <label htmlFor="dateEnd">validity:</label><br />
            <input
                type="text"
                id="dateEnd"
                name="dateEnd"
                placeholder="input dateEnd"
                value={formData.dateEnd}
                onChange={handleChange}
                required
            />
            <p id="s">{errors.dateEnd}</p>

            <label htmlFor="cvv">cvv:</label><br />
            <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="input cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
            />
            <p id="s">{errors.cvv}</p>

            <button type="submit">Submit</button>
        </form>
    );
};