import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useLoaderData } from "react-router-dom";
import usePublicAxios from "../Hooks/usePublicAxios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const image_hosting = import.meta.env.VITE_IMAGE_KEY;
const image_key = `https://api.imgbb.com/1/upload?key=${image_hosting}`;
export default function UpdateItems() {
  //   console.log(item);
  const item = useLoaderData();
  //   const [currentImage, setCurrentImage] = useState(item.image);

  const axiosPublic = usePublicAxios();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] || item.image };
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
      //   console.log(menuItems);
      const resData = await axiosSecure.patch(`/menu/${item._id}`, menuItems);
      if (resData.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `${data.name} Update successfully`,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <div>
        <SectionTitle text={"UPDATE AN ITEM"} title={"Refresh item"} />
        <div className="mt-2 p-4 bg-green-900 rounded-lg mx-2 w-full flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full px-8">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Food Name</span>
              </div>
              <input
                defaultValue={item.name}
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
                  defaultValue={item.category}
                  {...register("category", { required: true })}
                  className="select select-warning w-full  "
                >
                  <option disabled value={"default"}>
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
                    defaultValue={item.price}
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
                defaultValue={item.recipe}
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="recipe"
              ></textarea>
            </label>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered file-input-success w-full my-6"
            />

            <button className="btn w-full mx-auto font-bold uppercase hover:bg-slate-700 ">
              Update Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
