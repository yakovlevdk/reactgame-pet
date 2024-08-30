import { ref, onValue } from "firebase/database";
import { setGames } from "../slices/gameSlice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
export const useLoadDB = () => {
  const dispatch = useDispatch();

  const databaseLoader = () => {
    const gamesDbRef = ref(db, "games");
    onValue(gamesDbRef, (snapshot) => {
      const loadedGames = snapshot.val();
      if (loadedGames) {
        dispatch(setGames(loadedGames));
      }
    });
  };
  return { databaseLoader };
};
