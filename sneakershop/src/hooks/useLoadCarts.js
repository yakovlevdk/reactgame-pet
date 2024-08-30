import { ref, onValue } from "firebase/database";
import { setCarts } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
export const useLoadCarts = () => {
  const dispatch = useDispatch();

  const databaseLoader = () => {
    const cartsDbRef = ref(db, "carts");
    onValue(cartsDbRef, (snapshot) => {
      const loadedCarts = snapshot.val();
      if (loadedCarts) {
        dispatch(setCarts(loadedCarts));
      }
    });
  };
  return { databaseLoader };
};
