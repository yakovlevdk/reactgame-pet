import styles from "./about.module.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const data = [
  { label: "Комьюнити", value: 5921 },
  { label: "Игр куплено", value: 3125 },
  { label: "Игр на сайте", value: 152 },
  { label: "Отзывов", value: 103 },
];

export const About = () => {
  return (
    <div className={styles["about_items"]}>
      {data.map((item, index) => {
        const { ref, inView } = useInView({
          once: true,
          threshold: 0.1,
        });

        const props = useSpring({
          from: { number: 0 },
          to: { number: inView ? item.value : 0 },
          config: { duration: 2000 },
        });

        return (
          <div className={styles["about_item"]} key={index} ref={ref}>
            <h5 className={styles["about_item_header"]}>{item.label}</h5>
            <div className={styles["about_item_box"]}>
              <animated.span className={styles["about_item_span"]}>
                {props.number.to((n) => Math.floor(n))}
              </animated.span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
