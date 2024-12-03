import { Button } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopAppContext } from "../context";

function Saralangan() {
  const navigate = useNavigate();
  const { state } = useContext(ShopAppContext);
  console.log(state.data);
  const { dispatch } = useContext(ShopAppContext);

  return (
    <section className="flex gap-4 flex-col">
      {state.data.length === 0 ? (
        <div className="m-auto text-center ">
          <img
            className="w-[45%] m-auto"
            src="https://uzum.uz/static/img/hearts.cf414be.png"
            alt=""
          />
          <p className="font-semibold">Sizga yoqqanini qoʻshing</p>

          <Button onClick={() => navigate("/")} className=" mt-3">
            Asosiy sahifa
          </Button>
        </div>
      ) : (
        state.data.map((Item) => (
          <div className="flex">
            <div className="flex flex-col  items-center gap-4" key={Item.id}>
              <img src={Item.image} className="w-[20%]"  alt={Item.name} />
              <em className="text-start  font-semibold">{Item.name}</em>
              <em>{Item.price}So'm</em>
              <Button
                type="primary"
                danger
                onClick={() =>
                  dispatch({ type: "delete", value: { id: Item.id } })
                }
              >
                Ochirish
              </Button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default Saralangan;
