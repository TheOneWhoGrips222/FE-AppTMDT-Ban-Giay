import '../styles/header.css';
import { categoriesList } from "../data/categories";
import { brandsList } from "../data/brands";
import {Link} from "react-router-dom";


type UserItem = {
    id: number;
    email: string;
    password: string;
    fullName: string;
    loginName: string;
    phone: string;
    address: string;
    wishlist: string[];
    avatar: string;
};

export default function Header(){

    function isLogin(){
        if(localStorage.getItem("id") !== null){

            return true;
        }
        else if(sessionStorage.getItem("id") !== null){
            return true;
        }
        return false;
    }

    function findNameById(a){
        const users = localStorage.getItem("users");
        if(users === null ){
            return false;
        }
        const listU :UserItem[] = JSON.parse(users);
        for(let i=0; i < listU.length; i++){
            if(listU[i].id == a){
                avatar = listU[i].avatar;
                return listU[i].loginName;
            }
        }
    }

    function logout(){
        localStorage.removeItem("id");
        sessionStorage.removeItem("id");
        window.location.reload();
    }


    let uid = null;

    if (localStorage.getItem("id") != null) {
        uid = localStorage.getItem("id");
    }
    else if (sessionStorage.getItem("id") != null) {
        uid = sessionStorage.getItem("id");
    }
    else {
        uid = null;
    }
    let avatar = "";
    let user = findNameById(uid);

    return (<>
        <header className="header">
            <div className="header__top-bar">
                <div className="container">
                    <span><i className="fa fa-phone"></i> Hỗ trợ Kỹ thuật: 1900.1234</span>
                    <span className="spacer"></span>
                    {isLogin() === true ?
                        <>
                            <div className="user_box">
                                <img className="user_avatar" src={avatar} alt="avatar" />
                                <span className="user_name">{user} </span>
                                <Link to="/orders">Đơn hàng của tôi</Link>
                                <Link to="/login" onClick={logout}>Đăng xuất</Link>
                            </div>
                        </>
                        : <><Link to="/login">Đăng nhập</Link>
                            <Link to="/register">Đăng ký</Link>
                        </> }


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
