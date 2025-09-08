import styles from"./Contador.module.css"

import  {useState} from "react";

export default function Contador(){

    const [contador, setContador] = useState (0)

    function incrementar (){
        setContador(contador + 1)
    }

    function decrementar(){
        setContador(contador - 1)
    }

  return(
    <>
      <div className={styles.container}>
        <h1>Contador</h1>
        <div className={styles.contadorDisplay}>{contador}</div>
        <div className={styles.botaoContainer}>
          <button className={styles.botao}
          onClick={decrementar}
          >-</button>
          <button className={styles.botao}
          onClick={incrementar}
          >+</button>
        </div>
        <button className={styles.botao}> Reset</button>
      </div>
    </>
  )
}