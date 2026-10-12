import { FormularioTurnos } from './components/FormularioTurnos';
import {Layout} from './layout/Layout';

function App() {
  

  return (
    <>
      <Layout>
        <div className="flex flex-wrap items-start gap-6">
          <div className="">
            <FormularioTurnos/>
          </div>

          <div>
            <h2 className="text-texto font-bold">Turnos Agendados</h2>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App
