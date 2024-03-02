import { formatCurrency } from '../../utils/helpers';

/* eslint-disable react/prop-types */
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(isLoadingIngredients, ingredients);

  return (
    <li key={item.pizzaId}>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'loading...' : ingredients.join(',')}
      </p>
    </li>
  );
}

export default OrderItem;
