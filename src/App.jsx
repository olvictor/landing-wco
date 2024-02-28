import './App.css'
import Apresentacao from './componentes/Apresentacao/Apresentacao'
import ConteudoPrincipal from './componentes/ConteudoPrincipal/ConteudoPrincipal'
import Header from './componentes/Header/Header'
import Localizacao from './componentes/Locallizacao/Localizacao'
import Rodape from './componentes/Rodape/Rodape'
import Serviços from './componentes/Serviços/Serviços'

function App() {

  return (  
    <div className='w-screen md:w-[100%]'>
    <Header />
      <section className='h-screen'>
        <ConteudoPrincipal />
        <Serviços />
        <Apresentacao />
        <Localizacao />
        <Rodape />
      </section>
    </div>
  )
}

export default App
