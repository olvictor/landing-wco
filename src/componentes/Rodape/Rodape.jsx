import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Rodape = () => {
  return ( 
    <div className='h-[20%] w-[100%] text-center flex items-center justify-center'>
        <div className='flex gap-[10px] w-[70%] justify-end'>
            <h3>Copyright © 2024 - Todos os direitos reservados - Dr. Willer Carvalho</h3>
            <a href="https://instagram.com"  target="_blank"><FaInstagram className='cursor poninter text-2xl hover:text-cor-azul-secundaria' /></a>
            <a href="https://bit.ly/willercarvalho"  target="_blank"><FaWhatsapp className='cursor poninter text-2xl hover:text-cor-azul-secundaria' /></a>
        </div>
        <div className='h-[100px] w-[30%] flex justify-center items-center  gap-[10px]'>
                <h4>Site desenvolvido por:</h4>
                <a href="https://www.linkedin.com/in/victorolvdev/" target="_blank" className='text-cor-azul-secundaria'>Victor Oliveira</a>
        </div>
    </div>
  )
}

export default Rodape