import { useState } from "react";
import useGetAxios from "../hooks/useGetAxios";
import ProductCard from "../components/ui/ProductCard";

const ProductsView = () => {
  const [page, setPage] = useState(1);
  const URL = `https://json-server-vercel-eosin-tau.vercel.app/products?_page=${page}`;
  const { data, loading, error } = useGetAxios(URL);

  // console.log(data)
  // console.log("loading", loading)
  // console.log("error", error)

  return (
    <div className="container py-10">
      <h1 className="mb-10 text-4xl text-center">Productos</h1>
      {/* grilla responsive con grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* renderizado de listas */}
        {data
          ? data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Ver más
      </button>
    </div>
  );
};

export default ProductsView;
