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
                    slidesPerView={3}
                    loop
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="py-5 px-4">
                                <img src="https://imgs.search.brave.com/lpugBWHzDnKep4sg9s1Xh1EU6Epe8YHPAa-dYsbv5sY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWFq/ZXMubmF0aW9uYWxn/ZW9ncmFwaGljLmNv/bS5lcy9tZWRpby8y/MDIzLzExLzE0L3No/dXR0ZXJzdG9ja19m/NmFkODVlZV8xMzg3/ODQ4NjI5XzIzMTEx/NDE3MDI0OV8xMDAw/eDY2Ny5qcGc" alt="" className="img-fluid" />
                                <p>Lorem Ipsum</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-4">
                                <img src="https://imgs.search.brave.com/MNdT26oc4VykzLAeUKITw5ZezjNWlgv0ak3zUR22hGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/aGVybW9zYS1mb3Rv/LXBhaXNhamUtbmF0/dXJhbC1vdG9ub18x/ODE2MjQtMjU5MzQu/anBnP3NlbXQ9YWlz/X2h5YnJpZA" alt="" className="img-fluid" />
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
                                <img src="https://imgs.search.brave.com/i8JtCyj1MSgR4JCxUf6XWRmbbUe9rsizeOS5LNIkDmM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcx/OTI2NjE5L2VzL2Zv/dG8vbGFnby1tb3Jh/aW5lLWVuLXN1bnJp/c2UtcGFycXVlLW5h/Y2lvbmFsLWRlLWJh/bmZmLWNhbmFkJUMz/JUExLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz04NmZ0TXow/VjI2djF6d0tVNlN5/RXVMcXFtdi02VUJN/Q1dfSFhrRUwycmxn/PQ" alt="" className="img-fluid" />
                                <p>Lorem Ipsum</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default CarouselHomeExp
