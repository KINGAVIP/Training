"use strict";
// console.log("Hello avi here,How are your we have started nodemon")
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const addNumber=(a:number,b:number):Number=>{
//     return a * b
// }
// console.log(addNumber(2,3));
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello from express by avi Pruthi from India hown are you");
});
app.listen(port, () => {
    console.log("Listen on port 8000 by avi pruthi");
});
