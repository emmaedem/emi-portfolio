import { useState } from 'react';
import styles from '../Navbar/Navbar.module.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Emi-Portfolio</h1>
      <div className={styles.menu}>
        <img
          className={styles.menuIcon}
          src={menuOpen ? "/nav/close.png" : "/nav/menu.png" }
          alt={menuOpen ? 'close' : 'menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <ul className={styles.menuItems}>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#work">Work</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


