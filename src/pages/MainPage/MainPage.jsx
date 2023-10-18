import "../../App.css";
import Header from "../../components/header/Header";
import style from "./MainPage.module.css"
import { HandySvg } from "handy-svg";
import logo from "../../media/logo.svg";
import arrow from "../../media/arrow.svg";
import best1 from "../../media/best1.jpg";

function MainPage() {
  return (
    <div className="App">
      <div className={style.main_head}>
        <Header className={style.main_header} />
        <div className={style.main_head_svg_div}>
          <HandySvg className={style.main_head_logo} src={logo} alt="" />
        </div>
      </div>
      <div className={style.main_best}>
        <div className={style.main_best_titleDiv}>
          <span className={style.main_best_title}>Лучшие предложения</span>
        </div>
        <div className={style.main_best_imgDiv}>
          <img src={best1} alt="" />
          <HandySvg className={style.main_head_logo} src={arrow} alt="" />
          <HandySvg className={style.main_head_logo} src={arrow} alt="" />
        </div>
        <div className={style.main_best_lowerDiv}>
          <div className={style.main_best_lowerDiv_desc}>
            <span className={style.main_best_lowerDiv_desc_name}>
              Гостинная "Lite 3"
            </span>
            <span className={style.main_best_lowerDiv_desc_price}>
              35.990 Р
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
