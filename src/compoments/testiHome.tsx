import { useEffect, useRef } from "react";
import { Swiper } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function TestimonialSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let instance: Swiper | null = null;
        const frameId = requestAnimationFrame(() => {
            if (sliderRef.current) {
                instance = new Swiper(sliderRef.current, {
                    modules: [Autoplay, Pagination],
                    loop: true,
                    autoplay: {
                        delay: 4000,
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
        <section className="testimonials section-padding bg-light">
            <div className="container">
                <h2 className="section-title">Khách hàng Nói về Chúng tôi</h2>
                <div className="swiper" ref={sliderRef}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide testimonial-item">
                            <p>
                                "Giày đi cực kỳ êm chân và chuẩn size, form dáng đẹp y như hình. Nhân viên tư vấn size rất nhiệt tình!"
                            </p>
                            <h4>Chị An (Quận 7)</h4>
                        </div>
                        <div className="swiper-slide testimonial-item">
                            <p>
                                "Sản phẩm chính hãng, chất liệu bền bỉ và giao hàng rất nhanh. Sẽ tiếp tục ủng hộ shop."
                            </p>
                            <h4>Anh Bách (Hà Nội)</h4>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}