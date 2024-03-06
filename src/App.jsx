import { useEffect, useState } from 'react'
import './App.css'
import Apresentacao from './componentes/Apresentacao/Apresentacao'
import ConteudoPrincipal from './componentes/ConteudoPrincipal/ConteudoPrincipal'
import Header from './componentes/Header/Header'
import Localizacao from './componentes/Locallizacao/Localizacao'
import Rodape from './componentes/Rodape/Rodape'
import ServicosMobile from './componentes/ServicosMobile/ServicosMobile'
import Serviços from './componentes/Serviços/Serviços'

function App() {
const [larguraTela, setLarguraTela] = useState(null)
useEffect(()=>{
  const getWidth = () =>{
    const width = document.documentElement.clientWidth
    setLarguraTela(width)
  }
  getWidth()
  window.addEventListener('resize',getWidth);
  return () =>{
    window.removeEventListener('resize',getWidth)
  }
},[])
const display = larguraTela >= 450 ? 'desktop' : 'mobile'

  return (  
    <div className='w-screen md:w-[100%]'>
    <Header />
      <section className='h-screen'>
        <ConteudoPrincipal />
        {display === 'desktop' && <Serviços />}
        {display === 'mobile' && <ServicosMobile />}
        <Apresentacao />
        <Localizacao />
        <Rodape />
      </section>
    </div>
  )
}

export default App
