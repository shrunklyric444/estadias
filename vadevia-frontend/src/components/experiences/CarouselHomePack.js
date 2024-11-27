import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselHomePack = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center pt-5 mb-5">Paquetes</h2>
                </div>
                <div className="col-md-12">
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="py-5 px-4">
                                <img src="https://imgs.search.brave.com/Gayda0VTyO-pPOxKxeEQ4bk2MgKKMLjEdzzBINh-P7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL2VzL2Zv/dG8vc3VucmlzZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Mk51cTJobkpOSjJE/MjkteEM0LU1DWG5y/OURYZzd2ckRsc0ZE/TlFCU0I0Yz0" alt="" className="img-fluid" />
                                <p>Lorem Ipsum</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-4">
                                <img src="https://imgs.search.brave.com/lpugBWHzDnKep4sg9s1Xh1EU6Epe8YHPAa-dYsbv5sY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWFq/ZXMubmF0aW9uYWxn/ZW9ncmFwaGljLmNv/bS5lcy9tZWRpby8y/MDIzLzExLzE0L3No/dXR0ZXJzdG9ja19m/NmFkODVlZV8xMzg3/ODQ4NjI5XzIzMTEx/NDE3MDI0OV8xMDAw/eDY2Ny5qcGc" alt="" className="img-fluid" />
                                <p>Lorem Ipsum</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-4">
                                <img src="https://imgs.search.brave.com/H1Oflhn6bj9YutvV3X9QPSYejyfd_eaQ7OkiFHwuNmI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/MzY1aW1hZ2VuZXNi/b25pdGFzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8x/Mi90ZW1wbG8td2F0/LWFydW4tYmFuZ2tv/ay10YWlsYW5kaWEt/NDAweDI4NC5qcGc" alt="" className="img-fluid" />
                                <p>Lorem Ipsum</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-4">
                                <img src="https://imgs.search.brave.com/lpugBWHzDnKep4sg9s1Xh1EU6Epe8YHPAa-dYsbv5sY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWFq/ZXMubmF0aW9uYWxn/ZW9ncmFwaGljLmNv/bS5lcy9tZWRpby8y/MDIzLzExLzE0L3No/dXR0ZXJzdG9ja19m/NmFkODVlZV8xMzg3/ODQ4NjI5XzIzMTEx/NDE3MDI0OV8xMDAw/eDY2Ny5qcGc" alt="" className="img-fluid" />
                                <p>Lorem Ipsum</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default CarouselHomePack
