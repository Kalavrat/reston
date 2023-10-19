import "../../App.css";
import Header from "../../components/header/Header";
import style from "./MainPage.module.css";
import { HandySvg } from "handy-svg";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import logo from "../../media/logo.svg";
import arrow_r from "../../media/arrow-right.svg";
import arrow_l from "../../media/arrow-left.svg";
import best1 from "../../media/best2.jpg";
import best2 from "../../media/living.jpg";
import cat_child from "../../media/cat_child.jpg"
import cat_kitchen from "../../media/cat_kitchen.jpg"
import cat_bath from "../../media/cat_bath.jpg"
import cat_living from "../../media/cat_living.jpg"
import cat_bedroom from "../../media/cat_bedroom.jpg"


function MainPage() {
  let items = [
    {
      img: best1,
      type: "Гостинная",
      name: "Lite 3",
      price: "39.990 Р",
    },
    {
      img: best2,
      type: "Спальня",
      name: "Pleasure 3",
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
          //   indicatorIcon = {{
          //     style: {
          //     fontSize: "20px"
          //     }
          //   }}
            indicatorIconButtonProps = {{
              style: {
                // color: "red",
              }
            }}
            activeIndicatorIconButtonProps = { { 
              style : { 
                // backgroundColor : 'blue',
                // width: "10px"
              } 
          } } 
          // IndicatorContainerProps = { { 
          //   style : { 
          //       // MarginTop : '50px' ,  // 5 
          //       // textAlign : 'right'  // 4 
          //   } 
          // } } 
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className={style.main_category}>
        <div className={style.main_category_titleDiv}>
          <span className={style.main_category_title}>Категории</span>
        </div>
        <div className={style.main_category_cont}>
          <div className={style.main_category_cont_card}>
            <Link className={style.link} to="/catalog">
              <img src={cat_child} alt="" />
            </Link>
            <span className={style.main_category_cont_card_text}>Детская</span>
          </div>
          <div className={style.main_category_cont_card}>
            <Link className={style.link} to="/services">
              <img src={cat_kitchen} alt="" />
            </Link>
            <span className={style.main_category_cont_card_text}>Кухня</span>
          </div>

          <div className={style.main_category_cont_card}>
            <Link className={style.link} to="/contacts">
              <img src={cat_bath} alt="" />
            </Link>
            <span className={style.main_category_cont_card}>Ванная</span>
          </div>

          <div className={style.main_category_cont_card}>
            <Link className={style.link} to="/about">
              <img src={cat_living} alt="" />
            </Link>
            <span className={style.main_category_cont_card_text}>Гостинная</span>
          </div>

          <div className={style.main_category_cont_card}>
            <Link className={style.link} to="/about">
              <img src={cat_bedroom} alt="" />
            </Link>
            <span className={style.main_category_cont_card_text}>Спальня</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <div>
      <div className={style.main_best_imgDiv}>
        <img className={style.main_best_img} src={props.item.img} alt="" />
      </div>
      <div className={style.main_best_lowerDiv_desc}>
        <div className={style.main_best_lowerDiv_descName}>
          <span className={style.main_best_lowerDiv_desc_type}>
            {props.item.type}
          </span>
          <span className={style.main_best_lowerDiv_desc_name}>
            {props.item.name}
          </span>
        </div>
        <span className={style.main_best_lowerDiv_desc_price}>
          {props.item.price}
        </span>
      </div>
    </div>
  );
}

export default MainPage;
