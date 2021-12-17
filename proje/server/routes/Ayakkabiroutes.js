const routes = require('express').Router();
const ayakkabicontroller = require('../controllers/ayakkabiController');

//  ayakkabi
routes.get('/ayakkabi.ejs',ayakkabicontroller.ayakkabipage);
routes.post('/ayakkabi.ejs',ayakkabicontroller.ayakkabipost);
routes.delete('/ayakkabi.ejs/:id',ayakkabicontroller.ayakkabipostdelete);
routes.post('/ayakkabi.ejs/:id',ayakkabicontroller.ayakkabipostupdate);
routes.get('/ayakkabi/:id',ayakkabicontroller.ayakkabifind);

//ayakkabi firma
routes.get('/ayakkabifirma.ejs',ayakkabicontroller.ayakfirma);
routes.post('/ayakkabifirma.ejs',ayakkabicontroller.ayakkabifirmapost);
routes.delete('/firma/:id',ayakkabicontroller.ayakkabifirmapostdelete);
routes.post('/firma/:id',ayakkabicontroller.ayakkabifirmapostupdate);
routes.get('/ayakkabi/ayakkabifirma/:id',ayakkabicontroller.ayakkabifirmafind);





module.exports = routes;