const { urlencoded } = require('express');
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const ejs = require('ejs');
const app = express();
const methodoverride = require('method-override');

app.set('layout','./layout/main');
app.set('view engine','ejs');

//ROUTES
 const routeshome = require('./server/routes/Homeroutes');
 const routesilan = require('./server/routes/ilanroutes');
 const routesev = require('./server/routes/Evroutes');
 const routearaba = require('./server/routes/Arabaroutes');
 const routestelefon = require('./server/routes/Telefonroutes');
 const routesayakkabi = require('./server/routes/Ayakkabiroutes');
 const routeskiyafet = require('./server/routes/Kiyafetroutes');
 const routes = require('./server/routes/Arabaroutes');



 app.set('port', process.env.PORT || 3000);

 app.listen(app.get('port'), ()=>{
     console.log('Server on port ' + app.get('port'));
 });

app.use(urlencoded({extended : true}));

app.use(express.static("public"));
app.use(expressLayout);
app.use(methodoverride('_method'));



app.use('/home',routeshome);
app.use('/ilan',routesilan);
app.use('/ev',routesev);
app.use('/araba',routearaba);
app.use('/telefon',routestelefon);
app.use('/ayakkabi',routesayakkabi);
app.use('/kiyafet',routeskiyafet);
app.use('/ev/evtur',routesev);
app.use('/araba/arabatur',routearaba);
app.use('/araba/arabamodel',routearaba);
app.use('/araba/arabamarka',routearaba);
app.use('/telefon/telefonmarka',routestelefon);
app.use('/telefon/isletimsis',routestelefon);
app.use('/ayakkabi/firma',routesayakkabi);
app.use('/kiyafet/kategori',routeskiyafet);
app.use('/kiyafet/beden',routeskiyafet);

