import { useDispatch } from "react-redux";
import { setGenre } from "../../../../slices/genresSlice";
import { GenresCard } from "./genresCard";
import { useChooseCurrentGenre } from "../../../../hooks/useChooseCurrentGenre";
import styles from "./genres.module.css";
import { useNavigate } from "react-router-dom";
export const Genres = () => {
  const dispatch = useDispatch();

  const { currentGenre, handleChangeCurrentGenre } = useChooseCurrentGenre();
  const navigate = useNavigate();
  return (
    <>
      <div className={styles["genres"]}>
        <div className={styles["choiceGenre"]}>
          <span
            className={
              styles.genre + (currentGenre === "top" ? " " + styles.active : "")
            }
            onClick={() => {
              handleChangeCurrentGenre("top");
              dispatch(setGenre("top"));
            }}
          >
            {" "}
            Топ продаж
          </span>

          <span
            className={
              styles.genre + (currentGenre === "rec" ? " " + styles.active : "")
            }
            onClick={() => {
              handleChangeCurrentGenre("rec");
              dispatch(setGenre("rec"));
            }}
          >
            {" "}
            Рекомендуем
          </span>
          <span
            className={
              styles.genre + (currentGenre === "new" ? " " + styles.active : "")
            }
            onClick={() => {
              handleChangeCurrentGenre("new");
              dispatch(setGenre("new"));
            }}
          >
            {" "}
            Новинки
          </span>
          <span
            className={
              styles.genre +
              (currentGenre === "sale" ? " " + styles.active : "")
            }
            onClick={() => {
              handleChangeCurrentGenre("sale");
              dispatch(setGenre("sale"));
            }}
          >
            {" "}
            Скидки{" "}
          </span>
          <span
            className={
              styles.genre +
              (currentGenre === "soon" ? " " + styles.active : "")
            }
            onClick={() => {
              handleChangeCurrentGenre("soon");
              dispatch(setGenre("soon"));
            }}
          >
            {" "}
            Скоро...
          </span>
        </div>
        <GenresCard />
        <div className="btn">
          <button className="style_button" onClick={() => navigate("/catalog")}>
            В каталог
          </button>
        </div>
      </div>
    </>
  );
};
