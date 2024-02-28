import React from 'react'
import logo2 from '../../assets/logo2.png'

const Header = () => {
  return (
    <header className='flex h-[auto] items-center justify-between text-xl xl:px-[150px] '>
      <img src={logo2} alt="logo" className='h-[100px] w-[auto]'/>
      <nav>
        <ul className='flex gap-[40px] text-cor-marrom text-2xl ml-[30px]'>
          <li className='hover:underline'><a href="#">Início</a></li>
          <li className='hover:underline'><a href="#">Procedimentos</a></li> 
          <li className='hover:underline'><a href="#">Sobre</a></li>
          <li className='hover:underline'><a href="#">Contato</a></li>
        </ul>
      </nav>
      <div className='flex gap-[40px] '>
        <button className='bg-cor-azul rounded-3xl w-[250px] h-[40px] px-[32px] text-white text-base hover:bg-cor-azul-secundaria'><a href="https://bit.ly/willercarvalho" target="_blank">Agende sua consulta</a> </button>
      </div>
    </header>
  )
}

export default Header