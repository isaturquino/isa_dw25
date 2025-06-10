import { useState } from 'react';
import './Calculadora.css';
import Input from './Input';
import Botao from './Botao';
import Resultado from './Resultado'; 

function Calculadora() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState(null)

  function calcularIMC() {
    const imc = Number(peso) / (Number(altura) * Number(altura))
    setResultado(imc.toFixed(2))
  }

  return (
    <div>
      <h2>Calcular IMC</h2>
      <Input
        peso={peso}
        altura={altura}
        onPesoChange={(e) => setPeso(e.target.value)}
        onAlturaChange={(e) => setAltura(e.target.value)}
      />
      <Botao onClick={calcularIMC} />
      <Resultado imc={resultado} />
    </div>
  );
}

export default Calculadora;
