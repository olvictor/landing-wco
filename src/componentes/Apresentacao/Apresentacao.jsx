import React from 'react'
import willer2 from '../../assets/willer.png'
const Apresentacao = () => {

  return (
    <section className='leftRender flex flex-col xl:min-h-[60%] px-[30px] h-[auto] w-[100%]  items-center gap-[30px]' id='sobre'>
        <h3 className='text-4xl lg:text-6xl font-bold text-cor-azul-secundaria w-[auto] animate-fadeIn xl:mt-[100px] drop-shadow-md mt-[50px]'>Sobre mim</h3>
        <div className='flex w-[100%] h-[100%] md:h-[700px] relative'> 
          <div className='bg-cor-azul-secundaria hidden md:flex  md:absolute bottom-[15.5%] h-[500px] w-[80%] left-[6.4%] rounded-r-full opacity-60 drop-shadow-2xl'></div>
              <div className='w-[50%] h-[100%]  md:relative md:flex hidden animate-fadeIn'>
                  <img src={willer2} alt='Dr Willer Carvalho' className='h-[700px] absolute z-20 bottom-[15.5%] left-[12.8%] drop-shadow-md	' />
              </div>
              <div className='md:w-[25%] h-[100%] flex flex-col gap-[30px] text-center  text-cor-marrom justify-center md:h-[490px] md:mt-[95px]  z-10 overflow-y-scroll overflow-x-hidden text-clip'>  
                  <p className='w-[100%] h-[100%] text-left'><span>"</span>Olá, sou o Dr. Willer Carvalho, cirurgião dentista dedicado a proporcionar cuidados odontológicos excepcionais e promover sorrisos saudáveis. Minha jornada na odontologia é impulsionada por uma paixão inabalável por ajudar as pessoas a alcançarem e manterem uma saúde bucal ótima.
                  <br></br>
                  <br></br>
                  Ao longo dos anos, tenho buscado aprimorar minhas habilidades e conhecimentos para oferecer tratamentos de qualidade, utilizando as mais recentes inovações e técnicas na área odontológica. Meu compromisso vai além do consultório, visando estabelecer uma relação de confiança com cada paciente, proporcionando um ambiente acolhedor e confortável.
                  Acredito que a educação é fundamental para a promoção da saúde bucal, por isso, dedico tempo para orientar meus pacientes sobre práticas de higiene oral eficazes e cuidados preventivos.
                  <br></br>
                  <br></br>
                  Estou empenhado em compreender as necessidades individuais de cada pessoa, desenvolvendo planos de tratamento personalizados que atendam às suas expectativas e objetivos.
                  Além disso, mantenho-me atualizado com as últimas pesquisas e avanços na odontologia, participando regularmente de cursos e workshops. 
                  <br></br>
                  <br></br>
                  Meu compromisso é oferecer um atendimento compassivo, empático e centrado no paciente, priorizando sempre o bem-estar e a satisfação de quem confia em meu trabalho.
                  Sinto-me honrado por fazer parte da jornada de cada paciente em direção a um sorriso saudável e radiante. 
                  <br></br>
                  <br></br>
                  <p></p>
                  Seja para procedimentos preventivos, restauradores ou estéticos, estou aqui para fornecer cuidados odontológicos de qualidade, focados em sua saúde e felicidade.Agradeço a confiança que depositam em mim e estou ansioso para ajudá-los a alcançar e manter um sorriso brilhante e saudável. Se tiver alguma dúvida ou necessidade, não hesite em entrar em contato. 
                  Estou aqui para cuidar do seu sorriso com dedicação e excelência.<strong>"</strong></p>
              </div>
          </div>
    </section>
  )
}

export default Apresentacao