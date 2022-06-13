
const Desafio = ({name, job, age}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18? (
            <p>Você tem idade para dirigir</p>
        ):(
            <p>Você é de menor aguarde mais uns anos</p>
        )}
    </div>
  )
}

export default Desafio