import { Form } from "../Form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid, // здесь должно быть user.uid, а не user.id
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        console.error("Ошибка регистрации:", error.message);
        // Обрабатывайте ошибку по необходимости
      });
  };
  return (
    <>
      <Form title="Регистрация" handleClick={handleRegister} />
    </>
  );
};
