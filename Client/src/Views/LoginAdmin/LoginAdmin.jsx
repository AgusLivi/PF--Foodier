import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
    const [formAdmin, setFormAdmin] = useState({
        email: '',
        password: '',
        rol: 'admin'
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputOnChange = (event) => {
        const { name, value } = event.target
        setFormAdmin({
            ...formAdmin,
            [name]: value
        });
    };

    const handleSubmit = () => {
        dispatch(login(userData));
        navigate('/dashboard-admin');
    };

    console.log('form: ', formAdmin);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email: {' '}
                </label>
                <input
                    type='text'
                    name='email'
                    value={formAdmin.email}
                    onChange={handleInputOnChange}
                />

                <label htmlFor="password">
                    Password: {' '}
                </label>
                <input
                    type='text'
                    name='password'
                    value={formAdmin.password}
                    onChange={handleInputOnChange}
                />

                <button
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default LoginAdmin;