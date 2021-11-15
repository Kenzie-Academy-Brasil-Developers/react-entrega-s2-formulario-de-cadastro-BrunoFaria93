import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHistory } from "react-router-dom"
import { motion } from "framer-motion"
import { toast } from 'react-hot-toast'
const Form = () => {
    const history = useHistory()

    const formScheme = yup.object().shape({
        name: yup.string().required('Nome obrigatório').matches(/^[aA-zZ\s]+$/, "Esse campo só aceita letras"),
        email: yup.string().required('E-mail obrigatório')
        .matches("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$", 'E-mail inválido'),
        password: yup.string().required('Senha obrigatória')
        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})", 'Senha inválida'),  
        confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),

    })
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(formScheme),
        
    })
    const onSubmitFunction = (data) => {
        console.log(data)
        toast.success('Usuário cadastro com sucesso! =D')
        history.push(`/sucess/${data.name}`)
        
    }
    
    return(
        <div>
            <motion.div className='form-container'
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:0.9}}
            >
                <form className='form' onSubmit={handleSubmit(onSubmitFunction)}>
                    <input placeholder='Nome'{...register('name')} />
                    <div className='error-container'>
                        {errors.name?.message}
                    </div>
                    
                    <input placeholder='E-mail'{...register('email')} />
                    <div className='error-container'>
                        {errors.email?.message}
                    </div>
                    <input placeholder='Senha'{...register('password')} />
                    <div className='error-container'>
                        {errors.password?.message}
                    </div>
                    <input placeholder='Confirmar Senha'{...register('confirm_password')} />
                    <div className='error-container'>
                        {errors.confirm_password?.message}
                    </div>
                
                <button type='submit'>CADASTRAR</button>
                </form>
            </motion.div>
        </div>
    )
}

export default Form