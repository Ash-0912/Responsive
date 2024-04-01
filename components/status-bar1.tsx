import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./status-bar1.module.css";

export type StatusBar1Type = {
  mastersStatusBarPartsAtom?: string;
  mastersStatusBarPartsAtom1?: string;
  levelStart?: string;
  level2?: string;
  level3?: string;
  level4?: string;
  level5?: string;
  level6?: string;
  level7?: string;
  level8?: string;
  level9?: string;
  levelLast?: string;
  vector?: string;

  /** Style props */
  statusBarBackgroundColor?: CSSProperties["backgroundColor"];
  statusBarDisplay?: CSSProperties["display"];
  statusBarFlexDirection?: CSSProperties["flexDirection"];
  mastersStatusBarPosition?: CSSProperties["position"];
  mastersStatusBarWidth?: CSSProperties["width"];
  mastersStatusBarTop?: CSSProperties["top"];
  mastersStatusBarRight?: CSSProperties["right"];
  mastersStatusBarLeft?: CSSProperties["left"];
  mastersStatusBarHeight?: CSSProperties["height"];
  mastersStatusBarFlex?: CSSProperties["flex"];
  mastersStatusBarDisplay?: CSSProperties["display"];
  mastersStatusBarFlexDirection?: CSSProperties["flexDirection"];
  mastersStatusBarGap?: CSSProperties["gap"];
  mastersStatusBarPartsLPosition?: CSSProperties["position"];
  mastersStatusBarPartsLTop?: CSSProperties["top"];
  mastersStatusBarPartsLLeft?: CSSProperties["left"];
  mastersStatusBarPartsLHeight?: CSSProperties["height"];
  mastersStatusBarPartsLDisplay?: CSSProperties["display"];
  mastersStatusBarPartsLFlexDirection?: CSSProperties["flexDirection"];
  mastersStatusBarPartsLPadding?: CSSProperties["padding"];
  timeGeoPosition?: CSSProperties["position"];
  timeGeoTop?: CSSProperties["top"];
  timeGeoLeft?: CSSProperties["left"];
  timeGeoFlex?: CSSProperties["flex"];
  timeColor?: CSSProperties["color"];
  timeFlex?: CSSProperties["flex"];
  timeMinWidth?: CSSProperties["minWidth"];
  mastersStatusBarPartsAPosition?: CSSProperties["position"];
  mastersStatusBarPartsAHeight?: CSSProperties["height"];
  mastersStatusBarPartsADisplay?: CSSProperties["display"];
  mastersStatusBarPartsAFlexDirection?: CSSProperties["flexDirection"];
  sbIconGeoPosition?: CSSProperties["position"];
  sbIconGeoHeight?: CSSProperties["height"];
  sbIconGeoWidth?: CSSProperties["width"];
  sbIconGeoTop?: CSSProperties["top"];
  sbIconGeoLeft?: CSSProperties["left"];
  sbIconGeoColor?: CSSProperties["color"];
  sbIconGeoDisplay?: CSSProperties["display"];
  sbIconGeoFlex?: CSSProperties["flex"];
  sbIconGeoMinWidth?: CSSProperties["minWidth"];
  mastersStatusBarPartsRPosition?: CSSProperties["position"];
  mastersStatusBarPartsRTop?: CSSProperties["top"];
  mastersStatusBarPartsRRight?: CSSProperties["right"];
  mastersStatusBarPartsRHeight?: CSSProperties["height"];
  mastersStatusBarPartsRDisplay?: CSSProperties["display"];
  mastersStatusBarPartsRFlexDirection?: CSSProperties["flexDirection"];
  mastersStatusBarPartsRPadding?: CSSProperties["padding"];
  indicatorsPosition?: CSSProperties["position"];
  indicatorsTop?: CSSProperties["top"];
  indicatorsRight?: CSSProperties["right"];
  mastersStatusBarPartsAMinHeight?: CSSProperties["minHeight"];
  mastersStatusBarPartsAMinHeight1?: CSSProperties["minHeight"];
  batteryLevelsWidth?: CSSProperties["width"];
  batteryLevelsHeight?: CSSProperties["height"];
  levelStartIconHeight?: CSSProperties["height"];
  levelStartIconAlignSelf?: CSSProperties["alignSelf"];
  levelStartIconMaxHeight?: CSSProperties["maxHeight"];
  levelStartIconMinHeight?: CSSProperties["minHeight"];
  level2IconHeight?: CSSProperties["height"];
  level2IconAlignSelf?: CSSProperties["alignSelf"];
  level2IconMaxHeight?: CSSProperties["maxHeight"];
  level2IconMinHeight?: CSSProperties["minHeight"];
  level3IconHeight?: CSSProperties["height"];
  level3IconAlignSelf?: CSSProperties["alignSelf"];
  level3IconMaxHeight?: CSSProperties["maxHeight"];
  level3IconMinHeight?: CSSProperties["minHeight"];
  level4IconHeight?: CSSProperties["height"];
  level4IconAlignSelf?: CSSProperties["alignSelf"];
  level4IconMaxHeight?: CSSProperties["maxHeight"];
  level4IconMinHeight?: CSSProperties["minHeight"];
  level5IconHeight?: CSSProperties["height"];
  level5IconAlignSelf?: CSSProperties["alignSelf"];
  level5IconMaxHeight?: CSSProperties["maxHeight"];
  level5IconMinHeight?: CSSProperties["minHeight"];
  level6IconHeight?: CSSProperties["height"];
  level6IconAlignSelf?: CSSProperties["alignSelf"];
  level6IconMaxHeight?: CSSProperties["maxHeight"];
  level6IconMinHeight?: CSSProperties["minHeight"];
  level7IconHeight?: CSSProperties["height"];
  level7IconAlignSelf?: CSSProperties["alignSelf"];
  level7IconMaxHeight?: CSSProperties["maxHeight"];
  level7IconMinHeight?: CSSProperties["minHeight"];
  level8IconHeight?: CSSProperties["height"];
  level8IconOpacity?: CSSProperties["opacity"];
  level8IconAlignSelf?: CSSProperties["alignSelf"];
  level8IconMaxHeight?: CSSProperties["maxHeight"];
  level8IconMinHeight?: CSSProperties["minHeight"];
  level9IconHeight?: CSSProperties["height"];
  level9IconOpacity?: CSSProperties["opacity"];
  level9IconAlignSelf?: CSSProperties["alignSelf"];
  level9IconMaxHeight?: CSSProperties["maxHeight"];
  level9IconMinHeight?: CSSProperties["minHeight"];
  levelLastIconHeight?: CSSProperties["height"];
  levelLastIconAlignSelf?: CSSProperties["alignSelf"];
  levelLastIconMaxHeight?: CSSProperties["maxHeight"];
  levelLastIconMinHeight?: CSSProperties["minHeight"];
  vectorIconOpacity?: CSSProperties["opacity"];
};

