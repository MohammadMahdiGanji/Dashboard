// import type
import type { JSX } from "react";
import type { SelectUserPropType } from "./type";

// import react
import { useState, useCallback } from "react";

// import component
import AddUser from "../../components/add-user";
import ShowDataUser from "../../components/show-data-table";
import Button from "../../components/button/index";

// import fetch server
import { deleteUserFormSrever } from "./fetchFromServer";

// import context
import { useToogleForData } from "../../context/toggle-for-data/useToggleForData";

// import sonner
import { toast, Toaster } from "sonner";

export default function Users(): JSX.Element {
  const [userId, setUserId] = useState<string[]>([]);
  const { toggle } = useToogleForData();

  const selectUser = useCallback(
    ({ id, checked }: SelectUserPropType): void => {
      checked
        ? setUserId((pre) => [...pre, id])
        : setUserId((pre) => pre.filter((item) => item != id));
    },
    []
  );

  const clickHandlerDeleteUser = (): void => {
    try {
      if (userId.length > 0) {
     
          userId.map(async (id) => {
            deleteUserFormSrever(`http://localhost:3000/users/${id}`);
          })
        
        setUserId([]);

        toast.success("successfull delete users");
      } else {
        toast.error("unselect user for delets");
      }
      toggle();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <>
      <AddUser />
      <div className="bg-[#323232] mt-6 rounded-lg p-4 @3xl:text-xl">
        <h3 className="mb-4 font-bold italic">Show Info user:</h3>
        <div className="flex items-center justify-end gap-4 mb-5">
          <Button>Update</Button>

          <Button onClick={clickHandlerDeleteUser}>Delete</Button>
          <Button>Ban</Button>
        </div>
        <ShowDataUser selectUser={selectUser} />
        <Toaster
          toastOptions={{
            className: "bg-[#323232]! text-[#14FFEC]! border-[#14FFEC]!",
          }}
        />
      </div>
    </>
  );
}
