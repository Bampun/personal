import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import FormatCurrency from '../utilities/FormatCurrency';
import { HiMinusSm, HiPlusSm } from 'react-icons/Hi';

type StoreItmemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItems({ id, name, price, imgUrl }: StoreItmemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <div className="">
        <div>
          <img src={imgUrl} alt="" height="200px" className="w-72 h-72 object-cover" />
        </div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <span>{FormatCurrency(price)}</span>
        </div>
        <div className="secondary-btn">
          {quantity === 0 ? (
            <button className="w-fit block bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-full" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div>
              <div className="flex gap-3 items-center">
                <button onClick={() => decreaseCartQuantity(id)} className="btn-cart">
                  <HiMinusSm />
                </button>
                <div>
                  <span>{quantity}</span>
                </div>
                <button onClick={() => increaseCartQuantity(id)} className="btn-cart">
                  <HiPlusSm />
                </button>
              </div>
              <button onClick={() => removeFromCart(id)}>remove</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
