import "./Auth.css"

//Components
import {Link} from 'react-router-dom'

//Hooks
import { useEffect, useState} from "react"

//Redux
import { register, reset } from '../Slices/authSlices';
import { useSelector, useDispatch } from "react-redux";

const Register = () => {

  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user)

    dispatch(register(user))
  };

  useEffect(() => {
    
    dispatch(reset())

  },[dispatch])

  return (
    <div className="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos</p>
      <form onSubmit={handleSubmit} id="login">
        <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name || ""}/>
        <input type="email"placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
        <input type="Password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password || ""}/>
        <input type="Password" placeholder="Confirme a senha" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ""}/>
        <input type="submit"  value='Enviar'/>
      </form>
      <p>
        Já tem conta <Link to="/login">Clique aqui</Link>
      </p>

    </div>
  )
}

export default Register