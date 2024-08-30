import { useEffect, useState } from "react";
import styles from "../leftside.module.css";
import { useCheckGengres } from "../../../../hooks/useCheckGenres";
const genresToShow = [
  { name: "Экшен", id: "action" },
  { name: "Инди", id: "indie" },
  { name: "Стратегии", id: "strategy" },
  { name: "Приключения", id: "adventure" },
  { name: "Шутер", id: "shooter" },
  { name: "РПГ", id: "rpg" },
];
export const GenresSide = () => {
  const [numberGenresToShow, setNumberGenresToShow] = useState(4);
  const [newGenresArray, setNewGenresArray] = useState([]);
  const { handleCheckGenres } = useCheckGengres();

  const handleMoreShow = () => {
    setNumberGenresToShow(genresToShow.length);
  };

  const handleMinShow = () => {
    setNumberGenresToShow(4);
  };

  useEffect(() => {
    setNewGenresArray(genresToShow.slice(0, numberGenresToShow));
  }, [numberGenresToShow]);

  return (
    <>
      <div className={styles["leftside-genres-container"]}>
        <h4>Жанры</h4>
        <div className={styles["leftside-genre-input"]}>
          <input type="text" placeholder="Поиск по названию..." />
        </div>
        <div className={styles["leftside-genres"]}>
          {newGenresArray.map(({ name, id }, index) => {
            return (
              <>
                <div className={styles["leftside-genre"]} key={index}>
                  <input
                    type="checkbox"
                    name={id}
                    onChange={(e) => handleCheckGenres(e.target.checked, name)}
                  />
                  <label htmlFor={id}>{name}</label>
                </div>
              </>
            );
          })}

          {newGenresArray.length < genresToShow.length && (
            <span onClick={handleMoreShow} className={styles["genres_span"]}>
              Показать больше
            </span>
          )}
          {newGenresArray.length === genresToShow.length && (
            <span onClick={handleMinShow} className={styles["genres_span"]}>
              Скрыть
            </span>
          )}
        </div>
      </div>
    </>
  );
};
