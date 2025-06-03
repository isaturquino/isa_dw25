import Section from "./Section"
import "./MainContent.css"
export default function MainContent(){
    return(
        <main className="conteudo">
            <Section title="Sobre nós">
                <p>Disciplina DW2</p>
            </Section>
            <Section title="Contato">
                <p>Você pode nos contatar pelo e-mail:
                    <a href="isabrlyturquino@utfpr.edu.br">isabelyturquino@utfpr.edu.br</a>
                </p>
            </Section>
        </main>

    )
}