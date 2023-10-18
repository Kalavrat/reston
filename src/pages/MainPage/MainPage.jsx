import "../../App.css";
import Header from "../../components/header/Header";
import style from "./MainPage.module.css";
import { HandySvg } from "handy-svg";
import logo from "../../media/logo.svg";
import arrow from "../../media/arrow.svg";
import arrow_r from "../../media/arrow-right.svg";
import arrow_l from "../../media/arrow-left.svg";

import best1 from "../../media/best1.jpg";
import best2 from "../../media/best2.jpg";
import Carousel from "react-material-ui-carousel";

function MainPage() {
  let items = [
    {
      img: best1,
      name: "Гостинная Lite 3",
      price: "39.990 Р",
    },
    {
      img: best2,
      name: "Гостинная Pleasure 3",
      price: "56.990 Р",
    },
  ];

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
        <div className={style.main_best_lowerDiv}>
          <Carousel
            NextIcon={<img className={style.arrow_r} src={arrow_r} />}
            PrevIcon={<img className={style.arrow_l} src={arrow_l} />}
            navButtonsProps={{
              style: {
                backgroundColor: "#8C8C8C",
                borderRadius: 10,
              },
            }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
          {/* <div className={style.main_best_lowerDiv_desc}>
            <span className={style.main_best_lowerDiv_desc_name}>
              Гостинная "Lite 3"
            </span>
            <span className={style.main_best_lowerDiv_desc_price}>
              35.990 Р
            </span>
          </div> */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div>
      <HandySvg className={style.main_head_logo} src={arrow} alt="" />
    </div>
  );
}

function Arrow1() {
  return (
    <div>
      <HandySvg className={style.main_head_logo} src={arrow} alt="" />
    </div>
  );
}

function Item(props) {
  return (
    <div>
      {/* <h2>{props.item.name}</h2>
      <p>{props.item.description}</p> */}
      <div className={style.main_best_imgDiv}>
        <img src={props.item.img} alt="" />
        {/* <HandySvg className={style.main_head_logo} src={arrow} alt="" />
        <HandySvg className={style.main_head_logo} src={arrow} alt="" /> */}
      </div>
      <div className={style.main_best_lowerDiv_desc}>
        <span className={style.main_best_lowerDiv_desc_name}>
          {props.item.name}
        </span>
        <span className={style.main_best_lowerDiv_desc_price}>
          {props.item.price}
        </span>
      </div>
    </div>
  );
}

export default MainPage;
