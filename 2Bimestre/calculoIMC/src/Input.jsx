import "./Input.css"
function Input({ peso, altura, onPesoChange, onAlturaChange }){
    return(
        <div className="dados">
            <input type="number" name="peso" id="peso" placeholder="Peso(kg)" value={peso} onChange={onPesoChange}/>
            <input type="number" name="altura" id="altura" placeholder="Altura(m)" value={altura} onChange={onAlturaChange} />
        </div>
    )
}
export default Input