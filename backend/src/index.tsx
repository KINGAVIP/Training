// console.log("Hello avi here,How are your we have started nodemon")

// const addNumber=(a:number,b:number):Number=>{
//     return a * b
// }
// console.log(addNumber(2,3));
import express, {Express, Request, Response } from "express";
const port=3000
const app:Express=express()
app.get("/",(req:Request,res:Response)=>{
    res.send("Hello from express by avi Pruthi from India hown are you");
});
app.listen(port,()=>{
    console.log("Listen on port 8000 by avi pruthi")
})