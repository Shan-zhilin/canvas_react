import React from "react";
import styles from "./palette.module.less";
import DrawBtns from "./components/drawBtns/drawBtns";
import Options from "./components/options/options";

function Palette() {
  return (
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
  );
}

export default Palette;
