import { data } from "../data/data";
import { FilaTurno } from "./FilaTurno";

const claseTh = "px-3 py-2.5 first:rounded-l-lg last:rounded-r-lg";

export const ListaTurnos = () => {
  return (
    <section className="flex min-w-0 grow basis-140 flex-col gap-5 rounded-[14px] border border-borde bg-superficie p-7">
      <div>
        <h2 className="text-texto font-bold text-[22px]">Turnos Agendados</h2>
        <p className="mt-1.5 text-sm text-suave">
          {data.length}{" "}
          {data.length === 1 ? "turno agendado" : "turnos agendados"}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-170 border-collapse text-left">
          <thead>
            <tr className="bg-fondo text-xs uppercase font-bold tracking-wider text-suave">
              <th className={claseTh}>Cliente</th>
              <th className={claseTh}>Teléfono</th>
              <th className={claseTh}>Fecha y Hora</th>
              <th className={claseTh}>Detalle</th>
              <th className={claseTh}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((turno) => (
              <FilaTurno key={turno.id} turno={turno} />
            ))}
          </tbody>
        </table>
      </div>
      {data.length === 0 && (
        <p className="py-10 text-center text-sm text-suave">
          Todavía no hay turnos agendados
        </p>
      )}
    </section>
  );
};
