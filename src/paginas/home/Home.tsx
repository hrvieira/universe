import Contate from '../../components/Contate'
import GithubProfile from '../../components/QuemSou'
import './Home.css'

function Home() {
  return (

          <main id="main">
               <section id="box-titulo-img">
                    <article id="box-bem-vindo">
                         <p id="bem-vindo-titulo">Bem Vindo a um Novo Universo</p>
                         <h1 id="sub-titulo">Diferentes mundos para diferentes pessoas</h1>
                         <p id="texto-bem-vindo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod error veniam in voluptatem magni quisquam</p>
                         <a id="bt-explorer" href="">Explore</a>
                    </article>
                    <img id='capacete-astronalta' src='src\assets\img\svg\astronauta.svg' alt='capacete de astronalta'/>
               </section>
               <GithubProfile />
               <Contate />
          </main>
   
  )
}

export default Home