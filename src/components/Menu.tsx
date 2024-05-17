import React, { useState } from 'react';
import './Menu.css';

const Menu: React.FC = () => {
  const [active, setActive] = useState(false);

  let touch = false;

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => {
    if (event.type === 'touchstart') {
      touch = true;
      event.preventDefault();
    } else if (event.type === 'click' && touch) {
      touch = false;
      return;
    }

    setActive(!active);

    const currentTarget = event.currentTarget as HTMLElement;
    if (!active) {
      currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
      currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')!.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    setActive(false);
  };

  return (
    <nav id="nav" className={active ? 'active' : ''}>
      <button
        id="btn-mobile"
        aria-expanded={active}
        aria-label={active ? 'Fechar menu' : 'Abrir menu'}
        onClick={toggleMenu}
        onTouchStart={toggleMenu}
      >
        <div id="hamburger"></div>
      </button>
      <ul id="nav-header">
        <li><a href="#main" onClick={handleLinkClick} onTouchStart={handleLinkClick}>Home</a></li>
        <li><a href="#box-sobre" onClick={handleLinkClick} onTouchStart={handleLinkClick}>Sobre</a></li>
        <li><a href="#main-contate" onClick={handleLinkClick} onTouchStart={handleLinkClick}>Contate Me</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
