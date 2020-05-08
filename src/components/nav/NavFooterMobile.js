import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon} from '../../assets/svg/home-solid.svg';
import { ReactComponent as LeafIcon} from '../../assets/svg/leaf-solid.svg';
import { ReactComponent as ListIcon} from '../../assets/svg/list-alt-regular.svg';
import { ReactComponent as UserIcon} from '../../assets/svg/user-solid.svg';
import { ReactComponent as FriendsIcon} from '../../assets/svg/users-solid.svg';

const NavFooterMobile = () => {
  return (
    <div className="nav__footer--mobile">
      <ul>
        <li>
          <Link to="/">
            <HomeIcon alt="home" />
          </Link>
        </li>
        <li>
          <LeafIcon alt="catalog" />
        </li>
        <li>
          <ListIcon alt="checklists" />
        </li>
        <li>
          <FriendsIcon alt="social" />
        </li>
        <li>
          <UserIcon alt="my profile" />
        </li>
      </ul>
    </div>
  )
}

export default NavFooterMobile;
