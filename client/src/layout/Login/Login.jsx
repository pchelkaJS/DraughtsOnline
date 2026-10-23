import cn from "classnames";
import styles from "./Login.module.css";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Login() {
  async function login() {
    const nameOrEmail = document.querySelector(cn(styles.input))[0];
    const password = document.querySelector(cn(styles.input))[1];
    const res = axios.get()
  }

  return (
    <div className={styles.landingContainer}>
      <Header />
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>
            Вход
            <span className={styles.accentText}> в аккаунт</span>
          </h2>
          <div className={styles.ctaGroup}>
            <form>
              <input placeholder={"Имя / Email"} className={cn(styles.input)} />
              <input placeholder={"Пароль"} className={cn(styles.input)} />
              <button className={cn(styles.submitBtn, styles.btnPrimary)}>
                Вход
              </button>
              <span>
                Нет аккаунта?
                <NavLink to="/register">
                  <span className={cn(styles.linkBlue)}>
                    {" "}
                    Зарегистрируйтесь.
                  </span>
                </NavLink>
              </span>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
