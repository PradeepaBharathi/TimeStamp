
const express = require("express")
const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname,"timeStamps")
const app = express()
///end point
//http://localhost:9000/
app.get("/timestamp",(req,res)=>{
    
    let date= new Date();
    const timeStampDate = `Last Updated :${date.toUTCString().slice(0,-3)}`;
    fs.writeFileSync(`${dirPath}/current-date-time.txt`,timeStampDate,(err)=>{
        if(err){
            res.send({message :" error occured"})
        }
     
    })
    res.sendFile(path.join(dirPath,"current-date-time.txt"))
})


app.listen(9000,()=>{
    console.log("working fine")
})