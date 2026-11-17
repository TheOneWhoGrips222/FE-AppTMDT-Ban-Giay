export default function FormRegister(){
    return (
        <>
            <main>
                <main className="main_container">
                    <form className="resigter">
                        <h1>Đăng Ký Tài Khoản</h1>
                        <div className="input_group main_group">

                            <div className="name_input">
                                <input type="text" id="lastname" name="lastname" placeholder="Họ" />
                                <input type="text" id="firstname" name="firstname" placeholder="Tên" />
                            </div>
                            <div className="input_field">
                                <i className="fa fa-user"></i>
                                <input type="text" id="username" name="username" placeholder="Tên đăng nhập" required />
                            </div>

                            <div className="input_field">
                                <i className="fa fa-phone"></i>
                                <input type="text" id="Sdt" name="Sdt" placeholder="Số ĐTDD" required />
                            </div>

                            <div className="input_field">
                                <i className="fa fa-envelope"></i>
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>

                            <div className="input_field">
                                <i className="fa fa-lock"></i>
                                <input type="password" id="password" name="password" placeholder="Mật khẩu" required />
                                <i className="fa fa-eye-slash toggle-password" data-target="password"></i>
                            </div>

                            <div className="input_field">
                                <i className="fa fa-lock"></i>
                                <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Xác nhận lại mật khẩu" required />
                                <i className="fa fa-eye-slash toggle-password" data-target="confirmpassword"></i>
                            </div>

                        </div>
                        <div className="check">
                            <div className="check_deal"><input type="checkbox" /> Xác nhận đồng ý với điều kiện sử dụng thông tin của TTB</div>
                            <div className="check_info"><input type="checkbox" /> Nhận thông tin/Khuyến mãi từ TTB</div>
                        </div>

                        <button type="submit" className="register_button">ĐĂNG KÝ</button>
                        <div className="haveaccount"><a href="#">Bạn đã có tài khoản ?</a></div>

                    </form>
                </main>
            </main>
        </>
    )
}