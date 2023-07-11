import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Please enter a title"),
  year: yup.number().required("Please enter a year"),
  image: yup
    .string()
    .required("Please enter an image")
    .url("image must be url"),
});
