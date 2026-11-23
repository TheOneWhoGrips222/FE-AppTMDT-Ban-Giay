
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

export default function FormRegister(){

    const navigate = useNavigate();
     const [form, setForm] = useState({
         loginName: "", fname: "",lname:"", email: "",sdt:"",password: "",confirmPassword: "",
     });

    const [errorMessage, setErrorMessage] = useState("");

    function isExistLogin(name: string){
        const users = localStorage.getItem("users");
        if(users === null ){
            return false;
        }
      const listU :UserItem[] = JSON.parse(users);
        for(let i=0; i<listU.length; i++){
            if(listU[i].loginName === name){
                return true;
            }
        }
        return false;
    }

    function isExistEmail(email: string) {
        const users = localStorage.getItem("users");
        if (users === null) {
            return false;
        }
        const listU: UserItem[] = JSON.parse(users);
        for (let i = 0; i < listU.length; i++) {
            if (listU[i].email === email) {
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
             id: 1 ,
             email: form.email,
             password: form.password,
             fullName: form.lname + " " + form.fname,
             loginName: form.loginName,
             phone: form.sdt,
             address: "",
             wishlist: [],
             avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
         }
         if(localStorage.getItem("users") === null){
             localStorage.setItem("users", JSON.stringify([user]));

         }
         else{
            const users :UserItem[] =  JSON.parse(localStorage.getItem("users"));
            user.id = users.length + 1;
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

         }
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
                        {errorMessage !== "" ? <p className="error">{errorMessage}</p> : null}
                        <button type="submit" className="register_button">ĐĂNG KÝ</button>
                        <div className="haveaccount"> <Link to={'/login'}>Bạn đã có tài khoản ?</Link> </div>

                    </form>
                </main>
            </main>
        </>
    )
}