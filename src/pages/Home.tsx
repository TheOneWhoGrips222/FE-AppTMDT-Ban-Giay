import "../index.css";
import HeroBanner from "../compoments/heroBanner";
import FeaturedProducts from "../compoments/featureProductHome";
import BrandSlider from "../compoments/brandListHome";
import TestimonialSlider from "../compoments/testiHome";

export default function Home() {
    return (
        <>
            <HeroBanner />

            <section className="trust-badges section-padding">
                <div className="container">
                    <div className="trust-badge">
                        <i className="fa fa-shield-halved"></i>
                        <h3>Cam kết 100% Chính Hãng</h3>
                    </div>
                    <div className="trust-badge">
                        <i className="fa fa-rotate"></i>
                        <h3>Đổi trả size trong 7 ngày</h3>
                    </div>
                    <div className="trust-badge">
                        <i className="fa fa-headset"></i>
                        <h3>Hỗ trợ tư vấn 24/7</h3>
                    </div>
                    <div className="trust-badge">
                        <i className="fa fa-truck-fast"></i>
                        <h3>Giao hàng toàn quốc</h3>
                    </div>
                </div>
            </section>

            <FeaturedProducts />
            <BrandSlider />
            <TestimonialSlider />
        </>
    );
}