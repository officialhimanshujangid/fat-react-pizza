import { Link, useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === '-1')
    return (
      <button
        onClick={() => navigate(-1)}
        className="text-lg font-bold text-red-500 hover:text-red-700"
      >
        &larr; Go back
      </button>
    );
  return (
    <Link
      to={to}
      className="hover:red-blue-700 text-lg font-bold text-red-500 "
    >
      {children}
    </Link>
  );
}

export default LinkButton;
