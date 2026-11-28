
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUserId } from "../store/slice/CartSlice";
import "../styles/Orders.css";

type OrderItem = {
    productId: number;
    variantId: number;
    name: string;
    price: number;
    image: string;
    size: number;
    color: string;
    quantity: number;
};

type Order = {
    id: string;
    userId: string;
    fullName: string;
    phone: string;
    address: string;
    note?: string;
    paymentMethod: string;
    status: string;
    items: OrderItem[];
    total: number;
    createdAt: string;
};

const formatPrice = (value: number) =>
    Number(value).toLocaleString("vi-VN") + " đ";

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        const localId = localStorage.getItem("id");
        const sessionId = sessionStorage.getItem("id");
        const userId = getCurrentUserId();

        if (localId && sessionId && localId !== sessionId) {
            setError("Phiên đăng nhập không hợp lệ. Vui lòng đăng xuất và đăng nhập lại.");
            return;
        }

        if (!userId) {
            setLoggedIn(false);
            return;
        }

        try {
            const saved = JSON.parse(
                localStorage.getItem(`orders_${userId}`) || "[]"
            );

            if (!Array.isArray(saved)) {
                throw new Error("Invalid orders");
            }

            setOrders(
                saved
                    .filter((order): order is Order =>
                        order !== null &&
                        typeof order === "object" &&
                        String(order.userId) === userId
                    )
                    .reverse()
            );
        } catch {
            setError("Không đọc được lịch sử đơn hàng.");
        }
    }, []);

    return (
        <section className="orders-page">
            <div className="orders-container">
                <h1>Đơn hàng của tôi</h1>

                {!loggedIn ? (
                    <div className="orders-empty">
                        <p>Vui lòng đăng nhập để xem đơn hàng.</p>
                        <Link to="/login">Đăng nhập</Link>
                    </div>
                ) : error ? (
                    <div className="orders-empty">
                        <p>{error}</p>
                    </div>
                ) : orders.length === 0 ? (
                    <div className="orders-empty">
                        <h2>Bạn chưa có đơn hàng nào</h2>
                        <p>Hãy chọn sản phẩm yêu thích để bắt đầu mua sắm.</p>
                        <Link to="/">Tiếp tục mua sắm</Link>
                    </div>
                ) : (
                    <div className="orders-list">
                        {orders.map(order => (
                            <article className="orders-card" key={order.id}>
                                <div className="orders-card-header">
                                    <div>
                                        <strong>Mã đơn: {order.id}</strong>
                                        <p>
                                            Ngày đặt: {new Date(order.createdAt).toLocaleString("vi-VN")}
                                        </p>
                                    </div>
                                    <span className="orders-status">
                                        {order.status}
                                    </span>
                                </div>

                                {order.items.map(item => (
                                    <div
                                        className="orders-product"
                                        key={`${item.productId}-${item.variantId}`}
                                    >
                                        <img src={item.image} alt={item.name} />
                                        <div className="orders-product-info">
                                            <h3>{item.name}</h3>
                                            <p>Size: {item.size} | Màu: {item.color}</p>
                                            <p>Số lượng: {item.quantity}</p>
                                        </div>
                                        <strong>
                                            {formatPrice(item.price * item.quantity)}
                                        </strong>
                                    </div>
                                ))}

                                <div className="orders-total">
                                    <span>Thanh toán: {order.paymentMethod}</span>
                                    <strong>
                                        Tổng tiền: {formatPrice(order.total)}
                                    </strong>
                                </div>

                                <details className="orders-details">
                                    <summary>Thông tin giao hàng</summary>
                                    <p>Người nhận: {order.fullName}</p>
                                    <p>Số điện thoại: {order.phone}</p>
                                    <p>Địa chỉ: {order.address}</p>
                                    {order.note && (
                                        <p>Ghi chú: {order.note}</p>
                                    )}
                                </details>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
