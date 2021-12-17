const routes = require('express').Router();
const kiyafetcontroller = require('../controllers/kiyafetController');

routes.get('/kiyafet.ejs',kiyafetcontroller.kiyafetpage);
routes.post('/kiyafet.ejs',kiyafetcontroller.kiyafetpost);
routes.delete('/kiyafet.ejs/:id',kiyafetcontroller.kiyafetpostdelete);
routes.post('/kiyafet.ejs/:id',kiyafetcontroller.kategoripostupdate);
routes.get('/kiyafet/:id',kiyafetcontroller.kiyafetfind);

// kategori
routes.get('/kategori.ejs',kiyafetcontroller.kategori);
routes.post('/kategori.ejs',kiyafetcontroller.kategoripost);
routes.delete('/kategori/:id',kiyafetcontroller.kategoripostdelete);
routes.post('/kategori/:id',kiyafetcontroller.kategoripostupdate);
routes.get('/kiyafet/kategori/:id',kiyafetcontroller.kiyafetkategorifind);

//beden
routes.get('/beden.ejs',kiyafetcontroller.beden);
routes.post('/beden.ejs',kiyafetcontroller.bedenpost);
routes.delete('/beden/:id',kiyafetcontroller.bedenpostdelete);
routes.post('/beden/:id',kiyafetcontroller.bedenpostupdate);
routes.get('/kiyafet/beden/:id',kiyafetcontroller.kiyafetbedenfind);



module.exports = routes;