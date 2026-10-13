import { turnos } from '../data/turnos';


const claseTh = "px-3 py-2.5 first:rounded-l-lg last:rounded-r-lg";
const claseTd = "px-3 py-3.5 text-sm text-etiqueta";

const formatearFecha = (valor: string) =>
  new Date(valor).toLocaleString("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

export const ListaTurnos = () => {
  return (
    <>
      <section className="flex min-w-0 grow basis-140 flex-col gap-5 rounded-[14px] border border-borde bg-superficie p-7">
        <div>
          <h2 className="text-texto font-bold text-[22px]">Turnos Agendados</h2>
          <p>{turnos.length} {turnos.length === 1 ? "turno agendado" : "turnos agendados"}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full w-min-170 border-collapse text-left">
            <thead>
              <tr className="bg-fondo text-xs uppercase font-bold tracking-wider text-suave">
                <th className={claseTh}>Cliente</th>
                <th className={claseTh}>Teléfono</th>
                <th className={claseTh}>Fecha y Hora</th>
                <th className={claseTh}>Detalle</th>
              </tr>
            </thead>
            <tbody>
                {turnos.map((turno) => (
                    <tr key={turno.id} className="border-b border-borde">
                        <td className="px-3 py-3.5 text-[15px] font-bold text-texto">
                            {turno.nombre} {turno.apellido}
                        </td>
                        <td className={claseTd}>{turno.telefono}</td>
                        <td className="px-3 py-3.5 text-sm font-bold text-texto">{formatearFecha(turno.fecha)}</td>
                        <td className={`${claseTd} leading-snug`}>{turno.detalle}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
        {turnos.length === 0 && <p className="py-10 text-center text-sm text-suave">Todavía no hay turnos agendados</p>}
      </section>
    </>
  );
};
