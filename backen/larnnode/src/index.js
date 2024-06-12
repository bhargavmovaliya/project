const express = require("express")
const routes = require("./routes/api/v1/index");
const conectDB = require("./db/mongoose");
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json())

conectDB();


app.use("/api/v1", routes)


app.listen(8000, () => {
    console.log("server started at port 8000");
    
// const  arr1=["my","is","and","is"];
// const arr2=["name","amit","city","surat"]





})

