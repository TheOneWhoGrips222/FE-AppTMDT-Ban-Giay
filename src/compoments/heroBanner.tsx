import { useEffect, useRef } from "react";
import { Swiper } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import {useSelector} from "react-redux";

export default function HeroBanner() {
    const banners = useSelector((state:any)=>state.banners )

    const sliderRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        let instance: Swiper | null = null;
        const frameId = requestAnimationFrame(() => {
            if (sliderRef.current) {
                instance = new Swiper(sliderRef.current, {
                    modules: [Autoplay, Pagination],
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: sliderRef.current.querySelector('.swiper-pagination') as HTMLElement,
                        clickable: true,
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
        <section className="hero-banner swiper" ref={sliderRef}>
            <div className="swiper-wrapper">
                {banners.filter((banner => banner.isActive ===true)).map((banner) => (
                <div key={banner.id}  className="swiper-slide hero-slide">
                    <img src={banner.image} alt={banner.title}/>
                </div>
                ))}

            </div>
            <div className="swiper-pagination"></div>
        </section>
    );
}