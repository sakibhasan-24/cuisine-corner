import React from "react";
import SectionTitle from "./SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";
import usePublicAxios from "../Hooks/usePublicAxios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting = import.meta.env.VITE_IMAGE_KEY;
const image_key = `https://api.imgbb.com/1/upload?key=${image_hosting}`;
export default function AddItems() {
  const axiosPublic = usePublicAxios();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_key, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(res.data.data.display_url);
    if (res.data.success) {
      const menuItems = {
        name: data.name,
        price: parseFloat(data.price),
        category: data.category,
        image: res.data.data.display_url,
        recipe: data.recipe,
      };
      const resData = await axiosSecure.post("/menu", menuItems);
      if (resData.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Item added successfully",
          timer: 1500,
        });
      }
    }
  };
  return (
    <div className="max-w-full mx-auto py-8 bg-red-900">
      <div className="flex flex-col gap-6   ">
        <h1 className="text-3xl font-bold text-center">ADD ITEMS</h1>
        <p className="text-center font-semibold text-orange-400">What's NEW</p>
      </div>
      <div className="mt-2 p-4 bg-green-900 rounded-lg mx-2 w-full flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Food Name</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Food Name"
              className="input mb-2 input-bordered w-full "
            />
          </label>
          <div className="flex gap-12">
            <div>
              <div className="label">
                <span className="label-text">category</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-warning w-full  "
              >
                <option disabled value={""}>
                  Pick a Category
                </option>
                <option value="desserts">Desserts</option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="price"
                  className="input mb-2 input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">recipe</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="recipe"
            ></textarea>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered file-input-success w-full my-6"
          />

          <button className="btn w-full mx-auto font-bold uppercase hover:bg-slate-700 ">
            <FaUtensilSpoon /> Add Items
          </button>
        </form>
      </div>
    </div>
  );
}
