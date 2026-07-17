/* ============================================================
   HVARA — рендер каталога по формам и направлениям (RU/EN/IT)
   Данные: products.js. Язык: window.HVARA_LANG ("ru"|"en"|"it")
   ============================================================ */
(function(){
  var LANG = window.HVARA_LANG || 'ru';
  var IMGBASE = /\/(en|it|uz)\//.test(location.pathname) ? '../' : '';
  var UI = {
    ru:{ all:"Все", empty:"Ничего не найдено." },
    en:{ all:"All",  empty:"Nothing found." },
    it:{ all:"Tutti", empty:"Nessun risultato." },
    uz:{ all:"Hammasi", empty:"Hech narsa topilmadi." }
  }[LANG] || { all:"Hammasi", empty:"Hech narsa topilmadi." };

  var CATS   = window.HVARA_CATS || [];
  var GROUPS = window.HVARA_GROUPS || {};
  var activeKey = "__all";
  // deep-link: produkciya.html#powders selects that form
  (function(){
    var hk = (location.hash||'').replace('#','');
    if(hk && (CATS||[]).some(function(c){return c.key===hk;})) activeKey = hk;
  })();

  function catLabel(key){
    if(key==="__all") return UI.all;
    var c = CATS.find(function(x){return x.key===key;});
    return c ? (c[LANG]||c.ru) : key;
  }
  function groupLabel(key){
    var g = GROUPS[key];
    return g ? (g[LANG]||g.ru) : key;
  }

  function build(){
    var filt = document.getElementById('catFilters');
    if(!filt) return;
    var keys = ["__all"].concat(CATS.map(function(c){return c.key;}));
    filt.innerHTML = keys.map(function(k){
      return '<button class="cat-chip'+(k===activeKey?' active':'')+'" data-key="'+k+'">'+catLabel(k)+'</button>';
    }).join('');
    filt.querySelectorAll('.cat-chip').forEach(function(b){
      b.addEventListener('click', function(){ activeKey=b.dataset.key; build(); window.renderCatalog(); });
    });
  }

  function card(p){
    var nm = (window.HVARA_NAME ? window.HVARA_NAME(p.name, LANG) : p.name);
    var thumb = p.img
      ? '<div class="cat-thumb"><img src="'+(IMGBASE||'')+p.img+'" alt="'+nm+'" loading="lazy"></div>'
      : '';
    var inner = thumb
      + '<span class="cat-tag">'+groupLabel(p.group)+'</span>'
      + '<h4>'+nm+'</h4>';
    if(p.page){
      return '<a class="cat-item'+(p.img?' has-thumb':'')+'" href="'+p.page+'">'+inner+'</a>';
    }
    return '<div class="cat-item'+(p.img?' has-thumb':'')+'">'+inner+'</div>';
  }

  window.hvaraSelectForm = function(key){
    activeKey = key; build(); window.renderCatalog();
    var host = document.getElementById('catSections');
    if(host) host.scrollIntoView({behavior:'smooth'});
  };

  window.renderCatalog = function(){
    var host = document.getElementById('catSections');
    var empty = document.getElementById('catEmpty');
    if(!host) return;
    var q = ((document.getElementById('catSearch')||{}).value || '').trim().toLowerCase();

    var all = (window.HVARA_PRODUCTS||[]).filter(function(p){
      var okCat = (activeKey==="__all") || (p.cat===activeKey);
      var hay = (p.name+' '+groupLabel(p.group)+' '+catLabel(p.cat)).toLowerCase();
      var okQ = !q || hay.indexOf(q) !== -1;
      return okCat && okQ;
    });

    var forms = (activeKey==="__all") ? CATS.map(function(c){return c.key;}) : [activeKey];
    var showFormHead = (activeKey==="__all");
    var html = '';

    forms.forEach(function(fk){
      var items = all.filter(function(p){return p.cat===fk;});
      if(!items.length) return;
      // group order: as they appear
      var order = [], byGroup = {};
      items.forEach(function(p){
        if(!byGroup[p.group]){ byGroup[p.group]=[]; order.push(p.group); }
        byGroup[p.group].push(p);
      });
      html += '<div class="cat-form-block">';
      if(showFormHead) html += '<h3 class="cat-form-head">'+catLabel(fk)+'</h3>';
      order.forEach(function(gk){
        html += '<div class="cat-subgroup"><h4 class="cat-subhead">'+groupLabel(gk)+'</h4>'
              + '<div class="cat-grid">'+byGroup[gk].map(card).join('')+'</div></div>';
      });
      html += '</div>';
    });

    host.innerHTML = html;
    if(empty) empty.style.display = all.length ? 'none' : 'block';
  };

  document.addEventListener('DOMContentLoaded', function(){ build(); window.renderCatalog(); });
  window.addEventListener('hashchange', function(){
    var hk = (location.hash||'').replace('#','');
    if(hk && CATS.some(function(c){return c.key===hk;})) window.hvaraSelectForm(hk);
  });
})();
