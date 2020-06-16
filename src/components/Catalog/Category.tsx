import React, { useEffect, useState } from 'react';
import { getItems } from '../../utils/axios';
import endpoints from '../../utils/constants/endpoints';
import CategoryItem from './CategoryItem';
import { capitalize } from '../../utils/names';

interface Props {
  match: {
    params: {
      category: string
    }
  }
}

interface Item {
  _id: string,
  [key: string]: any
}

const Category = (props: Props) => {
  const [items, setItems] = useState<Item[]>([]);

  // determining the request url
  const env = process.env.NODE_ENV || 'development';
  const apiItemsUrl: String = endpoints[env].apiItems;

  const { category } = props.match.params;

  let page: Number = 1;
  let limit: Number = 30;

  useEffect(() => {
    const getData = async () => {
      const fetchedItems = await getItems(`${apiItemsUrl}/${category}?page=${page}&limit=${limit}`);
      fetchedItems && setItems(fetchedItems.data);
    };
    getData();
  }, [category, page, limit, apiItemsUrl, props.match.params]);

  console.log(items);
  return (
    <div className="category">
      <div className="category__header">
        Categories {'> ' + capitalize(category)}
      </div>
      <div className="category__items-list">
        {items.map((item: Item) => <CategoryItem key={item._id} item={item} />)}
      </div>
    </div>
  )
}

export default Category;
