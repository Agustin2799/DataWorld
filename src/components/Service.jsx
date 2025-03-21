import React from 'react'

const Service = ({img, name, description}) => {
  return (
    <div className="flex flex-col bg-gray-800/80 w-full rounded-tr-3xl rounded-bl-3xl border border-gray-600 md:scale-95">
      {/* Contenedor de la imagen con un alto fijo */}
      <div className="h-[250px]">
        <img
          className="w-full h-full object-cover rounded-tr-3xl"
          src={img}
          alt={name}
        />
      </div>
      <div className="flex flex-col text-white px-7 py-5 flex-1">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold  pb-3">{name}</h2>
          <p className="pb-5 font-light text-slate-400">{description}</p>
        </div>
        <button className="px-10 py-5 bg-black/60 text-white rounded-bl-3xl rounded-tr-3xl relative border overflow-hidden group hover:scale-105 transition-all duration-500">
          Ver más
          {/* Esfera que se expande */}
          <div className="absolute top-[200px] left-[250px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-500 rounded-full group-hover:scale-[5000%] group-hover:opacity-100 opacity-0 transition-all duration-700 -z-10"></div>
          <div className="absolute top-[200px] left-[250px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-950 rounded-full group-hover:scale-[5000%] group-hover:opacity-100 opacity-0 transition-all duration-1000 -z-10 delay-200"></div>
        </button>
      </div>
    </div>
  );
}

export default Service