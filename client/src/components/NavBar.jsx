import { useContext, useEffect, useState } from "react";
import { Link, Navigate, json, redirect } from "react-router-dom";
import { UserContext } from "../UserContext";
import Relay from '../assets/Relay.png';

export default function NavBar(){
    const {setUserInfo, userInfo} = useContext(UserContext);


    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then( response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });

    }, []);

    function logout(){
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        });
        setUserInfo(null);

    }



    const username = userInfo?.username;
    return(
        <header className="nav-container">
            <Link to="/" className="logo-header">             
                <img src={Relay} className="logo"/>  
            </Link>

            <div className="nav-sec-2">
                {username && (
                    <>
                        <Link to={'/Create'}> New Post </Link>
                        <a onClick={logout}>Logout</a>
                        Hi, {username}
                    </>
                )}

                {!username && (
                    <>
                        <Link to="/Login"> Login </Link>
                        <Link to="/Register"> Register </Link>
                    </>
                )}

            </div>

        </header>
    )
}