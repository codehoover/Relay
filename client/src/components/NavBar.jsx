import { useContext, useEffect, useState } from "react";
import { Link, Navigate, json, redirect } from "react-router-dom";
import { UserContext } from "../UserContext";

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
            <Link to="/">             
                <svg  className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.44 74.33">
                    <path class="squiggle" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="48" d="M14.2 65.54s36-36.79 56.31-35.66 38.6 27.31 58.13 26.56 26.34-5.91 37.6-13 30.53-19.52 39.48-19.14 19.48 8.23 31.12 19.87 18.91 13.2 25.25 13.16S278.24 58 297 40.76s25.86-17.86 31.49-17.86 48.11 15.42 65 13.27" />
                </svg>     
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