import cn from "classnames";
import styles from "./Register.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router";

export default function Register() {
  return (
    <div className={styles.landingContainer}>
      <Header />
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>
            Создание
            <span className={styles.accentText}> аккаунта</span>
          </h2>
          <div className={styles.ctaGroup}>
            <form>
              <input placeholder={"Имя"} className={cn(styles.input)} />
              <input placeholder={"Email"} className={cn(styles.input)} />
              <input placeholder={"Пароль"} className={cn(styles.input)} />
              <input
                placeholder={"Повторить пароль"}
                className={cn(styles.input)}
              />
              <button className={cn(styles.submitBtn, styles.btnPrimary)}>
                Регистрация
              </button>
              <span>
                Уже есть аккаунт?<NavLink to="/login"> Авторизуйтесь.</NavLink>
              </span>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
