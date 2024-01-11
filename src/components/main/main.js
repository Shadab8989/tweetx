import React from "react";
import LoginPage from "../login/loginPage";
import { useState } from "react";
import store from "../../store/store";
import { Provider } from "react-redux";
import Content from "../content";

function Main() {
	const defaultEmail = "sk@gmail.com";
	let defaultPassword = "sk123";

	const [loginStatus, setLoginStatus] = useState(true);

	const handleSubmit = (email, password) => {
		if (email === defaultEmail && password === defaultPassword) {
			setLoginStatus(true);
		} else {
			alert("Invalid Email or Password");
		}
	};

	const changePassword = (newPassword) => {
		defaultPassword = newPassword;
	};

	return (
		<Provider store={store}>
			{!loginStatus ? (
				<LoginPage
					handleSubmit={handleSubmit}
					changePassword={changePassword}
				/>
			) : (
				<Content />
				
			)}
		</Provider>
	);
}

export default Main;
