// import react
import { type JSX } from "react";

// import type
import type { SearchType } from "./type";

// import formik
import { Formik, Field, Form } from "formik";

// import component
import SearchWatcher from "./SearchWatcher";

// import icons
import { IoSearchOutline } from "react-icons/io5";

// variables
const formSearchInitialValues: SearchType = {
  search: "",
};

export default function TopBarSearch(): JSX.Element {
  const submitForm = (values: SearchType) => {
    console.log(values.search);
  };

  return (
    <Formik initialValues={formSearchInitialValues} onSubmit={submitForm}>
      <Form>
        <div className="relative h-11">
          <span
            className="absolute bottom-0 top-0 m-auto left-2.5 flex
           items-center justify-center"
          >
            <IoSearchOutline size={20} />
          </span>
          <Field
            id="search"
            name="search"
            placeholder="Search"
            className="
            outline-nonew-full h-full border border-[#14FFEC] px-3 rounded-lg
            pl-10 outline-none focus:shadow-[0px_0px_1px_3px_#0D7377] 
            transition-all duration-200"
          ></Field>
        </div>
        <SearchWatcher />
      </Form>
    </Formik>
  );
}
