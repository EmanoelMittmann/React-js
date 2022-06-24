import "./Auth.css"

// Componentes
import Message from "../../components/Message"
import { Link } from 'react-router-dom'


// Hooks
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"

// Redux
import {login, reset} from '../../slices/authSlice'

const Login = () => {

  const dispatch = useDispatch()
  const {loading, error} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email, 
      password
    }
    dispatch(login(user));
  }

  useEffect(() => {
    dispatch(reset())
  },[dispatch])

  const[email, setEmail] = useState()
  const[password, setPassword]= useState()

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">
       Faça o login para ver oque há de novo.
      </p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="E-mail" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email || ""}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password || ""}
          />
       {!loading && <input type="submit" value="Cadastrar"/>}
       {loading && <input type="submit" value="Aguarde..." disabled/>}
       {error && <Message msg={error} type="error"/>}
      </form>
      <p>Não tem uma Conta <Link to={"/register"}>Clique aqui</Link></p>
    </div>
  )
}

export default Login