
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, updateQuantity } from "../store/slice/CartSlice";
import type { RootState } from "../store/store";

export default function Cart() {
    const cartItems = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [unchecked, setUnchecked] = useState<string[]>([]);
    const keyOf = (productId: number, variantId: number) => `${productId}-${variantId}`;
    const selectedItems = cartItems.filter(item => !unchecked.includes(keyOf(item.productId, item.variantId)));
    const allSelected = cartItems.length > 0 && selectedItems.length === cartItems.length;
    const subtotal = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const removeItem = (productId: number, variantId: number) => {
        dispatch(removeFromCart({ productId, variantId }));
        setUnchecked(current => current.filter(key => key !== keyOf(productId, variantId)));
    };
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
                            <div className="cart-list-actions">
                                <label>
                                    <input type="checkbox" checked={allSelected}
                                        onChange={e => setUnchecked(e.target.checked ? [] : cartItems.map(item => keyOf(item.productId, item.variantId)))} />
                                    Chọn tất cả
                                </label>
                                <button type="button" className="cart-action" onClick={() => { dispatch(clearCart()); setUnchecked([]); }}>Xóa tất cả</button>
                            </div>
                            {cartItems.map((item) => (
                                <div className="cart-item" key={`${item.productId}-${item.variantId}`}>
                                    <input type="checkbox" className="cart-checkbox"
                                        checked={!unchecked.includes(keyOf(item.productId, item.variantId))}
                                        aria-label={`Chọn ${item.name}`}
                                        onChange={() => setUnchecked(current => current.includes(keyOf(item.productId, item.variantId))
                                            ? current.filter(key => key !== keyOf(item.productId, item.variantId))
                                            : [...current, keyOf(item.productId, item.variantId)])} />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />
                                    <div className="cart-item-info">
                                        <h2>{item.name}</h2>
                                        <p>Size: {item.size} | Màu: {item.color}</p>
                                        <div className="cart-controls">
                                            <button type="button" disabled={item.quantity <= 1}
                                                aria-label={`Giảm số lượng ${item.name}`}
                                                onClick={() => dispatch(updateQuantity({ productId: item.productId, variantId: item.variantId, quantity: item.quantity - 1 }))}>−</button>
                                            <span>{item.quantity}</span>
                                            <button type="button" disabled={item.quantity >= item.stock}
                                                aria-label={`Tăng số lượng ${item.name}`}
                                                onClick={() => dispatch(updateQuantity({ productId: item.productId, variantId: item.variantId, quantity: item.quantity + 1 }))}>+</button>
                                            <button type="button" className="cart-action"
                                                onClick={() => removeItem(item.productId, item.variantId)}>Xóa</button>
                                        </div>
                                    </div>
                                    <strong className="cart-item-price">
                                        {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                                    </strong>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <h2>Tóm tắt đơn hàng</h2>
                            <div className="cart-summary-row">
                                <span>Tạm tính</span>
                                <strong>
                                    {subtotal.toLocaleString("vi-VN")} đ
                                </strong>
                            </div>

                            {selectedItems.length > 0 ? (
                                <Link
                                    to="/checkout"
                                    state={{
                                        selectedKeys: selectedItems.map(item =>
                                            keyOf(item.productId, item.variantId)
                                        )
                                    }}
                                    className="cart-continue"
                                >
                                    Tiến hành thanh toán
                                </Link>
                            ) : (
                                <button
                                    type="button"
                                    className="cart-continue"
                                    disabled
                                >
                                    Tiến hành thanh toán
                                </button>
                            )}

                            <Link to="/">Tiếp tục mua sắm</Link>

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
