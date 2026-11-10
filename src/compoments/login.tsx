import '../styles/login.css';
export default function Login(){
    return (
        <>
            <main>
                <main className="main_container">
                    <form className="resigter">
                        <h1>Đăng Nhập</h1>

                        <div className="input_group main_group">

                            <div className="input_field">
                                <i className="fa fa-user"></i>
                                <input type="text" id="username" name="username" placeholder="Tên đăng nhập hoặc Email"
                                       required/>
                            </div>

                            <div className="input_field">
                                <i className="fa fa-lock"></i>
                                <input type="password" id="password" name="password" placeholder="Mật khẩu" required/>
                                <i className="fa fa-eye-slash toggle-password" data-target="password"></i>
                            </div>


                        </div>

                        <div className="check_row">
                            <label className="check_deal">
                                <input type="checkbox"/> Ghi nhớ đăng nhập
                            </label>

                            <a href="../TrongBao/Dangky.html" className="no_account">Tôi chưa có tài khoản</a>
                        </div>

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