import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon} from '../../assets/svg/home-solid.svg';
import { ReactComponent as LeafIcon} from '../../assets/svg/leaf-solid.svg';
import { ReactComponent as ListIcon} from '../../assets/svg/list-alt-regular.svg';
import { ReactComponent as UserIcon} from '../../assets/svg/user-solid.svg';
import { ReactComponent as FriendsIcon} from '../../assets/svg/users-solid.svg';

const NavFooterMobile: React.FC = () => {
  return (
    <div className="nav__footer--mobile">
      <ul>
        <li>
          <Link to="/">
            <HomeIcon title="Home" />
          </Link>
        </li>
        <li>
          <LeafIcon title="Catalog" />
        </li>
        <li>
          <ListIcon title="Checklists" />
        </li>
        <li>
          <FriendsIcon title="Social" />
        </li>
        <li>
          <UserIcon title="My Profile" />
        </li>
      </ul>
    </div>
  )
}

export default NavFooterMobile;
