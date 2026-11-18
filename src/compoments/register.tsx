import {dataUser} from "../data/user"
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
;

export default function FormRegister(){
    const navigate = useNavigate();
     const [form, setForm] = useState({
         loginName: "", fname: "",lname:"", email: "",sdt:"",password: "",confirmPassword: "",
     });

    const [errorMessage, setErrorMessage] = useState("");

    function isExistLogin(name: string){
        for(let i=0; i<dataUser.length; i++){
            if(dataUser[i].loginName === name){
                return true;
            }
        }
        return false;
    }

    function isExistEmail(email: string) {
        for(let i=0; i<dataUser.length; i++){
            if(dataUser[i].email === email){

                return true;
            }
        }
        return false;

    }

    function isConfirmed(password: string, confirmPassword: string){
        if(password !== confirmPassword){
            return false;
        }
        return true;
    }

    function handleSubmit(e){
         e.preventDefault();
         if((isExistLogin(form.loginName) === true) ){
             setErrorMessage("Tên tài khoản đã tồn tại !");
             return;
         }
         if((isExistEmail(form.email) === true) ){
             setErrorMessage("Email đã tồn tại !");
             return;
         }
         if(isConfirmed(form.password,form.confirmPassword) === false){
             setErrorMessage("Mật khẩu xác nhận không khớp ");
             return;
         }
         const user = {
             id: dataUser.length + 1 ,
             email: form.email,
             password: form.password,
             fullName: form.lname + " " + form.fname,
             loginName: form.loginName,
             phone: form.sdt,
             address: "",
             wishlist: [],
             avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
         }
         dataUser.push(user);
         navigate("/login");

    }

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <main>
                <main className="main_container">
                    <form onSubmit={handleSubmit} className="resigter">
                        <h1>Đăng Ký Tài Khoản</h1>
                        <div className="input_group main_group">

                            <div className="name_input">
                                <input type="text" id="lastname" name ="lname" value ={form.lname} onChange={handleChange} placeholder="Họ" />
                                <input type="text" id="fname" name ="fname"  value ={form.fname} onChange={handleChange}  placeholder="Tên" />
                            </div>
                            <div className="input_field">
                                <i className="fa fa-user"></i>
                                <input type="text" id="username" name="loginName" onChange={handleChange} placeholder="Tên đăng nhập" required />
                            </div>

                            <div className="input_field">
                                <i className="fa fa-phone"></i>
                                <input type="text" id="Sdt" name="sdt" onChange={handleChange} placeholder="Số ĐTDD" required />
                            </div>

                            <div className="input_field">
                                <i className="fa fa-envelope"></i>
                                <input type="email" id="email" name="email" onChange={handleChange} placeholder="Email" required />
                            </div>

                            <div className="input_field">
                                <i className="fa fa-lock"></i>
                                <input type="password" id="password" name="password" onChange={handleChange} placeholder="Mật khẩu" required />
                                <i className="fa fa-eye-slash toggle-password" data-target="password"></i>
                            </div>

                            <div className="input_field">
                                <i className="fa fa-lock"></i>
                                <input type="password" id="confirmpassword" name="confirmPassword" onChange={handleChange} placeholder="Xác nhận lại mật khẩu" required />
                                <i className="fa fa-eye-slash toggle-password" data-target="confirmpassword"></i>
                            </div>

                        </div>
                        <div className="check">
                            <div className="check_deal"><input type="checkbox" required/> Xác nhận đồng ý với điều kiện sử dụng thông tin của TTB</div>
                            <div className="check_info"><input type="checkbox" required /> Nhận thông tin/Khuyến mãi từ TTB</div>
                        </div>

                        <button type="submit" className="register_button">ĐĂNG KÝ</button>
                        <div className="haveaccount"> <Link to={'/login'}>Bạn đã có tài khoản ?</Link> </div>

                    </form>
                </main>
            </main>
        </>
    )
}