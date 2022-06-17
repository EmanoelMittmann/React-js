//CSS
import styles from './About.module.css';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
        <h2 className={styles.titulo}>Sobre o Mini <span>Blog</span></h2>
        <p className={styles.paragrafo}>
          Este projeto consiste em um blog feito com React no front-end e Firebase no Back-end.
        </p>
        <Link to="/posts/create" className="btn">
          Criar post
        </Link>
    </div>
  )
}

export default About