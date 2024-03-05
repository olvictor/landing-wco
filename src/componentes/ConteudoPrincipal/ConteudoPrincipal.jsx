import React, { useEffect, useState } from 'react'
import willer from '../../assets/willer.png'
import willer2 from '../../assets/willer2.png'
import willer3 from '../../assets/willer2.png'
import willer4 from '../../assets/willer4.png'




const ConteudoPrincipal = () => {

  return (
    <main id='principal' className='waveBG md:h-[100%] w-[100%] flex flex-col md:flex-row py-[30px] lg:py-[0px] lg:px-[150px] items-center justify-center'> 
        <div className='w-[100%] md:w-[50%] md:h-[100%] h-[auto] mt-[100px] flex flex-col gap-[30px]  items-center text-center justify-center drop-shadow-md	'>
         <img src={willer2} alt='Dr Willer Carvalho' className='md:hidden  drop-shadow-md	' />
            <h2 className='sm:text-7xl text-4xl text-cor-azul-secundaria font-bold animate-fadeIn opacity-0'>Dr. Willer Carvalho</h2>
            <h2 className='text-cor-azul-secundaria text-2xl sm:text-5xl animate-fadeIn2 opacity-0'>Cirurgião-dentista</h2>
            {/* <p className='text-2xl text-cor-marrom'>" Seu sorriso representa sua personalidade, sua imagem, sua autoestima. Fazer você sorrir é o que eu faço de melhor. "</p> */}
            <p className='md:text-2xl text-base text-cor-marrom animate-fadeIn3 opacity-0'>" Dedicado a transformar sorrisos e promover o bem-estar oral, combinando habilidade técnica com cuidado individualizado para criar resultados que inspiram confiança e felicidade. " </p>
            <button className='md:w-[60%] h-[60px] bg-cor-azul  rounded-3xl px-[32px] text-white text-base hover:bg-cor-azul-secundaria font-bold animate-fadeIn4 opacity-0'><a href="https://bit.ly/willercarvalho" target="_blank">Agende sua consulta</a> </button>
        </div>
        <div className='md:w-[50%] self-end h-[max] relative animate-fadeIn drop-shadow-md hidden	md:flex'>
            {/* <div className='bg-cor-azul-secundaria md:absolute bottom-0 left-40 h-[500px] w-[80%] rounded-t-full opacity-60 '></div> */}
            <img src={willer2} alt='Dr Willer Carvalho' className='h-[700px] md:absolute z-20 bottom-0 md:left-[26%] drop-shadow-md	' />
        </div>
    </main>
  )
}

export default ConteudoPrincipal