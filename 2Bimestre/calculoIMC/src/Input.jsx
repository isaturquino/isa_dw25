import "./Input.css"
function Input(){
    return(
        <div>
            <input type="number" name="peso" id="peso" value={peso} onChange={onPesoChange}/>
            <input type="number" name="altura" id="altura" value={altura} onChange={onAlturaChange} />
        </div>
    )
}
export default Input