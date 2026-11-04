import { useEffect, useRef } from "react";
import { Swiper } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function BrandSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let instance: Swiper | null = null;
        const frameId = requestAnimationFrame(() => {
            if (sliderRef.current) {
                instance = new Swiper(sliderRef.current, {
                    modules: [Autoplay],
                    loop: true,
                    slidesPerView: 5,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        1024: { slidesPerView: 5, spaceBetween: 30 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        480: { slidesPerView: 2, spaceBetween: 15 },
                    },
                });
            }
        });

        return () => {
            cancelAnimationFrame(frameId);
            if (instance && typeof instance.destroy === "function") {
                instance.destroy(true, true);
            }
        };
    }, []);

    return (
        <section className="brands section-padding">
            <div className="container">
                <h2 className="section-title">Các thương hiệu hàng đầu</h2>
                <div className="swiper" ref={sliderRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide brand-item">
                            <a href="#">
                                <img src="https://rubee.com.vn/admin/webroot/upload/image/images/logo-thuong-hieu-giay-nike(1).jpg" alt="Nike" />
                            </a>
                        </div>
                        <div className="swiper-slide brand-item">
                            <a href="#">
                                <img src="https://rubee.com.vn/wp-content/uploads/2021/06/logo-10-thuong-hieu-giay.jpg" alt="Adidas" />
                            </a>
                        </div>
                        <div className="swiper-slide brand-item">
                            <a href="#">
                                <img src="https://rubee.com.vn/admin/webroot/upload/image/images/5(1).jpg" alt="Puma" />
                            </a>
                        </div>
                        <div className="swiper-slide brand-item">
                            <a href="#">
                                <img src="https://rubee.com.vn/admin/webroot/upload/image/images/logo-thuong-hieu-giay-converse.jpg" alt="New Balance" />
                            </a>
                        </div>
                        <div className="swiper-slide brand-item">
                            <a href="#">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Converse_logo.svg" alt="Converse" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}