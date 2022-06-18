import styles from './EditPost.module.css'
import { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useAuthValue} from '../../context/AuthContext'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import {useFetchDocument} from '../../hooks/useFetchDocuments'

const EditPost = () => {
  const {id} = useParams()
  const { document : post } = useFetchDocument("posts" , id);

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  const Navigate = useNavigate();

  useEffect(() => {

    if(post){
        setTitle(post.title)
        setBody(post.body)
        setImage(post.image)

        const textTags = post.tags.join(", ");

        setTags(textTags)
    }

  },[post])

  const {user} = useAuthValue()

  const { UpdateDocument, response } = useUpdateDocument("posts")

  const handleSubmit = (e) =>{
    e.preventDefault()
    setFormError("")

     //validade image url
      try {
        new URL(image)
      } catch (error) {
        setFormError("A imagem precisa ser uma url.")
      }

     //criar array
     const tagsArray = tags.split(',').map((tag) => tag.trim());

     if(formError){
      return;
     }

    const data = {
      title,
      image,
      body,
      tags: tagsArray,
    }

    UpdateDocument(id, data)
    //redirect
    Navigate('/dashboard');
  };

  
  return (
    <div className={styles.edit_post}>
        {post && (
        <>
            <h1>Editando post: {post.title}</h1>
            <p>Altere os dados do post como desejar</p>
            <form onSubmit={handleSubmit}>
            <label>
                <span>Titulo:</span>
                <input type="text" name="text" required placeholder="Título..." 
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
            </label>
            <label>
                <span>Url da imagem:</span>
                <input type="text" name="image" required placeholder='Insira url da image'
                onChange={(e) => setImage(e.target.value)}
                value={image} />
            </label>
            <p className={styles.preview_title}>preview da imagem atual:</p>
            <img className={styles.image_preview} src={post.image} alt={post.title} />
            <label>
                <span>Conteúdo:</span>
                <textarea name="body" required  value={body} placeholder="Insira o conteúdo do post" onChange={(e) => setBody(e.target.value)}></textarea>
            </label>
            <label>
                <span>Tags:</span>
                <input type="text" name="tags" required placeholder="Insira as tags separadas por vírgula"
                onChange={(e) => setTags(e.target.value)}
                value={tags} />
            </label>
          
          {!response.loading && <button className="btn">Editar</button>}
          {response.loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {response.error && <p className='error'>{response.error}</p>} 
          {formError && <p className='error'>{formError}</p>}
        </form>    
        </>
        )}
    </div>
  )
}

export default EditPost