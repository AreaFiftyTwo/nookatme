import React from 'react';
import { capitalize } from '../../utils/names';
import {ReactComponent as HeartIcon } from '../../assets/svg/heart-solid.svg';
import {ReactComponent as CheckIcon } from '../../assets/svg/check-circle-solid.svg';

const CategoryItem = ({item}) => {
  const { name } = item;
  const capitalizedName = capitalize(name);
  return (
    <div className="category-item">
      <div className="category-item__name">
        {capitalizedName}
      </div>
      <div className="category-item__center">
        <div className="category-item__img">

        </div>
        <div className="category-item__icons">
          <HeartIcon title="Add to wishlist" />
          <CheckIcon title="Add to checklist" />
        </div>
      </div>
    </div>
  )
}

export default CategoryItem;
