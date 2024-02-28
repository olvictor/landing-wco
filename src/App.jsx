import './App.css'
import Apresentacao from './componentes/Apresentacao/Apresentacao'
import ConteudoPrincipal from './componentes/ConteudoPrincipal/ConteudoPrincipal'
import Header from './componentes/Header/Header'
import Localizacao from './componentes/Locallizacao/Localizacao'
import Rodape from './componentes/Rodape/Rodape'
import Serviços from './componentes/Serviços/Serviços'

function App() {

  return (
    <section className='h-screen'>
      <Header />
      <ConteudoPrincipal />
      <Serviços />
      <Apresentacao />
      <Localizacao />
      <Rodape />
    </section>
  )
}

export default App
