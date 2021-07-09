import { useContext } from "react";
import styles from "./options.module.less";
import Context from "../../../../model/context";

function Options() {
  const { dispatch } = useContext(Context);

  const clearRect = () => {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const onRangeChange = (e, type, drawType) => {
    if (drawType) {
      dispatch({ type: 'drawType', drawType: drawType});
    }
    dispatch({ type: type, changeValue: e.target.value, drawType});
  };

  const onBtnChange = (value, type) => {
    dispatch({ type: type, changeValue: value });
  }

  return (
    <div className={styles.options_con}>
      <div className={styles.options_clear}>
        <div className={styles.clear_btn} onClick={() => clearRect()}>
          清空画布
        </div>
      </div>

      <div className={styles.options_range}>
        <p className={styles.options_range_item}>
          <span>透明度:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={(e) => {
              onRangeChange(e, 'opacity');
            }}
          />
        </p>
        <p className={styles.options_range_item}>
          <span>阴影X偏移:</span>
          <input
            type="range"
            min="0"
            max="30"
            step="0.1"
            defaultValue="0"
            onChange={(e) => {
              onRangeChange(e, 'offsetX');
            }}
          />
        </p>
        <p className={styles.options_range_item}>
          <span>阴影Y偏移:</span>
          <input
            type="range"
            min="0"
            max="30"
            step="0.1"
            defaultValue="0"
            onChange={(e) => {
              onRangeChange(e, 'offsetY');
            }}
          />
        </p>
        <p className={styles.options_range_item}>
          <span>阴影模糊范围:</span>
          <input
            type="range"
            min="0"
            max="30"
            step="0.1"
            defaultValue="0"
            onChange={(e) => {
              onRangeChange(e, 'blur');
            }}
          />
        </p>
        <p className={styles.options_range_item}>
          <span>线宽:</span>
          <input
            type="range"
            min="0"
            max="30"
            step="0.1"
            defaultValue="0"
            onChange={(e) => {
              onRangeChange(e, 'lineWidth');
            }}
          />
        </p>
      </div>

      <div className={styles.options_range}>
        <p className={styles.options_range_item}>
          <span>填充颜色:</span>
          <input type="text" placeholder="如:rgb(0,0,0)/#fff/white" onBlur={(e) => {
            onRangeChange(e, 'fillStyle', 'fill')
          }} />
        </p>
        <p className={styles.options_range_item}>
          <span>描边颜色:</span>
          <input type="text" placeholder="如:rgb(0,0,0)/#fff/white" onBlur={(e) => {
            onRangeChange(e, 'strokeStyle', 'stroke')
          }} />
        </p>
        <p className={styles.options_range_item}>
          <span>阴影颜色:</span>
          <input type="text" placeholder="如:rgb(0,0,0)/#fff/white" onBlur={(e) => {
            onRangeChange(e, 'shadowColor')
          }} />
        </p>
        <p className={styles.options_range_item}>
          <span>渐变颜色1:</span>
          <input type="text" placeholder="如:rgb(0,0,0)/#fff/white" onBlur={(e) => {
            onRangeChange(e, 'stopColor1')
          }} />
        </p>
        <p className={styles.options_range_item}>
          <span>渐变颜色2:</span>
          <input type="text" placeholder="如:rgb(0,0,0)/#fff/white" onBlur={(e) => {
            onRangeChange(e, 'stopColor2')
          }} />
        </p>
        <p className={styles.options_range_item}>
          <span>文本内容:</span>
          <input type="text" onBlur={(e) => {
            onRangeChange(e, 'textInner')
          }} />
        </p>
        <p className={styles.options_range_item}>
          <span>图片地址:</span>
          <input type="text" defaultValue="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fl%2Fpublic%2Fp2460621164.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624254449&t=d397dfc100df7804add68a40573c165a" onBlur={(e) => {
            onRangeChange(e, 'picurl')
          }} />
        </p>
      </div>

      <div className={styles.options_range}>
        <p className={styles.options_range_item}>
          <span>线帽：</span>
          <span className={styles.options_lineCap} onClick={() => {onBtnChange('round','lineCap')}}>圆形</span>
          <span className={styles.options_lineCap} onClick={() => {onBtnChange('square','lineCap')}}>正方形</span>
          <span className={styles.options_lineCap} onClick={() => {onBtnChange('butt','lineCap')}}>默认</span>
        </p>
        <p className={styles.options_range_item}>
          <span>线条连接样式：</span>
          <span className={styles.options_lineCap} onClick={() => {onBtnChange('round','lineJoin')}}>圆角</span>
          <span className={styles.options_lineCap} onClick={() => {onBtnChange('bevel','lineJoin')}}>斜角</span>
          <span className={styles.options_lineCap} onClick={() => {onBtnChange('miter','lineJoin')}}>默认</span>
        </p>
        <p className={styles.options_range_item}>
          <span>线形：</span>
          <span className={styles.options_lineCap} onClick={() => {onBtnChange([5],'setLineDash')}}>虚线</span>
          <span className={styles.options_lineCap} onClick={() => {onBtnChange([],'setLineDash')}}>实线</span>
        </p>
      </div>
    </div>
  );
}

export default Options;
