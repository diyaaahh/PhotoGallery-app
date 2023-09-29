const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UploadRoute = require('./routes/UploadRoute');

require('dotenv').config()

const app =express()

app.use(express.json())
app.use(cors())
app.use(express.static("public")) // express is hosting public folder

mongoose.connect('mongodb://0.0.0.0:27017/PhotoGallery',{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to db!"))
.catch(console.error);

const PORT =process.env.PORT || 5000;
app.use(UploadRoute);

app.get("/", (req,res)=>[
    res.send("HI!!!")
])

app.listen(PORT , () =>{
    console.log(`server strted at port: ${PORT}`);
});