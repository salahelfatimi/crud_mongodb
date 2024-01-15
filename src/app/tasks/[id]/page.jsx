"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditeForm(){

    const param=useParams()
    const router=useRouter()
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    });
   
    const getTask = async ()=>{
        const res = await fetch(`/api/tasks/${param.id}`)
        const data = await res.json()
        setNewTask({
            title:data.title,
            description:data.description
        })

    }
    useEffect(()=>{
        getTask()
        console.log(newTask)
    },[])
    const handleChange =  (e) => setNewTask({... newTask , [e.target.name]:e.target.value})
    const updateTask = async ()=>{
        try {
             const res = await fetch(`/api/tasks/${param.id}`,{
                 method:"PUT",
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
         await updateTask()
         
     }
    
    return(
        <>
         <form onSubmit={handleSubmit} >
            <div className="flex bg-blue-500 flex-col gap-8  items-center  justify-center h-screen">
            <div className=" w-1/2 flex flex-col gap-8 text-center">
                <span className="  font-bold text-4xl font-serif text-[#001e2b] ">
                    Update you information
                </span>
                <div className="flex flex-col gap-4">
                    <input value={newTask.title}  onChange={handleChange} name="title"    type="text"  placeholder="Your Name" className=" border-[#001e2b] placeholder:font-serif  border-2 rounded-lg p-2" />
                    <input value={newTask.description}  onChange={handleChange}  name="description" type="text"  placeholder=" wath's You Job " className=" placeholder:font-serif border-[#001e2b] border-2 rounded-lg p-2"/>
                    <button  type="submit" className=" bg-[#001e2b] p-2 hover:bg-blue-500  hover:text-white duration-500 border-4 border-[#001e2b] text-white rounded-lg text-xl font-semibold" href="/">Update</button>
                    <Link href="/" className=" bg-red-500 p-2 hover:bg-blue-500  hover:text-white duration-500 border-4 border-red-500 text-white rounded-lg text-xl font-semibold"><button   >Cancel</button></Link>

                </div>
            </div>
           </div>
        </form>
        </>
    )
}