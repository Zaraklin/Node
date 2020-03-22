const express = require("express");
const app = express();
const router = require("./routes/post")
const morgan = require("morgan")
const safeStringify = require('fast-safe-stringify')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser : true })
.then(() => console.log("db connected!"))

mongoose.connection.on('error', err => {
    console.log(`DB connection error : ${err.message}`)
})

const myOwnMiddle = (req, res, next) => {
    console.log("middleware")
    next()
}

app.use(morgan("combined"))
app.use(myOwnMiddle);
app.use("/", router);

app.listen(3000);