let express=require("express")
let app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("req on home path")
})
app.get("/about",(req,res)=>{
    res.send("req on about")
})
app.get("/search/:data",(req,res)=>{
    res.send(`you are searching for ${req.params.data}`)
})
app.get("/get/:v1/:v2",(req,res)=>{
    res.send(`you are sending data from ${req.params.v1} to ${req.params.v2}`)
})
app.post("/add",(req,res)=>{
    console.log(req.body)
    res.send("data  received")
})
app.listen(5000)