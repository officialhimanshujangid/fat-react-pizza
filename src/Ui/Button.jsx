import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    'focus:ring-emrald-500 ml-5  text-sm inline-block rounded-full bg-emerald-500 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-emerald-700 hover:text-slate-100 focus:outline-none focus:ring focus:ring-offset-2 ';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-3',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
    small: base + 'py-3 px-4 md:px-5 md:py-2.5 text-xs',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;