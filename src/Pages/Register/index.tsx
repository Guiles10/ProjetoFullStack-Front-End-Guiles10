
import { Link, useNavigate } from 'react-router-dom'

import Sacola from '../../Img/sacola.svg'
import Pontos from '../../Img/pontinhos.svg'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { StyledSec } from './styled'
import { toast } from 'react-toastify'
import { Api } from '../../Service/Api'

interface iInfoRegister {
        name: String,
        email: String,
        password: String
        confirmPass: String
        telefone: number
}

export const Register = () => {

    const useYup = yup.object().shape({
        name:          yup.string().required('Insira seu nome').max(35, 'no maximo 35 caracteres'),
        password:      yup.string().required('Senha obrigatoria').min(8, 'Senha precisa ter no minimo 8 caracteres'),
        telefone:      yup.string().required('Telefone obrigatoria').min(8, 'Telefone precisa ter no minimo 8 caracteres'),
        confirmPass:   yup.string().required('A senha precisa ser igual').oneOf([yup.ref('password')], 'A senha precisa ser igual'),
        email:         yup.string().required('E-mail é obrigatorio').email('didite um e-mail valido'),
    })

    const { register, handleSubmit, formState:{ errors }} = useForm <iInfoRegister> ({
        mode: 'onBlur',
        resolver: yupResolver(useYup)
    })


    const navigate = useNavigate()
    const submitFunction = async (infoRegister : iInfoRegister) => {

        try {
            await Api.post('/users', {...infoRegister})
            toast.success("Usuario cadastrado com Sucesso!")

            setTimeout(() => {navigate('/login')}, 2000) 

        } catch(error){
            toast.error("Algo deu errado cadastro!")
        }
    }

    return(
        <StyledSec>
            <div className='divInfo'>
                <h1><small>Acc</small>Organized</h1>
                <div>
                    <div>
                        <img src={Sacola} alt="" />
                    </div>
                    <p>Aproveite sua vida <small>ganhado tempo com organização.</small></p>
                </div>
                <img className='pontinhos' src={Pontos} alt="" />
            </div>

            <div className='divForm'>
                <div>
                    <h1>Cadastro</h1>
                    <Link to='/login'>Login</Link>
                </div>
                <form onSubmit={handleSubmit(submitFunction)}>
                    <label htmlFor=''>Nome</label>
                    <input type='text' {...register('name')} placeholder='Digite seu Nome aqui'/>
                    {errors.name?.message && <p className='pError'>{errors.name?.message}</p>}

                    <label htmlFor=''>E-mail</label>
                    <input type='text' {...register('email')} placeholder='Digite seu E-mail aqui'/>
                    {errors.email?.message && <p className='pError'>{errors.email?.message}</p>}

                    <label htmlFor=''>Telefone</label>
                    <input type='number' {...register('telefone')} placeholder='Digite seu Telefone aqui'/>
                    {errors.telefone?.message && <p className='pError'>{errors.telefone.message}</p>}

                    <label htmlFor=''>Senha</label>
                    <input type='password' {...register('password')} placeholder='Digite sua Senha aqui'/>
                    {errors.password?.message && <p className='pError'>{errors.password.message}</p>}

                    <label htmlFor=''>Conformar Senha</label>
                    <input type='password' {...register('confirmPass')} placeholder='Digite novamente sua senha'/>
                    {errors.confirmPass?.message && <p className='pError'>{errors.confirmPass?.message}</p>}

                    <button className='btn_submit' type='submit'>Registrar</button>
                </form>
            </div>
        </StyledSec>
    )
}