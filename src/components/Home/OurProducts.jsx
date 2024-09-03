import ProductCard from "../ui/ProductCard";
import useGetAxios from "../../hooks/useGetAxios";

const OurProducts = () => {
  const { data, loading, error } = useGetAxios(
    "https://json-server-vercel-eosin-tau.vercel.app/products?_limit=8"
  );

  return (
    <div className="container mb-10">
      <h2 className="mb-5 text-3xl text-center">Mejores Ventas</h2>
      <div className="grid grid-cols-1 gap-10 py-2 md:grid-cols-2 lg:grid-cols-4">
        {data &&
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default OurProducts;
