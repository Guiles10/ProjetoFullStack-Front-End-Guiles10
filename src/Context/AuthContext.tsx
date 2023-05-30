
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Api } from '../Service/Api';


export const AuthContext = createContext({} as iProviderValue)

interface iAuthProviderChildren {
    children: React.ReactNode;
}
interface iInfoUser {
    token: string;
    id: string;
} 
interface iDataUseruser {
    id: string;
    token: string
}
export interface iInfoLogin {
    email: string;
	password: string;
}
export interface InfoUser {
    id: number;
    name: string;
    email: string;
    telefone: number;
    createdAt: string;
    contacts: icontacts[]
} 
export interface icontacts {
    id: string
    name: string
    email: string;
	telefone: string;
	createdAt: string;
    userId: string
}
interface iProviderValue { 
    logInto(infoLogin: iInfoLogin): Promise<void>;
    userLogin: iDataUseruser | null;
    loading: boolean;
    autoLogin: boolean
    InfoUser: InfoUser | null;
}

export const AuthProvider = ({children}: iAuthProviderChildren) => {

    const [userLogin, setUserLogin] = useState<iDataUseruser | null>(null) 

    const [loading, setLoading] = useState(true)

    const [autoLogin, setAutoLogin] = useState(false)

    const navigate = useNavigate()

    const logInto = async (infoLogin: iInfoLogin) => {

        try {
            const resposta = await Api.post<iInfoUser>('/login', {...infoLogin})

            setUserLogin(resposta.data)

            const token = resposta.data.token;
            const id = resposta.data.id;

            localStorage.setItem('@token', token)
            localStorage.setItem('@id', id)

            Api.defaults.headers.common.Authorization = `Bearer ${token} `

            toast.success('Login realizado com Sucesso!')

            setTimeout(() => {navigate('/home')}, 2000) 

            setLoading(false)
            setAutoLogin(true)
            
        } catch(error){
            toast.error('E-mail ou senha incorreto!')
        }

    }

    const [InfoUser, setInfoUser] = useState<InfoUser | null>(null)

    const token = localStorage.getItem('@token')
    const id = localStorage.getItem('@id')
   
    useEffect(() => {
        if(!token){
            setLoading(false)
            setAutoLogin(false)
            return
        }
        const GetInfoUser = async () =>{
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            Api.defaults.headers.common.Authorization = `Bearer ${token} `
            try{
                const resposta = await Api.get(`/users/${id}`, config)
                setInfoUser(resposta.data)
                setAutoLogin(true)

                navigate('/home')
                setLoading(false)
            }catch{
                setLoading(false)
            } finally {
                setLoading(false)
            }
        }

        if(id){
            GetInfoUser()
        }
    }, [token, id])

    if(loading){
        return null
    }

    return(
        <AuthContext.Provider value={{
            InfoUser,
            logInto,
            userLogin,
            loading,
            autoLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
 } 