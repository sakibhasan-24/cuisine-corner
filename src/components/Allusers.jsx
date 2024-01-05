import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Allusers() {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const makeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure want to make admin?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((result) => {
          if (result.data.modifiedCount > 0) {
            refetch();
            Swal.fire("Admin made successfully!", "", "success");
          }
        });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex items-center justify-evenly">
        <h3 className="text-4xl">All User</h3>
        <h3 className="text-4xl">total user {users.length}</h3>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button onClick={() => makeAdmin(user)}>
                        <FaUser className="bg-orange-500 text-white font-extrabold text-2xl " />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-xs bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
