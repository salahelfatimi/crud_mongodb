import { Schema, model, models } from "mongoose"

const taskSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "title is requierd"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      require: [true, "description is requierd"],

      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Task || model('Task',taskSchema)
