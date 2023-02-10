import { useShoppingCart } from '../context/ShoppingCartContext';
import FormatCurrency from '../utilities/FormatCurrency';
import dataItems from '../../data/items.json';
import StoreItems from './StoreItems';

type CartItemProps = {
  id: number;
  quantity: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function CartItem({ id, quantity, name, price, imgUrl }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = dataItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <div>
        <div>
          <img src={item.imgUrl} alt="product-item" />
        </div>
        <div>
          <h3>
            {item.name}
            {''}
          </h3>
          {quantity > 1 && <span>x{quantity}</span>}
        </div>
        <div>{FormatCurrency(item.price)}</div>
        <div>{FormatCurrency(item.price * quantity)}</div>
        <button onClick={() => removeFromCart(item.id)}>times</button>
      </div>
    </>
  );
}
