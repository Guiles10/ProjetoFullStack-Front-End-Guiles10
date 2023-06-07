import { createContext } from "react"
import { Api } from '../Service/Api';
import { useState } from "react";
import { toast } from "react-toastify";


export const ContactsContext = createContext({} as iProviderValue)

export const  ContactsProvider = ({ children }: iAuthProviderChildren) => {

    const [Contacts, setContacts] = useState<icontacts[] | null>(null)
    const Relod = async () => {
        const token = localStorage.getItem('@token')
        const id = localStorage.getItem('@id')
        const config = {headers: {Authorization: `Bearer ${token}`}}
        try{
            const resposta = await Api.get(`/users/${id}`, config)
            setContacts(resposta.data.contacts)
        }catch{

        }
    }

    const [ModalContact, setModalContact] = useState<Boolean>(false)
    const NewCard = async (infoCard: iAddContact) => {

        const token = localStorage.getItem('@token')
        const config = {headers: {Authorization: `Bearer ${token}`}}

        try {
            await Api.post('/contacts',{...infoCard}, config)

            toast.success("Card adicionado com Sucesso!")
        
            setModalContact(false)
            Relod()

        } catch(error){
            toast.error("Confira as Informações")
            console.log(error)
        }
    }
    
    const ExcluirContact = async (id: string) => {
        try{
            await Api.delete(`/contacts/${id}`)
            toast.success('Card excluido com Sucesso!')
            Relod()
        }catch(error){
            console.log(error)
        }
    }

    const [EditModalContact, setEditModalContact] = useState<Boolean>(false) 
    const EditContact = async (infoCard: iEditContact, id: string) => {
        try {
            await Api.patch(`/contacts/${id}`,infoCard)

            toast.success("Card Alterado com Sucesso!")
            setEditModalContact(false)
            Relod()
        } catch(error){
            console.log(error)
        }
    }

    const [infoModal, setInfoModal] = useState<iobj | null>(null)
    const OpenModel = (id: string, name: string, telefone: string, email: string) => {
        const obj: iobj = {
            name: name,
            id: id,
            telefone: telefone,
            email: email,
        }
        setEditModalContact(true)
        setInfoModal(obj)
        Relod()
    }


    return(
        <ContactsContext.Provider value={{
                Contacts,
                ModalContact,
                setModalContact,
                NewCard,
                ExcluirContact,
                EditModalContact,
                setEditModalContact,
                EditContact,
                OpenModel,
                infoModal,
            }}>
            {children}
        </ContactsContext.Provider>
    )
}