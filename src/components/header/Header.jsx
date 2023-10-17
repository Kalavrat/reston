import React, { useState, useEffect } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";
import logo from "../../media/logo.svg";
import arrow from "../../media/arrow.svg";
import cart from "../../media/cart.svg";
import person from "../../media/person.svg";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";

export default function Header() {
  const [chosenCity, setChosenCity] = useState("");
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        // width: 250,
      },
    },
  };

  useEffect(() => {
    console.log("CITY:", chosenCity);
  }, [chosenCity]);
  return (
    <div className={style.header}>
      <div className={style.header_left}>
        <Link to="/">
          <HandySvg className={style.header_left_logo} src={logo} alt="" />
        </Link>
        <FormControl
          sx={{
            m: 0,
            // width: "fit-content",
            // left: "60px",
            // position: "absolute",

            width: 150,
            ml: "60px",
          }}
        >
          <Select
            sx={{
              bgcolor: "#5CCDFF",
              borderRadius: 10,
              // paddingX: "20px",
              height: 40,
            }}
            displayEmpty
            value={chosenCity}
            onChange={(e) => {
              setChosenCity(e.target.value);
            }}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Город</em>;
              }

              return selected;
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            <MenuItem key={1} value={"Калуга"}>
              {"Калуга"}
            </MenuItem>
            <MenuItem key={1} value={"Санкт-Петербург"}>
              {"Санкт-Петербург"}
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={style.header_mid}>
        <Link className={style.link} to="/catalog">
          Каталог
        </Link>
        <Link className={style.link} to="/services">
          Услуги
        </Link>
        <Link className={style.link} to="/contacts">
          Контакты
        </Link>
        <Link className={style.link} to="/about">
          О нас
        </Link>
      </div>
      <div className={style.header_right}>
        <Link to="/cart">
          <HandySvg className={style.header_right_cart} src={cart} alt="" />
        </Link>
        <Link to="/person">
          <HandySvg className={style.header_right_person} src={person} alt="" />
        </Link>
      </div>
    </div>
  );
}
