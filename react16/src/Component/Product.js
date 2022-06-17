import { useParams,Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // 4 rota dinamica
    const { id } = useParams();

    // 5  - carregamento do dado individual
    const url = 'http://localhost:3000/products/' + id ; 

    const { data: product, loading, error} = useFetch(url);

    console.log(product)

    return (
    <>
        <p>Id do Produto: {id}</p>

        {error && <p>Ocorreu um erro</p>}
        {loading && <p>carregando</p>}
        {product && (
            <div>
                <h1>{product.nome}</h1>
                <p>R$:{product.preco}</p>
                {/* 6 - nested routes */}
                <Link to={`products/${product.id}/info`}>Mais Informações</Link>
            </div>
        )}

    </>
  )
}

export default Product