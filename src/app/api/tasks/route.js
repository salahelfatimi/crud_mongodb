import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";


// get all data in mongodb database
export async function GET() {
  connectDB();
  const tasks = await Task.find();
  return tasks;
  
}



// insert into mongodb data
export async function POST(request) {
  try {
    const data = await request.json();
    const newTask = new Task(data);
    const savedTask = await newTask.save();
    return NextResponse.json({
      message: "create  ......",
      data : savedTask
    });
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 400,
    });
  }
}
