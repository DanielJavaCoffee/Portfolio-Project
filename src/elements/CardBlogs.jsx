import style from './CardBlogs.module.css'

function Card({title, date, translation, text}){
    return (
        <div className={style.card}>
            <h3>{title}</h3>

            <div className={style.info}>
                <h4>{date}</h4>
                <h4>{translation}</h4>
            </div>

            <p>{text}</p>
        </div>
    )
}

export default Card