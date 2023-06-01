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
                <div className='div'> 
                    <h2>{contact.name}</h2> 
                    <small>{contact.telefone}</small>
                    <small>{contact.email}</small>
                </div>
                <div className='divImg'> 
                    <div className='pen'> 
                        <BsPen id={'id'} onClick={() => OpenModel(contact.id, contact.name, contact.telefone, contact.email)}/>
                    </div>
                        <div className='trash'>
                            <FaRegTrashAlt onClick={() => ExcluirContact(contact.id)}/>
                        </div>
                </div>
        </StyledCardTechs>
        </>
    )

}
// onClick={() => OpenModel('id', 'name')}
