import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Correo inválido";
    if (!formData.message.trim())
      newErrors.message = "El mensaje no puede estar vacío";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
    setErrors(validationErrors);
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center pb-20">
      <div className="font-light text-5xl text-white pb-10 md:py-20 md:pb-10 px-15 text-center">
        Contacto
      </div>
      <div className="max-w-lg w-full md:w-7/12 mx-auto p-6 bg-slate-700/40 rounded-bl-3xl rounded-tr-3xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md focus:outline-none focus:ring-1 bg-black/60 focus:ring-slate-400 text-slate-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-white mb-2">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md focus:outline-none focus:ring-1 bg-black/60 focus:ring-slate-400 text-slate-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-white mb-2">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 rounded-md focus:outline-none focus:ring-1 bg-black/60 focus:ring-slate-400 text-slate-300"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-white text-balck text-xl p-2 rounded-bl-3xl rounded-tr-3xl hover:bg-black hover:text-white transition-all duration-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
