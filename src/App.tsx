import { FormularioTurnos } from './components/FormularioTurnos';
import {Layout} from './layout/Layout';

function App() {
  

  return (
    <>
      <Layout>
        <div className="flex flex-wrap items-start gap-6">
          <div className="">
            <h2>Nuevo Turno</h2>
            <FormularioTurnos/>
          </div>

          <div>
            <h2>Turnos Agendados</h2>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App
