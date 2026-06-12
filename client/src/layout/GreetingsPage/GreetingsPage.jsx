import { useState } from 'react'
import cn from 'classnames'
import reactLogo from './../../assets/react.svg'
import viteLogo from './../../assets/vite.svg'
import heroImg from './../../assets/hero.png'
import styles from './GreetingsPage.module.css'

function MainLayout() {
  const [onlineCount] = useState(1240)

  return (
    <div className={styles.landingContainer}>
      {/* Шапка сайта */}
      <header className={styles.header}>
        <div className={styles.logoZone}>
          <span className={styles.logoIcon}>🏁</span>
          <h1 className={styles.logoTitle}>DraughtsOnline</h1>
        </div>

        <nav className={styles.navMenu}>
          <a href="#rules" className={styles.navLink}>Правила</a>
          <a href="#leaderboard" className={styles.navLink}>Топ игроков</a>
        </nav>

        <div className={styles.authZone}>
          <button className={cn(styles.btn, styles.btnSecondary)}>
            Войти
          </button>
        </div>
      </header>

      {/* Главный блок (Hero Section) */}
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.badgeOnline}>
            <span className={styles.pulseDot}></span>
            Онлайн: {onlineCount} игроков
          </div>
          
          <h2 className={styles.heroTitle}>
            Играй в шашки <br />
            <span className={styles.accentText}>с друзьями онлайн</span>
          </h2>
          
          <p className={styles.heroSubtitle}>
            Классические шашки прямо в твоем браузере. Участвуй в турнирах, 
            поднимайся в рейтинге и находи соперников со всего мира за считанные секунды.
          </p>

          <div className={styles.ctaGroup}>
            <button className={cn(styles.btn, styles.btnPrimary)}>
              Регистрация
            </button>
            <button className={cn(styles.btn, styles.btnOutline)}>
              Войти
            </button>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <div className={styles.imageBgGlow}></div>
          <img src={heroImg} className={styles.heroImage} alt="Draughts gameplay" />
        </div>
      </main>

      {/* Футер */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} DraughtsOnline.</p>
        <div className={styles.techLogos}>
          <span>Сделано на:</span>
          <img src={viteLogo} className={styles.techLogo} alt="Vite logo" />
          <img src={reactLogo} className={styles.techLogo} alt="React logo" />
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
