import { useContext, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";

const RegisterView = () => {
  const { register, loginWithGoogle } = useContext(AuthContext);
  const inputEmail = useRef();
  const inputPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputEmail.current.value, inputPassword.current.value)
    try {
      const email = inputEmail.current.value;
      const password = inputPassword.current.value;
      const registered = await register(email, password);
      console.log(registered);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen md:flex-row">
        {/* imagen */}
        <div className="flex items-center justify-center w-full max-h-screen overflow-hidden bg-yellow-400 md:w-7/12">
          <img
            className="object-cover object-center w-full"
            alt="foto"
            src="https://images.unsplash.com/photo-1485231183945-fffde7cc051e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        {/* form registro */}
        <div className="flex flex-col items-center justify-center w-full p-8 md:w-5/12">
          <div className="w-full max-w-md space-y-8 text-center">
            <h2 className="mt-6 text-3xl font-bold">Registrate</h2>
          </div>
          {/* input */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* input */}
            <div className="space-y-4 rounded-md shadow-md">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-light text-gray-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-1.5 border rounded-md"
                  placeholder="email@dominio.com"
                  ref={inputEmail}
                />
              </div>
            </div>
            {/* password */}
            <div className="space-y-4 rounded-md shadow-md">
              <div>
                <label
                  htmlFor="password"
                  className="text-xs font-light text-gray-500"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-1.5 border rounded-md"
                  placeholder="Indique su contraseña"
                  ref={inputPassword}
                />
              </div>
            </div>
            {/* botón */}
            <div className="space-y-4 rounded-md shadow-md">
              <button className="w-full btn btn-primary">Registrarme</button>
            </div>
            <div className="space-y-4 text-center">
              <span className="block text-gray-400">O continua con Google</span>
            </div>
            <div className="space-y-4 rounded-md shadow-md">
              <button
                className="w-full p-2 text-center border-2 border-black rounded-md"
                onClick={loginWithGoogle}
              >
                <i className="fa-brands fa-google"></i> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
