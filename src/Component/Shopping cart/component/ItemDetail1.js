import React from 'react';
import ItemDetail2 from './ItemDetail2';
import ItemDetail3 from './ItemDetail3';
const ItemDetail1 = ({ item, selected }) => {
  console.log(selected)
  return (
    <div style={{ display: selected ? 'block' : 'none' }}>
      {/* <ul>
        <li><span>{item.item}</span></li>
      </ul>
      <h1>{item.item2}</h1>
      <h5>{item.item3}</h5> */}
      {selected === 2 ? (
        <h1>h1</h1>
      ) : selected === 1 ? (
        <h1>hello</h1>
      ) : selected === 3 ? (
        <h1>hi</h1>
      ) : null}
    </div>
  );
};
export default ItemDetail1
