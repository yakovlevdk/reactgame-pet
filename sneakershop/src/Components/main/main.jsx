import styles from "./main.module.css";
import { Popular } from "./components/popular/popular";
import { Genres } from "./components/genres/genres";
import { GameStyles } from "./components/gamestyles/gamestyles";
import { About } from "./components/about/about";
import { Collections } from "./components/collections/collections";
import { News } from "./components/news/news";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
export const Main = () => {
  return (
    <>
      <div className={styles["main"]}>
        <Header />
        <Popular />
        <Genres />
        <GameStyles />
        <About />
        <Collections />
        <News />
        <Footer />
      </div>
    </>
  );
};
