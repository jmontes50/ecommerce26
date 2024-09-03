import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useForm } from "react-hook-form";
import TableCart from "../components/Cart/TableCart";
import Map from "../components/ui/Map";

const CartView = () => {
  const headings = ["id", "nombre", "precio", "cantidad"];

  const [positionMarker, setPositionMarker] = useState(null);

  const { cart, removeProductFromCart, totalCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  // console.log(user);
  /**register para registrar los input,
   * handleSubmit, para manejar el submit
   * errors, para controlar las validaciones de los input registrados
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getDataSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="container py-10">
      <h1 className="mb-5 text-4xl font-semibold text-center">Checkout</h1>
      <div className="flex flex-col w-full gap-5 md:flex-row">
        {/* contenedor tabla y form envio */}
        <div className="w-full p-5 md:w-2/3">
          <TabGroup>
            <TabList>
              <Tab className="data-[selected]:bg-slate-600 data-[selected]:text-white px-2 py-1.5 ">
                Productos
              </Tab>
              <Tab className="data-[selected]:bg-slate-600 data-[selected]:text-white px-2 py-1.5 ">
                Información de envio
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TableCart
                  headings={headings}
                  data={cart}
                  actions={true}
                  handleDelete={removeProductFromCart}
                />
              </TabPanel>
              <TabPanel>
                {/* Formulario con hook forms */}
                <form className="py-4" onSubmit={handleSubmit(getDataSubmit)} id="form-envio">
                  {/* campo */}
                  <div className="flex flex-col mb-3">
                    <label className="text-xs text-gray-500 text-light">
                      Nombre completo:
                    </label>
                    <input
                      type="text"
                      placeholder="Juan Perez"
                      className="dark:text-dark-text dark:bg-dark-background"
                      defaultValue={user.displayName}
                      // a cada input hay que registrarlo
                      {...register('nombreCompleto', {
                        required: 'El nombre es obligatorio',
                        minLength: { value: 3, message: 'El nombre debe tener más de 3 letras'},
                        maxLength: { value: 20, message: 'El nombre debe tener hasta 20 letras'},
                        // pattern: { value: /^[A-Z]+$/i , message: 'Solo acepta mayúsculas'}
                      })}
                    />
                    {errors.nombreCompleto && <p className="text-xs text-red-600">{errors.nombreCompleto.message}</p>}
                  </div>
                  {/* campo */}
                  <div className="flex flex-col mb-3">
                    <label className="text-xs text-gray-500 text-light">
                      Dirección:
                    </label>
                    <input
                      type="text"
                      placeholder="Av. Calle. Jr. Dpto."
                      className="dark:text-dark-text dark:bg-dark-background"
                      {...register('direccion')}
                    />
                  </div>
                  {/* campo */}
                  <div className="flex flex-col mb-3">
                    <label className="text-xs text-gray-500 text-light">
                      Teléfono:
                    </label>
                    <input
                      type="text"
                      placeholder="9########"
                      className="dark:text-dark-text dark:bg-dark-background"
                      {...register('telefono')}
                    />
                  </div>
                </form>
                {/* Mapa Leaflet */}
                <Map clickable={true} position={positionMarker} setPosition={setPositionMarker} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        {/* subtotal y confirmar compra */}
        <div className="w-full p-5 md:w-1/3">
          {/* Subtotal */}
          <div className="flex justify-between mb-5 font-semibold">
            <span>Subtotal</span>
            <span>S/ {totalCart.toFixed(2)}</span>
          </div>
          {/* descuento */}
          <div className="mb-5">
            <span className="text-xs">Ingrese cupón</span>
            <div className="flex">
              <input
                className="p-4 text-lg border-2 border-black rounded-s-lg dark:border-white dark:bg-dark-background"
                placeholder="FLAT50"
              />
              <button className="px-5 text-white bg-slate-950 dark:bg-white dark:text-black rounded-e-lg">
                Aplicar
              </button>
            </div>
          </div>
          {/* delivery */}
          <div className="flex justify-between mb-5 font-normal">
            <span>Delivery</span>
            <span>S/ 10</span>
          </div>
          {/* total */}
          <div className="flex justify-between mb-5 font-semibold">
            <span>TOTAL</span>
            <span>S/ {(totalCart + 10).toFixed(2)}</span>
          </div>
          {/* mediante el atributo form puedo indicar que un botón externo dispare el evento submit de una etiqueta form */}
          <button 
            className="w-full p-5 text-center text-white rounded-lg bg-slate-950 dark:bg-white dark:text-black"
            form="form-envio"
          >
            Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
