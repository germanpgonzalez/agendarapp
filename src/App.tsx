import { FormularioTurnos } from './components/FormularioTurnos';
import {Layout} from './layout/Layout';
import {ListaTurnos} from './components/ListaTurnos'

function App() {
  

  return (
      <Layout>
        <div className="flex flex-wrap items-start gap-6">
            <FormularioTurnos/>
            <ListaTurnos/>
        </div>
      </Layout>
  )
}

export default App
