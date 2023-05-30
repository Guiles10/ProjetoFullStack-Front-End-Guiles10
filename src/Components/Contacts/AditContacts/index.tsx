import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { StyledModalEditContact } from './syled'
import { useContext } from 'react'
import { ContactsContext } from '../../../Context/ContactContext'

interface iformedit {
    name: String,
    email: String,
    telefone: Number,
}
                
export const EditModalContacts = ({ setEditModalContact, EditContact }: any) => {    

    const { infoModal } = useContext(ContactsContext)

    const useYup = yup.object().shape({
        name:  yup.string().required('Digite o Nome do Contato').min(10, 'minimo de 10 carcteres'),
        telefone:  yup.string().required('Digite o numero de telefone').min(8, 'minimo de 8 carcteres'),
        email:  yup.string().required('Digite o email').email(),
    })

    const { register, handleSubmit, formState:{ errors }} = useForm <iformedit> ({
        mode: 'onBlur',
        resolver: yupResolver(useYup)
    })


    return(
        <StyledModalEditContact> 
            <section>
                <div>
                    <p>Editar Contato</p>
                    <button onClick={() => setEditModalContact(false)}>X</button>
                </div>
                    
                <form onSubmit={handleSubmit((data)=> EditContact(data, infoModal?.id))}>
                    <label htmlFor=''>Name</label>
                    <input type='text' {...register('name')} defaultValue={infoModal?.name}/>
                    {errors.name?.message && <p className='pError'>{errors.name?.message}</p>}

                    <label htmlFor=''>E-mail</label>
                    <input type='text' {...register('email')} defaultValue={infoModal?.email}/>
                    {errors.email?.message && <p className='pError'>{errors.email?.message}</p>}

                    <label htmlFor=''>Telefone</label>
                    <input type='number' {...register('telefone')} defaultValue={infoModal?.telefone}/>
                    {errors.telefone?.message && <p className='pError'>{errors.telefone?.message}</p>}

                    <button className='btn_submit' type='submit'>Adicionar</button>
                </form>
            </section>
        </StyledModalEditContact>
    )
}