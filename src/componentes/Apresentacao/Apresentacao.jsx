import React from 'react'
import willer2 from '../../assets/willer.png'
const Apresentacao = () => {

  return (
    <section className='leftRender flex flex-col xl:min-h-[60%] px-[30px] h-[auto] w-[100%]  items-center gap-[30px]' id='sobre'>
        <h3 className='text-4xl font-bold text-cor-azul-secundaria w-[auto] animate-fadeIn xl:mt-[100px] drop-shadow-md mt-[50px]'>Sobre mim</h3>
        <div className='flex w-[100%] h-[100%] md:h-[700px] relative'> 
          <div className='bg-cor-azul-secundaria hidden md:flex  md:absolute bottom-[15.5%] h-[500px] w-[80%] left-[6.4%] rounded-r-full opacity-60 drop-shadow-2xl'></div>
              <div className='w-[50%] h-[100%]  md:relative md:flex hidden animate-fadeIn'>
                  <img src={willer2} alt='Dr Willer Carvalho' className='h-[700px] absolute z-20 bottom-[15.5%] left-[12.8%] drop-shadow-md	' />
              </div>
              <div className='md:w-[25%] h-[100%] flex flex-col gap-[30px] text-center text-cor-marrom justify-center'>  
                  <p><span className='text-4xl'>"</span>Tout au long de sa carrière, Dr Chaimaa continue de mettre à jour ses connaissances dans le domaine en participant activement à des conférences et formations sur tous les services qu’elle offre.</p>
                  <p>Ses consultations basées sur ses connaissances approfondies dans le domaine sur des différents radios sur des photos 2D et 3D et sur le motif principal du patient, ce qui rend cette consultation très précise et oriante vers le meilleur plan de traitement qui répond a tout besoin.Elle cherche toujours à développer de nouvelles techniques et utilise les technologies les plus récentes afin d’offrir les meilleurs soins possibles à ses patients.<span className='text-4xl'>"</span></p>
              </div>
          </div>
    </section>
  )
}

export default Apresentacao