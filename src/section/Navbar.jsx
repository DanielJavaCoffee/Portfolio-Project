import style from './Navbar.module.css'

function Navbar(){
    return(
        <header className={style.navbar}>
            <nav>
                <ul>
                    <li><a href='#'>Projetos</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar