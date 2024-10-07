import React from "react";
import { useNavigate } from "react-router-dom";
import { Resetpassword } from "../../../../../interface/Interface";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AUTHURL } from "../../../../constans/EndPoints/ENDPOINT";
import { toast } from "react-toastify";
import { VALIDATIONS } from "../../../../constans/Validation/Validation";

export default function ResetPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Resetpassword>();
  const onsubmit = async (data: Resetpassword) => {
    try {
      const response = await axios.post(AUTHURL.RESET, data);
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
        Reset password
      </h1>
      <div className="py-10">
        <form onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="email" className="block py-3">
            Email address
          </label>
          <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
            <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
            <input
              type="email"
              placeholder="Type your email"
              className="w-full bg-authbackground"
              {...register("email", {
                required: "Email is require",
                pattern: {
                  value: VALIDATIONS.emailRegex,
                  message: "Invalid email",
                },
              })}
            />
          </div>
          {errors.email ? (
            <span className="text-red-600">{errors.email.message}</span>
          ) : (
            ""
          )}
          <label htmlFor="seed" className="block py-3">
            OTP
          </label>
          <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
            <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
            <input
              type="seed"
              placeholder="OTP"
              className="w-full bg-authbackground"
              {...register("otp", { required: "otp is require" })}
            />
          </div>
          {errors.otp ? (
            <span className="text-red-600">{errors.otp.message}</span>
          ) : (
            ""
          )}
          <label htmlFor="password" className="block py-3">
            password
          </label>
          <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
            <i className="fa-solid fa-key bg-authbackground text-xl mr-3"></i>
            <input
              type="password"
              placeholder="Type your password"
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

          <div>
            <button
              className="py-3 px-10 rounded-2xl bg-white text-black font-semibold"
              type="submit"
            >
              Reset<i className="fa-regular fa-circle-check px-3"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
