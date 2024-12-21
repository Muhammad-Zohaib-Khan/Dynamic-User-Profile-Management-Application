import express from 'express';
import user from './module.js';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.post('/create',async (req,res)=>{
    const {name,email,image}=req.body;
    try{
        let created= await user.create({name,email,image})
        res.redirect("http://localhost:5173/read")
    }catch(error){
        console.error("Error Creating User:",error.message)
        res.statusCode(500).send("Internal Server Error")
    }
})

app.get("/read",async (req,res)=>{
    try{
        const findall=await user.find()
        res.send(findall)
    }catch(error){
        console.error("Fetching error:",error.msg)
        res.status(500).send("Internal Server Error")
    }
})
app.get("/delete/:id",async (req,res)=>{
    try{
        const deleteuser= await user.findOneAndDelete({_id:req.params.id})
        res.redirect("http://localhost:5173/read")
    }catch(error){
        console.log("Error deleting User: ",error.message)
        res.status(500).send("Internal Server Error")
    }
})
app.get("/edit/:id", async (req,res)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid ObjectId" });
          }
        let finduser_to_update= await user.findOne({_id:req.params.id})
        if (!finduser_to_update){
            return res.status(404).send({message: "user not found"})
        }
        
        res.send(finduser_to_update)
    }catch(error){
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

app.post("/update/:id", async (req, res) => {
    try{
        const {name,email,image}=req.body
        let update_user = await user.findOneAndUpdate({_id:req.params.id},{name,email,image},{new:true});
        res.redirect("http://localhost:5173/read" )

    }catch(error){
        console.error(error.message)
    }
      });


app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`Server is Running at PORT ${PORT}`);
    }
});