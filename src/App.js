import './App.css';
import LoginPage from './components/login/loginPage'
import { useState } from 'react';

function App() {

  const defaultEmail = 'shadabkhan@gmail.com';
  const defaultPassword = 'shadab123'

  const [loginStatus,setLoginStatus] = useState(false)

const handleSubmit = (email,password) => {
  if(email === defaultEmail && password === defaultPassword){
    setLoginStatus(true)
  }
  else{
    alert("Invalid Email or Password");
  }

}

  return (
    <div className="App">
    {!loginStatus && 
    <LoginPage handleSubmit={handleSubmit}/>}
      
    </div>
  );
}

export default App;
