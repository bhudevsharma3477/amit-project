import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <section className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </section>


        </>
    );
}

export default Slider;