import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselHomeExp = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center pb-5 mb-5">Experiencias</h2>
                </div>
                <div className="col-md-12">
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    loop
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="py-5">
                                Slide 1
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5">
                                Slide 1
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="py-5">
                                Slide 1
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="py-5">
                                Slide 1
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="py-5">
                                Slide 1
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="py-5">
                                Slide 1
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default CarouselHomeExp
