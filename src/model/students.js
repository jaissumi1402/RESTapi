const mongoose=require("mongoose")
const validator = require("validator")

const studentsinfo = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new console.error("Invalid email");
            }
        }

    },
    phone:{
        type:Number,
        min:10,
        unique:true,
        
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const Student = new mongoose.model("Student", studentsinfo);
module.exports=Student