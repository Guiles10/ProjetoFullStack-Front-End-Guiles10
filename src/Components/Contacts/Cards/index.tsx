import { StyledCardTechs } from './styled'
import { BsPen } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { ContactsContext } from '../../../Context/ContactContext';
import { useContext } from 'react';


export interface icontacts {
    id: string
    name: string
    email: string;
	telefone: string;
	createdAt: string;
    userId: string
}

export const CardContacts = ({contact}: icontacts|any) => {

    const { ExcluirContact, OpenModel } = useContext(ContactsContext)

    

    return( 
        <>
        <StyledCardTechs id={contact.id}>
                <h2>{contact.name}</h2> 
                <div className='div'> 
                    <small>{contact.telefone}</small>
                    <small>{contact.email}</small>
                    <div className='divImg'> 
                        <div className='divIcon'> 
                            <BsPen id={'id'} onClick={() => OpenModel(contact.id, contact.name, contact.telefone, contact.email)}/>
                        </div>
                            <FaRegTrashAlt onClick={() => ExcluirContact(contact.id)}/>
                    </div>
                </div>
        </StyledCardTechs>
        </>
    )

}
// onClick={() => OpenModel('id', 'name')}
