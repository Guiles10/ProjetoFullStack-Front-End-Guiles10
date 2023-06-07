import { createContext } from "react"
import { Api } from '../Service/Api';
import { useState } from "react";
import { toast } from "react-toastify";

export interface iInfoUser {
    id: string;
    name: string;
    email: string;
    telefone: string;
    createdAt: string;
    contacts: icontacts[]
}

interface iEditUser {
    name: string;
    email: string;
    telefone: string;
}

interface iobj {
    id: string
    name: string;
    email: string;
    telefone: string;
}

interface iProviderValue {
    User: iInfoUser | null; 
    ExcluirContact: (id: string) => Promise<void>;
    setOpenModalUser: React.Dispatch<React.SetStateAction<Boolean>>
    OpenModalUser:Boolean;
    EditUser: (infoCard: iEditUser, id: string) => Promise<void>;
    OpenModel: (id: string, name: string, telefone: string, email: string) => void;
    infoModalUser: iobj | null;
}

export const UserContext = createContext({} as iProviderValue)

export const  UserProvider = ({ children }: iAuthProviderChildren) => {

    const [User, setUser] = useState<iInfoUser | null>(null)

    const Relod = async () => {
        const token = localStorage.getItem('@token')
        const id = localStorage.getItem('@id')
        const config = {headers: {Authorization: `Bearer ${token}`}}
        try{
            const resposta = await Api.get(`/users/${id}`, config)
            console.log(resposta.data)
            setUser(resposta.data)
        }catch{

        }
    }
    
    const ExcluirContact = async (id: string) => {
        try{
            await Api.delete(`/users/${id}`)
            toast.success('Usuario excluido com Sucesso!')
            Relod()
        }catch(error){
            console.log(error)
        }
    }

    const [OpenModalUser, setOpenModalUser] = useState<Boolean>(false)

    const EditUser = async (infoUser: iEditUser, id: string) => {
        try {
            console.log(infoUser, id)
            await Api.patch(`/users/${id}`,infoUser)

            toast.success("Usuario Editado com Sucesso!")
            setOpenModalUser(false)
            Relod()
        } catch(error){
            console.log(error)
        }
    }

    const [infoModalUser, setInfoModalUser] = useState<iobj | null>(null)
    const OpenModel = (id: string, name: string, telefone: string, email: string) => {
        const obj: iobj = {
            id: id,
            name: name,
            telefone: telefone,
            email: email,
        }
        setOpenModalUser(true)
        setInfoModalUser(obj)
        Relod()
    }


    return(
        <UserContext.Provider value={{
                User,
                ExcluirContact,
                setOpenModalUser,
                OpenModalUser,
                EditUser,
                OpenModel,
                infoModalUser,
            }}>
            {children}
        </UserContext.Provider>
    )
}