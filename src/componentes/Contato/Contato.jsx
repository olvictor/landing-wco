import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";

const Contato = () => {
  return (
    <div className='fadeOnRender lg:w-[80%] h-[auto]' id='contato'>
        <h2 className='text-4xl md:text-6xl  font-bold text-cor-azul-secundaria w-[auto] drop-shadow-md '>Entre em contato</h2>
        <div className='flex flex-wrap gap-[30px] justify-center items-center mt-[50px]'>
            <div className='flex bg-cor-azul-bg p-[20px] rounded-2xl gap-[10px] w-[80%] lg:w-[300px] lg:h-[100px] justify-center items-center drop-shadow hover:opacity-80'>
                <div className='bg-cor-azul-secundaria h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                    <MdLocationOn fill='#fff' fontSize={40} />
                </div>
                <address className='w-[80%]'>
                    <p className='text-xs'>Av. Ayrton Senna, 2600 - Barra da Tijuca, Rio de Janeiro - RJ, 22775-003</p>
                    <p className='text-xs'>Via Ápia da Rocinha, 42 - Rocinha, Rio de Janeiro - RJ, 22451-540</p>
                </address>
            </div>

            <div className='flex bg-cor-azul-bg p-[20px] rounded-2xl gap-[10px] w-[80%] lg:w-[300px] lg:h-[100px justify-center items-center drop-shadow hover:opacity-80'>
                <div className='bg-cor-azul-secundaria h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                    <FaRegClock fill='#fff' fontSize={40} />
                </div>
                <div className='w-[80%]'>
                    <a className='text-xs cursor-pointer' href="https://bit.ly/willercarvalho" target="_blank">Consultas realizadas por <span className='underline'>agendamento</span></a>
                </div>
            </div>
            <div className='flex bg-cor-azul-bg p-[20px] rounded-2xl gap-[10px]  w-[80%] lg:w-[300px] lg:h-[100px justify-center items-center drop-shadow hover:opacity-80'>
                <div className='bg-cor-azul-secundaria h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                    <MdOutlineEmail fill='#fff' fontSize={40} />
                </div>
                <address className='w-[80%]'>
                    <a className='text-xs' href="mailto:victorolvdev@gmail.com" target="_blank">willercarva@gmail.com</a>
                </address>
            </div>
            <div className='flex bg-cor-azul-bg p-[20px] rounded-2xl gap-[10px]  w-[80%] lg:w-[300px] lg:h-[100px justify-center items-center drop-shadow hover:opacity-80'>
                <div className='bg-cor-azul-secundaria h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                    <MdWhatsapp fill='#fff' fontSize={40} />
                </div>
                <address className='w-[80%]'>
                    <a className='text-xs ' href="https://bit.ly/willercarvalho" target="_blank">Entrar em contato pelo Whatsapp</a>
                </address>
            </div>
        </div>
    </div>
  )
}

export default Contato