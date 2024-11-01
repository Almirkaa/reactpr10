import { useState } from 'react'
import { Link } from 'react-router-dom'
import { OrdearModal } from '../OrdearModal/OrdearModal';
import s from './Card.module.css'

export function Card({ id, image, title, price, count}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    function ShowModal() {
        setModalIsOpen(true);
    }
    return (
        <>
            <div className={s.card}>
                <div className={s.imgBox}>
                    <img src={image} alt="" />
                </div>
                <h4>{title}</h4>
                <div className={s.price_btn}>
                    <p className={s.price}>{price} ₽</p>
                    <Link to={`${id}`} className={s.btn}>Подробнее</Link>

                </div>
                {
                    count>0 ?( <Link to={`${id}`} className={s.btn}>В корзину</Link>) : (<button onClick={ShowModal} className={s.btn}>Заказать</button>)
                }
            </div>
            <OrdearModal setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} idTovar={`${id}`}/>
        </>
    )
}