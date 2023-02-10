import Home from './Home';
import { ShoppingCartProvider } from '../componnents/context/ShoppingCartContext';

export default function main() {
  return (
    <ShoppingCartProvider>
      <Home />
    </ShoppingCartProvider>
  );
}
