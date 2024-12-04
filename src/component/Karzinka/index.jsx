import React, { useContext } from "react";
import { ShopAppContext } from "../../context";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function ProductPage() {
  const { state } = useContext(ShopAppContext);
  const navigate = useNavigate();
  console.log(state.data.length);

  const { dispatch } = useContext(ShopAppContext);

  return (
    <div>
      {state.data.length === 0 ? (
        <div className="text-center mt-4 ">
          <img
            className="w-[20%] m-auto"
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt="logo"/>
          <div className="text-center">
            <p className="font-semibold mb-1">Savatingiz hozircha bo‘sh</p>
            <p>
              Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali
              topishingiz yoki to‘plamlarni ko‘rishingiz mumkin
            </p>
            <Button onClick={() => navigate("/")} className="mt-5">
              Asosiy sahifa
            </Button>
          </div>
        </div>
      ) : (
        <div className="  p-6 flex flex-col gap-4 ">
          {state.data.map((product) => (
            <li
              className="list-none bg-[#ffffff68] p-3 justify-between items-center flex"
              key={product.id}
            >
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}$</p>
              <div className="flex gap-3">
                <Button
                  type="primary"
                  danger
                  onClick={() =>
                    dispatch({ type: "delete", value: { id: product.id } })
                  }
                >
                  ochirish
                </Button>
             
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
