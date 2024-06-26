import style from './Projects.module.css'
import CardProjects from '../elements/CardProjects'

// Imagens
import foto01 from '../imagens/foto01.svg'
import foto02 from '../imagens/foto02.svg'
import foto03 from '../imagens/foto03.svg'

function Projects(){
    return (
        <div className={style.projects}>
            <h3>Projetos</h3>

            <CardProjects 
                src={foto01}
                title={'Designing Dashboards'}
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
        </div>
    )
}

export default Projects