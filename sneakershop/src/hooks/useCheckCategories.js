import { useDispatch } from "react-redux";
import { addCategorie } from "../slices/categoriesSlice";
import { deleteCategorie } from "../slices/categoriesSlice";
export const useCheckCategories = () => {
  const dispatch = useDispatch();
  const handleCheckCategorie = (type, isChecked) => {
    if (isChecked) {
      dispatch(addCategorie(type));
    } else {
      dispatch(deleteCategorie(type));
    }
  };
  return { handleCheckCategorie };
};
