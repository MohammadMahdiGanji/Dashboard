import * as Yup from "yup";

export const AddUserSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full Name must be at least 2 characters")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  type: Yup.string()
    .oneOf(["admin", "editor", "user"], "Select a valid user type")
    .required("User type is required"),
});
