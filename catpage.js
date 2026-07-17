/* ============================================================
   HVARA — страница формы выпуска: katalog.html?cat=<form>
   Рендерит каталог одной формы, сгруппированный по направлениям.
   Язык: window.HVARA_LANG. Данные: products.js
   ============================================================ */
(function(){
  var LANG = window.HVARA_LANG || 'ru';
  var CATS   = window.HVARA_CATS || [];
  var GROUPS = window.HVARA_GROUPS || {};

  var UI = {
    ru:{ products:"Продукция", empty:"Ничего не найдено.", all:"Все формы", search:"Поиск препарата…" },
    en:{ products:"Products", empty:"Nothing found.", all:"All forms", search:"Search products…" },
    it:{ products:"Prodotti", empty:"Nessun risultato.", all:"Tutte le forme", search:"Cerca prodotti…" }
  }[LANG];

  var HOME = (LANG==='ru') ? 'hv_wp04.html' : 'index.html';
  var BASE = /\/(en|it|uz)\//.test(location.pathname) ? '../' : '';

  // Короткие описания форм (RU/EN/IT)
  var DESC = {
    sprays:{ru:"Высокоэффективные спреи для местного применения — для горла, носа и кожи.",en:"Highly effective topical sprays — for throat, nose and skin.",it:"Spray topici altamente efficaci — per gola, naso e pelle."},
    drops:{ru:"Капли для приёма внутрь и местного применения — витаминные, для нервной системы, ЖКТ и другие.",en:"Oral and topical drops — vitamins, nervous system, digestion and more.",it:"Gocce orali e topiche — vitamine, sistema nervoso, digestione e altro."},
    eye:{ru:"Глазные капли — увлажняющие, восстанавливающие и для здоровья глаз.",en:"Eye drops — moisturizing, restorative and for eye health.",it:"Colliri — idratanti, riparatori e per la salute degli occhi."},
    capsules:{ru:"Капсулы по направлениям: нервная система, иммунитет, сердце, суставы и другие.",en:"Capsules by area: nervous system, immunity, heart, joints and more.",it:"Capsule per area: sistema nervoso, immunità, cuore, articolazioni e altro."},
    powders:{ru:"Растворимые порошки и саше: витаминно-минеральные комплексы, коллаген, иммунитет, восстановление.",en:"Soluble powders & sachets: vitamin-mineral complexes, collagen, immunity, recovery.",it:"Polveri e bustine solubili: complessi vitaminico-minerali, collagene, immunità, recupero."},
    solutions:{ru:"Растворы для приёма внутрь — энергетические, витаминные, для ЖКТ, печени и детей.",en:"Oral solutions — energy, vitamins, digestion, liver and children.",it:"Soluzioni orali — energia, vitamine, digestione, fegato e bambini."},
    suspensions:{ru:"Суспензии для приёма внутрь — антациды и средства для ЖКТ.",en:"Oral suspensions — antacids and digestive products.",it:"Sospensioni orali — antiacidi e prodotti per la digestione."},
    gels:{ru:"Гели для кожи, суставов и женского здоровья.",en:"Gels for skin, joints and women's health.",it:"Gel per pelle, articolazioni e salute femminile."},
    creams:{ru:"Кремы и мази для кожи, обезболивания и женского здоровья.",en:"Creams & ointments for skin, pain relief and women's health.",it:"Creme e unguenti per pelle, antidolorifici e salute femminile."}
  };

  function catLabel(key){ var c=CATS.find(function(x){return x.key===key;}); return c?c[LANG]:key; }
  function groupLabel(key){ var g=GROUPS[key]; return g?g[LANG]:key; }

  // фото форм (необязательно)
  var FORM_IMG = {};

  function card(p){
    var nm = (window.HVARA_NAME ? window.HVARA_NAME(p.name, LANG) : p.name);
    var thumb = p.img ? '<div class="cat-thumb"><img src="'+BASE+p.img+'" alt="'+nm+'" loading="lazy"></div>' : '';
    var inner = thumb + '<span class="cat-tag">'+groupLabel(p.group)+'</span><h4>'+nm+'</h4>';
    if(p.page) return '<a class="cat-item'+(p.img?' has-thumb':'')+'" href="'+p.page+'">'+inner+'</a>';
    return '<div class="cat-item'+(p.img?' has-thumb':'')+'">'+inner+'</div>';
  }

  function render(){
    var cat = new URLSearchParams(location.search).get('cat') || 'sprays';
    if(!CATS.some(function(c){return c.key===cat;})) cat='sprays';

    // hero
    document.title = catLabel(cat)+' · HVARA Pharmaceuticals';
    var crumbs = document.getElementById('catCrumbs');
    if(crumbs) crumbs.innerHTML = '<a href="'+HOME+'">HVARA</a> &middot; <a href="produkciya.html">'+UI.products+'</a> &middot; '+catLabel(cat);
    var ht = document.getElementById('catTitle'); if(ht) ht.textContent = catLabel(cat);
    var hs = document.getElementById('catDesc'); if(hs) hs.textContent = (DESC[cat]?DESC[cat][LANG]:'');

    // search
    var q = ((document.getElementById('catSearch')||{}).value||'').trim().toLowerCase();

    var items = (window.HVARA_PRODUCTS||[]).filter(function(p){
      if(p.cat!==cat) return false;
      var hay=(p.name+' '+groupLabel(p.group)).toLowerCase();
      return !q || hay.indexOf(q)!==-1;
    });

    var order=[], byGroup={};
    items.forEach(function(p){ if(!byGroup[p.group]){byGroup[p.group]=[];order.push(p.group);} byGroup[p.group].push(p); });

    var html='';
    if(FORM_IMG[cat]){
      html += '<div style="float:right;width:300px;max-width:42%;margin:0 0 24px 28px;border-radius:16px;overflow:hidden;border:1px solid var(--line);box-shadow:0 18px 44px -22px rgba(10,20,40,.4)">'
            + '<img src="'+FORM_IMG[cat]+'" alt="'+catLabel(cat)+'" style="width:100%;display:block"></div>';
    }
    order.forEach(function(gk){
      html += '<div class="cat-subgroup"><h4 class="cat-subhead">'+groupLabel(gk)+'</h4>'
            + '<div class="cat-grid">'+byGroup[gk].map(card).join('')+'</div></div>';
    });
    var host=document.getElementById('catSections'); if(host) host.innerHTML=html;
    var empty=document.getElementById('catEmpty'); if(empty) empty.style.display=items.length?'none':'block';

    // form switcher chips
    var sw=document.getElementById('catForms');
    if(sw){
      sw.innerHTML = CATS.map(function(c){
        return '<a class="cat-chip'+(c.key===cat?' active':'')+'" href="katalog.html?cat='+c.key+'">'+c[LANG]+'</a>';
      }).join('');
    }
  }

  window.renderCatPage = render;
  document.addEventListener('DOMContentLoaded', render);
})();
