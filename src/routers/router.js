const express = require("express")
const router = new express.Router() 
const Student= require("../model/students")
//create a neww student's data
router.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{

        res.status(400).send(e)
    })
    
})
router.get("/students",async(req,res)=>{
    try{
       const studentsData=await Student.find();
       res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})
router.get("/students/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await Student.findById(_id);
        res.send(studentData);
     }catch(e){
         res.send(e);
     }
})
router.patch("/students/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedStudents = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updatedStudents);
     }catch(e){
         res.status(404).send(e);
     }
})
router.delete("/students/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedStudents = await Student.findByIdAndDelete(_id);
        res.send(updatedStudents);
     }catch(e){
         res.status(404).send(e);
     }
})
module.exports = router;