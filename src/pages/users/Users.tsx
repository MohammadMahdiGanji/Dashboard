// import type
import type { JSX } from "react";
import type { SelectUserPropType } from "./type";

// import react
import { useState, useCallback, useEffect } from "react";

// import component
import AddUser from "../../components/add-user";
import ShowDataUser from "../../components/show-data-table";
import Button from "../../components/button/index";

// import context provider
import { ToggleForDataProvider } from "../../context/toggle-for-data/ToggleForDataProvider";

export default function Users(): JSX.Element {
  const [userId, setUserId] = useState<string[]>([]);

  const selectUser = useCallback(
    ({ id, checked }: SelectUserPropType): void => {
      if (checked) {
        setUserId((pre) => [...pre, id]);
      } else {
        setUserId((pre) => pre.filter((item) => item != id));
      }
    },
    []
  );

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  return (
    <ToggleForDataProvider>
      <AddUser />
      <div className="bg-[#323232] mt-6 rounded-lg p-4 @3xl:text-xl">
        <h3 className="mb-4 font-bold italic">Show Info user:</h3>
        <div className="flex items-center justify-end gap-4 mb-5">
          <Button>Update</Button>
          <Button>Delete</Button>
          <Button>Ban</Button>
        </div>
        <ShowDataUser selectUser={selectUser} />
      </div>
    </ToggleForDataProvider>
  );
}
