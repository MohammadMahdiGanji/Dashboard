// import type
import type { JSX } from "react";
import type { FormSelectProps } from "./type";

// import Formik
import { useField } from "formik";


export default function FormSelect({
  name,
  label,
  options,
}: FormSelectProps):JSX.Element {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs text-gray-400">{label}</label>

      <div className="relative">
        <select
          {...field}
          className="
          appearance-none
          outline-none
          border border-[#14FFEC]
          px-4 py-3
          rounded-xl
          bg-transparent
          text-white
          text-sm
          w-full
          focus:shadow-[0px_0px_1px_3px_#0D7377]
          transition-all duration-200
          cursor-pointer
          "
        >
          <option value="" className="bg-[#323232]">
            Select option
          </option>

          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-[#323232]"
            >
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#14FFEC] pointer-events-none">
          ▼
        </span>
      </div>

      {meta.touched && meta.error && (
        <span className="text-red-400 text-xs">{meta.error}</span>
      )}
    </div>
  );
}