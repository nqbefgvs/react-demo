import style from "./App.less";
import RightSideBar from "./components/rightSideBar/rightSideBar";
import Main from "./components/main/main";

function App() {
  return (
    <div className={style["container"]}>
      <div className={style["main-wrapper"]}>
        <Main />
      </div>
      <div className={style["right-side-bar-wrapper"]}>
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
