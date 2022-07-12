const express = require('express');
const port = 8000;


const app = express();

 

app.listen(port,(err)=>{
  if(err){
    console.log(`Error while running the application on: ${port}`)
  }
  console.log(`the application running on port : ${port}`);
})