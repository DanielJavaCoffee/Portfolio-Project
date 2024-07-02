import style from './CardProjects.module.css'

function CardProjects({link, src, title, text}){
    return (
        <div className={style.cardProjects}>
            <div>
                <a href={link} target='_blank'><img src={src} alt='ERRO'></img></a>
            </div>

            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CardProjects