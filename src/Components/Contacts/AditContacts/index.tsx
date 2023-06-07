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
        name:  yup.string().required('Digite o Nome do Contato'),
        telefone:  yup.string().required('Digite o numero de telefone com DDD').matches(/^\d{11}$/, 'Insira um número de telefone válido com DDD'),
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

                    <label htmlFor='telefone'>Telefone</label>
                    <input type='tel' {...register('telefone')} defaultValue={infoModal?.telefone} maxLength={11}/>
                    {errors.telefone?.message && <p className='pError'>{errors.telefone?.message}</p>}

                    <button className='btn_submit' type='submit'>Adicionar</button>
                </form>
            </section>
        </StyledModalEditContact>
    )
}