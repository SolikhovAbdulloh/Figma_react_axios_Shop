import { Button, Rate } from "antd";
import React, { useContext, useState } from "react";
import shop from "./Shopping Cart.png";
import { ShopAppContext } from "../context";
import NotificationApp from "../context/notification";
import { HeartOutlined } from '@ant-design/icons';;
import { HeartFilled } from "@ant-design/icons";

function Card(props) {
  const { dispatch } = useContext(ShopAppContext);
  const {state} = useContext(ShopAppContext)
  const notify = NotificationApp();

  const {
    id,
    name,
    article,
    rating,
    reviews,
    price_current,
    price_old,
    currency,
    imagie,
  } = props;

const Likeporduct = state.liked.filter((item)=> item.id === id)[0];

const isLiked = Boolean(Likeporduct)

console.log(isLiked);

  return (
    <div className=" relative h bg-[#ffffff] p-3  rounded-lg">
      <img src={imagie} className="w-[30vh]" alt="cards" />
      <div className="flex items-center mt-3 mb-3 justify-between">
        <p className="text-gray-500">Артикул: {article} </p>
        <div className="flex items-center justify-center gap-1">
          <Rate className="ant-rate-star text-[#FF9431]" value={rating} />
          <p className="text-[13px]">({rating})</p>
          <p className="text-[13px]">({reviews})</p>
        </div>
      </div>
      <p className="text-[18px] font-medium">{name}</p>
      <div className="flex justify-between items-center gap-1">
        <div className="flex pt-3 items-center gap-3">
          <p className="text-[30px] font-medium">
            {price_current}
            {currency}
          </p>
          <sup className="line-through text-[14px] text-[grey] font-normal">
            {price_old}
          </sup>
        </div>
        {isLiked ? (
          <HeartFilled className="absolute  cursor-pointer text-[25px]  text-[red]   top-5 right-5 " />
        ) : (
          <HeartOutlined
            className="absolute  cursor-pointer text-[25px]  top-5 right-5"
            onClick={() => {
              dispatch({
                type: "liked_add",
                value: {
                  id: props.id,
                  name: props.name,
                  image: props.imagie,
                  price: props.price_current,
                },
              });
              notify({ type: "like" });
            }}
          >
            {" "}
          </HeartOutlined>
        )}

        <Button
          onClick={() => {
            dispatch({
              type: "add",
              value: {
                id: props.id,
                name: props.name,
                image: props.imagie,
                price: props.price_current,
              },
            });

            notify({ type: "add" });
          }}
        >
          <img src={shop} alt="ss" />
        </Button>
      </div>
    </div>
  );
}

export default Card;
