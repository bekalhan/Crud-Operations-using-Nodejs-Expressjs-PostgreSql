const { response } = require('express');
const db = require('../models/db');

exports.arabapage = async (req,res)=>
{
    console.log("araba page");
    db.query('select * from "ARABA"',async (err,res2)=>
    {
      res.render('araba',{car:res2.rows});
    });
};

exports.arabapost = async (req,res)=>
{
    console.log("araba post");
    db.query('insert into "ARABA" (ilan_id,renk,motor_hacim,tür_id,model_id,marka_id) values ($1,$2,$3,$4,$5,$6)',[req.body.id,req.body.renk,req.body.motorhacim,req.body.turid,req.body.modelid,req.body.markaid])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('araba.ejs');
}

exports.arabapostdelete = async (req,res)=>
{
    console.log("araba post delete");
    try{
        db.query('delete from "ARABA" where ilan_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('araba.ejs');
}

exports.arabapostupdate = async (req,res)=>
{
    console.log("araba post update");
    try
    {
        db.query('UPDATE "ARABA" SET ilan_id=$1,renk=$2,motor_hacim=$3,tür_id=$4,model_id=$5,marka_id=$6 where ilan_id = $1',[req.body.id2,req.body.renk2,req.body.motorhacim2,req.body.turid2,req.body.modelid2,req.body.markaid2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('araba.ejs');
}

exports.arabafind = async(req,res)=>
{
    console.log("araba find");
    console.log("id"+req.params.id)
    const car = db.query('select * from "ARABA" where ilan_id=$1',[req.params.id]);
    console.log((await car).rows)
    res.json({bulunanaraba : (await car).rows});
}

//  araba tür
exports.arabatur = async (req,res)=>
{
    console.log("araba tür")
    db.query('select * from "ARABA_TUR"',async (err,res2)=>
    {
      res.render('arabatur',{cartype:res2.rows});
    });
}

exports.arabaturpost = async (req,res)=>
{
    console.log("araba tür post");
    db.query('insert into "ARABA_TUR" (tur_id,tur_tanim) values ($1,$2)',[req.body.id,req.body.turtanim])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('arabatur.ejs');
}

exports.arabaturpostdelete = async (req,res)=>
{
    console.log("araba tür post delete");
    try{
        db.query('delete from "ARABA_TUR" where tur_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('arabatur.ejs');
}

exports.arabaturpostupdate = async (req,res)=>
{
    console.log("araba tür post update");
    try
    {
        db.query('UPDATE "ARABA_TUR" SET tur_id=$1,tur_tanim=$2 where tur_id = $1',[req.body.id2,req.body.turtanim2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('arabatur.ejs');
}

exports.arabaturfind = async (req,res)=>
{
    console.log("araba tür find");
    console.log("id"+req.params.id)
    const type = db.query('select * from "ARABA_TUR" where tur_id=$1',[req.params.id]);
    console.log((await type).rows)
    res.json({bulunanarabatür : (await type).rows});
}

//  arba model
exports.arabamodel = async (req,res)=>
{
    console.log("araba model")
    db.query('select * from "ARABA_MODEL"',async (err,res2)=>
    {
      res.render('arabamodel',{carmodel:res2.rows});
    });
}

exports.arabamodelpost = async (req,res)=>
{
    console.log("araba model post");
    db.query('insert into "ARABA_MODEL" (model_id,model_yil,agirlik,yolcu_sayisi) values ($1,$2,$3,$4)',[req.body.id,req.body.model,req.body.agırlık,req.body.yolcusayisi])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('arabamodel.ejs');
}

exports.arabamodelpostdelete = async (req,res)=>
{
     console.log("araba model post delete");
    try{
        db.query('delete from "ARABA_MODEL" where model_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('arabamodel.ejs');
}

exports.arabamodelpostupdate = async (req,res)=>
{
    console.log("araba model post update");
    try
    {
        db.query('UPDATE "ARABA_MODEL" SET model_id=$1,model_yil=$2,agirlik=$3,yolcu_sayisi=$4 where model_id = $1',[req.body.id2,req.body.model2,req.body.agırlık2,req.body.yolcusayisi2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('arabamodel.ejs');
}


exports.arabamodelfind = async (req,res)=>
{
    console.log("araba model find");
    console.log("id"+req.params.id)
    const model = db.query('select * from "ARABA_MODEL" where model_id=$1',[req.params.id]);
    console.log((await model).rows)
    res.json({bulunanarabamodel : (await model).rows});
}

//  arba marka
exports.arabamarka = async (req,res)=>
{
    console.log("araba marka")
    db.query('select * from "ARABA_MARKA"',async (err,res2)=>
    {
      res.render('arabamarka',{carbrand:res2.rows});
    });
}

exports.arabamarkapost = async (req,res)=>
{
    console.log("araba marka post");
    db.query('insert into "ARABA_MARKA" (marka_id,marka_tanim,marka_üretim_yeri) values ($1,$2,$3)',[req.body.id,req.body.marka,req.body.yer])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('arabamarka.ejs');
}

exports.arabamarkapostdelete = async (req,res)=>
{
    console.log("araba marka post delete");
    try{
        db.query('delete from "ARABA_MARKA" where marka_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('arabamarka.ejs');
}

exports.arabamarkapostupdate = async (req,res)=>
{
    console.log("araba marka post update");
    try
    {
        db.query('UPDATE "ARABA_MARKA" SET marka_id=$1,marka_tanim=$2,marka_üretim_yeri=$3 where marka_id = $1',[req.body.id2,req.body.marka2,req.body.yer2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('arabamarka.ejs');
}

exports.arabamarkafind = async (req,res)=>
{
    console.log("araba marka find");
    console.log("id"+req.params.id)
    const model = db.query('select * from "ARABA_MARKA" where marka_id=$1',[req.params.id]);
    console.log((await marka).rows)
    res.json({bulunanarabamarka : (await marka).rows});
}

