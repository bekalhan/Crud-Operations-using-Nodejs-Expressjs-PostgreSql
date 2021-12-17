const { response } = require('express');
const db = require('../models/db');

require('../models/db');

exports.homepage = async (req,res) =>
{
    console.log("homepage");
    res.render('index');
};


exports.index = async (req,res)=>
{
    console.log("index")
   db.query('select * from "KİSİ"',async (err,res2)=>
  {
    res.render('index',{persons:res2.rows});
  });
}

exports.indexpost = async (req,res)=>
{
    console.log("index post")
    db.query('insert into "KİSİ" (kisi_id,ad,soyad,kullanici_adi,sifre) values ($1,$2,$3,$4,$5)',[req.body.id,req.body.ad,req.body.soyad,req.body.kullaniciadi,req.body.sifre])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('index.ejs');
}

exports.indexpostdelete = async (req,res)=>
{
    console.log("index post delete");
    console.log(req.params.id);
    try{
        db.query('delete from "KİSİ" where kisi_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('index.ejs');
}

exports.indexpostupdata = async (req,res)=>
{
   console.log("index post update")
    try
    {
        db.query('UPDATE "KİSİ" SET kisi_id=$1,ad=$2,soyad=$3,kullanici_adi=$4,sifre=$5 where kisi_id = $1',[req.body.id2,req.body.ad2,req.body.soyad2,req.body.kullaniciadi2,req.body.sifre2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('index.ejs');

}

exports.indexfind = async (req,res)=>
{
    console.log("index find");
    console.log("id"+req.params.id)
    const person = db.query('select * from "KİSİ" where kisi_id=$1',[req.params.id]);
    console.log((await person).rows)
    res.json({bulunankisi : (await person).rows});
    
}





exports.searchhome = async (req,res)=>
{
    console.log("searh home");
    const person = db.query('select * from "KİSİ" where kisi_id=$1',[req.params.id]);
    res.json({mesaj :"das"});
}

// exports.searchhomepost = async (req,res)=>
// {
//     console.log("searc home post");
//     try
//     {
//     const person = db.query('select * from "KİSİ" where kisi_id=$1',[req.params.id]);
//     console.log("başarılı");
//     res.status(400).json({mesaj :"başarılı"});
//     }
//     catch
//     {
//         res.status(300).json({mesaj:"başarısız"});
//     }
// }


 






