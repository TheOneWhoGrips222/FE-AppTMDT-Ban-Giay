import '../styles/wishList.css';
export default function WishList() {
    return (
        <>
            <main className="main-content">
                <section className="wishlist-section section-padding">
                    <div className="container">
                        <h1 className="section-title">Sản phẩm Yêu thích</h1>

                        <div className="wishlist-grid">

                            <div className="product-card wishlist-item">
                                <a href="#" className="wishlist-remove-btn"><i className="fa fa-times"></i></a>
                                <img src="../../assets/images/products/nike-air-force-1.jpg" alt="Giày Nike Air Force 1"/>
                                <h3>Giày Nike Air Force 1 '07</h3>
                                <div className="price">2.929.000đ</div>
                                <a href="#" className="btn btn-primary">Thêm vào giỏ hàng</a>
                            </div>

                            <div className="product-card wishlist-item">
                                <a href="#" className="wishlist-remove-btn"><i className="fa fa-times"></i></a>
                                <img src="../../assets/images/products/nike-pegasus-40.jpg" alt="Giày Nike Pegasus 40"/>
                                <h3>Giày Chạy Bộ Nike Pegasus 40</h3>
                                <div className="price">3.519.000đ</div>
                                <a href="#" className="btn btn-primary">Thêm vào giỏ hàng</a>
                            </div>

                            <div className="product-card wishlist-item">
                                <a href="#" className="wishlist-remove-btn"><i className="fa fa-times"></i></a>
                                <img src="../../assets/images/products/nike-jordan-1-low.jpg" alt="Giày Air Jordan 1 Low"/>
                                <h3>Giày Air Jordan 1 Low</h3>
                                <div className="price">3.829.000đ</div>
                                <a href="#" className="btn btn-primary">Thêm vào giỏ hàng</a>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}