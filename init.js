const mongoose=require("mongoose");
const Chat=require("./models/chat");

main()
.then(()=>{
    console.log("connection is successfull");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const allChats = [
    {
      from: "Alice",
      to: "Bob",
      message: "Hey, how are you?",
      send_At: new Date("2024-11-20T14:30:00Z")
    },
    {
      from: "Charlie",
      to: "Diana",
      message: "Did you complete the assignment?",
      send_At: new Date("2024-11-22T09:15:00Z")
    },
    {
      from: "Eve",
      to: "Frank",
      message: "Let's meet tomorrow.",
      send_At: new Date("2024-11-18T17:45:00Z")
    },
    {
      from: "Grace",
      to: "Hank",
      message: "Happy Birthday, Hank!",
      send_At: new Date("2024-11-27T00:00:00Z")
    },
    {
      from: "Ivy",
      to: "Jack",
      message: "Can you help me with this bug?",
      send_At: new Date("2024-11-25T12:00:00Z")
    },
    {
      from: "Karen",
      to: "Leo",
      message: "Let's catch up for lunch.",
      send_At: new Date("2024-11-21T13:30:00Z")
    },
    {
      from: "Mona",
      to: "Nate",
      message: "Did you watch the match yesterday?",
      send_At: new Date("2024-11-26T18:00:00Z")
    },
    {
      from: "Olivia",
      to: "Paul",
      message: "Good luck with your presentation!",
      send_At: new Date("2024-11-23T10:00:00Z")
    }
  ];

  Chat.insertMany(allChats);
