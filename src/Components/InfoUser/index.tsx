
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { StyledSecPerfil } from "./styled"
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { ModalUser } from "./EditUserModal";

export interface iuser {
    id: number;
    name: string;
    email: string;
    telefone: string;
    createdAt: string;
    contacts: icontacts[]
} 
export interface icontacts {
    name: string
    email: string;
	telefone: string;
}


export const SecPerfil = ({ InfoUser }: iuser | any) => {

    const { User, EditUser, setOpenModalUser, OpenModalUser, OpenModel } = useContext(UserContext)

    
    return(
        <StyledSecPerfil>

            {OpenModalUser ? <ModalUser setOpenModalUser={setOpenModalUser} EditUser={EditUser}/> : null}

            {InfoUser == 0 ?
                <>
                    <h1>{`Olá ...`}</h1>
                    <p>Carregando...</p>
                </>
            :
                User == null ?
                    <>  
                        <div className="infoUser">
                            <h1>{`Olá ${InfoUser.name}`}</h1>
                            <div className='divFone'>
                                <BsFillTelephoneFill color='grey'/>
                                <p>{`${InfoUser.telefone}`}</p>
                            </div>
                            <div className="divEmail">
                                <AiOutlineMail color='grey'/>
                                <p>{`${InfoUser.email}`}</p>
                            </div>
                        </div>
                        <div className="divBtn">
                            <button onClick={() => OpenModel(InfoUser.id, InfoUser.name, InfoUser.telefone, InfoUser.email)}>Editar Usuario</button>
                        </div>
                    </>
                :
                    <>  
                        <div className="infoUser">
                            <h1>{`Olá ${User.name}`}</h1>
                            <div className='divFone'>
                                <BsFillTelephoneFill color='grey'/>
                                <p>{`${User.telefone}`}</p>
                            </div>
                            <div className="divEmail">
                                <AiOutlineMail color='grey'/>
                                <p>{`${User.email}`}</p>
                            </div>
                        </div>
                        <div className="divBtn">
                            <button onClick={() => OpenModel(User.id, User.name, User.telefone, User.email)}>Editar Usuario</button>
                        </div>
                    </>
            }
        </StyledSecPerfil>
    )
}

