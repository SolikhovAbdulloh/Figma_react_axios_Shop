import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Saralangan() {
  const navigate = useNavigate()
  return (
    <div className="m-auto text-center ">
      <img className='w-[15%] m-auto' src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
      <p className="font-semibold">Sizga yoqqanini qoʻshing</p>
     
      <Button onClick={()=>navigate('/')} className=' mt-3'>Asosiy sahifa</Button>
    </div>
  );
}

export default Saralangan