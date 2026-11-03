import {Link,Outlet} from "react-router-dom";
import Header from "../compoments/header";
export function Layout(){
    return(
        <div>
           <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>

    )
}