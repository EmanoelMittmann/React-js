import React,{useContext} from 'react'
import { AppContext } from '../App'

const Context = () => {

    const details = useContext(AppContext)

    return (
    <>
        {details &&(
            <div>
                <h1>Linguagem: {details.language}</h1>
                <h4>FW: {details.framework}</h4>
                <p>QTD: {details.projects}</p>
            </div>
        )}   
    </>
  )
}

export default Context