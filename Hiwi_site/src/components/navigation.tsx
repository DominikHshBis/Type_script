import styles from '../styles/navigation.module.css';

export default function Navbar(){
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navlist}>
                <li><a href="/">Start</a></li>
            </ul>
        </nav>
    );
}
