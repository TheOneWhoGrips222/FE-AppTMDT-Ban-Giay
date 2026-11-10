
import '../styles/footer.css';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>VỀ CHÚNG TÔI</h4>
                        <p>
                            Công ty TNHH Giày Dép Thể Thao TTB<br />
                            MST: 031xxxxxxx<br />
                            Địa chỉ: Khu phố 6, Phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh<br />
                            Hotline: 1900.1234<br />
                            Email: 23130024@hcmuaf.edu.vn
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                        <ul>
                            <li><a href="#">Chính sách Bảo hành giày</a></li>
                            <li><a href="#">Chính sách Vận chuyển & Giao hàng</a></li>
                            <li><a href="#">Chính sách Đổi trả size (7 ngày)</a></li>
                            <li><a href="#">Phương thức Thanh toán</a></li>
                            <li><a href="#">Hướng dẫn chọn size giày (Size Guide)</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>LIÊN KẾT NHANH</h4>
                        <ul>
                            <li><a href="#">Về chúng tôi</a></li>
                            <li><a href="#">Hệ thống cửa hàng giày</a></li>
                            <li><a href="#">Tuyển dụng</a></li>
                            <li><a href="#">Dành cho Đối tác B2B</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <p>Đăng ký nhận tin khuyến mãi:</p>
                        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email của bạn" />
                            <button type="submit">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Bản quyền thuộc về Cửa hàng Giày TTB.</p>
            </div>
        </footer>
    );
}