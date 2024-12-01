import { Button, Rate } from 'antd';
import React from 'react'
import shop from "./Shopping Cart.png"
function Card(props){
   
    
    const {name,article,rating,reviews,price_current,price_old,currency,imagie} = props
    
  return (
    <div className=" h bg-[#ffffff] p-3  rounded-lg  ">
      <img src={imagie} className="w-[60vh]" alt="cards" />
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
        <Button>
          <img src={shop} alt="ss" />
        </Button>
      </div>
    </div>
  );
}

export default Card


 