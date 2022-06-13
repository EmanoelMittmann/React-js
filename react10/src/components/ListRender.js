import { useState } from "react"

 const ListRender = () => {
    const [list] = useState(["Atila","Matheus","Maicon","Karoline","Tarcisio","Frank","Lorenzo","Emanoel","Ana laura","João Pedro"]);


    const [user, setUsers] = useState([
        {id: 1 , name: "Marcos", age:21},
        {id: 2 , name: "Oskar", age:26},
        {id: 3 , name: "Rony", age:31},
        {id: 4 , name: "Pablo", age:51},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) =>{
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }
    

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.name} - age:  {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>delete</button>
    </div>
  )
}
export default ListRender
