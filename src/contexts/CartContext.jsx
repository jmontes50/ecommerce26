import { createContext, useState, useEffect } from "react";

//creamos el contexto
const CartContext = createContext();

//crear el proveedor donde ira la lógica del contexto
const CartContextProvider = ({ children }) => {
  //tendremos un estado para guardar los items del carrito
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    //1. necesitamos identificar si el producto existe
    const exists = cart.findIndex((prod) => prod.id === product.id);
    // console.log("exists", exists);
    //2. si es nuevo o sea -1, no pasa nada lo seguimos agregando como siempre
    if (exists === -1) {
      setCart([...cart, product]);
    } else {
      //3, si NO es nuevo solamente deberia cambiar la cantidad
      const copyCart = [...cart];
      copyCart[exists].cantidad = product.cantidad; //ya actualizamos la cantidad
      setCart(copyCart);
    }
  };

  const removeProductFromCart = (id) => {
    const filteredCart = cart.filter((product) => product.id !== id);
    setCart(filteredCart);
  };

  const totalCart = cart.reduce(
    (acumulator, prod) => acumulator + prod.cantidad * prod.precio,
    0
  );

  const cantTotal = cart.reduce(
    (acumulator, prod) => acumulator + prod.cantidad,
    0
  );

  //en el value indicamos que vamos a compartir
  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart, totalCart, cantTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
