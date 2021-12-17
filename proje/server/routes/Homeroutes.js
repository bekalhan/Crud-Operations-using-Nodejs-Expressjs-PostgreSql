const routes = require('express').Router();
const { route } = require('express/lib/application');
const { home } = require('nodemon/lib/utils');
const homecontroller = require('../controllers/HomeController');

routes.get('/',homecontroller.homepage);

//İNDEX ROUTER
routes.post('/index.ejs',homecontroller.indexpost);
routes.delete('/:id',homecontroller.indexpostdelete);
routes.get('/index.ejs',homecontroller.index);
routes.post('/:id',homecontroller.indexpostupdata);
routes.get('/index.ejs/:id',homecontroller.indexfind);


module.exports = routes;