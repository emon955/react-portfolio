import React from 'react';
import ItemDetail3 from './ItemDetail3';
import ItemDetail2 from './ItemDetail2';
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
        <div><ItemDetail2 /></div>
      ) : selected === 1 ? (
        <div class="product-anotherinfo-wrapper">
          <ul>
            <li><span>Weight</span> 400 g</li>
            <li><span>Dimensions</span>10 x 10 x 15 cm </li>
            <li><span>Materials</span> 60% cotton, 40% polyester</li>
            <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
          </ul>
        </div>
      ) : selected === 3 ? (
        <div><ItemDetail3 /></div>
      ) : null}
    </div>
  );
};
export default ItemDetail1
