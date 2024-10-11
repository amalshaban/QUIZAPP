import { useEffect, useState } from "react";
import axios from "axios";
import pic from "../../../../assets/images/img.png";
import user from "../../../../assets/images/userimg.png";
interface upcomingQuizes {
  _id: string;
  code: string;
  title: string;
  description: string;
  createdAt: Date;
  participants: number;
  status: string;
}
interface topStudents {
  _id: string;
  first_name: string;
  last_name: string;
  status: string;
  __v: number;
  group: {
  name: string;
  status: string;
  };
};

export default function Dashboard() {
  const [firstFiveIncoming, setFirstFiveIncoming] = useState<upcomingQuizes>();
  const getFirstFiveIncoming = async () => {
    try {
      const response = await axios<upcomingQuizes>(
        "https://upskilling-egypt.com:3005/api/quiz",
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      setFirstFiveIncoming(response.data);
      console.log(firstFiveIncoming);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFirstFiveIncoming();
    return () => {};
  }, []);

  const [top5students, setTop5students] = useState<topStudents>();
  const getTop5students = async () => {
    try {
      const response = await axios<topStudents>(
        "https://upskilling-egypt.com:3005/api/student",
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      setTop5students(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTop5students();
    return () => {};
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-stretch lg:gap-8">
        <div className="h-32  items-stretch rounded-lg">
          <article className="rounded-xl p-2 border-2 border-gray-100 bg-white">
            <h1 className="font-bold py-4">Upcomming 5 quizes</h1>

            {firstFiveIncoming?.map((quizeslist: upcomingQuizes) => (
              <div className="rounded-xl my-1 p-1 border-2 border-gray-100 flex items-stretch gap-4 sm:p-6 lg:p-8">
                <a href="#" className=" shrink-0">
                  <img
                    alt=""
                    src={pic}
                    className="size-18 rounded-lg object-cover"
                  />
                </a>

                <div className="w-full">
                  <h3 className="font-medium sm:text-lg">
                    <a href="#" className="hover:underline">
                      {quizeslist.title}
                    </a>
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-700">
                    {quizeslist.description}
                  </p>
                  <div className="mt-2 flex justify-between w-full ">
                    <div className="">
                      <p className=" font-bold">
                        No. of student’s enrolled:
                        <a
                          href="#"
                          className="font-medium underline hover:text-gray-700"
                        >
                          {" "}
                          {quizeslist.participants}{" "}
                        </a>
                      </p>
                    </div>

                    <div className="">
                      <strong className="font-bold gap-1  text-green">
                        <span className="text-[10px]  font-2xl sm:text-xs">
                          {quizeslist.status}
                        </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="green"
                          className="size-6 inline"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
        <div className="h-32 rounded-lg bg-gray-200">
         
          <article className="rounded-xl p-2 border-2 border-gray-100 bg-white">
            <h1 className="font-bold py-4">Top 5 Students</h1>

            {top5students?.map((studentsList: topStudents) => (
              <div className="rounded-xl my-1 p-1 border-2 border-gray-100 flex items-stretch gap-4 sm:p-6 lg:p-8">
                <a href="#" className=" shrink-0">
                  <img
                    alt=""
                    src={user}
                    className="size-18 rounded-lg object-cover"
                  />
                </a>

                <div className="w-full">
                  <h3 className="font-medium sm:text-lg">
                    <a href="#" className="hover:underline">
                      {studentsList.first_name} {studentsList.last_name}
                    </a>
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-700">
                    {studentsList.group.name}
                  </p>
                  <div className="mt-2 flex justify-between w-full ">
                    <div className="">
                      <p className="">
                        Average score:
                        <a
                          href="#"
                          className="font-small underline hover:text-gray-700"
                        >
                          {" "}
                          {studentsList.__v}{" "}
                        </a>
                        | Status :
                        <a
                          href="#"
                          className="font-small underline hover:text-gray-700"
                        >
                          {"     "}
                          {studentsList.status}{"        "}
                        </a>
                      </p>
                     
                    </div>

                    <div className="">
                      <strong className="font-bold gap-1  text-green">
                     
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="black"
                          className="size-6 inline"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
