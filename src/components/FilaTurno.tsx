import type { Turno } from "../types";
import { LuPencilLine } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const claseTd = "px-3 py-3.5 text-sm text-etiqueta";
const claseBoton = "flex size-11 cursor-pointer items-center justify-center rounded-lg hover:bg-fondo";

type Props = {
  turno: Turno;
  eliminarTurno: (id: string) => void
};

const formatearFecha = (valor: string) =>
  new Date(valor).toLocaleString("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

export const FilaTurno = ({ turno, eliminarTurno }: Props) => {
  return (
    <tr className="border-b border-borde">
      <td className="px-3 py-3.5 text-[15px] font-bold text-texto">
        {turno.nombre} {turno.apellido}
      </td>
      <td className={claseTd}>{turno.telefono}</td>
      <td className="px-3 py-3.5 text-sm font-bold text-texto">
        {formatearFecha(turno.fecha)}
      </td>
      <td className={`${claseTd} leading-snug`}>{turno.detalle}</td>
      <td className="px-3 py-3.5">
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Editar turno"
            className={`${claseBoton} text-suave`}
          >
            <LuPencilLine aria-hidden="true" className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Cancelar turno"
            onClick={() => eliminarTurno(turno.id)}
            className={`${claseBoton} text-peligro`}
          >
            <FaRegTrashAlt aria-hidden="true" className="size-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};
