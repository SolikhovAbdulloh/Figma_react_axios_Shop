import React from 'react'
import r1 from "../imges/1.png"
import r2 from "../imges/2.png"
import r3 from "../imges/3.png"
import r4 from "../imges/4.png"
import r5 from "../imges/5.png"
import r6 from "../imges/6.png";
import Products from '../products'
function Sections() {
  return (
      <div>
        <div className="bg_image  p-4 flex m-auto  flex-col justify-center ">
          <div>
            <h2 className="text-[40px] text-white font-bold ">
              Оригинальные автомасла <br /> cо скидкой
              <span className="bg-[#fc5c2a] rounded-lg">15%</span>
            </h2>
            <br />
            <p className="font-normal text-white text-[18px]">
              Акция действует с 1 по 30 июня 2021
            </p>
          </div>
        </div>
        <div className="grid cursor-pointer fff grid-cols-[repeat(3,4fr)] m-auto mt-3">
       
          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r1} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">
                Оригинальные запчасти
              </h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r2} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">
                Неоригинальные запчасти
              </h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                278 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r3} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">
                Запчасти ВАЗ, ГАЗ, КАМАЗ
              </h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r4} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">
                Кузовные запчасти
              </h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r5} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">Запчасти для ТО</h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r6} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">Автостёкла</h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r1} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">Автомасла</h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r3} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">
                Запчасти ВАЗ, ГАЗ, КАМАЗ
              </h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r4} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">
                Кузовные запчасти
              </h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r5} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">Запчасти для ТО</h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r6} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">Автостёкла</h3>
              <p className="text-[12px] text-[#55556D73] font-normal">
                730 товаров
              </p>
            </div>
          </div>

          <div className="flex w-[450px] h-[100px] border-[solid] border-[2px] border-[green] p-3 items-center gap-3">
            <img src={r1} alt="r1" />
            <div className="flex flex-col ">
              <h3 className="text-[16px] mb-1 font-normal">Автомасла</h3>
              <p className="text-[12px] text-[#55556D73]  font-normal">
                730 товаров
              </p>
            </div>
          </div>
        </div>
        <div className='mt-4'>

        <Products/>
        </div>
      </div>
  );
}

export default Sections