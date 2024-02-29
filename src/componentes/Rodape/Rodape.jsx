import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Rodape = () => {
  return ( 
    <div className='md:h-[20%] h-[200px] w-[100%] text-center flex flex-col items-center justify-center'>
        <div className='flex  flex-col gap-[10px] w-[100%] md:w-[70%] md:justify-end items-center'>
            <h3>Copyright © 2024 - Todos os direitos reservados - Dr. Willer Carvalho</h3>
            <div className='flex gap-[10px]'>
              <a href="https://www.instagram.com/willerwco/"  target="_blank"><FaInstagram className='cursor poninter text-2xl hover:text-cor-azul-secundaria' /></a>
              <a href="https://bit.ly/willercarvalho"  target="_blank"><FaWhatsapp className='cursor poninter text-2xl hover:text-cor-azul-secundaria' /></a>
            </div>
        </div>

        <div className='h-[50px] text-xs md:w-[30%] w-[100%] flex mt-[10px] justify-center px-[25px]  gap-[10px]'>
                <h4>Site desenvolvido por:</h4>
                <a href="https://www.linkedin.com/in/victorolvdev/" target="_blank" className='text-cor-azul-secundaria'>Victor Oliveira</a>
        </div>
    </div>
  )
}

export default Rodape