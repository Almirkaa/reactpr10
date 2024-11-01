import { Link, NavLink } from 'react-router-dom'
import s from './Header.module.css'
import cn from 'classnames'

export function Header() {
    return (
        <>
            <header className='container'>
                <nav>
                    <NavLink to='/' className={s.link}>О нас</NavLink>
                    <NavLink to='/' className={s.link}>Каталог</NavLink>
                    <NavLink to='/' className={s.link}>Где нас найти</NavLink>
                    <NavLink to='/user' className={s.link}>Пользователи</NavLink>
                </nav>
                <div className={s.logo}>
                    <img src="src/assets/logo.png" alt="" />
                </div>
                <div className={s.buttons}>
                    <Link to='/' className={s.btnReg} >Регистрация</Link>
                    <Link to='/' className={s.btnAuth} >Вход</Link>

                    
                </div>
            </header>
        </>
    )
}