import style from './CardProjects.module.css'

function CardProjects({src, title, text}){
    return (
        <div className={style.cardProjects}>
            <div>
                <img src={src} alt='ERRO'></img>
            </div>

            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CardProjects