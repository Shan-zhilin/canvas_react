import { useContext, useEffect } from "react";
import styles from "./drawBtns.module.less";
import Context from "../../../../model/context";
// import {linkWebGl} from '../../../../utils'

const canvasBtns = [
  "绘制直线",
  "绘制矩形",
  "绘制圆形",
  "绘制三角形",
  "绘制圆环",
  "绘制扇形",
  "绘制五角星",
  "线性渐变",
  "径向渐变",
  "添加文本",
  "绘制图片",
  "图片裁切",
];

const webglBtns = ['绘制点','点击绘制点']

function DrawBtns() {
  const { state, dispatch } = useContext(Context);

  const {
    opacity,
    picurl,
    offsetX,
    offsetY,
    blur,
    shadowColor,
    lineWidth,
    fillStyle,
    strokeStyle,
    stopColor1,
    stopColor2,
    textInner,
    lineCap,
    lineJoin,
    setLineDash,
    drawType
  } = state;

  const draw = (type) => {
    //将上次的绘制类型存储起来
    dispatch({
      type: "btnType",
      changeValue: type,
    });

    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;
      ctx.lineWidth = lineWidth
      ctx.lineCap = lineCap
      ctx.lineJoin = lineJoin
      ctx.shadowColor = shadowColor
      ctx.shadowOffsetX = offsetX
      ctx.shadowOffsetY = offsetY
      ctx.shadowBlur = blur
      ctx.setLineDash(setLineDash);
      switch (type) {
        case "绘制直线":
          ctx.beginPath();
          ctx.moveTo(60, 60);
          ctx.lineTo(160, 60);
          ctx.strokeStyle = strokeStyle
          ctx.closePath();
          ctx.stroke();
          break;
        case "绘制矩形":
          if (drawType === 'stroke') {
            ctx.strokeStyle = strokeStyle
            ctx.strokeRect(60, 60, 100, 100)
          } else {
            ctx.fillStyle = fillStyle
            ctx.fillRect(60, 60, 100, 100)
          }
          break;
        case "绘制圆形":
          ctx.beginPath();
          ctx.arc(80, 80, 60, 0, (Math.PI * 360) / 180, false);
          if (drawType === 'stroke') {
            ctx.strokeStyle = strokeStyle
            ctx.closePath();
            ctx.stroke()
          } else {
            ctx.fillStyle = fillStyle
            ctx.closePath();
            ctx.fill()
          }
          break;
        case "绘制三角形":
          ctx.beginPath();
          ctx.moveTo(100, 20);
          ctx.lineTo(160, 100);
          ctx.lineTo(40, 100);
          ctx.closePath();
          if (drawType === 'stroke') {
            ctx.strokeStyle = strokeStyle
            ctx.stroke()
          } else {
            ctx.fillStyle = fillStyle
            ctx.fill()
          }
          break;
        case "绘制圆环":
          ctx.beginPath();
          ctx.fillStyle = fillStyle;
          ctx.arc(100, 100, 80, 0, (Math.PI * 360) / 180, false);
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = "#fff";
          ctx.arc(100, 100, 50, 0, (Math.PI * 360) / 180, false);
          ctx.fill();
          break;
        case "绘制扇形":
          ctx.beginPath();
          ctx.fillStyle = fillStyle;
          ctx.moveTo(100, 100);
          ctx.arc(
            100,
            100,
            50,
            -(Math.PI * 30) / 180,
            -(Math.PI * 150) / 180,
            true
          );
          ctx.fill();
          break;
        case "绘制五角星":
          ctx.beginPath();
          var horn = 5; // 画5个角
          var angle = 360 / horn; // 五个角的度数
          // 两个圆的半径
          var R = 100;
          var r = 50;
          // 坐标
          var x = 100;
          var y = 100;
          for (var i = 0; i < horn; i++) {
            // 角度转弧度：角度/180*Math.PI
            // 外圆顶点坐标
            ctx.lineTo(
              Math.cos(((18 + i * angle) / 180) * Math.PI) * R + x,
              -Math.sin(((18 + i * angle) / 180) * Math.PI) * R + y
            );
            // 內圆顶点坐标
            ctx.lineTo(
              Math.cos(((54 + i * angle) / 180) * Math.PI) * r + x,
              -Math.sin(((54 + i * angle) / 180) * Math.PI) * r + y
            );
          }
          // closePath：关闭路径，将路径的终点与起点相连
          ctx.closePath();
          if (drawType === 'stroke') {
            ctx.strokeStyle = strokeStyle
            ctx.stroke()
          } else {
            ctx.fillStyle = fillStyle
            ctx.fill()
          }
          break;
        case "线性渐变":
          const gnt = ctx.createLinearGradient(100, 100, 400, 100); //线性渐变
          gnt.addColorStop(0, stopColor1);
          gnt.addColorStop(1, stopColor2);
          ctx.fillStyle = gnt;
          ctx.fillRect(0, 0, 400, 400);
          break;
        case "径向渐变":
          ctx.beginPath();
          ctx.arc(100, 100, 100, 0, Math.PI * 2, true);
          ctx.closePath();

          const gen = ctx.createRadialGradient(120, 60, 10, 100, 100, 100);
          gen.addColorStop(0, "white");
          gen.addColorStop(1, "orange");
          gen.addColorStop(0, "rgba(0,0,0,0)");
          //填充
          ctx.fillStyle = gen;
          ctx.fill();
          break;
        case "添加文本":
          const text = textInner;
          ctx.font = "20px bold";
          ctx.fillStyle = "purple";
          ctx.fillText(text, 100, 100);
          break;
        case "绘制图片":
          const image = new Image();
          image.src = picurl;
          image.onload = () => {
            ctx.drawImage(image, 50, 50, 500, 260);
          };
          break;
        case "图片裁切":
          const image1 = new Image();
          image1.src = picurl;
          image1.onload = () => {
            ctx.drawImage(image1, 200, 200, 200, 200, 100, 100, 250, 100);
          };
          break;
        default:
          return;
      }
    } else {
      console.log("canvas-unsupportedCodeHere");
    }
  };

  const webglDraw = (type) => {
    // const v_shader = `
    // attribute vec2 position;

    // void main() {
    //   gl_PointSize = 1.0;
    //   gl_Position = vec4(position, 1.0, 1.0);
    // }
    // `;


    // const f_shader = `
    // precision mediump float;

    // void main()
    // {
    //   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    // }    
    // `;
    // var canvas = document.getElementById("canvas");
  }

  useEffect(() => {
    draw(state.btnType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opacity,
    picurl,
    offsetX,
    offsetY,
    blur,
    shadowColor,
    lineWidth,
    fillStyle,
    strokeStyle,
    stopColor1,
    stopColor2,
    textInner,
    lineCap,
    setLineDash,
    lineJoin,
    drawType])

  return (
    <div className={styles.draw_btns_con}>
      <div className={styles.draw_btns_title}>基于canvas绘制</div>
      {canvasBtns.map((item) => {
        return (
          <div
            className={styles.draw_btns_item}
            key={item}
            onClick={() => {
              draw(item);
            }}
          >
            {item}
          </div>
        );
      })}
      <div className={styles.draw_btns_title}>基于WebGL绘制</div>
      {webglBtns.map((item) => {
        return (
          <div
            className={styles.draw_btns_item}
            key={item}
            onClick={webglDraw()}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default DrawBtns;
