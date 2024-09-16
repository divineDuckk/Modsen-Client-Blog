import { object, string } from "yup";

export const QUERY_RALATED = [
  "Techninical issues",
  "Perfomance issues",
  "Internalization issues",
];
export const contactFormSchema = object().shape({
  email: string().email("Invalid email format").required("Email is required"),
  name: string()
    .required("Full Name is required")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbold"),
  selectedValue: string()
    .required("Please select a query")
    .not(["Query Related"], "Please select a query"),
  message: string()
    .required("Message is required")
    .min(5, "Minimum 5 symblos")
    .max(100, "Maximum 100 symbols"),
});
