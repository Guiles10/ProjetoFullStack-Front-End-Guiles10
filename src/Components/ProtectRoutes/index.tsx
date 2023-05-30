import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext'



export const ProtectRoute = () => { 
     
    const { autoLogin, loading } = useContext(AuthContext)
    
    if(loading){
        return <h1>Carregando...</h1> 
    }

    return(
        autoLogin ? <Outlet /> : <Navigate to='/login' />
    )
}