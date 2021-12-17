const routes = require('express').Router();
const { route } = require('express/lib/application');
const { home } = require('nodemon/lib/utils');
const telefoncontroller = require('../controllers/telefonController');

routes.get('/telefon.ejs',telefoncontroller.telefonpage);
routes.post('/telefon.ejs',telefoncontroller.telefonpost);
routes.delete('/telefon.ejs/:id',telefoncontroller.telefondeletepost);
routes.post('/telefon.ejs/:id',telefoncontroller.telefonpostupdate);
routes.get('/telefon/:id',telefoncontroller.telefonfind);

// telefon marka
routes.get('/telefonmarka.ejs',telefoncontroller.telmarka);
routes.post('/telefonmarka.ejs',telefoncontroller.telefonmarkapost);
routes.delete('/telefonmarka/:id',telefoncontroller.telefonmarkapostdelete);
routes.post('/telefonmarka/:id',telefoncontroller.telefonmarkapostupdate);
routes.get('/telefon/marka/:id',telefoncontroller.telefonmarkafind);


// telefon isletim
routes.get('/isletim.ejs',telefoncontroller.isletim);
routes.post('/isletim.ejs',telefoncontroller.isletimpost);
routes.delete('/isletimsis/:id',telefoncontroller.isletimdeletepost);
routes.post('/isletimsis/:id',telefoncontroller.isletimpostupdate);
routes.get('/telefon/isletim/:id',telefoncontroller.telefonisletimfind);




module.exports = routes;