import React from 'react'
import elips from "../imges/Ellipse 112.png";
import solid from "../imges/Solid.png";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import mir from "../imges/mir.png";
import imbir from "../imges/irbis.png";
function Footer() {
  return (
    <footer className="mt-[30px] bg-[#2F2B4A] text-white p-[40px]">
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-[20px]">Меню компании</h3>
          <br />
          <a href="#"> Что такое Oner</a>
          <a href="#"> Реквизиты и информация</a>
          <a href="#">Новости </a>
          <a href="#">Вакансии</a>
          <a href="#"> Поставщикам </a>
          <a href="#">Контакты</a>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="text-[20px]">Каталоги</h3>
          <br />
          <a href="#"> Что такое Oner</a>
          <a href="#"> Реквизиты и информация</a>
          <a href="#">Новости </a>
          <a href="#">Вакансии</a>
          <a href="#"> Поставщикам </a>
          <a href="#">Контакты</a>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-[20px]">Помощь</h3>
          <br />
          <a href="#"> Что такое Oner</a>
          <a href="#"> Реквизиты и информация</a>
          <a href="#">Новости </a>
          <a href="#">Вакансии</a>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-[20px]">Товары и бренды</h3>
          <br />
          <a href="#"> Что такое Oner</a>
          <a href="#"> Реквизиты и информация</a>
          <a href="#">Новости </a>
        </div>

        <div className="flex rounded-xl p-2 gap-[30px] w-[180px] h-[70px] bg-[#FFFFFF1A] flex-col">
          <p className="flex text-[12px] items-start gap-2">
            <img src={solid} alt="solid" />
            Консультация Online <br /> Задавайте вопросы
          </p>
          <span className="flex items-center gap-3">
            <img src={elips} alt="elips" />
            <p className="mt-4">Сервис работает в обычном режиме</p>
          </span>
        </div>
      </div>
      <div className="border-[solid]  border-[1px] border-[grey] w-full mt-6"></div>
      <div className="flex justify-between pt-4 items-center">
        <a href="#">© ООО «Oner.ru» 2021.</a>
        <div className="flex cursor-pointer items-center gap-4">
          <FaCcVisa className="w-[67px] h-[36px] rounded-md  p-1 bg-[#F4F6F926]" />
          <FaCcMastercard className="w-[67px] rounded-md  h-[36px] p-1 bg-[#F4F6F926]" />
          <img
            src={mir}
            className="w-[67px] h-[36px] rounded-md p-2 bg-[#F4F6F926]"
            alt="mir"
          />
        </div>
        <div className="flex gap-3 items-center">
          <a href="#">Оферта </a>
          <a href="#">Конфиденциальность</a>
        </div>
        <img src={imbir} alt="imbir" />
      </div>
    </footer>
  );
}

export default Footer