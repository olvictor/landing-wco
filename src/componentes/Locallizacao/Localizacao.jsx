import React, { useState } from 'react'

const Localizacao = () => {
    
    const [itemAtivo,setItemAtivo] = useState(0)

    const maps = [
        {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.2424332427585!2d-43.36517954878694!3d-22.988140453085567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda33ac04318b%3A0xca5079e55e077267!2sLink%20Office%2C%20Mall%20%26%20Stay!5e0!3m2!1spt-BR!2sbr!4v1709078890139!5m2!1spt-BR!2sbr"
        },
        {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8677575628903!2d-43.25430859852624!3d-22.99188988348056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd420ba18782d%3A0x918e96097b428b6d!2sVia%20%C3%81pia%20da%20Rocinha%2C%2042%20-%20Rocinha%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022451-540!5e0!3m2!1spt-BR!2sbr!4v1709075889461!5m2!1spt-BR!2sbr"
        }
    ]

    return (
    <section className='fadeOnRender bg-white xl:h-[auto] w-[100%] xl:px-[150px] xl:py-[120px] flex flex-col gap-[100px] text-center py-[50px] items-center'>
        <h2 className='text-6xl font-bold text-cor-azul-secundaria w-[auto] drop-shadow-md'>Locais de atendimento</h2>
        <div className='flex flex-col md:flex-row'>
            <nav className={`bg-cor-azul-bg h-[100px] rounded-xl flex flex-col justify-center px-[10px]`}>
                <ul className='cursor-pointer'> 
                    <li className={itemAtivo === 0 ? 'text-cor-azul' : 'text-cor-marrom'} onClick={()=> setItemAtivo(0)}>Barra da Tijuca</li>
                    <li className={itemAtivo === 1 ? 'text-cor-azul' : 'text-cor-marrom'} onClick={()=> setItemAtivo(1)}>São Conrado</li>
                </ul>
            </nav>
            <iframe src={maps[itemAtivo].src} className='md:w-[1000px] md:h-[600px] w-[100%] h-[300px]' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Localizacao