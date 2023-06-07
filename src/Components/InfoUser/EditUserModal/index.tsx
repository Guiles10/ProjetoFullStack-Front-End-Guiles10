import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { StyledModalUser } from './syled'
import { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'

interface iformedit {
    name: String,
    email: String,
    telefone: Number,
}
                
export const ModalUser = ({ setOpenModalUser, EditUser }: any) => {    

    const { infoModalUser } = useContext(UserContext)

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
        <StyledModalUser> 
            <section>
                <div>
                    <p>Editar Usuario</p>
                    <button onClick={() => setOpenModalUser(false)}>X</button>
                </div>
                    
                <form onSubmit={handleSubmit((data)=> EditUser(data, infoModalUser?.id))}>
                    <label htmlFor=''>Name</label>
                    <input type='text' {...register('name')} defaultValue={infoModalUser?.name}/>
                    {errors.name?.message && <p className='pError'>{errors.name?.message}</p>}

                    <label htmlFor=''>E-mail</label>
                    <input type='text' {...register('email')} defaultValue={infoModalUser?.email}/>
                    {errors.email?.message && <p className='pError'>{errors.email?.message}</p>}

                    <label htmlFor='telefone'>Telefone</label>
                    <input type='tel' {...register('telefone')} defaultValue={infoModalUser?.telefone} maxLength={11}/>
                    {errors.telefone?.message && <p className='pError'>{errors.telefone?.message}</p>}

                    <button className='btn_submit' type='submit'>Adicionar</button>
                </form>
            </section>
        </StyledModalUser>
    )
}