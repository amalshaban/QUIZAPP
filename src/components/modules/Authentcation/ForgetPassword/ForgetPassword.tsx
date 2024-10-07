import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AUTHURL } from "../../../../constans/EndPoints/ENDPOINT";
import { toast } from "react-toastify";
import { VALIDATIONS } from "../../../../constans/Validation/Validation";
import { Forgetpassword } from "../../../../../interface/Interface";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/Login");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Forgetpassword>();
  const onsubmit = async (data: Forgetpassword) => {
    try {
      const response = await axios.post(AUTHURL.FORGET, data);
      console.log(response.data);
      toast.success(response.data.message);

      navigate("/reset-password");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="py-5 font-bold text-3xl text-auttextcolor">
        Forgot password
      </h1>
      <div className="p-10 w-full flex justify-start gap-8">
        <div
          className="bg-authchoosuserbackgroundcolor w-48 text-center py-5 rounded-xl transition-all hover:outline cursor-pointer  outline-auttextcolor "
          onClick={navigateLogin}
        >
          {/* <Link to="/login" className="text-6xl"> */}
          <i className="fa-solid fa-user-tie text-6xl"></i>
          {/* </Link> */}
          <h6 className="font-semibold pt-2">sign in</h6>
        </div>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="py-10">
          <label htmlFor="email" className="block">
            Email address
          </label>
          <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
            <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
            <input
              type="email"
              placeholder="Type your email"
              className="w-full bg-authbackground"
              {...register("email", {
                required: "email is require",
                pattern: {
                  value: VALIDATIONS.emailRegex,
                  message: "Invalid email",
                },
              })}
            />
          </div>
          {errors ? (
            <span className="text-red-600">{errors.email?.message}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            className="py-3 px-10 rounded-2xl bg-white text-black font-semibold"
            type="submit"
          >
            Send Email
            <i className="fa-regular fa-circle-check px-3 "></i>
          </button>
        </div>
      </form>
    </>
  );
}
