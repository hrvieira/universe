import React from 'react'
import Menu from '../../components/Menu'
import './Header.css'

const Header: React.FC = () => {
     const links = [
          { titulo: 'Home', href: '#main' },
          { titulo: 'Sobre', href: '#box-sobre' },
          { titulo: 'Contate Me', href: '#main-contate' }
     ];

     return (
          <header>
               <div id="box-header">
                    <h1>Universe</h1>
                    <Menu links={links}/>
               </div>
          </header>

     )
  
}

export default Header