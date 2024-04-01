import type { NextPage } from "next";
import {} from "@mui/material";
import styles from "./alert1.module.css";

export type Alert1Type = {
  onClose?: () => void;
};

const Alert1: NextPage<Alert1Type> = ({ onClose }) => {
  return (
    <div className={styles.alert04}>
      <section className={styles.paragraph}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.paragraphWrapper}>
                <div className={styles.paragraph1}>
                  Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam
                  nibh suscipit aliquam dolor.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paragraphContainer}>
            <div className={styles.paragraph2}>
              <b className={styles.iAmA}>Learn More</b>
            </div>
          </div>
        </div>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} loading="lazy" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Alert1;
