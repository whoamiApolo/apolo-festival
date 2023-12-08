import styles from './Header.module.css'
console.log(styles)

import musicLogo from '../assets/music.jpg';
console.log(musicLogo)

export function Header() {
    return (
        <header className={styles.header}>
            <img src={musicLogo} alt="Logotipo do ignite"/>
        </header>
    );
}