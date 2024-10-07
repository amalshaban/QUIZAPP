import React from "react";
import { useNavigate } from "react-router-dom";
import { ChangePass } from "../../../../../interface/Interface";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AUTHURL } from "../../../../constans/EndPoints/ENDPOINT";
import { toast } from "react-toastify";
import { VALIDATIONS } from "../../../../constans/Validation/Validation";

export default function ChangePassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePass>();
  const onsubmit = async (data: ChangePass) => {
    try {
      const response = await axios.post(AUTHURL.CHANGE, data);
      console.log(response.data);
      toast.success(response.data.message);
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="py-5 font-bold text-3xl text-auttextcolor">
        Change password
      </h1>
      <div className="py-10">
        <form onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="email" className="block py-3">
            Password
          </label>
          <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
            <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
            <input
              type="password"
              placeholder="Type your email"
              className="w-full bg-authbackground"
              {...register("password", {
                required: "password is require",
                pattern: {
                  value: VALIDATIONS.passwordRegex,
                  message: "Invalid password",
                },
              })}
            />
          </div>
          {errors.password ? (
            <span className="text-red-600">{errors.password.message}</span>
          ) : (
            ""
          )}
          <label htmlFor="seed" className="block py-3">
            New password
          </label>
          <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
            <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
            <input
              type="password_new"
              placeholder="password_new"
              className="w-full bg-authbackground"
              {...register("password_new", {
                required: "password_new is require",
              })}
            />
          </div>
          {errors.password_new ? (
            <span className="text-red-600">{errors.password_new.message}</span>
          ) : (
            ""
          )}

          <div className="my-5">
            <button
              className="py-3 px-10 rounded-2xl bg-white text-black font-semibold"
              type="submit"
            >
              Confirm <i className="fa-regular fa-circle-check px-3"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
