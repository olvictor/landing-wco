import React from 'react'
import dente from '../../assets/dente.png'
import { MdKeyboardArrowRight } from "react-icons/md";

const items = [{
    titulo : 'Clínico Geral',
    texto: 'Realizar limpezas regulares dos dentes para remover placa e tártaro. Realizar exames dentários de rotina para avaliar a saúde bucal.',
    link : 'bla bla bla'
},
{
    titulo : 'Restaurações',
    texto: 'Identificar e tratar cáries dentárias, geralmente preenchendo cavidades com materiais restauradores como a resina composta.',
    link : 'bla bla bla'
},
{
    titulo : 'Raspagem',
    texto: 'Realizado para remover a placa bacteriana e o tártaro (ou cálculo dental) dos dentes e gengivas.',
    link : 'bla bla bla'
},
{
    titulo : 'Cirurgia Oral',
    texto: 'Extrair dentes permanentes ou deciduais quando necessário, incluindo os sisos.',
    link : 'bla bla bla'
},
{
    titulo : 'Tratamento de Canal',
    texto: 'Realizar tratamentos de canal para tratar infecções ou lesões na polpa do dente, incluindo os sisos.',
    link : 'bla bla bla'
},
{
    titulo : 'Clareamento Dental',
    texto: 'É um procedimento para deixar os dentes mais brancos. Indicado para melhorar a aparência do sorriso.',
    link : 'bla bla bla'
}
]


const Serviços = () => {
  return (
    <section className='fadeOnRenderDiv bg-white xl:h-5/6 w-[100%] h-[auto] md-h-[0%]  xl:px-[150px] py-[50px] xl:py-[120px] flex flex-col gap-[100px] items-center' id='procedimentos'>
        <h2 className='md:text-6xl text-2xl text-center font-bold text-cor-azul-secundaria w-[auto] mt-[50px] drop-shadow-md'>Procedimentos oferecidos </h2>
        <div className='flex gap-[50px] flex-wrap 2xl:flex-nowrap items-center justify-center'>
            {items.map((item)=>{
                return <div className='fadeOnRender bg-cor-azul-bg  h-[300px] md:w-[20%] w-[80%] shadow-md rounded-2xl px-[15px] py-[20px] flex flex-col gap-[10px] hover:scale-[1.2]' key={item}>
                <div className='bg-cor-azul-secundaria h-[50px] w-[50px] rounded-full flex justify-center'>
                    <img src={dente}alt="Foto de dente" className='h-[40px] self-center'/>
                </div>
                <div className='min-h-[160px] h-[180px] flex flex-col'>
                    <h4 className='text-cor-azul-secundaria text-2xl'>{item.titulo}</h4>
                    <p className='text-sm text-cor-marrom align-center justify-items-stretch w-[100%]'>{item.texto}</p>
                </div>
                <button className='border border-cor-azul-secundaria rounded-2xl text-cor-azul-secundaria flex items-center justify-between px-[15px] hover:border-cor-azul hover:text-cor-azul'> <a href="https://bit.ly/willercarvalho"  target="_blank">Saiba mais</a> <MdKeyboardArrowRight /> </button>
            </div>
            })}
        </div> 

    </section>
  )
}

export default Serviços