import cn from 'classnames'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoZone}>
        <span className={styles.logoIcon}>🏁</span>
        <h1 className={styles.logoTitle}>DraughtsOnline</h1>
      </div>
      <nav className={styles.navMenu}>
        <a href="#rules" className={styles.navLink}>
          Правила
        </a>
        <a href="#leaderboard" className={styles.navLink}>
          Топ игроков
        </a>
      </nav>
      <div className={styles.authZone}>
        <button className={cn(styles.btn, styles.btnSecondary)}>
          Войти
        </button>
        <button className={cn(styles.btn, styles.btnSecondary)}>
          Регистрация
        </button>
      </div>
    </header>
  )
}
