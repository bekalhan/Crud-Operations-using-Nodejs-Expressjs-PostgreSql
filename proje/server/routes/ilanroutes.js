const routes = require('express').Router();
const { route } = require('express/lib/application');
const { home } = require('nodemon/lib/utils');
const ilancontroller = require('../controllers/ilanController');

// İLAN ROUTES
routes.get('/ilan.ejs',ilancontroller.ilan);
routes.post('/ilan.ejs',ilancontroller.ilanpost);
routes.delete('/:id',ilancontroller.ilandeletepost);
routes.post('/:id',ilancontroller.ilanpostupdate);
routes.get('/ilan.ejs/:id',ilancontroller.ilanfind);




module.exports = routes;