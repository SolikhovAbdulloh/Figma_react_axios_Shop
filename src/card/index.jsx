import { Button, Rate } from 'antd';
import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";

function Card(props){
   
    
    const {id,name,article,rating,reviews,price_current,price_old,currency,action,imagie} = props
    
  return (
    <div>
      <img src={imagie} alt="cards" />
      <div className="flex items-center justify-between">
        <p className="text-gray-500">Артикул: {article} </p>
        <span className="flex items-center gap-2">
          <Rate className="ant-rate-star" value={rating} />
          <p>({reviews})</p>
        </span>
      </div>
      <p className="text-[18px] font-medium">{name}</p>
      <div className="flex justify-between items-center gap-1">
        <div className='flex pt-3 items-center gap-3'>
          <p className="text-[30px] font-medium">
            {price_current}
            {currency}
          </p>
          <sup className="line-through text-[14px] text-[grey] font-normal">
            {price_old}
          </sup>
        </div>
        <Button>
          <HiOutlineShoppingCart />
        </Button>
      </div>
    </div>
  );
}

export default Card


 