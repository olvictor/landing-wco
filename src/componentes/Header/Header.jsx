import React, { useState } from 'react'
import logo2 from '../../assets/logo2.png'
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuActive,setMenuActive] = useState(false)
  
  
  const handleClick = () =>{
    setMenuActive((prevState)=> !prevState)
  }
  const ativo = menuActive ? <IoMdClose fill="#68aec7" className="text-3xl " aria-label='Abrir Menu' aria-aria-haspopup='true' aria-aria-controls='menu' onClick={handleClick} /> : <HiMenu  fill="#68aec7"  aria-label='Fechar Menu' aria-aria-haspopup='true' aria-aria-controls='menu' className="text-3xl"  onClick={handleClick}/> 

  return (
    <header className='flex h-[80px] md:h-[auto] px-[30px] w-[100%] z-10 bg-cor-azul-bg items-center justify-between text-xl xl:px-[150px] drop-shadow	 fixed'>
      <img src={logo2} alt="logo" className='h-[100px] w-[auto]'/>
      <nav className='hidden md:flex'>
        <ul className='flex gap-[40px] text-cor-marrom lg:text-2xl ml-[30px]'>
          <li className='hover:underline'><a href="#">Início</a></li>
          <li className='hover:underline'><a href="#procedimentos">Procedimentos</a></li> 
          <li className='hover:underline'><a href="#sobre">Sobre</a></li>
          <li className='hover:underline'><a href="#">Contato</a></li>
        </ul>
      </nav>
      <div className='gap-[40px] lg:flex hidden'>
        <button className='bg-cor-azul rounded-3xl w-[250px] h-[40px] px-[32px] text-white text-base hover:bg-cor-azul-secundaria'><a href="https://bit.ly/willercarvalho" target="_blank">Agende sua consulta</a> </button>
      </div>
      <div className="relative md:hidden">
            {ativo}
            <ul id='menu' className={`${menuActive ? "flex" : "hidden"} bg-cor-azul-bg animate-fadeIn gap-[10px] flex-col absolute bg-bg-header right-[-25px] bottom-[-200px] uppercase w-[auto] border border-cor-marrom text-center rounded-b-md text-cor-marrom`}>
              <li className='border-b border-cor-marrom p-[5px] w-[100%]'><a href="#">Início</a></li>
              <li className='border-b border-cor-marrom p-[5px] w-[100%]'><a href="#procedimentos">Procedimentos</a></li> 
              <li className='border-b border-cor-marrom p-[5px] w-[100%]'><a href="#sobre">Sobre</a></li>
              <li className='border-cor-marrom w-[100%]'><a href="#">Contato</a></li>
            </ul>
      </div>
    </header>
  )
}

export default Header