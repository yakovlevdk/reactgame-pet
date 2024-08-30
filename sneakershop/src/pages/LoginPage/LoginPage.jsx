import { Login } from "../../Components/Login/Login";
import styles from "./loginpage.module.css";
import { Header } from "../../Components/header/header";
export const LoginPage = () => {
  return (
    <>
    <Header/>
      <div className={styles["login-page-container"]}>
        <h1>Авторизация</h1>
        <Login />
        <span>Ещё не зарегистрированы?</span>
        <a href="/register">Регистрация</a>
      </div>
    </>
  );
};
