import reactLogo from './../../assets/react.svg'
import viteLogo from './../../assets/vite.svg'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} DraughtsOnline.</p>
      <div className={styles.techLogos}>
        <span>Сделано на:</span>
        <img src={viteLogo} className={styles.techLogo} alt="Vite logo" />
        <img src={reactLogo} className={styles.techLogo} alt="React logo" />
      </div>
    </footer>
  )
}
