const express=require("express");
const path=require("path");
const mongoose=require("mongoose");
const app=express();
const Chat=require("./models/chat");
const methodOverride = require('method-override');

main()
.then(()=>{
    console.log("connection is successfull");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("views engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.listen(3000,()=>{
    console.log("Listening to port 3000");
});

app.get("/",(req,res)=>{
    res.send("Working");
});

//Index Route
app.get("/chats",async(req,res)=>{
    const chat= await Chat.find();
    res.render("allChats.ejs",{chat});
});

//NewChat 
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//InsertNew Chat
app.post("/chats",(req,res)=>{
     let {from,to,message}=req.body;
     const newChat=new Chat({
        from:from,
        to:to,
        message:message,
        send_At:new Date(),
     });
     newChat.save().
     then((res)=>{
        console.log(res);
    })
     .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
   
});

//EditRoute
app.get("/chats/:_id/edit",async(req,res)=>{
    let id=req.params._id;
    let chat= await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

app.put("/chats/:_id",async(req,res)=>{
   let id=req.params._id;
   let {message:Newmsg}=req.body;
   console.log(Newmsg);
   await Chat.findByIdAndUpdate(id,{message:Newmsg},
    {runValidators:true},
        {new:true}
    
   );
   res.redirect("/chats");

});

//deleteRoute
app.delete("/chats/:_id",async(req,res)=>{
   let id=req.params._id;
 
   
     await Chat.deleteOne({_id:id});
    res.redirect("/chats");
});


