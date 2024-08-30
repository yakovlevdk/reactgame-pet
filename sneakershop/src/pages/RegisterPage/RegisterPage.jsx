import { SignUp } from "../../Components/SignUp/SignUp";
import styles from "./register.module.css";
import { Header } from "../../Components/header/header";
export const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className={styles["register-container"]}>
        <h1>Регистрация</h1>
        <SignUp />
        <span>
          Уже зарегистрированы? <a href="/login">Войти</a>
        </span>
      </div>
    </>
  );
};
