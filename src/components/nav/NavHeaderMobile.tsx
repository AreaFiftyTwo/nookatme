import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/svg/search-solid.svg';

const NavHeaderMobile: React.FC = () => {
  return (
    <div className="nav__header--mobile">
      <div className="nav__logo--mobile">
        <Link to="/">NookAtMe</Link>
      </div>
      <div className="nav__search--mobile">
        <SearchIcon title="Search"/>
      </div>
    </div>
  )
}

export default NavHeaderMobile;
