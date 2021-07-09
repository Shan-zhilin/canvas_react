/*
 * @Author: shanzhilin
 * @Date: 2021-05-17 17:25:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-19 13:55:30
 * @Description:
 */
import styles from "./App.module.less";
import Palette from "./pages/palette/palette.jsx";
import { Provider } from "./model/context";

function App() {
  return (
    <Provider>
      <div className={styles.App}>
        <Palette />
      </div>
    </Provider>
  );
}

export default App;
