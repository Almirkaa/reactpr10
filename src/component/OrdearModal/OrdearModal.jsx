import s from './OrdearModal.module.css'
import Modal from 'react-modal'
import { useParams } from 'react-router-dom';
import { products } from '../../assets/data';

export function OrdearModal({ modalIsOpen, setModalIsOpen, idTovar }) {
    function CloseModal() {
        setModalIsOpen(false);
    }
    // function AddToBag() {
    //     setModalIsOpen(false);
    //     return (
    //         setTimeout(<div className={s.message}>Товар успешно добавлен в корзину!</div>, 3000)

    //     )
    // }
    const { id } = useParams;
    const product = products.find((product) => product.id == idTovar);
    return (
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <h3>Заказать товар</h3>
                <p>Товара '{product.title}' нет в наличии</p>
                <form action="" className={s.form}>
                    <input type="text" placeholder='Введите количество товара'/>
                    <button type="submit">Отправить</button>
                </form>
                
                <button className={s.close} onClick={CloseModal}>X</button>

            </Modal>
        </>
    )
}