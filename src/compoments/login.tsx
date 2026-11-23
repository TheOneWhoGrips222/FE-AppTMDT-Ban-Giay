import '../styles/login.css';

import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";


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

export default function Form(){
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [remember, setRemember] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        const users = localStorage.getItem("users");
        if(users === null ){
            return false;
        }
        const listU :UserItem[] = JSON.parse(users);

        for(let i = 0; i < listU.length; i++ ){
            if((listU[i].loginName === userName) || (listU[i].email === userName) ){
                if(listU[i].password === password){

                    if(remember === true){
                        localStorage.setItem("id",listU[i].id + "");
                    }
                    else{
                        sessionStorage.setItem("id",listU[i].id + "");
                    }
                    window.location.href = "/";
                  return;
                }
                else{
                    setErrorMessage("Mật khẩu không chính xác !")
                    return;
                }
            }

        }

        setErrorMessage("Tên đăng nhập hoặc email không tồn tại !");
        return;
    }
    return (
        <>
            <main>
                <main className="main_container">
                    <form onSubmit={handleSubmit} className="resigter">
                        <h1>Đăng Nhập</h1>

                        <div className="input_group main_group">

                            <div className="input_field">
                                <i className="fa fa-user"></i>
                                <input type="text" id="username" value = {userName} onChange={(e) => setUserName(e.target.value)} placeholder="Tên đăng nhập "
                                       required/>
                            </div>

                            <div className="input_field">
                                <i className="fa fa-lock"></i>
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" required/>
                                <i className="fa fa-eye-slash toggle-password" data-target="password"></i>
                            </div>


                        </div>

                        <div className="check_row">
                            <label className="check_deal">
                                <input type="checkbox" onChange={(e) => setRemember(e.target.checked)} /> Ghi nhớ đăng nhập
                            </label>

                            <Link to={'/register'}>Chưa có tài khoản ?</Link>
                        </div>
                        {errorMessage !== "" ? <p className="error">{errorMessage}</p> : null}
                        <button type="submit" className="register_button">ĐĂNG NHẬP</button>


                        <div className="social_login">
                            <p>Hoặc đăng nhập bằng</p>
                            <div className="social_buttons">
                                <a className="google_btn" href="#">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                                <a className="facebook_btn" href="#">
                                    <i className="fab fa-facebook - f"></i> Facebook
                                </a>
                            </div>
                        </div>

                    </form>
                </main>
            </main>
        </>
    )
}