import React from 'react';
import categories from '../../utils/constants/categories';
import { Category } from '../../utils/types';
import CatalogCell from './CatalogCell';
import { uuid } from 'uuidv4';

// map through our array of categories to display all existing category options

const Catalog: React.FC = () => {
  return (
    <div className="catalog">
      <div className="catalog__header">Pick a category</div>
      <div className="catalog__all">
        {categories.map((c: Category) => (
          <CatalogCell key={uuid()} category={c} />
        ))}
      </div>
    </div>
  )
}

export default Catalog;
