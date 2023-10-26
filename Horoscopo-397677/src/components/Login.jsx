
import './Login.css'
import React, { useState } from "react";

function Login(props) {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobación simple de credenciales en el lado del cliente
    if (username === "admin" && password === "admin123") {
        // Redirige al usuario "admin" a una página específica para el administrador
        window.location.href = "/admin";
    } else if (username === "user" && password === "user123") {
        // Redirige al usuario "user" a una página específica para el usuario normal
        window.location.href = "/user";
    } else {
        alert("contraseña incorrecta")
    }
};

  return (
    <div className='form'>

        <form method='#' onSubmit={handleSubmit}>

            <h2>Iniciar sesión</h2>

            <p>Nombre de usuario</p>
            <input type='text' placeholder={props.user_placeholder} onChange={handleUsernameChange}></input>
            <p>Contraseña</p>
            <input type='password' placeholder={props.password_placeholder} onChange={handlePasswordChange}></input>
            <p></p>
            <button>Entrar</button>


        </form>


    </div>
  )
}

export default Login