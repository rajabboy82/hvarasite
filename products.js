/* ============================================================
   КАТАЛОГ ПРЕПАРАТОВ HVARA — по формам выпуска и направлениям
   ------------------------------------------------------------
   HVARA_CATS   — формы выпуска (верхний уровень, фильтры)
   HVARA_GROUPS — направления (подгруппы внутри формы)
   HVARA_PRODUCTS — товары: { name, cat, group, img?, page? }
       img  — путь к фото (необязательно)
       page — ссылка на страницу товара (необязательно)
   Названия-бренды не переводятся. Ярлыки форм/направлений — в 3 языках.
   ============================================================ */

window.HVARA_CATS = [
  { key:"sprays",      ru:"Спреи",                    en:"Sprays",                  it:"Spray", uz:"Spreylar" },
  { key:"drops",       ru:"Капли",                    en:"Drops",                   it:"Gocce", uz:"Tomchilar" },
  { key:"eye",         ru:"Глазные капли",            en:"Eye drops",               it:"Colliri", uz:"Ko‘z tomchilari" },
  { key:"capsules",    ru:"Капсулы",                  en:"Capsules",                it:"Capsule", uz:"Kapsulalar" },
  { key:"powders",     ru:"Порошки и саше",           en:"Powders & sachets",       it:"Polveri e bustine", uz:"Kukun va paketchalar" },
  { key:"solutions",   ru:"Растворы для приёма внутрь",en:"Oral solutions",          it:"Soluzioni orali", uz:"Ichimlik eritmalari" },
  { key:"suspensions", ru:"Суспензии",                en:"Suspensions",             it:"Sospensioni", uz:"Suspenziyalar" },
  { key:"gels",        ru:"Гели",                     en:"Gels",                    it:"Gel", uz:"Gellar" },
  { key:"creams",      ru:"Кремы и мази",             en:"Creams & ointments",      it:"Creme e unguenti", uz:"Kremlar va malhamlar" }
];

window.HVARA_GROUPS = {
  throat:     { ru:"Для горла и дыхательных путей", en:"Throat & airways",            it:"Gola e vie respiratorie", uz:"Tomoq va nafas yo‘llari uchun" },
  nasal:      { ru:"Назальные",                     en:"Nasal",                       it:"Nasali", uz:"Burun uchun" },
  eye:        { ru:"Для глаз",                       en:"For the eyes",                it:"Per gli occhi", uz:"Ko‘z uchun" },
  eye:        { ru:"Для глаз",                       en:"For the eyes",                it:"Per gli occhi", uz:"Ko‘z uchun" },
  vitamins:   { ru:"Витамины и иммунитет",          en:"Vitamins & immunity",         it:"Vitamine e immunità", uz:"Vitaminlar va immunitet" },
  nervous:    { ru:"Для нервной системы и сна",      en:"Nervous system & sleep",      it:"Sistema nervoso e sonno", uz:"Asab tizimi va uyqu uchun" },
  gi:         { ru:"Для ЖКТ и пищеварения",          en:"Digestive system",            it:"Apparato digerente", uz:"OIT va hazm uchun" },
  kids:       { ru:"Детские",                        en:"For children",                it:"Per bambini", uz:"Bolalar uchun" },
  probiotics: { ru:"Пробиотики и микрофлора",        en:"Probiotics & microflora",     it:"Probiotici e microflora", uz:"Probiotiklar va mikroflora" },
  tonic:      { ru:"Общеукрепляющие",                en:"General tonic",               it:"Tonici generali", uz:"Umumiy mustahkamlovchi" },
  heart:      { ru:"Для сердца и сосудов",           en:"Heart & vessels",             it:"Cuore e vasi", uz:"Yurak va tomirlar uchun" },
  joints:     { ru:"Для суставов и костей",          en:"Joints & bones",              it:"Articolazioni e ossa", uz:"Bo‘g‘imlar va suyaklar uchun" },
  liver:      { ru:"Для печени и детокса",           en:"Liver & detox",               it:"Fegato e detox", uz:"Jigar va detoks uchun" },
  urinary:    { ru:"Для мочеполовой системы",        en:"Urogenital system",           it:"Sistema urogenitale", uz:"Siydik-tanosil tizimi uchun" },
  women:      { ru:"Для женского здоровья",          en:"Women's health",              it:"Salute femminile", uz:"Ayollar salomatligi uchun" },
  men:        { ru:"Для мужского здоровья",          en:"Men's health",                it:"Salute maschile", uz:"Erkaklar salomatligi uchun" },
  antioxidant:{ ru:"Антиоксиданты и омоложение",     en:"Antioxidants & anti-aging",   it:"Antiossidanti e anti-età", uz:"Antioksidantlar va yoshartirish" },
  energy:     { ru:"Энергия и метаболизм",           en:"Energy & metabolism",         it:"Energia e metabolismo", uz:"Energiya va metabolizm" },
  collagen:   { ru:"Коллаген и красота",             en:"Collagen & beauty",           it:"Collagene e bellezza", uz:"Kollagen va go‘zallik" },
  immunity:   { ru:"Для иммунитета",                 en:"For immunity",                it:"Per l'immunità", uz:"Immunitet uchun" },
  vmc:        { ru:"Витаминно-минеральные комплексы",en:"Vitamin-mineral complexes",   it:"Complessi vitaminico-minerali", uz:"Vitamin-mineral majmualar" },
  recovery:   { ru:"Энергия и восстановление",       en:"Energy & recovery",           it:"Energia e recupero", uz:"Energiya va tiklanish" },
  herbal:     { ru:"Растительные сиропы и растворы", en:"Herbal syrups & solutions",   it:"Sciroppi e soluzioni vegetali", uz:"O‘simlik siroplari va eritmalari" },
  aux:        { ru:"Вспомогательные растворы",       en:"Auxiliary solutions",         it:"Soluzioni ausiliarie", uz:"Yordamchi eritmalar" },
  antacid:    { ru:"Антациды и ЖКТ",                 en:"Antacids & GI",               it:"Antiacidi e apparato digerente", uz:"Antatsidlar va OIT" },
  skin:       { ru:"Для кожи и регенерации",         en:"Skin & regeneration",         it:"Pelle e rigenerazione", uz:"Teri va regeneratsiya uchun" },
  skin_derm:  { ru:"Для кожи и дерматологии",        en:"Skin & dermatology",          it:"Pelle e dermatologia", uz:"Teri va dermatologiya uchun" },
  pain:       { ru:"Для обезболивания и мышц",       en:"Pain relief & muscles",       it:"Antidolorifici e muscoli", uz:"Og‘riqsizlantirish va mushaklar uchun" }
};

