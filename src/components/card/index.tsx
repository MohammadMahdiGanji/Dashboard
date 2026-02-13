// import type
import type { JSX, ReactNode } from "react";
import type { CardType } from "../../types/CardType";
import type { IconType } from "./type";

// import icons
import { FaUsers } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { GiShop } from "react-icons/gi";
import { SiStatuspal } from "react-icons/si";

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

const listIcon: IconType = {
  Users: <FaUsers />,
  Revenue: <FaSackDollar />,
  ShoppingCart: <GiShop />,
  Activity: <SiStatuspal />,
} as const;

export default function index({
  title,
  growth,
  value,
  icon,
}: CardType): JSX.Element {
  const ComponentIcon: ReactNode = listIcon[icon];
  return (
    <div className="bg-[#323232] p-5 rounded-lg w-full mt-5 relative col-span-12 @lg:col-span-6 @4xl:col-span-4 @6xl:col-span-3">
      <span className="text-white bg-[#0D7377] p-3 rounded-lg absolute -top-5 text-3xl">
        {ComponentIcon}
      </span>
      <h3 className="text-right">{title}</h3>
      <p className="mt-4 font-bold text-2xl">{value}</p>

      <div className="border-t mt-6 border-[#14FFEC] pt-2 flex gap-3 items-center">
        <span>{growth} %</span>
        <span>
          {growth > 0 ? (
            <FaArrowTrendUp className="text-[#6D9E51]" />
          ) : (
            <FaArrowTrendDown className="text-pink-600" />
          )}
        </span>
      </div>
    </div>
  );
}
