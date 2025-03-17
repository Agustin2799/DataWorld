import React from 'react'

const Service = ({img, name, description}) => {
  return (
    <div className="flex flex-col bg-gray-800/80 w-full rounded-tr-3xl rounded-bl-3xl border border-gray-600">
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
        <button className="px-10 py-5 bg-black/60 text-white">Ver más</button>
      </div>
    </div>
  );
}

export default Service