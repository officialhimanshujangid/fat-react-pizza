import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-29 focus:ring-opacity-500 rounded-full bg-gray-300 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-950 focus:outline-none focus:ring focus:ring-indigo-950 focus:ring-offset-2 sm:w-64  sm:focus:w-72   "
      ></input>
    </form>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default SearchOrder;
