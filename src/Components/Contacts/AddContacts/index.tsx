import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { StyledModal } from './styled'
     
interface iformadd {
    name: String,
    email: String,
    telefone: Number,
}

export const AddModalContacts = ({ setModalContact, NewCard }: any) => {     
    
    const useYup = yup.object().shape({
        name:  yup.string().required('Digite o Nome do Contato'),
        telefone:  yup.string().required('Digite o numero de telefone com DDD').matches(/^\d{11}$/, 'Insira um número de telefone válido com DDD'),
        email:  yup.string().required('Digite o email').email('insira um e-mail valido'),
    })

    const { register, handleSubmit, formState:{ errors }} = useForm <iformadd> ({
        mode: 'onBlur',
        resolver: yupResolver(useYup)
    })

    return( 
        <StyledModal>
            <section>
                <div>
                    <p>Cadastrar Contato</p>
                    <button onClick={() => setModalContact(false)}>X</button>
                </div>
                <form onSubmit={handleSubmit(NewCard)}>
                    <label htmlFor=''>Name</label>
                    <input type='text' {...register('name')}/>
                    {errors.name?.message && <p className='pError'>{errors.name?.message}</p>}

                    <label htmlFor=''>E-mail</label>
                    <input type='text' {...register('email')}/>
                    {errors.email?.message && <p className='pError'>{errors.email?.message}</p>}

                    <label htmlFor='telefone'>Telefone</label>
                    <input type='tel' {...register('telefone')} maxLength={11}/>
                    {errors.telefone?.message && <p className='pError'>{errors.telefone?.message}</p>}
                    
                    <button className='btn_submit' type='submit'>Adicionar</button>
                </form>
            </section>
        </StyledModal>
    )
}