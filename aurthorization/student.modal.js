import mongoose, {Schema} from 'mongoose';
import timestamps from "mongoose-timestamp";

const studentSchema = Schema({
    name:String,
    roll_no:Number,
    s_class:String,
    standard:Number,
    city:String,
})

export const Students = mongoose.model('studentInfo',studentSchema);
