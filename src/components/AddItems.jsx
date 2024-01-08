import React from "react";
import SectionTitle from "./SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";

export default function AddItems() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
              {...register("name")}
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
                {...register("category")}
                className="select select-warning w-full  "
              >
                <option disabled selected>
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
                  {...register("price")}
                  type="number"
                  placeholder="price"
                  className="input mb-2 input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Description"
            ></textarea>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-success w-full my-6"
          />

          <button
            className="btn w-full mx-auto font-bold uppercase hover:bg-slate-700 "
            type="button"
          >
            <FaUtensilSpoon /> Add Items
          </button>
        </form>
      </div>
    </div>
  );
}
