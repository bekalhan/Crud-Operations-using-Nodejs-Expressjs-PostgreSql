const { response } = require('express');
const db = require('../models/db');


exports.evtur = async (req,res) =>
{
  console.log("ev tur ")
  db.query('select * from "EV_TUR"',async (err,res2)=>
  {
    res.render('evtur',{housetype:res2.rows});
  });
};

exports.evturpost = async (req,res)=>
{
  console.log(req.body);
  console.log("ev tür post");
  db.query('insert into "EV_TUR" (tür_id,tür_tanim) values ($1,$2)',[req.body.id,req.body.tanim])
  .then(a=>console.log("kayit basarılı"))
  .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
  res.redirect('evtur.ejs');
}

exports.evturdeletepost = async (req,res)=>
{
  console.log("ev tür delete post");
  try{
      db.query('delete from "EV_TUR" where tür_id=$1',[req.params.id]);
  }
  catch
  {
      res.status(400).json({mesaj:"Bir hata oluştu"});
  }
  res.redirect('evtur.ejs');
}

exports.evturpostupdate = async (req,res)=>
{
  console.log("ev tur update ")
  console.log(req.body);
    try
    {
        db.query('UPDATE "EV_TUR" SET tür_id=$1,tür_tanim=$2 where tür_id = $1',[req.body.id2,req.body.tanim2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('evtur.ejs');
}

exports.evturfind = async (req,res)=>
{
  console.log("ev tür find");
    console.log("id"+req.params.id)
    const type = db.query('select * from "EV_TUR" where tür_id=$1',[req.params.id]);
    console.log((await type).rows)
    res.json({bulunanevtür : (await type).rows});
}


exports.evpage = async (req,res)=>
{
  console.log("ev ")
  db.query('select * from "EV"',async (err,res2)=>
  {
    res.render('ev',{house:res2.rows});
  });
}

exports.evpost = async ( req,res)=>
{
  console.log("ev post");
  db.query('insert into "EV" (ilan_id,buyukluk,oda_sayisi,tur_id) values ($1,$2,$3,$4)',[req.body.id,req.body.buyukluk,req.body.odasayisi,req.body.turid])
  .then(a=>console.log("kayit basarılı"))
  .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
  res.redirect('ev.ejs');
}

exports.evpostdelete = async (req,res)=>
{
  console.log("ev post delete");
  try{
      db.query('delete from "EV" where ilan_id=$1',[req.params.id]);
  }
  catch
  {
      res.status(400).json({mesaj:"Bir hata oluştu"});
  }
  res.redirect('ev.ejs');
}

exports.evpostupdate = async (req,res)=>
{
  console.log("ev post update");
    try
    {
        db.query('UPDATE "EV" SET ilan_id=$1,buyukluk=$2,oda_sayisi=$3,tur_id=$4 where ilan_id = $1',[req.body.id2,req.body.buyukluk2,req.body.odasayisi2,req.body.turid2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('ev.ejs');
}

exports.evfind = async (req,res)=>
{
  console.log("ev find");
    console.log("id"+req.params.id)
    const home = db.query('select * from "EV" where ilan_id=$1',[req.params.id]);
    console.log((await home).rows)
    res.json({bulunanev : (await home).rows});
}

//search ev 
