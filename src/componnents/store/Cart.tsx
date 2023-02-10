import Link from 'next/link';
import { FaCartPlus } from 'react-icons/fa';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function Cart() {
  const { openCart, cartQuantity } = useShoppingCart();
  console.log(cartQuantity + 'card is count');
  return (
    <>
      <div onClick={openCart}>
        {cartQuantity > 0 && (
          <Link href="">
            <FaCartPlus />
            <sub className="cart-btn absolute top-0">{cartQuantity}</sub>
          </Link>
        )}
      </div>
    </>
  );
}
