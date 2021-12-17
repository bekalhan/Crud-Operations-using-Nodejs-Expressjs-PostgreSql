const { response } = require('express');
const db = require('../models/db');


// ayakkabi
exports.ayakkabipage = async (req,res)=>
{
    db.query('select * from "AYAKKABİ"',async (err,res2)=>
    {
      res.render('ayakkabi',{shoes:res2.rows});
    });
}

exports.ayakkabipost = async (req,res)=>
{
    console.log(req.body);
    db.query('insert into "AYAKKABİ" (ilan_id,numara,renk,firma_id) values ($1,$2,$3,$4)',[req.body.id,req.body.numara,req.body.renk,req.body.firma_id])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('ayakkabi.ejs');
}

exports.ayakkabipostdelete = async (req,res)=>
{
    console.log("adssa"+req.body.id);
  try{
      db.query('delete from "AYAKKABİ" where ilan_id=$1',[req.params.id]);
  }
  catch
  {
      res.status(400).json({mesaj:"Bir hata oluştu"});
  }
  res.redirect('ayakkabi.ejs');
}

exports.ayakkabipostupdate = async (req,res)=>
{
    console.log(req.body);
    console.log("aaaa");
    try
    {
        db.query('UPDATE "AYAKKABİ" SET ilan_id=$1,numara=$2,renk=$3,firma_id=$4 where ilan_id = $1',[req.body.id2,req.body.numara2,req.body.renk2,req.body.firma_id2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('ayakkabi.ejs');
}

exports.ayakkabifind = async (req,res)=>
{
    console.log("ayakkabi find");
    console.log("id"+req.params.id)
    const shoe = db.query('select * from "AYAKKABİ" where ilan_id=$1',[req.params.id]);
    console.log((await shoe).rows)
    res.json({bulunanayakkabı : (await shoe).rows});
}


//  ayakkabi marka
exports.ayakfirma = async (req,res)=>
{
    db.query('select * from "FİRMA"',async (err,res2)=>
    {
      res.render('ayakkabifirma',{shoesfactory:res2.rows});
    });
}
exports.ayakkabifirmapost = async (req,res)=>
{
    console.log(req.body);
    db.query('insert into "FİRMA" (firma_id,firma_ad,firma_yonetici) values ($1,$2,$3)',[req.body.id,req.body.firma_ad,req.body.yönetici])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('ayakkabifirma.ejs');
}

exports.ayakkabifirmapostdelete = async (req,res)=>
{
    console.log("adssa"+req.body.id);
  try{
      db.query('delete from "FİRMA" where firma_id=$1',[req.params.id]);
  }
  catch
  {
      res.status(400).json({mesaj:"Bir hata oluştu"});
  }
  res.redirect('ayakkabifirma.ejs');
}

exports.ayakkabifirmapostupdate = async (req,res)=>
{
    console.log(req.body);
    console.log("aaaa");
    try
    {
        db.query('UPDATE "FİRMA" SET firma_id=$1,firma_ad=$2,firma_yonetici=$3 where firma_id = $1',[req.body.id2,req.body.firma_ad2,req.body.yönetici2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('ayakkabifirma.ejs');
}

exports.ayakkabifirmafind = async (req,res)=>
{
    console.log("ayakkabi firma find");
    console.log("id"+req.params.id)
    const firma = db.query('select * from "FİRMA" where firma_id=$1',[req.params.id]);
    console.log((await firma).rows)
    res.json({bulunanayakkabı : (await firma).rows});
}



