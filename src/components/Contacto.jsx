
import React, {useState} from 'react'

const Contacto = () => {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     message: "",
   });

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("Form submitted:", formData);
   };

   return (
     <section className="min-h-screen w-full flex flex-col justify-center items-center">
       <div className="font-ligth text-5xl text-white pb-10 md:py-20 md:pb-10 px-15 text-center">
         Contacto
       </div>
       <div className="max-w-lg w-5/6 md:w-2/3 mx-auto p-6 bg-white/10 rounded-bl-3xl rounded-tr-3xl shadow-lg">
         <form onSubmit={handleSubmit} className="space-y-4">
           <div>
             <label className="block text-white mb-2">Nombre</label>
             <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChange}
               className="w-full p-2 rounded-md focus:outline-none focus:ring-1 bg-black/40 focus:ring-slate-400 text-slate-300"
               required
             />
           </div>
           <div>
             <label className="block text-white mb-2">Correo Electrónico</label>
             <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               className="w-full p-2 rounded-md focus:outline-none focus:ring-1 bg-black/40 focus:ring-slate-400 text-slate-300"
               required
             />
           </div>
           <div>
             <label className="block text-white mb-2">Mensaje</label>
             <textarea
               name="message"
               value={formData.message}
               onChange={handleChange}
               rows="4"
               className="w-full p-2  rounded-md focus:outline-none focus:ring-1 bg-black/40 focus:ring-slate-400 text-slate-300"
               required
             ></textarea>
           </div>
           <button
             type="submit"
             className="w-full bg-white text-black text-xl p-2 rounded-bl-3xl rounded-tr-3xl"
           >
             Enviar
           </button>
         </form>
       </div>
     </section>
   );
}

export default Contacto

