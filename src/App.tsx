import './App.css'
import ListagemDePacotes from './ListagemDePacotes';
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
  function excluirPacotes(id: String) {
    setPacotes(pacotes.filter(p=> p.id != id));
  }
  return (
    <section>
      <h2>Pacotes</h2>
      <ListagemDePacotes pacotes={pacotes} acaoExcluir ={excluirPacotes}/>
    </section>
  )
}

export default App
