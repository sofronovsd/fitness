import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';

import './index.scss';

type NavigationLink = {
  label: string;
  url: string;
}

const navigationLinks: NavigationLink[] = [
  {
    label: 'Workout',
    url: '/',
  },
  {
    label: 'Exercises',
    url: '/',
  },
  {
    label: 'Trainers',
    url: '/',
  },
  {
    label: 'Pricing',
    url: '/',
  },
  {
    label: 'About Us',
    url: '/about',
  },
  {
    label: 'Login',
    url: '/',
  },
];

const Header = () => {

  const [activePage, setActivePage] = useState(navigationLinks[0]);
  const [links, setLinks] = useState(navigationLinks);

  useEffect(() => {
    setLinks(navigationLinks.filter(link => link.label !== activePage.label));
  }, [activePage, links]);

  const handleNavigationItemClick = (link: NavigationLink) => {
    setActivePage(link);
  };

  return (
    <header className="header">
      {/*<Icon className="icon-logo"/>*/}
      <h1 className="header_label">
        {activePage.label}
      </h1>
      <nav className="navigation-panel">
        <ul>
          {links.map(link => (
            <li
              className="navigation-panel_item"
              onClick={() => handleNavigationItemClick(link)}
            >
              <Link to={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
