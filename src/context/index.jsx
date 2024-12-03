import { createContext, useReducer } from "react";

const ShopAppContext = createContext({});

const Initilstate = {
  data: JSON.parse(localStorage.getItem("shop")) || [],
  liked: JSON.parse(localStorage.getItem("liked")) || [],
};

const Shopcontext = ({ children }) => {
  const reducer = (state, { type, value }) => {
    switch (type) {
      case "add":
        {
          const exists = state.data.find((item) => item.id === value.id);
          console.log(exists);

          if (exists) {
            // Agar mavjud bo'lsa, miqdorini oshirish uchun
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
        break;
      case "liked_add":
        {
          const exists = state.liked.find((item) => item.id === value.id);

          if (exists) {
            // Agar mavjud bo'lsa, miqdorini oshirish uchun
            const updatedData = state.liked.map((item) =>
              item.id === value.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            localStorage.setItem("liked", JSON.stringify(updatedData));

            return { ...state, liked: updatedData };
          } else {
            // Yangi mahsulotni qo'shish
            const newData = [...state.liked, { ...value, quantity: 1 }];
            localStorage.setItem("liked", JSON.stringify(newData));
            return { ...state, liked: newData };
          }
        }
        break;

      case "delete": {
        const filter = state.data.filter((item) => item.id !== value.id);
        localStorage.setItem("shop", JSON.stringify(filter));
        return { ...state, data: filter };
      }
      case "Deleteliked": {
        const filter = state.liked.filter((item) => item.id !== value.id);
        localStorage.setItem("liked", JSON.stringify(filter));
        console.log(filter, state.liked);
        return { ...state, liked: filter };
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
