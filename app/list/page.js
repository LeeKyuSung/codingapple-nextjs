export default function List() {
  let 상품 = ["토마토", "면", "코코넛"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((상품, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img"></img>
            <h4>
              {i} {상품} $40
            </h4>
          </div>
        );
      })}
    </div>
  );
}
