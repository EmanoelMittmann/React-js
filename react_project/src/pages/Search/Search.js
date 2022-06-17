import styles from './Search.module.css'

//components
import PostDetail from '../../components/PostDetail';
import { Link } from 'react-router-dom';

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocument'
import { useQuery } from '../../hooks/useQuery';


const Search = () => {
    const query = useQuery();
    const search =  query.get("q");

    const {documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
        <h2>Resultados encontrados para: {search}</h2>
        <div>
            {posts && posts.length === 0 &&(
                <>
                    <p>Não foram encontrados posts a partir da sua busca...</p>
                    <Link to="/" className="btn btn-dark">
                        Voltar
                    </Link>
                </>
            )}
            {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
        </div>
    </div>
  )
}

export default Search