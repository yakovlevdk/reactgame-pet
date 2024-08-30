import styles from "./collections.module.css";
import { collectionsData } from "./collectionsdb";

export const Collections = () => {
  return (
    <>
      <div className={styles["collections"]}>
        <h1 className={styles["collections_title"]}>ПОДБОРКИ</h1>
        <div className={styles["collection_list"]}>
          <div
            className={styles["collection_list"]}
            style={{ width: "100%", maxWidth: "1200px" }}
          >
            {collectionsData.map(
              ({ title, mvpImage, leftImage, rightImage }, index) => {
                return (
                  <div className={styles["collection_item"]} key={index}>
                    <div className={styles["collection_img_list"]}>
                      <img
                        src={leftImage}
                        width={135}
                        height={185}
                        className={
                          styles["collection_img"] +
                          " " +
                          styles["collection_left_img"]
                        }
                      />
                      <img
                        src={mvpImage}
                        width={150}
                        height={200}
                        className={
                          styles["collection_img"] +
                          " " +
                          styles["collection_mvp_img"]
                        }
                      />
                      <img
                        src={rightImage}
                        width={135}
                        height={185}
                        className={
                          styles["collection_img"] +
                          " " +
                          styles["collection_right_img"]
                        }
                      />
                    </div>
                    <h3 className={styles["collection_name"]}>{title}</h3>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};
