import axios from "axios";
import React, { useEffect, useState } from "react";

interface groupList  {
  max_students: number;
  name: string;
};
export default function Groups() {

  const [groupsList, setGroupsList] =  useState <groupList>();
const getGroupsList = async ()=>{
  try {
    const response = await axios<groupList>('https://upskilling-egypt.com:3005/api/group', {
      headers: { Authorization: `Bearer ${localStorage.token}` } ,
    });
    setGroupsList(response.data);
  
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  getGroupsList();
return () => {
}
}, []);


  return (<>
   <article className="rounded-xl p-2 border-2 border-gray-100 bg-white">
    <h1>Groups List</h1>

      {groupsList?.map((group: groupList)=>
        <div className="">
        <div className="flex items-stretch gap-4 p-4 sm:p-6 lg:p-8">   
          <div>
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline">{group.name}</a>
            </h3>
      
            <p className="line-clamp-2 text-sm text-gray-700">
             {group.max_students}
            </p>
      
          
          </div>
        </div>
      
        <div className="flex justify-end">
          <strong
            className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
    
        
          </strong>
        </div>
          </div>
      )}
    

    </article>
  </>);
}