const StatusBar1: NextPage<StatusBar1Type> = ({
  mastersStatusBarPartsAtom,
  mastersStatusBarPartsAtom1,
  levelStart,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  levelLast,
  vector,
  statusBarBackgroundColor,
  statusBarDisplay,
  statusBarFlexDirection,
  mastersStatusBarPosition,
  mastersStatusBarWidth,
  mastersStatusBarTop,
  mastersStatusBarRight,
  mastersStatusBarLeft,
  mastersStatusBarHeight,
  mastersStatusBarFlex,
  mastersStatusBarDisplay,
  mastersStatusBarFlexDirection,
  mastersStatusBarGap,
  mastersStatusBarPartsLPosition,
  mastersStatusBarPartsLTop,
  mastersStatusBarPartsLLeft,
  mastersStatusBarPartsLHeight,
  mastersStatusBarPartsLDisplay,
  mastersStatusBarPartsLFlexDirection,
  mastersStatusBarPartsLPadding,
  timeGeoPosition,
  timeGeoTop,
  timeGeoLeft,
  timeGeoFlex,
  timeColor,
  timeFlex,
  timeMinWidth,
  mastersStatusBarPartsAPosition,
  mastersStatusBarPartsAHeight,
  mastersStatusBarPartsADisplay,
  mastersStatusBarPartsAFlexDirection,
  sbIconGeoPosition,
  sbIconGeoHeight,
  sbIconGeoWidth,
  sbIconGeoTop,
  sbIconGeoLeft,
  sbIconGeoColor,
  sbIconGeoDisplay,
  sbIconGeoFlex,
  sbIconGeoMinWidth,
  mastersStatusBarPartsRPosition,
  mastersStatusBarPartsRTop,
  mastersStatusBarPartsRRight,
  mastersStatusBarPartsRHeight,
  mastersStatusBarPartsRDisplay,
  mastersStatusBarPartsRFlexDirection,
  mastersStatusBarPartsRPadding,
  indicatorsPosition,
  indicatorsTop,
  indicatorsRight,
  mastersStatusBarPartsAMinHeight,
  mastersStatusBarPartsAMinHeight1,
  batteryLevelsWidth,
  batteryLevelsHeight,
  levelStartIconHeight,
  levelStartIconAlignSelf,
  levelStartIconMaxHeight,
  levelStartIconMinHeight,
  level2IconHeight,
  level2IconAlignSelf,
  level2IconMaxHeight,
  level2IconMinHeight,
  level3IconHeight,
  level3IconAlignSelf,
  level3IconMaxHeight,
  level3IconMinHeight,
  level4IconHeight,
  level4IconAlignSelf,
  level4IconMaxHeight,
  level4IconMinHeight,
  level5IconHeight,
  level5IconAlignSelf,
  level5IconMaxHeight,
  level5IconMinHeight,
  level6IconHeight,
  level6IconAlignSelf,
  level6IconMaxHeight,
  level6IconMinHeight,
  level7IconHeight,
  level7IconAlignSelf,
  level7IconMaxHeight,
  level7IconMinHeight,
  level8IconHeight,
  level8IconOpacity,
  level8IconAlignSelf,
  level8IconMaxHeight,
  level8IconMinHeight,
  level9IconHeight,
  level9IconOpacity,
  level9IconAlignSelf,
  level9IconMaxHeight,
  level9IconMinHeight,
  levelLastIconHeight,
  levelLastIconAlignSelf,
  levelLastIconMaxHeight,
  levelLastIconMinHeight,
  vectorIconOpacity,
}) => {
  const statusBarStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusBarBackgroundColor,
      display: statusBarDisplay,
      flexDirection: statusBarFlexDirection,
    };
  }, [statusBarBackgroundColor, statusBarDisplay, statusBarFlexDirection]);

  const mastersStatusBarStyle: CSSProperties = useMemo(() => {
    return {
      position: mastersStatusBarPosition,
      width: mastersStatusBarWidth,
      top: mastersStatusBarTop,
      right: mastersStatusBarRight,
      left: mastersStatusBarLeft,
      height: mastersStatusBarHeight,
      flex: mastersStatusBarFlex,
      display: mastersStatusBarDisplay,
      flexDirection: mastersStatusBarFlexDirection,
      gap: mastersStatusBarGap,
    };
  }, [
    mastersStatusBarPosition,
    mastersStatusBarWidth,
    mastersStatusBarTop,
    mastersStatusBarRight,
    mastersStatusBarLeft,
    mastersStatusBarHeight,
    mastersStatusBarFlex,
    mastersStatusBarDisplay,
    mastersStatusBarFlexDirection,
    mastersStatusBarGap,
  ]);

  const mastersStatusBarPartsLStyle: CSSProperties = useMemo(() => {
    return {
      position: mastersStatusBarPartsLPosition,
      top: mastersStatusBarPartsLTop,
      left: mastersStatusBarPartsLLeft,
      height: mastersStatusBarPartsLHeight,
      display: mastersStatusBarPartsLDisplay,
      flexDirection: mastersStatusBarPartsLFlexDirection,
      padding: mastersStatusBarPartsLPadding,
    };
  }, [
    mastersStatusBarPartsLPosition,
    mastersStatusBarPartsLTop,
    mastersStatusBarPartsLLeft,
    mastersStatusBarPartsLHeight,
    mastersStatusBarPartsLDisplay,
    mastersStatusBarPartsLFlexDirection,
    mastersStatusBarPartsLPadding,
  ]);

  const timeGeoStyle: CSSProperties = useMemo(() => {
    return {
      position: timeGeoPosition,
      top: timeGeoTop,
      left: timeGeoLeft,
      flex: timeGeoFlex,
    };
  }, [timeGeoPosition, timeGeoTop, timeGeoLeft, timeGeoFlex]);

  const timeStyle: CSSProperties = useMemo(() => {
    return {
      color: timeColor,
      flex: timeFlex,
      minWidth: timeMinWidth,
    };
  }, [timeColor, timeFlex, timeMinWidth]);

  const mastersStatusBarPartsAStyle: CSSProperties = useMemo(() => {
    return {
      position: mastersStatusBarPartsAPosition,
      height: mastersStatusBarPartsAHeight,
      display: mastersStatusBarPartsADisplay,
      flexDirection: mastersStatusBarPartsAFlexDirection,
    };
  }, [
    mastersStatusBarPartsAPosition,
    mastersStatusBarPartsAHeight,
    mastersStatusBarPartsADisplay,
    mastersStatusBarPartsAFlexDirection,
  ]);

  const sbIconGeoStyle: CSSProperties = useMemo(() => {
    return {
      position: sbIconGeoPosition,
      height: sbIconGeoHeight,
      width: sbIconGeoWidth,
      top: sbIconGeoTop,
      left: sbIconGeoLeft,
      color: sbIconGeoColor,
      display: sbIconGeoDisplay,
      flex: sbIconGeoFlex,
      minWidth: sbIconGeoMinWidth,
    };
  }, [
    sbIconGeoPosition,
    sbIconGeoHeight,
    sbIconGeoWidth,
    sbIconGeoTop,
    sbIconGeoLeft,
    sbIconGeoColor,
    sbIconGeoDisplay,
    sbIconGeoFlex,
    sbIconGeoMinWidth,
  ]);

  const mastersStatusBarPartsRStyle: CSSProperties = useMemo(() => {
    return {
      position: mastersStatusBarPartsRPosition,
      top: mastersStatusBarPartsRTop,
      right: mastersStatusBarPartsRRight,
      height: mastersStatusBarPartsRHeight,
      display: mastersStatusBarPartsRDisplay,
      flexDirection: mastersStatusBarPartsRFlexDirection,
      padding: mastersStatusBarPartsRPadding,
    };
  }, [
    mastersStatusBarPartsRPosition,
    mastersStatusBarPartsRTop,
    mastersStatusBarPartsRRight,
    mastersStatusBarPartsRHeight,
    mastersStatusBarPartsRDisplay,
    mastersStatusBarPartsRFlexDirection,
    mastersStatusBarPartsRPadding,
  ]);

  const indicatorsStyle: CSSProperties = useMemo(() => {
    return {
      position: indicatorsPosition,
      top: indicatorsTop,
      right: indicatorsRight,
    };
  }, [indicatorsPosition, indicatorsTop, indicatorsRight]);

  const mastersStatusBarPartsA1Style: CSSProperties = useMemo(() => {
    return {
      minHeight: mastersStatusBarPartsAMinHeight,
    };
  }, [mastersStatusBarPartsAMinHeight]);

  const mastersStatusBarPartsA2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: mastersStatusBarPartsAMinHeight1,
    };
  }, [mastersStatusBarPartsAMinHeight1]);

  const batteryLevelsStyle: CSSProperties = useMemo(() => {
    return {
      width: batteryLevelsWidth,
      height: batteryLevelsHeight,
    };
  }, [batteryLevelsWidth, batteryLevelsHeight]);

  const levelStartIconStyle: CSSProperties = useMemo(() => {
    return {
      height: levelStartIconHeight,
      alignSelf: levelStartIconAlignSelf,
      maxHeight: levelStartIconMaxHeight,
      minHeight: levelStartIconMinHeight,
    };
  }, [
    levelStartIconHeight,
    levelStartIconAlignSelf,
    levelStartIconMaxHeight,
    levelStartIconMinHeight,
  ]);

  const level2IconStyle: CSSProperties = useMemo(() => {
    return {
      height: level2IconHeight,
      alignSelf: level2IconAlignSelf,
      maxHeight: level2IconMaxHeight,
      minHeight: level2IconMinHeight,
    };
  }, [
    level2IconHeight,
    level2IconAlignSelf,
    level2IconMaxHeight,
    level2IconMinHeight,
  ]);

  const level3IconStyle: CSSProperties = useMemo(() => {
    return {
      height: level3IconHeight,
      alignSelf: level3IconAlignSelf,
      maxHeight: level3IconMaxHeight,
      minHeight: level3IconMinHeight,
    };
  }, [
    level3IconHeight,
    level3IconAlignSelf,
    level3IconMaxHeight,
    level3IconMinHeight,
  ]);

  const level4IconStyle: CSSProperties = useMemo(() => {
    return {
      height: level4IconHeight,
      alignSelf: level4IconAlignSelf,
      maxHeight: level4IconMaxHeight,
      minHeight: level4IconMinHeight,
    };
  }, [
    level4IconHeight,
    level4IconAlignSelf,
    level4IconMaxHeight,
    level4IconMinHeight,
  ]);

  const level5IconStyle: CSSProperties = useMemo(() => {
    return {
      height: level5IconHeight,
      alignSelf: level5IconAlignSelf,
      maxHeight: level5IconMaxHeight,
      minHeight: level5IconMinHeight,
    };
  }, [
    level5IconHeight,
    level5IconAlignSelf,
    level5IconMaxHeight,
    level5IconMinHeight,
  ]);

  const level6IconStyle: CSSProperties = useMemo(() => {
    return {
      height: level6IconHeight,
      alignSelf: level6IconAlignSelf,
      maxHeight: level6IconMaxHeight,
      minHeight: level6IconMinHeight,
    };
  }, [
    level6IconHeight,
    level6IconAlignSelf,
    level6IconMaxHeight,
    level6IconMinHeight,
  ]);

  const level7IconStyle: CSSProperties = useMemo(() => {
    return {
      height: level7IconHeight,
      alignSelf: level7IconAlignSelf,
      maxHeight: level7IconMaxHeight,
      minHeight: level7IconMinHeight,
    };
  }, [
    level7IconHeight,
    level7IconAlignSelf,
    level7IconMaxHeight,
    level7IconMinHeight,
  ]);

  const level8IconStyle: CSSProperties = useMemo(() => {
    return {
      height: level8IconHeight,
      opacity: level8IconOpacity,
      alignSelf: level8IconAlignSelf,
      maxHeight: level8IconMaxHeight,
      minHeight: level8IconMinHeight,
    };
  }, [
    level8IconHeight,
    level8IconOpacity,
    level8IconAlignSelf,
    level8IconMaxHeight,
    level8IconMinHeight,
  ]);

  const level9IconStyle: CSSProperties = useMemo(() => {
    return {
      height: level9IconHeight,
      opacity: level9IconOpacity,
      alignSelf: level9IconAlignSelf,
      maxHeight: level9IconMaxHeight,
      minHeight: level9IconMinHeight,
    };
  }, [
    level9IconHeight,
    level9IconOpacity,
    level9IconAlignSelf,
    level9IconMaxHeight,
    level9IconMinHeight,
  ]);

  const levelLastIconStyle: CSSProperties = useMemo(() => {
    return {
      height: levelLastIconHeight,
      alignSelf: levelLastIconAlignSelf,
      maxHeight: levelLastIconMaxHeight,
      minHeight: levelLastIconMinHeight,
    };
  }, [
    levelLastIconHeight,
    levelLastIconAlignSelf,
    levelLastIconMaxHeight,
    levelLastIconMinHeight,
  ]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      opacity: vectorIconOpacity,
    };
  }, [vectorIconOpacity]);

  return (
    <div className={styles.statusBar} style={statusBarStyle}>
      <div className={styles.mastersStatusBar} style={mastersStatusBarStyle}>
        <div
          className={styles.mastersStatusBarPartsL}
          style={mastersStatusBarPartsLStyle}
        >
          <div className={styles.timeGeo} style={timeGeoStyle}>
            <div className={styles.time} style={timeStyle}>
              1:11
            </div>
            <div
              className={styles.mastersStatusBarPartsA}
              style={mastersStatusBarPartsAStyle}
            >
              <div className={styles.sbIconGeo} style={sbIconGeoStyle}>
                􀋒
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.mastersStatusBarPartsR}
          style={mastersStatusBarPartsRStyle}
        >
          <div className={styles.indicators} style={indicatorsStyle}>
            <img
              className={styles.mastersStatusBarPartsA1}
              alt=""
              src={mastersStatusBarPartsAtom}
              style={mastersStatusBarPartsA1Style}
            />
            <img
              className={styles.mastersStatusBarPartsA2}
              alt=""
              src={mastersStatusBarPartsAtom1}
              style={mastersStatusBarPartsA2Style}
            />
            <div className={styles.mastersStatusBarPartsA3}>
              <div className={styles.levels}>
                <div
                  className={styles.batteryLevels}
                  style={batteryLevelsStyle}
                >
                  <img
                    className={styles.levelStartIcon}
                    alt=""
                    src={levelStart}
                    style={levelStartIconStyle}
                  />
                  <img
                    className={styles.level2Icon}
                    alt=""
                    src={level2}
                    style={level2IconStyle}
                  />
                  <img
                    className={styles.level3Icon}
                    alt=""
                    src={level3}
                    style={level3IconStyle}
                  />
                  <img
                    className={styles.level4Icon}
                    alt=""
                    src={level4}
                    style={level4IconStyle}
                  />
                  <img
                    className={styles.level5Icon}
                    alt=""
                    src={level5}
                    style={level5IconStyle}
                  />
                  <img
                    className={styles.level6Icon}
                    alt=""
                    src={level6}
                    style={level6IconStyle}
                  />
                  <img
                    className={styles.level7Icon}
                    alt=""
                    src={level7}
                    style={level7IconStyle}
                  />
                  <img
                    className={styles.level8Icon}
                    alt=""
                    src={level8}
                    style={level8IconStyle}
                  />
                  <img
                    className={styles.level9Icon}
                    alt=""
                    src={level9}
                    style={level9IconStyle}
                  />
                  <img
                    className={styles.levelLastIcon}
                    alt=""
                    src={levelLast}
                    style={levelLastIconStyle}
                  />
                </div>
              </div>
              <img
                className={styles.vectorIcon}
                alt=""
                src={vector}
                style={vectorIconStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar1;
