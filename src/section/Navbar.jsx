import style from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <header className={style.navbar}>
            <nav>
                <ul>
                    <li><Nav.Link href='#Projetos'>Projetos</Nav.Link></li>
                    <li><Nav.Link href='#contato'>Contato</Nav.Link></li>
                    <li><Nav.Link href='#Contato'>Blog</Nav.Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar