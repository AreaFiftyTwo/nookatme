import React from 'react';
import { Link } from 'react-router-dom';

const NavDesktop: React.FC = () => {
  return (
    <div className="nav--desktop">
      <ul>
        <li className="nav__logo--desktop">
          <Link to="/">NookAtMe</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          Checklists
        </li>
        <li>
          Community
        </li>
        <li>
          Profile
        </li>
      </ul>
    </div>
  )
}

export default NavDesktop;
