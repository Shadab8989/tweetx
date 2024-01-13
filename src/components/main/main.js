import React from "react";
import LoginPage from "../login/loginPage";
import { useState } from "react";
import store from "../../store/store";
import { Provider } from "react-redux";
import Content from "../content";

function Main() {
	const defaultEmail = "sk@gmail.com";
	let defaultPassword = "123";

	const [loginStatus, setLoginStatus] = useState(false);

	const handleSubmit = (email, password) => {
		if (email.toLowerCase() === defaultEmail && password === defaultPassword) {
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
				<Content changeLoginStatus={setLoginStatus}/>
			)}
		</Provider>
	);
}

export default Main;
