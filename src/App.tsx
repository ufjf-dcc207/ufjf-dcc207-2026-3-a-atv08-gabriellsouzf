import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'
import { useState } from 'react';

const data:Array<PacoteType> = [
  {
    id: "04d1a115-07eb-416e-b026-48487ffdb95e",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id: "911aaa51-e4e8-483c-a8e1-b08f4ef57606",
    largura: 40.0,
    altura: 20.0,
    profundidade: 10.0,
    peso: 3.14
  },
]

function App() {
  const [pacotes, setPacotes] = useState(data);
  function excluirPacotes(pacote) {
    const novoPacotes = pacotes.filter(p=>p!==pacote);
    setPacotes(novoPacotes);
  }
  return (
    <section>
      <h2>Pacotes</h2>
      <div className = 'pacotes'>
        {pacotes.map(p => (
          <div key={p.id}>
            <Pacote pacote={p}/>
            <button onClick= {()=> excluirPacotes(p)}>Excluir</button>
            </div> ))}
      </div>
    </section>
  )
}

export default App
