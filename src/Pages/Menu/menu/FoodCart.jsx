export default function FoodCart({ items }) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={items.image} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{items.name}</h2>
          <p>{items.recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
