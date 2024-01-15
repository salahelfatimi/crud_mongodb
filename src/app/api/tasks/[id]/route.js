import Task from "@/models/Task";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

// get data by id from mongodb
export async function GET(request,{ params }) {
  try {
    connectDB();
    const taskFind = await Task.findById(params.id);
    if (!taskFind)
      return NextResponse.json(
        {
          message: "Task not found ",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(taskFind);
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const updateTask = await Task.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(updateTask);
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 400,
    });
  }
}

export async function DELETE(request,{ params }) {
  try {
    const deleteById = await Task.findByIdAndDelete(params.id);
    if (!deleteById)
      return NextResponse.json(
        { message: "Task not found" },
        {
          status: 404,
        }
      );
    return NextResponse.json(deleteById);
  } catch (err) {
    return NextResponse.json(err.message, {
      status: 400,
    });
  }
}
