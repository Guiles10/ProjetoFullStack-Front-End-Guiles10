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
        name:  yup.string().required('Digite o Nome do Contato').min(10, 'minimo de 10 carcteres'),
        telefone:  yup.string().required('Digite o numero de telefone').min(8, 'minimo de 8 carcteres'),
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

                    <label htmlFor=''>Telefone</label>
                    <input type='number' {...register('telefone')} defaultValue={infoModalUser?.telefone}/>
                    {errors.telefone?.message && <p className='pError'>{errors.telefone?.message}</p>}

                    <button className='btn_submit' type='submit'>Adicionar</button>
                </form>
            </section>
        </StyledModalUser>
    )
}