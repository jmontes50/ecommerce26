import { Link } from "react-router-dom";

export default function     Footer() {
  return (
    <footer className="text-gray-300 bg-black">
      <div className="container px-4 py-8 mx-auto md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Acerca de nosotros
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nemo culpa id blanditiis eos! Porro nesciunt ipsum itaque aperiam debitis consequatur quaerat aliquid, veritatis officiis quia, maxime numquam, fuga qui.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Enlaces rápidos
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Contacto</h2>
            <address className="text-sm not-italic">
              <p>123 Dirección</p>
              <p>Arequipa, Perú 12345</p>
              <p>Teléfono: (54) 456-789</p>
              <p>Email: info@dominio.com</p>
            </address>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Síguenos</h2>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-sm text-center border-t border-gray-700">
          <p> 2024 Logo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
