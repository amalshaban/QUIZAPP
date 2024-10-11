
import x from "../auth-img.svg";
import "../auth.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3005/api/auth/forgot-password",
        data
      );
      toast.success(
        response?.data?.message || "Check your email inbox !"
      );
      navigate('/ResetPassword')
    } catch (error) {
      toast.error(
        error?.response.data.message || "error occured !"
      );
      console.log(error);
    }
  };

  

  return (
    <section className="bg-auth">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-10  lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src={x}
            className="top-10 right-10 absolute h-4/5 rounded-md"
          />
        </aside>

        <main className="flex items-center rounded-xl lg:order-first justify-center sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-4l w-full">
            <a className="block text-blue-600" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6 border-2 border-white-500 rounded-full inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6 border-2 border-white-500 rounded-full inline-block mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <span className="text-white">IQ-QUIZE</span>
            </a>
            <h1 className="auth-title text-2xl font-bold  sm:text-3xl md:text-4xl">
              Forgot Password 
            </h1>

            <form
              action="#"
              onSubmit={handleSubmit(onSubmit)}
              className="grid w-full grid-cols-6 gap-6 pt-3"
            >
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-lg text-white">
                  Email address
                </label>

                <input
                  type="email"
                  id="Email"
                  placeholder="Type your email address"
                  className="px-10 py-2 mt-1 me-5 w-full border-2  border-solid border-white-500 rounded-md bg-transparent text-white text-sm  shadow-sm"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <span className="absolute -mt-8  mx-2 start-grid font-bold ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="size-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </span>
              </div>
              {errors?.email && (
                <span className="validation-message">
                  {String(errors?.email.message)}
                </span>
              )}

           

              <div className="col-span-6 sm:flex sm:items-center sm:gap-6">
                <button className="inline-block shrink-0 rounded-md border  bg-white px-12 py-3 text-sm font-medium text-black focus:outline-none focus:ring">
                  Send email
                  <span className=" w-15 place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 bg-black text-white rounded-full inline p-1 mx-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                </button>

                <p className="mt-4 text-md text-white sm:mt-0">
                  Login?
                  <a href="/login" className="click-link underline">
                    Click here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
