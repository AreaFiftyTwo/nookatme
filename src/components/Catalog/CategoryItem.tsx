import React from 'react';
import { capitalize } from '../../utils/names';
import {ReactComponent as HeartIcon } from '../../assets/svg/heart-solid.svg';
import {ReactComponent as CheckIcon } from '../../assets/svg/check-circle-solid.svg';
import endpoints from '../../utils/constants/endpoints';

const CategoryItem = ({item}) => {
  const { bodyCustomize, diy, filename, name } = item;
  const capitalizedName = capitalize(name);
  const baseImgUrl = endpoints.images;

  // determine the additional info text that appears for each item
  const isDiy = diy ? "DIY" : "";
  const isCustomizable = bodyCustomize ? "customizable" : "";
  const itemInfo = capitalize([isDiy, isCustomizable].join(", "));

  return (
    <div className="category-item">
      <div className="category-item__name">
        {capitalizedName}
      </div>
      <div className="category-item__center">
        <div className="category-item__img">
          <img src={baseImgUrl + filename + ".png"} alt={capitalizedName + " thumbnail"} />
        </div>
        <div className="category-item__icons">
          <HeartIcon title="Add to wishlist" />
          <CheckIcon title="Add to checklist" />
        </div>
      </div>
      <div className="category-item__info">
        {itemInfo}
      </div>
    </div>
  )
}

export default CategoryItem;
