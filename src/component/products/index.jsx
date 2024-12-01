import React from "react";
import UseAxios from "../../hook/useAxios";
import Card from "../../card";
import LoaderApi from "../../loaders";

function Products() {
  const { data ,loading} = UseAxios({ url: "recomemded" });

  const { Card_pruduct_loader } = LoaderApi();

  return (
    <div>
      <section className="w-100% p-2  m-auto">
        <h2 className="font-bold size-[40px]">Автомасла</h2>
        <div className="grid  gap-[30px] grid-cols-4">
          {data.map((e) => (
            <Card key={e.id} {...e} />
          ))}
        </div>
      </section>
      <section className="w-80% mt-[30px] m-auto">
        <h2 className="font-bold size-[40px]">Рекомендуем</h2>
        <div className="grid gap-[30px] grid-cols-4">
          {loading ? (
        
              Card_pruduct_loader()
          
          ) : (
            data.map((e) => <Card key={e.id} {...e} />)
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;