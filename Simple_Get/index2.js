let express=require("express")
let mongoose=require("mongoose")
let persch=new mongoose.Schema({
    _id:String,
    "name":String,
    "place":String,
    "pincode":String,
    phno:String,
    "email":String
})
let pm=mongoose.model("person",persch)
mongoose.connect("mongodb://127.0.0.1:27017/dem").then(()=>{
    console.log("connection ok")
}).catch(()=>{
    console.log("connection not ok")
})
let app=express()
app.use(express.json())
app.post("/add",(req,res)=>{
    let data=new pm(req.body)
    data.save().then(()=>{
        res.send("data stored")
    }).catch(()=>{
        res.send("error in storing data")
    })
})
app.get("/",(req,res)=>{
    pm.find().then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.send("unable to fetch data")
    })
})
app.listen(5000)