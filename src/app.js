//mock: 

const express = require("express");
const app = express();

const PUERTO = 8080;

const userRouter = require("./routes/usuario.router.js");


app.use("/", userRouter);

app.listen(PUERTO, () =>{
    console.log(`escuchando en el puerto:${PUERTO}`)
})