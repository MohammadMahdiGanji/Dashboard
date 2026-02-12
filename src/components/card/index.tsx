// import type
import type { JSX } from "react";
import type { CardType } from "./type";

import { RechartsDevtools } from "@recharts/devtools";
import { Line, LineChart } from "recharts";

export default function index({
  id,
  title,
  growth,
  value,
  icon,
}: CardType): JSX.Element {
  return (
    <div className="bg-[#323232] p-5 rounded-lg w-full relative col-span-12 @lg:col-span-6 @4xl:col-span-4 @6xl:col-span-3">
      <span className="text-white bg-[#0D7377] p-3 rounded-lg absolute -top-3">
        {icon}
      </span>
      <h3 className="text-right">{title}</h3>
      <p className="text-right mt-4 font-bold text-2xl">{value}</p>
      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
        responsive
        data={[{ value: 100 },{value:400},{value:200},{value:700},{value:300},{value:100},{value:500},{value:100},]}
      >
        <Line dataKey="value" type="monotone"/>
        <RechartsDevtools />
      </LineChart>
    </div>
  );
}
