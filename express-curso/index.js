/* const http = require("http");

const server = http.createServer((rep, res) => {
  res.status = 200;
  res.setHeader("contenido-tipo", "texto/plain");
  res.end("hola mundo");
});

server.listen(3000, () => {
  console.log("server en puerto 3000");
}); */










//aquiu estamos creando un servidor con express
//internamente usa el modulo http

const express= require('express')
const send = require('send')
const morgan= require('morgan')








//el milway es un manejador de peticiones y funciona para cualquier ruta que creemos
/* function logger(req,res,next) {
console.log('Route received:'+ req.protocol+'://'+ req.get('host')+ req.originalUrl)
next()
  
} */







const app =express()
//esto es para qie exress pueda entender los objetos js
app.use(express.json())
//app ahora seria nuestro servidor
//get: nuestro navegador hace una peticion al servidor a traves del metodo get

//setting
app.set('appNombre','tutorialExpress')
app.set('view engine','ejs')






//moddwares
/* app.use(logger) */
app.use(morgan('dev'))
app.all('/user',(req,res,next)=>{
    console.log('por aqui paso')
next()

})




/* app.get('/', (req,res)=>{
   const data= [{name:'jose'},{name:'luis'},{name:'loc0'}]
     res.render(index.ejs,{personas: data}) 
    res.render('index.js') 
})*/

app.get('/user',(req,res)=>{
   /*  res.send('cameron') */
//ahora vamos a usar json par especificar que vamos a devolver un objeto js
res.json({
name:'cameron',
id:1,
alias:'ariel'

})












})
//vamos a crear otra ruta
app.delete('/user/:userid',(req,res)=>{
    res.send('user:'+  req.params.userid +'ha sido eliminado')
})

app.put('/user/:id',(req,res)=>{
    //recibimos un cuerpo
    console.log(req.body)
    res.send('user:'+  req.params.id +'ha sido actualizado')
   
})

app.post('/user/:id',(req,res)=>{
    console.log(req.body)
    console.log(req.params)
    res.send('<h1>peticion post recibida</h1>')
})

app.use(express.static('public'))




app.listen(5000,()=>{
    console.log(app.get('appNombre'))
    console.log('server on port 5000')
})