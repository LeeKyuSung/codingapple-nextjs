import age from "./data.js";

export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {장바구니.map((item, i) => {
        return <CartItem name={item} key={i} />;
      })}
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
