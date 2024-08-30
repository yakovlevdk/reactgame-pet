import styles from "./news.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { newsData } from "./newsdb";
export const News = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };
  return (
    <>
      <div className={styles["news"]}>
        <h1>Новости и статьи</h1>
        <div className={styles["slider-container"]}>
          <Slider {...settings}>
            {newsData.map(({ title, minDescription, src }, index) => {
              return (
                <div className={styles["new"]} key={index}>
                  <div className={styles["new_img-container"]}>
                    <img src={src} width={450} height={250} />
                  </div>
                  <div className={styles["new_text-container"]}>
                    <h4>{title}</h4>
                    <p>{minDescription}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className={styles["new_button-container"]}>
            <button className={styles["new_button"]}>Все новости </button>
          </div>
        </div>
      </div>
    </>
  );
};
