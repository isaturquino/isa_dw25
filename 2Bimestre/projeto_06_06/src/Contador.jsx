import { useState } from "react"
import Botoes from "./Botoes"


export default function Contador (){
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);

    return(
        <div className="contador">
            <h2>Contador</h2>
            <div className="numero">{contador}</div>
            <Botoes onIncrement={incrementar} onDecrement={decrementar} />
        </div>
    );
}