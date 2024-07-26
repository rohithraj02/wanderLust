import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../components/AuthContext';
import './Login.css'
import { useNavigate } from 'react-router-dom'; 
import EmailInput from '../../components/inputComponents/EmailInput';
import PasswordInput from '../../components/inputComponents/PasswordInput';
import users from '../../data/users.json';
import { toastError } from '../../data/Constants'; 
import axios from 'axios';

const LogIn = (props) => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(toastError);
      return; 
    }

    try {
      // Make POST request to backend API
      const response = await axios.post('http://localhost:7000/api/auth/login/', {
        email: email,
        password: password
      });

      const responseData = response.data;
      if (responseData.loggedIn === true) {

        // Set loggedIn flag and user data in localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('name', responseData.token.name);
        localStorage.setItem('email', responseData.token.email);
        // localStorage.setItem('gender', responseData.gender);

        toast.success('You have been logged In');
        navigate('/');
        props.onLogin();
      } else {
        // Handle unsuccessful login
        toast.error('Invalid credentials');
        localStorage.setItem('loggedIn', 'false'); 
      }
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer position='top-center' theme="light" transition="Bounce" />
      {/* Login form */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="container">
          <h1>LOG IN</h1>
          {/* Email input component */}
          <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
          {/* Password input component */}
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
};

export default LogIn;
