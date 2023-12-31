import { Link } from "react-router-dom";
import Cover from "../../../components/Cover";
import MenuItem from "../../PopularMenu/MenuItem";

export default function MenuCategory({ items, title, img }) {
  console.log(title);
  return (
    <div>
      {title && <Cover image={img} title={title} />}
      <div className="my-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to={`/order/${title}`}>
          <button className="bg-slate-100   py-2 px-4 rounded-md text-slate-500 font-semibold text-center my-6">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}
