import './Home.css'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


const Home = () => {
    // 3 carregamento de dados
    const url = 'http://localhost:3000/products'

    const {data: items, loading, error} = useFetch(url)

  return (
    <div>
        <section className='First'>
            <div>
                <h1>Primeiro paragrafo</h1>
            </div>
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ullam numquam animi error pariatur, quia veniam fuga! Inventore odit, nesciunt dolor laudantium, ducimus nemo ipsam harum doloribus eaque impedit aliquam.</p>
            {error && <p>{error}</p>}
            <ul className="products">
            {items && items.map(item => (
                <li key={item.id}>
                    <h2>{item.nome}</h2>
                    <p>R$:{item.preco}</p>
                    {/* 4 rota dinamica */}
                    <Link to={`/products/${item.id}/info`}>Detalhes</Link>
                </li>
                ))}
            </ul>
        </section>
        
        
    </div>
  )
}

export default Home