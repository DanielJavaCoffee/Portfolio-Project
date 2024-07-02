import style from './Presentation.module.css'
import { useState, useEffect } from "react"

function Presentation(){

    const [text, setText] = useState('')
    const toRotate = ['Olá, eu sou Daniel! Desenvolvedor Full-Stack']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const period = 200
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() =>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedtext = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)
   
        setText(updatedtext);

        if(!isDeleting && updatedtext === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedtext === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    return (
        <div className={style.presentation}>
            <div>
                <h1>{text}</h1>
            </div>

            <div>
                <p>
                    Nos últimos 10 anos, trabalhei no setor de serviços gerais, ocupando funções de auxiliar de limpeza a gerente, incluindo garçom, controle de caixa e gestão de equipes. Essa experiência me deu uma visão ampla das operações diárias e do trabalho em equipe.
                    Agora, quero redirecionar minha carreira para a Tecnologia da Informação (TI). Estou ansioso para aplicar minhas habilidades de resolução de problemas, organização e liderança em TI, buscando oportunidades para contribuir em projetos tecnológicos e expandir meu conhecimento nesse campo. Estou confiante de que minha experiência diversificada será valiosa nessa transição de carreira.
                </p>
            </div>

            <div id='Contato'>
                <button>Download resumo</button>
            </div>
        </div>
    )
}

export default Presentation