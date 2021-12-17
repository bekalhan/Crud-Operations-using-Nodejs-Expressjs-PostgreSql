const { response } = require('express');
const db = require('../models/db');


//  tel
exports.telefonpage = async (req,res) =>
{
    console.log("telefon page");
    db.query('select * from "TELEFON"',async (err,res2)=>
    {
      res.render('telefon',{phone:res2.rows});
    });
};

exports.telefonpost = async (req,res)  =>
{
    console.log("telefon post");
    db.query('insert into "TELEFON" (ilan_id,depolama,boy,renk,isletim_id,marka_id) values ($1,$2,$3,$4,$5,$6)',[req.body.id,req.body.depolama,req.body.boy,req.body.renk,req.body.isletim,req.body.markaid])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('telefon.ejs');
};

exports.telefondeletepost = async (req,res)=>
{
    console.log("telefon delete post");
    try{
        db.query('delete from "TELEFON" where ilan_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('telefon.ejs');
}

exports.telefonpostupdate = async (req,res)=>
{
    console.log("telefon post update");
    try
    {
        db.query('UPDATE "TELEFON" SET ilan_id=$1,depolama=$2,boy=$3,renk=$4,isletim_id=$5,marka_id=$6 where ilan_id = $1',[req.body.id2,req.body.depolama2,req.body.boy2,req.body.renk2,req.body.isletim2,req.body.markaid2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('telefon.ejs');
}

exports.telefonfind = async (req,res)=>
{
    console.log("telefon find");
    console.log("id"+req.params.id)
    const phone = db.query('select * from "TELEFON" where ilan_id=$1',[req.params.id]);
    console.log((await phone).rows)
    res.json({bulunantelefon : (await phone).rows});
}


// tel marka
exports.telmarka = async (req,res)=>
{
    console.log("tel marka")
    db.query('select * from "TELEFON_MARKA"',async (err,res2)=>
    {
      res.render('telefonmarka',{phonetype:res2.rows});
    });
}

exports.telefonmarkapost = async (req,res)=>
{
    console.log("telefon marka post");
    db.query('insert into "TELEFON_MARKA" (marka_id,marka_tanim,marka_tarih) values ($1,$2,$3)',[req.body.id,req.body.marka,req.body.tarih])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('telefonmarka.ejs');
}

exports.telefonmarkapostdelete = async (req,res)=>
{
    console.log("telefon marka post delete");
    try{
        db.query('delete from "TELEFON_MARKA" where marka_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('telefonmarka.ejs');
}

exports.telefonmarkapostupdate = async (req,res)=>
{
    console.log("telefon marka post update");
    try
    {
        db.query('UPDATE "TELEFON_MARKA" SET marka_id=$1,marka_tanim=$2,marka_tarih=$3 where marka_id = $1',[req.body.id2,req.body.marka2,req.body.tarih2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('telefonmarka.ejs');
}

exports.telefonmarkafind = async (req,res)=>
{
    console.log("telefon marka find");
    console.log("id"+req.params.id)
    const type = db.query('select * from "TELEFON_MARKA" where marka_id=$1',[req.params.id]);
    console.log((await type).rows)
    res.json({bulunanmarka : (await type).rows});
}


//  işletim

exports.isletim = async (req,res)=>
{
    console.log("isletim sistemi")
    db.query('select * from "İSLETİM_SİSTEMİ"',async (err,res2)=>
    {
      res.render('isletim',{isletim:res2.rows});
    });
}

exports.isletimpost = async (req,res)=>
{
    console.log("isletim post");
    db.query('insert into "İSLETİM_SİSTEMİ" (isletim_id,isletim_tanim) values ($1,$2)',[req.body.id,req.body.isletim])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('isletim.ejs');
}

exports.isletimdeletepost = async (req,res)=>
{
    console.log("isletim delete post");
    try{
        db.query('delete from "İSLETİM_SİSTEMİ" where isletim_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('isletim.ejs');
}

exports.isletimpostupdate = async (req,res)=>
{
    console.log("isletim post update");
    try
    {
        db.query('UPDATE "İSLETİM_SİSTEMİ" SET isletim_id=$1,isletim_tanim=$2 where isletim_id = $1',[req.body.id2,req.body.isletim2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('isletim.ejs');
}

exports.telefonisletimfind = async (req,res)=>
{
    console.log("telefon isletims find");
    console.log("id"+req.params.id)
    const isletim = db.query('select * from "İSLETİM_SİSTEMİ" where isletim_id=$1',[req.params.id]);
    console.log((await isletim).rows)
    res.json({bulunansistem : (await isletim).rows});
}

