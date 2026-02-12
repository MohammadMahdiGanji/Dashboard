// import type
import type { JSX } from "react";

// import charts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

export default function index({ isAnimationActive = true }): JSX.Element {
  return (
    <div className="bg-[#323232] p-5 rounded-lg w-full mt-10 h-full col-span-12 @6xl:col-span-6 max-h-[500px]">
      <div className="bg-[#323232] p-5 rounded-lg w-full">
        <AreaChart
          style={{ width: "100%", aspectRatio: 1.618, maxHeight: 500 }}
          margin={{
            top: 20,
            right: 20,
            bottom: 5,
            left: 0,
          }}
          responsive
          className="w-full"
          data={[
            { value1: 1000, name: "month 1", value2: 0 },
            { value1: 5000, name: "month 2", value2: 2000 },
            { value1: 3000, name: "month 3", value2: 5000 },
            { value1: 2000, name: "month 5", value2: 1000 },
            { value1: 5000, name: "month 4", value2: 6000 },
          ]}
        >
          <CartesianGrid stroke="#aaa" strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14FFEC" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#14FFEC" stopOpacity={0} />
            </linearGradient>
           
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value1"
            stroke="#14FFEC"
            fillOpacity={1}
            fill="url(#colorUv)"
            isAnimationActive={isAnimationActive}
          />
          <XAxis dataKey="name" />
          <YAxis width="auto" dataKey="value1"/>
          <Legend />
          <RechartsDevtools />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
}
