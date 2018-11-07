const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('.hbs', exphbs({
   extname: '.hbs',
   defaultLayout: 'main'

}));

app.set('view engine', '.hbs');

//home.hbs
app.get('/',(req,res)=>{
    res.render('home', {
    nombre: "Josselyn",
    apellido:"Medina",
    telefono:"99999999",
    direccion:"Casa Maya "})
});

app.listen(8000,()=>{
    console.log('server running in port 8000');
});