import { GameList } from "./components/gamesList/gamesList";
import styles from "./rightside.module.css";
export const RightSide = () => {
  return (
    <>
      <div className={styles["rightside-conrtainer"]}>
        <GameList />
      </div>
    </>
  );
};
