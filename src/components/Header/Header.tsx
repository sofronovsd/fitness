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
    url: 'exercise-section',
  },
  {
    label: 'Exercises',
    url: 'popular-exercises-section',
  },
  {
    label: 'Trainers',
    url: 'workout-section',
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

  const handleNavigationItemClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavigationLink) => {
    e.preventDefault();
    setActivePage(link);
    document.getElementById(link.url)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  useEffect(() => {
    const handleOnScroll = () => {
      const windowScrollTop = window.scrollY;
      const header = document.getElementById('header');
      if (windowScrollTop > 1) {
        header?.classList.add('header__small');
      } else {
        if (header?.classList.contains('header__small')) {
          header.classList.remove('header__small');
        }
      }
      for (let i = 0; i < navigationLinks.length - 1; i++) {
        const link1 = navigationLinks[i];
        const link2 = navigationLinks[i + 1];
        const linkElement1 = document.getElementById(link1.url);
        const elementOffsetTop1 = linkElement1?.offsetTop;
        const linkElement2 = document.getElementById(link2.url);
        const elementOffsetTop2 = linkElement2?.offsetTop;
        if (elementOffsetTop1 && elementOffsetTop1 <= windowScrollTop
          && (elementOffsetTop2 && elementOffsetTop2 > windowScrollTop || !elementOffsetTop2)) {
          setActivePage(link1);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="header"
    >
      <h1 className="header_label">
        {activePage.label}
      </h1>
      <nav className="navigation-panel">
        <ul>
          {navigationLinks.map(link => (
            <li className="navigation-panel_item">
              <a
                href={`#${link.url}`}
                onClick={(e) => handleNavigationItemClick(e, link)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
