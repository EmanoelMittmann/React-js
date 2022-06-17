import { useSearchParams,Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const{ data: items, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados disponíveis</h1>
        <ul className="products">
        {items && 
            items.map((item) => (
               <li key={item.id}>
                <h2>{item.nome}</h2>
                <p>{item.preco}</p>
                <Link to={`/products/${item.id}/info`}>Detalhes</Link>
               </li> 
            ))}
        </ul>
        
    </div>
  )
}

export default Search