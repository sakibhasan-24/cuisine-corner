import React from "react";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "./SectionTitle";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ManageItems() {
  const [menu] = useMenu();
  //   console.log(menu);
  return (
    <div>
      <div>
        <SectionTitle title={"MANAGE ITEMS"} text={"HURRY UP"} />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>image</th>
                <th>item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, idx) => (
                <tr
                  className="hover:bg-slate-500 hover:cursor-pointer hover:scale-95 hover:rounded-lg transition-all duration-300"
                  key={item._id}
                >
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                    <br />
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <FaEdit
                        className="text-lg font-bold text-orange-500"
                        title="update"
                      />
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <FaTrash
                        className="text-lg font-bold text-red-500"
                        title="delete"
                      />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
