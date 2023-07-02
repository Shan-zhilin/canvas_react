import React from "react";
import styles from "./palette.module.less";
import DrawBtns from "./components/drawBtns/drawBtns";
import Options from "./components/options/options";

function Palette() {
  return (
    <div className={styles.palette_box}>
      <div className={styles.palette_con}>
        <div className={styles.palette_left}>
          <DrawBtns />
        </div>
        <div className={styles.palette_right}>
          <div className={styles.palette_disposition}>
            <Options />
          </div>
          <div className={styles.palette_canvas}>
            <canvas id="canvas" width="1200px" height="350px"></canvas>
          </div>
        </div>
      </div>
      <div className={styles.palette_bottom}>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">CopyRight@2023版权所有-XIJIAN 皖ICP备2023010880号-1</a>
      </div>
    </div>
  );
}

export default Palette;
