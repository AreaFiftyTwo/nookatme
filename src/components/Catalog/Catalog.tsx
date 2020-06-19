import React from 'react';
import categories from '../../utils/constants/categories';
import { Category } from '../../utils/types';
import CatalogCell from './CatalogCell';

// map through our array of categories to display all existing category options

const Catalog: React.FC = () => {
  return (
    <div className="catalog">
      <div className="catalog__header">Catalog</div>
      <div className="catalog__all">
        {categories.map((c: Category) => (
          <CatalogCell category={c}/>
        ))}
      </div>
    </div>
  )
}

export default Catalog;
