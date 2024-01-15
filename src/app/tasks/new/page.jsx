"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Add() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });
  const router=useRouter()
    const handleChange =  (e) => setNewTask({... newTask , [e.target.name]:e.target.value})
    const createTask = async ()=>{
       try {
            const res = await fetch('/api/tasks',{
                method:"POST",
                body:JSON.stringify(newTask),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(res.status==200){
                router.push('/')
                router.refresh()
            }
         
       } catch (error) {
            console.log(error)
       }
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await createTask()
        
    }
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex bg-[#00ed64] flex-col gap-8  items-center  justify-center h-screen">
        <div className=" w-1/2 flex flex-col gap-8 text-center">
          <span className="  font-bold text-4xl font-serif text-[#001e2b] ">
            Add you information
          </span>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              placeholder="Your Name"
              onChange={handleChange}
              className=" border-[#001e2b] placeholder:font-serif  border-2 rounded-lg p-2"
            />
            <input
              type="text"
              name="description"
              placeholder=" wath's You Job "
              onChange={handleChange}
              className=" placeholder:font-serif border-[#001e2b] border-2 rounded-lg p-2"
            />
            <button
              type="submit"
              className=" bg-[#001e2b] p-2 hover:bg-[#00ed64] hover:text-[#001e2b] duration-500 border-4 border-[#001e2b] text-white rounded-lg text-xl font-semibold"
            >
              save
            </button>
            <Link
              href="/"
              className=" bg-red-500 p-2 hover:bg-[#00ed64]  hover:text-red-500 duration-500 border-4 border-red-500 text-white rounded-lg text-xl font-semibold"
            >
              <button>Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
