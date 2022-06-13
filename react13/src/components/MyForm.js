import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - controlled inputs


    // 3 - manipulação de dados *
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')
    
    const [role,setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    };

    console.log(name)
    console.log(email)

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Enviando Formulario")
        console.log(name, email, bio, role)

        // 7 - limpar nome
        setName('')
        setEmail('')
        setBio('')
    };
    

    return (
    <div>
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" value={name} name="name" onChange={handleName} placeholder='Digite seu nome'/>
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* 4 - simplicação de manipulação de state */}
                <input type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu e-mail' />
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuario" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
            
        </form>
    </div>
  )
}

export default MyForm