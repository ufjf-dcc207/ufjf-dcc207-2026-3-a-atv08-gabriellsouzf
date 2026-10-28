import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'

const data:Array<PacoteType> = [
  {
    id: "04d1a115-07eb-416e-b026-48487ffdb95e",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  }
]

function App() {

  return (
    <section>
      <h2>Pacotes</h2>
      <div className = 'pacotes'>
        <Pacote pacote = {data[0]}/>
      </div>
    </section>
  )
}

export default App
