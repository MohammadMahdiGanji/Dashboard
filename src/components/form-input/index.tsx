// import type
import type { JSX } from "react";
import type { FormInputProps } from "./type";

// import Formik
import { Field, ErrorMessage } from "formik";

export default function FormInput({
  name,
  label,
  type = "text",
  placeholder,
}: FormInputProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-gray-400">{label}</label>

      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="
        outline-none border border-[#14FFEC] px-4 py-3 rounded-xl
        focus:shadow-[0px_0px_1px_3px_#0D7377]
        transition-all duration-200
        bg-transparent text-white text-sm
        "
      />

      <ErrorMessage
        name={name}
        component="span"
        className="text-red-400 text-xs"
      />
    </div>
  );
}
