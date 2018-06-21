const express=require("express");
const app=express()
const path=require("path")
const bp =require("body-parser")
const fs =require("fs")

app.use(bp.urlencoded({extended:false}))





app.post("/form",function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var formPath=path.join(__dirname,'form.json');
    var nameEmail=`${name} ${email}`
    
    fs.writeFile(formPath, nameEmail, err => {
        if (err) console.log(err);
        
    })
    
   res.send(nameEmail)

})

app.use(express.static(path.join(__dirname,"public/")));




app.listen(3000,function(){
    console.log("server")
})