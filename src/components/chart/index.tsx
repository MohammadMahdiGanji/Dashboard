// import type
import type { JSX } from "react";
import type { DataChartType } from "./type";

// import React
import { useState, useEffect } from "react";

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

// import fetch server
import { getDataCahrt } from "./fetchFromDataServer";

export default function index({ isAnimationActive = true }): JSX.Element {
  const [dataChart, setDataChart] = useState<DataChartType[]>([]);

  const getData = async () => {
    try {
      const data = await getDataCahrt<DataChartType[]>(
        "http://localhost:3000/yearChart"
      );
      setDataChart(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-[#323232] p-5 rounded-lg w-full mt-10 h-full col-span-12 @6xl:col-span-6 max-h-[600px]">
      <p className="text-center font-bold italic @3xl:text-xl @5xl:text-2xl">Year 2025</p>
      <div className="bg-[#323232] p-5 rounded-lg w-full">
        <AreaChart
          style={{ width: "100%", aspectRatio: 1.618, maxHeight: 450 }}
          margin={{
            top: 20,
            right: 20,
            bottom: 5,
            left: 0,
          }}
          responsive
          className="w-full"
          data={dataChart}
        >
          <CartesianGrid stroke="#14FFEC" strokeDasharray="3 3" />
          <XAxis width="auto" dataKey="month" stroke="#14FFEC" />
          <YAxis stroke="#14FFEC" />
          <defs>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14FFEC" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#14FFEC" stopOpacity={0} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFE52A" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFE52A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#14FFEC"
            fillOpacity={0.8}
            fill="url(#revenue)"
            isAnimationActive={isAnimationActive}
          />
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#FFE52A"
            fillOpacity={0.8}
            fill="url(#expense)"
            isAnimationActive={isAnimationActive}
          />
          <Legend />
        
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
}
