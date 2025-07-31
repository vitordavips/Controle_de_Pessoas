import React from 'react'

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="">E-mail</label>
        <input type="email" name="email" id="" placeholder='Digite o seu e-mail'/>
      </div>
      <div>
        <label htmlFor="">Senha</label>
        <input type="password" name="senha" id="" placeholder='Digite a sua senha' />
      </div>
      <button>Login</button>
    </form>
  )
}

export default Form