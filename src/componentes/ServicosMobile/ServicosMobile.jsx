import React from 'react'
import { useState } from 'react';
import dente from '../../assets/dente.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft} from "react-icons/md";

import { FaCircle } from "react-icons/fa";
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';



const ServicosMobile = () => {
    const items = [{
        titulo :'Clínico Geral',
        texto: 'Responsável por avaliar a saúde oral do paciente por completo. Realizando de profilaxias à extrações dentárias.',
        link : 'bla bla bla'
    },
    {
        titulo : 'Restaurações',
        texto: 'Identificar e tratar cáries dentárias, geralmente preenchendo cavidades com materiais restauradores como a resina composta.',
        link : 'bla bla bla'
    },
    {
        titulo : 'Raspagem',
        texto: 'Realizada para remover a placa bacteriana e o cálculo dental/tártaro dos dentes e gengiva.',
        link : 'bla bla bla'
    },
    {
        titulo : 'Cirurgia Oral',
        texto: 'Extrair dentes permanentes ou deciduais quando necessário, incluindo os sisos.',
        link : 'bla bla bla'
    },
    {
        titulo : 'Tratamento de Canal',
        texto: 'Realizar tratamentos de canal para tratar infecções ou lesões na polpa do dente.',
        link : 'bla bla bla'
    },
    {
        titulo : 'Clareamento Dental',
        texto: 'É um procedimento para deixar os dentes mais brancos. Indicado para melhorar a aparência do sorriso.',
        link : 'bla bla bla'
    }
    ]
    const [index,setIndex] = useState(0);
    const [animatedIndex, setAnimatedIndex] = useState(index);
    const [startX,setStartX] = useState(null)
    
    useEffect(()=>{
        setAnimatedIndex(index)
    },[index])
    
    const touchEnd = (event) =>{
      const posicaoEvento = event.changedTouches[0].pageX

      const deltaX = startX - posicaoEvento

    
      if(deltaX > 0 && index < items.length - 1){
        setIndex(prevState => prevState + 1)
      }
     
      if(deltaX < 0 && index > 0){
        setIndex(prevState => prevState - 1)
      }
    }


    const handleClickLeft = () =>{
        if(index > 0){
            setIndex(prevState => prevState - 1)
        }
    }
    const handleClickRight = () =>{
        if(index < items.length - 1){
            setIndex(prevState => prevState + 1)
        }
    }

  return (
    <div className='bg-white flex flex-col w-screen h-screen items-center justify-center overflow-x-hidden' id='procedimentos'>
        <h2 className='md:text-6xl text-2xl text-[2rem] text-center font-bold text-cor-azul-secundaria w-[auto] mt-[50px] drop-shadow-md'>Procedimentos oferecidos </h2>
        <div className='flex overflow-x-hidden items-center h-[50%] relative'>
            <MdKeyboardArrowLeft  className='absolute text-4xl z-10' fill='#68aec7' onClick={handleClickLeft} aria-disabled />
            <MdKeyboardArrowRight  className='absolute right-0 z-10 text-4xl' fill='#68aec7' onClick={handleClickRight}/>

            <CSSTransition key={index} timeout={300} className={'fade translate-x-[60px] bg-cor-azul-bg  h-[300px] md:w-[20%] w-[70%] min-w-[70%] shadow-md rounded-2xl px-[15px] py-[20px] flex flex-col gap-[10px]'} in={items[index]}>
                <div onTouchStart={(e)=> setStartX(e.touches[0].clientX)} onTouchEnd={(e)=>touchEnd(e)} className={`bg-cor-azul-bg  h-[300px] md:w-[20%] w-[70%] min-w-[70%] shadow-md rounded-2xl px-[15px] py-[20px] flex flex-col gap-[10px] hover:scale-[1.2]`}>
                            <div className='bg-cor-azul-secundaria h-[50px] w-[50px] rounded-full flex justify-center'>
                                <img src={dente}alt="Foto de dente" className='h-[40px] self-center'/>
                            </div>
                            <div className='min-h-[160px] h-[180px] flex flex-col'>
                                <h4 className='text-cor-azul-secundaria text-2xl'>{items[index].titulo}</h4>
                                <p className='text-sm text-cor-marrom align-center justify-items-stretch w-[100%]'>{items[index].texto}</p>
                            </div>
                            <button className='border border-cor-azul-secundaria rounded-2xl text-cor-azul-secundaria flex items-center justify-between px-[15px] hover:border-cor-azul hover:text-cor-azul'> <a href="https://bit.ly/willercarvalho"  target="_blank">Saiba mais</a> <MdKeyboardArrowRight /> </button>
                </div>
            </CSSTransition>

                {index < items.length -1 && <div onTouchStart={(e)=> setStartX(e.touches[0].clientX)} onTouchEnd={(e)=>touchEnd(e)} className={`animated-item bg-cor-azul-bg  h-[300px] md:w-[20%] w-[90%] shadow-md rounded-2xl px-[15px] py-[20px] flex flex-col gap-[10px] hover:scale-[1.2] opacity-50  translate-x-[80px]`} >
                        <div className='bg-cor-azul-secundaria h-[50px] w-[50px] rounded-full flex justify-center'>
                            <img src={dente}alt="Foto de dente" className='h-[40px] self-center'/>
                        </div>
                        <div className='min-h-[160px] h-[180px] flex flex-col'>
                            <h4 className='text-cor-azul-secundaria text-2xl'>{items[index+1].titulo}</h4>
                            <p className='text-[13px] text-cor-marrom align-center justify-items-stretch w-[100%]'>{items[index+1].texto}</p>
                        </div>
                        <button className='border border-cor-azul-secundaria rounded-2xl text-cor-azul-secundaria flex items-center justify-between px-[15px] hover:border-cor-azul hover:text-cor-azul'> <a href="https://bit.ly/willercarvalho"  target="_blank">Saiba mais</a> <MdKeyboardArrowRight /> </button>
                </div>}
        </div>
        <div className='flex'>
            {items.map((item,indice)=>{
               return <FaCircle fill={index === indice ? '#68aec7' : '#F3F5F9'} />
            })}
        </div>
    </div>
  )
}

export default ServicosMobile