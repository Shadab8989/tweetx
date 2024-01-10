import React from "react";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import LoginPage from "../login/loginPage";
import { useState } from "react";

function Main() {
	const defaultEmail = "shadabkhan@gmail.com";
	const defaultPassword = "shadab123";

	const [loginStatus, setLoginStatus] = useState(false);

	const handleSubmit = (email, password) => {
		if (email === defaultEmail && password === defaultPassword) {
			setLoginStatus(true);
		} else {
			alert("Invalid Email or Password");
		}
	};

	return (
		<>{
			!loginStatus? (<LoginPage handleSubmit={handleSubmit}/>):(<><Navbar /><Outlet /></>)
		}
		</>
	);
}

export default Main;
