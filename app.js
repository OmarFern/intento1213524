let  express = require('express')
let app = express()
let path=require("path")
app.listen(3070,()=>{console.log("paguina --------------------------- http://localhost:3070")})



app.use(express.static("public")) // es lo que me trae el css de la carpeta public y toma las imagenes

app.get("/"               ,(req,res)=> {res.sendFile(path.resolve( "./views/home.html"       ))}); 

app.get("/productos"      ,(req,res)=>{ res.sendFile(path.resolve("./views/productos.html"    ))});

app.get("/compras"        ,(req,res)=> {res.sendFile(path.resolve("./views/compras.html"      ))});

app.get("/registro"       ,(req,res)=> {res.sendFile(path.resolve("./views/registro.html"     ))});

app.get("/login"          ,(req,res)=> {res.sendFile(path.resolve("./views/login.html"        ))});

app.get("/formulario"     ,(req,res)=> {res.sendFile(path.resolve("./views/formulario.html"  ))});

app.get("/home"          ,(req,res)=> {res.sendFile(path.resolve("./views/home.html"       ))}); 
