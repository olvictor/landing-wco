import React from 'react'
import willer from '../../assets/willer.png'
import willer2 from '../../assets/willer2.png'
import willer3 from '../../assets/willer2.png'
import willer4 from '../../assets/willer4.png'




const ConteudoPrincipal = () => {
  return (
    <main className='h-[89%] flex xl:px-[150px]'> 
        <div className='w-[60%] flex flex-col gap-[30px] animate-slideInLeft items-center text-center justify-center'>
            <h2 className='text-7xl text-cor-azul-secundaria font-bold '>Dr. Willer Carvalho</h2>
            <h2 className='text-cor-azul-secundaria text-5xl '>Cirurgião-dentista</h2>
            {/* <p className='text-2xl text-cor-marrom'>" Seu sorriso representa sua personalidade, sua imagem, sua autoestima. Fazer você sorrir é o que eu faço de melhor. "</p> */}
            <p className='text-2xl text-cor-marrom'>"Dedicado a transformar sorrisos e promover o bem-estar oral, combinando habilidade técnica com cuidado individualizado para criar resultados que inspiram confiança e felicidade." </p>
            <button className='w-[60%] h-[60px] bg-cor-azul  rounded-3xl px-[32px] text-white text-base hover:bg-cor-azul-secundaria font-bold'><a href="https://bit.ly/willercarvalho" target="_blank">Agende sua consulta</a> </button>
        </div>

        <div className='w-[50%] self-end h-[max] relative animate-fadeIn '>
            <div className='bg-cor-azul-secundaria absolute bottom-0 left-40 h-[500px] w-[80%] rounded-t-full opacity-60'></div>
            <img src={willer2} alt='Dr Willer Carvalho' className='h-[700px] absolute z-20 bottom-0 left-[26%]' />
        </div>
    </main>
  )
}

export default ConteudoPrincipal