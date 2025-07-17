import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["student","recruiter"],
        required:true,
    },
    profile:{
        skills:[{type:String}],
        bio:{type:String},
        resume:{type:String},
        resumeOriginName:{type:String},
        profilePhoto:{type:String,default:''},
        company:{type:mongoose.Schema.Types.ObjectId,ref:'Company'}
    }
},{timestamps:true});

export const User = model('User',userSchema);