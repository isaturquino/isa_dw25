import Input from './Input'
import Botao from './Botao'
import Calculadora from './Calculadora'
import Resultado from './Resultado'
import './App.css'

function App() {
    return(
        <div>
            <div>
                <h1>Projeto calculadora de IMC</h1>
            </div>
            <Input/>
            <Botao/>
            <Calculadora/>
            <Resultado/>
        </div>

    )

}

export default App
