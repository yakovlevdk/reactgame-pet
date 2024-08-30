import { Form } from "../Form/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert("Неправильные данные"));
  };
  return (
    <>
      <Form title="Войти" handleClick={handleLogin} />
    </>
  );
};
