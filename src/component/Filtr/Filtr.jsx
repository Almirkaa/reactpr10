import { Link } from 'react-router-dom'
import s from './Filtr.module.css'


export function Filtr() {
    return (
        <>
            <div className={s.filtrs}>
                <p>Категории:</p>
                <div className={s.link_btn}>
                    
                    <Link to='/' className={s.btnActive}>Все товары</Link>
                    <Link to='/' className={s.btn}>Шины/колеса</Link>
                    <Link to='/' className={s.btn}>Масла</Link>
                    <Link to='/' className={s.btn}>Ароматизаторы</Link>
                </div>
            </div>

        </>
    )
}