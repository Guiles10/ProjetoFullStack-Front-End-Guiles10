import { Navigate, Route, Routes} from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"
import { ProtectRoute } from "../Components/ProtectRoutes"

export const RouterMain = () => {

    return(
            <Routes>
                <Route path='/'             element={<Navigate to='/login'/>}/>
                <Route path='/login'        element={<Login />}/>
                <Route path='/register'     element={<Register />}/>
 
                <Route element={<ProtectRoute />}>
                    <Route path='/home'     element={<Home />}/>
                </Route>
                
                <Route path='*'             element={<h1>Erro na Pagina!! clique <a href='https://react-entrega-template-hamburgueria-2-0-guiles10-guiles10.vercel.app/login'>aqui</a> e volte para o login </h1>}/>
            </Routes>
    )
}

