const express=require('express')

const app=express()

const path=require('path')

app.use(express.json())

require('dotenv').config()

app.use(express.static(path.join(__dirname,'./dist/To-Do-List')))

const port=process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`Server Working On Port No ${port} ...`);
})