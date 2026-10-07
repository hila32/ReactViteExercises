interface Props {
  cartItem: {name: string}[];
  OnClear: () => void;
  OnAdd: () => void;
}
const Cart = ({ cartItem, OnClear, OnAdd }: Props) => {
  return (
    <>
      <div>
        Cart
        {cartItem.map((item) => (
          <li>{item.name}</li>
        ))}
      </div>
      <button onClick={OnClear}>Clear</button>
      <button onClick={OnAdd}>add</button>
    </>
  );
};

export default Cart;
