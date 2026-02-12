// import type
import type { JSX } from "react";
import type { MenuDataType } from "./type";

// import hook
import { useState, useEffect, useCallback } from "react";

// fetch from server
import { getDataMenuFromServer } from "./fetchFromServer";

// import component
import MenuItem from "./MenuItem";

export default function Menu(): JSX.Element {
  // create hook
  const [selectTab, setSelectTab] = useState<number>(1);
  const [menu, setMenu] = useState<MenuDataType[]>();

  //this is fuction for get data
  const getData = async (): Promise<void> => {
    const data = await getDataMenuFromServer();
    setMenu(data);
  };

  // function is for alter value setlectTab
  const alterSelecetTab = useCallback((id: number): void => {
    setSelectTab(id);
  }, []);

  // get data
  useEffect(() => {
    getData();
  }, []);

  return (
    <nav className="mt-8">
      <ul className="flex flex-col gap-3 items-center">
        {menu?.map((item) => (
          <MenuItem
            key={item.id}
            {...item}
            selectTab={selectTab}
            alterSelecetTab={alterSelecetTab}
          />
        ))}
      </ul>
    </nav>
  );
}
