import "../../App.css";
import Header from "../../components/header/Header";
import style from "./MainPage.module.css"
import { HandySvg } from "handy-svg";
import logo from "../../media/logo.svg";
function MainPage() {
  return (
    <div className="App">
      <Header />
      <div className={style.main_head}>
        <HandySvg className={style.main_head_logo} src={logo} alt="" />
      </div>
    </div>
  );
}

export default MainPage;
