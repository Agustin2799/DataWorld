import React from "react";

const Lema = () => {
  return (
    <div className="w-full text-white min-h-screen flex flex-col justify-around items-center relative">
      <div
        className="h-screen w-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(city3.jpg)" }}
          ></div>
          <div className="absolute bottom-20 left-20 text-white font-semibold text-4xl lg:text-7xl ">El mundo avanza. Tu empresa también.
          </div>
    </div>
  );
};

export default Lema;
