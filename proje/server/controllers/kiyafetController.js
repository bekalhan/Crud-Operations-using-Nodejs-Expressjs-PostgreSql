const { response } = require('express');
const db = require('../models/db');

exports.kiyafetpage = async (req,res)=>
{
    console.log("kiyafet page");
    db.query('select * from "KİYAFET"',async (err,res2)=>
    {
      res.render('kiyafet',{dress:res2.rows});
    });
}

exports.kiyafetpost = async (req,res)=>
{
    console.log("kiyafet post");
    db.query('insert into "KİYAFET" (ilan_id,renk,kategori_id,beden_id) values ($1,$2,$3,$4)',[req.body.id,req.body.renk,req.body.kategori_id,req.body.beden_id])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('kiyafet.ejs');
}

exports.kiyafetpostdelete = async (req,res)=>
{
    console.log("kiyafet post delete");
    try{
        db.query('delete from "KİYAFET" where ilan_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('kiyafet.ejs');
}

exports.kiyafetpostupdate = async (req,res)=>
{
    console.log("kiyafet post update");
    try
    {
        db.query('UPDATE "KİYAFET" SET ilan_id=$1,renk=$2,kategori_id=$3,beden_id=$4 where ilan_id = $1',[req.body.id2,req.body.renk2,req.body.kategori_id2,req.post.beden_id2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('kiyafet.ejs');
}

exports.kiyafetfind = async (req,res)=>
{
    console.log("kiyafet find");
    console.log("id"+req.params.id)
    const cloth = db.query('select * from "KİYAFET" where ilan_id=$1',[req.params.id]);
    console.log((await cloth).rows)
    res.json({bulunankiyafet : (await cloth).rows});
}

//  kategori

exports.kategori = async(req,res)=>
{
    console.log("kategori")
    db.query('select * from "KİYAFET_KATEGORİ"',async (err,res2)=>
    {
      res.render('kategori',{category:res2.rows});
    });
}

exports.kategoripost = async (req,res)=>
{
    console.log("kategori post");
    db.query('insert into "KİYAFET_KATEGORİ" (kategori_id,kategori_tanim,kategori_stok) values ($1,$2,$3)',[req.body.id,req.body.kategori,req.body.stok])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('kategori.ejs');
}

exports.kategoripostdelete = async (req,res)=>
{
    console.log("kategori post delete");
    try{
        db.query('delete from "KİYAFET_KATEGORİ" where kategori_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('kategori.ejs');
}

exports.kategoripostupdate = async (req,res)=>
{
    console.log("kategori post update");
    try
    {
        db.query('UPDATE "KİYAFET_KATEGORİ" SET kategori_id=$1,kategori_tanim=$2,kategori_stok=$3 where kategori_id = $1',[req.body.id2,req.body.kategori2,req.body.stok2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('kategori.ejs');
}

exports.kiyafetkategorifind = async (req,res)=>{
    console.log("kiyafet kategori find");
    console.log("id"+req.params.id)
    const category = db.query('select * from "KİYAFET_KATEGORİ" where kategori_id=$1',[req.params.id]);
    console.log((await category).rows)
    res.json({bulunankategori : (await category).rows});
}

// beden
exports.beden = async (req,res)=>
{
    console.log("beden")
    db.query('select * from "BEDEN"',async (err,res2)=>
    {
      res.render('beden',{size:res2.rows});
    });
}

exports.bedenpost = async (req,res)=>
{
    console.log("beden post");
    db.query('insert into "BEDEN" (beden_id,beden_tanim,beden_stok) values ($1,$2,$3)',[req.body.id,req.body.beden,req.body.stok])
    .then(a=>console.log("kayit basarılı"))
    .catch(a=>a.status(404).json({mesaj:"yanlış bir işlem yaptınız"}));
    res.redirect('beden.ejs');
}

exports.bedenpostdelete = async (req,res)=>
{
    console.log("beden post delete");
    try{
        db.query('delete from "BEDEN" where beden_id=$1',[req.params.id]);
    }
    catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});
    }
    res.redirect('beden.ejs');
}

exports.bedenpostupdate = async (req,res)=>
{
    console.log("beden post update");
    try
    {
        db.query('UPDATE "BEDEN" SET beden_id=$1,beden_tanim=$2,beden_stok=$3 where beden_id = $1',[req.body.id2,req.body.beden2,req.body.stok2]);

    }catch
    {
        res.status(400).json({mesaj:"Bir hata oluştu"});

    }
    res.redirect('beden.ejs');
}

exports.kiyafetbedenfind  = async (req,res)=>
{
    console.log("kiyafet beden find");
    const size = db.query('select * from "BEDEN" where beden_id=$1',[req.params.id]);
    console.log((await size).rows)
    res.json({bulunanbeden : (await size).rows});
}

