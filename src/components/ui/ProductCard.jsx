import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, nombre, descripcion, precio, precio_oferta, imagen } = product;
  return (
    <Link to={`/detail/${id}`} className="flex flex-col max-w-lg gap-2">
      {/* contedor imagen */}
      <div className="object-cover w-full overflow-hidden aspect-auto">
        <img src={imagen} alt={`foto ${nombre}`} className="w-full"/>
      </div>
      <h4 className="mt-2 font-semibold">{nombre}</h4>
      <p>{descripcion.substring(0, 40)} ...</p>
      <div className="flex gap-2 mt-auto">
        <span className="font-semibold">S/ {precio_oferta.toFixed(2)}</span>
        <span className="text-gray-500 line-through">
          S/ {precio.toFixed(2)}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
