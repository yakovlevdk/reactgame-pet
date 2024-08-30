import { useState } from "react";
import "./form.css";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <div className="form-register">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick(email, pass);
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Введите email..."
          />
          <input
            type="password"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
            placeholder="Введите пароль..."
          />
          <button type="submit">{title}</button>
        </form>
      </div>
    </>
  );
};
