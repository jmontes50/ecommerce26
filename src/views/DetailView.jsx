import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useParams } from "react-router-dom";
import useGetAxios from "../hooks/useGetAxios";
import Stars from "../components/ui/Stars";
import { toast } from "react-toastify";

const DetailView = () => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const URL = "https://json-server-vercel-eosin-tau.vercel.app/products";
  const { data, loading, error } = useGetAxios(`${URL}/${id}`);

  const { cart, addProductToCart } = useContext(CartContext);

  const incrementQty = () => setQuantity(quantity + 1);

  const decrementQty = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const notify = () => toast(`Se agregó ${data.nombre} al Carrito!`, { position: "bottom-right" });

  //la idea es que esta función reciba el producto, con su id, nombre,
  const handleProductToCart = (product) => {
    const productWithQty = { ...product, cantidad: quantity };
    // console.log("productWithQty", productWithQty);
    addProductToCart(productWithQty);
    notify();
  };

  return (
    <div className="container py-10">
      {data ? (
        <>
          <div className="flex gap-10 mb-5">
            {/* imagen */}
            <div className="w-1/2 aspect-auto md:w-full">
              <img src={data.imagen} alt={data.nombre} />
            </div>
            {/* resto de la data */}
            <div className="w-1/2 md:w-full">
              <h1 className="mb-5 text-3xl font-semibold">{data.nombre}</h1>
              <div className="mb-5">
                <Stars rating={data.estrellas} />
              </div>
              <div className="mb-5 text-xl">
                <span className="me-2">{`S/ ${data.precio_oferta.toFixed(
                  2
                )}`}</span>
                <span className="line-through text-slate-600">{`S/ ${data.precio.toFixed(
                  2
                )}`}</span>
              </div>
              <p className="mb-5">{data.descripcion}</p>
              {/* botones */}
              <div className="flex gap-4 mb-5">
                {/* 1er botón */}
                <div className="flex">
                  <button
                    className="p-4 border-y-2 border-s-2 border-slate-950 rounded-s-lg dark:border-white"
                    onClick={decrementQty}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className="p-4 border-y-2 border-slate-950 dark:border-white">
                    {quantity}
                  </span>
                  <button
                    className="p-4 border-y-2 border-e-2 border-slate-950 rounded-e-lg dark:border-white"
                    onClick={incrementQty}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                {/* 2do */}
                <button
                  className="btn btn-primary grow"
                  onClick={() => {
                    handleProductToCart(data);
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
          {/* detalles */}
          <div className="pt-5 border-t-2 border-slate-300">
            <h4 className="mb-5 text-xl font-semibold">Detalles</h4>
            <p className="whitespace-pre-wrap">{data.detalles}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DetailView;
