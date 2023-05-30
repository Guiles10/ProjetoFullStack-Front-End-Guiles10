import { Link } from 'react-router-dom'

import Logo from '../../Img/Logo.svg'
import Sacola from '../../Img/sacola.svg'
import Pontos from '../../Img/pontinhos.svg'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { StyledSec } from './styled'
import { AuthContext, iInfoLogin } from '../../Context/AuthContext'
import { useContext } from 'react'

export const Login = () => {

    const { logInto } = useContext(AuthContext)

    const useYup = yup.object().shape({
        email:      yup.string().required('E-mail é obrigatorio').email('Insira um e-mail valido'),
        password:   yup.string().required('Digite a sua senha'),
    })
    
    const { register, handleSubmit, formState:{ errors }} = useForm <iInfoLogin> ({
        mode: 'onBlur',
        resolver: yupResolver(useYup)
    })
    
    return(
        <StyledSec>
            <div className='divForm'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(logInto)}>
                    <label htmlFor=''>Nome</label>
                    <input type='text' {...register('email')} placeholder='Digite seu Nome aqui'/>
                    {errors.email?.message && <p className='pError'>{errors.email?.message}</p>}

                    <label htmlFor=''>Senha</label>
                    <input type='password' {...register('password')} placeholder='Digite sua Senha aqui'/>
                    {errors.password?.message && <p className='pError'>{errors.password.message}</p>}

                    <button className='btn_submit' type='submit'>Logar</button>
                </form>
                <div className='div_SmallLogin'>
                    <small>Crie sua conta para organizar sua Agenda</small>
                </div>
                <Link to='/register' className='btn'>Cadastrar</Link>
            </div>
            <div className='divInfo'>
                <h1><small>Acc</small>Organized</h1>
                <div>
                    <div>
                        <img src={Sacola} alt="" />
                    </div>
                    <p>Ganhe tempo com a <small>melhor organização.</small></p>
                </div>
                <img className='pontinhos' src={Pontos} alt="" />
            </div>
        </StyledSec>
    )
}