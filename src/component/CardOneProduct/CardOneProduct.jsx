import { Link, useParams } from 'react-router-dom';
import { products } from '../../assets/data';
import s from './CardOneProduct.module.css'

export function CardOneProduct() {
    const { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <>
            <section className=' container'>
                <Link to='/' className={s.toHome} > {`<`} На главную</Link>
                <div className={s.card__inner}>
                    <div className={s.imgBox}>
                        <img src={product.image} alt="#" />
                    </div>
                    <div className={s.txtBox}>
                        <h3>{product.title}</h3>
                        <p className={s.txt}>{product.text}</p>
                        <div className={s.price_btn}>
                            <p className={s.price}>{product.price} ₽</p>
                            <Link to='' className={s.btn}>Добавить в корзину</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}