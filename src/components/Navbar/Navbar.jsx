import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoIcon}>🎮</span>
          GameVault
        </NavLink>
        <ul className={styles.links}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
              Catálogo
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
              Favoritos
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
              Sobre
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
