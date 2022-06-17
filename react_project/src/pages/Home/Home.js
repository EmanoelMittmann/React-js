
//css
import styles from './Home.module.css'
//react
import { useState } from 'react'
//components
import PostDetail from '../../components/PostDetail';
//hooks
import { Link, useNavigate } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocument';


const Home = () => {
  const[query, setQuery] = useState("");
  const{documents: posts, loading} = useFetchDocuments("posts");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query){
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
        <h1>Posts recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input 
            type="text" 
            placeholder='Ou busque por tags...' 
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-dark">Pesquisar</button>
        </form>
        <div>
          {loading && <p>Carregando...</p>}
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className="btn">
                Criar primeiro post
              </Link>
            </div>
          )}
          {posts && posts.map((post) => (<PostDetail key={post.id} post={post} />))}
        </div>
    </div>
  )
}

export default Home