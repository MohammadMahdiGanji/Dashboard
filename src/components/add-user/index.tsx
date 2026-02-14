// import type
import type { JSX } from "react";
import type { InfoFormAddUserType } from "./type";

// import Formik
import { Formik, Form } from "formik";

// import Component
import FormInput from "../form-input";
import FormSelect from "../select-form";

// validation
import { AddUserSchema } from "./validation";

// fetch server
import { PostData } from "./ferchFromServer";

// import hook context
import { useToogleForData } from "../../context/toggle-for-data/useToggleForData";

// initial value for formik
const initialValues: InfoFormAddUserType = {
  fullName: "",
  email: "",
  password: "",
  type: "",
};

export default function AddUser(): JSX.Element {
  const { toggle } = useToogleForData();

  const addUser = async (values: InfoFormAddUserType): Promise<void> => {
    const ress = await PostData("http://localhost:3000/users", values);
    console.log(ress);
  };

  const submitDataAddUser = (values: InfoFormAddUserType) => {
    addUser(values);
    toggle();
  };

  return (
    <div className="bg-[#323232] p-4 rounded-lg">
      <h3 className="font-bold italic text-xl">ADD UAER:</h3>
      <div className="bg-[#323232] p-4 rounded-lg shadow-[0px_0px_3px_rgba(255,255,255,0.3)] mt-4">
        <Formik
          validationSchema={AddUserSchema}
          initialValues={initialValues}
          onSubmit={submitDataAddUser}
        >
          <Form className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6">
            <FormInput
              name="fullName"
              label="Full Name"
              placeholder="Enter full name"
            />

            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter email"
            />

            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
            />
            <FormSelect
              name="type"
              label="User Type"
              options={[
                { label: "Admin", value: "admin" },
                { label: "Editor", value: "editor" },
                { label: "User", value: "user" },
              ]}
            />
            <div className="md:col-span-2 xl:col-span-3">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#14FFEC] text-black font-semibold 
                hover:bg-[#0D7377] hover:text-white transition-all duration-200 
                shadow-lg max-w-40 cursor-pointer"
              >
                Create User
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
