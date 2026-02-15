// import type
import type { JSX, ChangeEvent } from "react";
import type { InfoUserType, ShowDataTablePropType } from "./type";

// import React
import { useState, useEffect, use } from "react";

// import fetch Server
import { getDataUserFormServer } from "./fetchFromServer";

// import component
import { Table, TableHead } from "../table";

// import hook context
import { useToogleForData } from "../../context/toggle-for-data/useToggleForData";

export default function ShowDataUser({
  selectUser,
}: ShowDataTablePropType): JSX.Element {
  const [userInfo, setUserInfo] = useState<InfoUserType[]>([]);
  const { value } = useToogleForData();

  const getData = async () => {
    try {
      const data = await getDataUserFormServer<InfoUserType[]>(
        "http://localhost:3000/users"
      );
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [value]);

  const changeCheckBoxHandler = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
    id: string
  ) => {
    if (event.target.checked) {
      selectUser({ id: id, checked: event.target.checked });
    } else {
      selectUser({ id: id, checked: event.target.checked });
    }
  };

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Title>Id</Table.Title>
          <Table.Title>UserName</Table.Title>
          <Table.Title>Email</Table.Title>
          <Table.Title>Type</Table.Title>
          <Table.Title>
            <p className="w-full text-center">Selecte</p>
          </Table.Title>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {userInfo.map((user) => (
          <Table.Row key={user.id}>
            <Table.Col>{user.id}</Table.Col>
            <Table.Col>{user.fullName}</Table.Col>
            <Table.Col>{user.email}</Table.Col>
            <Table.Col>{user.type}</Table.Col>
            <Table.Col>
              <div className="flex items-center justify-center">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="peer hidden"
                    onChange={(event) => changeCheckBoxHandler(event, user.id)}
                  />

                  <div
                    className="group w-5 h-5 flex items-center justify-center
               border-2 border-gray-[#14FFEC] rounded
               transition-all duration-200
               peer-checked:bg-[#14FFEC]
               peer-checked:border-[#14FFEC]"
                  >
                    <svg
                      className="w-4 h-4 text-black opacity-0 scale-75
                 transition-all duration-200
                 group-peer-checked:opacity-100
                 group-peer-checked:scale-100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </label>
              </div>
            </Table.Col>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
