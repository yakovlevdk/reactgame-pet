import { useDispatch } from "react-redux";
import { addGenre, deleteGenre } from "../slices/setGenreSlice";

export const useCheckGengres = () => {
  const dispatch = useDispatch();
  const handleCheckGenres = (isChecked, genre) => {
    if (isChecked) {
      dispatch(addGenre(genre));
    } else {
      dispatch(deleteGenre(genre));
    }
  };
  return { handleCheckGenres };
};
