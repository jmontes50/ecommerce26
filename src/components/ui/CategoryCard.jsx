const CategoryCard = ({ category }) => {
  console.log(category)
  return (
    <a
      href="#"
      className="relative block overflow-hidden transition ease-out group active:opacity-75 sm:col-span-2 md:col-span-1 aspect-square"
    >
      <img
        src={category.imagen}
        alt="Product Image"
        className="transition ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 transition ease-out bg-black/25 group-hover:bg-black/0" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out rounded-3xl bg-white/95 group-hover:bg-yellow-500 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
          {category.nombre}
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;
