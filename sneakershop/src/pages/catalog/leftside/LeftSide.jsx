import styles from "./leftside.module.css";
import { PriceSide } from "./components/priceside";
import { CategoriesSide } from "./components/categoriesSide";
import { GenresSide } from "./components/genresSide";
export const LeftSide = () => {
  return (
    <>
      <div className={styles["leftside-container"]}>
        <h1>Каталог игр</h1>
        <PriceSide />
        <CategoriesSide />
        <GenresSide />
      </div>
    </>
  );
};
