import React from "react";

const Lema = () => {
  return (
    <div className="w-full text-white min-h-screen flex flex-col justify-around items-center relative">
      <div
        className="h-screen w-full bg-cover bg-center bg-fixed bg-[url(/city3.jpg)]"
       
      ></div>
      <div className="absolute bottom-50 mx-auto md:ms-20 w-5/6 text-white text-4xl lg:text-7xl flex flex-col font-extrabold">
        <div>La tecnología avanza</div>
        <div>y nosotros con ella.</div>
      </div>
    </div>
  );
};

export default Lema;
