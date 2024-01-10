import React from "react";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import LoginPage from "../login/loginPage";
import { useState } from "react";

function Main() {
	const defaultEmail = "sk@gmail.com";
	let defaultPassword = "sk123";

	const [loginStatus, setLoginStatus] = useState(false);

	const handleSubmit = (email, password) => {
		if (email === defaultEmail && password === defaultPassword) {
			setLoginStatus(true);
		} else {
			alert("Invalid Email or Password");
		}
	};

	const changePassword = (newPassword) => {
		defaultPassword = newPassword;

	}

	return (
		<>{
			!loginStatus? (<LoginPage handleSubmit={handleSubmit} changePassword={changePassword}/>):(<><Navbar /><Outlet /></>)
		}
		</>
	);
}

export default Main;
