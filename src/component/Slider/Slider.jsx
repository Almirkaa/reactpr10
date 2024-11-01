import React from "react";
import s from './Slider.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    
  };
  return (
    <div className='slider-container container'>
      <Slider {...settings}>
        <div className={s.slider}>
          <img src="https://avatars.mds.yandex.net/i?id=1cf04a6f38f0be15415a0c35010d27a3eb59c5c5-7942200-images-thumbs&n=13" alt="" className={s.img} />
        </div>
        <div className={s.slider}>
        <img src="https://puzzleit.ru/files/puzzles/191/190930/_original.jpg" alt="" className={s.img}/>
        </div>
        <div>
        <img src="https://avatars.mds.yandex.net/i?id=1cf04a6f38f0be15415a0c35010d27a3eb59c5c5-7942200-images-thumbs&n=13" alt="" className={s.img}/>
        </div>
        <div>
        <img src="https://puzzleit.ru/files/puzzles/191/190930/_original.jpg" alt="" className={s.img}/>
        </div>
        <div>
        <img src="https://avatars.mds.yandex.net/i?id=1cf04a6f38f0be15415a0c35010d27a3eb59c5c5-7942200-images-thumbs&n=13" alt="" className={s.img}/>
        </div>
        <div>
        <img src="https://puzzleit.ru/files/puzzles/191/190930/_original.jpg" alt="" className={s.img}/>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
