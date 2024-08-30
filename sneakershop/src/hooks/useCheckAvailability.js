import { useDispatch } from "react-redux";
import {
  setAvailability,
  deleteAvailability,
} from "../slices/availabilitySlice";

export const useCheckAvailability = () => {
  const dispatch = useDispatch();
  const handleCheckAvailability = (isChecked) => {
    if (isChecked) {
      dispatch(setAvailability());
    } else {
      dispatch(deleteAvailability());
    }
  };
  return { handleCheckAvailability };
};
