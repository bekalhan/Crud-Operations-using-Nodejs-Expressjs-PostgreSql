const routes = require('express').Router();
const arabacontroller = require('../controllers/arabaController');

//araba
routes.get('/araba.ejs',arabacontroller.arabapage);
routes.post('/araba.ejs',arabacontroller.arabapost);
routes.delete('/araba.ejs/:id',arabacontroller.arabapostdelete);
routes.post('/araba.ejs/:id',arabacontroller.arabapostupdate);
routes.get('/araba.ejs/:id',arabacontroller.arabafind);

// arab tür
routes.get('/arabatur.ejs',arabacontroller.arabatur);
routes.post('/arabatur.ejs',arabacontroller.arabaturpost);
routes.delete('/arabatur/:id',arabacontroller.arabaturpostdelete);
routes.post('/arabatur/:id',arabacontroller.arabaturpostupdate);
routes.get('/araba/arabatur/:id',arabacontroller.arabaturfind);

//araba marka
routes.get('/arabamarka.ejs',arabacontroller.arabamarka);
routes.post('/arabamarka.ejs',arabacontroller.arabamarkapost);
routes.delete('/arabamarka/:id',arabacontroller.arabamarkapostdelete);
routes.post('/arabamarka/:id',arabacontroller.arabamarkapostupdate);
routes.get('/araba/arabamarka/:id',arabacontroller.arabamarkafind);

//araba model
routes.get('/arabamodel.ejs',arabacontroller.arabamodel);
routes.post('/arabamodel.ejs',arabacontroller.arabamodelpost);
routes.delete('/arabamodel/:id',arabacontroller.arabamodelpostdelete);
routes.post('/arabamodel/:id',arabacontroller.arabamodelpostupdate);
routes.get('/araba/arabamodel/:id',arabacontroller.arabamodelfind);



module.exports = routes;