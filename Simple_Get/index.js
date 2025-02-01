let express=require("express")
let app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("you req me on /path")
})
app.get("/login",(req,res)=>{
    console.log(req.url)
    res.send("you req me on /login path")
})
app.listen(5000,()=>{
    console.log("server started to visit url:http://localhost:5000")
})