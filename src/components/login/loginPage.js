import React from "react";
import "./login.css";
import { useState, useRef } from "react";

function LoginPage({ handleSubmit, changePassword }) {
	const [email, setEmail] = useState("sk@gmail.com");
	const [password, setPassword] = useState("123");

	const [newPass, setNewPass] = useState();
	const [reEnter, setReEnter] = useState();

	const forgetDivRef = useRef(null);

	const HandleSubmit = () => {
		handleSubmit(email, password);
	};
	return (
		<div className="login-container">
			<h1>TweetX</h1>
			<form
				className="formClass"
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				<input
					type="text"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder="Email"
					className="emailInput"
					readOnly
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					placeholder="Password"
					className="passwordInput"
					readOnly
				/>
				<div className="buttonDiv">
					<button
						className="forgot"
						onClick={() =>
							forgetDivRef.current.classList.remove("display-none")
						}
					>
						Forgot Password?
					</button>
					<button className="submit" onClick={HandleSubmit}>
						Login
					</button>
				</div>
			</form>
			<div
				ref={forgetDivRef}
				className="formClass forgot-password-div display-none"
			>
				<input
					type="password"
					placeholder="Create New Password"
					value={newPass}
					onChange={(e) => {
						setNewPass(e.target.value);
					}}
				/>
				<input
					type="password"
					placeholder="Re-enter New Password"
					value={reEnter}
					onChange={(e) => {
						setReEnter(e.target.value);
					}}
				/>
				<div className="buttonDiv">
					<button
						className="cancel-password-change"
						onClick={() => {
							forgetDivRef.current.classList.add("display-none");
						}}
					>
						Cancel
					</button>
					<button
						className="confirm-password-change"
						onClick={() => {
							if (newPass === reEnter) {
								changePassword(newPass);
								setPassword(newPass)
								forgetDivRef.current.classList.add("display-none");
							} else {
								alert("Passwords don't match");
							}
							setNewPass("");
							setReEnter("");
						}}
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
