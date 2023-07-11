import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

const NewMovieForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" {...register("title")} />
        <div>{errors.title && <span>{errors.title.message}</span>}</div>
      </div>
    </form>
  );
};

export default NewMovieForm;
