import React from 'react'
import UseAxios from '../../hook/useAxios';
import Card from '../../card';

function Products() {

    const { data } = UseAxios({ url: "recomemded" });
    
    
    
  return (
    <div>
      <section className="w-80% m-auto">
        <h2 className="font-bold size-[40px]">Автомасла</h2>
        <div className="grid gap-[30px] grid-cols-4">
          {data.map((e) => (
            <Card key={e.id} {...e} />
          ))}
        </div>
      </section>
      <section className="w-80% mt-[30px] m-auto">
        <h2 className="font-bold size-[40px]">Рекомендуем</h2>
        <div className="grid gap-[30px] grid-cols-4">
          {data.map((e) => (
            <Card key={e.id} {...e} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products