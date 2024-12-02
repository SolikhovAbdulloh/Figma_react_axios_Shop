import React from 'react'
import logo from "../imges/logo.png";
import user from "../imges/User,Profile.png"
import shop from "../imges/Shopping Cart.png";
import Search from "antd/es/input/Search";
import { Button } from "antd";
import { CiGrid41 } from "react-icons/ci";
import { RiTelegramLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="contiener">
      <header>
        <div className="flex mb-3 justify-between items-center">
          <p className="flex gap-2 items-center">
            <RiTelegramLine />
            г. Нижний Новгород, Нижегородская обл.
          </p>
          <p className="font-bold">+7 (347) 229-46-45</p>
          <span className=" flex gap-5">
            <a href="#">Доставка</a>
            <a href="#">Оплата</a>
            <a href="#">Контакты</a>
          </span>
        </div>
        <div className="flex cursor-pointer justify-between items-center">
          <img src={logo} alt="logo" />
          <Search
            type="primary"
            placeholder="Введите номер запчасти или VIN"
            className="w-[50%]"
          />
          <p className="flex items-center gap-3">
            <img src={user} alt="" />
            Вход / Регистрация
          </p>
          <Button
            className="flex items-center gap-2"
            onClick={() => navigate("saralangan")}
          >
            <CiHeart />
            Избранное
          </Button>
          <Button
            className="flex  items-center gap-2"
            onClick={() => navigate("/productpage")}
          >
            <img src={shop} alt="shop" />
            Корзина
          </Button>
        </div>
        <div className="mt-5 flex gap-3">
          <Button className="flex items-center" onClick={() => navigate("/")}>
            <CiGrid41 />
            Все категории
          </Button>
          <Button onClick={() => navigate("/")}>Запчасти для ТО</Button>
          <Button onClick={() => navigate("/")}>Автомасла</Button>
          <Button onClick={() => navigate("/")}>Оригинальные запчасти</Button>
          <Button onClick={() => navigate("/")}>Неоригинальные запчасти</Button>
          <Button onClick={() => navigate("/")}>Лампочки</Button>
          <Button onClick={() => navigate("/")}>Аккумуляторы</Button>
        </div>
      </header>
    </div>
  );
}

export default Navbar