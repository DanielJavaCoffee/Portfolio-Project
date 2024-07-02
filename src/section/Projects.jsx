import style from './Projects.module.css'
import CardProjects from '../elements/CardProjects'

// Imagens
import foto01 from '../imagens/foto01.svg'
import foto02 from '../imagens/foto02.svg'
import foto03 from '../imagens/foto03.svg'

import foto04 from '../imagens/ProjetoGoogle.png'
import foto05 from '../imagens/Weather.png'

function Projects(){
    return (
        <div className={style.projects} id='Projetos'>
            <h3>Projetos</h3>

            <CardProjects 
                src={foto01}
                title={'Vibrant Portraits of 2020'}
                text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}>
            </CardProjects>

            <CardProjects 
                src={foto02}
                title={'Vibrant Portraits of 2020'}
                text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}>
            </CardProjects>
        
            <CardProjects 
                src={foto03}
                title={'36 Days of Malayalam type'}
                text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}>
            </CardProjects>

            <CardProjects 
                link={'https://google-project-psi.vercel.app/'}
                src={foto04}
                title={'Projeto Google'}
                text={'O projeto google foi desenvolvido com React para fim de estudos junto com a DNC. Clique na imagem para ter acesso ao projeto.'}>
            </CardProjects>

            <CardProjects 
                link={'https://danieljavacoffee.github.io/DncWeather/'}
                src={foto05}
                title={'Projeto DNC Weather'}
                text={'DncWeather é um projeto que consome duas APIs para fornecer informações meteorológicas com base em um CEP informado. As APIs utilizadas são a ViaCEP e a Open-Meteo. Clique na imagem para ter acesso ao projeto.'}>
            </CardProjects>
        </div>
    )
}

export default Projects