import React, { useState } from 'react';

interface MenuProps {
  links: { titulo: string, href: string }[];
}

const Menu: React.FC<MenuProps> = ({ links }) => {
  const [active, setActive] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActive(!active);

    const currentTarget = event.currentTarget as HTMLElement;
    if (!active) {
      currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
      currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')!.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    setActive(false);
  };

  return (
    <nav id="nav" className={active ? 'aberto' : 'fechado'}>
      <button
        id="btn-mobile"
        aria-expanded={active}
        aria-label={active ? 'Fechar menu' : 'Abrir menu'}
        onClick={toggleMenu}
      >
        <div id="hamburger"></div>
      </button>
      <ul id="nav-header">
        {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.titulo}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
