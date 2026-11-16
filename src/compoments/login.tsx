import '../styles/login.css';
import {dataUser} from "../data/user"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export default function Form(){
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [remember, setRemember] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        for(let i = 0; i < dataUser.length; i++ ){
            if((dataUser[i].loginName === userName) || (dataUser[i].email === userName) ){
                if(dataUser[i].password === password){

                    if(remember === true){
                        localStorage.setItem("id",dataUser[i].id + "");
                    }
                    else{
                        sessionStorage.setItem("id",dataUser[i].id + "");
                    }
                  navigate("/");
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

                            <a href="../TrongBao/Dangky.html" className="no_account">Tôi chưa có tài khoản</a>
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