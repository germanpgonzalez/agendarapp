import { FormularioTurnos } from './components/FormularioTurnos';
import {Layout} from './layout/Layout';
import {ListaTurnos} from './components/ListaTurnos'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { data } from './data/data'

import type { DatosTurno,Turno } from './types'

function App() {
  const [turnos, setTurnos] = useState<Turno[]>(data);
  const [actTurno, setActTurno] = useState<Turno | null >(null);

  const agregarTurno = (datos: DatosTurno) => {
    const nuevoTurno: Turno = {...datos, id : uuidv4()};
    setTurnos((prev) => [...prev, nuevoTurno]);
  }

  const eliminarTurno = ( id: string) => {
    setTurnos((prev) => prev.filter((turno) => turno.id !== id ) );
  }

  const editarTurno = (id : string) => {
    console.log("Editando turno...")
    const turnoElegido = turnos.find((turno) => turno.id === id) ?? null;
    setActTurno(turnoElegido);
  }

  return (
      <Layout>
        <div className="flex flex-wrap items-start gap-6">
            <FormularioTurnos onAgendar={agregarTurno} actTurno={actTurno}/>
            <ListaTurnos turnos={turnos} eliminarTurno={eliminarTurno} editarTurno={editarTurno}/>
        </div>
      </Layout>
  )
}

export default App
