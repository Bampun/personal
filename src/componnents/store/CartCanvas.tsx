import React, { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import FormatCurrency from '../utilities/FormatCurrency';
import dataItems from '../../data/items.json';
import CartItem from './CartItem';

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function CartCanvas({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      <div show={isOpen} onHide={closeCart}>
        <div>
          <h1>Cart</h1>
        </div>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div>
            Total{' '}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = dataItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
