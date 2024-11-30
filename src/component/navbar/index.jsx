import React from 'react'
import logo from "../imges/logo.png";
import user from "../imges/User,Profile.png"
import shop from "../imges/Shopping Cart.png";
import Search from "antd/es/input/Search";
import { Button } from "antd";
import { CiGrid41 } from "react-icons/ci";
import { RiTelegramLine } from "react-icons/ri";

function Navbar() {
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
          <Button className="flex  items-center gap-2">
            <img src={shop} alt="shop" />
            Корзина
          </Button>
        </div>
        <div className="mt-5 flex gap-3">
          <Button className="flex items-center">
            <CiGrid41 />
            Все категории
          </Button>
          <Button>Запчасти для ТО</Button>
          <Button>Автомасла</Button>
          <Button>Оригинальные запчасти</Button>
          <Button>Неоригинальные запчасти</Button>
          <Button>Лампочки</Button>
          <Button>Аккумуляторы</Button>
        </div>
      </header>
      </div>
  )
}

export default Navbar