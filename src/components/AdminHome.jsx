import React from "react";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaAsymmetrik, FaDollarSign, FaUser } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

export default function AdminHome() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: adminSate = [] } = useQuery({
    queryKey: ["adminSate"],
    queryFn: async () => {
      const res = await axiosSecure.get("/state/admin");
      return res.data;
    },
  });
  return (
    <div>
      <h1>HI! welcome Bach {user.displayName}</h1>
      <div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUser className="text-4xl" />
            </div>
            <div className="stat-title">Customer</div>
            <div className="stat-value">{adminSate.user}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <IoFastFood className="text-4xl" />
            </div>
            <div className="stat-title">Menu Items</div>
            <div className="stat-value">{adminSate.menuItems}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaAsymmetrik className="text-4xl" />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{adminSate.orders}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-4xl" />
            </div>
            <div className="stat-title">Revinew</div>
            <div className="stat-value">{adminSate.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
