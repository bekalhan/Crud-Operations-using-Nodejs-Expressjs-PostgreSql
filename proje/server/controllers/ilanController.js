const { response } = require('express');
const db = require('../models/db');

require('../models/db');

exports.ilan = async (req,res)=>
{
    db.query('select * from "İLAN"',async (err,res2)=>
    {
      res.render('ilan',{advert:res2.rows});
    });
}

exports.ilanpost = async (req,res)=>
{
    console.log(req.body);
    db.query('insert into "İLAN" (ilan_id,fiyat,yer,kisi_id) values ($1,$2,$3,$4)',[req.body.id,req.body.fiyat,req.body.yer,req.body.kisiid])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('ilan.ejs');
}

exports.ilandeletepost = async (req,res) =>
{
    console.log("ilan post delete");
    console.log(req.body.id);
    try{
        db.query('delete from "İLAN" where ilan_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('ilan.ejs');

}

exports.ilanpostupdate = async (req,res)=>
{
    console.log(req.body);
    try
    {
        db.query('UPDATE "İLAN" SET ilan_id=$1,fiyat=$2,yer=$3,kisi_id=$4 where ilan_id = $1',[req.body.id2,req.body.fiyat2,req.body.yer2,req.body.kisiid2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('ilan.ejs');
}

exports.ilanfind = async (req,res)=>
{
    console.log("ilan find");
    console.log("id"+req.params.id)
    const advert = db.query('select * from "İLAN" where ilan_id=$1',[req.params.id]);
    console.log((await advert).rows)
    res.json({bulunanilan : (await advert).rows});
}


