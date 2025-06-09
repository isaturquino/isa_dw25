import "./Botao.css"
function Botao({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Calcular IMC</button>
    </div>
  );
}

export default Botao;
