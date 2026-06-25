import cn from 'classnames'
import heroImg from './../../assets/hero.png'
import styles from './NotFoundPage.module.css'
import { NavLink } from 'react-router-dom'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'

export default function NotFoundPage() {
    return (
        <div className={styles.landingContainer}>
            <Header />

            <main className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h2 className={styles.heroTitle}>
                        Страница <br />
                        <span className={styles.accentText}>не найдена</span>
                    </h2>
                    <div className={styles.ctaGroup}>
                        <button className={cn(styles.btn, styles.btnSecondary)}>
                            <NavLink to="/">На главную</NavLink>
                        </button>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <img
                        src={heroImg}
                        className={styles.heroImage}
                        alt="Draughts gameplay"
                    />
                </div>
            </main>

            <Footer />
        </div>
    )
}
