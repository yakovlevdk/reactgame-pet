import { useDispatch } from "react-redux";
import { deleteCart } from "../slices/cartSlice";
import { useAuth } from "./useAuth";
export const useDeleteFromCart = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const handleDeleteFromCart = (productID) => {
    if (isAuth) {
      dispatch(deleteCart(productID));
    }
  };
  return { handleDeleteFromCart };
};
