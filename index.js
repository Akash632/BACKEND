//required modules to be added 

require('dotenv').config();
const express = require('express');
const app = express();
// const cors = require('cors');

//port using env
const PORT = process.env.PORT || 3000;

//cors policy
// app.use(cors());

// a basic route to handle the home request
app.get('/',(req,res)=>{
    res.json({
        message: "Hello World!"
    })
})

// route to get 5 todo items

app.get('/api/v1/todos',(req,res)=>{
    res.json({
        message: "success",
        data : [{
              "userId": 1,
              "id": 1,
              "title": "delectus aut autem",
              "completed": false
            },
            {
              "userId": 1,
              "id": 2,
              "title": "quis ut nam facilis et officia qui",
              "completed": false
            },
            {
              "userId": 1,
              "id": 3,
              "title": "fugiat veniam minus",
              "completed": false
            },
            {
              "userId": 1,
              "id": 4,
              "title": "et porro tempora",
              "completed": true
            },
            {
              "userId": 1,
              "id": 5,
              "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
              "completed": false
            }]
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})