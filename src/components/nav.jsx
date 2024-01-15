import Link from "next/link";

export default function Nav() {
  return (
    <div className="bg-[#00ed64] ">
      <div className="flex container justify-between items-center    p-6  ">
        <span className="  text-xl font-bold text-white">Crud MongoDB</span>
        <Link href="/tasks/new">
          <span className=" text-lg hover:bg-[#00ed64] border-[#001e2b] border-4  font-bold bg-[#001e2b] duration-500 py-1 px-3 rounded-md text-white">
            Add
          </span>
        </Link>
      </div>
    </div>
  );
}
