"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditeForm(){
    const param=useParams()
    const [newjob,setNewjob]=useState('')
    const [newfullName,setNewfullName]=useState('')
    useEffect(()=>{
        console.log(param.id)
    },[])

    return(
        <>
         <form  >
            <div className="flex bg-blue-500 flex-col gap-8  items-center  justify-center h-screen">
            <div className=" w-1/2 flex flex-col gap-8 text-center">
                <span className="  font-bold text-4xl font-serif text-[#001e2b] ">
                    Update you information
                </span>
                <div className="flex flex-col gap-4">
                    <input onChange={(e)=>setNewfullName(e.target.value)} value={newfullName} type="text"  placeholder="Your Name" className=" border-[#001e2b] placeholder:font-serif  border-2 rounded-lg p-2" />
                    <input onChange={(e)=>setNewjob(e.target.value)} value={newjob} type="text"  placeholder=" wath's You Job " className=" placeholder:font-serif border-[#001e2b] border-2 rounded-lg p-2"/>
                    <button type="submit" className=" bg-[#001e2b] p-2 hover:bg-blue-500  hover:text-white duration-500 border-4 border-[#001e2b] text-white rounded-lg text-xl font-semibold" href="/">Update</button>
                    <Link href="/" className=" bg-red-500 p-2 hover:bg-blue-500  hover:text-white duration-500 border-4 border-red-500 text-white rounded-lg text-xl font-semibold"><button   >Cancel</button></Link>

                </div>
            </div>
           </div>
        </form>
        </>
    )
}