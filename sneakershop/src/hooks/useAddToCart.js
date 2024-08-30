import { useAuth } from "./useAuth";
import { useDispatch } from "react-redux";
// import { addToCart } from "../slices/userSlice";
import { addCart } from "../slices/cartSlice";
export const useAddToCart = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const handleAddToCart = (product) => {
    if (isAuth) {
      dispatch(addCart(product));
    }
  };
  return { handleAddToCart };
};
