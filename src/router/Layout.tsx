import {Link,Outlet} from "react-router-dom";
import Header from "../compoments/header";
import Footer from "../compoments/footer";
export function Layout(){
    return(
        <div>
           <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>

    )
}