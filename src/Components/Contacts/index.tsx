import { StyledSecHome } from './styled'
import { CardContacts } from './Cards';
import { useContext } from 'react';
import { ContactsContext } from '../../Context/ContactContext';
import { AddModalContacts } from './AddContacts';
import { EditModalContacts } from './AditContacts';

export interface iuser {
    id: number;
    name: string;
    email: string;
    telefone: number;
    createdAt: string;
    contacts: icontacts[];
} 
export interface icontacts {
    id: string
    name: string
    email: string;
	telefone: string;
	createdAt: string;
    userId: string
}

export const SecContacts = ({ InfoUser }: iuser|any) => {

    const { NewCard, ModalContact,  setModalContact, Contacts, EditModalContact, setEditModalContact, EditContact } = useContext(ContactsContext)

    return(
            <StyledSecHome>
                
                {ModalContact ? <AddModalContacts setModalContact={setModalContact} NewCard={NewCard}/> : null}
                {EditModalContact ? <EditModalContacts setEditModalContact={setEditModalContact} EditContact={EditContact}/> : null}
 
                <div className='divUl'>
                    <section className='secHeaderList'>
                        <div className='divAddList'>
                            <p>Sua Lista de Contatos</p>
                            <button onClick={() => setModalContact(true)}>Add Contacto</button>
                        </div>
                        <ul className='divCards'>
                            {InfoUser.contacts.length == 0 ?
                                <div>
                                    <p>Adicione um novo Contato</p>
                                </div>
                            :
                                Contacts != null ?
                                    Contacts.map((contact: icontacts) => {
                                        return <CardContacts contact={contact}/>
                                    })
                                :                             
                                    <>
                                        {InfoUser.contacts.map((contact: icontacts) => {
                                            return <CardContacts contact={contact}/>
                                        })}
                                    </>
                            }
                        </ul>
                    </section> 
                 </div>

            </StyledSecHome>
    )
}