import { useState, type ChangeEvent, type FormEvent } from "react";


type DatosTurno = {
    nombre: string
    apellido: string
    fecha: string
    telefono: string
    detalle: string

}

const FORM_VACIO : DatosTurno = 

    { nombre : "", 
      apellido : "", 
      telefono : "", 
      fecha : "", 
      detalle : "",
    }

export const FormularioTurnos = () => {
    
    const [form, setForm] = useState<DatosTurno>(FORM_VACIO);

    const handleSubmit = (e: FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
    }

    const handleChange = (  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-2">
        <label htmlFor="nombre">Nombre:</label>
        <input 
         id="nombre" 
         name="nombre"
         type="text" 
         placeholder="Ingrese el nombre"
         value={form.nombre} 
         onChange={handleChange}
         required
         />
        <label htmlFor="apellido">Apellido:</label>
        <input 
         id="apellido" 
         name="apellido"
         type="text" 
         placeholder="Ingrese el apellido" 
         value={form.apellido}
         onChange={handleChange}
         required
         />
      </div>
      <label htmlFor="fecha">Fecha Turno:</label>
      <input 
       id="fecha" 
       name="fecha"
       type="datetime-local"
       value={form.fecha}
       onChange={handleChange}
       required
       />
      <label htmlFor="telefono">Teléfono</label>
      <input 
       id="telefono" 
       name="telefono"
       type="text" 
       value={form.telefono}
       onChange={handleChange}
       required
       />
      <label htmlFor="detalle">¿Qué se va a hacer?</label>
      <textarea 
      id="detalle" 
      name="detalle"
      placeholder="Ingrese lo que se va a hacer el cliente"
      value={form.detalle}
      onChange={handleChange}
      />
    <button type="submit">Enviar</button>
    </form>
  );
};
