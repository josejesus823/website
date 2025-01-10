import styles from '../SectionHeroComponent/SectionHeroComponent.module.css'
import HoverImageComponent from "../HoverImageComponent/HoverImageComponent"

const SectionHeroComponent = () => {
    return (
        <>
            <section className={`${styles.section} ${styles.hero}`}>
                <div className={styles['hero-text']}>
                    <h5>Front & Back Developer</h5>
                    <h4>My technologies: 
                        <span className={styles.content}>
                            <span className={styles.visible}>
                                <ul className={styles.techs}>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>Python</li>
                                </ul>
                            </span>
                        </span>
                    </h4>
                    <h1>José Jesús Vargas</h1>
                    {/* <p>Desarrollador de software Front & Back</p> */}
                    <a href="https://drive.google.com/file/d/1bJBQPt8L0tNVjdfY_STKoaH_cp8hcGYQ/view?usp=sharing" target='_blank'>CV</a>
                    <a href="#" className={styles.proyectos}><i className=''></i>Mira mis proyectos</a>
                </div>
                
                <div className={styles['hero-img']}>
                    <HoverImageComponent src={"/imagenJoseweb.png"}/>
                </div>

            </section>
        </>
    )
}
export default SectionHeroComponent