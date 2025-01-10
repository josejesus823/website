import styles from './HeaderComponent.module.css'
const HeaderComponent = () => {
  return (
    <header className={styles.header}>
        <input type="checkbox" name="checkbox" id={styles['menu-toggle']} />
        <label htmlFor="menu-toggle" className={styles['menu-icon-action']}>
            <div className='bx bx-menu' id={styles['menu-icon']}></div>
        </label>

        <ul className={styles.navlist}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
  )
}

export default HeaderComponent
