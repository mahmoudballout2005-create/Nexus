import "../../../styles/RevenueOverview.css";
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";



export default function RevenueOverview() {
    const [revenueData, setRevenueData] = useState([
  { month: "Jan", revenue: 0 },
  { month: "Feb", revenue: 0},
  { month: "Mar", revenue: 0},
  { month: "Apr", revenue: 0},
  { month: "May", revenue: 0},
  { month: "Jun", revenue: 0},
  { month: "Jul", revenue: 0},
  { month: "Aug", revenue: 0},
  { month: "Sep", revenue: 0},
  { month: "Oct", revenue: 0},
  { month: "Nov", revenue: 0},
  { month: "Dec", revenue: 0},
]);
  return (
    <section className="revenueOverview">
      <div className="revenueHeader">
        <div>
          <h2>Revenue Overview</h2>
          <p>Monthly revenue performance</p>
        </div>
        <span>2026</span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient
              id="revenueGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#3978F6"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="#3978F6"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />

          <Tooltip
            formatter={(value) => [
              `$${Number(value).toLocaleString()}`,
              "Revenue",
            ]}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3978F6"
            strokeWidth={3}
            fill="url(#revenueGradient)"
          />
        </AreaChart>
        
      </ResponsiveContainer>
    </section>
  );
}
