import { useEffect, useRef } from "react";
import { Swiper } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import {useSelector} from "react-redux";

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


    const brands = useSelector((state:any)=>state.brands )


    return (
        <section className="brands section-padding">
            <div className="container">
                <h2 className="section-title">Các thương hiệu hàng đầu</h2>
                <div className="swiper" ref={sliderRef}>
                    <div className="swiper-wrapper">
                        {brands.map((brand: any) => (
                            <div key={brand.id} className="swiper-slide brand-item">
                                <a href="#">
                                    <img src={brand.image} alt={brand.name} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}