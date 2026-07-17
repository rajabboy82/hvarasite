/* ============================================================
   HVARA — рендер страницы товара tovar.html?id=<id>
   Язык берётся из window.HVARA_LANG ("ru"|"en"|"it").
   Данные — product-details.js, имена/категории — products.js
   ============================================================ */
(function(){
  var LANG = window.HVARA_LANG || 'ru';
  var BASE = /\/(en|it|uz)\//.test(location.pathname) ? '../' : '';

  var UI = {
    ru:{ products:"Продукция", propsT:"Свойства активных веществ", areasT:"Область применения",
         dosageT:"Способ применения и дозы", importantT:"Важная информация",
         download:"Скачать инструкцию", back:"← Назад к каталогу", supplement:"БАД",
         notfound:"Товар не найден." },
    en:{ products:"Products", propsT:"Properties of active ingredients", areasT:"Areas of use",
         dosageT:"Dosage and administration", importantT:"Important information",
         download:"Download instructions", back:"← Back to catalog", supplement:"Dietary supplement",
         notfound:"Product not found." },
    it:{ products:"Prodotti", propsT:"Proprietà dei principi attivi", areasT:"Ambiti d'uso",
         dosageT:"Modalità d'uso e dosi", importantT:"Informazioni importanti",
         download:"Scarica le istruzioni", back:"← Torna al catalogo", supplement:"Integratore",
         notfound:"Prodotto non trovato." },
    uz:{ products:"Mahsulotlar", propsT:"Faol moddalar xususiyatlari", areasT:"Qo‘llash sohasi",
         dosageT:"Qo‘llash usuli va dozalari", importantT:"Muhim ma’lumot",
         download:"Yo‘riqnomani yuklab olish", back:"← Katalogga qaytish", supplement:"BAD",
         notfound:"Mahsulot topilmadi." }
  }[LANG] || {
    products:"Mahsulotlar", propsT:"Faol moddalar xususiyatlari", areasT:"Qo‘llash sohasi",
    dosageT:"Qo‘llash usuli va dozalari", importantT:"Muhim ma’lumot",
    download:"Yo‘riqnomani yuklab olish", back:"← Katalogga qaytish", supplement:"BAD",
    notfound:"Mahsulot topilmadi." };

  var CAT_HREF = { liquids:"kat-jidkosti.html", tablets:"kat-tabletki.html", sprays:"kat-sprei.html",
                   creams:"kat-kremy.html", eye:"kat-glaznye.html", hygiene:"kat-gigiena.html" };
  var HOME_HREF = /\/(en|it|uz)\//.test(location.pathname) ? 'index.html' : 'hv_wp04.html';

  function catLabel(key){
    var c = (window.HVARA_CATS||[]).find(function(x){return x.key===key;});
    return c ? c[LANG] : key;
  }
  function esc(s){ return s; } // texts are trusted (our own data, allow <br>)

  function render(){
    var root = document.getElementById('product-root');
    if(!root) return;
    var id = new URLSearchParams(location.search).get('id');
    var d = (window.HVARA_DETAILS||{})[id];
    if(!d || !(d[LANG]||d.en||d.ru)){
      root.innerHTML = '<section class="page"><div class="wrap"><h1 class="section-title" style="margin-top:0">'+UI.notfound+'</h1><a href="produkciya.html" class="btn btn-ghost" style="text-decoration:none">'+UI.back+'</a></div></section>';
      return;
    }
    var t = d[LANG]||d.en||d.ru;
    document.title = t.name + ' · HVARA Pharmaceuticals';
    var catHref = CAT_HREF[d.cat] || 'produkciya.html';

    var infoCards = '<ul style="list-style:disc;padding-left:22px;margin:14px 0 0;max-width:72ch;line-height:1.65;color:var(--ink-soft)">'+t.infoCards.map(function(c){ return '<li style="margin-bottom:8px"><b style="color:var(--ink)">'+c.h+'</b> — '+c.p+'</li>'; }).join('')+'</ul>';

    var listView = (d.listView !== false);
    var listCSS = 'list-style:disc;padding-left:22px;margin:14px 0 0;max-width:72ch;line-height:1.65;color:var(--ink-soft)';

    var docPath = 'downloads/' + (LANG==='ru' ? (id+'-ru.docx') : (LANG+'/'+id+'.docx'));
    var dlBtn = '';

    var props = listView
      ? '<ul style="'+listCSS+'">'+t.props.map(function(c){ return '<li style="margin-bottom:8px"><b style="color:var(--ink)">'+c.h+'</b> — '+c.p+'</li>'; }).join('')+'</ul>'
      : t.props.map(function(c){
          return '<div class="card"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/></svg></div><h3>'+c.h+'</h3><p>'+c.p+'</p></div>';
        }).join('');

    var areas = listView
      ? '<ul style="'+listCSS+'">'+t.areas.map(function(c){ return '<li style="margin-bottom:8px"><b style="color:var(--ink)">'+c.h+'</b> — '+c.p+'</li>'; }).join('')+'</ul>'
      : t.areas.map(function(c){
          return '<div class="card"><h3>'+c.h+'</h3><p>'+c.p+'</p></div>';
        }).join('');

    var stats = t.dosageStats.map(function(s){
      return '<div class="s"><div class="n">'+s.n+'</div><div class="l">'+s.l+'</div></div>';
    }).join('');

    var important = listView
      ? '<ul style="'+listCSS+'">'+t.important.map(function(c){ return '<li style="margin-bottom:8px"><b style="color:var(--ink)">'+c.h+'</b> — '+c.p+'</li>'; }).join('')+'</ul>'
      : t.important.map(function(c){
          return '<div class="card"><h3>'+c.h+'</h3><p>'+c.p+'</p></div>';
        }).join('');

    root.innerHTML =
      '<section class="page-hero" style="background:linear-gradient(135deg,#0a1428 0%,#0f3a6b 50%,#1d6fb8 100%)">'
      +'<div class="wrap"><div class="crumbs"><a href="'+HOME_HREF+'">HVARA</a> &middot; <a href="produkciya.html">'+UI.products+'</a> &middot; <a href="'+catHref+'">'+catLabel(d.cat)+'</a> &middot; '+t.name+'</div>'
      +'<h1>'+t.name+'</h1><p class="sub">'+t.heroSub+'</p></div></section>'

      +'<section class="page"><div class="wrap">'
      +'<style>#product-root .section-title{font-size:30px}#product-root .intro h2{font-size:30px}</style>'
      +'<div class="intro" style="align-items:start;direction:rtl;margin-bottom:20px">'
      +'<div style="direction:ltr;background:'+(d.img?'#f5f7fa':'linear-gradient(150deg,#0a2e54,#1d6fb8)')+';border:1px solid var(--line);border-radius:16px;display:flex;align-items:center;justify-content:center;padding:22px;min-height:0">'
      +(d.img ? '<img src="'+BASE+d.img+'" alt="'+t.name+'" style="max-height:320px;width:auto;cursor:zoom-in" onclick="hvaraZoom(this.src)">' : '<span style="font-size:42px;font-weight:800;color:#fff;letter-spacing:.02em;text-align:center">'+t.name+'</span>')+'</div>'
      +'<div style="direction:ltr"><h2 style="margin-top:0">'+t.introTitle+'</h2>'
      +'<p>'+t.introText+'</p>'+(listView?infoCards:infoCards)+dlBtn+'</div></div>'

      +'<h2 class="section-title" style="margin-top:8px">'+UI.propsT+'</h2>'+(listView?props:'<div class="cards">'+props+'</div>')
      +'<h2 class="section-title">'+UI.areasT+'</h2>'+(listView?areas:'<div class="cards cols-4">'+areas+'</div>')

      +(listView
        ? '<h2 class="section-title">'+UI.dosageT+'</h2><ul style="'+listCSS+'"><li style="margin-bottom:8px">'+t.dosageText+'</li>'+t.dosageStats.map(function(s){return '<li style="margin-bottom:8px"><b style="color:var(--ink)">'+s.n+'</b> — '+s.l+'</li>';}).join('')+'</ul>'
        : '<div class="usage-banner"><div><h2>'+UI.dosageT+'</h2><p>'+t.dosageText+'</p></div><div class="stats">'+stats+'</div></div>')

      +'<h2 class="section-title">'+UI.importantT+'</h2>'+(listView?important:'<div class="cards cols-2">'+important+'</div>')
      +'<p style="margin-top:32px;color:var(--ink-mute);font-size:13.5px;max-width:70ch">'+t.legal+'</p>'
      +'<div style="margin-top:28px"><a href="'+catHref+'" class="btn btn-ghost" style="text-decoration:none">'+UI.back+'</a></div>'
      +'</div></section>';
  }

  document.addEventListener('DOMContentLoaded', render);
})();

function hvaraDownloadFile(ev, path){
  ev.preventDefault();
  var name = path.split('/').pop();
  fetch(path).then(function(r){return r.blob();}).then(function(b){
    var u=URL.createObjectURL(b); var a=document.createElement('a');
    a.href=u; a.download=name; document.body.appendChild(a); a.click();
    setTimeout(function(){URL.revokeObjectURL(u); a.remove();},1500);
  }).catch(function(){ window.open(path,'_blank'); });
}

function hvaraZoom(src){
  var o=document.createElement('div');
  o.style.cssText='position:fixed;inset:0;z-index:9999;background:rgba(8,18,40,.88);display:flex;align-items:center;justify-content:center;padding:32px;cursor:zoom-out';
  o.innerHTML='<img src="'+src+'" style="max-width:92%;max-height:92%;width:auto;height:auto;border-radius:12px;box-shadow:0 24px 80px -12px rgba(0,0,0,.6)">';
  o.addEventListener('click',function(){o.remove();});
  document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){o.remove();document.removeEventListener('keydown',esc);}});
  document.body.appendChild(o);
}
