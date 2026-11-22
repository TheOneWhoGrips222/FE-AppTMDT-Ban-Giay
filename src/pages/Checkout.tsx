
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import "../styles/Checkout.css";

export default function Checkout() {
    const cartItems = useSelector((state: RootState) => state.cart);

    const location = useLocation();
    const selectedKeys = (
        location.state as { selectedKeys?: string[] } | null
    )?.selectedKeys ?? [];

    const selectedItems = cartItems.filter(item =>
        selectedKeys.includes(`${item.productId}-${item.variantId}`)
    );

    const subtotal = selectedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <section className="checkout-page">
            <div className="checkout-container">
                <h1>Thanh toán đơn hàng</h1>

                {selectedItems.length === 0 ? (
                    <div className="checkout-empty">
                        <h2>
                            {cartItems.length === 0
                                ? "Giỏ hàng đang trống"
                                : "Chưa chọn sản phẩm thanh toán"}
                        </h2>
                        <p>
                            {cartItems.length === 0
                                ? "Vui lòng thêm sản phẩm trước khi thanh toán."
                                : "Vui lòng chọn sản phẩm trong giỏ hàng để thanh toán."}
                        </p>
                        <Link to="/cart">Quay lại giỏ hàng</Link>
                    </div>
                ) : (
                    <div className="checkout-layout">
                        <form
                            className="checkout-form"
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <h2>Thông tin giao hàng</h2>

                            <label htmlFor="checkout-name">Họ và tên</label>
                            <input
                                id="checkout-name"
                                type="text"
                                placeholder="Nhập họ và tên"
                                required
                            />

                            <label htmlFor="checkout-phone">Số điện thoại</label>
                            <input
                                id="checkout-phone"
                                type="tel"
                                placeholder="Nhập số điện thoại"
                                required
                            />

                            <label htmlFor="checkout-address">Địa chỉ nhận hàng</label>
                            <input
                                id="checkout-address"
                                type="text"
                                placeholder="Số nhà, đường, phường/xã, tỉnh/thành phố"
                                required
                            />

                            <label htmlFor="checkout-note">Ghi chú đơn hàng</label>
                            <textarea
                                id="checkout-note"
                                rows={4}
                                placeholder="Ghi chú cho đơn hàng (không bắt buộc)"
                            />

                            <h2>Phương thức thanh toán</h2>

                            <div className="checkout-payment">
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="COD"
                                        defaultChecked
                                    />
                                    Thanh toán khi nhận hàng (COD)
                                </label>
                                <p>Thanh toán bằng tiền mặt khi nhận hàng.</p>
                            </div>

                            <button
                                type="button"
                                className="checkout-submit"
                                disabled
                            >
                                Đặt hàng
                            </button>
                        </form>

                        <aside className="checkout-summary">
                            <h2>Đơn hàng của bạn</h2>

                            {selectedItems.map((item) => (
                                <div
                                    className="checkout-product"
                                    key={`${item.productId}-${item.variantId}`}
                                >
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>Size: {item.size} | Màu: {item.color}</p>
                                        <p>Số lượng: {item.quantity}</p>
                                        <strong>
                                            {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                                        </strong>
                                    </div>
                                </div>
                            ))}

                            <div className="checkout-total">
                                <span>Tạm tính</span>
                                <strong>{subtotal.toLocaleString("vi-VN")} đ</strong>
                            </div>

                            <Link to="/cart" className="checkout-back">
                                Quay lại giỏ hàng
                            </Link>
                        </aside>
                    </div>
                )}
            </div>
        </section>
    );
}
