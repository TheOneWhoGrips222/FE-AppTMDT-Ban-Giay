
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId, removeFromCart } from "../store/slice/CartSlice";
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

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const localId = localStorage.getItem("id");
        const sessionId = sessionStorage.getItem("id");

        if (localId && sessionId && localId !== sessionId) {
            alert("Phiên đăng nhập không hợp lệ. Vui lòng đăng xuất và đăng nhập lại.");
            return;
        }

        const userId = getCurrentUserId();

        if (!userId) {
            alert("Vui lòng đăng nhập trước khi đặt hàng.");
            navigate("/login");
            return;
        }

        if (selectedItems.length === 0) {
            alert("Vui lòng chọn sản phẩm để thanh toán.");
            return;
        }

        const formData = new FormData(event.currentTarget);
        const fullName = String(formData.get("fullName") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        const address = String(formData.get("address") ?? "").trim();
        const note = String(formData.get("note") ?? "").trim();

        if (!fullName || !address || !/^0\d{9}$/.test(phone)) {
            alert("Vui lòng nhập đầy đủ thông tin và số điện thoại hợp lệ.");
            return;
        }

        const storageKey = `orders_${userId}`;
        let orders;

        try {
            orders = JSON.parse(localStorage.getItem(storageKey) || "[]");
        } catch {
            alert("Không đọc được dữ liệu đơn hàng.");
            return;
        }

        if (!Array.isArray(orders)) {
            alert("Dữ liệu đơn hàng không hợp lệ.");
            return;
        }

        const order = {
            id: `COD-${Date.now()}`,
            userId,
            fullName,
            phone,
            address,
            note,
            paymentMethod: "COD",
            status: "Chờ xác nhận",
            items: selectedItems.map(item => ({ ...item })),
            total: subtotal,
            createdAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(
                storageKey,
                JSON.stringify([...orders, order])
            );
        } catch {
            alert("Không thể lưu đơn hàng. Vui lòng thử lại.");
            return;
        }

        selectedItems.forEach(item => {
            dispatch(removeFromCart({
                productId: item.productId,
                variantId: item.variantId
            }));
        });

        alert(`Đặt hàng thành công! Mã đơn: ${order.id}`);
        navigate("/");
    };

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
                            onSubmit={handleSubmit}
                        >
                            <h2>Thông tin giao hàng</h2>

                            <label htmlFor="checkout-name">Họ và tên</label>
                            <input
                                id="checkout-name"
                                name="fullName"
                                type="text"
                                placeholder="Nhập họ và tên"
                                required
                            />

                            <label htmlFor="checkout-phone">Số điện thoại</label>
                            <input
                                id="checkout-phone"
                                name="phone"
                                type="tel"
                                placeholder="Nhập số điện thoại"
                                required
                            />

                            <label htmlFor="checkout-address">Địa chỉ nhận hàng</label>
                            <input
                                id="checkout-address"
                                name="address"
                                type="text"
                                placeholder="Số nhà, đường, phường/xã, tỉnh/thành phố"
                                required
                            />

                            <label htmlFor="checkout-note">Ghi chú đơn hàng</label>
                            <textarea
                                id="checkout-note"
                                name="note"
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
                                type="submit"
                                className="checkout-submit"
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
