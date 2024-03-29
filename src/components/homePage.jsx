
import Nav from "@/components/nav";
import TasksCard from "@/components/taskCard";
import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";

 function loadTasks() {
  connectDB();
  const tasks =  Task.find();

  return tasks;
}
async function HomePage() {
    
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
                  <TasksCard id={task._id.toString()} title={task.title} description={task.description} index={index}  key={task._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  export default HomePage;
  