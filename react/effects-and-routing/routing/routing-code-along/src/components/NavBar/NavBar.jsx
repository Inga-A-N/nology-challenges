import {Link, NavLink} from 'react-router-dom'
import style from './NavBar.module.scss'

const NavBar = () => {

    const activeStyles = ({isActive}) => isActive? `${style.link} ${style.activ_link}`:`${style.link}`

    
  return (
    <nav className={style.nav}>
        <NavLink to='/' className={style.link} isActive>Home</NavLink>
        <NavLink to='/projects' className={style.link}>Projects</NavLink>
        <NavLink to='/contact' className={style.link}>Contact</NavLink>

        
    </nav>
  )
}

export default NavBar