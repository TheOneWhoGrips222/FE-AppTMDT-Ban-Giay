
import { Link } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart() {
    return (
        <section className="cart-page">
            <div className="container">
                <h1 className="cart-title">
                    Giỏ hàng của bạn
                </h1>

                <div className="cart-empty">
                    <i className="fa fa-shopping-cart"></i>

                    <h2>Giỏ hàng đang trống</h2>

                    <p>
                        Bạn chưa có sản phẩm nào trong giỏ hàng.
                    </p>

                    <Link to="/" className="cart-continue">
                        Tiếp tục mua sắm
                    </Link>
                </div>
            </div>
        </section>
    );
}
