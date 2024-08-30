import styles from "../leftside.module.css";
import { useCheckAvailability } from "../../../../hooks/useCheckAvailability";
export const PriceSide = () => {
  const { handleCheckAvailability } = useCheckAvailability();

  return (
    <>
      <div className={styles["leftside-price-container"]}>
        <h4>Цена</h4>
        <div className={styles["leftside-price-inputs"]}>
          <input type="text" placeholder="От" />
          <input type="text" placeholder="До" />
        </div>

        <div className={styles["leftside-price-checkbox"]}>
          <input
            type="checkbox"
            name="nalichie"
            onChange={(e) => {
              handleCheckAvailability(e.target.checked);
            }}
          />
          <label htmlFor="nalichie">Только в наличии</label>
        </div>
        <div className={styles["leftside-price-checkbox"]}>
          <input type="checkbox" name="commis" />
          <label htmlFor="commis">Оплата без коммисии</label>
        </div>
      </div>
    </>
  );
};
