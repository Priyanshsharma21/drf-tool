"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

const Page = () => {
  const [myDrfs, setMyDrfs] = useState(null);
  const router = useRouter();


  useEffect(() => {
    // Check if "mydrfs" is present in local storage
    const storedData = localStorage.getItem("mydrfs");

    if (storedData) {
      setMyDrfs(JSON.parse(storedData)); // Parse and set the data if it exists
    } else {
      setMyDrfs([]); // Set an empty array if no data found
    }
  }, []);

  const handleRedirect = (id)=>{
    router.push(`/drf/${id}`)
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="mt-4">
        {myDrfs && myDrfs.length > 0 ? (
          <>
            {myDrfs.map((drf,i)=>(
              <div onClick={()=>handleRedirect(drf.id)} key={drf.id} className='text-white drfCard relative cursor-pointer'>
                <div className='absolute top-4 left-4'>{i+1}</div>
                <div>{drf.client}</div>
                <div>{drf.project}</div>
              </div>
            ))}
          </>
        ) : (
          <p className='w-full flex justify-center items-center text-white'>No Data Found</p>
        )}
      </div>
    </main>
  );
};

export default Page;
