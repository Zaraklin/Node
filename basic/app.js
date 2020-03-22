// const express = require("express");
// const app = express();

// app.get("/",(req,res) => {
//     res.send("I'm alive!");
// });

// app.listen(3000);

// const fs = require("fs");
// const filename = "target.txt"
// // fs.watch(filename, () => console.log("Changes were made!"));
// fs.readFile(filename, (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// console.log("Finished..?");

const fs = require("fs");
const filename = "target.txt"

const data = fs.readFileSync(filename);
console.log(data.toString());
console.log("Finished..?");