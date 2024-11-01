import { Link } from 'react-router-dom';
import { Btn } from '../Btn/Btn';
import s from './Banner.module.css';
// import {Btn} from './component/Btn'
export function Banner(){
    return(
        <section className={s.banner_bg}>
            <Link className={s.btn}>О компании <span>АвтоТорг</span></Link>
        </section>
    )
}
