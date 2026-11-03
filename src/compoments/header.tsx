import './Header.css';

export default function Header(){
    return (<>
        <header className="header">
            <div className="header__top-bar">
                <div className="container">
                    <span><i className="fa fa-phone"></i> Hỗ trợ Kỹ thuật: 1900.1234</span>
                    <span className="spacer"></span>
                    <a href="">Đăng nhập</a>
                    <a href="">Đăng ký</a>
                </div>
            </div>
            <div className="header__main">
                <div className="container">
                    <a href="./index.html" className="header__logo">
                        <img src="https://baobihoanggia.com/wp-content/uploads/2023/10/mau-logo-dep-shop-giay-dep-1-500x500.jpg" alt="TTB"/>
                    </a>
                    <div className="header__search">
                        <input type="text" placeholder="Tìm kiếm giày Adidas, Nike, Sneaker..."/>
                        <button><i className="fa fa-search"></i></button>
                    </div>
                    <div className="header__actions">
                        <a href=""><i className="fa fa-user"></i> Tài khoản</a>
                        <a href=""><i className="fa fa-heart"></i> Yêu thích</a>
                        <a href=""><i className="fa fa-shopping-cart"></i> Giỏ hàng (0)</a>
                    </div>
                </div>
            </div>
            <nav className="header__nav">
                <div className="container">
                    <ul>
                        <li className="nav-item has-megamenu">
                            <a href="">Loại giày <i className="fa fa-chevron-down"></i></a>
                            <div className="mega-menu">
                                <div className="subitem"><a href="">Sneaker</a></div>
                                <div className="subitem"><a href="">Giày chạy bộ (Running)</a></div>
                                <div className="subitem"><a href="">Giày bóng rổ</a></div>
                                <div className="subitem"><a href="">Giày thời trang / Casual</a></div>
                            </div>
                        </li>

                        <li className="nav-item has-megamenu">
                            <a href="">Hãng <i className="fa fa-chevron-down"></i></a>
                            <div className="mega-menu">
                                <div className="subitem"><a href="">Nike</a></div>
                                <div className="subitem"><a href="">Adidas</a></div>
                                <div className="subitem"><a href="">Li-Ning</a></div>
                                <div className="subitem"><a href="">Puma</a></div>
                                <div className="subitem"><a href="">Converse</a></div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a href="">Giày trẻ em</a>
                        </li>

                        <li className="nav-item">
                            <a href="">Khuyến mãi</a>
                        </li>
                        <li className="nav-item">
                            <a href="">Tin tức</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </>)
}
