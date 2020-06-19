import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../utils/types';

interface Props {
  category: Category
}

const CatalogCell = (props: Props) => {
  const { category }: { category: Category} = props;
  const { name, icon, api } = category;

  return (
    <div className="category-item">
      <Link to={`/catalog/${api}`}>
        <div className="category-item__icon">
          <img src={require(`../../assets/categories/${icon}`)} alt={name}/>
        </div>
        <div className="category-item__name">
          {name}
        </div>
      </Link>
    </div>
  )
}

export default CatalogCell;
