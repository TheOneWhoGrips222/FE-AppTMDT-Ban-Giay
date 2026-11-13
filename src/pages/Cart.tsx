
import { Link } from "react-router-dom";
import "../styles/Cart.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function Cart() {
    const cartItems = useSelector((state: RootState) => state.cart);
    return (
        <section className="cart-page">
            <div className="container">
                <h1 className="cart-title">
                    Giỏ hàng của bạn
                </h1>

                {cartItems.length === 0 ? (
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
                ) : (
                    <div className="cart-content">
                        <div className="cart-list">
                            {cartItems.map((item) => (
                                <div className="cart-item" key={`${item.productId}-${item.variantId}`}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />
                                    <div className="cart-item-info">
                                        <h2>{item.name}</h2>
                                        <p>Size: {item.size} | Màu: {item.color}</p>
                                        <p>Số lượng: {item.quantity}</p>
                                    </div>
                                    <strong className="cart-item-price">
                                        {item.price.toLocaleString("vi-VN")} đ
                                    </strong>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <h2>Tóm tắt đơn hàng</h2>
                            <div className="cart-summary-row">
                                <span>Tạm tính</span>
                                <strong>
                                    {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString("vi-VN")} đ
                                </strong>
                            </div>
                            <Link to="/" className="cart-continue">Tiếp tục mua sắm</Link>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
