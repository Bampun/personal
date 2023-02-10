import React from 'react';
import dataItems from '../../data/items.json';
import StoreItems from './StoreItems';

export default function Store() {
  return (
    <>
      <div className="container product-wrapper py-20">
        <h1 className="text-4xl font-medium mb-10 text-center">Store</h1>
        <div className="flex gap-5">
          {dataItems.map((item) => (
            <div key={item.id}>
              <StoreItems {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
