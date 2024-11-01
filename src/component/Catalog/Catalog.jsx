

import { useState } from 'react'
import { products } from '../../assets/data'
import { Card } from '../Card/Card'
import { Filtr } from '../Filtr/Filtr'
import { Search } from '../Search/Search'
import s from './Catalog.module.css'


export function Catalog() {
    const [query, setQuery] = useState('');
    function handleChange(e){
        setQuery(e.target.value);
    }
    const filteredProducts= products.filter((product)=>{
        return product.title.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <>
            <div className="container">
                <h2>Каталог товаров</h2>
                <Filtr></Filtr>
                <Search handleChange={handleChange}></Search>
                <div className={s.cards}>
                    {
                        filteredProducts.length ? filteredProducts.map((product)=>{
                            return(
                                <Card id={product.id} image={product.image} title={product.title} price={product.price} ></Card>
                            )
                        }) : <p className='error'>Ничего не найдено по запросу "{query}"</p>
                    }
                </div>
            </div>
        </>
    )
}