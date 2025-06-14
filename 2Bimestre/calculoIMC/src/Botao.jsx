import "./Botao.css"
function Botao({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>Calcular IMC</button>
  );
}

export default Botao;

