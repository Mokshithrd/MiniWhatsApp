const mongoose=require("mongoose");

main()
.then(()=>{
    console.log("connection is successfull");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    message:{
        type:String,

    },
    send_At:{
        type:Date,
        required:true,
    }
});

const Chat= mongoose.model("Chat",chatSchema);

module.exports=Chat;