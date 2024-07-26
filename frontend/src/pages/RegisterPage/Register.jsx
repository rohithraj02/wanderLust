import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NameInput from '../../components/inputComponents/NameInput';
import EmailInput from '../../components/inputComponents/EmailInput';
import PasswordInput from '../../components/inputComponents/PasswordInput';
import axios from 'axios'; 

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Email format validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email address");
            return; 
        }

        // Send registration data to server using Axios
        try {
            const response = await axios.post('http://localhost:7000/api/auth/register/', {
                name: name,
                email: email,
                password: password
            });
            console.log(response);
            if(response.data.error==true)
                toast.error(response.data.message)
            else
                toast.success("Registration successful");
        } catch (error) {
            toast.error("Failed to register");
        }
    };

    return (
        <>
            <ToastContainer position="top-center" theme="light" />
            <form className="form" onSubmit={handleSubmit}>
                <div className="container">
                    <h1>REGISTER</h1>
                    <NameInput value={name} onChange={(e) => setName(e.target.value)} />
                    <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
                    <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">REGISTER</button>
                </div>
            </form>
        </>
    );
};

export default Register;
