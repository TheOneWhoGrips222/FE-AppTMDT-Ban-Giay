

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {load} from "../store/slice/ProductSlice";
import {dataProduct} from "../data/products";
import '../styles/product-list.css';
export default function ListProduct(){

    return (<>
        <div className="shop-main">
            <div className="shop-header">
                <h1>Tất cả giày</h1>
                <div className="sort-box">
                    <label>Sắp xếp:</label>
                    <select>
                        <option>Mới nhất</option>
                        <option>Bán chạy</option>
                        <option>Giá tăng dần</option>
                        <option>Giá giảm dần</option>
                    </select>
                </div>
            </div>

            <div className="shop-product-grid">
                <a href="#" className="product-card" style={{ textDecoration: 'none' }}>
                    <img src="../../assets/images/products/nike-air-force-1.jpg" alt="Giày Nike Air Force 1" />
                    <h3>Giày Nike Air Force 1 '07</h3>
                    <div className="price">2.929.000đ</div>

                    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button type="button" className="btn-buy">
                            <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                        <button type="button" className="btn" style={{ margin: 0, width: '100%', background: '#ff4d4f' }}>
                            Mua ngay
                        </button>
                    </div>
                </a>

                <a href="#" className="product-card" style={{ textDecoration: 'none' }}>
                    <img src="../../assets/images/products/nike-pegasus-40.jpg" alt="Giày Nike Pegasus 40" />
                    <h3>Giày Chạy Bộ Nike Pegasus 40</h3>
                    <div className="price">3.519.000đ</div>

                    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button type="button" className="btn-buy">
                            <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                        <button type="button" className="btn" style={{ margin: 0, width: '100%', background: '#ff4d4f' }}>
                            Mua ngay
                        </button>
                    </div>
                </a>

                <a href="#" className="product-card" style={{ textDecoration: 'none' }}>
                    <img src="../../assets/images/products/nike-jordan-1-low.jpg" alt="Giày Air Jordan 1 Low" />
                    <h3>Giày Air Jordan 1 Low</h3>
                    <div className="price">3.829.000đ</div>

                    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <button type="button" className="btn-buy">
                            <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                        <button type="button" className="btn" style={{ margin: 0, width: '100%', background: '#ff4d4f' }}>
                            Mua ngay
                        </button>
                    </div>
                </a>
            </div>
        </div>
    </>);
}