import { Banner } from '../Banner/Banner'
import { Catalog } from '../Catalog/Catalog'
import { Filtr } from '../Filtr/Filtr'
import SimpleSlider from '../Slider/Slider'

import s from './HomePage.module.css'

export function HomePage(){
    return(
        <>
        <section>
            <Banner></Banner>
        </section>
        <section className={s.catalog}>
            <Catalog></Catalog>
        </section>
        <section><SimpleSlider></SimpleSlider></section>
        </>
    )
}