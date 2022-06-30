import mongoose from "mongoose"

const Schema = mongoose.Schema;

const plan = new Schema({
   name: String,
   code: Number,
   date: Date,
   expire: Date
}, {
   timestamps: true,
});

const Plan = mongoose.model("Plan", plan);

export default Plan;