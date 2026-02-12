// import type
import type { JSX } from "react";
import type { MenuItemType } from "./type";

// import motion
import * as motion from "motion/react-client";

// import link
import { Link } from "react-router-dom";

// import React
import { memo } from "react";

function MenuItem({
  id,
  title,
  link,
  selectTab,
  alterSelecetTab,
}: MenuItemType): JSX.Element {
  return (
    <motion.li
      initial={false}
      className="cursor-pointer text-center relative w-2/4 py-2 "
      onClick={() => alterSelecetTab(id)}
    >
      <Link
        to={`/${link}`}
        className="relative z-10 block w-full h-full text-ms"
      >
        {title}
      </Link>
      {id == selectTab ? (
        <motion.div
          className="bg-[#0D7377] absolute top-0 bottom-0 right-0 left-0 rounded-lg"
          layoutId="underline"
          id="underline"
        />
      ) : null}
    </motion.li>
  );
}

export default memo(MenuItem);
