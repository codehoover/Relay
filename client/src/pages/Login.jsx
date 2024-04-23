import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import hidden from "@mui/icons-material/VisibilityOff";
import shown from '@mui/icons-material/Visibility';

import { SvgIcon } from "@mui/material";
import { UserContext } from "../UserContext";


export default function Login(){
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [redirect, setRedirect] = useState(false);

    const [warn, setWarn] = useState('');
    const {setUserInfo} = useContext(UserContext);
    const [icon, setIcon] = useState(hidden)
    const [type,setType] = useState('password');

    function handlePassToggle(){
        if (type ==='password'){
            setType('text');
            setIcon(shown);
        }else{
            setType('password');
            setIcon(hidden);
        }

    }


    async function handleLogin(e){
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username,pass}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include'
        })

        if (response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })
            
        }else{
            setWarn('Incorrect credentials.');
        }
    }

    //if redirect is true navigate to homepage 
    if (redirect){
        return <Navigate to={'/'} />
    }
    
    return(

        <div className="login-page-container"> 
    
            <div className="login-side">

            <svg  className="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.44 74.33">
                <path class="squiggle" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="18" d="M14.2 65.54s36-36.79 56.31-35.66 38.6 27.31 58.13 26.56 26.34-5.91 37.6-13 30.53-19.52 39.48-19.14 19.48 8.23 31.12 19.87 18.91 13.2 25.25 13.16S278.24 58 297 40.76s25.86-17.86 31.49-17.86 48.11 15.42 65 13.27" />
            </svg>                
                

            </div>

            <form className="login-form" onSubmit={handleLogin}>
                <div>
                    <h1> Welcome back to Relay </h1>
                    <p> To continue reading, writing and sharing login below. </p>
                </div>

                <div className="login-form-inputs">
                    <input className="login-input" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>

                    <div className="login-input-pass">
                        <input 
                        placeholder="Password" 
                        type={type}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        />
                        <SvgIcon onClick={handlePassToggle} component={icon} sx={{color: '#acacac'}}/> 
                    </div>

                </div>
                

                <button className="login-submit">Login</button>
                <p> Don't have an account? <Link to={"/Register"}>Signup</Link> </p>
                <div id="warning">
                    {warn}
                </div>
            </form>


        </div>
    )
}