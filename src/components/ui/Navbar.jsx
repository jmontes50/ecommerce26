import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { isDark, toggleDarkMode } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const { cantTotal } = useContext(CartContext);

  console.log(user);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="dark:bg-dark-background dark:text-dark-text">
      {/* container */}
      <div className="container">
        <div className="flex justify-between py-4">
          {/* logo */}
          <div className="flex items-center">Logo</div>
          {/* ul */}
          <ul className="items-center justify-center hidden gap-10 lg:flex">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li className="relative">
              <Link to="/cart">Carrito</Link>
              {cantTotal > 0 ? (
                <span className="p-0.5 rounded-full bg-yellow-400 text-xs absolute -top-1 -right-4 block w-5 text-center font-bold">
                  {cantTotal}
                </span>
              ) : null}
            </li>
          </ul>
          {/* div con otros items */}
          <div className="items-center justify-end hidden gap-2 lg:flex">
            <button className="btn btn-secondary" onClick={toggleDarkMode}>
              {isDark ? (
                <i className="fa-regular fa-sun"></i>
              ) : (
                <i className="fa-regular fa-moon"></i>
              )}
            </button>
            {user === null ? (
              <>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Registrate
                </Link>
              </>
            ) : null}
            {user !== null ? (
              <button className="btn btn-primary" onClick={handleLogout}>
                Cerrar sesión
              </button>
            ) : null}
          </div>
          {/* responsive */}
          <div className="lg:hidden">
            <button className="btn btn-primary" onClick={handleOpen}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        {/* mobile */}
        <Transition
          show={open}
          // le vamos a agregar como deseamos que se comporte
          enter="transition-all duration-300 ease-in-out"
          enterFrom="max-h-0 opacity-0"
          enterTo="max-h-screen opacity-100"
          leave="transition-all duration-300 ease-in-out"
          leaveFrom="max-h-screen opacity-100"
          leaveTo="max-h-0 opacity-0"
        >
          <div className="overflow-hidden lg:hidden">
            <nav className="flex flex-col gap-2 py-4 border-t border-gray-200">
              <Link
                to="/"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 border rounded-lg dark:text-white"
              >
                Inicio
              </Link>
              <Link
                to="/products"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 border rounded-lg dark:text-white"
              >
                Productos
              </Link>
              <Link
                to="/cart"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 border rounded-lg dark:text-white"
              >
                Carrito
              </Link>
              <button className="btn btn-secondary" onClick={toggleDarkMode}>
                {isDark ? (
                  <i className="fa-regular fa-sun"></i>
                ) : (
                  <i className="fa-regular fa-moon"></i>
                )}
              </button>

              {user !== null ? (
                <button className="btn btn-primary" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              ) : (
                <>
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-primary">
                    Registrate
                  </Link>
                </>
              )}
            </nav>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
