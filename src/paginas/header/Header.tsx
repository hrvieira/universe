import './Header.css'
import './Toogle.css'

function Header() {
  return (
     <header>
          <div id="box-header">
               <h1>Universe</h1>
               <nav id="nav">
                    <ul id="nav-header">
                         <li><a href="#main">Home</a></li>
                         <li><a href="#box-sobre">Sobre</a></li>
                         <li><a href="#main-contate">Contate Me</a></li>
                    </ul>
                    <button aria-label="Abrir menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                         <span id="hamburger"></span>
                    </button>
               </nav>
          </div>
     </header>

  )
  
}

export default Header