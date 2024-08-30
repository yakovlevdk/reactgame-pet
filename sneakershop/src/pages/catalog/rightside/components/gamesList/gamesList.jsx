import styles from "./gamelist.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoadDB } from "../../../../../hooks/loadDB";
import { FoundedGamesByCategories } from "./foundedGamesLists/founedGamess";
import { AllGamesList } from "./allGamesList";
import { FoundedGamesByAvailability } from "./foundedGamesLists/founedGamesByAvailability";
import { GeneralFoundedGames } from "./foundedGamesLists/generalFoundedGames";
import { FoundedGamesByGenres } from "./foundedGamesByGenres";
export const GameList = () => {
  const categories = useSelector((state) => state.categories.categories);
  const availability = useSelector((state) => state.availability.availability);
  const genres = useSelector((state) => state.setGenre.genre);
  const { databaseLoader } = useLoadDB();
  useEffect(() => {
    databaseLoader();
  }, []);

  return (
    <div className={styles["gameslist-cards"]}>
      {categories.length > 0 && <FoundedGamesByCategories />}
      {availability && <FoundedGamesByAvailability />}
      {<GeneralFoundedGames />}
      {categories.length === 0 && !availability && genres.length === 0 && (
        <AllGamesList />
      )}
      {genres.length > 0 && <FoundedGamesByGenres />}
    </div>
  );
};
