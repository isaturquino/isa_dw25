import { useState } from "react";

export default function TarefaInput({onAddTarefa}) {
    const[descricao, setDescricao] = useState('')
    
    const adicionar = () =>{
        if(descricao.trim()){
            onAddTarefa(descricao)
            setDescricao('')
        }
    }

    return(
        
        <div>
            <input type="text" placeholder="Digite o nome da tarefa" value={descricao} onChange={(e)=>{setDescricao(e.target.value)}} />

            <button onClick={adicionar}>Adicionar</button>
        </div>
    )
}