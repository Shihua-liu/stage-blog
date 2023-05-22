import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"


import './App.css';

const App = () => {
  const navigate = useNavigate()
  const [loginNameInput, setloginNameInput] = useState("")
  const [loginPasswordInput, setloginPasswordInput] = useState("")
  const [error, seterror] = useState("")
  const [loggedIn, Setloggedin] = useState(false)


  const loginData = [{
    id: "1",
    username: "Admin",
    password: "Admin123"
  }]

  const UsernameInput = (e) => {
    setloginNameInput(e.target.value)
  }

  const PasswordInput = (e) => {
    setloginPasswordInput(e.target.value)
  }


  const logincheck = (e) => {
    e.preventDefault()
    loginData.map(login => {
      if (login.username === loginNameInput && login.password === loginPasswordInput) {
        Setloggedin(true)
        navigate("/homepage", { state: { loggedIn: loggedIn } })
      }
      else {
        seterror("Gebruikersnaam of wachtwoord is incorrect")
      }
    })
  }


  return (
    <>
      <section className='loginWrapper'>
        <p className='loginHeader'>Login om de Stage Blog te zien van Shi hua Liu</p>
        <div className='login'>
          <form action="" className='loginform'>
            <div className="inputs">
              <p className='inputLabels'>Gebruikersnaam</p>
              <input type="text" className='inputField' value={loginNameInput} onChange={UsernameInput} />
            </div>
            <div className="inputs">
              <p className='inputLabels'>Wachtwoord</p>
              <input type="password" className='inputField' value={loginPasswordInput} onChange={PasswordInput} />
            </div>
          </form>
          <div className="error">
            {error}
          </div>
          <button className='loginBtn' onClick={logincheck}>Login</button>
        </div>
      </section>

    </>


  );
}

export default App;
