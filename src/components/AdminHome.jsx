import React from "react";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaAsymmetrik, FaDollarSign, FaUser } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Pie,
  PieChart,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
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
  const { data: adminOrderState = [] } = useQuery({
    queryKey: ["adminState"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-order-state");
      return res.data;
    },
  });
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //   pie chart
  const data = adminOrderState?.map((item) => {
    return { name: item.category, value: item.totalRevenue };
  });
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  };
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

      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={adminOrderState}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {adminOrderState.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {adminOrderState.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
