require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {userModel, cyclepathModel, muralModel, wastelandModel, watercourseModel, wetlandModel, wifiModel} = require("./model");

const app = express(); 
const PORT = process.env.PORT || 3001;

//DB Connect
mongoose.connect(
    "mongodb+srv://natkwok902:" +
    process.env.MONGODB_PWD +
    "@cluster0.wyuuacn.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true } 
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//REST APIs
app.use(cors());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

// Test Status 
app.get("/status", (req, res) => { 
    const status = {
        'Status': 'Running'
    }; 

    res.send(status);
}); 

//Create Point USER INPUT
// app.post("/points/create", (req, res) => { 
//     const lat = request.body.lat;
//     const long = request.body.long;

//     res.send(lat);
//     res.send(long);
// }); 


//Read Points
app.get("/murals", async(req, res) => { 
    const point = await muralModel.find();
    res.send(point);
}); 

app.get("/cyclepaths", async(req, res) => { 
    const point = await cyclepathModel.find();
    res.send(point);
}); 

app.get("/wifi", async(req, res) => { 
    const point = await wifiModel.find();
    res.send(point);
}); 

//Read Points
app.get("/murals/:id", (req, res) => { 

    res.send('Get one mural by id');
}); 

//Update Point
app.patch("/murals/:id", (req, res) => { 

    res.send('Update an existing mural');
}); 

//Delete Point
app.delete("/murals/:id", (req, res) => { 

    res.send('Delete an existing mural');
}); 



//Create Users
app.post("/users/create", async(req, res) => { 

        const user = {
        firstname: 'John',
        name: 'Doe',
        pass: '12345'
      };
      await userModel.create(user);
      res.send(user);

          // const user = {
    //     username: username,
    //     password: password,
    //   };
    //   await userModel.create(user);
    //   res.send(user);
}); 

//Read Users
app.get("/users", async(req, res) => { 

    const user = await userModel.find();
    res.send(user);
}); 