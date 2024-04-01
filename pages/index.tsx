import type { NextPage } from "next";
import { useState, useRef, useCallback, useEffect } from "react";
import Alert1 from "../components/alert1";
import PortalPopup from "../components/portal-popup";
import StatusBar1 from "../components/status-bar1";
import styles from "./index.module.css";

const Screen1: NextPage = () => {
  const frameContainer2Ref = useRef<HTMLDivElement>(null);
  const [isAlert04Open, setAlert04Open] = useState(false);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openAlert04 = useCallback(() => {
    setAlert04Open(true);
  }, []);

  const closeAlert04 = useCallback(() => {
    setAlert04Open(false);
  }, []);

  return (
    <>
      <div className={styles.screen1}>
        <StatusBar1
          mastersStatusBarPartsAtom="/-masters--status-bar-parts--atoms--indicator-signal.svg"
          mastersStatusBarPartsAtom1="/-masters--status-bar-parts--atoms--indicator-wifi.svg"
          levelStart="/levelstart.svg"
          level2="/level2.svg"
          level3="/level2.svg"
          level4="/level2.svg"
          level5="/level2.svg"
          level6="/level2.svg"
          level7="/level2.svg"
          level8="/level8.svg"
          level9="/level8.svg"
          levelLast="/levellast.svg"
          vector="/error-msg-illustration.svg"
          statusBarBackgroundColor="unset"
          statusBarDisplay="flex"
          statusBarFlexDirection="row"
          mastersStatusBarPosition="unset"
          mastersStatusBarWidth="unset"
          mastersStatusBarTop="unset"
          mastersStatusBarRight="unset"
          mastersStatusBarLeft="unset"
          mastersStatusBarHeight="unset"
          mastersStatusBarFlex="1"
          mastersStatusBarDisplay="flex"
          mastersStatusBarFlexDirection="row"
          mastersStatusBarGap="20px"
          mastersStatusBarPartsLPosition="unset"
          mastersStatusBarPartsLTop="unset"
          mastersStatusBarPartsLLeft="unset"
          mastersStatusBarPartsLHeight="unset"
          mastersStatusBarPartsLDisplay="flex"
          mastersStatusBarPartsLFlexDirection="row"
          mastersStatusBarPartsLPadding="14px 19.5px 9px 29.5px"
          timeGeoPosition="unset"
          timeGeoTop="unset"
          timeGeoLeft="unset"
          timeGeoFlex="1"
          timeColor="#fff"
          timeFlex="1"
          timeMinWidth="29px"
          mastersStatusBarPartsAPosition="unset"
          mastersStatusBarPartsAHeight="unset"
          mastersStatusBarPartsADisplay="flex"
          mastersStatusBarPartsAFlexDirection="row"
          sbIconGeoPosition="relative"
          sbIconGeoHeight="unset"
          sbIconGeoWidth="unset"
          sbIconGeoTop="unset"
          sbIconGeoLeft="unset"
          sbIconGeoColor="#fff"
          sbIconGeoDisplay="inline-block"
          sbIconGeoFlex="1"
          sbIconGeoMinWidth="16px"
          mastersStatusBarPartsRPosition="unset"
          mastersStatusBarPartsRTop="unset"
          mastersStatusBarPartsRRight="unset"
          mastersStatusBarPartsRHeight="unset"
          mastersStatusBarPartsRDisplay="flex"
          mastersStatusBarPartsRFlexDirection="row"
          mastersStatusBarPartsRPadding="16px 8px 12px"
          indicatorsPosition="unset"
          indicatorsTop="unset"
          indicatorsRight="unset"
          mastersStatusBarPartsAMinHeight="16px"
          mastersStatusBarPartsAMinHeight1="16px"
          batteryLevelsWidth="100%"
          batteryLevelsHeight="100%"
          levelStartIconHeight="unset"
          levelStartIconAlignSelf="stretch"
          levelStartIconMaxHeight="100%"
          levelStartIconMinHeight="9px"
          level2IconHeight="unset"
          level2IconAlignSelf="stretch"
          level2IconMaxHeight="100%"
          level2IconMinHeight="9px"
          level3IconHeight="unset"
          level3IconAlignSelf="stretch"
          level3IconMaxHeight="100%"
          level3IconMinHeight="9px"
          level4IconHeight="unset"
          level4IconAlignSelf="stretch"
          level4IconMaxHeight="100%"
          level4IconMinHeight="9px"
          level5IconHeight="unset"
          level5IconAlignSelf="stretch"
          level5IconMaxHeight="100%"
          level5IconMinHeight="9px"
          level6IconHeight="unset"
          level6IconAlignSelf="stretch"
          level6IconMaxHeight="100%"
          level6IconMinHeight="9px"
          level7IconHeight="unset"
          level7IconAlignSelf="stretch"
          level7IconMaxHeight="100%"
          level7IconMinHeight="9px"
          level8IconHeight="unset"
          level8IconOpacity="unset"
          level8IconAlignSelf="stretch"
          level8IconMaxHeight="100%"
          level8IconMinHeight="9px"
          level9IconHeight="unset"
          level9IconOpacity="unset"
          level9IconAlignSelf="stretch"
          level9IconMaxHeight="100%"
          level9IconMinHeight="9px"
          levelLastIconHeight="unset"
          levelLastIconAlignSelf="stretch"
          levelLastIconMaxHeight="100%"
          levelLastIconMinHeight="9px"
          vectorIconOpacity="unset"
        />
        <div className={styles.screen1Inner}>
          <div className={styles.frameParent}>
            <div className={styles.loremIpsumWrapper}>
              <h2 className={styles.loremIpsum}>Lorem Ipsum...</h2>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>
        <div className={styles.screen1Child} data-animate-on-scroll>
          <div className={styles.errorMsgillustrationParent}>
            <img
              className={styles.errorMsgillustrationIcon}
              alt=""
              src="/error-msgillustration.svg"
            />
            <div className={styles.rinotification2Line}>
              <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
            </div>
          </div>
        </div>
        <div
          className={styles.section2ctaButtonWrapper}
          ref={frameContainer2Ref}
          onClick={openAlert04}
        >
          <button className={styles.section2ctaButton}>
            <b className={styles.sendNotification}>Send Notification</b>
          </button>
        </div>
      </div>
      {isAlert04Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={550}
          left={-80}
          relativeLayerRef={frameContainer2Ref}
          onOutsideClick={closeAlert04}
        >
          <Alert1 onClose={closeAlert04} />
        </PortalPopup>
      )}
    </>
  );
};

export default Screen1;
