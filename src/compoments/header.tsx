import '../styles/header.css';
import { categoriesList } from "../data/categories";
import { brandsList } from "../data/brands";

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
                        <img src="/logo.png" alt="TTB"/>
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
                                {categoriesList.map((item) => (
                                    <div className="subitem" key={item.id}>
                                        <a href="#!">{item.name}</a>
                                    </div>
                                ))}
                            </div>
                        </li>

                        <li className="nav-item has-megamenu">
                            <a href="">Hãng <i className="fa fa-chevron-down"></i></a>
                            <div className="mega-menu">
                                {brandsList.map((item) => (
                                    <div className="subitem" key={item.id}>
                                        <a href="#!">{item.name}</a>
                                    </div>
                                ))}
                            </div>
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
