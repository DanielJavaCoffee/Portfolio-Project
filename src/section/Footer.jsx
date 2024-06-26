import { FaInstagram, FaLinkedin, FaGithub,  FaFacebook, FaReacteurope} from "react-icons/fa";
import style from './Footer.module.css'

function Footer(){
    
    return (
        <footer className={style.footer}>
            <div>
                <ul>
                    <li><a href='https://www.instagram.com/0danielsilva00/' target="_blank"> <FaInstagram size={30} /> </a></li>
                    <li><a href='https://www.linkedin.com/in/daniel-silva-ads' target="_blank"> <FaLinkedin size={30} /></a></li>
                    <li><a href='https://github.com/DanielJavaCoffee?tab=repositories' target="_blank"> <FaGithub size={30} /></a></li>
                    <li><a href='https://www.facebook.com/danyel.silva.9847/' target="_blank"> <FaFacebook size={30} /></a></li>
                </ul>
            </div>

            <div>
                 <p>Copyright ©2024 All rights reserved </p>
            </div>
        </footer>
    )
}

export default Footer