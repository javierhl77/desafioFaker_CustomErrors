//mock: 

const express = require("express");
const app = express();

const PUERTO = 8080;

const compression = require("express-compression");

const userRouter = require("./routes/usuario.router.js");
const ManejadorErrores = require("./middlewares/error.js")


//middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(ManejadorErrores);

//app.use("/api/usuarios", userRouter);

app.use("/", userRouter);

/* app.get("/",(req,res) => {
  let string = ("hola coders,somos programadores y no sabemos arreglar impresoras")
  for (let i = 0; i < 5e4; i++) {
    string += "hola coders,somos programadores y no sabemos arreglar impresoras ";
  }
  res.send(string);


}) */



app.listen(PUERTO, () =>{
    console.log(`escuchando en el puerto:${PUERTO}`)
})

//sin compresion 3,3mb
//con compression 11,4 kb