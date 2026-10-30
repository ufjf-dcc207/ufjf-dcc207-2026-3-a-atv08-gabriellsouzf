import { useState } from "react";
import "./ListagemDePacotes.css";
import Pacote from "./Pacote";
import type { PacoteType } from "./types";

type ListagemDePacotesProps = {
    pacotes: Array<PacoteType>;
    acaoExcluir: (id: String)=> void;
}
export default function ListagemDePacotes({pacotes, acaoExcluir}: ListagemDePacotesProps) {
    const [ordenacao, setOrdernacao] = useState("peso");
    function mudaOrdenacao(evento) {
        setOrdernacao(evento.target.value);
    }
    return (
        <div>
            <div>Orderna por: {ordenacao}</div>
            <select onChange = {mudaOrdenacao}>
                <option value = "Altura">Altura</option>
                <option value = "Largura">Largura</option>
                <option value = "Profundidade">Profundidade</option>
                <option value = "peso">peso</option>

            </select>
            <dl>
                {pacotes
                .sort((x , y)=>y[ordenacao]-x[ordenacao])
                .map(p => (
                    <Pacote pacote={p} key={p.id} acaoExcluir = {acaoExcluir}/>
                ))}
            </dl>
        </div>)
}