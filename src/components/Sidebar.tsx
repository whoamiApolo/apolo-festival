import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';
//import { Post } from '../Post.jsx'

export function Sidebar() {
    return (
       <>
       <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/08/the-town-palco.jpg" alt="" />
      
        <div className={styles.profile}>
            <Avatar src="https://github.com/whoamiApolo.png" />
       
            <strong>Apolinário</strong>
            <span>Astronauta</span>
        </div>

        <footer>
            <a href="#">
                Editar perfil
                <PencilSimpleLine size={20}/>
            </a>
        </footer>
       </aside>
       </> 
    );
}