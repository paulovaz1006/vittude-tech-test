import { useState } from "react";
import showToastify from "../../../utils/showToastify";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [ infoToLogin, setInfoToLogin] = useState({
    username: "",
    password: ""
  })

  const handleChangeInfoLogin = (e) => {
    setInfoToLogin({...infoToLogin, [e.target.name]: e.target.value })
  };

  const handleSignIn = () => {
   
    
  
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(infoToLogin)
    })
    .then(res => {
      if (res.status === 400) {
        return showToastify('E-mail ou senha incorretos', 'error') 
      }
      return res.json()
    })
    .then(result => {
      const fullName = `${result.firstName} ${result.lastName}`
      document.cookie = `token=${result.token}`;
      localStorage.setItem('userImg', result.image )
      localStorage.setItem('userName',  )
      showToastify(`Bem vindo(a) ${fullName}`, 'success')

      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)

    })
    .catch(error => showToastify(error, 'error'))
  }
  return {handleChangeInfoLogin, handleSignIn}
}

export default useAuth;