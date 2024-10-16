import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface groupList {
  max_students: number;
  name: string;
  _id: string;
}

interface StudentsList {
  id: string;
  first_name: string;
  last_name: string
}

export default function Groups() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3005/api/group", data,  {
          headers: { Authorization: `Bearer ${localStorage.token}` }
        }
      );
    
      toast.success(
        response?.data?.message || "congratulations, Group was added successfuly !"
      );
      
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Unforunatly, Group was not added !");
    }
  };


  const [groupsList, setGroupsList] = useState<groupList>();
  const getGroupsList = async () => {
    try {
      const response = await axios.get<groupList>(
        "https://upskilling-egypt.com:3005/api/group",
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      setGroupsList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGroupsList();
    return () => {};
  }, []);


 
  const [isDisplayed, setIsDisplayed] = useState(false);
  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
    getGroupsList();
  };


  const [studentsList, setStudentsList] = useState<StudentsList>();
  const getStudentsList = async () => {
    try {
      const response = await axios<StudentsList>(
        "https://upskilling-egypt.com:3005/api/student",
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      setStudentsList(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudentsList();
    return () => {};
  }, []);

  const [selectedOptions, setSelectedOptions] = useState([]);

const handleChange = (selectedOptions) => {
  setSelectedOptions(selectedOptions);
};


  return (
    <>
      <span onClick={toggleDisplay} className="relative block border my-2  rounded-3xl  
      w-1/6 px-8 py-3 p-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 inline"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
            clipRule="evenodd"
          />
        </svg>
        <a > Add Group </a>
      </span>

      <article className="rounded-xl p-2 border-2 border-gray-100 bg-white ">
        <h1>Groups List</h1>
        <div className=" my-1 grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {groupsList?.map((group: groupList) => (
            <div key={group._id} className="p-1 rounded-xl border-2 border-gray-100 ">
              <div className="flex items-stretch gap-4">
                <div>
                  <h3 className="font-medium sm:text-lg">
                    Group :{" "}
                    <a href="#" className="hover:underline">
                      {group.name}
                    </a>
                  </h3>

                  <p className="line-clamp-2 text-sm text-gray-700">
                    No. of Students {group.max_students}
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 px-3 py-1.5 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </strong>
              </div>
            </div>
          ))}
        </div>
      </article>

<form
  action="#"
  onSubmit={handleSubmit(onSubmit)}
>
      {isDisplayed &&
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-left sm:ml-4 sm:mt-0 w-1/2 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Set Up a new group
                    </h3>
                   
                  </div>
                  <div className="mt-3 w-1/2 sm:ml-4 sm:mt-0 sm:text-right">
                    <button
                     onClick={()=>{
                      toggleDisplay();
                    }}
                     type="submit"
                     >

<svg
                   
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth="3"
                   stroke="black"
                   className="size-6 inline font-black mr-4"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="m4.5 12.75 6 6 9-13.5"
                   />
                 </svg>

                     </button>
                   
                    <svg
                    onClick={toggleDisplay}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="black"
                      className="size-6 inline text-black-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
                
              <div className="my-2 border-t border-gray-300"></div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
<label
  htmlFor="GroupName"
  className="relative block w-full rounded-md border border-gray-200 shadow-sm  focus-within:ring-1"
>
  <input
    type="text"
    id="GroupName"
    className="peer py-2 w-1/4 border-none bg-red-100 placeholder-transparent focus:border-transparent focus:outline-none
     focus:ring-0"
    placeholder="GroupName"
    {...register("name", {
      required: "Group Name is required is required",
    })}
  />
  <span
    className="pointer-events-none  absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs
     text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm 
     peer-focus:top-0 peer-focus:text-xs"
  >
    Group Name
  </span>
</label>
        </div> 
        {errors?.name && (
          <span className="validation-message">
          {String(errors?.name.message)}
          </span>
        )}     
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

              
              <select
              multiple={true}
              id="HeadlineAct"
              onChange={()=> handleChange(value)}
              className="mt-1.5 w-full bg-red-100 rounded-lg border-gray-300 text-gray-700 sm:text-sm peer p-3  border-none focus:border-transparent focus:outline-none
               focus:ring-0"
               {...register("students", {
                required: "students are required",
              })}
            >
              <option value="">List Students</option>
              {studentsList.map((student : StudentsList) =>
              <option key={student.id} value={student.id}>{student.first_name} {student.last_name}</option>
              
            )}
             </select>      
</div>
{errors?.students && (
          <span className="validation-message">
          {String(errors?.students.message)}
          </span>
        )}     
              </div>
            </div>
            
          </div>
        </div>
      }
      </form>
    </>
  );
}
