import Cover from "../../../components/Cover";
import MenuItem from "../../PopularMenu/MenuItem";

export default function MenuCategory({ items, title, img }) {
  return (
    <div>
      {title && <Cover image={img} title={title} />}
      <div className="my-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
