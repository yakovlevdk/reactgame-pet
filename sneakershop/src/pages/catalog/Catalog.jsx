import styles from "./catalog.module.css";
import { LeftSide } from "./leftside/LeftSide";
import { RightSide } from "./rightside/RightSide";
import { Header } from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";
export const Catalog = () => {
  return (
    <>
      <Header />
      <div className={styles["catalog-container"]}>
        <LeftSide />
        <RightSide />
      </div>
      <Footer />
    </>
  );
};
