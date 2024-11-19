import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import useForm from '../Hooks/useForm'

const LoginSenha = () => {
    const email = useForm();

    function handleSubmit(event) {
        event.preventDefault();
    }

  return (
    <section>
        <h1 className='titlte'>Perdeu a senha?</h1>
        <form  onSubmit={handleSubmit}>
            <Input
             label="Email/ Usuario" 
             type="text"
            name="email"
            {...email}
            />
            <Button> Enviar Email</Button>
        </form>
    </section>
  )
}

export default LoginSenha;