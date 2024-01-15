
import Nav from "@/components/nav";
import TasksCard from "@/components/taskCard";
import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";
import Link from "next/link";
import { Edit, Trash2 } from "react-feather";

async function loadTasks() {
  connectDB();
  const tasks = await Task.find();

  return tasks;
}

async function Home() {
 
  const tasks = await loadTasks();
  return (
    <>
      <div className=" flex flex-col gap-3">
        <Nav />
        <div className="relative overflow-x-auto container pt-8  ">
          <table className="w-full text-sm text-left rtl:text-right   ">
            <thead className="bg-[#001e2b] text-white ">
              <tr className=" text-center   font-bold ">
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  full name
                </th>
                <th scope="col" className="px-6 py-3">
                  job
                </th>
                <th scope="col" className="px-6 py-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#00ed64]">
              {tasks.map((task,index) => (
                <tr key={index}  className=" text-center  ">           
                <td scope="row" className="px-6 py-4  text-base font-extrabold">{index+1}</td>
                <td className="py-6 px-4 whitespace-nowrap">{task.title}</td>
                <td className="py-6 px-4 whitespace-nowrap">{task.description}</td>
                <td className="py-6 px-4 flex gap-4 items-center justify-center">
              
                <Link href={`/tasks/${task._id}`}><Edit size={30} className="  stroke-blue-600"/></Link>
                
                </td>
            </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Home;
