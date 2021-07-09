import React, { useReducer, createContext } from "react";

/**
 * 1. 创建全局的Context 使用context将跟组件包裹起来
 * 然后将根组件包裹起来，将state和dispatch派发下去
 * */ 
const Context = createContext({});
export default Context;

// 2. 创建全局的Reducer
const initState = {
  opacity: 1.0  ,   //透明度
  offsetX: 0,     //阴影水平方向偏移
  offsetY: 0,     //阴影垂直方向偏移
  blur: 0,        //阴影模糊范围
  shadowColor:'#ccc', //阴影颜色
  lineWidth: 1,  //线宽
  fillStyle: 'red',   //填充样式
  strokeStyle: '#ccc',     //描边样式
  stopColor1: 'HotPink', //渐变颜色1
  stopColor2: 'yellow',  //渐变颜色2
  textInner: 'MY CANVAS',        //文本内容
  lineCap: 'butt',   //线帽
  setLineDash:[],
  lineJoin: 'miter',   //线条连接处样式
  picurl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fphoto%2Fl%2Fpublic%2Fp2460621164.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624254449&t=d397dfc100df7804add68a40573c165a',
  btnType: '' ,  //绘制的图形
  drawType: 'stroke'
};

const reducer = (state, action) => {
   const type = action.type

    switch (type) {
      case 'drawType':
        return { ...state, drawType: action.drawType };  
      case type:
        return { ...state, [type]: action.changeValue };
  
      default:
        return state;
    }
};

// 3. 将全局useReducer返回的state和dispatch传递给全局Context.Provider的value中
export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
  
    return (
      <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    );
};

