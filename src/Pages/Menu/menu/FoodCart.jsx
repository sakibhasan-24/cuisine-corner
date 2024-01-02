import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

export default function FoodCart({ items }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddItem = (food) => {
    // if no user then send in login page
    //
    if (user && user.email) {
      const menuItems = {
        menuID: food._id,
        email: user.email,
        foodName: food.name,
        price: food.price,
        image: food.image,
      };
      axiosSecure.post("/items", menuItems).then((res) => {
        const item = res.data;
        // console.log(item);
        if (item.result.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${food.name} added successfully`,
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "you need to log in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "want to login?",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={() => handleAddItem(items)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
