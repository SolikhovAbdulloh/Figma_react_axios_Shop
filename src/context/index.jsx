import { createContext, useReducer } from "react";

const ShopAppContext = createContext({});

const Initilstate = {
  data: JSON.parse(localStorage.getItem("shop")) || [],
};

const Shopcontext = ({ children }) => {
  const reducer = (state, { type, value }) => {
    switch (type) {
      case "add": {
        // Mahsulot mavjudligini tekshirish
        const exists = state.data.some((item) => item.id === value.id);

        if (exists) {
          // Agar mavjud bo'lsa, miqdorini oshirish
          const updatedData = state.data.map((item) =>
            item.id === value.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          localStorage.setItem("shop", JSON.stringify(updatedData));
          return { ...state, data: updatedData };
        } else {
          // Yangi mahsulotni qo'shish
          const newData = [...state.data, { ...value, quantity: 1 }];
          localStorage.setItem("shop", JSON.stringify(newData));
          return { ...state, data: newData };
        }
      }

      default:
        return state; // Agar boshqa `type` bo'lsa, avvalgi holatni qaytaradi
    }
  };

  const [state, dispatch] = useReducer(reducer, Initilstate);

  return (
    <ShopAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopAppContext.Provider>
  );
};

export { ShopAppContext, Shopcontext };
