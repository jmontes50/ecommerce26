import { useState } from "react";
import { Transition } from "@headlessui/react";

const slides = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "3",
  },
];

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <header className="relative w-full h-screen mb-10 overflow-hidden">
      {slides.map((slide, index) => (
        <Transition
          key={slide.id}
          show={index === currentSlide}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0">
            <img
              src={slide.imageUrl}
              alt={slide.alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
              <h2 className="mb-4 text-4xl font-bold">Cyber WOW</h2>
              <button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600">
                Compra ahora
              </button>
            </div>
          </div>
        </Transition>
      ))}

      <button
        onClick={prevSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full left-4 top-1/2 hover:bg-opacity-75"
      >
        <i className="fa-solid fa-arrow-left fa-2x"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute p-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full right-4 top-1/2 hover:bg-opacity-75"
      >
        <i className="fa-solid fa-arrow-right fa-2x"></i>
      </button>
    </header>
  );
};

export default HeaderSlider;
