import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartItem } from './cartSlice';
import { getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartrQuantity = useSelector(getTotalCartItem);
  const totalValue = useSelector(getTotalCartPrice);
  if (!totalCartrQuantity) return null;
  return (
    <div className="flex items-center justify-around bg-stone-800 p-4 text-sm  text-stone-200 sm:px-6">
      <p className="space-x-4 font-semibold uppercase text-stone-300">
        <span className="">{totalCartrQuantity} pizzas </span>
        <span>{formatCurrency(totalValue)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
