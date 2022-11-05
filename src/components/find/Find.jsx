import React from 'react'
import styles from './Find.module.css'

import { Navigation, Pagination , Scrollbar , A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import Card from './Card';

const Find = () => {
  return (
    <div className={styles.find}>
        <div className={styles.heading}>
            <h1>Find your drive</h1>
            <div className={styles.text_bg}>
            <p>
                <span>Explore the world's larget car sharing marketplace</span>
            </p>
            </div>
        </div>
        <div className={styles.slider_container}>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      breakpoints={{
        //when the window width is >= 340px
        340: {
            width:200,
            slidesPerView: 1,
        },
        //when window width is >= 768px
        768:{
            width:768,
            slidesPerView: 4,
        },
        //when window width is >= 1040px
        1040:{
            width:1040,
            slidesPerView:5,
        },

      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        
        
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='Audi'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1601827280216-d850636510e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80' make='Hellcat'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1616789916664-dce56d9009da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='Mercedez'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='Lambo'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='Mustang'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1573074556015-71d2140a6372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' make='Chevy'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1606222742864-7c09da77e0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' make='GT'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' make='benz'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1570303278489-041bd897a873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='Civic'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='BMW'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1600864608915-49b79b6777a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='Dirt'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1622120286144-8d3779944ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='Bently'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1612593968469-d44a2e6ab5d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='BMW'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1630945688446-7b54c07015e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='Camaro'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1605409087711-e0f21d9a59da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80' make='Mustang'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1590509354359-f610288d6dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80' make='Mercedez'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80' make='Lambo'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='Mercedez'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='Mercedez'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' make='McLaren'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80' make='Audi'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1567818735868-e71b99932e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='GT'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' make='Undefined'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80' make='Mercedez'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1618205062886-3976f4bb8219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' make='Ferrari'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1619189557311-ef0bc299d2b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' make='Mini Cooper'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='Audi'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1516298252535-cf2ac5147f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='McLaren'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1618849888041-fe81e92b733e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' make='BMW'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1611656667636-6c4b9f4a08e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80' make='Aston Martin'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='Ferrari'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' make='Ferrari'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='BMW'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1588899451796-9ee681bf3da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='Mustang'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1618353482480-61ca5a9a7879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' make='JEEP'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1617917572835-5ab878656dcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='Ferrari'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1602034032025-47f18f22244f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' make='Romeo'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1595391907681-b0f42ebcdafd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' make='Subaru'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1630769660701-3454835913dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' make='Countach'/>
        </SwiperSlide>
        </Swiper>
            
        </div>

    </div>
  )
}

export default Find