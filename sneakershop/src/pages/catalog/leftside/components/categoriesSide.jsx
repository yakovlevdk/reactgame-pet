import styles from "../leftside.module.css";
import { useCheckCategories } from "../../../../hooks/useCheckCategories";
export const CategoriesSide = () => {
  const { handleCheckCategorie } = useCheckCategories();
  return (
    <>
      <div className={styles["leftside-categories-container"]}>
        <h4>Категории</h4>
        <div className={styles["leftside-categories"]}>
          <div className={styles["leftside-categorie"]}>
            <input
              type="checkbox"
              name="top"
              onChange={(e) => handleCheckCategorie("top", e.target.checked)}
            />
            <label htmlFor="top">Топ продаж</label>
          </div>
          <div className={styles["leftside-categorie"]}>
            <input
              type="checkbox"
              name="rec"
              onChange={(e) => handleCheckCategorie("rec", e.target.checked)}
            />
            <label htmlFor="rec">Рекомендуем</label>
          </div>
          <div className={styles["leftside-categorie"]}>
            <input
              type="checkbox"
              name="new"
              onChange={(e) => handleCheckCategorie("new", e.target.checked)}
            />
            <label htmlFor="new">Новинки</label>
          </div>
          <div className={styles["leftside-categorie"]}>
            <input
              type="checkbox"
              name="sale"
              onChange={(e) => handleCheckCategorie("sale", e.target.checked)}
            />
            <label htmlFor="sale">Скидки</label>
          </div>
        </div>
      </div>
    </>
  );
};
