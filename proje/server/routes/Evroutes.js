const routes = require('express').Router();
const evcontroller =  require('../controllers/evController');

routes.get('/ev.ejs',evcontroller.evpage);
routes.post('/ev.ejs',evcontroller.evpost);
routes.delete('/ev.ejs/:id',evcontroller.evpostdelete);
routes.post('/ev.ejs/:id',evcontroller.evpostupdate);
routes.get('/ev/:id',evcontroller.evfind);

//ev tür
routes.get('/evtur.ejs',evcontroller.evtur);
routes.post('/evtur.ejs',evcontroller.evturpost);
routes.delete('/evtur/:id',evcontroller.evturdeletepost);
routes.post('/evtur/:id',evcontroller.evturpostupdate);
routes.get('/ev/evtur/:id',evcontroller.evturfind);


module.exports = routes;

