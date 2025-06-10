function Resultado({ imc }) {
  if (!imc) return null

  const imcNum = Number(imc)

  let categoria = ''

  if (imcNum < 18.5) categoria = 'Abaixo do peso'
  else if (imcNum >= 18.5 && imcNum <= 24.9) categoria = 'Peso normal'
  else if (imcNum >= 25 && imcNum <= 29.9) categoria = 'Excesso de peso'
  else if (imcNum >= 30 && imcNum <= 34.9) categoria = 'Obesidade de classe 1'
  else if (imcNum >= 35 && imcNum <= 39.9) categoria = 'Obesidade de classe 2'
  else categoria = 'Obesidade de classe 3';

  return (
    <div>
      <p>Seu IMC: {imcNum.toFixed(2)}</p>
      <p>Categoria: {categoria}</p>
    </div>
  );
}
export default Resultado