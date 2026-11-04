import { useEffect, useRef } from "react";
import { Swiper } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function HeroBanner() {
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
                <div className="swiper-slide hero-slide">
                    <img
                        src="https://upcontent.vn/wp-content/uploads/2024/07/mau-banner-giay-nam-1.jpg"
                        alt="Bộ sưu tập giày nam"
                    />
                    <div className="hero-content">
                        <h1>Đột Phá Tốc Độ, Nâng Tầm Sải Bước</h1>
                        <p>Khám phá bộ sưu tập giày thể thao chính hãng, thiết kế tối ưu cho mọi chuyển động.</p>
                        <a href="#" className="btn btn-primary">Khám Phá Ngay</a>
                    </div>
                </div>

                <div className="swiper-slide hero-slide">
                    <img
                        src="https://upcontent.vn/wp-content/uploads/2024/07/mau-banner-giay-nu-1.jpg"
                        alt="Bộ sưu tập giày nữ"
                    />
                    <div className="hero-content">
                        <h1>Êm Ái & Bền Bỉ Trên Mọi Hành Trình</h1>
                        <p>Công nghệ đế đệm tiên tiến giúp bảo vệ đôi chân của bạn suốt ngày dài.</p>
                        <a href="#" className="btn btn-primary">Xem Sản Phẩm</a>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </section>
    );
}