import LinkButton from '../../Ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3 font-semibold">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="borde mt-7 rounded-xl bg-slate-500 p-2 text-center text-red-400">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
