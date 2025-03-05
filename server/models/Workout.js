import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  workoutName: { type: String, required: true },
  category: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  duration: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now }, // Add date field
});

// Ensure uniqueness per user and date
WorkoutSchema.index({ user: 1, workoutName: 1, date: 1 }, { unique: true });

export default mongoose.model("Workout", WorkoutSchema);
