import CategoryCard from "../ui/CategoryCard"
import useGetAxios from "../../hooks/useGetAxios";

const OurCategories = () => {
  const { data, loading, error } = useGetAxios(
    "https://json-server-vercel-eosin-tau.vercel.app/categories"
  );
  return (
    <div className="container pb-10">
      <h2 className="mb-5 text-3xl text-center">Compra por Categorias</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data ?
          data.map((category) => (
            <CategoryCard key={category.id} category={category} />
          )) : null }
      </div>
    </div>
  )
}

export default OurCategories