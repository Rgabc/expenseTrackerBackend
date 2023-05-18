const express=require("express")
const app=express();
const PORT=4020;
const db=require("./db")
const cors=require("cors");

app.use(cors())
db.connection.on("connected",(err)=>{
if(err){
    console.log(err)
}
else{console.log("connected to mongoose")}

})
app.use(express.json());
app.use("/expenses",require("./routes/user.js"))


 




















app.listen(PORT,()=>{
    console.log("connected to server")
})