/* Латинские названия брендов для EN/IT. Если бренда нет в списке — имя
   транслитерируется автоматически. Чтобы задать точное написание —
   добавь сюда: "Русское имя":"Latin name". */
window.HVARA_NAME_LATIN = {
  "Экстралипт":"Ekstralipt", "Ингалитол":"Ingalitol", "Био-Драй":"Bio-Dry",
  "Акванос":"Aquanos", "Моренос":"Morenos", "Триде":"Tride", "Витадетрим":"Vitadetrim",
  "Биодрай":"Bio-Dry", "Био-Драй":"Bio-Dry",
  "Карнирад":"Karnirad", "Бегамовит":"Begamovit", "Кидс-Баю":"Kids Bayu",
  "Левохвартин":"Levohvartin"
};

window.HVARA_NAME = function(name, lang){
  if(!name) return '';
  if(lang==='ru' || !lang) return name;
  if(window.HVARA_NAME_LATIN[name]) return window.HVARA_NAME_LATIN[name];
  var map = {'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'yo','ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'};
  var out='';
  for(var i=0;i<name.length;i++){
    var ch=name[i], lo=ch.toLowerCase(), tr=map[lo];
    if(tr===undefined){ out+=ch; continue; }
    if(ch!==lo){ tr = tr.charAt(0).toUpperCase()+tr.slice(1); }
    out+=tr;
  }
  return out;
};

window.HVARA_PRODUCTS = [
  /* ===== СПРЕИ ===== */
  { name:"Экстралипт",  cat:"sprays", group:"throat", img:"img/prod/ekstralipt.webp", page:"tovar.html?id=ekstralipt" },
  { name:"Ингалитол",   cat:"sprays", group:"throat", img:"img/prod/ingalitol.webp", page:"tovar.html?id=ingalitol" },
  { name:"Биодрай",     cat:"sprays", group:"skin", img:"img/prod/biodry.webp", page:"tovar.html?id=biodry" },
  { name:"Акванос",     cat:"sprays", group:"nasal", img:"img/prod/aquanos.webp", page:"tovar.html?id=aquanos" },
  { name:"Моренос",     cat:"sprays", group:"nasal", img:"img/prod/morenos.webp", page:"tovar.html?id=morenos" },
  { name:"Триде",       cat:"sprays", group:"nasal", img:"img/prod/tride.webp", page:"tovar.html?id=tride" },
  { name:"Витадетрим",  cat:"sprays", group:"vitamins", img:"img/prod/vitadetrim.webp", page:"tovar.html?id=vitadetrim" },

  /* ===== КАПЛИ ===== */
  { name:"Витадетрим",    cat:"drops", group:"vitamins", img:"img/prod/vitadetrim.webp", page:"tovar.html?id=vitadetrim" },
  { name:"Аскорбик-Дроп", cat:"drops", group:"vitamins", img:"img/prod/ascorbic-drop.webp", page:"tovar.html?id=ascorbic-drop" },
  { name:"ДеКа",          cat:"drops", group:"vitamins", img:"img/prod/deka.webp", page:"tovar.html?id=deka" },
  { name:"Сомниум",       cat:"drops", group:"nervous", img:"img/prod/somnium.webp", page:"tovar.html?id=somnium" },
  { name:"Стоп-Газ",      cat:"drops", group:"gi", img:"img/prod/stopgaz.webp", page:"tovar.html?id=stopgaz" },
  { name:"Аминобелин Кидс", cat:"drops", group:"kids", img:"img/prod/aminobelin-kids.webp", page:"tovar.html?id=aminobelin-kids" },
  { name:"Пробитик фермент флор био", cat:"drops", group:"probiotics", img:"img/prod/ferment-flor-bio.webp", page:"tovar.html?id=ferment-flor-bio" },
  { name:"Виридин",       cat:"drops", group:"tonic", img:"img/prod/viridin.webp", page:"tovar.html?id=viridin" },

  /* ===== ГЛАЗНЫЕ КАПЛИ ===== */
  { name:"Гилатон",       cat:"eye", group:"eye", img:"img/prod/gilaton.webp", page:"tovar.html?id=gilaton" },
  { name:"Тагилин",       cat:"eye", group:"eye", img:"img/prod/tagilin.webp", page:"tovar.html?id=tagilin" },
  { name:"Нейрогил",      cat:"eye", group:"eye", img:"img/prod/neyrogil.webp", page:"tovar.html?id=neyrogil" },
  { name:"Ретилан",       cat:"eye", group:"eye", img:"img/prod/retilan.webp", page:"tovar.html?id=retilan" },

  /* ===== КАПСУЛЫ ===== */
  { name:"Б-нервус",          cat:"capsules", group:"nervous", img:"img/prod/b-nervus.webp", page:"tovar.html?id=b-nervus" },
  { name:"Нуклео Нейро",      cat:"capsules", group:"nervous", img:"img/prod/nukleo.webp", page:"tovar.html?id=nukleo" },
  { name:"Анеуриум",          cat:"capsules", group:"nervous", img:"img/prod/aneyrum.webp", page:"tovar.html?id=aneyrum" },
  { name:"Слипомелл",         cat:"capsules", group:"nervous", img:"img/prod/slipomell.webp", page:"tovar.html?id=slipomell" },
  { name:"Сомниум",           cat:"capsules", group:"nervous", img:"img/prod/somnium-caps.webp", page:"tovar.html?id=somnium-caps" },
  { name:"Витамин Д3 Эффект", cat:"capsules", group:"vitamins", img:"img/prod/vitamin-d3.webp", page:"tovar.html?id=vitamin-d3" },
  { name:"Цинк Эффект",       cat:"capsules", group:"vitamins", img:"img/prod/sink-effect.webp", page:"tovar.html?id=sink-effect" },
  { name:"Омега Эффект",      cat:"capsules", group:"vitamins", img:"img/prod/omega-effect.webp", page:"tovar.html?id=omega-effect" },
  { name:"Аскорбик табс",     cat:"capsules", group:"vitamins", img:"img/prod/ascorbic-tabs.webp", page:"tovar.html?id=ascorbic-tabs" },
  { name:"Астаксион",         cat:"capsules", group:"vitamins", img:"img/prod/astaksion.webp", page:"tovar.html?id=astaksion" },
  { name:"Биотон",            cat:"capsules", group:"vitamins", img:"img/prod/bioton.webp", page:"tovar.html?id=bioton" },
  { name:"Сооглутион-Q10",    cat:"capsules", group:"heart", img:"img/prod/sooglution-q10.webp", page:"tovar.html?id=sooglution-q10" },
  { name:"Евилайф",           cat:"capsules", group:"heart", img:"img/prod/evilife.webp", page:"tovar.html?id=evilife" },
  { name:"Витоглиц",          cat:"capsules", group:"heart", img:"img/prod/vitoglits.webp", page:"tovar.html?id=vitoglits" },
  { name:"Роккулин",          cat:"capsules", group:"skin_derm", img:"img/prod/rokkulin.webp", page:"tovar.html?id=rokkulin" },
  { name:"Селибум",           cat:"capsules", group:"liver", img:"img/prod/selibum.webp", page:"tovar.html?id=selibum" },
  { name:"Манефро",           cat:"capsules", group:"urinary", img:"img/prod/manefro.webp", page:"tovar.html?id=manefro" },
  { name:"Уровелин",          cat:"capsules", group:"men", img:"img/prod/urovelin.webp", page:"tovar.html?id=urovelin" },
  { name:"Мио инофол",        cat:"capsules", group:"women", img:"img/prod/mio-inofol.webp", page:"tovar.html?id=mio-inofol" },
  { name:"Мастопар Био",      cat:"capsules", group:"women", img:"img/prod/mastopar-bio.webp", page:"tovar.html?id=mastopar-bio" },
  { name:"Фибромас",          cat:"capsules", group:"women", img:"img/prod/fibromas.webp", page:"tovar.html?id=fibromas" },
  { name:"Солажень",          cat:"capsules", group:"antioxidant", img:"img/prod/solajen.webp", page:"tovar.html?id=solajen" },
  { name:"Альфа-глумин",      cat:"capsules", group:"antioxidant", img:"img/prod/alfa-glumin.webp", page:"tovar.html?id=alfa-glumin" },
  { name:"Трептовеллум",      cat:"capsules", group:"energy", img:"img/prod/treptovelum.webp", page:"tovar.html?id=treptovelum" },
  { name:"Лютон",             cat:"capsules", group:"energy", img:"img/prod/luton.webp", page:"tovar.html?id=luton" },
  { name:"Мирамакс",          cat:"sprays", group:"skin", img:"img/prod/miramaks.webp", page:"tovar.html?id=miramaks" },

  /* ===== ПОРОШКИ И САШЕ ===== */
  { name:"HYACOLL 10000",     cat:"powders", group:"collagen", img:"img/prod/hyacoll.webp", page:"tovar.html?id=hyacoll" },
  { name:"Биоколл",           cat:"powders", group:"collagen", img:"img/prod/biokoll.webp", page:"tovar.html?id=biokoll" },
  { name:"Дефенза",           cat:"powders", group:"immunity", img:"img/prod/defenza.webp", page:"tovar.html?id=defenza" },
  { name:"Фортекс",           cat:"powders", group:"joints", img:"img/prod/forteks.webp", page:"tovar.html?id=forteks" },
  { name:"Демифол",           cat:"powders", group:"women", img:"img/prod/demifol.webp", page:"tovar.html?id=demifol" },
  { name:"Нейрокентрон КИДС", cat:"powders", group:"nervous", img:"img/prod/neyrokentron-kids.webp", page:"tovar.html?id=neyrokentron-kids" },
  { name:"Гаммалон Био",      cat:"powders", group:"nervous", img:"img/prod/gammalon.webp", page:"tovar.html?id=gammalon" },
  { name:"Инозипрайм Men",    cat:"powders", group:"men", img:"img/prod/inozipraym-men.webp", page:"tovar.html?id=inozipraym-men" },
  { name:"Инозипрайм W",      cat:"powders", group:"women", img:"img/prod/inozipraym-w.webp", page:"tovar.html?id=inozipraym-w" },
  { name:"Хандро",            cat:"powders", group:"joints", img:"img/prod/handro.webp", page:"tovar.html?id=handro" },
  { name:"Бегамовит Нео",     cat:"powders", group:"immunity", img:"img/prod/begamovit-neo.webp", page:"tovar.html?id=begamovit-neo" },
  { name:"Биовелл",           cat:"powders", group:"recovery", img:"img/prod/biovell.webp", page:"tovar.html?id=biovell" },
  { name:"Велартриум",        cat:"powders", group:"joints", img:"img/prod/velartrium.webp", page:"tovar.html?id=velartrium" },
  { name:"Микролайф",         cat:"powders", group:"recovery", img:"img/prod/mikrolife.webp", page:"tovar.html?id=mikrolife" },
  { name:"Инстимол",          cat:"powders", group:"recovery", img:"img/prod/instimol.webp", page:"tovar.html?id=instimol" },
  { name:"Нормадиз",          cat:"powders", group:"recovery", img:"img/prod/normadiz.webp", page:"tovar.html?id=normadiz" },

  /* ===== РАСТВОРЫ ДЛЯ ПРИЁМА ВНУТРЬ ===== */
  { name:"Карнирад",     cat:"solutions", group:"energy", img:"img/prod/karnirad.webp", page:"tovar.html?id=karnirad" },
  { name:"Левохвартин",  cat:"solutions", group:"energy", img:"img/prod/levoxvartin.webp", page:"tovar.html?id=levoxvartin" },
  { name:"ЛевоАргин",    cat:"solutions", group:"energy", img:"img/prod/levoargin.webp", page:"tovar.html?id=levoargin" },
  { name:"Спиртомакс",   cat:"solutions", group:"aux", img:"img/prod/spirtomaks.webp", page:"tovar.html?id=spirtomaks" },
  { name:"Нейропресс",   cat:"solutions", group:"nervous", img:"img/prod/neyropress.webp", page:"tovar.html?id=neyropress" },
  { name:"Гопантевал",   cat:"solutions", group:"nervous", img:"img/prod/gopanteval.webp", page:"tovar.html?id=gopanteval" },
  { name:"Нифурофрил",   cat:"solutions", group:"gi", img:"img/prod/nifurofril.webp", page:"tovar.html?id=nifurofril" },
  { name:"Орсимакс плюс",cat:"solutions", group:"gi", img:"img/prod/orsimax.webp", page:"tovar.html?id=orsimax" },
  { name:"Нефролон Био", cat:"solutions", group:"liver", img:"img/prod/nefrolon.webp", page:"tovar.html?id=nefrolon" },
  { name:"Дролоцит Био", cat:"solutions", group:"nervous", img:"img/prod/drolosit.webp", page:"tovar.html?id=drolosit-bio" },
  { name:"Бегамовит",    cat:"solutions", group:"vitamins", img:"img/prod/begomovit.webp", page:"tovar.html?id=begamovit" },
  { name:"Бетамакс",     cat:"solutions", group:"vitamins", img:"img/prod/betamaks.webp", page:"tovar.html?id=betamaks" },
  { name:"ЙОДимикс",     cat:"solutions", group:"vitamins", img:"img/prod/yodmiks.webp", page:"tovar.html?id=yodmiks" },
  { name:"ПЕРЕмикс",     cat:"solutions", group:"vitamins", img:"img/prod/peremiks.webp", page:"tovar.html?id=peremiks" },
  { name:"Кидс Баю",     cat:"solutions", group:"kids", img:"img/prod/kids-bayu.webp", page:"tovar.html?id=kids-bayu" },
  { name:"Сироп солодкового корня", cat:"solutions", group:"herbal", img:"img/prod/solodka-sirop.webp", page:"tovar.html?id=solodka-sirop" },
  { name:"Зеленмикс",    cat:"solutions", group:"herbal", img:"img/prod/zelenmaks.webp", page:"tovar.html?id=zelenmaks" },
  { name:"Глицерин",     cat:"solutions", group:"aux", img:"img/prod/glicerin.webp", page:"tovar.html?id=glicerin" },

  /* ===== СУСПЕНЗИИ ===== */
  { name:"Малоксимакс",  cat:"suspensions", group:"antacid", img:"img/prod/maloksimaks.webp", page:"tovar.html?id=maloksimaks" },

  /* ===== ГЕЛИ ===== */
  { name:"Гинобаланс",   cat:"gels", group:"women", img:"img/prod/ginobalance.webp", page:"tovar.html?id=ginobalance" },
  { name:"Димефертин",   cat:"gels", group:"women", img:"img/prod/dimefertin.webp", page:"tovar.html?id=dimefertin" },
  { name:"Линоцитин",    cat:"gels", group:"nervous", img:"img/prod/linocitin-box.webp", page:"tovar.html?id=linocitin" },

  /* ===== КРЕМЫ И МАЗИ → перенесены в ГЕЛИ ===== */
  { name:"Акнелит",      cat:"gels", group:"skin_derm", img:"img/prod/aknelit.webp", page:"tovar.html?id=aknelit" },
  { name:"А-треон",      cat:"gels", group:"skin_derm", img:"img/prod/ateron.webp", page:"tovar.html?id=ateron" },
  { name:"Витин-Эффект", cat:"gels", group:"skin_derm", img:"img/prod/vitin.webp", page:"tovar.html?id=vitin" },
  { name:"Клинтон",      cat:"gels", group:"skin_derm", img:"img/prod/klinton.webp", page:"tovar.html?id=klinton" },
  { name:"Анестик",      cat:"gels", group:"pain", img:"img/prod/anestik.webp", page:"tovar.html?id=anestik" },
  { name:"Масфигель",    cat:"gels", group:"pain", img:"img/prod/masfigel.webp", page:"tovar.html?id=masfigel" },
  { name:"Стоп-Инн",     cat:"gels", group:"pain", img:"img/prod/stopinn.webp", page:"tovar.html?id=stopinn" },
  { name:"Мастопар Био", cat:"gels", group:"women", img:"img/prod/mastopar-bio-gel.webp", page:"tovar.html?id=mastopar-bio-gel" }
];
