import { useState } from 'react';
import './Calculadora.css';
import Input from './Input';
import Botao from './Botao';

function Calculadora() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcularIMC() {
    const imc = peso / (altura* altura);
    setResultado(imc.toFixed(2));
  }

  return (
    <div>
      <Input
        peso={peso}
        altura={altura}
        onPesoChange={(e) => setPeso(e.target.value)}
        onAlturaChange={(e) => setAltura(e.target.value)}
      />
      <Botao onClick={calcularIMC} />
      {resultado && <p>Seu IMC é: {resultado}</p>}
    </div>
  );
}

export default Calculadora;
