"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Edit, Trash2 } from "react-feather";

export default  function TasksCard({task,index}) {
  const router = useRouter()
  const handleDelete= async (id)=>{
    const shouldDelete = window.confirm(`Are you sure you want to delete this task? ID: ${id}`);

    if (shouldDelete) {
      try {
        const res = await fetch(`/api/tasks/${id}`,{
          method:"DELETE",
        })
        router.push('/')
        router.refresh()

      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <tr  className=" text-center  ">           
      <td scope="row" className="px-6 py-4  text-base font-extrabold">{index+1}</td>
      <td className="py-6 px-4 whitespace-nowrap">{task.title}</td>
      <td className="py-6 px-4 whitespace-nowrap">{task.description}</td>
      <td className="py-6 px-4 flex gap-4 items-center justify-center">
    
      <Link href={`/tasks/${task._id}`}><Edit size={30} className="  stroke-blue-600"/></Link>
      <button onClick={()=>handleDelete(task._id) }><Trash2 size={30} className="  stroke-red-600" /></button>
      </td>
  </tr>

       
  );
}
