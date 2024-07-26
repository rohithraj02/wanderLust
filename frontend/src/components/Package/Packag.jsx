// Packag.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../AuthContext';
import '../Package/Package.css';
import { loginError } from '../../data/Constants';

const Packag = (props) => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    function redirect() {
        console.log(isLoggedIn);
        if (!isLoggedIn) {
            toast(loginError);
        } else {
            navigate('/booking', { state: { packageName: props.name } });
        }
    }

    return (
        <>
            <div className="card">
                <img className='card-image' src={props.image} alt="" onClick={redirect} />
                <div className="desc">
                    <div className="detail">
                        <h1>{props.name}</h1>
                        <h2>{props.locations}</h2>
                        <hr />
                        <p>{props.description}</p>
                        <p>Price : {props.price}</p>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" transition: Zoom />
        </>
    );
};

export default Packag;
