import React, { useContext } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Error from '../Components/UI/Error'
import useForm from '../Hooks/useForm'
import { USER_POST } from '../Utils/Api'
import { UserContext } from '../Context/UserContext'
import useFetch from '../Hooks/useFetch'

const Registro = () => {

const username = useForm('username')
const email = useForm('email')
const password = useForm('password')

const {userLogin} = useContext(UserContext) //Irá realizar o login do usuario
const {loading, error, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const {response} = await request(url, options);

    if (response.ok) {
    userLogin(username.value, password.value) //Pega o valor de username e password do contexto
    console.log(response)
  }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
      <Input
       label="Usuário" 
       type='text' 
       name='username'
       value={username.value}
       onChange={username.onChange}
       {...username}
       error={username.error}
       
       />
         <Input
       label="Email" 
       type='email' 
       name='email'
       value={email.value}
       onChange={email.onChange}
       {...email}
       error={email.error}
       
       />

<Input
       label="Senha" 
       type='password' 
       name='password'
       value={password.value}
       onChange={password.onChange}
       {...password}
       error={password.error}
       
       />

       {loading ? 
       <Button disabled>Cadastrando...</Button> :   
       <Button>Cadastrar</Button>
      }
  
      <Error error={error}/>
      </form>
    </section>
  )
}

export default Registro
