import { useState, type ChangeEvent, type FormEvent } from "react";
import type { DatosTurno } from '../types'

const FORM_VACIO: DatosTurno = {
  nombre: "",
  apellido: "",
  telefono: "",
  fecha: "",
  detalle: "",
};

type Props = {
  onAgendar : (turno : DatosTurno)  => void
}

export const FormularioTurnos = ({onAgendar} : Props) => {
  const [form, setForm] = useState<DatosTurno>(FORM_VACIO);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAgendar(form)
    setForm(FORM_VACIO)
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const claseLabel = "text-[13px] font-bold text-etiqueta";

const claseInput =
  "h-11.5 w-full min-w-0 rounded-lg border border-borde-input bg-superficie px-3.5 text-[15px] text-texto placeholder:text-suave/60 focus:outline-none focus:ring-2 focus:ring-primario/40";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-100 flex-col gap-4.5 rounded-[14px] border border-borde bg-superficie p-7"
    >
      <h2 className="text-texto font-bold text-[22px]">Nuevo Turno</h2>
      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="flex flex-col gap-1.5 min-w-0">
          <label
            htmlFor="nombre"
            className={claseLabel}
          >
            Nombre
          </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Ingrese el nombre"
          value={form.nombre}
          onChange={handleChange}
          className={claseInput}
          required
        />
        </div>
        <div className="flex flex-col gap-1.5 min-w-0">
          <label
            htmlFor="apellido"
            className={claseLabel}
          >
            Apellido
          </label>
        <input
          id="apellido"
          name="apellido"
          type="text"
          placeholder="Ingrese el apellido"
          value={form.apellido}
          onChange={handleChange}
          className={claseInput}
          required
        />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <label htmlFor="fecha" className={claseLabel}>
          Fecha Turno
        </label>
      <input
        id="fecha"
        name="fecha"
        type="datetime-local"
        value={form.fecha}
        onChange={handleChange}
        className={claseInput}
        required
      />
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <label
          htmlFor="telefono"
          className={claseLabel}
        >
          Teléfono
        </label>
      <input
        id="telefono"
        name="telefono"
        type="tel"
        value={form.telefono}
        onChange={handleChange}
        className={claseInput}
        placeholder="Ej 154221867"
        required
      />
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <label
          htmlFor="detalle"
          className={claseLabel}
        >
          ¿Qué se va a hacer?
        </label>
      <textarea
        id="detalle"
        name="detalle"
        placeholder="Ej corte y lavado, retoque de color"
        value={form.detalle}
        onChange={handleChange}
        rows={4}
        className="py-3 w-full min-w-0 rounded-lg border border-borde-input bg-superficie px-3.5 text-[15px] text-texto placeholder:text-suave/60 focus:outline-none focus:ring-2 focus:ring-primario/40 resize-none"
      />
      </div>
      <button type="submit" className="h-12.5 cursor-pointer rounded-lg bg-primario text-base font-bold text-white transition-colors hover:bg-primario/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primario/40 focus-visible:ring-offset-2">Agendar Turno</button>
    </form>
  );
};
