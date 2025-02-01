let express=require("express")
let mongoose=require("mongoose")
let empsch=new mongoose.Schema({
    _id:String,
    name:String,
    place:String,
    dept:String,
    sal:String,
    gen:String
})
let em=mongoose.model("emply",empsch)
mongoose.connect("mongodb://127.0.0.1:27017/pani").then(()=>{
    console.log("connection ok")
}).catch(()=>{
    console.log("connection not ok")
})
let app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    em.find().then((data)=>{
        res.send(data)
    }).catch(()=>{
        res.json("msg : error in fetching data")
    })
})
app.get("/search/:id",(req,res)=>{
    //em.find({"_id":req.params.id})
    em.findById({"_id":req.params.id}).then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.send("error in fetching data")
    })
})
app.get("/get/:pr/:val",(req,res)=>{
    em.find({[req.params.pr]:req.params.val}).then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.send("error in fetching data")
    })
})
app.post("/add",(req,res)=>{
    let data=new em(req.body)
    data.save().then(()=>{
        res.send("data stored")
    }).catch(()=>{
        res.send("error in storing data")
    })

    
})
app.listen(5000)