/* ============================================================
   HVARA — детальные данные товаров для страницы tovar.html
   ------------------------------------------------------------
   Чтобы ДОБАВИТЬ товар:
   1) добавь фото в img/prod/<id>.webp
   2) (необязательно) положи инструкцию в downloads/<id>.docx
   3) добавь блок window.HVARA_DETAILS["<id>"] = {...} ниже
   4) в products.js у нужного товара поставь page:"tovar.html?id=<id>"
   Ключи ru/en/it — текст на трёх языках.
   ============================================================ */
window.HVARA_DETAILS = {

  "karnirad": {
    cat: "liquids",
    img: "img/prod/karnirad.webp",
    doc: "downloads/karnirad-instrukciya.docx",
    ru: {
      name:"Карнирад",
      heroSub:"Раствор для приёма внутрь — левокарнитин, экстракт радиолы и витамин B12. Для снижения утомляемости и повышения работоспособности.",
      introTitle:"Энергия и тонус каждый день",
      introText:"Карнирад — комплекс из левокарнитина, экстракта радиолы розовой и витамина B12. Способствует снижению утомляемости, повышению физической и умственной выносливости, поддержке иммунитета.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь по 100 мл во флаконе с мерным стаканчиком."},
        {h:"Состав на 1 мл", p:"Левокарнитин — 100 мг<br>Экстракт радиолы — 20 мг<br>Витамин B12 — 0,5 мкг"}
      ],
      props:[
        {h:"L-карнитин", p:"Природное вещество, родственное витаминам группы B. Обеспечивает транспорт жирных кислот в митохондрии, где они окисляются с образованием энергии (АТФ)."},
        {h:"Экстракт радиолы", p:"Стимулирующее средство при астенических состояниях, повышенной утомляемости, неврастении и вегето-сосудистой дистонии. Повышает работоспособность."},
        {h:"Витамин B12", p:"Иммуномодулирующее и антиатеросклеротическое действие, восстановление нервной ткани, участие в синтезе аминокислот, обмене углеводов и липидов."}
      ],
      areas:[
        {h:"Иммунитет", p:"Повышает иммунитет и сопротивляемость организма к инфекциям."},
        {h:"Детоксикация", p:"Обладает выраженной детоксикационной активностью."},
        {h:"Бодрость", p:"Профилактика быстрой утомляемости, повышение выносливости."},
        {h:"Память и стресс", p:"Улучшает память, повышает устойчивость к стрессовым ситуациям."}
      ],
      dosageText:"Принимается внутрь. Детям — по 5 мл 1 раз в день; взрослым и детям старше 12 лет — по 10 мл 1 раз в день во время еды. Курс приёма — 2–3 недели. При необходимости по рекомендации специалиста курс можно повторить.",
      dosageStats:[{n:"10 мл",l:"взрослым 1 раз в день"},{n:"2–3",l:"недели курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Ts 306766008-007:2023. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Karnirad",
      heroSub:"Oral solution — levocarnitine, rhodiola extract and vitamin B12. To reduce fatigue and boost performance.",
      introTitle:"Energy and tone every day",
      introText:"Karnirad is a complex of levocarnitine, Rhodiola rosea extract and vitamin B12. It helps reduce fatigue, increase physical and mental endurance and support immunity.",
      infoCards:[
        {h:"Form", p:"Oral solution, 100 ml bottle with a measuring cup."},
        {h:"Composition per 1 ml", p:"Levocarnitine — 100 mg<br>Rhodiola extract — 20 mg<br>Vitamin B12 — 0.5 mcg"}
      ],
      props:[
        {h:"L-carnitine", p:"A natural substance related to B vitamins. Transports fatty acids into mitochondria, where they are oxidized to produce energy (ATP)."},
        {h:"Rhodiola extract", p:"A stimulant for asthenic states, increased fatigue, neurasthenia and vegetative-vascular dystonia. Improves working capacity."},
        {h:"Vitamin B12", p:"Immunomodulatory and anti-atherosclerotic action, restores nerve tissue, participates in amino-acid synthesis and carbohydrate/lipid metabolism."}
      ],
      areas:[
        {h:"Immunity", p:"Boosts immunity and resistance to infections."},
        {h:"Detox", p:"Has a pronounced detoxifying activity."},
        {h:"Vitality", p:"Prevents quick fatigue, increases endurance."},
        {h:"Memory & stress", p:"Improves memory, increases resistance to stress."}
      ],
      dosageText:"Taken orally. Children — 5 ml once a day; adults and children over 12 — 10 ml once a day with meals. Course: 2–3 weeks. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"10 ml",l:"adults, once a day"},{n:"2–3",l:"weeks course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Karnirad",
      heroSub:"Soluzione orale — levocarnitina, estratto di rodiola e vitamina B12. Per ridurre la stanchezza e aumentare le prestazioni.",
      introTitle:"Energia e tono ogni giorno",
      introText:"Karnirad è un complesso di levocarnitina, estratto di Rhodiola rosea e vitamina B12. Aiuta a ridurre la stanchezza, aumentare la resistenza fisica e mentale e sostenere l'immunità.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, flacone da 100 ml con bicchiere dosatore."},
        {h:"Composizione per 1 ml", p:"Levocarnitina — 100 mg<br>Estratto di rodiola — 20 mg<br>Vitamina B12 — 0,5 mcg"}
      ],
      props:[
        {h:"L-carnitina", p:"Sostanza naturale affine alle vitamine del gruppo B. Trasporta gli acidi grassi nei mitocondri, dove vengono ossidati per produrre energia (ATP)."},
        {h:"Estratto di rodiola", p:"Stimolante per stati astenici, affaticamento, nevrastenia e distonia vegetativa-vascolare. Migliora la capacità lavorativa."},
        {h:"Vitamina B12", p:"Azione immunomodulante e anti-aterosclerotica, ripristina il tessuto nervoso, partecipa alla sintesi degli aminoacidi e al metabolismo di carboidrati e lipidi."}
      ],
      areas:[
        {h:"Immunità", p:"Aumenta l'immunità e la resistenza alle infezioni."},
        {h:"Detox", p:"Ha una marcata attività disintossicante."},
        {h:"Vitalità", p:"Previene la stanchezza, aumenta la resistenza."},
        {h:"Memoria e stress", p:"Migliora la memoria, aumenta la resistenza allo stress."}
      ],
      dosageText:"Per uso orale. Bambini — 5 ml una volta al giorno; adulti e bambini sopra i 12 anni — 10 ml una volta al giorno durante i pasti. Ciclo: 2–3 settimane. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"10 ml",l:"adulti, una volta al giorno"},{n:"2–3",l:"settimane di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Karnirad",
      heroSub:"Ichimlik eritmasi — levokarnitin, rodiola ekstrakti va B12 vitamini. Charchoqni kamaytirish va ish qobiliyatini oshirish uchun.",
      introTitle:"Har kuni energiya va tetiklik",
      introText:"Karnirad — levokarnitin, rodiola rozea ekstrakti va B12 vitamini majmuasi. Charchoqni kamaytirishga, jismoniy va aqliy chidamlilikni oshirishga va immunitetni qo‘llab-quvvatlashga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, o‘lchov stakanli 100 ml flakon."},
        {h:"1 ml tarkibi", p:"Levokarnitin — 100 mg<br>Rodiola ekstrakti — 20 mg<br>B12 vitamini — 0,5 mkg"}
      ],
      props:[
        {h:"L-karnitin", p:"B guruh vitaminlariga yaqin tabiiy modda. Yog‘ kislotalarini mitoxondriyalarga tashiydi, u yerda ular oksidlanib energiya (ATF) hosil qiladi."},
        {h:"Rodiola ekstrakti", p:"Astenik holatlar, charchoq, nevrasteniya va vegetativ-tomir distoniyasida qo‘llaniladigan stimulyator. Ish qobiliyatini oshiradi."},
        {h:"B12 vitamini", p:"Immunomodulyatsiya va anti-aterosklerotik ta’sir, asab to‘qimasini tiklaydi, aminokislotalar sintezi hamda uglevod va lipidlar almashinuvida ishtirok etadi."}
      ],
      areas:[
        {h:"Immunitet", p:"Immunitetni va infeksiyalarga chidamlilikni oshiradi."},
        {h:"Detoks", p:"Aniq ifodalangan detoksikatsiya faolligiga ega."},
        {h:"Tetiklik", p:"Charchoqning oldini oladi, chidamlilikni oshiradi."},
        {h:"Xotira va stress", p:"Xotirani yaxshilaydi, stressga chidamlilikni oshiradi."}
      ],
      dosageText:"Ichki qabul uchun. Bolalarga — kuniga bir marta 5 ml; kattalar va 12 yoshdan katta bolalarga — ovqat vaqtida kuniga bir marta 10 ml. Kurs: 2–3 hafta. Mutaxassis tavsiyasi bilan takrorlash mumkin.",
      dosageStats:[{n:"10 ml",l:"kattalarga, kuniga bir marta"},{n:"2–3",l:"haftalik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "begamovit": {
    cat: "liquids",
    img: "img/prod/begomovit.webp",
    doc: "downloads/begamovit-instrukciya.docx",
    ru: {
      name:"Бегамовит",
      heroSub:"Витаминно-минеральный комплекс с Омега-3 для детей и взрослых. Поддержка иммунитета, аппетита, памяти и работоспособности.",
      introTitle:"Витамины и Омега-3 для роста и иммунитета",
      introText:"Бегамовит содержит незаменимые полиненасыщенные жирные кислоты Омега-3 и комплекс витаминов, необходимых организму в периоды интенсивного роста, обучения и повышенных нагрузок.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь 110 мл во флаконе с мерным стаканчиком."},
        {h:"Состав на 5 мл", p:"Омега-3 — 2,5 мг · Витамин C — 2,0 мг<br>Ромашка — 15 мг · B12 — 0,1 мкг<br>B6 — 2,5 мг · D3 — 500 МЕ · L-глутамин — 50 мг"}
      ],
      props:[
        {h:"Омега-3", p:"Эйкозапентаеновая и докозагексаеновая кислоты участвуют в формировании клеточных мембран мозга и зрения, улучшают память и способность к обучению, снижают утомляемость."},
        {h:"Витамины C, B6, B12", p:"Повышают иммунный ответ, умственную и физическую работоспособность, укрепляют нервную систему, нормализуют обмен веществ и артериальное давление."},
        {h:"Витамин D3 и L-глутамин", p:"D3 регулирует обмен кальция и фосфора, важен для профилактики рахита. L-глутамин поддерживает нервную и эндокринную системы, защищает печень."}
      ],
      areas:[
        {h:"Аппетит", p:"Способствует повышению аппетита."},
        {h:"Иммунитет", p:"Повышает иммунитет и антиоксидантную защиту организма."},
        {h:"Нагрузки", p:"Повышает сопротивляемость умственным и физическим нагрузкам."},
        {h:"Витамины", p:"Профилактика рахита и восполнение дефицита витаминов."}
      ],
      dosageText:"Принимается внутрь во время еды. Дети 1–3 года — 10 мл 1 раз в день; 3–12 лет — 15 мл 1 раз в день; взрослые и дети старше 12 лет — 15 мл 2 раза в день. Курс приёма — 14–30 дней, при необходимости повторить по рекомендации специалиста.",
      dosageStats:[{n:"15 мл",l:"взрослым 2 раза в день"},{n:"14–30",l:"дней курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Begamovit",
      heroSub:"A vitamin-mineral complex with Omega-3 for children and adults. Supports immunity, appetite, memory and performance.",
      introTitle:"Vitamins and Omega-3 for growth and immunity",
      introText:"Begamovit contains essential Omega-3 polyunsaturated fatty acids and a complex of vitamins the body needs during periods of intensive growth, learning and increased load.",
      infoCards:[
        {h:"Form", p:"Oral solution, 110 ml bottle with a measuring cup."},
        {h:"Composition per 5 ml", p:"Omega-3 — 2.5 mg · Vitamin C — 2.0 mg<br>Chamomile — 15 mg · B12 — 0.1 mcg<br>B6 — 2.5 mg · D3 — 500 IU · L-glutamine — 50 mg"}
      ],
      props:[
        {h:"Omega-3", p:"EPA and DHA acids help form cell membranes of the brain and vision, improve memory and learning ability and reduce fatigue."},
        {h:"Vitamins C, B6, B12", p:"Boost the immune response, mental and physical performance, strengthen the nervous system and normalize metabolism and blood pressure."},
        {h:"Vitamin D3 and L-glutamine", p:"D3 regulates calcium and phosphorus metabolism, important for rickets prevention. L-glutamine supports the nervous and endocrine systems and protects the liver."}
      ],
      areas:[
        {h:"Appetite", p:"Helps increase appetite."},
        {h:"Immunity", p:"Boosts immunity and the body's antioxidant defense."},
        {h:"Load", p:"Increases resistance to mental and physical stress."},
        {h:"Vitamins", p:"Rickets prevention and replenishment of vitamin deficiency."}
      ],
      dosageText:"Taken orally with meals. Children 1–3 years — 10 ml once a day; 3–12 years — 15 ml once a day; adults and children over 12 — 15 ml twice a day. Course: 14–30 days, may be repeated on a specialist's recommendation.",
      dosageStats:[{n:"15 ml",l:"adults, twice a day"},{n:"14–30",l:"days course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Begamovit",
      heroSub:"Un complesso vitaminico-minerale con Omega-3 per bambini e adulti. Sostiene immunità, appetito, memoria e prestazioni.",
      introTitle:"Vitamine e Omega-3 per crescita e immunità",
      introText:"Begamovit contiene acidi grassi polinsaturi Omega-3 essenziali e un complesso di vitamine necessarie all'organismo nei periodi di crescita intensa, apprendimento e maggiore impegno.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, flacone da 110 ml con bicchiere dosatore."},
        {h:"Composizione per 5 ml", p:"Omega-3 — 2,5 mg · Vitamina C — 2,0 mg<br>Camomilla — 15 mg · B12 — 0,1 mcg<br>B6 — 2,5 mg · D3 — 500 UI · L-glutammina — 50 mg"}
      ],
      props:[
        {h:"Omega-3", p:"Gli acidi EPA e DHA contribuiscono alla formazione delle membrane cellulari del cervello e della vista, migliorano memoria e apprendimento e riducono la stanchezza."},
        {h:"Vitamine C, B6, B12", p:"Potenziano la risposta immunitaria, le prestazioni mentali e fisiche, rafforzano il sistema nervoso e normalizzano metabolismo e pressione."},
        {h:"Vitamina D3 e L-glutammina", p:"La D3 regola il metabolismo di calcio e fosforo, importante per prevenire il rachitismo. La L-glutammina sostiene i sistemi nervoso ed endocrino e protegge il fegato."}
      ],
      areas:[
        {h:"Appetito", p:"Contribuisce ad aumentare l'appetito."},
        {h:"Immunità", p:"Aumenta l'immunità e la difesa antiossidante dell'organismo."},
        {h:"Impegno", p:"Aumenta la resistenza agli sforzi mentali e fisici."},
        {h:"Vitamine", p:"Prevenzione del rachitismo e reintegro delle carenze vitaminiche."}
      ],
      dosageText:"Per uso orale durante i pasti. Bambini 1–3 anni — 10 ml una volta al giorno; 3–12 anni — 15 ml una volta al giorno; adulti e bambini sopra i 12 anni — 15 ml due volte al giorno. Ciclo: 14–30 giorni, ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"15 ml",l:"adulti, due volte al giorno"},{n:"14–30",l:"giorni di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Begamovit",
      heroSub:"Bolalar va kattalar uchun Omega-3 li vitamin-mineral majmua. Immunitet, ishtaha, xotira va ish qobiliyatini qo‘llab-quvvatlaydi.",
      introTitle:"O‘sish va immunitet uchun vitaminlar va Omega-3",
      introText:"Begamovit tarkibida jadal o‘sish, o‘qish va yuqori yuklamalar davrida organizmga zarur bo‘lgan almashtirib bo‘lmaydigan Omega-3 ko‘p to‘yinmagan yog‘ kislotalari va vitaminlar majmuasi mavjud.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, o‘lchov stakanli 110 ml flakon."},
        {h:"5 ml tarkibi", p:"Omega-3 — 2,5 mg · C vitamini — 2,0 mg<br>Moychechak — 15 mg · B12 — 0,1 mkg<br>B6 — 2,5 mg · D3 — 500 XB · L-glutamin — 50 mg"}
      ],
      props:[
        {h:"Omega-3", p:"EPK va DGK kislotalari miya va ko‘rish hujayra membranalarini shakllantirishga yordam beradi, xotira va o‘rganish qobiliyatini yaxshilaydi hamda charchoqni kamaytiradi."},
        {h:"C, B6, B12 vitaminlari", p:"Immun javobni, aqliy va jismoniy ish qobiliyatini oshiradi, asab tizimini mustahkamlaydi va moddalar almashinuvi hamda qon bosimini me’yorlashtiradi."},
        {h:"D3 vitamini va L-glutamin", p:"D3 kalsiy va fosfor almashinuvini boshqaradi, raxit oldini olish uchun muhim. L-glutamin asab va endokrin tizimlarini qo‘llab-quvvatlaydi va jigarni himoya qiladi."}
      ],
      areas:[
        {h:"Ishtaha", p:"Ishtahani oshirishga yordam beradi."},
        {h:"Immunitet", p:"Immunitetni va organizmning antioksidant himoyasini oshiradi."},
        {h:"Yuklama", p:"Aqliy va jismoniy stressga chidamlilikni oshiradi."},
        {h:"Vitaminlar", p:"Raxit oldini olish va vitamin yetishmovchiligini to‘ldirish."}
      ],
      dosageText:"Ovqat vaqtida ichki qabul qilinadi. 1–3 yosh bolalar — kuniga bir marta 10 ml; 3–12 yosh — kuniga bir marta 15 ml; kattalar va 12 yoshdan katta bolalar — kuniga ikki marta 15 ml. Kurs: 14–30 kun, mutaxassis tavsiyasi bilan takrorlanishi mumkin.",
      dosageStats:[{n:"15 ml",l:"kattalarga, kuniga ikki marta"},{n:"14–30",l:"kunlik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "kids-bayu": {
    cat: "liquids",
    img: "img/prod/kids-bayu.webp",
    doc: "downloads/kids-bayu-instrukciya.docx",
    ru: {
      name:"Кидс-Баю",
      heroSub:"Раствор для приёма внутрь на основе ромашки, мелиссы, валерианы и глицина. Мягкая поддержка спокойного сна у детей.",
      introTitle:"Спокойный сон для детей",
      introText:"Кидс-Баю — растительный комплекс с экстрактами ромашки, мелиссы и валерианы и глицином. Помогает при нарушениях засыпания, нервной возбудимости и раздражительности у детей.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь по 100 мл во флаконе с мерным стаканчиком."},
        {h:"Состав на 1 мл", p:"Экстракт ромашки — 15 мг<br>Экстракт мелиссы — 10 мг<br>Экстракт валерианы — 20 мг · Глицин — 1 мг"}
      ],
      props:[
        {h:"Ромашка", p:"Содержит эфирные масла и флавоноиды, оказывает противовоспалительное и антиоксидантное действие, мягко успокаивает."},
        {h:"Глицин и мелисса", p:"Глицин снижает психоэмоциональное напряжение и повышает работоспособность; мелисса успокаивает, подавляет раздражительность и тревогу, способствует спокойному сну."},
        {h:"Валериана", p:"Обладает седативным действием, облегчает засыпание и улучшает качество сна. Эффект развивается мягко и стабильно при курсовом приёме."}
      ],
      areas:[
        {h:"Засыпание", p:"При трудностях с засыпанием у детей."},
        {h:"Возбудимость", p:"При нервной возбудимости и раздражительности."},
        {h:"Сон", p:"При расстройствах сна, улучшает качество сна."},
        {h:"Колики", p:"При кишечных коликах."}
      ],
      dosageText:"Принимается внутрь во время еды. Дети 1–3 года — 5 мл 2 раза в день; 3–12 лет — 5 мл 3 раза в день; взрослые и дети старше 12 лет — 10 мл 3 раза в день. Курс — 7–14 дней, по рекомендации специалиста до 30 дней.",
      dosageStats:[{n:"5 мл",l:"детям 2–3 раза в день"},{n:"7–14",l:"дней курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Kids Bayu",
      heroSub:"Oral solution based on chamomile, lemon balm, valerian and glycine. Gentle support for calm sleep in children.",
      introTitle:"Calm sleep for children",
      introText:"Kids Bayu is a herbal complex with chamomile, lemon balm and valerian extracts and glycine. It helps with falling-asleep difficulties, nervous excitability and irritability in children.",
      infoCards:[
        {h:"Form", p:"Oral solution, 100 ml bottle with a measuring cup."},
        {h:"Composition per 1 ml", p:"Chamomile extract — 15 mg<br>Lemon balm extract — 10 mg<br>Valerian extract — 20 mg · Glycine — 1 mg"}
      ],
      props:[
        {h:"Chamomile", p:"Contains essential oils and flavonoids, has anti-inflammatory and antioxidant action, gently soothes."},
        {h:"Glycine & lemon balm", p:"Glycine reduces psycho-emotional tension and improves performance; lemon balm calms, reduces irritability and anxiety and promotes restful sleep."},
        {h:"Valerian", p:"Has a sedative effect, eases falling asleep and improves sleep quality. The effect develops gently and steadily over a course."}
      ],
      areas:[
        {h:"Falling asleep", p:"For difficulties falling asleep in children."},
        {h:"Excitability", p:"For nervous excitability and irritability."},
        {h:"Sleep", p:"For sleep disturbances, improves sleep quality."},
        {h:"Colic", p:"For intestinal colic."}
      ],
      dosageText:"Taken orally with meals. Children 1–3 years — 5 ml twice a day; 3–12 years — 5 ml three times a day; adults and children over 12 — 10 ml three times a day. Course: 7–14 days, up to 30 days on a specialist's recommendation.",
      dosageStats:[{n:"5 ml",l:"children, 2–3 times a day"},{n:"7–14",l:"days course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Kids Bayu",
      heroSub:"Soluzione orale a base di camomilla, melissa, valeriana e glicina. Sostegno delicato per un sonno tranquillo nei bambini.",
      introTitle:"Un sonno tranquillo per i bambini",
      introText:"Kids Bayu è un complesso vegetale con estratti di camomilla, melissa e valeriana e glicina. Aiuta in caso di difficoltà ad addormentarsi, eccitabilità nervosa e irritabilità nei bambini.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, flacone da 100 ml con bicchiere dosatore."},
        {h:"Composizione per 1 ml", p:"Estratto di camomilla — 15 mg<br>Estratto di melissa — 10 mg<br>Estratto di valeriana — 20 mg · Glicina — 1 mg"}
      ],
      props:[
        {h:"Camomilla", p:"Contiene oli essenziali e flavonoidi, ha azione antinfiammatoria e antiossidante, calma delicatamente."},
        {h:"Glicina e melissa", p:"La glicina riduce la tensione psico-emotiva e migliora le prestazioni; la melissa calma, riduce irritabilità e ansia e favorisce un sonno riposante."},
        {h:"Valeriana", p:"Ha un effetto sedativo, facilita l'addormentamento e migliora la qualità del sonno. L'effetto si sviluppa in modo graduale e stabile con un ciclo."}
      ],
      areas:[
        {h:"Addormentamento", p:"In caso di difficoltà ad addormentarsi nei bambini."},
        {h:"Eccitabilità", p:"In caso di eccitabilità nervosa e irritabilità."},
        {h:"Sonno", p:"In caso di disturbi del sonno, migliora la qualità del sonno."},
        {h:"Coliche", p:"In caso di coliche intestinali."}
      ],
      dosageText:"Per uso orale durante i pasti. Bambini 1–3 anni — 5 ml due volte al giorno; 3–12 anni — 5 ml tre volte al giorno; adulti e bambini sopra i 12 anni — 10 ml tre volte al giorno. Ciclo: 7–14 giorni, fino a 30 giorni su consiglio dello specialista.",
      dosageStats:[{n:"5 ml",l:"bambini, 2–3 volte al giorno"},{n:"7–14",l:"giorni di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Kids Bayu",
      heroSub:"Moychechak, melissa, valeriana va glitsin asosidagi ichimlik eritmasi. Bolalarda tinch uyquni yumshoq qo‘llab-quvvatlash.",
      introTitle:"Bolalar uchun tinch uyqu",
      introText:"Kids Bayu — moychechak, melissa va valeriana ekstraktlari hamda glitsin bilan o‘simlik majmuasi. Bolalarda uxlab qolishdagi qiyinchiliklar, asabiy qo‘zg‘aluvchanlik va jizzakilikda yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, o‘lchov stakanli 100 ml flakon."},
        {h:"1 ml tarkibi", p:"Moychechak ekstrakti — 15 mg<br>Melissa ekstrakti — 10 mg<br>Valeriana ekstrakti — 20 mg · Glitsin — 1 mg"}
      ],
      props:[
        {h:"Moychechak", p:"Efir moylari va flavonoidlarni saqlaydi, yallig‘lanishga qarshi va antioksidant ta’sirga ega, yumshoq tinchlantiradi."},
        {h:"Glitsin va melissa", p:"Glitsin psixoemotsional keskinlikni kamaytiradi va ish qobiliyatini yaxshilaydi; melissa tinchlantiradi, jizzakilik va xavotirni kamaytiradi va tinch uyquga yordam beradi."},
        {h:"Valeriana", p:"Tinchlantiruvchi ta’sirga ega, uxlab qolishni osonlashtiradi va uyqu sifatini yaxshilaydi. Ta’sir kurs davomida yumshoq va barqaror rivojlanadi."}
      ],
      areas:[
        {h:"Uxlab qolish", p:"Bolalarda uxlab qolish qiyinchiliklarida."},
        {h:"Qo‘zg‘aluvchanlik", p:"Asabiy qo‘zg‘aluvchanlik va jizzakilikda."},
        {h:"Uyqu", p:"Uyqu buzilishlarida, uyqu sifatini yaxshilaydi."},
        {h:"Sanchiq", p:"Ichak sanchig‘ida."}
      ],
      dosageText:"Ovqat vaqtida ichki qabul qilinadi. 1–3 yosh bolalar — kuniga ikki marta 5 ml; 3–12 yosh — kuniga uch marta 5 ml; kattalar va 12 yoshdan katta bolalar — kuniga uch marta 10 ml. Kurs: 7–14 kun, mutaxassis tavsiyasi bilan 30 kungacha.",
      dosageStats:[{n:"5 ml",l:"bolalarga, kuniga 2–3 marta"},{n:"7–14",l:"kunlik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "levoxvartin": {
    cat: "liquids",
    img: "img/prod/levoxvartin.webp",
    doc: "downloads/levoxvartin-instrukciya.docx",
    ru: {
      name:"Левохвартин",
      heroSub:"Капли для приёма внутрь с левокарнитином, магнием и экстрактом зелёного чая. Энергия, тонус и поддержка сердца.",
      introTitle:"Энергия и выносливость",
      introText:"Левохвартин — комплекс левокарнитина, лактата магния и экстракта зелёного чая. Способствует снижению утомляемости, повышению работоспособности и поддержке сердца при нагрузках.",
      infoCards:[
        {h:"Форма выпуска", p:"Жидкость (капли для приёма внутрь) в полимерных или стеклянных флаконах."},
        {h:"Состав на 1 мл", p:"Левокарнитин — 90 мг<br>Магний лактат — 15 мг<br>Экстракт зелёного чая — 2 мг"}
      ],
      props:[
        {h:"Левокарнитин", p:"Регулирует обмен веществ, обладает анаболической, антигипоксической и антиоксидантной активностью, усиливает выработку энергии, нормализует уровень холестерина."},
        {h:"Магний", p:"Жизненно важный элемент, участвует в большинстве реакций обмена веществ, в регуляции передачи нервных импульсов и сокращении мышц."},
        {h:"Экстракт зелёного чая", p:"Содержит полифенолы, витамины и микроэлементы; благотворно влияет на обмен веществ, нервную и сердечно-сосудистую системы, укрепляет стенки сосудов."}
      ],
      areas:[
        {h:"Сердце", p:"Поддержка работы сердца при повышенных нагрузках."},
        {h:"Энергия", p:"Снижение утомляемости, повышение работоспособности."},
        {h:"Восстановление", p:"Ускоряет восстановление после тренировок."},
        {h:"Тонус", p:"Улучшает аппетит, тонус и придаёт бодрость."}
      ],
      dosageText:"Принимается внутрь. Детям с 6 лет — по 15 капель 2–3 раза в день; взрослым — по 25–30 капель 2–3 раза в день. Продолжительность приёма — 2–3 недели. При беременности и кормлении грудью — по рекомендации специалиста.",
      dosageStats:[{n:"25–30",l:"капель взрослым 2–3 раза в день"},{n:"2–3",l:"недели курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, детям до 6 лет."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. Не является лекарством."}
      ],
      legal:"Не является лекарством. Перед применением рекомендуется проконсультироваться со специалистом. Ts 306766008-001:2020. Производитель: ООО «HVARA», 220100, Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Levohvartin",
      heroSub:"Oral drops with levocarnitine, magnesium and green tea extract. Energy, tone and heart support.",
      introTitle:"Energy and endurance",
      introText:"Levohvartin is a complex of levocarnitine, magnesium lactate and green tea extract. It helps reduce fatigue, increase performance and support the heart under load.",
      infoCards:[
        {h:"Form", p:"Liquid (oral drops) in polymer or glass bottles."},
        {h:"Composition per 1 ml", p:"Levocarnitine — 90 mg<br>Magnesium lactate — 15 mg<br>Green tea extract — 2 mg"}
      ],
      props:[
        {h:"Levocarnitine", p:"Regulates metabolism, has anabolic, anti-hypoxic and antioxidant activity, boosts energy production and normalizes cholesterol levels."},
        {h:"Magnesium", p:"A vital element involved in most metabolic reactions, in the regulation of nerve impulses and muscle contraction."},
        {h:"Green tea extract", p:"Contains polyphenols, vitamins and trace elements; benefits metabolism, the nervous and cardiovascular systems and strengthens vessel walls."}
      ],
      areas:[
        {h:"Heart", p:"Supports heart function under increased load."},
        {h:"Energy", p:"Reduces fatigue, increases performance."},
        {h:"Recovery", p:"Speeds up recovery after workouts."},
        {h:"Tone", p:"Improves appetite, tone and vitality."}
      ],
      dosageText:"Taken orally. Children from 6 years — 15 drops 2–3 times a day; adults — 25–30 drops 2–3 times a day. Duration: 2–3 weeks. During pregnancy and breastfeeding — on a specialist's recommendation.",
      dosageStats:[{n:"25–30",l:"drops, adults 2–3 times a day"},{n:"2–3",l:"weeks course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, children under 6 years."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Not a medicine."}
      ],
      legal:"Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, 220100, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Levohvartin",
      heroSub:"Gocce orali con levocarnitina, magnesio ed estratto di tè verde. Energia, tono e sostegno al cuore.",
      introTitle:"Energia e resistenza",
      introText:"Levohvartin è un complesso di levocarnitina, lattato di magnesio ed estratto di tè verde. Aiuta a ridurre la stanchezza, aumentare le prestazioni e sostenere il cuore sotto sforzo.",
      infoCards:[
        {h:"Formato", p:"Liquido (gocce orali) in flaconi di polimero o vetro."},
        {h:"Composizione per 1 ml", p:"Levocarnitina — 90 mg<br>Lattato di magnesio — 15 mg<br>Estratto di tè verde — 2 mg"}
      ],
      props:[
        {h:"Levocarnitina", p:"Regola il metabolismo, ha attività anabolica, anti-ipossica e antiossidante, aumenta la produzione di energia e normalizza i livelli di colesterolo."},
        {h:"Magnesio", p:"Elemento vitale coinvolto nella maggior parte delle reazioni metaboliche, nella regolazione degli impulsi nervosi e nella contrazione muscolare."},
        {h:"Estratto di tè verde", p:"Contiene polifenoli, vitamine e oligoelementi; favorisce il metabolismo, i sistemi nervoso e cardiovascolare e rafforza le pareti dei vasi."}
      ],
      areas:[
        {h:"Cuore", p:"Sostiene la funzione cardiaca sotto sforzo."},
        {h:"Energia", p:"Riduce la stanchezza, aumenta le prestazioni."},
        {h:"Recupero", p:"Accelera il recupero dopo l'allenamento."},
        {h:"Tono", p:"Migliora l'appetito, il tono e la vitalità."}
      ],
      dosageText:"Per uso orale. Bambini dai 6 anni — 15 gocce 2–3 volte al giorno; adulti — 25–30 gocce 2–3 volte al giorno. Durata: 2–3 settimane. In gravidanza e allattamento — su consiglio dello specialista.",
      dosageStats:[{n:"25–30",l:"gocce, adulti 2–3 volte al giorno"},{n:"2–3",l:"settimane di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, bambini sotto i 6 anni."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Non è un medicinale."}
      ],
      legal:"Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, 220100, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Levohvartin",
      heroSub:"Levokarnitin, magniy va yashil choy ekstrakti bilan ichimlik tomchilari. Energiya, tetiklik va yurak uchun.",
      introTitle:"Energiya va chidamlilik",
      introText:"Levohvartin — levokarnitin, magniy laktat va yashil choy ekstrakti majmuasi. Charchoqni kamaytirishga, ish qobiliyatini oshirishga va yuklamalar vaqtida yurakni qo‘llab-quvvatlashga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Suyuqlik (ichimlik tomchilari) polimer yoki shisha flakonlarda."},
        {h:"1 ml tarkibi", p:"Levokarnitin — 90 mg<br>Magniy laktat — 15 mg<br>Yashil choy ekstrakti — 2 mg"}
      ],
      props:[
        {h:"Levokarnitin", p:"Moddalar almashinuvini boshqaradi, anabolik, antigipoksik va antioksidant faollikka ega, energiya ishlab chiqarishni kuchaytiradi, xolesterin darajasini me’yorlashtiradi."},
        {h:"Magniy", p:"Hayotiy muhim element, moddalar almashinuvining aksariyat reaksiyalarida, asab impulslari uzatilishini boshqarishda va mushak qisqarishida ishtirok etadi."},
        {h:"Yashil choy ekstrakti", p:"Polifenollar, vitaminlar va mikroelementlarni saqlaydi; moddalar almashinuvi, asab va yurak-qon tomir tizimlariga foydali ta’sir ko‘rsatadi, tomir devorlarini mustahkamlaydi."}
      ],
      areas:[
        {h:"Yurak", p:"Yuqori yuklamalarda yurak faoliyatini qo‘llab-quvvatlash."},
        {h:"Energiya", p:"Charchoqni kamaytirish, ish qobiliyatini oshirish."},
        {h:"Tiklanish", p:"Mashg‘ulotlardan keyin tiklanishni tezlashtiradi."},
        {h:"Tetiklik", p:"Ishtaha, tetiklikni yaxshilaydi va kuch bag‘ishlaydi."}
      ],
      dosageText:"Ichki qabul qilinadi. 6 yoshdan bolalarga — kuniga 2–3 marta 15 tomchidan; kattalarga — kuniga 2–3 marta 25–30 tomchidan. Qabul davomiyligi — 2–3 hafta. Homiladorlik va emizish davrida — mutaxassis tavsiyasi bilan.",
      dosageStats:[{n:"25–30",l:"tomchi, kattalarga kuniga 2–3 marta"},{n:"2–3",l:"haftalik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, 6 yoshgacha bolalar."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. Dori vositasi emas."}
      ],
      legal:"Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, 220100, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "vitadetrim": {
    cat: "liquids",
    img: "img/prod/vitadetrim.webp",
    doc: "downloads/vitadetrim-instrukciya.docx",
    ru: {
      name:"Витадетрим",
      heroSub:"Спрей для приёма внутрь с витамином D3 и экстрактом зелёного чая. Для роста, иммунитета и крепких костей.",
      introTitle:"Витамин D для всей семьи",
      introText:"Витадетрим — источник витамина D3 в сочетании с фитоактивными компонентами зелёного чая. Поддерживает рост и развитие детей, формирование скелета и зубов, снижает риск рахита.",
      infoCards:[
        {h:"Форма выпуска", p:"Жидкость по 15 мл в полимерных или стеклянных спрей-флаконах."},
        {h:"Состав на 1 мл", p:"Холекальциферол (вит. D3) — 4000 МЕ<br>Экстракт зелёного чая — 2 мг"}
      ],
      props:[
        {h:"Витамин D3", p:"Регулирует обмен кальция и фосфора, важен для клеточного деления, развития костной системы, иммунитета, мышц и работы мозга. Способствует всасыванию кальция и фосфора."},
        {h:"Экстракт зелёного чая", p:"Содержит полифенолы, витамины и микроэлементы, благотворно влияет на обмен веществ, нервную и сердечно-сосудистую системы, укрепляет стенки сосудов."},
        {h:"Общее действие", p:"Защищает от хронической усталости, поддерживает психологическое состояние при нервозности, способствует выносливости и общему укреплению."}
      ],
      areas:[
        {h:"Рост и кости", p:"Рост и развитие детей, формирование скелета и зубов."},
        {h:"Профилактика рахита", p:"Снижение риска возникновения рахита."},
        {h:"Сердце", p:"Поддержка сердечно-сосудистой системы."},
        {h:"Тонус", p:"Защита от усталости, поддержка выносливости."}
      ],
      dosageText:"Спрей для приёма внутрь. Детям старше 1 года — по 1 дозе (400 МЕ) 1–2 раза в день; детям старше 12 лет и взрослым — по 2 дозы (800 МЕ) 1–2 раза в день во время еды. Продолжительность приёма — 1–2 месяца.",
      dosageStats:[{n:"800 МЕ",l:"взрослым 1–2 раза в день"},{n:"1–2",l:"месяца курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарством."}
      ],
      legal:"БАД. Не является лекарством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Vitadetrim",
      heroSub:"Oral spray with vitamin D3 and green tea extract. For growth, immunity and strong bones.",
      introTitle:"Vitamin D for the whole family",
      introText:"Vitadetrim is a source of vitamin D3 combined with phytoactive components of green tea. It supports children's growth and development, the formation of the skeleton and teeth and reduces the risk of rickets.",
      infoCards:[
        {h:"Form", p:"Liquid, 15 ml in polymer or glass spray bottles."},
        {h:"Composition per 1 ml", p:"Cholecalciferol (vit. D3) — 4000 IU<br>Green tea extract — 2 mg"}
      ],
      props:[
        {h:"Vitamin D3", p:"Regulates calcium and phosphorus metabolism, important for cell division, bone development, immunity, muscles and brain function. Promotes absorption of calcium and phosphorus."},
        {h:"Green tea extract", p:"Contains polyphenols, vitamins and trace elements, benefits metabolism, the nervous and cardiovascular systems and strengthens vessel walls."},
        {h:"Overall action", p:"Protects against chronic fatigue, supports psychological wellbeing under nervousness and promotes endurance and general strengthening."}
      ],
      areas:[
        {h:"Growth & bones", p:"Growth and development of children, formation of skeleton and teeth."},
        {h:"Rickets prevention", p:"Reduces the risk of rickets."},
        {h:"Heart", p:"Supports the cardiovascular system."},
        {h:"Tone", p:"Protection from fatigue, supports endurance."}
      ],
      dosageText:"Oral spray. Children over 1 year — 1 dose (400 IU) 1–2 times a day; children over 12 and adults — 2 doses (800 IU) 1–2 times a day with meals. Duration: 1–2 months.",
      dosageStats:[{n:"800 IU",l:"adults, 1–2 times a day"},{n:"1–2",l:"months course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Vitadetrim",
      heroSub:"Spray orale con vitamina D3 ed estratto di tè verde. Per crescita, immunità e ossa forti.",
      introTitle:"Vitamina D per tutta la famiglia",
      introText:"Vitadetrim è una fonte di vitamina D3 combinata con i componenti fitoattivi del tè verde. Sostiene la crescita e lo sviluppo dei bambini, la formazione di scheletro e denti e riduce il rischio di rachitismo.",
      infoCards:[
        {h:"Formato", p:"Liquido, 15 ml in flaconi spray di polimero o vetro."},
        {h:"Composizione per 1 ml", p:"Colecalciferolo (vit. D3) — 4000 UI<br>Estratto di tè verde — 2 mg"}
      ],
      props:[
        {h:"Vitamina D3", p:"Regola il metabolismo di calcio e fosforo, importante per la divisione cellulare, lo sviluppo osseo, l'immunità, i muscoli e la funzione cerebrale. Favorisce l'assorbimento di calcio e fosforo."},
        {h:"Estratto di tè verde", p:"Contiene polifenoli, vitamine e oligoelementi, favorisce il metabolismo, i sistemi nervoso e cardiovascolare e rafforza le pareti dei vasi."},
        {h:"Azione generale", p:"Protegge dalla stanchezza cronica, sostiene il benessere psicologico in caso di nervosismo e favorisce la resistenza e il rafforzamento generale."}
      ],
      areas:[
        {h:"Crescita e ossa", p:"Crescita e sviluppo dei bambini, formazione di scheletro e denti."},
        {h:"Prevenzione rachitismo", p:"Riduce il rischio di rachitismo."},
        {h:"Cuore", p:"Sostiene il sistema cardiovascolare."},
        {h:"Tono", p:"Protezione dalla stanchezza, sostiene la resistenza."}
      ],
      dosageText:"Spray orale. Bambini sopra 1 anno — 1 dose (400 UI) 1–2 volte al giorno; bambini sopra i 12 anni e adulti — 2 dosi (800 UI) 1–2 volte al giorno durante i pasti. Durata: 1–2 mesi.",
      dosageStats:[{n:"800 UI",l:"adulti, 1–2 volte al giorno"},{n:"1–2",l:"mesi di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Vitadetrim",
      heroSub:"D3 vitamini va yashil choy ekstrakti bilan og‘iz spreyi. O‘sish, immunitet va mustahkam suyaklar uchun.",
      introTitle:"Butun oila uchun D vitamini",
      introText:"Vitadetrim — yashil choyning fitofaol komponentlari bilan birlashtirilgan D3 vitamini manbai. Bolalarning o‘sishi va rivojlanishini, skelet va tishlar shakllanishini qo‘llab-quvvatlaydi va raxit xavfini kamaytiradi.",
      infoCards:[
        {h:"Formati", p:"Suyuqlik, polimer yoki shisha sprey flakonlarda 15 ml."},
        {h:"1 ml tarkibi", p:"Xoletsalsiferol (D3 vit.) — 4000 XB<br>Yashil choy ekstrakti — 2 mg"}
      ],
      props:[
        {h:"D3 vitamini", p:"Kalsiy va fosfor almashinuvini boshqaradi, hujayra bo‘linishi, suyak rivojlanishi, immunitet, mushaklar va miya faoliyati uchun muhim. Kalsiy va fosfor so‘rilishiga yordam beradi."},
        {h:"Yashil choy ekstrakti", p:"Polifenollar, vitaminlar va mikroelementlarni saqlaydi, moddalar almashinuvi, asab va yurak-qon tomir tizimlariga foydali, tomir devorlarini mustahkamlaydi."},
        {h:"Umumiy ta’sir", p:"Surunkali charchoqdan himoya qiladi, asabiylikda psixologik farovonlikni qo‘llab-quvvatlaydi va chidamlilik hamda umumiy mustahkamlanishga yordam beradi."}
      ],
      areas:[
        {h:"O‘sish va suyaklar", p:"Bolalarning o‘sishi va rivojlanishi, skelet va tishlar shakllanishi."},
        {h:"Raxit oldini olish", p:"Raxit xavfini kamaytiradi."},
        {h:"Yurak", p:"Yurak-qon tomir tizimini qo‘llab-quvvatlaydi."},
        {h:"Tetiklik", p:"Charchoqdan himoya, chidamlilikni qo‘llab-quvvatlaydi."}
      ],
      dosageText:"Og‘iz spreyi. 1 yoshdan katta bolalarga — kuniga 1–2 marta 1 doza (400 XB); 12 yoshdan katta bolalar va kattalarga — ovqat vaqtida kuniga 1–2 marta 2 doza (800 XB). Davomiyligi: 1–2 oy.",
      dosageStats:[{n:"800 XB",l:"kattalarga, kuniga 1–2 marta"},{n:"1–2",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "tride": {
    cat: "liquids",
    img: "img/prod/tride.webp",
    doc: "downloads/tride-instrukciya.docx",
    ru: {
      name:"Триде",
      heroSub:"Спрей для приёма внутрь с витамином D3. Удобная дозировка для крепких костей и иммунитета у детей и взрослых.",
      introTitle:"Витамин D3 в удобном спрее",
      introText:"Триде — источник витамина D3 (холекальциферол) в форме спрея с точной дозировкой. Поддерживает развитие костей, иммунитет и обменные процессы у детей и взрослых.",
      infoCards:[
        {h:"Форма выпуска", p:"Спрей для приёма внутрь, 15 мл (125 доз)."},
        {h:"Состав на 1 дозу", p:"Холекальциферол (вит. D3) — 500 МЕ"}
      ],
      props:[
        {h:"Усвоение кальция", p:"Обеспечивает усвоение кальция и фосфора — важнейших для костной ткани макроэлементов. Необходим для развития костей и связок, здоровья кожи, волос, ногтей и зубов."},
        {h:"Обмен веществ", p:"Регулирует обменные процессы в клетках, поддерживает свёртываемость крови, улучшает усвоение углеводов, препятствует образованию холестериновых бляшек."},
        {h:"Иммунитет", p:"Стимулирует работу иммунной системы, помогает бороться с вирусами и бактериями, снижает риск аутоиммунных процессов."}
      ],
      areas:[
        {h:"Кости", p:"Нормальное развитие костей и связок у детей, здоровье опорно-двигательного аппарата у взрослых."},
        {h:"Иммунитет", p:"Стимулирует иммунную систему."},
        {h:"Нервная система", p:"Повышает чувствительность нервных волокон, поддерживает нервную систему."},
        {h:"Тонус мышц", p:"Способствует тонусу мышц."}
      ],
      dosageText:"Принимается внутрь. Детям — по 1 дозе (одно нажатие, 0,12 мл) в рот 1 раз в день; взрослым — по 1 дозе 2 раза в день во время еды. Курс приёма — 1 месяц. При необходимости можно повторить по рекомендации специалиста.",
      dosageStats:[{n:"500 МЕ",l:"1 доза (одно нажатие)"},{n:"1",l:"месяц курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам препарата."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Tride",
      heroSub:"Oral spray with vitamin D3. Convenient dosing for strong bones and immunity in children and adults.",
      introTitle:"Vitamin D3 in a convenient spray",
      introText:"Tride is a source of vitamin D3 (cholecalciferol) in spray form with precise dosing. It supports bone development, immunity and metabolic processes in children and adults.",
      infoCards:[
        {h:"Form", p:"Oral spray, 15 ml (125 doses)."},
        {h:"Composition per dose", p:"Cholecalciferol (vit. D3) — 500 IU"}
      ],
      props:[
        {h:"Calcium absorption", p:"Ensures absorption of calcium and phosphorus, the key macronutrients for bone tissue. Needed for bone and ligament development and the health of skin, hair, nails and teeth."},
        {h:"Metabolism", p:"Regulates metabolic processes in cells, supports blood clotting, improves carbohydrate absorption and prevents cholesterol plaque formation."},
        {h:"Immunity", p:"Stimulates the immune system, helps fight viruses and bacteria and reduces the risk of autoimmune processes."}
      ],
      areas:[
        {h:"Bones", p:"Normal development of bones and ligaments in children, musculoskeletal health in adults."},
        {h:"Immunity", p:"Stimulates the immune system."},
        {h:"Nervous system", p:"Increases nerve fiber sensitivity, supports the nervous system."},
        {h:"Muscle tone", p:"Promotes muscle tone."}
      ],
      dosageText:"Taken orally. Children — 1 dose (one press, 0.12 ml) into the mouth once a day; adults — 1 dose twice a day with meals. Course: 1 month. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"500 IU",l:"1 dose (one press)"},{n:"1",l:"month course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Tride",
      heroSub:"Spray orale con vitamina D3. Dosaggio comodo per ossa forti e immunità in bambini e adulti.",
      introTitle:"Vitamina D3 in un comodo spray",
      introText:"Tride è una fonte di vitamina D3 (colecalciferolo) in forma spray con dosaggio preciso. Sostiene lo sviluppo osseo, l'immunità e i processi metabolici in bambini e adulti.",
      infoCards:[
        {h:"Formato", p:"Spray orale, 15 ml (125 dosi)."},
        {h:"Composizione per dose", p:"Colecalciferolo (vit. D3) — 500 UI"}
      ],
      props:[
        {h:"Assorbimento del calcio", p:"Garantisce l'assorbimento di calcio e fosforo, i principali macronutrienti per il tessuto osseo. Necessario per lo sviluppo di ossa e legamenti e per la salute di pelle, capelli, unghie e denti."},
        {h:"Metabolismo", p:"Regola i processi metabolici nelle cellule, sostiene la coagulazione del sangue, migliora l'assorbimento dei carboidrati e previene la formazione di placche di colesterolo."},
        {h:"Immunità", p:"Stimola il sistema immunitario, aiuta a combattere virus e batteri e riduce il rischio di processi autoimmuni."}
      ],
      areas:[
        {h:"Ossa", p:"Normale sviluppo di ossa e legamenti nei bambini, salute muscolo-scheletrica negli adulti."},
        {h:"Immunità", p:"Stimola il sistema immunitario."},
        {h:"Sistema nervoso", p:"Aumenta la sensibilità delle fibre nervose, sostiene il sistema nervoso."},
        {h:"Tono muscolare", p:"Favorisce il tono muscolare."}
      ],
      dosageText:"Per uso orale. Bambini — 1 dose (una pressione, 0,12 ml) in bocca una volta al giorno; adulti — 1 dose due volte al giorno durante i pasti. Ciclo: 1 mese. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"500 UI",l:"1 dose (una pressione)"},{n:"1",l:"mese di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Tride",
      heroSub:"D3 vitamini bilan og‘iz spreyi. Bolalar va kattalarda mustahkam suyaklar va immunitet uchun qulay dozalash.",
      introTitle:"Qulay spreyda D3 vitamini",
      introText:"Tride — aniq dozalash bilan sprey shaklidagi D3 vitamini (xoletsalsiferol) manbai. Bolalar va kattalarda suyaklar rivojlanishi, immunitet va moddalar almashinuvini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Og‘iz spreyi, 15 ml (125 doza)."},
        {h:"1 doza tarkibi", p:"Xoletsalsiferol (D3 vit.) — 500 XB"}
      ],
      props:[
        {h:"Kalsiy so‘rilishi", p:"Suyak to‘qimasi uchun eng muhim makroelementlar — kalsiy va fosfor so‘rilishini ta’minlaydi. Suyaklar va boylamlar rivojlanishi hamda teri, soch, tirnoq va tishlar salomatligi uchun zarur."},
        {h:"Moddalar almashinuvi", p:"Hujayralardagi metabolik jarayonlarni boshqaradi, qon ivishini qo‘llab-quvvatlaydi, uglevodlar so‘rilishini yaxshilaydi va xolesterin blyashkalari hosil bo‘lishiga to‘sqinlik qiladi."},
        {h:"Immunitet", p:"Immun tizimini rag‘batlantiradi, virus va bakteriyalarga qarshi kurashishga yordam beradi va autoimmun jarayonlar xavfini kamaytiradi."}
      ],
      areas:[
        {h:"Suyaklar", p:"Bolalarda suyaklar va boylamlarning me’yoriy rivojlanishi, kattalarda tayanch-harakat tizimi salomatligi."},
        {h:"Immunitet", p:"Immun tizimini rag‘batlantiradi."},
        {h:"Asab tizimi", p:"Nerv tolalari sezuvchanligini oshiradi, asab tizimini qo‘llab-quvvatlaydi."},
        {h:"Mushak tonusi", p:"Mushak tonusiga yordam beradi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Bolalarga — kuniga 1 marta og‘izga 1 doza (bir bosish, 0,12 ml); kattalarga — ovqat vaqtida kuniga 2 marta 1 doza. Kurs: 1 oy. Zarur bo‘lganda mutaxassis tavsiyasi bilan takrorlash mumkin.",
      dosageStats:[{n:"500 XB",l:"1 doza (bir bosish)"},{n:"1",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Preparat komponentlariga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "ekstralipt": {
    cat: "sprays",
    listView: true,
    img: "img/prod/ekstralipt.webp",
    doc: "downloads/ekstralipt-ru.docx",
    ru: {
      name:"Экстралипт",
      heroSub:"Спрей для полости рта и горла на растительной основе. Освежает дыхание, поддерживает местный иммунитет и здоровье слизистых.",
      introTitle:"Защита горла и свежее дыхание",
      introText:"Экстралипт — спрей с экстрактами солодки, эвкалипта, алтея и маслом мяты перечной. Поддерживает нормальную функцию слизистых рта и верхних дыхательных путей, укрепляет местный иммунитет и освежает дыхание.",
      infoCards:[
        {h:"Форма выпуска", p:"Жидкость в полимерных или стеклянных флаконах с распылительными насадками."},
        {h:"Состав на 100 мл", p:"Экстракт солодки — 2 г · Эвкалипт — 0,2 г<br>Экстракт алтея — 2 г · Масло мяты — 0,06 г"}
      ],
      props:[
        {h:"Эвкалипт", p:"Эфирное масло обладает вяжущим эффектом, подавляет развитие патогенной микрофлоры, повышает активность иммунной системы, ускоряет регенерацию тканей и укрепляет сосуды."},
        {h:"Солодка", p:"Глицирризиновая кислота активирует факторы иммунной системы, укрепляет слизистые верхних дыхательных путей и ослабляет синтез факторов воспаления."},
        {h:"Мята перечная", p:"Ментол активирует кровообращение, повышает устойчивость слизистой рта и глотки к повреждающим агентам, тормозит развитие болезнетворных бактерий."}
      ],
      areas:[
        {h:"Горло", p:"Поддержание нормальной функции слизистых рта и верхних дыхательных путей."},
        {h:"Иммунитет", p:"Устойчивый местный иммунитет, защита от инфекций."},
        {h:"Простуда", p:"Снижает восприимчивость слизистых к холоду и инфекции."},
        {h:"Свежесть", p:"Освежает дыхание и устраняет неприятные запахи изо рта."}
      ],
      dosageText:"Взрослым и детям для гигиены полости рта распылять непосредственно в полость рта и глотки 3–4 раза в день. Воздержаться от приёма пищи и питья за 30 минут до и после использования. При необходимости возможно дополнительное применение.",
      dosageStats:[{n:"3–4",l:"раза в день"},{n:"30 мин",l:"без еды до и после"}],
      important:[
        {h:"Противопоказания", p:"Не выявлены."},
        {h:"Побочные действия", p:"Не выявлены. При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"36 месяцев. Отпускается без рецепта. Гигиеническое средство, не является лекарством."}
      ],
      legal:"Гигиеническое средство. Не является лекарственным средством! Перед применением рекомендуется консультация специалиста. Ts 306766008-002:2020. Производитель: ООО «HVARA», 220100, Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Ekstralipt",
      heroSub:"Herbal spray for the mouth and throat. Freshens breath, supports local immunity and the health of mucous membranes.",
      introTitle:"Throat protection and fresh breath",
      introText:"Ekstralipt is a spray with extracts of licorice, eucalyptus, marshmallow and peppermint oil. It supports the normal function of the mucous membranes of the mouth and upper respiratory tract, strengthens local immunity and freshens breath.",
      infoCards:[
        {h:"Form", p:"Liquid in polymer or glass bottles with spray nozzles."},
        {h:"Composition per 100 ml", p:"Licorice extract — 2 g · Eucalyptus — 0.2 g<br>Marshmallow extract — 2 g · Mint oil — 0.06 g"}
      ],
      props:[
        {h:"Eucalyptus", p:"The essential oil has an astringent effect, suppresses pathogenic microflora, boosts immune activity, accelerates tissue regeneration and strengthens vessels."},
        {h:"Licorice", p:"Glycyrrhizic acid activates immune-system factors, strengthens the mucous membranes of the upper respiratory tract and reduces the synthesis of inflammatory factors."},
        {h:"Peppermint", p:"Menthol activates blood circulation, increases the resistance of the mouth and throat mucosa to damaging agents and inhibits pathogenic bacteria."}
      ],
      areas:[
        {h:"Throat", p:"Maintains normal function of the mouth and upper respiratory tract mucosa."},
        {h:"Immunity", p:"Steady local immunity, protection against infections."},
        {h:"Colds", p:"Reduces mucosal sensitivity to cold and infection."},
        {h:"Freshness", p:"Freshens breath and eliminates bad odors."}
      ],
      dosageText:"For oral hygiene, adults and children spray directly into the mouth and throat 3–4 times a day. Avoid eating and drinking for 30 minutes before and after use. Additional use is possible if needed.",
      dosageStats:[{n:"3–4",l:"times a day"},{n:"30 min",l:"no food before/after"}],
      important:[
        {h:"Contraindications", p:"None identified."},
        {h:"Side effects", p:"None identified. If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"36 months. Available without prescription. Hygiene product, not a medicine."}
      ],
      legal:"Hygiene product. Not a medicine! Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, 220100, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Ekstralipt",
      heroSub:"Spray vegetale per bocca e gola. Rinfresca l'alito, sostiene l'immunità locale e la salute delle mucose.",
      introTitle:"Protezione della gola e alito fresco",
      introText:"Ekstralipt è uno spray con estratti di liquirizia, eucalipto, altea e olio di menta piperita. Sostiene la normale funzione delle mucose di bocca e vie respiratorie superiori, rafforza l'immunità locale e rinfresca l'alito.",
      infoCards:[
        {h:"Formato", p:"Liquido in flaconi di polimero o vetro con erogatori spray."},
        {h:"Composizione per 100 ml", p:"Estratto di liquirizia — 2 g · Eucalipto — 0,2 g<br>Estratto di altea — 2 g · Olio di menta — 0,06 g"}
      ],
      props:[
        {h:"Eucalipto", p:"L'olio essenziale ha effetto astringente, contrasta la microflora patogena, aumenta l'attività immunitaria, accelera la rigenerazione dei tessuti e rafforza i vasi."},
        {h:"Liquirizia", p:"L'acido glicirrizico attiva i fattori del sistema immunitario, rafforza le mucose delle vie respiratorie superiori e riduce la sintesi dei fattori infiammatori."},
        {h:"Menta piperita", p:"Il mentolo attiva la circolazione, aumenta la resistenza delle mucose di bocca e gola agli agenti dannosi e inibisce i batteri patogeni."}
      ],
      areas:[
        {h:"Gola", p:"Mantiene la normale funzione delle mucose di bocca e vie respiratorie superiori."},
        {h:"Immunità", p:"Immunità locale stabile, protezione dalle infezioni."},
        {h:"Raffreddore", p:"Riduce la sensibilità delle mucose al freddo e alle infezioni."},
        {h:"Freschezza", p:"Rinfresca l'alito ed elimina i cattivi odori."}
      ],
      dosageText:"Per l'igiene orale, adulti e bambini spruzzano direttamente in bocca e gola 3–4 volte al giorno. Evitare di mangiare e bere per 30 minuti prima e dopo l'uso. Se necessario, è possibile un uso aggiuntivo.",
      dosageStats:[{n:"3–4",l:"volte al giorno"},{n:"30 min",l:"senza cibo prima/dopo"}],
      important:[
        {h:"Controindicazioni", p:"Nessuna identificata."},
        {h:"Effetti collaterali", p:"Nessuno identificato. In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"36 mesi. Disponibile senza ricetta. Prodotto igienico, non è un medicinale."}
      ],
      legal:"Prodotto igienico. Non è un medicinale! Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, 220100, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Ekstralipt",
      heroSub:"Og‘iz bo‘shlig‘i va tomoq uchun o‘simlik asosidagi sprey. Nafasni yangilaydi, mahalliy immunitet va shilliq qavatlar salomatligini qo‘llab-quvvatlaydi.",
      introTitle:"Tomoqni himoya va toza nafas",
      introText:"Ekstralipt — qizilmiya, evkalipt, gulxayri ekstraktlari va yalpiz moyi bilan sprey. Og‘iz va yuqori nafas yo‘llari shilliq qavatlarining me’yoriy faoliyatini qo‘llab-quvvatlaydi, mahalliy immunitetni mustahkamlaydi va nafasni yangilaydi.",
      infoCards:[
        {h:"Formati", p:"Purkagich nasadkali polimer yoki shisha flakonlarda suyuqlik."},
        {h:"100 ml tarkibi", p:"Qizilmiya ekstrakti — 2 g · Evkalipt — 0,2 g<br>Gulxayri ekstrakti — 2 g · Yalpiz moyi — 0,06 g"}
      ],
      props:[
        {h:"Evkalipt", p:"Efir moyi qotiruvchi ta’sirga ega, patogen mikrofloraning rivojlanishini bostiradi, immun tizimi faolligini oshiradi, to‘qimalar regeneratsiyasini tezlashtiradi va tomirlarni mustahkamlaydi."},
        {h:"Qizilmiya", p:"Glitsirrizin kislotasi immun tizimi omillarini faollashtiradi, yuqori nafas yo‘llari shilliq qavatlarini mustahkamlaydi va yallig‘lanish omillari sintezini susaytiradi."},
        {h:"Yalpiz", p:"Mentol qon aylanishini faollashtiradi, og‘iz va tomoq shilliq qavatining zararli agentlarga chidamliligini oshiradi va kasallik qo‘zg‘atuvchi bakteriyalar rivojlanishini to‘xtatadi."}
      ],
      areas:[
        {h:"Tomoq", p:"Og‘iz va yuqori nafas yo‘llari shilliq qavatlarining me’yoriy faoliyatini qo‘llab-quvvatlash."},
        {h:"Immunitet", p:"Barqaror mahalliy immunitet, infeksiyalardan himoya."},
        {h:"Shamollash", p:"Shilliq qavatlarning sovuq va infeksiyaga sezuvchanligini kamaytiradi."},
        {h:"Yangilik", p:"Nafasni yangilaydi va og‘izdagi yoqimsiz hidlarni yo‘qotadi."}
      ],
      dosageText:"Og‘iz bo‘shlig‘i gigiyenasi uchun kattalar va bolalar to‘g‘ridan-to‘g‘ri og‘iz va tomoqqa kuniga 3–4 marta purkaydi. Ishlatishdan 30 daqiqa oldin va keyin ovqatlanish va ichishdan saqlaning. Zarur bo‘lganda qo‘shimcha qo‘llash mumkin.",
      dosageStats:[{n:"3–4",l:"marta kuniga"},{n:"30 daq",l:"oldin/keyin ovqatsiz"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Aniqlanmagan."},
        {h:"Nojo‘ya ta’sirlar", p:"Aniqlanmagan. Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"36 oy. Retseptsiz beriladi. Gigiyena vositasi, dori emas."}
      ],
      legal:"Gigiyena vositasi. Dori vositasi emas! Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, 220100, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "ingalitol": {
    cat: "sprays",
    img: "img/prod/ingalitol.webp",
    ru: {
      name:"Ингалитол",
      heroSub:"Спрей для местного применения — антибактериальное и противовоспалительное средство для горла и полости рта.",
      introTitle:"Здоровое горло и крепкий иммунитет",
      introText:"Ингалитол — спрей на растительной основе с экстрактами эвкалипта, солодки, алтея и маслом мяты перечной. Улучшает состояние слизистых горла и полости рта, оказывает антибактериальное и противовоспалительное действие, повышает местный иммунитет.",
      infoCards:[
        {h:"Форма выпуска", p:"Спрей для местного применения, 15 мл, с распылительной насадкой."},
        {h:"Состав на 100 мл", p:"Экстракт эвкалипта — 0,2 мг · Солодка — 2 мг<br>Алтей — 2 мг · Масло мяты — 0,06 мг"}
      ],
      props:[
        {h:"Эвкалипт", p:"Обладает вяжущим эффектом, подавляет развитие патогенной микрофлоры, повышает активность иммунной системы, ускоряет регенерацию тканей и укрепляет сосуды."},
        {h:"Солодка", p:"Глицирризиновая кислота активирует факторы иммунной системы, укрепляет слизистые верхних дыхательных путей и ослабляет воспалительные реакции."},
        {h:"Алтей и мята", p:"Алтей смягчает и защищает слизистую, мята освежает, активирует кровообращение и тормозит развитие болезнетворных бактерий."}
      ],
      areas:[
        {h:"Горло", p:"Улучшает состояние слизистых горла и полости рта."},
        {h:"Антибактериальное", p:"Антибактериальное и противовоспалительное действие."},
        {h:"Иммунитет", p:"Повышает местный иммунитет."},
        {h:"Свежесть", p:"Освежает дыхание и устраняет неприятные запахи."}
      ],
      dosageText:"Взрослым и детям распылять непосредственно в полость рта и горла 3–4 раза в день. Воздержаться от приёма пищи и питья за 30 минут до и после использования. Перед применением взболтать.",
      dosageStats:[{n:"3–4",l:"раза в день"},{n:"15 мл",l:"объём флакона"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"Отпускается без рецепта. Гигиеническое средство, не является лекарством."}
      ],
      legal:"Гигиеническое средство. Не является лекарственным средством! Перед применением рекомендуется консультация специалиста. Ts 306766008-008:2023. Производитель: ООО «HVARA», 220100, Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Ingalitol",
      heroSub:"Topical spray — an antibacterial and anti-inflammatory product for the throat and oral cavity.",
      introTitle:"A healthy throat and strong immunity",
      introText:"Ingalitol is a herbal spray with extracts of eucalyptus, licorice, marshmallow and peppermint oil. It improves the condition of the throat and oral mucosa, has antibacterial and anti-inflammatory action and boosts local immunity.",
      infoCards:[
        {h:"Form", p:"Topical spray, 15 ml, with a spray nozzle."},
        {h:"Composition per 100 ml", p:"Eucalyptus extract — 0.2 mg · Licorice — 2 mg<br>Marshmallow — 2 mg · Mint oil — 0.06 mg"}
      ],
      props:[
        {h:"Eucalyptus", p:"Has an astringent effect, suppresses pathogenic microflora, boosts immune activity, accelerates tissue regeneration and strengthens vessels."},
        {h:"Licorice", p:"Glycyrrhizic acid activates immune-system factors, strengthens the mucosa of the upper respiratory tract and reduces inflammatory reactions."},
        {h:"Marshmallow & mint", p:"Marshmallow softens and protects the mucosa; mint freshens, activates circulation and inhibits pathogenic bacteria."}
      ],
      areas:[
        {h:"Throat", p:"Improves the condition of the throat and oral mucosa."},
        {h:"Antibacterial", p:"Antibacterial and anti-inflammatory action."},
        {h:"Immunity", p:"Boosts local immunity."},
        {h:"Freshness", p:"Freshens breath and eliminates bad odors."}
      ],
      dosageText:"Adults and children spray directly into the mouth and throat 3–4 times a day. Avoid eating and drinking for 30 minutes before and after use. Shake before use.",
      dosageStats:[{n:"3–4",l:"times a day"},{n:"15 ml",l:"bottle volume"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"Available without prescription. Hygiene product, not a medicine."}
      ],
      legal:"Hygiene product. Not a medicine! Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, 220100, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Ingalitol",
      heroSub:"Spray topico — prodotto antibatterico e antinfiammatorio per la gola e il cavo orale.",
      introTitle:"Gola sana e immunità forte",
      introText:"Ingalitol è uno spray vegetale con estratti di eucalipto, liquirizia, altea e olio di menta piperita. Migliora le condizioni delle mucose di gola e cavo orale, ha azione antibatterica e antinfiammatoria e rafforza l'immunità locale.",
      infoCards:[
        {h:"Formato", p:"Spray topico, 15 ml, con erogatore."},
        {h:"Composizione per 100 ml", p:"Estratto di eucalipto — 0,2 mg · Liquirizia — 2 mg<br>Altea — 2 mg · Olio di menta — 0,06 mg"}
      ],
      props:[
        {h:"Eucalipto", p:"Ha effetto astringente, contrasta la microflora patogena, aumenta l'attività immunitaria, accelera la rigenerazione dei tessuti e rafforza i vasi."},
        {h:"Liquirizia", p:"L'acido glicirrizico attiva i fattori del sistema immunitario, rafforza le mucose delle vie respiratorie superiori e riduce le reazioni infiammatorie."},
        {h:"Altea e menta", p:"L'altea ammorbidisce e protegge la mucosa; la menta rinfresca, attiva la circolazione e inibisce i batteri patogeni."}
      ],
      areas:[
        {h:"Gola", p:"Migliora le condizioni delle mucose di gola e cavo orale."},
        {h:"Antibatterico", p:"Azione antibatterica e antinfiammatoria."},
        {h:"Immunità", p:"Rafforza l'immunità locale."},
        {h:"Freschezza", p:"Rinfresca l'alito ed elimina i cattivi odori."}
      ],
      dosageText:"Adulti e bambini spruzzano direttamente in bocca e gola 3–4 volte al giorno. Evitare di mangiare e bere per 30 minuti prima e dopo l'uso. Agitare prima dell'uso.",
      dosageStats:[{n:"3–4",l:"volte al giorno"},{n:"15 ml",l:"volume del flacone"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"Disponibile senza ricetta. Prodotto igienico, non è un medicinale."}
      ],
      legal:"Prodotto igienico. Non è un medicinale! Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, 220100, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Ingalitol",
      heroSub:"Mahalliy qo‘llash uchun sprey — tomoq va og‘iz bo‘shlig‘i uchun antibakterial va yallig‘lanishga qarshi vosita.",
      introTitle:"Sog‘lom tomoq va kuchli immunitet",
      introText:"Ingalitol — evkalipt, qizilmiya, gulxayri ekstraktlari va yalpiz moyi bilan o‘simlik spreyi. Tomoq va og‘iz shilliq qavati holatini yaxshilaydi, antibakterial va yallig‘lanishga qarshi ta’sirga ega va mahalliy immunitetni kuchaytiradi.",
      infoCards:[
        {h:"Formati", p:"Mahalliy sprey, 15 ml, purkagich nasadka bilan."},
        {h:"100 ml tarkibi", p:"Evkalipt ekstrakti — 0,2 mg · Qizilmiya — 2 mg<br>Gulxayri — 2 mg · Yalpiz moyi — 0,06 mg"}
      ],
      props:[
        {h:"Evkalipt", p:"Qotiruvchi ta’sirga ega, patogen mikrofloraning rivojlanishini bostiradi, immun tizimi faolligini oshiradi, to‘qimalar regeneratsiyasini tezlashtiradi va tomirlarni mustahkamlaydi."},
        {h:"Qizilmiya", p:"Glitsirrizin kislotasi immun tizimi omillarini faollashtiradi, yuqori nafas yo‘llari shilliq qavatini mustahkamlaydi va yallig‘lanish reaksiyalarini kamaytiradi."},
        {h:"Gulxayri va yalpiz", p:"Gulxayri shilliq qavatni yumshatadi va himoya qiladi; yalpiz yangilaydi, qon aylanishini faollashtiradi va kasallik qo‘zg‘atuvchi bakteriyalarni to‘xtatadi."}
      ],
      areas:[
        {h:"Tomoq", p:"Tomoq va og‘iz shilliq qavati holatini yaxshilaydi."},
        {h:"Antibakterial", p:"Antibakterial va yallig‘lanishga qarshi ta’sir."},
        {h:"Immunitet", p:"Mahalliy immunitetni kuchaytiradi."},
        {h:"Yangilik", p:"Nafasni yangilaydi va yoqimsiz hidlarni yo‘qotadi."}
      ],
      dosageText:"Kattalar va bolalar to‘g‘ridan-to‘g‘ri og‘iz va tomoqqa kuniga 3–4 marta purkaydi. Ishlatishdan 30 daqiqa oldin va keyin ovqatlanish va ichishdan saqlaning. Ishlatishdan oldin chayqating.",
      dosageStats:[{n:"3–4",l:"marta kuniga"},{n:"15 ml",l:"flakon hajmi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"Retseptsiz beriladi. Gigiyena vositasi, dori emas."}
      ],
      legal:"Gigiyena vositasi. Dori vositasi emas! Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, 220100, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "biodry": {
    cat: "sprays",
    img: "img/prod/biodry.webp",
    doc: "downloads/biodry-instrukciya.docx",
    ru: {
      name:"Био-Драй",
      heroSub:"Спрей-антиперспирант длительного действия от чрезмерного потоотделения — для подмышек, рук и ног.",
      introTitle:"Сухость и комфорт надолго",
      introText:"Био-Драй — эффективное средство длительного действия от обильного потоотделения. Блокирует поры за счёт алюминиево-белкового комплекса, перенаправляя испарение пота, при этом не нарушает работу потовых желёз и безопасен при длительном использовании.",
      infoCards:[
        {h:"Форма выпуска", p:"Жидкость по 50 мл в полимерных или стеклянных флаконах с распылительной насадкой."},
        {h:"Состав на 100 мл", p:"Денатурированный спирт — 50 г<br>Алюминия хлорид — 30 г<br>Экстракт ромашки — 0,025 г · Алоэ вера — 0,025 г"}
      ],
      props:[
        {h:"Алюминия хлорид", p:"Формирует нерастворимый алюминиево-белковый комплекс, блокирующий поры. Нерастворимость «заглушек» гарантирует отсутствие абсорбции алюминия организмом."},
        {h:"Принцип действия", p:"Сокращает потовые железы на обработанных участках кожи. Испарение пота перенаправляется в места, где оно происходит легче, излишки выводятся почками."},
        {h:"Ромашка и алоэ", p:"Смягчают и успокаивают кожу, оказывают противовоспалительное действие, поддерживают комфорт обработанных участков."}
      ],
      areas:[
        {h:"Подмышки", p:"Чрезмерное потоотделение подмышечных впадин."},
        {h:"Руки", p:"Повышенная потливость ладоней."},
        {h:"Ноги", p:"Потливость ступней и других участков тела."},
        {h:"Длительность", p:"Длительный эффект сухости при курсовом применении."}
      ],
      dosageText:"Наносить на чистую сухую кожу подмышечных впадин, ладоней и ступней. Достаточно применять 2–3 раза в неделю или по потребности. Лучше использовать перед сном на сухую кожу.",
      dosageStats:[{n:"2–3",l:"раза в неделю"},{n:"50 мл",l:"объём флакона"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"36 месяцев. Отпускается без рецепта. Гигиеническое средство, не является лекарством."}
      ],
      legal:"Гигиеническое средство. Не является лекарственным средством! Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», 220100, Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Bio-Dry",
      heroSub:"Long-acting antiperspirant spray for excessive sweating — for underarms, hands and feet.",
      introTitle:"Lasting dryness and comfort",
      introText:"Bio-Dry is an effective long-acting product for excessive sweating. It blocks pores via an aluminum-protein complex, redirecting sweat evaporation while not disrupting the sweat glands, and is safe for long-term use.",
      infoCards:[
        {h:"Form", p:"Liquid, 50 ml in polymer or glass bottles with a spray nozzle."},
        {h:"Composition per 100 ml", p:"Denatured alcohol — 50 g<br>Aluminum chloride — 30 g<br>Chamomile extract — 0.025 g · Aloe vera — 0.025 g"}
      ],
      props:[
        {h:"Aluminum chloride", p:"Forms an insoluble aluminum-protein complex that blocks pores. The insolubility of the plugs ensures no aluminum absorption by the body."},
        {h:"Mechanism", p:"Reduces sweat glands on treated skin areas. Sweat evaporation is redirected to areas where it occurs more easily; excess is removed by the kidneys."},
        {h:"Chamomile & aloe", p:"Soften and soothe the skin, provide anti-inflammatory action and maintain comfort of treated areas."}
      ],
      areas:[
        {h:"Underarms", p:"Excessive sweating of the underarms."},
        {h:"Hands", p:"Increased sweating of the palms."},
        {h:"Feet", p:"Sweating of the feet and other body areas."},
        {h:"Long-lasting", p:"Lasting dryness with a course of use."}
      ],
      dosageText:"Apply to clean, dry skin of the underarms, palms and feet. Using it 2–3 times a week or as needed is sufficient. Best applied to dry skin before bedtime.",
      dosageStats:[{n:"2–3",l:"times a week"},{n:"50 ml",l:"bottle volume"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"36 months. Available without prescription. Hygiene product, not a medicine."}
      ],
      legal:"Hygiene product. Not a medicine! Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, 220100, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Bio-Dry",
      heroSub:"Spray antitraspirante a lunga durata contro la sudorazione eccessiva — per ascelle, mani e piedi.",
      introTitle:"Asciutto e comodo a lungo",
      introText:"Bio-Dry è un prodotto efficace a lunga durata contro la sudorazione eccessiva. Blocca i pori tramite un complesso alluminio-proteina, reindirizzando l'evaporazione del sudore senza alterare le ghiandole sudoripare, ed è sicuro per l'uso prolungato.",
      infoCards:[
        {h:"Formato", p:"Liquido, 50 ml in flaconi di polimero o vetro con erogatore."},
        {h:"Composizione per 100 ml", p:"Alcol denaturato — 50 g<br>Cloruro di alluminio — 30 g<br>Estratto di camomilla — 0,025 g · Aloe vera — 0,025 g"}
      ],
      props:[
        {h:"Cloruro di alluminio", p:"Forma un complesso alluminio-proteina insolubile che blocca i pori. L'insolubilità dei tappi garantisce l'assenza di assorbimento di alluminio da parte dell'organismo."},
        {h:"Meccanismo", p:"Riduce le ghiandole sudoripare nelle aree trattate. L'evaporazione del sudore è reindirizzata dove avviene più facilmente; l'eccesso è eliminato dai reni."},
        {h:"Camomilla e aloe", p:"Ammorbidiscono e leniscono la pelle, hanno azione antinfiammatoria e mantengono il comfort delle aree trattate."}
      ],
      areas:[
        {h:"Ascelle", p:"Sudorazione eccessiva delle ascelle."},
        {h:"Mani", p:"Maggiore sudorazione dei palmi."},
        {h:"Piedi", p:"Sudorazione di piedi e altre aree del corpo."},
        {h:"Lunga durata", p:"Asciutto duraturo con un ciclo d'uso."}
      ],
      dosageText:"Applicare su pelle pulita e asciutta di ascelle, palmi e piedi. È sufficiente usarlo 2–3 volte a settimana o secondo necessità. Meglio applicarlo su pelle asciutta prima di dormire.",
      dosageStats:[{n:"2–3",l:"volte a settimana"},{n:"50 ml",l:"volume del flacone"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"36 mesi. Disponibile senza ricetta. Prodotto igienico, non è un medicinale."}
      ],
      legal:"Prodotto igienico. Non è un medicinale! Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, 220100, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Bio-Dry",
      heroSub:"Haddan tashqari terlashga qarshi uzoq ta’sir qiluvchi antiperspirant sprey — qo‘ltiq osti, qo‘l va oyoqlar uchun.",
      introTitle:"Uzoq davom etadigan quruqlik va qulaylik",
      introText:"Bio-Dry — haddan tashqari terlashga qarshi samarali, uzoq ta’sir qiluvchi vosita. Alyuminiy-oqsil majmuasi orqali teshiklarni to‘sadi va ter bug‘lanishini yo‘naltiradi, shu bilan birga ter bezlari ishini buzmaydi va uzoq muddatli foydalanishda xavfsiz.",
      infoCards:[
        {h:"Formati", p:"Purkagich nasadkali polimer yoki shisha flakonlarda 50 ml suyuqlik."},
        {h:"100 ml tarkibi", p:"Denaturatsiyalangan spirt — 50 g<br>Alyuminiy xlorid — 30 g<br>Moychechak ekstrakti — 0,025 g · Aloe vera — 0,025 g"}
      ],
      props:[
        {h:"Alyuminiy xlorid", p:"Teshiklarni to‘sadigan erimaydigan alyuminiy-oqsil majmuasini hosil qiladi. «Tiqin»larning erimasligi organizm tomonidan alyuminiy so‘rilmasligini kafolatlaydi."},
        {h:"Ta’sir mexanizmi", p:"Ishlov berilgan teri sohalarida ter bezlarini qisqartiradi. Ter bug‘lanishi u osonroq sodir bo‘ladigan joylarga yo‘naltiriladi, ortiqchasi buyraklar orqali chiqariladi."},
        {h:"Moychechak va aloe", p:"Terini yumshatadi va tinchlantiradi, yallig‘lanishga qarshi ta’sir ko‘rsatadi va ishlov berilgan sohalar qulayligini saqlaydi."}
      ],
      areas:[
        {h:"Qo‘ltiq osti", p:"Qo‘ltiq osti sohalarining haddan tashqari terlashi."},
        {h:"Qo‘llar", p:"Kaftlarning ortiqcha terlashi."},
        {h:"Oyoqlar", p:"Oyoq panjalari va tananing boshqa sohalari terlashi."},
        {h:"Davomiylik", p:"Kurs bilan qo‘llaganda uzoq davom etadigan quruqlik effekti."}
      ],
      dosageText:"Qo‘ltiq osti, kaft va oyoq panjalarining toza va quruq terisiga surtiladi. Haftasiga 2–3 marta yoki ehtiyojga qarab qo‘llash kifoya. Uxlashdan oldin quruq teriga surtish yaxshiroq.",
      dosageStats:[{n:"2–3",l:"marta haftasiga"},{n:"50 ml",l:"flakon hajmi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"36 oy. Retseptsiz beriladi. Gigiyena vositasi, dori emas."}
      ],
      legal:"Gigiyena vositasi. Dori vositasi emas! Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, 220100, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "aquanos": {
    cat: "sprays",
    img: "img/prod/aquanos.webp",
    doc: "downloads/aquanos-instrukciya.docx",
    ru: {
      name:"Акванос",
      heroSub:"Назальный спрей с морской солью, ромашкой и алоэ вера. Для орошения и промывания полости носа у детей и взрослых.",
      introTitle:"Свободное носовое дыхание",
      introText:"Акванос — средство для орошения и промывания полости носа на основе морской соли с экстрактами ромашки и алоэ вера. Удаляет слизь, размягчает корки, увлажняет слизистую и восстанавливает носовое дыхание.",
      infoCards:[
        {h:"Форма выпуска", p:"Жидкость в полимерных или стеклянных флаконах с распылительными насадками (50 мл)."},
        {h:"Состав на 100 мл", p:"Морская соль — 900 мг / 2,1 г<br>Экстракт ромашки — 25 мг · Алоэ вера — 25 мг"}
      ],
      props:[
        {h:"Морская соль", p:"Удаляет слизь и корки, увлажняет слизистую, уменьшает заложенность носа и восстанавливает носовое дыхание, снижает риск распространения инфекции в пазухи и ухо."},
        {h:"Алоэ вера", p:"Усиливает противовоспалительное, антисептическое и восстанавливающее действие морской воды, дополнительно стимулирует местный иммунитет."},
        {h:"Ромашка", p:"Оказывает противовоспалительное и успокаивающее действие на слизистую носа и носоглотки."}
      ],
      areas:[
        {h:"Риниты", p:"Острые и хронические риниты (насморк), аллергические и вазомоторные."},
        {h:"Синуситы", p:"Острые и хронические синуситы, аденоиды."},
        {h:"Профилактика", p:"Профилактика респираторных инфекций в период простуд."},
        {h:"После операций", p:"Состояния после хирургических вмешательств в полости носа и пазух."}
      ],
      dosageText:"Впрыскивать в каждый носовой ход по 3–4 раза, при необходимости чаще, до полного исчезновения симптомов. Повышает эффективность других препаратов, наносимых на слизистую носа.",
      dosageStats:[{n:"3–4",l:"впрыска в каждый ход"},{n:"50 мл",l:"объём флакона"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"36 месяцев. Отпускается без рецепта. Гигиеническое средство, не является лекарством."}
      ],
      legal:"Гигиеническое средство. Не является лекарственным средством! Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», 220100, Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Aquanos",
      heroSub:"Nasal spray with sea salt, chamomile and aloe vera. For rinsing and irrigating the nasal cavity in children and adults.",
      introTitle:"Free nasal breathing",
      introText:"Aquanos is a sea-salt-based product for irrigating and rinsing the nasal cavity with chamomile and aloe vera extracts. It removes mucus, softens crusts, moisturizes the mucosa and restores nasal breathing.",
      infoCards:[
        {h:"Form", p:"Liquid in polymer or glass bottles with spray nozzles (50 ml)."},
        {h:"Composition per 100 ml", p:"Sea salt — 900 mg / 2.1 g<br>Chamomile extract — 25 mg · Aloe vera — 25 mg"}
      ],
      props:[
        {h:"Sea salt", p:"Removes mucus and crusts, moisturizes the mucosa, reduces nasal congestion and restores nasal breathing, lowering the risk of infection spreading to the sinuses and ear."},
        {h:"Aloe vera", p:"Enhances the anti-inflammatory, antiseptic and restorative action of sea water and additionally stimulates local immunity."},
        {h:"Chamomile", p:"Provides anti-inflammatory and soothing action on the nasal and nasopharyngeal mucosa."}
      ],
      areas:[
        {h:"Rhinitis", p:"Acute and chronic rhinitis (runny nose), allergic and vasomotor."},
        {h:"Sinusitis", p:"Acute and chronic sinusitis, adenoids."},
        {h:"Prevention", p:"Prevention of respiratory infections during the cold season."},
        {h:"After surgery", p:"Conditions after surgery in the nasal cavity and sinuses."}
      ],
      dosageText:"Spray into each nostril 3–4 times, more often if needed, until symptoms fully disappear. Increases the effectiveness of other products applied to the nasal mucosa.",
      dosageStats:[{n:"3–4",l:"sprays per nostril"},{n:"50 ml",l:"bottle volume"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"36 months. Available without prescription. Hygiene product, not a medicine."}
      ],
      legal:"Hygiene product. Not a medicine! Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, 220100, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Aquanos",
      heroSub:"Spray nasale con sale marino, camomilla e aloe vera. Per il lavaggio e l'irrigazione del cavo nasale in bambini e adulti.",
      introTitle:"Respirazione nasale libera",
      introText:"Aquanos è un prodotto a base di sale marino per l'irrigazione e il lavaggio del cavo nasale con estratti di camomilla e aloe vera. Rimuove il muco, ammorbidisce le croste, idrata la mucosa e ripristina la respirazione nasale.",
      infoCards:[
        {h:"Formato", p:"Liquido in flaconi di polimero o vetro con erogatori (50 ml)."},
        {h:"Composizione per 100 ml", p:"Sale marino — 900 mg / 2,1 g<br>Estratto di camomilla — 25 mg · Aloe vera — 25 mg"}
      ],
      props:[
        {h:"Sale marino", p:"Rimuove muco e croste, idrata la mucosa, riduce la congestione nasale e ripristina la respirazione, riducendo il rischio di diffusione dell'infezione a seni e orecchio."},
        {h:"Aloe vera", p:"Potenzia l'azione antinfiammatoria, antisettica e riparatrice dell'acqua di mare e stimola ulteriormente l'immunità locale."},
        {h:"Camomilla", p:"Ha azione antinfiammatoria e lenitiva sulla mucosa nasale e rinofaringea."}
      ],
      areas:[
        {h:"Riniti", p:"Riniti acute e croniche (naso che cola), allergiche e vasomotorie."},
        {h:"Sinusiti", p:"Sinusiti acute e croniche, adenoidi."},
        {h:"Prevenzione", p:"Prevenzione delle infezioni respiratorie nella stagione fredda."},
        {h:"Dopo interventi", p:"Condizioni dopo interventi chirurgici al cavo nasale e ai seni."}
      ],
      dosageText:"Spruzzare in ogni narice 3–4 volte, più spesso se necessario, fino alla completa scomparsa dei sintomi. Aumenta l'efficacia di altri prodotti applicati sulla mucosa nasale.",
      dosageStats:[{n:"3–4",l:"spruzzi per narice"},{n:"50 ml",l:"volume del flacone"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"36 mesi. Disponibile senza ricetta. Prodotto igienico, non è un medicinale."}
      ],
      legal:"Prodotto igienico. Non è un medicinale! Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, 220100, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Aquanos",
      heroSub:"Dengiz tuzi, moychechak va aloe vera bilan burun spreyi. Bolalar va kattalarda burun bo‘shlig‘ini yuvish va namlash uchun.",
      introTitle:"Erkin burun nafasi",
      introText:"Aquanos — moychechak va aloe vera ekstraktlari bilan dengiz tuzi asosidagi burun bo‘shlig‘ini namlash va yuvish vositasi. Shilimshiqni olib tashlaydi, qatqaloqlarni yumshatadi, shilliq qavatni namlaydi va burun nafasini tiklaydi.",
      infoCards:[
        {h:"Formati", p:"Purkagich nasadkali polimer yoki shisha flakonlarda suyuqlik (50 ml)."},
        {h:"100 ml tarkibi", p:"Dengiz tuzi — 900 mg / 2,1 g<br>Moychechak ekstrakti — 25 mg · Aloe vera — 25 mg"}
      ],
      props:[
        {h:"Dengiz tuzi", p:"Shilimshiq va qatqaloqlarni olib tashlaydi, shilliq qavatni namlaydi, burun bitishini kamaytiradi va burun nafasini tiklaydi, infeksiyaning sinuslar va quloqqa tarqalish xavfini kamaytiradi."},
        {h:"Aloe vera", p:"Dengiz suvining yallig‘lanishga qarshi, antiseptik va tiklovchi ta’sirini kuchaytiradi va qo‘shimcha ravishda mahalliy immunitetni rag‘batlantiradi."},
        {h:"Moychechak", p:"Burun va burun-halqum shilliq qavatiga yallig‘lanishga qarshi va tinchlantiruvchi ta’sir ko‘rsatadi."}
      ],
      areas:[
        {h:"Rinitlar", p:"O‘tkir va surunkali rinitlar (tumov), allergik va vazomotor."},
        {h:"Sinusitlar", p:"O‘tkir va surunkali sinusitlar, adenoidlar."},
        {h:"Profilaktika", p:"Shamollash davrida nafas yo‘llari infeksiyalarining oldini olish."},
        {h:"Operatsiyalardan keyin", p:"Burun bo‘shlig‘i va sinuslardagi jarrohlik amaliyotlaridan keyingi holatlar."}
      ],
      dosageText:"Har bir burun yo‘liga 3–4 martadan, zarur bo‘lganda tez-tez, alomatlar to‘liq yo‘qolguncha purkaladi. Burun shilliq qavatiga surtiladigan boshqa preparatlar samaradorligini oshiradi.",
      dosageStats:[{n:"3–4",l:"purkash har yo‘lga"},{n:"50 ml",l:"flakon hajmi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"36 oy. Retseptsiz beriladi. Gigiyena vositasi, dori emas."}
      ],
      legal:"Gigiyena vositasi. Dori vositasi emas! Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, 220100, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "morenos": {
    cat: "sprays",
    img: "img/prod/morenos.webp",
    doc: "downloads/morenos-instrukciya.docx",
    ru: {
      name:"Моренос",
      heroSub:"Назальный спрей с морской солью и гиалуроновой кислотой. Длительное увлажнение и защита слизистой носа.",
      introTitle:"Увлажнение и защита носа",
      introText:"Моренос — средство для орошения и промывания полости носа на основе морской соли с экстрактами ромашки, алоэ вера и гиалуроновой кислотой. Удаляет слизь, увлажняет слизистую и создаёт защитную плёнку для длительного комфорта.",
      infoCards:[
        {h:"Форма выпуска", p:"Жидкость по 15 мл в полимерных или стеклянных флаконах с распылительными насадками."},
        {h:"Состав на 100 мл", p:"Морская соль — 2,1 г · Ромашка — 0,1 г<br>Алоэ вера — 0,1 г · Гиалуроновая кислота — 0,1 г"}
      ],
      props:[
        {h:"Морская соль", p:"Удаляет слизь и корки, увлажняет слизистую, уменьшает заложенность носа, восстанавливает носовое дыхание и снижает риск распространения инфекции в пазухи и ухо."},
        {h:"Гиалуроновая кислота", p:"Природный полимер с увлажняющим действием, создаёт защитную плёнку в полости носа, обеспечивает равномерное длительное увлажнение и защиту от неблагоприятных факторов среды."},
        {h:"Ромашка и алоэ", p:"Усиливают противовоспалительное, антисептическое и восстанавливающее действие морской воды; алоэ дополнительно стимулирует местный иммунитет."}
      ],
      areas:[
        {h:"Риниты", p:"Острые и хронические риниты (насморк), аллергические и вазомоторные."},
        {h:"Синуситы", p:"Острые и хронические синуситы, аденоиды."},
        {h:"Профилактика", p:"Профилактика респираторных инфекций в период простуд."},
        {h:"После операций", p:"Состояния после хирургических вмешательств в полости носа и пазух."}
      ],
      dosageText:"Впрыскивать в каждый носовой ход по 3–4 раза в день, при необходимости чаще, до полного исчезновения симптомов. Повышает эффективность других препаратов, наносимых на слизистую носа.",
      dosageStats:[{n:"3–4",l:"впрыска в день в каждый ход"},{n:"15 мл",l:"объём флакона"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"36 месяцев. Отпускается без рецепта. Гигиеническое средство, не является лекарством."}
      ],
      legal:"Гигиеническое средство. Не является лекарственным средством! Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», 220100, Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Morenos",
      heroSub:"Nasal spray with sea salt and hyaluronic acid. Long-lasting moisturizing and protection of the nasal mucosa.",
      introTitle:"Moisturizing and nasal protection",
      introText:"Morenos is a sea-salt-based product for irrigating and rinsing the nasal cavity with chamomile, aloe vera extracts and hyaluronic acid. It removes mucus, moisturizes the mucosa and forms a protective film for lasting comfort.",
      infoCards:[
        {h:"Form", p:"Liquid, 15 ml in polymer or glass bottles with spray nozzles."},
        {h:"Composition per 100 ml", p:"Sea salt — 2.1 g · Chamomile — 0.1 g<br>Aloe vera — 0.1 g · Hyaluronic acid — 0.1 g"}
      ],
      props:[
        {h:"Sea salt", p:"Removes mucus and crusts, moisturizes the mucosa, reduces nasal congestion, restores nasal breathing and lowers the risk of infection spreading to the sinuses and ear."},
        {h:"Hyaluronic acid", p:"A natural polymer with a moisturizing effect; forms a protective film in the nasal cavity and provides even, lasting hydration and protection from adverse environmental factors."},
        {h:"Chamomile & aloe", p:"Enhance the anti-inflammatory, antiseptic and restorative action of sea water; aloe additionally stimulates local immunity."}
      ],
      areas:[
        {h:"Rhinitis", p:"Acute and chronic rhinitis (runny nose), allergic and vasomotor."},
        {h:"Sinusitis", p:"Acute and chronic sinusitis, adenoids."},
        {h:"Prevention", p:"Prevention of respiratory infections during the cold season."},
        {h:"After surgery", p:"Conditions after surgery in the nasal cavity and sinuses."}
      ],
      dosageText:"Spray into each nostril 3–4 times a day, more often if needed, until symptoms fully disappear. Increases the effectiveness of other products applied to the nasal mucosa.",
      dosageStats:[{n:"3–4",l:"sprays/day per nostril"},{n:"15 ml",l:"bottle volume"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"36 months. Available without prescription. Hygiene product, not a medicine."}
      ],
      legal:"Hygiene product. Not a medicine! Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, 220100, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Morenos",
      heroSub:"Spray nasale con sale marino e acido ialuronico. Idratazione duratura e protezione della mucosa nasale.",
      introTitle:"Idratazione e protezione del naso",
      introText:"Morenos è un prodotto a base di sale marino per l'irrigazione e il lavaggio del cavo nasale con estratti di camomilla, aloe vera e acido ialuronico. Rimuove il muco, idrata la mucosa e forma una pellicola protettiva per un comfort duraturo.",
      infoCards:[
        {h:"Formato", p:"Liquido, 15 ml in flaconi di polimero o vetro con erogatori."},
        {h:"Composizione per 100 ml", p:"Sale marino — 2,1 g · Camomilla — 0,1 g<br>Aloe vera — 0,1 g · Acido ialuronico — 0,1 g"}
      ],
      props:[
        {h:"Sale marino", p:"Rimuove muco e croste, idrata la mucosa, riduce la congestione nasale, ripristina la respirazione e riduce il rischio di diffusione dell'infezione a seni e orecchio."},
        {h:"Acido ialuronico", p:"Polimero naturale con effetto idratante; forma una pellicola protettiva nel cavo nasale e garantisce un'idratazione uniforme e duratura e protezione dagli agenti ambientali."},
        {h:"Camomilla e aloe", p:"Potenziano l'azione antinfiammatoria, antisettica e riparatrice dell'acqua di mare; l'aloe stimola ulteriormente l'immunità locale."}
      ],
      areas:[
        {h:"Riniti", p:"Riniti acute e croniche (naso che cola), allergiche e vasomotorie."},
        {h:"Sinusiti", p:"Sinusiti acute e croniche, adenoidi."},
        {h:"Prevenzione", p:"Prevenzione delle infezioni respiratorie nella stagione fredda."},
        {h:"Dopo interventi", p:"Condizioni dopo interventi chirurgici al cavo nasale e ai seni."}
      ],
      dosageText:"Spruzzare in ogni narice 3–4 volte al giorno, più spesso se necessario, fino alla completa scomparsa dei sintomi. Aumenta l'efficacia di altri prodotti applicati sulla mucosa nasale.",
      dosageStats:[{n:"3–4",l:"spruzzi/giorno per narice"},{n:"15 ml",l:"volume del flacone"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"36 mesi. Disponibile senza ricetta. Prodotto igienico, non è un medicinale."}
      ],
      legal:"Prodotto igienico. Non è un medicinale! Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, 220100, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Morenos",
      heroSub:"Dengiz tuzi va gialuron kislotasi bilan burun spreyi. Burun shilliq qavatini uzoq namlash va himoya qilish.",
      introTitle:"Burunni namlash va himoya",
      introText:"Morenos — moychechak, aloe vera ekstraktlari va gialuron kislotasi bilan dengiz tuzi asosidagi burun bo‘shlig‘ini namlash va yuvish vositasi. Shilimshiqni olib tashlaydi, shilliq qavatni namlaydi va uzoq qulaylik uchun himoya pardasini hosil qiladi.",
      infoCards:[
        {h:"Formati", p:"Purkagich nasadkali polimer yoki shisha flakonlarda 15 ml suyuqlik."},
        {h:"100 ml tarkibi", p:"Dengiz tuzi — 2,1 g · Moychechak — 0,1 g<br>Aloe vera — 0,1 g · Gialuron kislotasi — 0,1 g"}
      ],
      props:[
        {h:"Dengiz tuzi", p:"Shilimshiq va qatqaloqlarni olib tashlaydi, shilliq qavatni namlaydi, burun bitishini kamaytiradi, burun nafasini tiklaydi va infeksiyaning sinuslar va quloqqa tarqalish xavfini kamaytiradi."},
        {h:"Gialuron kislotasi", p:"Namlovchi ta’sirga ega tabiiy polimer, burun bo‘shlig‘ida himoya pardasini hosil qiladi, bir tekis va uzoq namlik hamda noqulay muhit omillaridan himoya ta’minlaydi."},
        {h:"Moychechak va aloe", p:"Dengiz suvining yallig‘lanishga qarshi, antiseptik va tiklovchi ta’sirini kuchaytiradi; aloe qo‘shimcha ravishda mahalliy immunitetni rag‘batlantiradi."}
      ],
      areas:[
        {h:"Rinitlar", p:"O‘tkir va surunkali rinitlar (tumov), allergik va vazomotor."},
        {h:"Sinusitlar", p:"O‘tkir va surunkali sinusitlar, adenoidlar."},
        {h:"Profilaktika", p:"Shamollash davrida nafas yo‘llari infeksiyalarining oldini olish."},
        {h:"Operatsiyalardan keyin", p:"Burun bo‘shlig‘i va sinuslardagi jarrohlik amaliyotlaridan keyingi holatlar."}
      ],
      dosageText:"Har bir burun yo‘liga kuniga 3–4 martadan, zarur bo‘lganda tez-tez, alomatlar to‘liq yo‘qolguncha purkaladi. Burun shilliq qavatiga surtiladigan boshqa preparatlar samaradorligini oshiradi.",
      dosageStats:[{n:"3–4",l:"purkash kuniga har yo‘lga"},{n:"15 ml",l:"flakon hajmi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"36 oy. Retseptsiz beriladi. Gigiyena vositasi, dori emas."}
      ],
      legal:"Gigiyena vositasi. Dori vositasi emas! Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, 220100, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "gilaton": {
    cat: "eye",
    img: "img/prod/gilaton.webp",
    doc: "downloads/gilaton-instrukciya.docx",
    ru: {
      name:"Гилатон",
      heroSub:"Увлажняющие глазные капли с гиалуронатом натрия. При синдроме сухого глаза и для комфортного ношения контактных линз.",
      introTitle:"Комфорт и увлажнение глаз",
      introText:"Гилатон — стерильный раствор с гиалуронатом натрия, по составу близкий к натуральной слезе. Создаёт защитную увлажняющую плёнку на поверхности глаза, устраняет сухость, дискомфорт и трение.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли глазные по 10 мл во флаконе. Прозрачный бесцветный раствор."},
        {h:"Состав на 1 мл", p:"Натрия гиалуронат — 2,0 мг<br>Натрия хлорид, натрия гидро- и дигидрофосфат, вода очищенная"}
      ],
      props:[
        {h:"Гиалуронат натрия", p:"Полимер, идентичный натуральной слезе. Связывает и удерживает воду на поверхности роговицы, уменьшая испарение и высыхание слёзной плёнки."},
        {h:"Увлажнение", p:"Устраняет сухость и зрительный дискомфорт при работе с компьютером, в кондиционированных и задымлённых помещениях, в сухом и жарком климате."},
        {h:"Контактные линзы", p:"Смачивает мягкие и жёсткие линзы, уменьшает трение, позволяет комфортно носить линзы взрослым, подросткам и детям."}
      ],
      areas:[
        {h:"Сухой глаз", p:"При синдроме сухого глаза и дефиците слёзной жидкости."},
        {h:"Линзы", p:"Смачивание и комфорт при ношении контактных линз."},
        {h:"Нагрузка на глаза", p:"При длительной работе за монитором и в агрессивной среде."},
        {h:"Защита роговицы", p:"Защита эпителия роговицы и конъюнктивы при патологиях век."}
      ],
      dosageText:"Закапывать в конъюнктивальный мешок по необходимости. Для линз: капнуть 2–3 капли на линзы перед надеванием или 1–2 капли после. Использовать в течение 1 месяца после вскрытия флакона.",
      dosageStats:[{n:"2–3",l:"капли на линзы"},{n:"1 мес",l:"после вскрытия"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов раствора."},
        {h:"Побочные действия", p:"При непереносимости возможно невыраженное жжение и покраснение. Не смешивать с другими увлажняющими каплями."},
        {h:"Условия хранения", p:"При комнатной температуре, не выше 25 °C, вдали от источников тепла. Не допускать контакта кончика флакона с поверхностями."},
        {h:"Срок годности · отпуск", p:"2 года; после вскрытия — 1 месяц. Отпускается без рецепта."}
      ],
      legal:"Изделие медицинского назначения. Перед применением рекомендуется консультация специалиста. Хранить в недоступном для детей месте. Ts 306766008-010:2021. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Gilaton",
      heroSub:"Moisturizing eye drops with sodium hyaluronate. For dry eye syndrome and comfortable contact-lens wear.",
      introTitle:"Eye comfort and hydration",
      introText:"Gilaton is a sterile solution with sodium hyaluronate, similar in composition to natural tears. It forms a protective moisturizing film on the eye surface, relieving dryness, discomfort and friction.",
      infoCards:[
        {h:"Form", p:"Eye drops, 10 ml bottle. Clear colorless solution."},
        {h:"Composition per 1 ml", p:"Sodium hyaluronate — 2.0 mg<br>Sodium chloride, sodium hydro- and dihydrophosphate, purified water"}
      ],
      props:[
        {h:"Sodium hyaluronate", p:"A polymer identical to natural tears. Binds and retains water on the corneal surface, reducing evaporation and drying of the tear film."},
        {h:"Hydration", p:"Relieves dryness and visual discomfort during computer work, in air-conditioned and smoky rooms and in dry, hot climates."},
        {h:"Contact lenses", p:"Wets soft and rigid lenses, reduces friction and allows comfortable lens wear for adults, teens and children."}
      ],
      areas:[
        {h:"Dry eye", p:"For dry eye syndrome and tear-fluid deficiency."},
        {h:"Lenses", p:"Wetting and comfort during contact-lens wear."},
        {h:"Eye strain", p:"For prolonged screen work and harsh environments."},
        {h:"Cornea protection", p:"Protects the corneal and conjunctival epithelium in eyelid pathologies."}
      ],
      dosageText:"Instill into the conjunctival sac as needed. For lenses: apply 2–3 drops to the lenses before insertion or 1–2 drops after. Use within 1 month after opening the bottle.",
      dosageStats:[{n:"2–3",l:"drops on lenses"},{n:"1 mo",l:"after opening"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the solution's components."},
        {h:"Side effects", p:"In case of intolerance, mild burning and redness are possible. Do not mix with other moisturizing drops."},
        {h:"Storage", p:"At room temperature, no more than 25 °C, away from heat sources. Avoid contact of the tip with any surfaces."},
        {h:"Shelf life · dispensing", p:"2 years; 1 month after opening. Available without prescription."}
      ],
      legal:"Medical device. Consultation with a specialist is recommended before use. Keep out of reach of children. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Gilaton",
      heroSub:"Collirio idratante con ialuronato di sodio. Per la sindrome dell'occhio secco e il comfort delle lenti a contatto.",
      introTitle:"Comfort e idratazione degli occhi",
      introText:"Gilaton è una soluzione sterile con ialuronato di sodio, simile per composizione alle lacrime naturali. Forma una pellicola idratante protettiva sulla superficie oculare, alleviando secchezza, fastidio e attrito.",
      infoCards:[
        {h:"Formato", p:"Collirio, flacone da 10 ml. Soluzione limpida e incolore."},
        {h:"Composizione per 1 ml", p:"Ialuronato di sodio — 2,0 mg<br>Cloruro di sodio, idro- e diidrofosfato di sodio, acqua depurata"}
      ],
      props:[
        {h:"Ialuronato di sodio", p:"Un polimero identico alle lacrime naturali. Lega e trattiene l'acqua sulla superficie corneale, riducendo l'evaporazione e l'essiccamento del film lacrimale."},
        {h:"Idratazione", p:"Allevia secchezza e fastidio visivo durante l'uso del computer, in ambienti climatizzati e fumosi e in climi secchi e caldi."},
        {h:"Lenti a contatto", p:"Bagna lenti morbide e rigide, riduce l'attrito e consente un uso confortevole a adulti, adolescenti e bambini."}
      ],
      areas:[
        {h:"Occhio secco", p:"Per la sindrome dell'occhio secco e la carenza di liquido lacrimale."},
        {h:"Lenti", p:"Bagnatura e comfort durante l'uso delle lenti a contatto."},
        {h:"Affaticamento", p:"Per il lavoro prolungato allo schermo e in ambienti aggressivi."},
        {h:"Protezione corneale", p:"Protegge l'epitelio corneale e congiuntivale nelle patologie palpebrali."}
      ],
      dosageText:"Instillare nel sacco congiuntivale secondo necessità. Per le lenti: applicare 2–3 gocce sulle lenti prima dell'inserimento o 1–2 gocce dopo. Usare entro 1 mese dall'apertura del flacone.",
      dosageStats:[{n:"2–3",l:"gocce sulle lenti"},{n:"1 mese",l:"dopo l'apertura"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti della soluzione."},
        {h:"Effetti collaterali", p:"In caso di intolleranza, possibili lievi bruciore e arrossamento. Non mescolare con altre gocce idratanti."},
        {h:"Conservazione", p:"A temperatura ambiente, non oltre 25 °C, lontano da fonti di calore. Evitare il contatto della punta con qualsiasi superficie."},
        {h:"Scadenza · vendita", p:"2 anni; 1 mese dopo l'apertura. Disponibile senza ricetta."}
      ],
      legal:"Dispositivo medico. Si raccomanda di consultare uno specialista prima dell'uso. Tenere fuori dalla portata dei bambini. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Gilaton",
      heroSub:"Natriy gialuronat bilan namlovchi ko‘z tomchilari. Quruq ko‘z sindromida va kontakt linzalarni qulay taqib yurish uchun.",
      introTitle:"Ko‘z uchun qulaylik va namlik",
      introText:"Gilaton — tabiiy yoshga tarkibi yaqin, natriy gialuronat bilan steril eritma. Ko‘z yuzasida himoya namlovchi parda hosil qiladi, quruqlik, noqulaylik va ishqalanishni bartaraf etadi.",
      infoCards:[
        {h:"Formati", p:"Ko‘z tomchilari, flakonda 10 ml. Tiniq rangsiz eritma."},
        {h:"1 ml tarkibi", p:"Natriy gialuronat — 2,0 mg<br>Natriy xlorid, natriy gidro- va digidrofosfat, tozalangan suv"}
      ],
      props:[
        {h:"Natriy gialuronat", p:"Tabiiy yoshga aynan o‘xshash polimer. Shox parda yuzasida suvni bog‘laydi va ushlab turadi, yosh pardasining bug‘lanishi va qurishini kamaytiradi."},
        {h:"Namlik", p:"Kompyuterda ishlash, konditsionerlangan va tutunli xonalarda, quruq va issiq iqlimda quruqlik va ko‘rish noqulayligini bartaraf etadi."},
        {h:"Kontakt linzalar", p:"Yumshoq va qattiq linzalarni namlaydi, ishqalanishni kamaytiradi, kattalar, o‘smirlar va bolalarga linzalarni qulay taqib yurishga imkon beradi."}
      ],
      areas:[
        {h:"Quruq ko‘z", p:"Quruq ko‘z sindromi va yosh suyuqligi yetishmovchiligida."},
        {h:"Linzalar", p:"Kontakt linzalarni taqishda namlash va qulaylik."},
        {h:"Ko‘zga yuklama", p:"Monitor oldida uzoq ishlash va tajovuzkor muhitda."},
        {h:"Shox parda himoyasi", p:"Qovoq patologiyalarida shox parda va konyunktiva epiteliysini himoya qilish."}
      ],
      dosageText:"Ehtiyojga qarab konyunktival xaltachaga tomiziladi. Linzalar uchun: taqishdan oldin linzalarga 2–3 tomchi yoki taqqandan keyin 1–2 tomchi tomiziladi. Flakon ochilgach 1 oy davomida ishlating.",
      dosageStats:[{n:"2–3",l:"tomchi linzalarga"},{n:"1 oy",l:"ochilgandan keyin"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Eritma komponentlariga individual chidamsizlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Chidamsizlikda kuchsiz achishish va qizarish bo‘lishi mumkin. Boshqa namlovchi tomchilar bilan aralashtirmang."},
        {h:"Saqlash sharoiti", p:"Xona haroratida, 25 °C dan yuqori bo‘lmagan holda, issiqlik manbalaridan uzoqda. Flakon uchini yuzalarga tegizmang."},
        {h:"Yaroqlilik · sotuv", p:"2 yil; ochilgandan keyin — 1 oy. Retseptsiz beriladi."}
      ],
      legal:"Tibbiy maqsadli buyum. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Bolalar yeta olmaydigan joyda saqlang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "neyrogil": {
    cat: "eye",
    img: "img/prod/neyrogil.webp",
    doc: "downloads/neyrogil-instrukciya.docx",
    ru: {
      name:"Нейрогил",
      heroSub:"Глазные капли с гиалуронатом натрия и цитиколином. Офтальмологический нейропротектор с увлажняющим и защитным действием.",
      introTitle:"Защита и нейропротекция глаз",
      introText:"Нейрогил — стерильный раствор с гиалуронатом натрия и цитиколином. Увлажняет и стабилизирует слёзную плёнку, поддерживает восстановление глазной поверхности и оказывает нейропротекторное действие при дегенеративных патологиях глаза.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли глазные по 10 мл во флаконе. Прозрачный бесцветный раствор."},
        {h:"Состав на 1 мл", p:"Гиалуронат натрия — 2,0 мг<br>Цитиколин натрия — 20,0 мг<br>Натрия хлорид, фосфаты, вода очищенная"}
      ],
      props:[
        {h:"Гиалуронат натрия", p:"Улучшает стабильность слёзной плёнки, сохраняет глазную поверхность увлажнённой и защищённой, создаёт благоприятную среду для восстановления эпителия роговицы и конъюнктивы."},
        {h:"Цитиколин", p:"Оказывает структурную поддержку в восстановлении целостности клеточных мембран, повреждённых при дегенеративных глазных патологиях (например, глаукоме)."},
        {h:"Нейропротекция", p:"Нейромедиаторное, антидегенеративное, антиоксидантное и метаболическое действие, улучшение микроциркуляции глаза."}
      ],
      areas:[
        {h:"Сухой глаз", p:"Раздражение, жжение, ощущение инородного тела от внешних факторов."},
        {h:"Глаукома", p:"Профилактика при глаукоме и глаукоматозной нейропатии."},
        {h:"Ретинопатии", p:"Диабетическая ретинопатия, макулодистрофия, изменения глазного дна."},
        {h:"После операций", p:"До и после кераторефракционных операций (LASIK и др.)."}
      ],
      dosageText:"По 1 капле 2–3 раза в сутки или по назначению врача. После закапывания подождать 10–15 минут перед использованием других офтальмологических средств. Использовать в течение 1 месяца после вскрытия.",
      dosageStats:[{n:"1",l:"капля 2–3 раза в сутки"},{n:"1 мес",l:"после вскрытия"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам продукта."},
        {h:"Побочные действия", p:"Возможна временная нечёткость зрения после закапывания. При нежелательных реакциях прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Не касаться кончиком дозатора глаза и предметов."},
        {h:"Срок годности · отпуск", p:"2 года; после вскрытия — 1 месяц. Отпускается без рецепта."}
      ],
      legal:"Изделие медицинского назначения. Перед применением рекомендуется консультация специалиста. Хранить в недоступном для детей месте. Ts 306766008-012:2021. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Neyrogil",
      heroSub:"Eye drops with sodium hyaluronate and citicoline. An ophthalmic neuroprotector with moisturizing and protective action.",
      introTitle:"Eye protection and neuroprotection",
      introText:"Neyrogil is a sterile solution with sodium hyaluronate and citicoline. It moisturizes and stabilizes the tear film, supports restoration of the ocular surface and provides neuroprotective action in degenerative eye conditions.",
      infoCards:[
        {h:"Form", p:"Eye drops, 10 ml bottle. Clear colorless solution."},
        {h:"Composition per 1 ml", p:"Sodium hyaluronate — 2.0 mg<br>Sodium citicoline — 20.0 mg<br>Sodium chloride, phosphates, purified water"}
      ],
      props:[
        {h:"Sodium hyaluronate", p:"Improves tear-film stability, keeps the ocular surface moisturized and protected, and creates a favorable environment for restoring the corneal and conjunctival epithelium."},
        {h:"Citicoline", p:"Provides structural support in restoring the integrity of cell membranes damaged by degenerative eye pathologies (e.g. glaucoma)."},
        {h:"Neuroprotection", p:"Neurotransmitter, anti-degenerative, antioxidant and metabolic action, improving ocular microcirculation."}
      ],
      areas:[
        {h:"Dry eye", p:"Irritation, burning and foreign-body sensation from environmental factors."},
        {h:"Glaucoma", p:"Prevention in glaucoma and glaucomatous neuropathy."},
        {h:"Retinopathies", p:"Diabetic retinopathy, macular degeneration, fundus changes."},
        {h:"After surgery", p:"Before and after keratorefractive surgery (LASIK, etc.)."}
      ],
      dosageText:"1 drop 2–3 times a day or as prescribed by a doctor. After instillation, wait 10–15 minutes before using other ophthalmic products. Use within 1 month after opening.",
      dosageStats:[{n:"1",l:"drop 2–3 times a day"},{n:"1 mo",l:"after opening"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the product's components."},
        {h:"Side effects", p:"Temporary blurred vision is possible after instillation. In case of adverse reactions, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Do not touch the dropper tip to the eye or objects."},
        {h:"Shelf life · dispensing", p:"2 years; 1 month after opening. Available without prescription."}
      ],
      legal:"Medical device. Consultation with a specialist is recommended before use. Keep out of reach of children. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Neyrogil",
      heroSub:"Collirio con ialuronato di sodio e citicolina. Un neuroprotettore oftalmico con azione idratante e protettiva.",
      introTitle:"Protezione e neuroprotezione oculare",
      introText:"Neyrogil è una soluzione sterile con ialuronato di sodio e citicolina. Idrata e stabilizza il film lacrimale, sostiene il ripristino della superficie oculare e offre un'azione neuroprotettiva nelle patologie oculari degenerative.",
      infoCards:[
        {h:"Formato", p:"Collirio, flacone da 10 ml. Soluzione limpida e incolore."},
        {h:"Composizione per 1 ml", p:"Ialuronato di sodio — 2,0 mg<br>Citicolina sodica — 20,0 mg<br>Cloruro di sodio, fosfati, acqua depurata"}
      ],
      props:[
        {h:"Ialuronato di sodio", p:"Migliora la stabilità del film lacrimale, mantiene la superficie oculare idratata e protetta e crea un ambiente favorevole al ripristino dell'epitelio corneale e congiuntivale."},
        {h:"Citicolina", p:"Offre supporto strutturale nel ripristino dell'integrità delle membrane cellulari danneggiate da patologie oculari degenerative (es. glaucoma)."},
        {h:"Neuroprotezione", p:"Azione neurotrasmettitoriale, anti-degenerativa, antiossidante e metabolica, migliorando la microcircolazione oculare."}
      ],
      areas:[
        {h:"Occhio secco", p:"Irritazione, bruciore e sensazione di corpo estraneo da fattori ambientali."},
        {h:"Glaucoma", p:"Prevenzione in glaucoma e neuropatia glaucomatosa."},
        {h:"Retinopatie", p:"Retinopatia diabetica, degenerazione maculare, alterazioni del fondo oculare."},
        {h:"Dopo interventi", p:"Prima e dopo la chirurgia cheratorefrattiva (LASIK, ecc.)."}
      ],
      dosageText:"1 goccia 2–3 volte al giorno o secondo prescrizione medica. Dopo l'instillazione, attendere 10–15 minuti prima di usare altri prodotti oftalmici. Usare entro 1 mese dall'apertura.",
      dosageStats:[{n:"1",l:"goccia 2–3 volte al giorno"},{n:"1 mese",l:"dopo l'apertura"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti del prodotto."},
        {h:"Effetti collaterali", p:"Possibile visione offuscata temporanea dopo l'instillazione. In caso di reazioni avverse, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non oltre 25 °C. Non toccare la punta del contagocce con l'occhio o oggetti."},
        {h:"Scadenza · vendita", p:"2 anni; 1 mese dopo l'apertura. Disponibile senza ricetta."}
      ],
      legal:"Dispositivo medico. Si raccomanda di consultare uno specialista prima dell'uso. Tenere fuori dalla portata dei bambini. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Neyrogil",
      heroSub:"Natriy gialuronat va sitikolin bilan ko‘z tomchilari. Namlovchi va himoya ta’siriga ega oftalmologik neyroprotektor.",
      introTitle:"Ko‘zni himoya va neyroprotektsiya",
      introText:"Neyrogil — natriy gialuronat va sitikolin bilan steril eritma. Yosh pardasini namlaydi va barqarorlashtiradi, ko‘z yuzasini tiklashni qo‘llab-quvvatlaydi va ko‘zning degenerativ patologiyalarida neyroprotektor ta’sir ko‘rsatadi.",
      infoCards:[
        {h:"Formati", p:"Ko‘z tomchilari, flakonda 10 ml. Tiniq rangsiz eritma."},
        {h:"1 ml tarkibi", p:"Natriy gialuronat — 2,0 mg<br>Natriy sitikolin — 20,0 mg<br>Natriy xlorid, fosfatlar, tozalangan suv"}
      ],
      props:[
        {h:"Natriy gialuronat", p:"Yosh pardasi barqarorligini yaxshilaydi, ko‘z yuzasini namlangan va himoyalangan holda saqlaydi, shox parda va konyunktiva epiteliysini tiklash uchun qulay muhit yaratadi."},
        {h:"Sitikolin", p:"Degenerativ ko‘z patologiyalarida (masalan, glaukomada) shikastlangan hujayra membranalari yaxlitligini tiklashda strukturaviy yordam beradi."},
        {h:"Neyroprotektsiya", p:"Neyromediator, antidegenerativ, antioksidant va metabolik ta’sir, ko‘z mikrotsirkulyatsiyasini yaxshilash."}
      ],
      areas:[
        {h:"Quruq ko‘z", p:"Tashqi omillardan ta’sirlanish, achishish, begona jism hissi."},
        {h:"Glaukoma", p:"Glaukoma va glaukomatoz neyropatiyada profilaktika."},
        {h:"Retinopatiyalar", p:"Diabetik retinopatiya, makulodistrofiya, ko‘z tubi o‘zgarishlari."},
        {h:"Operatsiyalardan keyin", p:"Keratorefraksion operatsiyalardan (LASIK va boshqalar) oldin va keyin."}
      ],
      dosageText:"Kuniga 2–3 marta 1 tomchidan yoki shifokor ko‘rsatmasi bo‘yicha. Tomizgandan so‘ng boshqa oftalmologik vositalardan foydalanishdan oldin 10–15 daqiqa kuting. Ochilgandan keyin 1 oy davomida ishlating.",
      dosageStats:[{n:"1",l:"tomchi kuniga 2–3 marta"},{n:"1 oy",l:"ochilgandan keyin"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Mahsulot komponentlariga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Tomizgandan keyin vaqtinchalik ko‘rish xiralashuvi mumkin. Nojo‘ya reaksiyalarda qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Dozator uchini ko‘z va buyumlarga tegizmang."},
        {h:"Yaroqlilik · sotuv", p:"2 yil; ochilgandan keyin — 1 oy. Retseptsiz beriladi."}
      ],
      legal:"Tibbiy maqsadli buyum. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Bolalar yeta olmaydigan joyda saqlang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "retilan": {
    cat: "eye",
    img: "img/prod/retilan.webp",
    doc: "downloads/retilan-instrukciya.docx",
    ru: {
      name:"Ретилан",
      heroSub:"Глазные капли с цитиколином, витамином B12 и гиалуронатом натрия. Офтальмологический нейропротектор.",
      introTitle:"Нейропротекция зрительного нерва",
      introText:"Ретилан — стерильный раствор с цитиколином, цианокобаламином (B12) и гиалуронатом натрия. Поддерживает восстановление нервных волокон зрительного нерва и защищает глазную поверхность при дегенеративных заболеваниях глаза.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли глазные по 10 мл во флаконе. Прозрачный раствор красного цвета."},
        {h:"Состав на 1 мл", p:"Цитиколин натрия — 20,0 мг<br>Гиалуронат натрия — 2,0 мг · B12 — 0,5 мг<br>Натрия хлорид, фосфаты, вода очищенная"}
      ],
      props:[
        {h:"Цитиколин", p:"Предшественник фосфолипидов нейрональных мембран. Восстанавливает целостность повреждённых мембран нервных клеток, фактор роста нервных волокон зрительного нерва при дегенеративных патологиях."},
        {h:"Витамин B12", p:"Восстанавливает миелинизацию и регенерацию нервных волокон, способствует реэпителизации роговицы и защищает клетки от свободных радикалов."},
        {h:"Гиалуронат натрия", p:"Улучшает стабильность слёзной плёнки, удерживает действующие компоненты на поверхности глаза и способствует миграции цитиколина в структуры глаза."}
      ],
      areas:[
        {h:"Глаукома", p:"Оптическая глаукоматозная нейропатия, ишемическая нейропатия."},
        {h:"Ретинопатии", p:"Диабетическая ретинопатия, макулодистрофия, изменения сетчатки."},
        {h:"Зрение", p:"Миопия и гиперметропия высокой степени, амблиопия, катаракта."},
        {h:"После операций", p:"Оперативные вмешательства на переднем сегменте глаза."}
      ],
      dosageText:"По 1 капле 2–3 раза в сутки или по назначению врача. Рекомендуемый курс — 2 месяца 3 раза в год или 4 месяца 2 раза в год. Подождать 10–15 минут перед другими офтальмологическими средствами.",
      dosageStats:[{n:"1",l:"капля 2–3 раза в сутки"},{n:"1 мес",l:"после вскрытия"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам продукта."},
        {h:"Побочные действия", p:"Возможна временная нечёткость зрения после закапывания. При нежелательных реакциях прекратить применение и обратиться к врачу."},
        {h:"Взаимодействие", p:"B12 фармакологически несовместим с аскорбиновой кислотой, солями тяжёлых металлов, тиамином, пиридоксином, рибофлавином."},
        {h:"Хранение · срок", p:"При температуре не выше 25 °C. 2 года; после вскрытия — 1 месяц. Отпускается без рецепта."}
      ],
      legal:"Изделие медицинского назначения. Перед применением рекомендуется консультация специалиста. Хранить в недоступном для детей месте. Ts 306766008-013:2021. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Retilan",
      heroSub:"Eye drops with citicoline, vitamin B12 and sodium hyaluronate. An ophthalmic neuroprotector.",
      introTitle:"Optic-nerve neuroprotection",
      introText:"Retilan is a sterile solution with citicoline, cyanocobalamin (B12) and sodium hyaluronate. It supports restoration of optic-nerve fibers and protects the ocular surface in degenerative eye conditions.",
      infoCards:[
        {h:"Form", p:"Eye drops, 10 ml bottle. Clear red solution."},
        {h:"Composition per 1 ml", p:"Sodium citicoline — 20.0 mg<br>Sodium hyaluronate — 2.0 mg · B12 — 0.5 mg<br>Sodium chloride, phosphates, purified water"}
      ],
      props:[
        {h:"Citicoline", p:"A precursor of neuronal-membrane phospholipids. Restores the integrity of damaged nerve-cell membranes and acts as a growth factor for optic-nerve fibers in degenerative pathologies."},
        {h:"Vitamin B12", p:"Restores myelination and regeneration of nerve fibers, promotes corneal re-epithelialization and protects cells from free radicals."},
        {h:"Sodium hyaluronate", p:"Improves tear-film stability, keeps the active components on the eye surface and helps citicoline migrate into the eye's structures."}
      ],
      areas:[
        {h:"Glaucoma", p:"Optic glaucomatous neuropathy, ischemic neuropathy."},
        {h:"Retinopathies", p:"Diabetic retinopathy, macular degeneration, retinal changes."},
        {h:"Vision", p:"High myopia and hyperopia, amblyopia, cataract."},
        {h:"After surgery", p:"Surgical interventions on the anterior segment of the eye."}
      ],
      dosageText:"1 drop 2–3 times a day or as prescribed by a doctor. Recommended course — 2 months 3 times a year or 4 months twice a year. Wait 10–15 minutes before other ophthalmic products.",
      dosageStats:[{n:"1",l:"drop 2–3 times a day"},{n:"1 mo",l:"after opening"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the product's components."},
        {h:"Side effects", p:"Temporary blurred vision is possible after instillation. In case of adverse reactions, stop use and consult a doctor."},
        {h:"Interactions", p:"B12 is pharmacologically incompatible with ascorbic acid, heavy-metal salts, thiamine, pyridoxine and riboflavin."},
        {h:"Storage · shelf life", p:"At no more than 25 °C. 2 years; 1 month after opening. Available without prescription."}
      ],
      legal:"Medical device. Consultation with a specialist is recommended before use. Keep out of reach of children. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Retilan",
      heroSub:"Collirio con citicolina, vitamina B12 e ialuronato di sodio. Un neuroprotettore oftalmico.",
      introTitle:"Neuroprotezione del nervo ottico",
      introText:"Retilan è una soluzione sterile con citicolina, cianocobalamina (B12) e ialuronato di sodio. Sostiene il ripristino delle fibre del nervo ottico e protegge la superficie oculare nelle patologie oculari degenerative.",
      infoCards:[
        {h:"Formato", p:"Collirio, flacone da 10 ml. Soluzione limpida di colore rosso."},
        {h:"Composizione per 1 ml", p:"Citicolina sodica — 20,0 mg<br>Ialuronato di sodio — 2,0 mg · B12 — 0,5 mg<br>Cloruro di sodio, fosfati, acqua depurata"}
      ],
      props:[
        {h:"Citicolina", p:"Precursore dei fosfolipidi delle membrane neuronali. Ripristina l'integrità delle membrane delle cellule nervose danneggiate e funge da fattore di crescita per le fibre del nervo ottico nelle patologie degenerative."},
        {h:"Vitamina B12", p:"Ripristina la mielinizzazione e la rigenerazione delle fibre nervose, favorisce la ri-epitelizzazione corneale e protegge le cellule dai radicali liberi."},
        {h:"Ialuronato di sodio", p:"Migliora la stabilità del film lacrimale, mantiene i componenti attivi sulla superficie oculare e favorisce la migrazione della citicolina nelle strutture dell'occhio."}
      ],
      areas:[
        {h:"Glaucoma", p:"Neuropatia glaucomatosa ottica, neuropatia ischemica."},
        {h:"Retinopatie", p:"Retinopatia diabetica, degenerazione maculare, alterazioni retiniche."},
        {h:"Vista", p:"Miopia e ipermetropia elevate, ambliopia, cataratta."},
        {h:"Dopo interventi", p:"Interventi chirurgici sul segmento anteriore dell'occhio."}
      ],
      dosageText:"1 goccia 2–3 volte al giorno o secondo prescrizione medica. Ciclo consigliato — 2 mesi 3 volte l'anno o 4 mesi 2 volte l'anno. Attendere 10–15 minuti prima di altri prodotti oftalmici.",
      dosageStats:[{n:"1",l:"goccia 2–3 volte al giorno"},{n:"1 mese",l:"dopo l'apertura"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti del prodotto."},
        {h:"Effetti collaterali", p:"Possibile visione offuscata temporanea dopo l'instillazione. In caso di reazioni avverse, interrompere l'uso e consultare un medico."},
        {h:"Interazioni", p:"La B12 è farmacologicamente incompatibile con acido ascorbico, sali di metalli pesanti, tiamina, piridossina e riboflavina."},
        {h:"Conservazione · scadenza", p:"A non oltre 25 °C. 2 anni; 1 mese dopo l'apertura. Disponibile senza ricetta."}
      ],
      legal:"Dispositivo medico. Si raccomanda di consultare uno specialista prima dell'uso. Tenere fuori dalla portata dei bambini. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Retilan",
      heroSub:"Sitikolin, B12 vitamini va natriy gialuronat bilan ko‘z tomchilari. Oftalmologik neyroprotektor.",
      introTitle:"Ko‘rish nervi neyroprotektsiyasi",
      introText:"Retilan — sitikolin, sianokobalamin (B12) va natriy gialuronat bilan steril eritma. Ko‘rish nervi tolalarini tiklashni qo‘llab-quvvatlaydi va ko‘zning degenerativ kasalliklarida ko‘z yuzasini himoya qiladi.",
      infoCards:[
        {h:"Formati", p:"Ko‘z tomchilari, flakonda 10 ml. Tiniq qizil rangli eritma."},
        {h:"1 ml tarkibi", p:"Natriy sitikolin — 20,0 mg<br>Natriy gialuronat — 2,0 mg · B12 — 0,5 mg<br>Natriy xlorid, fosfatlar, tozalangan suv"}
      ],
      props:[
        {h:"Sitikolin", p:"Neyronal membrana fosfolipidlari peshqadami. Nerv hujayralarining shikastlangan membranalari yaxlitligini tiklaydi, degenerativ patologiyalarda ko‘rish nervi tolalari o‘sish omili."},
        {h:"B12 vitamini", p:"Nerv tolalarining miyelinlanishi va regeneratsiyasini tiklaydi, shox parda reepitelizatsiyasiga yordam beradi va hujayralarni erkin radikallardan himoya qiladi."},
        {h:"Natriy gialuronat", p:"Yosh pardasi barqarorligini yaxshilaydi, faol komponentlarni ko‘z yuzasida ushlab turadi va sitikolinning ko‘z tuzilmalariga o‘tishiga yordam beradi."}
      ],
      areas:[
        {h:"Glaukoma", p:"Optik glaukomatoz neyropatiya, ishemik neyropatiya."},
        {h:"Retinopatiyalar", p:"Diabetik retinopatiya, makulodistrofiya, to‘r parda o‘zgarishlari."},
        {h:"Ko‘rish", p:"Yuqori darajali miopiya va gipermetropiya, ambliopiya, katarakta."},
        {h:"Operatsiyalardan keyin", p:"Ko‘zning old segmentidagi jarrohlik amaliyotlari."}
      ],
      dosageText:"Kuniga 2–3 marta 1 tomchidan yoki shifokor ko‘rsatmasi bo‘yicha. Tavsiya etilgan kurs — yiliga 3 marta 2 oy yoki yiliga 2 marta 4 oy. Boshqa oftalmologik vositalardan oldin 10–15 daqiqa kuting.",
      dosageStats:[{n:"1",l:"tomchi kuniga 2–3 marta"},{n:"1 oy",l:"ochilgandan keyin"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Mahsulot komponentlariga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Tomizgandan keyin vaqtinchalik ko‘rish xiralashuvi mumkin. Nojo‘ya reaksiyalarda qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"O‘zaro ta’sir", p:"B12 askorbin kislotasi, og‘ir metall tuzlari, tiamin, piridoksin, riboflavin bilan farmakologik jihatdan mos kelmaydi."},
        {h:"Saqlash · muddat", p:"25 °C dan yuqori bo‘lmagan haroratda. 2 yil; ochilgandan keyin — 1 oy. Retseptsiz beriladi."}
      ],
      legal:"Tibbiy maqsadli buyum. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Bolalar yeta olmaydigan joyda saqlang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "tagilin": {
    cat: "eye",
    img: "img/prod/tagilin.webp",
    doc: "downloads/tagilin-instrukciya.docx",
    ru: {
      name:"Тагилин",
      heroSub:"Глазные капли с таурином и гиалуронатом натрия. Стимулируют восстановление тканей глаза при дистрофии роговицы и катаракте.",
      introTitle:"Восстановление и увлажнение глаза",
      introText:"Тагилин — стерильный раствор с таурином и гиалуронатом натрия. Стимулирует репаративные и регенерационные процессы при дистрофических заболеваниях сетчатки и роговицы, увлажняет и защищает глазную поверхность.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли глазные по 10 мл во флаконе. Прозрачный бесцветный раствор."},
        {h:"Состав на 1 мл", p:"Таурин — 5,0 мг<br>Гиалуронат натрия — 2,0 мг<br>Натрия хлорид, фосфаты, вода очищенная"}
      ],
      props:[
        {h:"Таурин", p:"Аминокислота, стимулирующая репаративные и регенерационные процессы при дистрофических заболеваниях сетчатки, травмах тканей глаза и нарушениях метаболизма. Практически не всасывается в системный кровоток."},
        {h:"Гиалуронат натрия", p:"Улучшает стабильность слёзной плёнки, сохраняет глазную поверхность увлажнённой и защищённой, создаёт благоприятную среду для восстановления роговицы и конъюнктивы."},
        {h:"Совместное действие", p:"Сочетание увлажнения и регенерации поддерживает здоровье глазной поверхности при повышенных нагрузках."}
      ],
      areas:[
        {h:"Роговица", p:"Травма и дистрофия роговицы."},
        {h:"Катаракта", p:"Старческая, диабетическая, травматическая и лучевая катаракта."},
        {h:"Сетчатка", p:"Дистрофические заболевания сетчатки."},
        {h:"Увлажнение", p:"Восстановление и защита глазной поверхности."}
      ],
      dosageText:"При катаракте — по 1–2 капли 2–4 раза в день в течение 3 месяцев, курсы повторяют с месячным интервалом. При травмах и дистрофии роговицы — в тех же дозах в течение 1 месяца. Доза устанавливается индивидуально.",
      dosageStats:[{n:"1–2",l:"капли 2–4 раза в день"},{n:"1 мес",l:"после вскрытия"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам; детский и подростковый возраст до 18 лет; беременность и лактация."},
        {h:"Побочные действия", p:"Аллергический конъюнктивит. При нежелательных реакциях прекратить применение и обратиться к врачу."},
        {h:"Взаимодействие", p:"Не применять одновременно с другими глазными препаратами; интервал между закапываниями — не менее 15 минут."},
        {h:"Хранение · срок", p:"При температуре не выше 25 °C. 2 года; после вскрытия — 1 месяц. Отпускается без рецепта."}
      ],
      legal:"Изделие медицинского назначения. Перед применением рекомендуется консультация специалиста. Хранить в недоступном для детей месте. Ts 306766008-011:2021. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Tagilin",
      heroSub:"Eye drops with taurine and sodium hyaluronate. Stimulate eye-tissue restoration in corneal dystrophy and cataract.",
      introTitle:"Eye restoration and hydration",
      introText:"Tagilin is a sterile solution with taurine and sodium hyaluronate. It stimulates reparative and regenerative processes in dystrophic diseases of the retina and cornea and moisturizes and protects the ocular surface.",
      infoCards:[
        {h:"Form", p:"Eye drops, 10 ml bottle. Clear colorless solution."},
        {h:"Composition per 1 ml", p:"Taurine — 5.0 mg<br>Sodium hyaluronate — 2.0 mg<br>Sodium chloride, phosphates, purified water"}
      ],
      props:[
        {h:"Taurine", p:"An amino acid that stimulates reparative and regenerative processes in dystrophic retinal diseases, eye-tissue injuries and metabolic disorders. Hardly absorbed into the systemic circulation."},
        {h:"Sodium hyaluronate", p:"Improves tear-film stability, keeps the ocular surface moisturized and protected and creates a favorable environment for restoring the cornea and conjunctiva."},
        {h:"Combined action", p:"The combination of hydration and regeneration supports ocular-surface health under increased strain."}
      ],
      areas:[
        {h:"Cornea", p:"Corneal injury and dystrophy."},
        {h:"Cataract", p:"Senile, diabetic, traumatic and radiation cataract."},
        {h:"Retina", p:"Dystrophic diseases of the retina."},
        {h:"Hydration", p:"Restoration and protection of the ocular surface."}
      ],
      dosageText:"For cataract — 1–2 drops 2–4 times a day for 3 months, courses repeated at monthly intervals. For corneal injuries and dystrophy — same doses for 1 month. Dose set individually.",
      dosageStats:[{n:"1–2",l:"drops 2–4 times a day"},{n:"1 mo",l:"after opening"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components; children and adolescents under 18; pregnancy and lactation."},
        {h:"Side effects", p:"Allergic conjunctivitis. In case of adverse reactions, stop use and consult a doctor."},
        {h:"Interactions", p:"Do not use simultaneously with other eye products; the interval between instillations should be at least 15 minutes."},
        {h:"Storage · shelf life", p:"At no more than 25 °C. 2 years; 1 month after opening. Available without prescription."}
      ],
      legal:"Medical device. Consultation with a specialist is recommended before use. Keep out of reach of children. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Tagilin",
      heroSub:"Collirio con taurina e ialuronato di sodio. Stimolano il ripristino dei tessuti oculari in distrofia corneale e cataratta.",
      introTitle:"Ripristino e idratazione dell'occhio",
      introText:"Tagilin è una soluzione sterile con taurina e ialuronato di sodio. Stimola i processi riparativi e rigenerativi nelle malattie distrofiche di retina e cornea e idrata e protegge la superficie oculare.",
      infoCards:[
        {h:"Formato", p:"Collirio, flacone da 10 ml. Soluzione limpida e incolore."},
        {h:"Composizione per 1 ml", p:"Taurina — 5,0 mg<br>Ialuronato di sodio — 2,0 mg<br>Cloruro di sodio, fosfati, acqua depurata"}
      ],
      props:[
        {h:"Taurina", p:"Un amminoacido che stimola i processi riparativi e rigenerativi nelle malattie distrofiche retiniche, nelle lesioni dei tessuti oculari e nei disturbi metabolici. Quasi non assorbita nel circolo sistemico."},
        {h:"Ialuronato di sodio", p:"Migliora la stabilità del film lacrimale, mantiene la superficie oculare idratata e protetta e crea un ambiente favorevole al ripristino di cornea e congiuntiva."},
        {h:"Azione combinata", p:"La combinazione di idratazione e rigenerazione sostiene la salute della superficie oculare sotto sforzo."}
      ],
      areas:[
        {h:"Cornea", p:"Lesioni e distrofia corneale."},
        {h:"Cataratta", p:"Cataratta senile, diabetica, traumatica e da radiazioni."},
        {h:"Retina", p:"Malattie distrofiche della retina."},
        {h:"Idratazione", p:"Ripristino e protezione della superficie oculare."}
      ],
      dosageText:"Per la cataratta — 1–2 gocce 2–4 volte al giorno per 3 mesi, cicli ripetuti a intervalli mensili. Per lesioni e distrofia corneale — stesse dosi per 1 mese. Dose stabilita individualmente.",
      dosageStats:[{n:"1–2",l:"gocce 2–4 volte al giorno"},{n:"1 mese",l:"dopo l'apertura"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti; bambini e adolescenti sotto i 18 anni; gravidanza e allattamento."},
        {h:"Effetti collaterali", p:"Congiuntivite allergica. In caso di reazioni avverse, interrompere l'uso e consultare un medico."},
        {h:"Interazioni", p:"Non usare contemporaneamente ad altri prodotti oftalmici; l'intervallo tra le instillazioni deve essere di almeno 15 minuti."},
        {h:"Conservazione · scadenza", p:"A non oltre 25 °C. 2 anni; 1 mese dopo l'apertura. Disponibile senza ricetta."}
      ],
      legal:"Dispositivo medico. Si raccomanda di consultare uno specialista prima dell'uso. Tenere fuori dalla portata dei bambini. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Tagilin",
      heroSub:"Taurin va natriy gialuronat bilan ko‘z tomchilari. Shox parda distrofiyasi va kataraktada ko‘z to‘qimalarini tiklashni rag‘batlantiradi.",
      introTitle:"Ko‘zni tiklash va namlash",
      introText:"Tagilin — taurin va natriy gialuronat bilan steril eritma. To‘r parda va shox pardaning distrofik kasalliklarida tiklovchi va regenerativ jarayonlarni rag‘batlantiradi hamda ko‘z yuzasini namlaydi va himoya qiladi.",
      infoCards:[
        {h:"Formati", p:"Ko‘z tomchilari, flakonda 10 ml. Tiniq rangsiz eritma."},
        {h:"1 ml tarkibi", p:"Taurin — 5,0 mg<br>Natriy gialuronat — 2,0 mg<br>Natriy xlorid, fosfatlar, tozalangan suv"}
      ],
      props:[
        {h:"Taurin", p:"To‘r parda distrofik kasalliklarida, ko‘z to‘qimalari shikastlanishida va moddalar almashinuvi buzilishida tiklovchi va regenerativ jarayonlarni rag‘batlantiruvchi aminokislota. Tizimli qon oqimiga deyarli so‘rilmaydi."},
        {h:"Natriy gialuronat", p:"Yosh pardasi barqarorligini yaxshilaydi, ko‘z yuzasini namlangan va himoyalangan holda saqlaydi, shox parda va konyunktivani tiklash uchun qulay muhit yaratadi."},
        {h:"Birgalikdagi ta’sir", p:"Namlash va regeneratsiya uyg‘unligi yuklama ostida ko‘z yuzasi salomatligini qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Shox parda", p:"Shox parda shikastlanishi va distrofiyasi."},
        {h:"Katarakta", p:"Qari, diabetik, travmatik va nurli katarakta."},
        {h:"To‘r parda", p:"To‘r pardaning distrofik kasalliklari."},
        {h:"Namlash", p:"Ko‘z yuzasini tiklash va himoya qilish."}
      ],
      dosageText:"Kataraktada — kuniga 2–4 marta 1–2 tomchidan 3 oy davomida, oylik tanaffuslar bilan takroriy kurslar. Shox parda shikastlanishi va distrofiyasida — xuddi shu dozalarda 1 oy davomida. Doza individual belgilanadi.",
      dosageStats:[{n:"1–2",l:"tomchi kuniga 2–4 marta"},{n:"1 oy",l:"ochilgandan keyin"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik; 18 yoshgacha bolalar va o‘smirlar; homiladorlik va emizish davri."},
        {h:"Nojo‘ya ta’sirlar", p:"Allergik konyunktivit. Nojo‘ya reaksiyalarda qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"O‘zaro ta’sir", p:"Boshqa oftalmologik vositalar bilan bir vaqtda ishlatmang; tomizishlar orasidagi tanaffus kamida 15 daqiqa bo‘lishi kerak."},
        {h:"Saqlash · muddat", p:"25 °C dan yuqori bo‘lmagan haroratda. 2 yil; ochilgandan keyin — 1 oy. Retseptsiz beriladi."}
      ],
      legal:"Tibbiy maqsadli buyum. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Bolalar yeta olmaydigan joyda saqlang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "deka": {
    cat: "drops",
    img: "img/prod/deka.webp",
    doc: "downloads/deka-instrukciya.docx",
    ru: {
      name:"ДеКа",
      heroSub:"Капли для приёма внутрь с витаминами D3 и K2 на оливковом масле. Для крепких костей, сосудов и иммунитета.",
      introTitle:"D3 + K2 в удобных каплях",
      introText:"ДеКа — два важнейших жирорастворимых витамина, дополняющих действие друг друга. D3 помогает усваивать кальций, а K2 доставляет его в кости, препятствуя оседанию на стенках сосудов. Жидкая форма с оливковым маслом легко усваивается и удобна тем, кому трудно глотать капсулы.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли для приёма внутрь, 20 мл."},
        {h:"Состав в 1 капле", p:"Витамин D3 — 25 мкг (1000 МЕ)<br>Витамин K2 (менахинон-7) — 20 мкг<br>Оливковое масло"}
      ],
      props:[
        {h:"Витамин D3", p:"Помогает усваиваться кальцию и фосфору в тонком кишечнике, защищает от остеопороза, укрепляет иммунитет и нервную систему."},
        {h:"Витамин K2", p:"Доставляет кальций в кости, препятствуя его вымыванию и оседанию на стенках сосудов, в суставах и почках. Сохраняет эластичность кожи, предотвращая кальцификацию тканей."},
        {h:"Оливковое масло", p:"Обеспечивает быстрое и полное усвоение жирорастворимых витаминов и делает форму удобной для приёма."}
      ],
      areas:[
        {h:"Кости и зубы", p:"Укрепляет кости и зубы, защищает от остеопороза."},
        {h:"Сосуды и сердце", p:"Поддерживает сердечно-сосудистую систему, препятствует кальцификации сосудов."},
        {h:"Иммунитет", p:"Укрепляет иммунитет, снижает риск вирусных инфекций."},
        {h:"Тонус", p:"Придаёт энергию, улучшает настроение и обмен веществ."}
      ],
      dosageText:"Детям и взрослым 1 раз в день во время или после еды. Количество капель определяется в зависимости от необходимой дозировки витаминов D3 и K2 или по назначению врача. Капли можно наносить непосредственно на язык или добавлять в еду.",
      dosageStats:[{n:"1 раз",l:"в день во время еды"},{n:"D3+K2",l:"1000 МЕ + 20 мкг"}],
      important:[
        {h:"Особые указания", p:"Во время беременности и лактации проконсультироваться с врачом."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта."},
        {h:"Примечание", p:"Не является лекарственным средством. Перед применением рекомендуется консультация специалиста."}
      ],
      legal:"Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"DeKa",
      heroSub:"Oral drops with vitamins D3 and K2 in olive oil. For strong bones, vessels and immunity.",
      introTitle:"D3 + K2 in convenient drops",
      introText:"DeKa combines two essential fat-soluble vitamins that complement each other. D3 helps absorb calcium, while K2 delivers it to the bones, preventing deposition on vessel walls. The liquid form with olive oil is easily absorbed and convenient for those who find capsules hard to swallow.",
      infoCards:[
        {h:"Form", p:"Oral drops, 20 ml."},
        {h:"Composition per drop", p:"Vitamin D3 — 25 mcg (1000 IU)<br>Vitamin K2 (menaquinone-7) — 20 mcg<br>Olive oil"}
      ],
      props:[
        {h:"Vitamin D3", p:"Helps absorb calcium and phosphorus in the small intestine, protects against osteoporosis and strengthens immunity and the nervous system."},
        {h:"Vitamin K2", p:"Delivers calcium to the bones, preventing its leaching and deposition on vessel walls, in joints and kidneys. Keeps skin elastic and prevents tissue calcification."},
        {h:"Olive oil", p:"Ensures fast and complete absorption of fat-soluble vitamins and makes the form convenient to take."}
      ],
      areas:[
        {h:"Bones & teeth", p:"Strengthens bones and teeth, protects against osteoporosis."},
        {h:"Vessels & heart", p:"Supports the cardiovascular system and prevents vascular calcification."},
        {h:"Immunity", p:"Boosts immunity and reduces the risk of viral infections."},
        {h:"Tone", p:"Gives energy, improves mood and metabolism."}
      ],
      dosageText:"Children and adults once a day during or after meals. The number of drops is chosen according to the required dosage of vitamins D3 and K2 or as prescribed by a doctor. Drops can be applied directly to the tongue or added to food.",
      dosageStats:[{n:"once",l:"a day with meals"},{n:"D3+K2",l:"1000 IU + 20 mcg"}],
      important:[
        {h:"Special instructions", p:"During pregnancy and breastfeeding, consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription."},
        {h:"Note", p:"Not a medicine. Consultation with a specialist is recommended before use."}
      ],
      legal:"Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"DeKa",
      heroSub:"Gocce orali con vitamine D3 e K2 in olio d'oliva. Per ossa, vasi e immunità forti.",
      introTitle:"D3 + K2 in comode gocce",
      introText:"DeKa combina due vitamine liposolubili essenziali che si completano a vicenda. La D3 aiuta ad assorbire il calcio, mentre la K2 lo trasporta nelle ossa, prevenendone il deposito sulle pareti dei vasi. La forma liquida con olio d'oliva si assorbe facilmente ed è comoda per chi fatica a deglutire le capsule.",
      infoCards:[
        {h:"Formato", p:"Gocce orali, 20 ml."},
        {h:"Composizione per goccia", p:"Vitamina D3 — 25 mcg (1000 UI)<br>Vitamina K2 (menachinone-7) — 20 mcg<br>Olio d'oliva"}
      ],
      props:[
        {h:"Vitamina D3", p:"Aiuta ad assorbire calcio e fosforo nell'intestino tenue, protegge dall'osteoporosi e rafforza l'immunità e il sistema nervoso."},
        {h:"Vitamina K2", p:"Trasporta il calcio nelle ossa, prevenendone la perdita e il deposito sulle pareti dei vasi, nelle articolazioni e nei reni. Mantiene la pelle elastica e previene la calcificazione dei tessuti."},
        {h:"Olio d'oliva", p:"Garantisce un assorbimento rapido e completo delle vitamine liposolubili e rende la forma comoda da assumere."}
      ],
      areas:[
        {h:"Ossa e denti", p:"Rafforza ossa e denti, protegge dall'osteoporosi."},
        {h:"Vasi e cuore", p:"Sostiene il sistema cardiovascolare e previene la calcificazione vascolare."},
        {h:"Immunità", p:"Potenzia l'immunità e riduce il rischio di infezioni virali."},
        {h:"Tono", p:"Dona energia, migliora l'umore e il metabolismo."}
      ],
      dosageText:"Bambini e adulti una volta al giorno durante o dopo i pasti. Il numero di gocce si sceglie in base al dosaggio necessario di vitamine D3 e K2 o secondo prescrizione medica. Le gocce possono essere applicate direttamente sulla lingua o aggiunte al cibo.",
      dosageStats:[{n:"1 volta",l:"al giorno durante i pasti"},{n:"D3+K2",l:"1000 UI + 20 mcg"}],
      important:[
        {h:"Avvertenze speciali", p:"In gravidanza e allattamento, consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta."},
        {h:"Nota", p:"Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso."}
      ],
      legal:"Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"DeKa",
      heroSub:"Zaytun moyida D3 va K2 vitaminlari bilan ichimlik tomchilari. Mustahkam suyaklar, tomirlar va immunitet uchun.",
      introTitle:"Qulay tomchilarda D3 + K2",
      introText:"DeKa — bir-birini to‘ldiruvchi ikkita muhim yog‘da eruvchi vitamin. D3 kalsiy so‘rilishiga yordam beradi, K2 esa uni suyaklarga yetkazadi va tomir devorlariga cho‘kishiga to‘sqinlik qiladi. Zaytun moyi bilan suyuq shakl oson so‘riladi va kapsulani yutish qiyin bo‘lganlar uchun qulay.",
      infoCards:[
        {h:"Formati", p:"Ichimlik tomchilari, 20 ml."},
        {h:"1 tomchi tarkibi", p:"D3 vitamini — 25 mkg (1000 XB)<br>K2 vitamini (menaxinon-7) — 20 mkg<br>Zaytun moyi"}
      ],
      props:[
        {h:"D3 vitamini", p:"Ingichka ichakda kalsiy va fosfor so‘rilishiga yordam beradi, osteoporozdan himoya qiladi, immunitet va asab tizimini mustahkamlaydi."},
        {h:"K2 vitamini", p:"Kalsiyni suyaklarga yetkazadi, uning yuvilishi va tomir devorlari, bo‘g‘imlar hamda buyraklarga cho‘kishiga to‘sqinlik qiladi. Terining elastikligini saqlaydi, to‘qimalar kaltsifikatsiyasini oldini oladi."},
        {h:"Zaytun moyi", p:"Yog‘da eruvchi vitaminlarning tez va to‘liq so‘rilishini ta’minlaydi va shaklni qabul qilishga qulay qiladi."}
      ],
      areas:[
        {h:"Suyaklar va tishlar", p:"Suyak va tishlarni mustahkamlaydi, osteoporozdan himoya qiladi."},
        {h:"Tomirlar va yurak", p:"Yurak-qon tomir tizimini qo‘llab-quvvatlaydi, tomirlar kaltsifikatsiyasiga to‘sqinlik qiladi."},
        {h:"Immunitet", p:"Immunitetni mustahkamlaydi, virusli infeksiyalar xavfini kamaytiradi."},
        {h:"Tetiklik", p:"Energiya beradi, kayfiyat va moddalar almashinuvini yaxshilaydi."}
      ],
      dosageText:"Bolalar va kattalarga kuniga 1 marta ovqat vaqtida yoki keyin. Tomchilar soni D3 va K2 vitaminlarining kerakli dozasiga qarab yoki shifokor ko‘rsatmasi bo‘yicha belgilanadi. Tomchilarni to‘g‘ridan-to‘g‘ri tilga tomizish yoki ovqatga qo‘shish mumkin.",
      dosageStats:[{n:"1 marta",l:"kuniga ovqat vaqtida"},{n:"D3+K2",l:"1000 XB + 20 mkg"}],
      important:[
        {h:"Maxsus ko‘rsatmalar", p:"Homiladorlik va emizish davrida shifokor bilan maslahatlashing."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi."},
        {h:"Izoh", p:"Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi."}
      ],
      legal:"Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "ascorbic-drop": {
    cat: "drops",
    img: "img/prod/ascorbic-drop.webp",
    doc: "downloads/ascorbic-drop-instrukciya.docx",
    ru: {
      name:"Аскорбик-Дроп",
      heroSub:"Капли для приёма внутрь с витамином C и экстрактом зелёного чая. Для иммунитета, тонуса и бодрости — детям и взрослым.",
      introTitle:"Витамин C в удобных каплях",
      introText:"Аскорбик-Дроп — дополнительный источник аскорбиновой кислоты и полезных компонентов зелёного чая. В комплексе они поддерживают нормальную работу нервной системы, сердца и иммунитета, улучшают аппетит и самочувствие.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли для приёма внутрь, 10 мл (95 мг/мл)."},
        {h:"Состав на 1 мл", p:"Аскорбиновая кислота — 95 мг<br>Экстракт зелёного чая — 1 мг"}
      ],
      props:[
        {h:"Витамин C (аскорбиновая кислота)", p:"Повышает неспецифический иммунитет, защищает ткани от свободных радикалов, укрепляет сосудистую стенку и поддерживает нормальный обмен веществ."},
        {h:"Экстракт зелёного чая", p:"Содержит полифенолы, витамины и микроэлементы; благотворно влияет на обмен веществ, нервную и сердечно-сосудистую системы, укрепляет стенки сосудов."},
        {h:"Общее действие", p:"Повышает устойчивость к простудным процессам и стрессу, устраняет утомляемость, улучшает аппетит и самочувствие."}
      ],
      areas:[
        {h:"Иммунитет", p:"Повышает устойчивость организма к простудным процессам."},
        {h:"Тонус", p:"Устраняет утомляемость, придаёт бодрость и тонус."},
        {h:"Восстановление", p:"Рекомендуется после длительного постельного режима для восстановления сил."},
        {h:"Стресс", p:"Повышает устойчивость к перенапряжению и стрессу."}
      ],
      dosageText:"Принимается внутрь. Перед употреблением рекомендуется проконсультироваться со специалистом. Количество капель определяется в зависимости от необходимой дозировки или по назначению специалиста, во время или после еды.",
      dosageStats:[{n:"95 мг/мл",l:"витамина C"},{n:"10 мл",l:"флакон-капельница"}],
      important:[
        {h:"Особые указания", p:"Перед применением рекомендуется консультация специалиста. Индивидуальная непереносимость компонентов."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."},
        {h:"Для кого", p:"Для детей и взрослых."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Ts 306766008-001:2020. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Ascorbic Drop",
      heroSub:"Oral drops with vitamin C and green tea extract. For immunity, tone and vitality — for children and adults.",
      introTitle:"Vitamin C in convenient drops",
      introText:"Ascorbic Drop is an additional source of ascorbic acid and beneficial green-tea components. Together they support normal function of the nervous system, heart and immunity and improve appetite and well-being.",
      infoCards:[
        {h:"Form", p:"Oral drops, 10 ml (95 mg/ml)."},
        {h:"Composition per 1 ml", p:"Ascorbic acid — 95 mg<br>Green tea extract — 1 mg"}
      ],
      props:[
        {h:"Vitamin C (ascorbic acid)", p:"Boosts non-specific immunity, protects tissues from free radicals, strengthens the vascular wall and supports normal metabolism."},
        {h:"Green tea extract", p:"Contains polyphenols, vitamins and trace elements; benefits metabolism, the nervous and cardiovascular systems and strengthens vessel walls."},
        {h:"Overall action", p:"Increases resistance to colds and stress, relieves fatigue and improves appetite and well-being."}
      ],
      areas:[
        {h:"Immunity", p:"Increases the body's resistance to colds."},
        {h:"Tone", p:"Relieves fatigue and gives vitality and tone."},
        {h:"Recovery", p:"Recommended after prolonged bed rest to restore strength."},
        {h:"Stress", p:"Increases resistance to overexertion and stress."}
      ],
      dosageText:"Taken orally. Consultation with a specialist before use is recommended. The number of drops is chosen according to the required dosage or as advised by a specialist, during or after meals.",
      dosageStats:[{n:"95 mg/ml",l:"of vitamin C"},{n:"10 ml",l:"dropper bottle"}],
      important:[
        {h:"Special instructions", p:"Consultation with a specialist is recommended before use. Individual intolerance to the components."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"Available without prescription. Dietary supplement, not a medicine."},
        {h:"For whom", p:"For children and adults."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Ascorbic Drop",
      heroSub:"Gocce orali con vitamina C ed estratto di tè verde. Per immunità, tono e vitalità — per bambini e adulti.",
      introTitle:"Vitamina C in comode gocce",
      introText:"Ascorbic Drop è una fonte aggiuntiva di acido ascorbico e dei componenti benefici del tè verde. Insieme sostengono la normale funzione del sistema nervoso, del cuore e dell'immunità e migliorano l'appetito e il benessere.",
      infoCards:[
        {h:"Formato", p:"Gocce orali, 10 ml (95 mg/ml)."},
        {h:"Composizione per 1 ml", p:"Acido ascorbico — 95 mg<br>Estratto di tè verde — 1 mg"}
      ],
      props:[
        {h:"Vitamina C (acido ascorbico)", p:"Potenzia l'immunità non specifica, protegge i tessuti dai radicali liberi, rafforza la parete vascolare e sostiene il normale metabolismo."},
        {h:"Estratto di tè verde", p:"Contiene polifenoli, vitamine e oligoelementi; favorisce il metabolismo, i sistemi nervoso e cardiovascolare e rafforza le pareti dei vasi."},
        {h:"Azione generale", p:"Aumenta la resistenza ai raffreddori e allo stress, allevia la stanchezza e migliora appetito e benessere."}
      ],
      areas:[
        {h:"Immunità", p:"Aumenta la resistenza dell'organismo ai raffreddori."},
        {h:"Tono", p:"Allevia la stanchezza e dona vitalità e tono."},
        {h:"Recupero", p:"Raccomandato dopo un prolungato riposo a letto per recuperare le forze."},
        {h:"Stress", p:"Aumenta la resistenza al sovraffaticamento e allo stress."}
      ],
      dosageText:"Per uso orale. Si raccomanda di consultare uno specialista prima dell'uso. Il numero di gocce si sceglie in base al dosaggio necessario o secondo il consiglio dello specialista, durante o dopo i pasti.",
      dosageStats:[{n:"95 mg/ml",l:"di vitamina C"},{n:"10 ml",l:"flacone contagocce"}],
      important:[
        {h:"Avvertenze speciali", p:"Si raccomanda di consultare uno specialista prima dell'uso. Intolleranza individuale ai componenti."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."},
        {h:"Per chi", p:"Per bambini e adulti."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Askorbik-Drop",
      heroSub:"C vitamini va yashil choy ekstrakti bilan ichimlik tomchilari. Immunitet, tetiklik va bardamlik uchun — bolalar va kattalarga.",
      introTitle:"Qulay tomchilarda C vitamini",
      introText:"Askorbik-Drop — askorbin kislotasi va yashil choyning foydali komponentlari uchun qo‘shimcha manba. Ular birgalikda asab tizimi, yurak va immunitetning me’yoriy ishini qo‘llab-quvvatlaydi, ishtaha va umumiy holatni yaxshilaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik tomchilari, 10 ml (95 mg/ml)."},
        {h:"1 ml tarkibi", p:"Askorbin kislotasi — 95 mg<br>Yashil choy ekstrakti — 1 mg"}
      ],
      props:[
        {h:"C vitamini (askorbin kislotasi)", p:"Nospetsifik immunitetni oshiradi, to‘qimalarni erkin radikallardan himoya qiladi, tomir devorini mustahkamlaydi va me’yoriy moddalar almashinuvini qo‘llab-quvvatlaydi."},
        {h:"Yashil choy ekstrakti", p:"Polifenollar, vitaminlar va mikroelementlarni saqlaydi; moddalar almashinuvi, asab va yurak-qon tomir tizimlariga foydali, tomir devorlarini mustahkamlaydi."},
        {h:"Umumiy ta’sir", p:"Shamollash jarayonlari va stressga chidamlilikni oshiradi, charchoqni bartaraf etadi, ishtaha va umumiy holatni yaxshilaydi."}
      ],
      areas:[
        {h:"Immunitet", p:"Organizmning shamollash jarayonlariga chidamliligini oshiradi."},
        {h:"Tetiklik", p:"Charchoqni bartaraf etadi, bardamlik va tetiklik beradi."},
        {h:"Tiklanish", p:"Uzoq yotoq tartibidan keyin kuchni tiklash uchun tavsiya etiladi."},
        {h:"Stress", p:"Zo‘riqish va stressga chidamlilikni oshiradi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tomchilar soni kerakli dozaga qarab yoki mutaxassis ko‘rsatmasi bo‘yicha, ovqat vaqtida yoki keyin belgilanadi.",
      dosageStats:[{n:"95 mg/ml",l:"C vitamini"},{n:"10 ml",l:"flakon-tomizgich"}],
      important:[
        {h:"Maxsus ko‘rsatmalar", p:"Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Komponentlarga individual chidamsizlik."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik · sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."},
        {h:"Kimlar uchun", p:"Bolalar va kattalar uchun."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "somnium": {
    cat: "drops",
    img: "img/prod/somnium.webp",
    doc: "downloads/somnium-instrukciya.docx",
    ru: {
      name:"Сомниум",
      heroSub:"Капли для приёма внутрь с мелатонином, глицином и валерианой. Для здорового сна и стрессоустойчивости.",
      introTitle:"Здоровый сон и спокойствие",
      introText:"Сомниум — растительный комплекс с мелатонином, глицином и экстрактом валерианы. Способствует быстрому засыпанию, качественному сну и регуляции цикла «сон-пробуждение», повышает стрессоустойчивость.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли для приёма внутрь, 50 мл."},
        {h:"Состав на 1 мл", p:"Экстракт валерианы — 20 мг<br>Мелатонин — 2 мг<br>Глицин — 1 мг"}
      ],
      props:[
        {h:"Мелатонин", p:"Естественный регулятор суточного ритма: обеспечивает быстрое засыпание, качественный сон и комфортное пробуждение. Обладает адаптогенным, седативным, иммуностимулирующим и антиоксидантным действием."},
        {h:"Глицин", p:"Регулятор обмена веществ: уменьшает психоэмоциональное напряжение, улучшает настроение, облегчает засыпание и повышает умственную работоспособность."},
        {h:"Экстракт валерианы", p:"Оказывает умеренный седативный эффект, облегчает наступление естественного сна. Эффект развивается мягко, но стабильно."}
      ],
      areas:[
        {h:"Сон", p:"При бессоннице и нарушениях процесса сна."},
        {h:"Засыпание", p:"Способствует наступлению сна, регулирует цикл «сон-пробуждение»."},
        {h:"Стресс", p:"Повышает стрессоустойчивость, снижает напряжение."},
        {h:"Тонус", p:"Поддержка при сниженной умственной работоспособности."}
      ],
      dosageText:"Принимается внутрь. Детям — по 5 капель 3 раза в сутки; взрослым — по 10 капель 3 раза в сутки. При необходимости по рекомендации специалиста курс приёма можно повторить.",
      dosageStats:[{n:"10",l:"капель взрослым 3 раза в сутки"},{n:"50 мл",l:"флакон-капельница"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Somnium",
      heroSub:"Oral drops with melatonin, glycine and valerian. For healthy sleep and stress resistance.",
      introTitle:"Healthy sleep and calm",
      introText:"Somnium is a herbal complex with melatonin, glycine and valerian extract. It promotes quick falling asleep, quality sleep and regulation of the sleep-wake cycle, and increases stress resistance.",
      infoCards:[
        {h:"Form", p:"Oral drops, 50 ml."},
        {h:"Composition per 1 ml", p:"Valerian extract — 20 mg<br>Melatonin — 2 mg<br>Glycine — 1 mg"}
      ],
      props:[
        {h:"Melatonin", p:"A natural regulator of the circadian rhythm: it ensures quick falling asleep, quality sleep and comfortable waking. It has adaptogenic, sedative, immunostimulating and antioxidant effects."},
        {h:"Glycine", p:"A metabolic regulator: it reduces psycho-emotional tension, improves mood, eases falling asleep and increases mental performance."},
        {h:"Valerian extract", p:"Has a moderate sedative effect and eases natural sleep. The effect develops gently but steadily."}
      ],
      areas:[
        {h:"Sleep", p:"For insomnia and sleep disturbances."},
        {h:"Falling asleep", p:"Promotes sleep and regulates the sleep-wake cycle."},
        {h:"Stress", p:"Increases stress resistance and reduces tension."},
        {h:"Tone", p:"Support for reduced mental performance."}
      ],
      dosageText:"Taken orally. Children — 5 drops 3 times a day; adults — 10 drops 3 times a day. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"10",l:"drops, adults 3 times a day"},{n:"50 ml",l:"dropper bottle"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Somnium",
      heroSub:"Gocce orali con melatonina, glicina e valeriana. Per un sonno sano e la resistenza allo stress.",
      introTitle:"Sonno sano e calma",
      introText:"Somnium è un complesso vegetale con melatonina, glicina ed estratto di valeriana. Favorisce un rapido addormentamento, un sonno di qualità e la regolazione del ciclo sonno-veglia, e aumenta la resistenza allo stress.",
      infoCards:[
        {h:"Formato", p:"Gocce orali, 50 ml."},
        {h:"Composizione per 1 ml", p:"Estratto di valeriana — 20 mg<br>Melatonina — 2 mg<br>Glicina — 1 mg"}
      ],
      props:[
        {h:"Melatonina", p:"Un regolatore naturale del ritmo circadiano: garantisce un rapido addormentamento, un sonno di qualità e un risveglio confortevole. Ha effetti adattogeni, sedativi, immunostimolanti e antiossidanti."},
        {h:"Glicina", p:"Un regolatore del metabolismo: riduce la tensione psico-emotiva, migliora l'umore, facilita l'addormentamento e aumenta le prestazioni mentali."},
        {h:"Estratto di valeriana", p:"Ha un moderato effetto sedativo e facilita il sonno naturale. L'effetto si sviluppa in modo graduale ma stabile."}
      ],
      areas:[
        {h:"Sonno", p:"In caso di insonnia e disturbi del sonno."},
        {h:"Addormentamento", p:"Favorisce il sonno e regola il ciclo sonno-veglia."},
        {h:"Stress", p:"Aumenta la resistenza allo stress e riduce la tensione."},
        {h:"Tono", p:"Supporto in caso di ridotte prestazioni mentali."}
      ],
      dosageText:"Per uso orale. Bambini — 5 gocce 3 volte al giorno; adulti — 10 gocce 3 volte al giorno. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"10",l:"gocce, adulti 3 volte al giorno"},{n:"50 ml",l:"flacone contagocce"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Somnium",
      heroSub:"Melatonin, glitsin va valeriana bilan ichimlik tomchilari. Sog‘lom uyqu va stressga chidamlilik uchun.",
      introTitle:"Sog‘lom uyqu va xotirjamlik",
      introText:"Somnium — melatonin, glitsin va valeriana ekstrakti bilan o‘simlik majmuasi. Tez uyquga ketish, sifatli uyqu va uyqu-uyg‘oqlik tsiklini boshqarishga yordam beradi hamda stressga chidamlilikni oshiradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik tomchilari, 50 ml."},
        {h:"1 ml tarkibi", p:"Valeriana ekstrakti — 20 mg<br>Melatonin — 2 mg<br>Glitsin — 1 mg"}
      ],
      props:[
        {h:"Melatonin", p:"Tsirkad ritmning tabiiy regulyatori: tez uyquga ketish, sifatli uyqu va qulay uyg‘onishni ta’minlaydi. Adaptogen, tinchlantiruvchi, immunostimulyator va antioksidant ta’sirga ega."},
        {h:"Glitsin", p:"Moddalar almashinuvi regulyatori: psixo-emotsional taranglikni kamaytiradi, kayfiyatni yaxshilaydi, uyquga ketishni osonlashtiradi va aqliy ish qobiliyatini oshiradi."},
        {h:"Valeriana ekstrakti", p:"O‘rtacha tinchlantiruvchi ta’sirga ega va tabiiy uyquni osonlashtiradi. Ta’sir bosqichma-bosqich, ammo barqaror rivojlanadi."}
      ],
      areas:[
        {h:"Uyqu", p:"Uyqusizlik va uyqu buzilishlarida."},
        {h:"Uyquga ketish", p:"Uyquga yordam beradi va uyqu-uyg‘oqlik tsiklini boshqaradi."},
        {h:"Stress", p:"Stressga chidamlilikni oshiradi va taranglikni kamaytiradi."},
        {h:"Tetiklik", p:"Aqliy ish qobiliyati pasayganda yordam."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Bolalarga — kuniga 3 marta 5 tomchidan; kattalarga — kuniga 3 marta 10 tomchidan. Mutaxassis tavsiyasi bilan takrorlash mumkin.",
      dosageStats:[{n:"10",l:"tomchi, kattalarga kuniga 3 marta"},{n:"50 ml",l:"flakon-tomizgich"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "stopgaz": {
    cat: "drops",
    img: "img/prod/stopgaz.webp",
    doc: "downloads/stopgaz-instrukciya.docx",
    ru: {
      name:"Стоп-Газ",
      heroSub:"Капли для приёма внутрь с симетиконом, экстрактом укропа и маслом мяты. При вздутии живота и кишечных коликах. Не содержит сахара.",
      introTitle:"При вздутии и коликах",
      introText:"Стоп-Газ — комплекс с симетиконом, который препятствует образованию газов и разрушает газовые пузырьки в кишечнике, в сочетании с растительными компонентами. Готов к применению, не требует разведения, не содержит сахара.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли для приёма внутрь, 30 мл (40 мг/мл)."},
        {h:"Состав на 1 мл", p:"Симетикон — 40 мг<br>Экстракт укропа — 1 мг<br>Масло мяты — 1 мг"}
      ],
      props:[
        {h:"Симетикон", p:"Препятствует образованию газов и способствует разрушению газовых пузырьков в содержимом кишечника. Не всасывается из пищеварительного тракта и выводится в неизменном виде."},
        {h:"Экстракт укропа (фенхеля)", p:"Отличный антиоксидант, улучшает аппетит, благоприятно влияет на пищеварение, расслабляет гладкие мышцы кишечника, уменьшает гнилостные процессы и газообразование."},
        {h:"Масло мяты", p:"Оказывает мягкое спазмолитическое действие, успокаивает кишечник и облегчает отхождение газов."}
      ],
      areas:[
        {h:"Вздутие", p:"При вздутии живота и метеоризме."},
        {h:"Колики", p:"Облегчает болезненные кишечные колики."},
        {h:"Пищеварение", p:"Улучшает состояние слизистой и переваривание пищи."},
        {h:"Комфорт", p:"Устраняет дискомфорт, восстанавливает спокойствие и сон."}
      ],
      dosageText:"Принимается внутрь. Детям с 6 лет — по 5–6 капель в чайной ложке за 30 минут до еды. Перед применением взболтать. Не требует разведения, готов к применению.",
      dosageStats:[{n:"5–6",l:"капель за 30 мин до еды"},{n:"30 мл",l:"флакон, без сахара"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам; детям до 6 лет; беременность и кормление грудью; полная кишечная непроходимость."},
        {h:"Особые указания", p:"Не превышать рекомендованную суточную дозу. Перед применением требуется консультация врача."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Stop-Gaz",
      heroSub:"Oral drops with simethicone, dill extract and mint oil. For bloating and intestinal colic. Sugar-free.",
      introTitle:"For bloating and colic",
      introText:"Stop-Gaz is a complex with simethicone, which prevents gas formation and breaks down gas bubbles in the intestine, combined with plant components. Ready to use, requires no dilution, sugar-free.",
      infoCards:[
        {h:"Form", p:"Oral drops, 30 ml (40 mg/ml)."},
        {h:"Composition per 1 ml", p:"Simethicone — 40 mg<br>Dill extract — 1 mg<br>Mint oil — 1 mg"}
      ],
      props:[
        {h:"Simethicone", p:"Prevents gas formation and helps break down gas bubbles in the intestinal contents. It is not absorbed from the digestive tract and is excreted unchanged."},
        {h:"Dill (fennel) extract", p:"An excellent antioxidant, improves appetite, benefits digestion, relaxes the smooth muscles of the intestine and reduces putrefactive processes and gas formation."},
        {h:"Mint oil", p:"Has a mild antispasmodic effect, soothes the intestine and eases the passage of gas."}
      ],
      areas:[
        {h:"Bloating", p:"For bloating and flatulence."},
        {h:"Colic", p:"Relieves painful intestinal colic."},
        {h:"Digestion", p:"Improves the condition of the mucosa and digestion."},
        {h:"Comfort", p:"Relieves discomfort and restores calm and sleep."}
      ],
      dosageText:"Taken orally. Children from 6 years — 5–6 drops in a teaspoon 30 minutes before meals. Shake before use. No dilution required, ready to use.",
      dosageStats:[{n:"5–6",l:"drops 30 min before meals"},{n:"30 ml",l:"bottle, sugar-free"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components; children under 6 years; pregnancy and breastfeeding; complete intestinal obstruction."},
        {h:"Special instructions", p:"Do not exceed the recommended daily dose. Consult a doctor before use."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Stop-Gaz",
      heroSub:"Gocce orali con simeticone, estratto di aneto e olio di menta. Per gonfiore e coliche intestinali. Senza zucchero.",
      introTitle:"Per gonfiore e coliche",
      introText:"Stop-Gaz è un complesso con simeticone, che previene la formazione di gas e dissolve le bolle di gas nell'intestino, combinato con componenti vegetali. Pronto all'uso, non richiede diluizione, senza zucchero.",
      infoCards:[
        {h:"Formato", p:"Gocce orali, 30 ml (40 mg/ml)."},
        {h:"Composizione per 1 ml", p:"Simeticone — 40 mg<br>Estratto di aneto — 1 mg<br>Olio di menta — 1 mg"}
      ],
      props:[
        {h:"Simeticone", p:"Previene la formazione di gas e aiuta a dissolvere le bolle di gas nel contenuto intestinale. Non viene assorbito dal tratto digestivo ed è eliminato immutato."},
        {h:"Estratto di aneto (finocchio)", p:"Un eccellente antiossidante, migliora l'appetito, favorisce la digestione, rilassa la muscolatura liscia dell'intestino e riduce i processi putrefattivi e la formazione di gas."},
        {h:"Olio di menta", p:"Ha un lieve effetto antispasmodico, lenisce l'intestino e facilita l'eliminazione dei gas."}
      ],
      areas:[
        {h:"Gonfiore", p:"In caso di gonfiore e flatulenza."},
        {h:"Coliche", p:"Allevia le dolorose coliche intestinali."},
        {h:"Digestione", p:"Migliora la condizione della mucosa e la digestione."},
        {h:"Comfort", p:"Allevia il disagio e ripristina calma e sonno."}
      ],
      dosageText:"Per uso orale. Bambini dai 6 anni — 5–6 gocce in un cucchiaino 30 minuti prima dei pasti. Agitare prima dell'uso. Non richiede diluizione, pronto all'uso.",
      dosageStats:[{n:"5–6",l:"gocce 30 min prima dei pasti"},{n:"30 ml",l:"flacone, senza zucchero"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti; bambini sotto i 6 anni; gravidanza e allattamento; occlusione intestinale completa."},
        {h:"Avvertenze speciali", p:"Non superare la dose giornaliera raccomandata. Consultare un medico prima dell'uso."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Stop-Gaz",
      heroSub:"Simetikon, ukrop (arpabodiyon) ekstrakti va yalpiz moyi bilan ichimlik tomchilari. Qorin dam bo‘lishi va ichak sanchig‘i uchun. Shakarsiz.",
      introTitle:"Dam bo‘lish va sanchiq uchun",
      introText:"Stop-Gaz — gaz hosil bo‘lishini oldini oladigan va ichakdagi gaz pufakchalarini parchalaydigan simetikon hamda o‘simlik komponentlaridan iborat majmua. Foydalanishga tayyor, suyultirishni talab qilmaydi, shakarsiz.",
      infoCards:[
        {h:"Formati", p:"Ichimlik tomchilari, 30 ml (40 mg/ml)."},
        {h:"1 ml tarkibi", p:"Simetikon — 40 mg<br>Ukrop ekstrakti — 1 mg<br>Yalpiz moyi — 1 mg"}
      ],
      props:[
        {h:"Simetikon", p:"Gaz hosil bo‘lishini oldini oladi va ichak tarkibidagi gaz pufakchalarini parchalashga yordam beradi. Ovqat hazm qilish yo‘lidan so‘rilmaydi va o‘zgarmagan holda chiqariladi."},
        {h:"Ukrop (arpabodiyon) ekstrakti", p:"A’lo antioksidant, ishtahani yaxshilaydi, hazmga foydali, ichakning silliq mushaklarini bo‘shashtiradi va chirish jarayonlari hamda gaz hosil bo‘lishini kamaytiradi."},
        {h:"Yalpiz moyi", p:"Yengil spazmga qarshi ta’sirga ega, ichakni tinchlantiradi va gazlarning chiqishini osonlashtiradi."}
      ],
      areas:[
        {h:"Dam bo‘lish", p:"Qorin dam bo‘lishi va meteorizmda."},
        {h:"Sanchiq", p:"Og‘riqli ichak sanchig‘ini yengillashtiradi."},
        {h:"Hazm", p:"Shilliq qavat holati va hazmni yaxshilaydi."},
        {h:"Qulaylik", p:"Noqulaylikni bartaraf etadi, xotirjamlik va uyquni tiklaydi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. 6 yoshdan katta bolalarga — ovqatdan 30 daqiqa oldin choy qoshig‘ida 5–6 tomchidan. Ishlatishdan oldin chayqating. Suyultirishni talab qilmaydi, foydalanishga tayyor.",
      dosageStats:[{n:"5–6",l:"tomchi ovqatdan 30 daq oldin"},{n:"30 ml",l:"flakon, shakarsiz"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik; 6 yoshgacha bolalar; homiladorlik va emizish davri; to‘liq ichak tutilishi."},
        {h:"Maxsus ko‘rsatmalar", p:"Tavsiya etilgan kunlik dozadan oshirmang. Qo‘llashdan oldin shifokor bilan maslahat zarur."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "astaksion": {
    cat: "capsules",
    img: "img/prod/astaksion.webp",
    doc: "downloads/astaksion-instrukciya.docx",
    ru: {
      name:"Астаксион",
      heroSub:"Капсулы с астаксантином, экстрактом черники и ягод годжи. Мощный антиоксидант и иммуностимулятор для зрения и нервной системы.",
      introTitle:"Мощная антиоксидантная защита",
      introText:"Астаксион — комплекс натурального астаксантина с экстрактами черники и годжи. Обеспечивает мощную антиоксидантную защиту глаз, мозга и нервной системы, укрепляет иммунитет, замедляет возрастное старение.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, 60 шт."},
        {h:"Состав на 1 капсулу", p:"Астаксантин натуральный — 12 мг<br>Экстракт черники — 20 мг<br>Экстракт ягод годжи — 20 мг"}
      ],
      props:[
        {h:"Астаксантин", p:"Природный каротиноид с мощными антиоксидантными свойствами. Преодолевает гематоэнцефалический и гематоретинальный барьеры, защищая глаза, мозг и нервную систему. В 550 раз сильнее витамина E и в 6000 раз сильнее витамина C."},
        {h:"Экстракт черники", p:"Усиливает остроту зрения, увеличивает поле зрения и уменьшает усталость глаз. Участвует в биохимических процессах зрительной системы."},
        {h:"Ягоды годжи", p:"Содержат 11 макроэлементов, 22 микроэлемента и 18 аминокислот, включая незаменимые. Поддерживают общий тонус и обмен веществ."}
      ],
      areas:[
        {h:"Зрение", p:"Защита и укрепление глаз, уменьшение утомления, защита сетчатки."},
        {h:"Нервная система", p:"Снижает риск болезней Альцгеймера и Паркинсона, защищает ЦНС."},
        {h:"Иммунитет", p:"Укрепляет иммунитет, повышает выносливость и работоспособность."},
        {h:"Антивозрастное", p:"Защищает от возрастного старения, профилактика инсультов и инфарктов."}
      ],
      dosageText:"Принимается внутрь. Взрослым и детям старше 6 лет — по 1 капсуле 1 раз в сутки во время еды. При необходимости по рекомендации специалиста курс приёма можно повторить.",
      dosageStats:[{n:"12 мг",l:"астаксантина в капсуле"},{n:"1",l:"капсула в день"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, детям до 6 лет."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Astaxion",
      heroSub:"Capsules with astaxanthin, blueberry and goji berry extracts. A powerful antioxidant and immunostimulant for vision and the nervous system.",
      introTitle:"Powerful antioxidant protection",
      introText:"Astaxion is a complex of natural astaxanthin with blueberry and goji extracts. It provides powerful antioxidant protection for the eyes, brain and nervous system, strengthens immunity and slows age-related aging.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, 60 per pack."},
        {h:"Composition per capsule", p:"Natural astaxanthin — 12 mg<br>Blueberry extract — 20 mg<br>Goji berry extract — 20 mg"}
      ],
      props:[
        {h:"Astaxanthin", p:"A natural carotenoid with powerful antioxidant properties. It crosses the blood-brain and blood-retinal barriers, protecting the eyes, brain and nervous system. It is 550 times stronger than vitamin E and 6000 times stronger than vitamin C."},
        {h:"Blueberry extract", p:"Enhances visual acuity, widens the field of vision and reduces eye fatigue. Participates in the biochemical processes of the visual system."},
        {h:"Goji berries", p:"Contain 11 macroelements, 22 trace elements and 18 amino acids, including essential ones. They support overall tone and metabolism."}
      ],
      areas:[
        {h:"Vision", p:"Protection and strengthening of the eyes, reduced fatigue, retinal protection."},
        {h:"Nervous system", p:"Reduces the risk of Alzheimer's and Parkinson's diseases and protects the CNS."},
        {h:"Immunity", p:"Strengthens immunity and increases endurance and performance."},
        {h:"Anti-aging", p:"Protects against age-related aging; prevention of strokes and heart attacks."}
      ],
      dosageText:"Taken orally. Adults and children over 6 years — 1 capsule once a day with meals. The course may be repeated on a specialist's recommendation.",
      dosageStats:[{n:"12 mg",l:"astaxanthin per capsule"},{n:"1",l:"capsule a day"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, children under 6 years."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Astaxion",
      heroSub:"Capsule con astaxantina ed estratti di mirtillo e bacche di goji. Un potente antiossidante e immunostimolante per vista e sistema nervoso.",
      introTitle:"Potente protezione antiossidante",
      introText:"Astaxion è un complesso di astaxantina naturale con estratti di mirtillo e goji. Fornisce una potente protezione antiossidante per occhi, cervello e sistema nervoso, rafforza l'immunità e rallenta l'invecchiamento.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, 60 per confezione."},
        {h:"Composizione per capsula", p:"Astaxantina naturale — 12 mg<br>Estratto di mirtillo — 20 mg<br>Estratto di bacche di goji — 20 mg"}
      ],
      props:[
        {h:"Astaxantina", p:"Un carotenoide naturale con potenti proprietà antiossidanti. Attraversa le barriere emato-encefalica ed emato-retinica, proteggendo occhi, cervello e sistema nervoso. È 550 volte più potente della vitamina E e 6000 volte più potente della vitamina C."},
        {h:"Estratto di mirtillo", p:"Migliora l'acuità visiva, amplia il campo visivo e riduce l'affaticamento oculare. Partecipa ai processi biochimici del sistema visivo."},
        {h:"Bacche di goji", p:"Contengono 11 macroelementi, 22 oligoelementi e 18 aminoacidi, compresi quelli essenziali. Sostengono il tono generale e il metabolismo."}
      ],
      areas:[
        {h:"Vista", p:"Protezione e rafforzamento degli occhi, riduzione dell'affaticamento, protezione della retina."},
        {h:"Sistema nervoso", p:"Riduce il rischio di malattie di Alzheimer e Parkinson e protegge il SNC."},
        {h:"Immunità", p:"Rafforza l'immunità e aumenta la resistenza e le prestazioni."},
        {h:"Anti-età", p:"Protegge dall'invecchiamento; prevenzione di ictus e infarti."}
      ],
      dosageText:"Per uso orale. Adulti e bambini sopra i 6 anni — 1 capsula una volta al giorno durante i pasti. Il ciclo può essere ripetuto su consiglio dello specialista.",
      dosageStats:[{n:"12 mg",l:"astaxantina per capsula"},{n:"1",l:"capsula al giorno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, bambini sotto i 6 anni."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Astaxion",
      heroSub:"Astaksantin, chernika va godji rezavorlari ekstrakti bilan kapsulalar. Ko‘rish va asab tizimi uchun kuchli antioksidant va immunostimulyator.",
      introTitle:"Kuchli antioksidant himoya",
      introText:"Astaxion — chernika va godji ekstraktlari bilan tabiiy astaksantin majmuasi. Ko‘z, miya va asab tizimi uchun kuchli antioksidant himoya beradi, immunitetni mustahkamlaydi va yoshga bog‘liq qarishni sekinlashtiradi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, 60 dona."},
        {h:"1 kapsula tarkibi", p:"Tabiiy astaksantin — 12 mg<br>Chernika ekstrakti — 20 mg<br>Godji rezavorlari ekstrakti — 20 mg"}
      ],
      props:[
        {h:"Astaksantin", p:"Kuchli antioksidant xususiyatlarga ega tabiiy karotinoid. Gematoensefalik va gematoretinal to‘siqlardan o‘tib, ko‘z, miya va asab tizimini himoya qiladi. E vitaminidan 550 marta va C vitaminidan 6000 marta kuchliroq."},
        {h:"Chernika ekstrakti", p:"Ko‘rish o‘tkirligini oshiradi, ko‘rish maydonini kengaytiradi va ko‘z charchog‘ini kamaytiradi. Ko‘rish tizimining biokimyoviy jarayonlarida ishtirok etadi."},
        {h:"Godji rezavorlari", p:"11 makroelement, 22 mikroelement va 18 aminokislotani, jumladan almashtirib bo‘lmaydiganlarini saqlaydi. Umumiy tetiklik va moddalar almashinuvini qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Ko‘rish", p:"Ko‘zni himoya va mustahkamlash, charchoqni kamaytirish, to‘r pardani himoya qilish."},
        {h:"Asab tizimi", p:"Altsgeymer va Parkinson kasalliklari xavfini kamaytiradi, MNSni himoya qiladi."},
        {h:"Immunitet", p:"Immunitetni mustahkamlaydi, chidamlilik va ish qobiliyatini oshiradi."},
        {h:"Yoshga qarshi", p:"Yoshga bog‘liq qarishdan himoya qiladi; insult va infarkt profilaktikasi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalar va 6 yoshdan katta bolalarga — kuniga 1 marta ovqat vaqtida 1 kapsuladan. Zarur bo‘lganda mutaxassis tavsiyasi bilan kursni takrorlash mumkin.",
      dosageStats:[{n:"12 mg",l:"kapsulada astaksantin"},{n:"1",l:"kapsula kuniga"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, 6 yoshgacha bolalar."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "bioton": {
    cat: "capsules",
    img: "img/prod/bioton.webp",
    doc: "downloads/bioton-instrukciya.docx",
    ru: {
      name:"Биотон",
      heroSub:"Капсулы с серратиопептидазой 10 мг. Противовоспалительное и противоотёчное действие, облегчает отхождение мокроты.",
      introTitle:"Ферментная поддержка при воспалении",
      introText:"Биотон содержит серратиопептидазу — протеолитический фермент с фибринолитической, противовоспалительной и противоотёчной активностью. Уменьшает отёк и боль, разжижает мокроту и облегчает её отхождение.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы для приёма внутрь, 30 шт."},
        {h:"Состав на 1 капсулу", p:"Серратиопептидаза — 10 мг"}
      ],
      props:[
        {h:"Противовоспалительное действие", p:"Уменьшает выраженность воспаления, контролирует проницаемость капилляров за счёт гидролиза брадикинина, гистамина и серотонина."},
        {h:"Противоотёчное и обезболивающее", p:"Уменьшает отёк и боль за счёт блокирования высвобождения болевых аминов из воспалённых тканей."},
        {h:"Разжижение мокроты", p:"Благодаря протеолизу белков мокроты улучшает её реологические свойства и облегчает отхождение; ускоряет проникновение антибиотиков в очаг воспаления."}
      ],
      areas:[
        {h:"Хирургия и травмы", p:"Растяжения и разрывы связок, переломы, вывихи, отёки после операций."},
        {h:"Дыхательные пути", p:"Уменьшает вязкость мокроты, облегчает её отхождение."},
        {h:"ЛОР", p:"Облегчает отхождение секрета придаточных пазух."},
        {h:"Кожа и др.", p:"Острые воспалительные дерматозы, гематомы, застой в молочных железах."}
      ],
      dosageText:"Назначают взрослым по 1 капсуле 2–3 раза в сутки после еды. Капсулу глотать не разжёвывая, запивая стаканом воды. Максимальная суточная доза — 30 мг. Доза и длительность курса определяются врачом индивидуально.",
      dosageStats:[{n:"1",l:"капсула 2–3 раза в сутки"},{n:"30 мг",l:"макс. суточная доза"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к серратиопептидазе или компонентам; нарушение свёртываемости крови; беременность, лактация; детям не применять."},
        {h:"Побочные действия", p:"Возможны диспепсия, кожные реакции, носовое кровотечение, реакции гиперчувствительности. При появлении — обратиться к врачу."},
        {h:"Особые указания", p:"С осторожностью при риске кровотечения, приёме антикоагулянтов, тяжёлых заболеваниях печени и почек. Усиливает действие антикоагулянтов."},
        {h:"Хранение · срок", p:"При температуре не выше 25 °C. 24 месяца."}
      ],
      legal:"Перед применением необходима консультация врача. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Bioton",
      heroSub:"Capsules with serratiopeptidase 10 mg. Anti-inflammatory and anti-edema action; eases mucus discharge.",
      introTitle:"Enzyme support for inflammation",
      introText:"Bioton contains serratiopeptidase — a proteolytic enzyme with fibrinolytic, anti-inflammatory and anti-edema activity. It reduces swelling and pain, thins mucus and eases its discharge.",
      infoCards:[
        {h:"Form", p:"Oral capsules, 30 per pack."},
        {h:"Composition per capsule", p:"Serratiopeptidase — 10 mg"}
      ],
      props:[
        {h:"Anti-inflammatory action", p:"Reduces inflammation and controls capillary permeability by hydrolyzing bradykinin, histamine and serotonin."},
        {h:"Anti-edema & analgesic", p:"Reduces swelling and pain by blocking the release of pain amines from inflamed tissues."},
        {h:"Mucus thinning", p:"By proteolysis of mucus proteins it improves its rheology and eases discharge; speeds antibiotic penetration into the inflammation site."}
      ],
      areas:[
        {h:"Surgery & trauma", p:"Sprains and ligament tears, fractures, dislocations, post-surgical swelling."},
        {h:"Respiratory tract", p:"Reduces mucus viscosity and eases its discharge."},
        {h:"ENT", p:"Eases discharge of paranasal sinus secretions."},
        {h:"Skin & more", p:"Acute inflammatory dermatoses, hematomas, breast engorgement."}
      ],
      dosageText:"Adults — 1 capsule 2–3 times a day after meals. Swallow the capsule whole with a glass of water. Maximum daily dose — 30 mg. The dose and course length are set individually by a doctor.",
      dosageStats:[{n:"1",l:"capsule 2–3 times a day"},{n:"30 mg",l:"max daily dose"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to serratiopeptidase or the components; blood-clotting disorders; pregnancy, breastfeeding; not for children."},
        {h:"Side effects", p:"Possible dyspepsia, skin reactions, nosebleed, hypersensitivity reactions. If they occur, consult a doctor."},
        {h:"Special instructions", p:"Use with caution with bleeding risk, anticoagulant use, severe liver or kidney disease. Enhances the effect of anticoagulants."},
        {h:"Storage · shelf life", p:"At no more than 25 °C. 24 months."}
      ],
      legal:"Consultation with a doctor is required before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Bioton",
      heroSub:"Capsule con serratiopeptidasi 10 mg. Azione antinfiammatoria e antiedematosa; facilita l'eliminazione del muco.",
      introTitle:"Supporto enzimatico in caso di infiammazione",
      introText:"Bioton contiene serratiopeptidasi — un enzima proteolitico con attività fibrinolitica, antinfiammatoria e antiedematosa. Riduce gonfiore e dolore, fluidifica il muco e ne facilita l'eliminazione.",
      infoCards:[
        {h:"Formato", p:"Capsule orali, 30 per confezione."},
        {h:"Composizione per capsula", p:"Serratiopeptidasi — 10 mg"}
      ],
      props:[
        {h:"Azione antinfiammatoria", p:"Riduce l'infiammazione e controlla la permeabilità capillare idrolizzando bradichinina, istamina e serotonina."},
        {h:"Antiedematoso e analgesico", p:"Riduce gonfiore e dolore bloccando il rilascio di amine algogene dai tessuti infiammati."},
        {h:"Fluidificazione del muco", p:"Tramite la proteolisi delle proteine del muco ne migliora la reologia e ne facilita l'eliminazione; accelera la penetrazione degli antibiotici nel sito dell'infiammazione."}
      ],
      areas:[
        {h:"Chirurgia e traumi", p:"Distorsioni e rotture dei legamenti, fratture, lussazioni, gonfiore post-operatorio."},
        {h:"Vie respiratorie", p:"Riduce la viscosità del muco e ne facilita l'eliminazione."},
        {h:"ORL", p:"Facilita l'eliminazione delle secrezioni dei seni paranasali."},
        {h:"Pelle e altro", p:"Dermatosi infiammatorie acute, ematomi, ingorgo mammario."}
      ],
      dosageText:"Adulti — 1 capsula 2–3 volte al giorno dopo i pasti. Deglutire la capsula intera con un bicchiere d'acqua. Dose massima giornaliera — 30 mg. La dose e la durata del ciclo sono stabilite individualmente dal medico.",
      dosageStats:[{n:"1",l:"capsula 2–3 volte al giorno"},{n:"30 mg",l:"dose massima giornaliera"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità alla serratiopeptidasi o ai componenti; disturbi della coagulazione; gravidanza, allattamento; non per bambini."},
        {h:"Effetti collaterali", p:"Possibili dispepsia, reazioni cutanee, epistassi, reazioni di ipersensibilità. In tal caso, consultare un medico."},
        {h:"Avvertenze speciali", p:"Usare con cautela in caso di rischio di sanguinamento, uso di anticoagulanti, gravi malattie epatiche o renali. Potenzia l'effetto degli anticoagulanti."},
        {h:"Conservazione · scadenza", p:"A non più di 25 °C. 24 mesi."}
      ],
      legal:"È necessaria la consultazione di un medico prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Bioton",
      heroSub:"Serratiopeptidaza 10 mg bilan kapsulalar. Yallig‘lanishga va shishga qarshi ta’sir; balg‘am ajralishini osonlashtiradi.",
      introTitle:"Yallig‘lanishda ferment yordami",
      introText:"Bioton tarkibida serratiopeptidaza — fibrinolitik, yallig‘lanishga va shishga qarshi faollikka ega proteolitik ferment mavjud. Shish va og‘riqni kamaytiradi, balg‘amni suyultiradi va uning ajralishini osonlashtiradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik kapsulalari, 30 dona."},
        {h:"1 kapsula tarkibi", p:"Serratiopeptidaza — 10 mg"}
      ],
      props:[
        {h:"Yallig‘lanishga qarshi ta’sir", p:"Bradikinin, gistamin va serotonin gidrolizi hisobiga yallig‘lanishni kamaytiradi va kapillyarlar o‘tkazuvchanligini nazorat qiladi."},
        {h:"Shishga qarshi va og‘riqsizlantiruvchi", p:"Yallig‘langan to‘qimalardan og‘riq aminlari ajralishini bloklab, shish va og‘riqni kamaytiradi."},
        {h:"Balg‘amni suyultirish", p:"Balg‘am oqsillarini proteoliz qilish orqali uning reologik xususiyatlarini yaxshilaydi va ajralishini osonlashtiradi; antibiotiklarning yallig‘lanish o‘chog‘iga kirib borishini tezlashtiradi."}
      ],
      areas:[
        {h:"Jarrohlik va jarohatlar", p:"Boylamlar cho‘zilishi va uzilishi, singishlar, chiqishlar, operatsiyadan keyingi shishlar."},
        {h:"Nafas yo‘llari", p:"Balg‘am qovushqoqligini kamaytiradi va uning ajralishini osonlashtiradi."},
        {h:"LOR", p:"Yon bo‘shliqlar sekretining ajralishini osonlashtiradi."},
        {h:"Teri va boshqalar", p:"O‘tkir yallig‘lanishli dermatozlar, gematomalar, sut bezlaridagi turg‘unlik."}
      ],
      dosageText:"Kattalarga — ovqatdan keyin kuniga 2–3 marta 1 kapsuladan. Kapsulani chaynamasdan bir stakan suv bilan yuting. Maksimal kunlik doza — 30 mg. Doza va kurs davomiyligi shifokor tomonidan individual belgilanadi.",
      dosageStats:[{n:"1",l:"kapsula kuniga 2–3 marta"},{n:"30 mg",l:"maks. kunlik doza"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Serratiopeptidaza yoki komponentlarga yuqori sezuvchanlik; qon ivishining buzilishi; homiladorlik, emizish; bolalarga qo‘llanilmaydi."},
        {h:"Nojo‘ya ta’sirlar", p:"Dispepsiya, teri reaksiyalari, burundan qon ketishi, sezuvchanlik reaksiyalari bo‘lishi mumkin. Yuzaga kelsa, shifokorga murojaat qiling."},
        {h:"Maxsus ko‘rsatmalar", p:"Qon ketish xavfi, antikoagulyantlar qabuli, jigar va buyrakning og‘ir kasalliklarida ehtiyotkorlik bilan. Antikoagulyantlar ta’sirini kuchaytiradi."},
        {h:"Saqlash · muddat", p:"25 °C dan yuqori bo‘lmagan haroratda. 24 oy."}
      ],
      legal:"Qo‘llashdan oldin shifokor bilan maslahatlashish zarur. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "viridin": {
    cat: "drops",
    img: "img/prod/viridin.webp",
    doc: "downloads/viridin-instrukciya.docx",
    ru: {
      name:"Виридин",
      heroSub:"Капли для приёма внутрь — растительный флавоноидный комплекс. Поддержка иммунитета и защита от вирусных инфекций.",
      introTitle:"Природные флавоноиды для иммунитета",
      introText:"Виридин — жидкий экстракт из трав щучки дернистой и вейника наземного, богатый природными флавоноидами с антиоксидантными свойствами. Поддерживает естественную устойчивость организма к вирусным инфекциям и неблагоприятным внешним факторам.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли для приёма внутрь, 10 мл."},
        {h:"Состав на 1 мл", p:"Жидкий экстракт Виридин® (флавоноиды ≥0,32 мг/мл, карбоновые кислоты ≥0,30 мг/мл) из трав щучки дернистой и вейника наземного (1:1)<br>Этанол 96%"}
      ],
      props:[
        {h:"Флавоноидный комплекс", p:"Биологически активные соединения с антиоксидантными свойствами, поддерживают физиологические защитные механизмы организма и защищают клеточные структуры от свободных радикалов."},
        {h:"Иммунотропное действие", p:"Поддерживает нормальную работу иммунной системы, защищает слизистые верхних дыхательных путей, нормализует показатели местного иммунитета (лактоферрин, секреторный IgA, лизоцим)."},
        {h:"Быстрое усвоение", p:"Активные вещества быстро всасываются в кровь, максимальная концентрация — через 20 минут после приёма. Биодоступность при пероральном приёме — 80%."}
      ],
      areas:[
        {h:"Герпес", p:"Инфекции, вызванные вирусами простого герпеса (1 и 2 типа), опоясывающий герпес, ветряная оспа."},
        {h:"Вирус Эпштейна—Барр", p:"Острые и хронические формы инфекций герпеса 4 и 5 типов (ЦМВ)."},
        {h:"Грипп и ОРВИ", p:"Профилактика и комплексное применение при гриппе и ОРВИ."},
        {h:"ВПЧ", p:"В составе комплексной терапии папилломавирусных инфекций."}
      ],
      dosageText:"Перед использованием взболтать. Необходимое количество накапать в воду (1–2 столовые ложки), принимать за 10–15 минут до еды. Для местного применения готовят раствор по схеме из инструкции. Подробные дозировки по возрасту и формам применения — в инструкции.",
      dosageStats:[{n:"10–15",l:"минут до еды"},{n:"80%",l:"биодоступность"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Язва желудка или двенадцатиперстной кишки."},
        {h:"Побочные действия", p:"Редко — аллергические реакции (высыпания, зуд), единичные случаи ЖКТ-расстройства, при местном применении — жжение, зуд, сухость."},
        {h:"Особые указания", p:"Транзиторное повышение температуры до 38 °C не требует отмены. Для предотвращения реинфекции рекомендуется одновременное лечение партнёра."},
        {h:"Хранение · отпуск", p:"В сухом, защищённом от света месте, не выше 25 °C. 24 месяца. Без рецепта. БАД, не лекарство."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: «HVARA» SRL, Piazza IV Novembre 4, Milano, Italy."
    },
    en: {
      name:"Viridin",
      heroSub:"Oral drops — a herbal flavonoid complex. Immune support and protection against viral infections.",
      introTitle:"Natural flavonoids for immunity",
      introText:"Viridin is a liquid extract from tufted hair-grass and wood small-reed herbs, rich in natural flavonoids with antioxidant properties. It supports the body's natural resistance to viral infections and adverse external factors.",
      infoCards:[
        {h:"Form", p:"Oral drops, 10 ml."},
        {h:"Composition per 1 ml", p:"Liquid Viridin® extract (flavonoids ≥0.32 mg/ml, carboxylic acids ≥0.30 mg/ml) from tufted hair-grass and wood small-reed herbs (1:1)<br>Ethanol 96%"}
      ],
      props:[
        {h:"Flavonoid complex", p:"Bioactive compounds with antioxidant properties that support the body's physiological defenses and protect cell structures from free radicals."},
        {h:"Immunotropic action", p:"Supports normal immune-system function, protects the upper respiratory mucosa and normalizes local immunity markers (lactoferrin, secretory IgA, lysozyme)."},
        {h:"Fast absorption", p:"Active substances are quickly absorbed into the blood, reaching peak concentration 20 minutes after intake. Oral bioavailability is 80%."}
      ],
      areas:[
        {h:"Herpes", p:"Infections caused by herpes simplex viruses (types 1 and 2), herpes zoster and chickenpox."},
        {h:"Epstein-Barr virus", p:"Acute and chronic forms of herpes type 4 and 5 (CMV) infections."},
        {h:"Flu & ARVI", p:"Prevention and complex use in influenza and acute respiratory viral infections."},
        {h:"HPV", p:"As part of complex therapy for papillomavirus infections."}
      ],
      dosageText:"Shake before use. Add the required amount to water (1–2 tablespoons) and take 10–15 minutes before meals. For topical use, prepare a solution per the instructions. Detailed dosages by age and form of use are in the instructions.",
      dosageStats:[{n:"10–15",l:"minutes before meals"},{n:"80%",l:"bioavailability"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. Gastric or duodenal ulcer."},
        {h:"Side effects", p:"Rarely — allergic reactions (rash, itching), isolated GI upset; with topical use — burning, itching, dryness."},
        {h:"Special instructions", p:"A transient temperature rise up to 38 °C does not require stopping use. To prevent reinfection, simultaneous treatment of the partner is recommended."},
        {h:"Storage · dispensing", p:"In a dry place protected from light, no more than 25 °C. 24 months. Without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: HVARA SRL, Piazza IV Novembre 4, Milan, Italy."
    },
    it: {
      name:"Viridin",
      heroSub:"Gocce orali — un complesso flavonoide vegetale. Supporto immunitario e protezione dalle infezioni virali.",
      introTitle:"Flavonoidi naturali per l'immunità",
      introText:"Viridin è un estratto liquido dalle erbe Deschampsia caespitosa e Calamagrostis epigeios, ricco di flavonoidi naturali con proprietà antiossidanti. Sostiene la resistenza naturale dell'organismo alle infezioni virali e ai fattori esterni sfavorevoli.",
      infoCards:[
        {h:"Formato", p:"Gocce orali, 10 ml."},
        {h:"Composizione per 1 ml", p:"Estratto liquido Viridin® (flavonoidi ≥0,32 mg/ml, acidi carbossilici ≥0,30 mg/ml) dalle erbe Deschampsia caespitosa e Calamagrostis epigeios (1:1)<br>Etanolo 96%"}
      ],
      props:[
        {h:"Complesso flavonoide", p:"Composti bioattivi con proprietà antiossidanti che sostengono le difese fisiologiche dell'organismo e proteggono le strutture cellulari dai radicali liberi."},
        {h:"Azione immunotropica", p:"Sostiene la normale funzione del sistema immunitario, protegge la mucosa delle vie respiratorie superiori e normalizza i marcatori dell'immunità locale (lattoferrina, IgA secretorie, lisozima)."},
        {h:"Assorbimento rapido", p:"I principi attivi vengono assorbiti rapidamente nel sangue, con concentrazione massima 20 minuti dopo l'assunzione. La biodisponibilità orale è dell'80%."}
      ],
      areas:[
        {h:"Herpes", p:"Infezioni da virus herpes simplex (tipi 1 e 2), herpes zoster e varicella."},
        {h:"Virus Epstein-Barr", p:"Forme acute e croniche delle infezioni da herpes tipo 4 e 5 (CMV)."},
        {h:"Influenza e ARVI", p:"Prevenzione e uso complesso in influenza e infezioni virali respiratorie acute."},
        {h:"HPV", p:"Come parte della terapia complessa per le infezioni da papillomavirus."}
      ],
      dosageText:"Agitare prima dell'uso. Aggiungere la quantità necessaria all'acqua (1–2 cucchiai) e assumere 10–15 minuti prima dei pasti. Per l'uso topico, preparare una soluzione secondo le istruzioni. I dosaggi dettagliati per età e forma d'uso sono nelle istruzioni.",
      dosageStats:[{n:"10–15",l:"minuti prima dei pasti"},{n:"80%",l:"biodisponibilità"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Ulcera gastrica o duodenale."},
        {h:"Effetti collaterali", p:"Raramente — reazioni allergiche (eruzioni, prurito), casi isolati di disturbi gastrointestinali; con l'uso topico — bruciore, prurito, secchezza."},
        {h:"Avvertenze speciali", p:"Un aumento transitorio della temperatura fino a 38 °C non richiede l'interruzione. Per prevenire la reinfezione si raccomanda il trattamento simultaneo del partner."},
        {h:"Conservazione · vendita", p:"In luogo asciutto e al riparo dalla luce, non oltre 25 °C. 24 mesi. Senza ricetta. Integratore, non un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: HVARA SRL, Piazza IV Novembre 4, Milano, Italia."
    },
    uz: {
      name:"Viridin",
      heroSub:"Ichimlik tomchilari — o‘simlik flavonoid majmuasi. Immunitetni qo‘llab-quvvatlash va virusli infeksiyalardan himoya.",
      introTitle:"Immunitet uchun tabiiy flavonoidlar",
      introText:"Viridin — antioksidant xususiyatli tabiiy flavonoidlarga boy, Deschampsia caespitosa va Calamagrostis epigeios o‘tlaridan olingan suyuq ekstrakt. Organizmning virusli infeksiyalar va noqulay tashqi omillarga tabiiy chidamliligini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik tomchilari, 10 ml."},
        {h:"1 ml tarkibi", p:"Suyuq Viridin® ekstrakti (flavonoidlar ≥0,32 mg/ml, karbon kislotalari ≥0,30 mg/ml), Deschampsia caespitosa va Calamagrostis epigeios o‘tlaridan (1:1)<br>Etanol 96%"}
      ],
      props:[
        {h:"Flavonoid majmuasi", p:"Antioksidant xususiyatli biologik faol birikmalar organizmning fiziologik himoya mexanizmlarini qo‘llab-quvvatlaydi va hujayra tuzilmalarini erkin radikallardan himoya qiladi."},
        {h:"Immunotrop ta’sir", p:"Immun tizimining me’yoriy ishini qo‘llab-quvvatlaydi, yuqori nafas yo‘llari shilliq qavatini himoya qiladi va mahalliy immunitet ko‘rsatkichlarini (laktoferrin, sekretor IgA, lizotsim) me’yorlashtiradi."},
        {h:"Tez so‘rilish", p:"Faol moddalar qonga tez so‘riladi, maksimal konsentratsiya qabuldan 20 daqiqa keyin. Og‘iz orqali biokirishligi — 80%."}
      ],
      areas:[
        {h:"Gerpes", p:"Oddiy gerpes viruslari (1 va 2 tur), belbog‘ gerpesi va suvchechak keltirib chiqargan infeksiyalar."},
        {h:"Epshteyn—Barr virusi", p:"4 va 5 tur (SMV) gerpes infeksiyalarining o‘tkir va surunkali shakllari."},
        {h:"Gripp va O‘RVI", p:"Gripp va o‘tkir respirator virusli infeksiyalarda profilaktika va majmuaviy qo‘llash."},
        {h:"OPV (HPV)", p:"Papillomavirus infeksiyalarining majmuaviy davosi tarkibida."}
      ],
      dosageText:"Ishlatishdan oldin chayqating. Kerakli miqdorni suvga (1–2 osh qoshiq) tomizib, ovqatdan 10–15 daqiqa oldin qabul qiling. Mahalliy qo‘llash uchun yo‘riqnomadagi sxema bo‘yicha eritma tayyorlanadi. Yosh va qo‘llash shakllari bo‘yicha batafsil dozalar yo‘riqnomada.",
      dosageStats:[{n:"10–15",l:"daqiqa ovqatdan oldin"},{n:"80%",l:"biokirishlik"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Oshqozon yoki o‘n ikki barmoq ichak yarasi."},
        {h:"Nojo‘ya ta’sirlar", p:"Kamdan-kam — allergik reaksiyalar (toshma, qichishish), yakka oshqozon-ichak buzilishlari; mahalliy qo‘llashda — achishish, qichishish, quruqlik."},
        {h:"Maxsus ko‘rsatmalar", p:"Haroratning 38 °C gacha vaqtinchalik ko‘tarilishi bekor qilishni talab qilmaydi. Qayta yuqishning oldini olish uchun sherikni bir vaqtda davolash tavsiya etiladi."},
        {h:"Saqlash · sotuv", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. 24 oy. Retseptsiz. BAD, dori emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: HVARA SRL, Piazza IV Novembre 4, Milano, Italiya."
    }
  },

  "b-nervus": {
    cat: "capsules",
    img: "img/prod/b-nervus.webp",
    ru: {
      name:"Б-нервус",
      heroSub:"Капсулы с экстрактом черники, таурином и фолиевой кислотой. Для лечения и профилактики глазных заболеваний.",
      introTitle:"Поддержка зрения",
      introText:"Б-нервус — комплекс с экстрактом черники (Myrtillus), таурином и фолиевой кислотой. Поддерживает здоровье глаз, питание сетчатки и зрительную функцию при повышенных нагрузках.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы, 30 шт. в упаковке."},
        {h:"Состав", p:"Экстракт черники (Myrtillus)<br>Таурин (Taurinium)<br>Фолиевая кислота (Acidum folicum)"}
      ],
      props:[
        {h:"Экстракт черники", p:"Богат антоцианами — мощными антиоксидантами, которые поддерживают микроциркуляцию сетчатки, улучшают остроту зрения в сумерках и снижают усталость глаз."},
        {h:"Таурин", p:"Аминокислота, стимулирующая восстановительные и обменные процессы в тканях глаза, поддерживает функцию сетчатки."},
        {h:"Фолиевая кислота", p:"Участвует в обменных процессах и поддержании нервной ткани, дополняет действие комплекса."}
      ],
      areas:[
        {h:"Зрение", p:"Поддержка остроты зрения и здоровья глаз."},
        {h:"Сетчатка", p:"Питание и защита сетчатки."},
        {h:"Усталость глаз", p:"Снижение зрительного утомления при нагрузках."},
        {h:"Профилактика", p:"Профилактика глазных заболеваний."}
      ],
      dosageText:"Принимается внутрь. Режим приёма указан на упаковке или назначается специалистом, обычно во время еды. Перед применением рекомендуется консультация специалиста.",
      dosageStats:[{n:"30",l:"капсул в упаковке"},{n:"3 в 1",l:"черника · таурин · фолиевая к-та"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов."},
        {h:"Особые указания", p:"Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"B-Nervus",
      heroSub:"Capsules with blueberry extract, taurine and folic acid. For the treatment and prevention of eye diseases.",
      introTitle:"Vision support",
      introText:"B-Nervus is a complex with blueberry extract (Myrtillus), taurine and folic acid. It supports eye health, retinal nutrition and visual function under increased load.",
      infoCards:[
        {h:"Form", p:"Capsules, 30 per pack."},
        {h:"Composition", p:"Blueberry extract (Myrtillus)<br>Taurine (Taurinium)<br>Folic acid (Acidum folicum)"}
      ],
      props:[
        {h:"Blueberry extract", p:"Rich in anthocyanins — powerful antioxidants that support retinal microcirculation, improve twilight vision and reduce eye fatigue."},
        {h:"Taurine", p:"An amino acid that stimulates regenerative and metabolic processes in eye tissues and supports retinal function."},
        {h:"Folic acid", p:"Participates in metabolic processes and the maintenance of nerve tissue, complementing the action of the complex."}
      ],
      areas:[
        {h:"Vision", p:"Supports visual acuity and eye health."},
        {h:"Retina", p:"Nutrition and protection of the retina."},
        {h:"Eye fatigue", p:"Reduces visual fatigue under load."},
        {h:"Prevention", p:"Prevention of eye diseases."}
      ],
      dosageText:"Taken orally. The regimen is indicated on the packaging or prescribed by a specialist, usually with meals. Consultation with a specialist is recommended before use.",
      dosageStats:[{n:"30",l:"capsules per pack"},{n:"3-in-1",l:"blueberry · taurine · folic acid"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Special instructions", p:"Consultation with a specialist is recommended before use. Do not exceed the recommended doses."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"B-Nervus",
      heroSub:"Capsule con estratto di mirtillo, taurina e acido folico. Per il trattamento e la prevenzione delle malattie oculari.",
      introTitle:"Supporto alla vista",
      introText:"B-Nervus è un complesso con estratto di mirtillo (Myrtillus), taurina e acido folico. Sostiene la salute degli occhi, il nutrimento della retina e la funzione visiva sotto sforzo.",
      infoCards:[
        {h:"Formato", p:"Capsule, 30 per confezione."},
        {h:"Composizione", p:"Estratto di mirtillo (Myrtillus)<br>Taurina (Taurinium)<br>Acido folico (Acidum folicum)"}
      ],
      props:[
        {h:"Estratto di mirtillo", p:"Ricco di antociani — potenti antiossidanti che sostengono la microcircolazione retinica, migliorano la visione crepuscolare e riducono l'affaticamento oculare."},
        {h:"Taurina", p:"Un aminoacido che stimola i processi rigenerativi e metabolici nei tessuti oculari e sostiene la funzione retinica."},
        {h:"Acido folico", p:"Partecipa ai processi metabolici e al mantenimento del tessuto nervoso, completando l'azione del complesso."}
      ],
      areas:[
        {h:"Vista", p:"Sostiene l'acuità visiva e la salute degli occhi."},
        {h:"Retina", p:"Nutrimento e protezione della retina."},
        {h:"Affaticamento oculare", p:"Riduce l'affaticamento visivo sotto sforzo."},
        {h:"Prevenzione", p:"Prevenzione delle malattie oculari."}
      ],
      dosageText:"Per uso orale. Il regime è indicato sulla confezione o prescritto da uno specialista, di solito durante i pasti. Si raccomanda di consultare uno specialista prima dell'uso.",
      dosageStats:[{n:"30",l:"capsule per confezione"},{n:"3-in-1",l:"mirtillo · taurina · acido folico"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Avvertenze speciali", p:"Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"B-Nervus",
      heroSub:"Chernika ekstrakti, taurin va foliy kislotasi bilan kapsulalar. Ko‘z kasalliklarini davolash va oldini olish uchun.",
      introTitle:"Ko‘rishni qo‘llab-quvvatlash",
      introText:"B-Nervus — chernika (Myrtillus) ekstrakti, taurin va foliy kislotasi bilan majmua. Ko‘z salomatligini, to‘r parda oziqlanishini va yuqori yuklama sharoitida ko‘rish funksiyasini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Kapsulalar, o‘ramda 30 dona."},
        {h:"Tarkibi", p:"Chernika ekstrakti (Myrtillus)<br>Taurin (Taurinium)<br>Foliy kislotasi (Acidum folicum)"}
      ],
      props:[
        {h:"Chernika ekstrakti", p:"Antotsianlarga — to‘r parda mikrotsirkulyatsiyasini qo‘llab-quvvatlaydigan, qorong‘ida ko‘rish o‘tkirligini yaxshilaydigan va ko‘z charchog‘ini kamaytiradigan kuchli antioksidantlarga boy."},
        {h:"Taurin", p:"Ko‘z to‘qimalarida tiklovchi va almashinuv jarayonlarini rag‘batlantiruvchi aminokislota, to‘r parda funksiyasini qo‘llab-quvvatlaydi."},
        {h:"Foliy kislotasi", p:"Almashinuv jarayonlarida va nerv to‘qimasini saqlashda ishtirok etadi, majmua ta’sirini to‘ldiradi."}
      ],
      areas:[
        {h:"Ko‘rish", p:"Ko‘rish o‘tkirligi va ko‘z salomatligini qo‘llab-quvvatlaydi."},
        {h:"To‘r parda", p:"To‘r parda oziqlanishi va himoyasi."},
        {h:"Ko‘z charchog‘i", p:"Yuklama ostida ko‘rish charchog‘ini kamaytiradi."},
        {h:"Profilaktika", p:"Ko‘z kasalliklari profilaktikasi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Qabul tartibi o‘ramda ko‘rsatilgan yoki mutaxassis tomonidan belgilanadi, odatda ovqat vaqtida. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi.",
      dosageStats:[{n:"30",l:"kapsula o‘ramda"},{n:"3 in 1",l:"chernika · taurin · foliy k-tasi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik."},
        {h:"Maxsus ko‘rsatmalar", p:"Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "nukleo": {
    cat: "capsules",
    img: "img/prod/nukleo.webp",
    doc: "downloads/nukleo-instrukciya.docx",
    ru: {
      name:"Нуклео Нейро",
      heroSub:"Капсулы с цитидином и уридином. Поддерживает здоровье нервной системы, способствует улучшению памяти и обучению.",
      introTitle:"Восстановление нервной ткани",
      introText:"Нуклео Нейро — комплекс нуклеотидов (цитидин и уридин), которые участвуют в синтезе фосфолипидов и гликолипидов миелиновой оболочки. Поддерживает функциональную активность нервной системы, нервно-мышечную проводимость, память и внимание.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, № 30."},
        {h:"Состав на 1 капсулу", p:"Цитидин — 5 мг<br>Уридин — 3 мг"}
      ],
      props:[
        {h:"Цитидин", p:"Участвует в синтезе липидов, образующих нейрональную мембрану, прежде всего сфингомиелина — основного компонента миелиновой оболочки. Важен для образования нуклеиновых кислот и белков."},
        {h:"Уридин", p:"Действует как кофермент в синтезе гликолипидов, нейрональных структур и миелиновой оболочки, дополняя действие цитидина. Служит источником энергии при сокращении мышц."},
        {h:"Общее действие", p:"Активирует обмен в нервных клетках, восстанавливает миелиновую оболочку, улучшает трофику ЦНС и периферической нервной системы, память и внимание."}
      ],
      areas:[
        {h:"Нейропатии", p:"Костно-суставные нейропатии (ишиас, радикулит), диабетическая невропатия, алкогольные полиневриты."},
        {h:"Невралгии", p:"Невралгия лицевого, тройничного, межрёберных нервов, люмбаго."},
        {h:"Память и внимание", p:"Нейропсихологическая недостаточность с нарушением памяти, внимания и чувствительности."},
        {h:"Восстановление", p:"Опоясывающий герпес, паралич Белла, осложнения сосудистых заболеваний мозга."}
      ],
      dosageText:"Принимается внутрь. Взрослым — по 1–2 капсулы 2 раза в день; детям с 5 лет — по 1 капсуле 2 раза в день, до или после еды. Курс — не менее 10 дней, при показаниях до 20 дней. При необходимости по рекомендации врача курс можно повторить.",
      dosageStats:[{n:"1–2",l:"капсулы 2 раза в день"},{n:"10–20",l:"дней курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность."},
        {h:"Побочные действия", p:"Индивидуальная непереносимость компонентов. При появлении побочных действий прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Nucleo Neuro",
      heroSub:"Capsules with cytidine and uridine. Supports nervous-system health and helps improve memory and learning.",
      introTitle:"Nerve tissue restoration",
      introText:"Nucleo Neuro is a complex of nucleotides (cytidine and uridine) involved in the synthesis of the phospholipids and glycolipids of the myelin sheath. It supports the functional activity of the nervous system, neuromuscular conduction, memory and attention.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No. 30."},
        {h:"Composition per capsule", p:"Cytidine — 5 mg<br>Uridine — 3 mg"}
      ],
      props:[
        {h:"Cytidine", p:"Participates in the synthesis of lipids forming the neuronal membrane, primarily sphingomyelin — the main component of the myelin sheath. Important for the formation of nucleic acids and proteins."},
        {h:"Uridine", p:"Acts as a coenzyme in the synthesis of glycolipids, neuronal structures and the myelin sheath, complementing cytidine. Serves as an energy source in muscle contraction."},
        {h:"Overall action", p:"Activates metabolism in nerve cells, restores the myelin sheath and improves the trophism of the central and peripheral nervous system, memory and attention."}
      ],
      areas:[
        {h:"Neuropathies", p:"Osteoarticular neuropathies (sciatica, radiculitis), diabetic neuropathy, alcoholic polyneuritis."},
        {h:"Neuralgias", p:"Neuralgia of the facial, trigeminal and intercostal nerves, lumbago."},
        {h:"Memory & attention", p:"Neuropsychological deficiency with impaired memory, attention and sensitivity."},
        {h:"Recovery", p:"Herpes zoster, Bell's palsy, complications of vascular brain diseases."}
      ],
      dosageText:"Taken orally. Adults — 1–2 capsules twice a day; children from 5 years — 1 capsule twice a day, before or after meals. Course: at least 10 days, up to 20 days if indicated. May be repeated on a doctor's recommendation.",
      dosageStats:[{n:"1–2",l:"capsules twice a day"},{n:"10–20",l:"days course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy."},
        {h:"Side effects", p:"Individual intolerance to the components. If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Nucleo Neuro",
      heroSub:"Capsule con citidina e uridina. Sostiene la salute del sistema nervoso e favorisce memoria e apprendimento.",
      introTitle:"Ripristino del tessuto nervoso",
      introText:"Nucleo Neuro è un complesso di nucleotidi (citidina e uridina) coinvolti nella sintesi dei fosfolipidi e glicolipidi della guaina mielinica. Sostiene l'attività funzionale del sistema nervoso, la conduzione neuromuscolare, la memoria e l'attenzione.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n. 30."},
        {h:"Composizione per capsula", p:"Citidina — 5 mg<br>Uridina — 3 mg"}
      ],
      props:[
        {h:"Citidina", p:"Partecipa alla sintesi dei lipidi che formano la membrana neuronale, soprattutto la sfingomielina — il componente principale della guaina mielinica. Importante per la formazione di acidi nucleici e proteine."},
        {h:"Uridina", p:"Agisce come coenzima nella sintesi di glicolipidi, strutture neuronali e guaina mielinica, completando la citidina. Funge da fonte di energia nella contrazione muscolare."},
        {h:"Azione generale", p:"Attiva il metabolismo nelle cellule nervose, ripristina la guaina mielinica e migliora il trofismo del sistema nervoso centrale e periferico, la memoria e l'attenzione."}
      ],
      areas:[
        {h:"Neuropatie", p:"Neuropatie osteoarticolari (sciatica, radicolite), neuropatia diabetica, polineuriti alcoliche."},
        {h:"Nevralgie", p:"Nevralgia dei nervi facciale, trigemino e intercostali, lombalgia."},
        {h:"Memoria e attenzione", p:"Deficit neuropsicologico con compromissione di memoria, attenzione e sensibilità."},
        {h:"Recupero", p:"Herpes zoster, paralisi di Bell, complicanze delle malattie vascolari cerebrali."}
      ],
      dosageText:"Per uso orale. Adulti — 1–2 capsule due volte al giorno; bambini dai 5 anni — 1 capsula due volte al giorno, prima o dopo i pasti. Ciclo: almeno 10 giorni, fino a 20 giorni se indicato. Ripetibile su consiglio del medico.",
      dosageStats:[{n:"1–2",l:"capsule due volte al giorno"},{n:"10–20",l:"giorni di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza."},
        {h:"Effetti collaterali", p:"Intolleranza individuale ai componenti. In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Nucleo Neuro",
      heroSub:"Sitidin va uridin bilan kapsulalar. Asab tizimi salomatligini qo‘llab-quvvatlaydi va xotira hamda o‘rganishni yaxshilashga yordam beradi.",
      introTitle:"Nerv to‘qimasini tiklash",
      introText:"Nucleo Neuro — miyelin qobig‘ining fosfolipidlari va glikolipidlari sintezida ishtirok etadigan nukleotidlar (sitidin va uridin) majmuasi. Asab tizimining funksional faolligini, nerv-mushak o‘tkazuvchanligini, xotira va diqqatni qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, № 30."},
        {h:"1 kapsula tarkibi", p:"Sitidin — 5 mg<br>Uridin — 3 mg"}
      ],
      props:[
        {h:"Sitidin", p:"Neyronal membranani hosil qiluvchi lipidlar, ayniqsa sfingomielin — miyelin qobig‘ining asosiy komponenti sintezida ishtirok etadi. Nuklein kislotalar va oqsillar shakllanishi uchun muhim."},
        {h:"Uridin", p:"Glikolipidlar, neyronal tuzilmalar va miyelin qobig‘i sintezida koferment sifatida ishlaydi, sitidinni to‘ldiradi. Mushak qisqarishida energiya manbai bo‘lib xizmat qiladi."},
        {h:"Umumiy ta’sir", p:"Nerv hujayralarida moddalar almashinuvini faollashtiradi, miyelin qobig‘ini tiklaydi va markaziy hamda periferik asab tizimi trofikasini, xotira va diqqatni yaxshilaydi."}
      ],
      areas:[
        {h:"Neyropatiyalar", p:"Suyak-bo‘g‘im neyropatiyalari (ishias, radikulit), diabetik neyropatiya, alkogolli polinevritlar."},
        {h:"Nevralgiyalar", p:"Yuz, uch shoxli va qovurg‘alararo nervlar nevralgiyasi, bel og‘rig‘i."},
        {h:"Xotira va diqqat", p:"Xotira, diqqat va sezuvchanlik buzilishi bilan neyropsixologik defitsit."},
        {h:"Tiklanish", p:"Belbog‘ gerpesi, Bell falaji, miya qon tomir kasalliklari asoratlari."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalarga — kuniga 2 marta 1–2 kapsuladan; 5 yoshdan katta bolalarga — kuniga 2 marta 1 kapsuladan, ovqatdan oldin yoki keyin. Kurs: kamida 10 kun, ko‘rsatilganda 20 kungacha. Shifokor tavsiyasi bilan takrorlash mumkin.",
      dosageStats:[{n:"1–2",l:"kapsula kuniga 2 marta"},{n:"10–20",l:"kunlik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Komponentlarga individual chidamsizlik. Nojo‘ya ta’sirlar yuzaga kelsa, qo‘llashni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "aneyrum": {
    cat: "capsules",
    img: "img/prod/aneyrum.webp",
    doc: "downloads/aneyrum-instrukciya.docx",
    ru: {
      name:"Анейриум",
      heroSub:"Капсулы с магнием, валерианой, боярышником, мелиссой и глицином. Для стрессоустойчивости, спокойствия и здорового сна.",
      introTitle:"Спокойствие и стрессоустойчивость",
      introText:"Анейриум — комплекс магния бисглицината с растительными экстрактами (валериана, боярышник, мелисса) и глицином. Уменьшает влияние стресса, успокаивает нервную систему, поддерживает сердце и улучшает качество сна. Без глютена и лактозы.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, № 20."},
        {h:"Состав на 1 капсулу", p:"Магния бисглицинат — 111 мг · Глицин — 50 мг<br>Экстракт мелиссы — 69 мг · Боярышника — 65 мг<br>Валерианы — 20 мг"}
      ],
      props:[
        {h:"Магний (бисглицинат)", p:"Нормализует и активирует обменные процессы, ионный баланс в мышцах и миокарде. Кофактор многих ферментов; оказывает спазмолитическое и антиаритмическое действие."},
        {h:"Валериана и мелисса", p:"Растительные экстракты с умеренным седативным и анксиолитическим действием: облегчают засыпание, снижают тревогу и раздражительность, замедляют сердечный ритм."},
        {h:"Боярышник и глицин", p:"Боярышник — кардиотоническое, спазмолитическое и седативное действие. Глицин снижает психоэмоциональное напряжение, улучшает настроение и умственную работоспособность."}
      ],
      areas:[
        {h:"Стресс", p:"Уменьшает влияние стресса, повышает стрессоустойчивость, при «синдроме менеджера»."},
        {h:"Нервная система", p:"При повышенной возбудимости, раздражительности, неврастении и тревоге."},
        {h:"Сердце и сосуды", p:"В комплексной терапии нейроциркуляторной дистонии, артериальной гипертензии и ИБС."},
        {h:"Сон", p:"При бессоннице лёгкой формы, улучшает качество сна."}
      ],
      dosageText:"Принимается внутрь. Взрослым — по 1 капсуле 1–2 раза в день после еды (при необходимости до 3 капсул в сутки); детям с 12 лет — по 1 капсуле 1 раз в день. Курс — не менее 1 месяца, при необходимости до 3 месяцев. При бессоннице — по 1–2 капсулы за 1 час до сна.",
      dosageStats:[{n:"1–2",l:"капсулы в день после еды"},{n:"1–3",l:"месяца курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"Обычно хорошо переносится. Возможны аллергические реакции, диспепсия, сонливость. При появлении — обратиться к врачу."},
        {h:"Особые указания", p:"Имеет накопительный эффект. При беременности и лактации — только по назначению врача. Не превышать рекомендуемые дозы."},
        {h:"Хранение · отпуск", p:"В сухом, защищённом от света месте, не выше 25 °C. 24 месяца. Без рецепта. БАД, не лекарство."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Aneyrum",
      heroSub:"Capsules with magnesium, valerian, hawthorn, lemon balm and glycine. For stress resistance, calm and healthy sleep.",
      introTitle:"Calm and stress resistance",
      introText:"Aneyrum is a complex of magnesium bisglycinate with plant extracts (valerian, hawthorn, lemon balm) and glycine. It reduces the impact of stress, calms the nervous system, supports the heart and improves sleep quality. Gluten- and lactose-free.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No. 20."},
        {h:"Composition per capsule", p:"Magnesium bisglycinate — 111 mg · Glycine — 50 mg<br>Lemon balm extract — 69 mg · Hawthorn — 65 mg<br>Valerian — 20 mg"}
      ],
      props:[
        {h:"Magnesium (bisglycinate)", p:"Normalizes and activates metabolic processes and ion balance in muscles and the myocardium. A cofactor of many enzymes; has antispasmodic and antiarrhythmic action."},
        {h:"Valerian & lemon balm", p:"Plant extracts with a moderate sedative and anxiolytic effect: they ease falling asleep, reduce anxiety and irritability and slow the heart rate."},
        {h:"Hawthorn & glycine", p:"Hawthorn has cardiotonic, antispasmodic and sedative action. Glycine reduces psycho-emotional tension and improves mood and mental performance."}
      ],
      areas:[
        {h:"Stress", p:"Reduces the impact of stress and increases stress resistance; for \"manager's syndrome\"."},
        {h:"Nervous system", p:"For increased excitability, irritability, neurasthenia and anxiety."},
        {h:"Heart & vessels", p:"As part of complex therapy of neurocirculatory dystonia, arterial hypertension and coronary heart disease."},
        {h:"Sleep", p:"For mild insomnia; improves sleep quality."}
      ],
      dosageText:"Taken orally. Adults — 1 capsule 1–2 times a day after meals (up to 3 capsules a day if needed); children from 12 years — 1 capsule once a day. Course: at least 1 month, up to 3 months if needed. For insomnia — 1–2 capsules 1 hour before bed.",
      dosageStats:[{n:"1–2",l:"capsules a day after meals"},{n:"1–3",l:"months course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"Usually well tolerated. Possible allergic reactions, dyspepsia, drowsiness. If they occur, consult a doctor."},
        {h:"Special instructions", p:"Has a cumulative effect. During pregnancy and breastfeeding — only as prescribed by a doctor. Do not exceed the recommended doses."},
        {h:"Storage · dispensing", p:"In a dry place protected from light, no more than 25 °C. 24 months. Without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Aneyrum",
      heroSub:"Capsule con magnesio, valeriana, biancospino, melissa e glicina. Per resistenza allo stress, calma e sonno sano.",
      introTitle:"Calma e resistenza allo stress",
      introText:"Aneyrum è un complesso di magnesio bisglicinato con estratti vegetali (valeriana, biancospino, melissa) e glicina. Riduce l'impatto dello stress, calma il sistema nervoso, sostiene il cuore e migliora la qualità del sonno. Senza glutine e lattosio.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n. 20."},
        {h:"Composizione per capsula", p:"Magnesio bisglicinato — 111 mg · Glicina — 50 mg<br>Estratto di melissa — 69 mg · Biancospino — 65 mg<br>Valeriana — 20 mg"}
      ],
      props:[
        {h:"Magnesio (bisglicinato)", p:"Normalizza e attiva i processi metabolici e l'equilibrio ionico nei muscoli e nel miocardio. Cofattore di molti enzimi; ha azione antispasmodica e antiaritmica."},
        {h:"Valeriana e melissa", p:"Estratti vegetali con un moderato effetto sedativo e ansiolitico: facilitano l'addormentamento, riducono ansia e irritabilità e rallentano il ritmo cardiaco."},
        {h:"Biancospino e glicina", p:"Il biancospino ha azione cardiotonica, antispasmodica e sedativa. La glicina riduce la tensione psico-emotiva e migliora l'umore e le prestazioni mentali."}
      ],
      areas:[
        {h:"Stress", p:"Riduce l'impatto dello stress e aumenta la resistenza; per la \"sindrome del manager\"."},
        {h:"Sistema nervoso", p:"In caso di eccitabilità, irritabilità, nevrastenia e ansia."},
        {h:"Cuore e vasi", p:"Nella terapia complessa di distonia neurocircolatoria, ipertensione arteriosa e cardiopatia ischemica."},
        {h:"Sonno", p:"In caso di insonnia lieve; migliora la qualità del sonno."}
      ],
      dosageText:"Per uso orale. Adulti — 1 capsula 1–2 volte al giorno dopo i pasti (fino a 3 capsule al giorno se necessario); bambini dai 12 anni — 1 capsula una volta al giorno. Ciclo: almeno 1 mese, fino a 3 mesi se necessario. In caso di insonnia — 1–2 capsule 1 ora prima di coricarsi.",
      dosageStats:[{n:"1–2",l:"capsule al giorno dopo i pasti"},{n:"1–3",l:"mesi di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"Solitamente ben tollerato. Possibili reazioni allergiche, dispepsia, sonnolenza. In caso compaiano, consultare un medico."},
        {h:"Avvertenze speciali", p:"Ha un effetto cumulativo. In gravidanza e allattamento — solo su prescrizione medica. Non superare le dosi raccomandate."},
        {h:"Conservazione · vendita", p:"In luogo asciutto e al riparo dalla luce, non oltre 25 °C. 24 mesi. Senza ricetta. Integratore, non un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Aneyrum",
      heroSub:"Magniy, valeriana, do‘lana, melissa va glitsin bilan kapsulalar. Stressga chidamlilik, xotirjamlik va sog‘lom uyqu uchun.",
      introTitle:"Xotirjamlik va stressga chidamlilik",
      introText:"Aneyrum — o‘simlik ekstraktlari (valeriana, do‘lana, melissa) va glitsin bilan magniy bisglitsinat majmuasi. Stress ta’sirini kamaytiradi, asab tizimini tinchlantiradi, yurakni qo‘llab-quvvatlaydi va uyqu sifatini yaxshilaydi. Glyuten va laktozasiz.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, № 20."},
        {h:"1 kapsula tarkibi", p:"Magniy bisglitsinat — 111 mg · Glitsin — 50 mg<br>Melissa ekstrakti — 69 mg · Do‘lana — 65 mg<br>Valeriana — 20 mg"}
      ],
      props:[
        {h:"Magniy (bisglitsinat)", p:"Moddalar almashinuvi va mushaklar hamda miokarddagi ion muvozanatini me’yorlashtiradi va faollashtiradi. Ko‘plab fermentlarning kofaktori; spazmga qarshi va aritmiyaga qarshi ta’sirga ega."},
        {h:"Valeriana va melissa", p:"O‘rtacha tinchlantiruvchi va tashvishga qarshi ta’sirli o‘simlik ekstraktlari: uyquga ketishni osonlashtiradi, tashvish va asabiylikni kamaytiradi va yurak ritmini sekinlashtiradi."},
        {h:"Do‘lana va glitsin", p:"Do‘lana — kardiotonik, spazmga qarshi va tinchlantiruvchi ta’sir. Glitsin psixo-emotsional taranglikni kamaytiradi, kayfiyat va aqliy ish qobiliyatini yaxshilaydi."}
      ],
      areas:[
        {h:"Stress", p:"Stress ta’sirini kamaytiradi, stressga chidamlilikni oshiradi; «menejer sindromi»da."},
        {h:"Asab tizimi", p:"Qo‘zg‘aluvchanlik oshishi, asabiylik, nevrasteniya va tashvishda."},
        {h:"Yurak va tomirlar", p:"Neyrotsirkulyator distoniya, arterial gipertenziya va YuIKning majmuaviy davosida."},
        {h:"Uyqu", p:"Yengil uyqusizlikda; uyqu sifatini yaxshilaydi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalarga — ovqatdan keyin kuniga 1–2 marta 1 kapsuladan (zarur bo‘lganda kuniga 3 kapsulagacha); 12 yoshdan katta bolalarga — kuniga 1 marta 1 kapsuladan. Kurs: kamida 1 oy, zarur bo‘lganda 3 oygacha. Uyqusizlikda — uxlashdan 1 soat oldin 1–2 kapsuladan.",
      dosageStats:[{n:"1–2",l:"kapsula kuniga, ovqatdan keyin"},{n:"1–3",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Odatda yaxshi ko‘tariladi. Allergik reaksiyalar, dispepsiya, uyquchanlik bo‘lishi mumkin. Yuzaga kelsa, shifokorga murojaat qiling."},
        {h:"Maxsus ko‘rsatmalar", p:"To‘planuvchi ta’sirga ega. Homiladorlik va emizish davrida — faqat shifokor ko‘rsatmasi bilan. Tavsiya etilgan dozalardan oshirmang."},
        {h:"Saqlash · sotuv", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. 24 oy. Retseptsiz. BAD, dori emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "somnium-caps": {
    cat: "capsules",
    img: "img/prod/somnium-caps.webp",
    ru: {
      name:"Сомниум",
      heroSub:"Капсулы с мелатонином, глицином и валерианой. Быстрое засыпание и крепкий сон.",
      introTitle:"Быстрое засыпание и крепкий сон",
      introText:"Сомниум — комплекс с мелатонином, глицином и экстрактом валерианы в капсулах. Способствует быстрому засыпанию, качественному сну и спокойному пробуждению.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, № 30."},
        {h:"Состав на 1 капсулу", p:"Мелатонин — 2 мг<br>Глицин — 17 мг<br>Экстракт валерианы — 20 мг"}
      ],
      props:[
        {h:"Мелатонин", p:"Естественный регулятор суточного ритма: обеспечивает быстрое засыпание, качественный сон и комфортное пробуждение."},
        {h:"Глицин", p:"Уменьшает психоэмоциональное напряжение, улучшает настроение и облегчает засыпание."},
        {h:"Экстракт валерианы", p:"Оказывает мягкий седативный эффект, облегчает наступление естественного сна."}
      ],
      areas:[
        {h:"Засыпание", p:"Способствует быстрому засыпанию."},
        {h:"Качество сна", p:"Обеспечивает крепкий и спокойный сон."},
        {h:"Стресс", p:"Снижает нервное напряжение перед сном."},
        {h:"Пробуждение", p:"Комфортное пробуждение без сонливости."}
      ],
      dosageText:"Принимается внутрь. Взрослым — по 1 капсуле за 30–60 минут до сна. Подробный режим приёма — на упаковке или по рекомендации специалиста.",
      dosageStats:[{n:"1",l:"капсула перед сном"},{n:"30",l:"капсул в упаковке"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, беременность и лактация."},
        {h:"Особые указания", p:"Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «ZAMINPHARM», Республика Узбекистан, г. Ташкент."
    },
    en: {
      name:"Somnium",
      heroSub:"Capsules with melatonin, glycine and valerian. Fast falling asleep and sound sleep.",
      introTitle:"Fast falling asleep and sound sleep",
      introText:"Somnium is a capsule complex with melatonin, glycine and valerian extract. It promotes fast falling asleep, quality sleep and calm waking.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No. 30."},
        {h:"Composition per capsule", p:"Melatonin — 2 mg<br>Glycine — 17 mg<br>Valerian extract — 20 mg"}
      ],
      props:[
        {h:"Melatonin", p:"A natural regulator of the circadian rhythm: it ensures fast falling asleep, quality sleep and comfortable waking."},
        {h:"Glycine", p:"Reduces psycho-emotional tension, improves mood and eases falling asleep."},
        {h:"Valerian extract", p:"Has a mild sedative effect and eases natural sleep."}
      ],
      areas:[
        {h:"Falling asleep", p:"Promotes fast falling asleep."},
        {h:"Sleep quality", p:"Provides sound, calm sleep."},
        {h:"Stress", p:"Reduces nervous tension before bed."},
        {h:"Waking", p:"Comfortable waking without drowsiness."}
      ],
      dosageText:"Taken orally. Adults — 1 capsule 30–60 minutes before bed. The detailed regimen is on the packaging or as advised by a specialist.",
      dosageStats:[{n:"1",l:"capsule before bed"},{n:"30",l:"capsules per pack"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, pregnancy and breastfeeding."},
        {h:"Special instructions", p:"Consultation with a specialist is recommended before use. Do not exceed the recommended doses."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: ZAMINPHARM LLC, Republic of Uzbekistan, Tashkent."
    },
    it: {
      name:"Somnium",
      heroSub:"Capsule con melatonina, glicina e valeriana. Addormentamento rapido e sonno profondo.",
      introTitle:"Addormentamento rapido e sonno profondo",
      introText:"Somnium è un complesso in capsule con melatonina, glicina ed estratto di valeriana. Favorisce un rapido addormentamento, un sonno di qualità e un risveglio sereno.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n. 30."},
        {h:"Composizione per capsula", p:"Melatonina — 2 mg<br>Glicina — 17 mg<br>Estratto di valeriana — 20 mg"}
      ],
      props:[
        {h:"Melatonina", p:"Un regolatore naturale del ritmo circadiano: garantisce un rapido addormentamento, un sonno di qualità e un risveglio confortevole."},
        {h:"Glicina", p:"Riduce la tensione psico-emotiva, migliora l'umore e facilita l'addormentamento."},
        {h:"Estratto di valeriana", p:"Ha un lieve effetto sedativo e facilita il sonno naturale."}
      ],
      areas:[
        {h:"Addormentamento", p:"Favorisce un rapido addormentamento."},
        {h:"Qualità del sonno", p:"Garantisce un sonno profondo e sereno."},
        {h:"Stress", p:"Riduce la tensione nervosa prima di coricarsi."},
        {h:"Risveglio", p:"Risveglio confortevole senza sonnolenza."}
      ],
      dosageText:"Per uso orale. Adulti — 1 capsula 30–60 minuti prima di coricarsi. Il regime dettagliato è sulla confezione o secondo il consiglio dello specialista.",
      dosageStats:[{n:"1",l:"capsula prima di coricarsi"},{n:"30",l:"capsule per confezione"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, gravidanza e allattamento."},
        {h:"Avvertenze speciali", p:"Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: ZAMINPHARM LLC, Repubblica dell'Uzbekistan, Tashkent."
    },
    uz: {
      name:"Somnium",
      heroSub:"Melatonin, glitsin va valeriana bilan kapsulalar. Tez uyquga ketish va mustahkam uyqu.",
      introTitle:"Tez uyquga ketish va mustahkam uyqu",
      introText:"Somnium — melatonin, glitsin va valeriana ekstrakti bilan kapsuladagi majmua. Tez uyquga ketish, sifatli uyqu va xotirjam uyg‘onishga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, № 30."},
        {h:"1 kapsula tarkibi", p:"Melatonin — 2 mg<br>Glitsin — 17 mg<br>Valeriana ekstrakti — 20 mg"}
      ],
      props:[
        {h:"Melatonin", p:"Sutkalik ritmning tabiiy tartibga soluvchisi: tez uyquga ketish, sifatli uyqu va qulay uyg‘onishni ta’minlaydi."},
        {h:"Glitsin", p:"Psixo-emotsional taranglikni kamaytiradi, kayfiyatni yaxshilaydi va uyquga ketishni osonlashtiradi."},
        {h:"Valeriana ekstrakti", p:"Yumshoq tinchlantiruvchi ta’sirga ega va tabiiy uyquni osonlashtiradi."}
      ],
      areas:[
        {h:"Uyquga ketish", p:"Tez uyquga ketishga yordam beradi."},
        {h:"Uyqu sifati", p:"Mustahkam va xotirjam uyquni ta’minlaydi."},
        {h:"Stress", p:"Uxlashdan oldin asabiy taranglikni kamaytiradi."},
        {h:"Uyg‘onish", p:"Uyquchanliksiz qulay uyg‘onish."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalarga — uxlashdan 30–60 daqiqa oldin 1 kapsuladan. Batafsil qabul tartibi qadoqda yoki mutaxassis tavsiyasiga ko‘ra.",
      dosageStats:[{n:"1",l:"kapsula uxlashdan oldin"},{n:"30",l:"kapsula qadoqda"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, homiladorlik va emizish."},
        {h:"Maxsus ko‘rsatmalar", p:"Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: ZAMINPHARM LLC, O‘zbekiston Respublikasi, Toshkent."
    }
  },

  "slipomell": {
    cat: "capsules",
    img: "img/prod/slipomell.webp",
    doc: "downloads/slipomell-instrukciya.docx",
    ru: {
      name:"Слипомелл",
      heroSub:"Капсулы с мелатонином, ГАМК и глицином. Для быстрого засыпания, крепкого сна и спокойствия.",
      introTitle:"Регуляция сна и биоритмов",
      introText:"Слипомелл — комплекс мелатонина с ГАМК и глицином. Регулирует суточные циркадные ритмы, нормализует цикл «сон-бодрствование», обеспечивает быстрое засыпание и комфортное пробуждение без вялости. Без глютена и лактозы.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, № 20."},
        {h:"Состав на 1 капсулу", p:"ГАМК (гамма-аминомасляная кислота) — 50 мг<br>Мелатонин — 3 мг<br>Глицин — 4 мг"}
      ],
      props:[
        {h:"Мелатонин", p:"Естественный регулятор циркадных ритмов: обеспечивает быстрое засыпание, качественный сон, снижает частоту ночных пробуждений. Обладает адаптогенным, иммуномодулирующим и антиоксидантным действием."},
        {h:"ГАМК", p:"Важнейший тормозной нейромедиатор ЦНС. Успокаивает нервную систему, снижает тревожность, расслабляет мышцы и сосуды, защищает нейроны."},
        {h:"Глицин", p:"Уменьшает психоэмоциональное напряжение, оказывает успокаивающее и антидепрессивное действие, нормализует сон и ускоряет вывод токсинов."}
      ],
      areas:[
        {h:"Сон", p:"При первичной бессоннице, особенно у пациентов 55 лет и старше; снижает время засыпания."},
        {h:"Биоритмы", p:"Адаптоген при смене часовых поясов, при десинхронозе и метеочувствительности."},
        {h:"Мозг", p:"При нарушениях сна, связанных с патологией головного мозга (энцефалопатии, нарушения кровообращения)."},
        {h:"Спокойствие", p:"Устранение тревоги и беспокойства, улучшение общего состояния."}
      ],
      dosageText:"Принимается внутрь. Взрослым и детям с 16 лет — по 1 капсуле 1 раз в день за 1–2 часа до сна, после еды или перед сном. Курс — от 1 месяца до 12 недель. При смене часовых поясов — за 1 день до перелёта и в последующие 2–5 дней по 1 капсуле за 1 час до сна.",
      dosageStats:[{n:"1",l:"капсула за 1–2 ч до сна"},{n:"1–12",l:"недель курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность."},
        {h:"Побочные действия", p:"Головная боль, сонливость, необычные сновидения. При появлении — прекратить приём и обратиться к врачу."},
        {h:"Особые указания", p:"Мелатонин усиливает действие снотворных. Курение снижает его концентрацию, этанол — эффективность. Не превышать дозы."},
        {h:"Хранение · отпуск", p:"В сухом, защищённом от света месте, не выше 25 °C. 24 месяца. Без рецепта. БАД, не лекарство."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Slipomell",
      heroSub:"Capsules with melatonin, GABA and glycine. For fast falling asleep, sound sleep and calm.",
      introTitle:"Sleep and biorhythm regulation",
      introText:"Slipomell is a complex of melatonin with GABA and glycine. It regulates circadian rhythms, normalizes the sleep-wake cycle and ensures fast falling asleep and comfortable waking without grogginess. Gluten- and lactose-free.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No. 20."},
        {h:"Composition per capsule", p:"GABA (gamma-aminobutyric acid) — 50 mg<br>Melatonin — 3 mg<br>Glycine — 4 mg"}
      ],
      props:[
        {h:"Melatonin", p:"A natural regulator of circadian rhythms: it ensures fast falling asleep and quality sleep and reduces night awakenings. It has adaptogenic, immunomodulatory and antioxidant action."},
        {h:"GABA", p:"The key inhibitory neurotransmitter of the CNS. It calms the nervous system, reduces anxiety, relaxes muscles and vessels and protects neurons."},
        {h:"Glycine", p:"Reduces psycho-emotional tension, has a calming and antidepressant effect, normalizes sleep and speeds toxin elimination."}
      ],
      areas:[
        {h:"Sleep", p:"For primary insomnia, especially in patients aged 55+; reduces the time to fall asleep."},
        {h:"Biorhythms", p:"An adaptogen for jet lag, desynchronosis and weather sensitivity."},
        {h:"Brain", p:"For sleep disorders related to brain pathology (encephalopathies, circulatory disorders)."},
        {h:"Calm", p:"Relief of anxiety and worry and improvement of overall well-being."}
      ],
      dosageText:"Taken orally. Adults and children from 16 years — 1 capsule once a day 1–2 hours before bed, after meals or at bedtime. Course: from 1 month up to 12 weeks. For jet lag — 1 day before the flight and the following 2–5 days, 1 capsule 1 hour before bed.",
      dosageStats:[{n:"1",l:"capsule 1–2 h before bed"},{n:"1–12",l:"weeks course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy."},
        {h:"Side effects", p:"Headache, drowsiness, unusual dreams. If they occur, stop use and consult a doctor."},
        {h:"Special instructions", p:"Melatonin enhances the effect of sleep aids. Smoking reduces its concentration and alcohol its effectiveness. Do not exceed the doses."},
        {h:"Storage · dispensing", p:"In a dry place protected from light, no more than 25 °C. 24 months. Without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Slipomell",
      heroSub:"Capsule con melatonina, GABA e glicina. Per addormentamento rapido, sonno profondo e calma.",
      introTitle:"Regolazione di sonno e bioritmi",
      introText:"Slipomell è un complesso di melatonina con GABA e glicina. Regola i ritmi circadiani, normalizza il ciclo sonno-veglia e garantisce un rapido addormentamento e un risveglio confortevole senza intontimento. Senza glutine e lattosio.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n. 20."},
        {h:"Composizione per capsula", p:"GABA (acido gamma-amminobutirrico) — 50 mg<br>Melatonina — 3 mg<br>Glicina — 4 mg"}
      ],
      props:[
        {h:"Melatonina", p:"Un regolatore naturale dei ritmi circadiani: garantisce un rapido addormentamento e un sonno di qualità e riduce i risvegli notturni. Ha azione adattogena, immunomodulante e antiossidante."},
        {h:"GABA", p:"Il principale neurotrasmettitore inibitorio del SNC. Calma il sistema nervoso, riduce l'ansia, rilassa muscoli e vasi e protegge i neuroni."},
        {h:"Glicina", p:"Riduce la tensione psico-emotiva, ha un effetto calmante e antidepressivo, normalizza il sonno e accelera l'eliminazione delle tossine."}
      ],
      areas:[
        {h:"Sonno", p:"In caso di insonnia primaria, soprattutto nei pazienti dai 55 anni; riduce il tempo per addormentarsi."},
        {h:"Bioritmi", p:"Un adattogeno per il jet lag, la desincronosi e la sensibilità al meteo."},
        {h:"Cervello", p:"In caso di disturbi del sonno legati a patologie cerebrali (encefalopatie, disturbi circolatori)."},
        {h:"Calma", p:"Riduzione di ansia e preoccupazione e miglioramento del benessere generale."}
      ],
      dosageText:"Per uso orale. Adulti e bambini dai 16 anni — 1 capsula una volta al giorno 1–2 ore prima di coricarsi, dopo i pasti o prima di dormire. Ciclo: da 1 mese fino a 12 settimane. Per il jet lag — 1 giorno prima del volo e nei successivi 2–5 giorni, 1 capsula 1 ora prima di coricarsi.",
      dosageStats:[{n:"1",l:"capsula 1–2 h prima di coricarsi"},{n:"1–12",l:"settimane di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza."},
        {h:"Effetti collaterali", p:"Mal di testa, sonnolenza, sogni insoliti. In caso compaiano, interrompere l'uso e consultare un medico."},
        {h:"Avvertenze speciali", p:"La melatonina potenzia l'effetto dei sonniferi. Il fumo ne riduce la concentrazione e l'alcol l'efficacia. Non superare le dosi."},
        {h:"Conservazione · vendita", p:"In luogo asciutto e al riparo dalla luce, non oltre 25 °C. 24 mesi. Senza ricetta. Integratore, non un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Slipomell",
      heroSub:"Melatonin, GABA va glitsin bilan kapsulalar. Tez uyquga ketish, mustahkam uyqu va xotirjamlik uchun.",
      introTitle:"Uyqu va bioritmlarni tartibga solish",
      introText:"Slipomell — GABA va glitsin bilan melatonin majmuasi. Sutkalik sirkad ritmlarni tartibga soladi, «uyqu-uyg‘oqlik» siklini me’yorlashtiradi, tez uyquga ketish va bo‘shashiqsiz qulay uyg‘onishni ta’minlaydi. Glyuten va laktozasiz.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, № 20."},
        {h:"1 kapsula tarkibi", p:"GABA (gamma-aminomoy kislotasi) — 50 mg<br>Melatonin — 3 mg<br>Glitsin — 4 mg"}
      ],
      props:[
        {h:"Melatonin", p:"Sirkad ritmlarning tabiiy tartibga soluvchisi: tez uyquga ketish va sifatli uyquni ta’minlaydi, tungi uyg‘onishlarni kamaytiradi. Adaptogen, immunomodulyator va antioksidant ta’sirga ega."},
        {h:"GABA", p:"MNSning asosiy tormozlovchi neyromediatori. Asab tizimini tinchlantiradi, tashvishni kamaytiradi, mushak va tomirlarni bo‘shashtiradi va neyronlarni himoya qiladi."},
        {h:"Glitsin", p:"Psixo-emotsional taranglikni kamaytiradi, tinchlantiruvchi va antidepressiv ta’sir ko‘rsatadi, uyquni me’yorlashtiradi va toksinlar chiqishini tezlashtiradi."}
      ],
      areas:[
        {h:"Uyqu", p:"Birlamchi uyqusizlikda, ayniqsa 55 yoshdan katta bemorlarda; uyquga ketish vaqtini qisqartiradi."},
        {h:"Bioritmlar", p:"Vaqt mintaqalari almashinuvida, desinxronoz va ob-havoga sezuvchanlikda adaptogen."},
        {h:"Miya", p:"Miya patologiyasi bilan bog‘liq uyqu buzilishlarida (ensefalopatiya, qon aylanish buzilishlari)."},
        {h:"Xotirjamlik", p:"Tashvish va bezovtalikni bartaraf etish, umumiy holatni yaxshilash."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalar va 16 yoshdan katta bolalarga — kuniga 1 marta uxlashdan 1–2 soat oldin, ovqatdan keyin yoki uxlash oldidan 1 kapsuladan. Kurs — 1 oydan 12 haftagacha. Vaqt mintaqalari almashinuvida — parvozdan 1 kun oldin va keyingi 2–5 kun davomida uxlashdan 1 soat oldin 1 kapsuladan.",
      dosageStats:[{n:"1",l:"kapsula uxlashdan 1–2 soat oldin"},{n:"1–12",l:"haftalik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Bosh og‘rig‘i, uyquchanlik, g‘ayrioddiy tushlar. Yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Maxsus ko‘rsatmalar", p:"Melatonin uyqu dorilarining ta’sirini kuchaytiradi. Chekish uning konsentratsiyasini, etanol esa samaradorligini kamaytiradi. Dozalardan oshirmang."},
        {h:"Saqlash · sotuv", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. 24 oy. Retseptsiz. BAD, dori emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "vitamin-d3": {
    cat: "capsules",
    img: "img/prod/vitamin-d3.webp",
    doc: "downloads/vitamin-d3-instrukciya.docx",
    ru: {
      name:"Витамин Д3 Эффект",
      heroSub:"Капсулы с витамином D3 5000 МЕ и экстрактом черники на основе липосомальной технологии. Поддержка иммунитета.",
      introTitle:"Витамин D3 5000 МЕ — липосомальный",
      introText:"Витамин Д3 Эффект — высокая дозировка витамина D3 (5000 МЕ) с экстрактом черники, изготовлен по липосомальной технологии для лучшего усвоения. Поддерживает иммунитет, настроение и мышцы.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы, 60 шт. Липосомальная технология."},
        {h:"Состав на 1 капсулу", p:"Витамин D3 — 5000 МЕ<br>Экстракт черники — 100 мг"}
      ],
      props:[
        {h:"Витамин D3", p:"Жирорастворимый витамин, который запасается в организме. Поддерживает нормальную иммунную систему, способствует хорошему настроению, регуляции эмоций и росту мышечной массы."},
        {h:"Экстракт черники", p:"Богат антоцианами-антиоксидантами, поддерживает здоровье глаз и сосудов, дополняет действие комплекса."},
        {h:"Липосомальная технология", p:"Обеспечивает более высокую биодоступность и усвоение витамина D3 организмом."}
      ],
      areas:[
        {h:"Иммунитет", p:"Поддерживает нормальную иммунную систему."},
        {h:"Настроение", p:"Способствует хорошему настроению и регуляции эмоций."},
        {h:"Мышцы", p:"Способствует росту мышечной массы."},
        {h:"Кости", p:"Поддержка костной системы и усвоения кальция."}
      ],
      dosageText:"Принимается внутрь. Взрослые и дети старше 6 лет — по 1 капсуле 1 раз в день во время еды. При необходимости курс приёма можно повторить по рекомендации специалиста.",
      dosageStats:[{n:"5000 МЕ",l:"витамина D3 в капсуле"},{n:"1",l:"капсула в день"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При возникновении побочных эффектов следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Vitamin D3 Effect",
      heroSub:"Capsules with vitamin D3 5000 IU and blueberry extract, made with liposomal technology. Immune support.",
      introTitle:"Vitamin D3 5000 IU — liposomal",
      introText:"Vitamin D3 Effect provides a high dose of vitamin D3 (5000 IU) with blueberry extract, made with liposomal technology for better absorption. It supports immunity, mood and muscles.",
      infoCards:[
        {h:"Form", p:"Capsules, 60 per pack. Liposomal technology."},
        {h:"Composition per capsule", p:"Vitamin D3 — 5000 IU<br>Blueberry extract — 100 mg"}
      ],
      props:[
        {h:"Vitamin D3", p:"A fat-soluble vitamin stored in the body. It supports a normal immune system, promotes good mood, helps regulate emotions and supports muscle growth."},
        {h:"Blueberry extract", p:"Rich in anthocyanin antioxidants, supports eye and vascular health and complements the complex."},
        {h:"Liposomal technology", p:"Provides higher bioavailability and absorption of vitamin D3 by the body."}
      ],
      areas:[
        {h:"Immunity", p:"Supports a normal immune system."},
        {h:"Mood", p:"Promotes good mood and emotion regulation."},
        {h:"Muscles", p:"Supports muscle growth."},
        {h:"Bones", p:"Supports the skeletal system and calcium absorption."}
      ],
      dosageText:"Taken orally. Adults and children over 6 years — 1 capsule once a day with meals. The course may be repeated on a specialist's recommendation.",
      dosageStats:[{n:"5000 IU",l:"of vitamin D3 per capsule"},{n:"1",l:"capsule a day"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Vitamin D3 Effect",
      heroSub:"Capsule con vitamina D3 5000 UI ed estratto di mirtillo, con tecnologia liposomiale. Supporto immunitario.",
      introTitle:"Vitamina D3 5000 UI — liposomiale",
      introText:"Vitamin D3 Effect fornisce un'alta dose di vitamina D3 (5000 UI) con estratto di mirtillo, realizzato con tecnologia liposomiale per un migliore assorbimento. Sostiene immunità, umore e muscoli.",
      infoCards:[
        {h:"Formato", p:"Capsule, 60 per confezione. Tecnologia liposomiale."},
        {h:"Composizione per capsula", p:"Vitamina D3 — 5000 UI<br>Estratto di mirtillo — 100 mg"}
      ],
      props:[
        {h:"Vitamina D3", p:"Una vitamina liposolubile immagazzinata nell'organismo. Sostiene un normale sistema immunitario, favorisce il buon umore, aiuta a regolare le emozioni e sostiene la crescita muscolare."},
        {h:"Estratto di mirtillo", p:"Ricco di antiossidanti antocianici, sostiene la salute degli occhi e dei vasi e completa il complesso."},
        {h:"Tecnologia liposomiale", p:"Garantisce una maggiore biodisponibilità e assorbimento della vitamina D3 da parte dell'organismo."}
      ],
      areas:[
        {h:"Immunità", p:"Sostiene un normale sistema immunitario."},
        {h:"Umore", p:"Favorisce il buon umore e la regolazione delle emozioni."},
        {h:"Muscoli", p:"Sostiene la crescita muscolare."},
        {h:"Ossa", p:"Sostiene il sistema scheletrico e l'assorbimento del calcio."}
      ],
      dosageText:"Per uso orale. Adulti e bambini sopra i 6 anni — 1 capsula una volta al giorno durante i pasti. Il ciclo può essere ripetuto su consiglio dello specialista.",
      dosageStats:[{n:"5000 UI",l:"di vitamina D3 per capsula"},{n:"1",l:"capsula al giorno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Vitamin D3 Effect",
      heroSub:"Liposomal texnologiya asosida D3 vitamini 5000 XB va chernika ekstrakti bilan kapsulalar. Immunitetni qo‘llab-quvvatlash.",
      introTitle:"D3 vitamini 5000 XB — liposomal",
      introText:"Vitamin D3 Effect — yaxshi so‘rilishi uchun liposomal texnologiyada tayyorlangan yuqori dozadagi D3 vitamini (5000 XB) va chernika ekstrakti. Immunitet, kayfiyat va mushaklarni qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Kapsulalar, 60 dona. Liposomal texnologiya."},
        {h:"1 kapsula tarkibi", p:"D3 vitamini — 5000 XB<br>Chernika ekstrakti — 100 mg"}
      ],
      props:[
        {h:"D3 vitamini", p:"Organizmda zaxiralanadigan yog‘da eriydigan vitamin. Normal immunitetni qo‘llab-quvvatlaydi, yaxshi kayfiyatga, hissiyotlarni tartibga solishga va mushak massasi o‘sishiga yordam beradi."},
        {h:"Chernika ekstrakti", p:"Antotsian-antioksidantlarga boy, ko‘z va tomirlar salomatligini qo‘llab-quvvatlaydi, majmua ta’sirini to‘ldiradi."},
        {h:"Liposomal texnologiya", p:"D3 vitaminining organizm tomonidan yuqoriroq biokirishi va so‘rilishini ta’minlaydi."}
      ],
      areas:[
        {h:"Immunitet", p:"Normal immun tizimni qo‘llab-quvvatlaydi."},
        {h:"Kayfiyat", p:"Yaxshi kayfiyat va hissiyotlarni tartibga solishga yordam beradi."},
        {h:"Mushaklar", p:"Mushak massasi o‘sishiga yordam beradi."},
        {h:"Suyaklar", p:"Suyak tizimini va kalsiy so‘rilishini qo‘llab-quvvatlaydi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalar va 6 yoshdan katta bolalarga — kuniga 1 marta ovqat vaqtida 1 kapsuladan. Zarur bo‘lganda kursni mutaxassis tavsiyasiga ko‘ra takrorlash mumkin.",
      dosageStats:[{n:"5000 XB",l:"D3 vitamini kapsulada"},{n:"1",l:"kapsula kuniga"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "sink-effect": {
    cat: "capsules",
    img: "img/prod/sink-effect.webp",
    doc: "downloads/sink-effect-instrukciya.docx",
    ru: {
      name:"Цинк Эффект",
      heroSub:"Капсулы с цинком 50 мг и экстрактом черники на основе липосомальной технологии. Для кожи, волос, зрения и иммунитета.",
      introTitle:"Цинк 50 мг — липосомальный",
      introText:"Цинк Эффект — глюконат цинка (50 мг) с экстрактом черники, изготовлен по липосомальной технологии для лучшего усвоения. Поддерживает кожу, волосы, зрение, заживление ран и нервную систему.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы, 60 шт. Липосомальная технология."},
        {h:"Состав на 1 капсулу", p:"Глюконат цинка — 50 мг<br>Экстракт черники — 100 мг"}
      ],
      props:[
        {h:"Цинк", p:"Незаменимый микроэлемент: участвует в работе сотен ферментов, поддерживает иммунитет, заживление ран, здоровье кожи и волос, остроту зрения."},
        {h:"Экстракт черники", p:"Богат антоцианами-антиоксидантами, поддерживает здоровье глаз и сосудов, дополняет действие цинка."},
        {h:"Липосомальная технология", p:"Обеспечивает более высокую биодоступность и усвоение цинка организмом."}
      ],
      areas:[
        {h:"Кожа и волосы", p:"При кожных заболеваниях (угри, экзема, высыпания), выпадении волос."},
        {h:"Зрение", p:"При ухудшении ночного зрения и стойком утомлении глаз."},
        {h:"Заживление", p:"При очень медленном заживлении ран."},
        {h:"Нервная система", p:"В комплексной терапии невритов, невралгий и невропатической боли."}
      ],
      dosageText:"Принимается внутрь. Взрослые и дети старше 6 лет — по 1 капсуле 1 раз в день во время еды. При необходимости курс приёма можно повторить по рекомендации специалиста.",
      dosageStats:[{n:"50 мг",l:"цинка в капсуле"},{n:"1",l:"капсула в день"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При возникновении побочных эффектов следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Zinc Effect",
      heroSub:"Capsules with zinc 50 mg and blueberry extract, made with liposomal technology. For skin, hair, vision and immunity.",
      introTitle:"Zinc 50 mg — liposomal",
      introText:"Zinc Effect provides zinc gluconate (50 mg) with blueberry extract, made with liposomal technology for better absorption. It supports skin, hair, vision, wound healing and the nervous system.",
      infoCards:[
        {h:"Form", p:"Capsules, 60 per pack. Liposomal technology."},
        {h:"Composition per capsule", p:"Zinc gluconate — 50 mg<br>Blueberry extract — 100 mg"}
      ],
      props:[
        {h:"Zinc", p:"An essential trace element involved in hundreds of enzymes; it supports immunity, wound healing, skin and hair health and visual acuity."},
        {h:"Blueberry extract", p:"Rich in anthocyanin antioxidants, supports eye and vascular health and complements zinc."},
        {h:"Liposomal technology", p:"Provides higher bioavailability and absorption of zinc by the body."}
      ],
      areas:[
        {h:"Skin & hair", p:"For skin conditions (acne, eczema, rashes) and hair loss."},
        {h:"Vision", p:"For impaired night vision and persistent eye fatigue."},
        {h:"Healing", p:"For very slow wound healing."},
        {h:"Nervous system", p:"In complex therapy of neuritis, neuralgia and neuropathic pain."}
      ],
      dosageText:"Taken orally. Adults and children over 6 years — 1 capsule once a day with meals. The course may be repeated on a specialist's recommendation.",
      dosageStats:[{n:"50 mg",l:"of zinc per capsule"},{n:"1",l:"capsule a day"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Zinc Effect",
      heroSub:"Capsule con zinco 50 mg ed estratto di mirtillo, con tecnologia liposomiale. Per pelle, capelli, vista e immunità.",
      introTitle:"Zinco 50 mg — liposomiale",
      introText:"Zinc Effect fornisce gluconato di zinco (50 mg) con estratto di mirtillo, realizzato con tecnologia liposomiale per un migliore assorbimento. Sostiene pelle, capelli, vista, guarigione delle ferite e sistema nervoso.",
      infoCards:[
        {h:"Formato", p:"Capsule, 60 per confezione. Tecnologia liposomiale."},
        {h:"Composizione per capsula", p:"Gluconato di zinco — 50 mg<br>Estratto di mirtillo — 100 mg"}
      ],
      props:[
        {h:"Zinco", p:"Un oligoelemento essenziale coinvolto in centinaia di enzimi; sostiene l'immunità, la guarigione delle ferite, la salute di pelle e capelli e l'acuità visiva."},
        {h:"Estratto di mirtillo", p:"Ricco di antiossidanti antocianici, sostiene la salute degli occhi e dei vasi e completa lo zinco."},
        {h:"Tecnologia liposomiale", p:"Garantisce una maggiore biodisponibilità e assorbimento dello zinco da parte dell'organismo."}
      ],
      areas:[
        {h:"Pelle e capelli", p:"In caso di condizioni cutanee (acne, eczema, eruzioni) e caduta dei capelli."},
        {h:"Vista", p:"In caso di visione notturna ridotta e affaticamento oculare persistente."},
        {h:"Guarigione", p:"In caso di guarigione molto lenta delle ferite."},
        {h:"Sistema nervoso", p:"Nella terapia complessa di neuriti, nevralgie e dolore neuropatico."}
      ],
      dosageText:"Per uso orale. Adulti e bambini sopra i 6 anni — 1 capsula una volta al giorno durante i pasti. Il ciclo può essere ripetuto su consiglio dello specialista.",
      dosageStats:[{n:"50 mg",l:"di zinco per capsula"},{n:"1",l:"capsula al giorno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Zinc Effect",
      heroSub:"Liposomal texnologiya asosida rux 50 mg va chernika ekstrakti bilan kapsulalar. Teri, soch, ko‘rish va immunitet uchun.",
      introTitle:"Rux 50 mg — liposomal",
      introText:"Zinc Effect — yaxshi so‘rilishi uchun liposomal texnologiyada tayyorlangan rux glyukonati (50 mg) va chernika ekstrakti. Teri, soch, ko‘rish, jarohatlar bitishi va asab tizimini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Kapsulalar, 60 dona. Liposomal texnologiya."},
        {h:"1 kapsula tarkibi", p:"Rux glyukonati — 50 mg<br>Chernika ekstrakti — 100 mg"}
      ],
      props:[
        {h:"Rux", p:"Almashtirib bo‘lmaydigan mikroelement: yuzlab fermentlar ishida ishtirok etadi, immunitet, jarohatlar bitishi, teri va soch salomatligi hamda ko‘rish o‘tkirligini qo‘llab-quvvatlaydi."},
        {h:"Chernika ekstrakti", p:"Antotsian-antioksidantlarga boy, ko‘z va tomirlar salomatligini qo‘llab-quvvatlaydi, rux ta’sirini to‘ldiradi."},
        {h:"Liposomal texnologiya", p:"Ruxning organizm tomonidan yuqoriroq biokirishi va so‘rilishini ta’minlaydi."}
      ],
      areas:[
        {h:"Teri va soch", p:"Teri kasalliklarida (ugri, ekzema, toshmalar), soch to‘kilishida."},
        {h:"Ko‘rish", p:"Tungi ko‘rish yomonlashuvi va ko‘zning doimiy charchashida."},
        {h:"Bitish", p:"Jarohatlarning juda sekin bitishida."},
        {h:"Asab tizimi", p:"Nevrit, nevralgiya va neyropatik og‘riqning majmuaviy davosida."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalar va 6 yoshdan katta bolalarga — kuniga 1 marta ovqat vaqtida 1 kapsuladan. Zarur bo‘lganda kursni mutaxassis tavsiyasiga ko‘ra takrorlash mumkin.",
      dosageStats:[{n:"50 mg",l:"rux kapsulada"},{n:"1",l:"kapsula kuniga"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "omega-effect": {
    cat: "capsules",
    img: "img/prod/omega-effect.webp",
    doc: "downloads/omega-effect-instrukciya.docx",
    ru: {
      name:"Омега Эффект",
      heroSub:"Капсулы с Омега-3, лютеином, черникой и витамином E на основе липосомальной технологии. Для сердца, сосудов и зрения.",
      introTitle:"Омега-3 в липосомальной форме",
      introText:"Омега Эффект — источник Омега-3 полиненасыщенных жирных кислот (ЭПК и ДГК) с лютеином, экстрактом черники и витамином E. Изготовлен по липосомальной технологии для высокого усвоения без расстройств ЖКТ.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 1,0 г, 60 шт. Липосомальная технология."},
        {h:"Состав на 1 капсулу", p:"Омега-3 — 300 мг · Лютеин — 5 мг<br>Экстракт черники — 100 мг · Витамин E — 2 мг"}
      ],
      props:[
        {h:"Омега-3 (ЭПК и ДГК)", p:"Незаменимые жирные кислоты, необходимые для работы сердца, мозга и зрения. Снижают холестерин, нормализуют жировой обмен и обладают противовоспалительными свойствами."},
        {h:"Лютеин и черника", p:"Каротиноиды-антиоксиданты, поддерживают здоровье глаз, сетчатки и сосудов."},
        {h:"Витамин E", p:"Мощный антиоксидант, участвует в тканевом обмене, защищает клетки и сосуды."}
      ],
      areas:[
        {h:"Сердце и сосуды", p:"Снижает холестерин, профилактика атеросклероза и ССЗ."},
        {h:"Зрение", p:"Поддержка глаз и сетчатки (лютеин, черника)."},
        {h:"Мозг", p:"Поддержка интеллекта и работы мозга."},
        {h:"Антиоксиданты", p:"Антиоксидантная защита, противовоспалительное действие."}
      ],
      dosageText:"Принимается внутрь. Взрослым и детям старше 6 лет — по 1 капсуле 1–3 раза в день во время еды. При необходимости курс приёма можно повторить по рекомендации специалиста.",
      dosageStats:[{n:"300 мг",l:"Омега-3 в капсуле"},{n:"1–3",l:"капсулы в день"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, кормление грудью, дети до 6 лет."},
        {h:"Побочные действия", p:"При появлении побочных эффектов прекратить приём и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Omega Effect",
      heroSub:"Capsules with Omega-3, lutein, blueberry and vitamin E, made with liposomal technology. For heart, vessels and vision.",
      introTitle:"Omega-3 in liposomal form",
      introText:"Omega Effect is a source of Omega-3 polyunsaturated fatty acids (EPA and DHA) with lutein, blueberry extract and vitamin E. Made with liposomal technology for high absorption without GI upset.",
      infoCards:[
        {h:"Form", p:"Capsules 1.0 g, 60 per pack. Liposomal technology."},
        {h:"Composition per capsule", p:"Omega-3 — 300 mg · Lutein — 5 mg<br>Blueberry extract — 100 mg · Vitamin E — 2 mg"}
      ],
      props:[
        {h:"Omega-3 (EPA & DHA)", p:"Essential fatty acids needed for the heart, brain and vision. They lower cholesterol, normalize fat metabolism and have anti-inflammatory properties."},
        {h:"Lutein & blueberry", p:"Antioxidant carotenoids that support eye, retinal and vascular health."},
        {h:"Vitamin E", p:"A powerful antioxidant involved in tissue metabolism that protects cells and vessels."}
      ],
      areas:[
        {h:"Heart & vessels", p:"Lowers cholesterol; prevention of atherosclerosis and CVD."},
        {h:"Vision", p:"Supports the eyes and retina (lutein, blueberry)."},
        {h:"Brain", p:"Supports intellect and brain function."},
        {h:"Antioxidants", p:"Antioxidant protection and anti-inflammatory action."}
      ],
      dosageText:"Taken orally. Adults and children over 6 years — 1 capsule 1–3 times a day with meals. The course may be repeated on a specialist's recommendation.",
      dosageStats:[{n:"300 mg",l:"Omega-3 per capsule"},{n:"1–3",l:"capsules a day"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, breastfeeding, children under 6 years."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Omega Effect",
      heroSub:"Capsule con Omega-3, luteina, mirtillo e vitamina E, con tecnologia liposomiale. Per cuore, vasi e vista.",
      introTitle:"Omega-3 in forma liposomiale",
      introText:"Omega Effect è una fonte di acidi grassi polinsaturi Omega-3 (EPA e DHA) con luteina, estratto di mirtillo e vitamina E. Realizzato con tecnologia liposomiale per un elevato assorbimento senza disturbi gastrointestinali.",
      infoCards:[
        {h:"Formato", p:"Capsule 1,0 g, 60 per confezione. Tecnologia liposomiale."},
        {h:"Composizione per capsula", p:"Omega-3 — 300 mg · Luteina — 5 mg<br>Estratto di mirtillo — 100 mg · Vitamina E — 2 mg"}
      ],
      props:[
        {h:"Omega-3 (EPA e DHA)", p:"Acidi grassi essenziali necessari per cuore, cervello e vista. Riducono il colesterolo, normalizzano il metabolismo dei grassi e hanno proprietà antinfiammatorie."},
        {h:"Luteina e mirtillo", p:"Carotenoidi antiossidanti che sostengono la salute degli occhi, della retina e dei vasi."},
        {h:"Vitamina E", p:"Un potente antiossidante coinvolto nel metabolismo dei tessuti che protegge cellule e vasi."}
      ],
      areas:[
        {h:"Cuore e vasi", p:"Riduce il colesterolo; prevenzione di aterosclerosi e malattie cardiovascolari."},
        {h:"Vista", p:"Sostiene gli occhi e la retina (luteina, mirtillo)."},
        {h:"Cervello", p:"Sostiene l'intelletto e la funzione cerebrale."},
        {h:"Antiossidanti", p:"Protezione antiossidante e azione antinfiammatoria."}
      ],
      dosageText:"Per uso orale. Adulti e bambini sopra i 6 anni — 1 capsula 1–3 volte al giorno durante i pasti. Il ciclo può essere ripetuto su consiglio dello specialista.",
      dosageStats:[{n:"300 mg",l:"Omega-3 per capsula"},{n:"1–3",l:"capsule al giorno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento, bambini sotto i 6 anni."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Omega Effect",
      heroSub:"Liposomal texnologiya asosida Omega-3, lyutein, chernika va E vitamini bilan kapsulalar. Yurak, tomirlar va ko‘rish uchun.",
      introTitle:"Liposomal shakldagi Omega-3",
      introText:"Omega Effect — lyutein, chernika ekstrakti va E vitamini bilan Omega-3 to‘yinmagan yog‘ kislotalari (EPK va DGK) manbai. Oshqozon-ichak buzilishlarisiz yuqori so‘rilishi uchun liposomal texnologiyada tayyorlangan.",
      infoCards:[
        {h:"Formati", p:"1,0 g li kapsulalar, 60 dona. Liposomal texnologiya."},
        {h:"1 kapsula tarkibi", p:"Omega-3 — 300 mg · Lyutein — 5 mg<br>Chernika ekstrakti — 100 mg · E vitamini — 2 mg"}
      ],
      props:[
        {h:"Omega-3 (EPK va DGK)", p:"Yurak, miya va ko‘rish uchun zarur almashtirib bo‘lmaydigan yog‘ kislotalari. Xolesterinni kamaytiradi, yog‘ almashinuvini me’yorlashtiradi va yallig‘lanishga qarshi xususiyatlarga ega."},
        {h:"Lyutein va chernika", p:"Ko‘z, to‘r parda va tomirlar salomatligini qo‘llab-quvvatlovchi antioksidant karotinoidlar."},
        {h:"E vitamini", p:"To‘qima almashinuvida ishtirok etuvchi kuchli antioksidant; hujayra va tomirlarni himoya qiladi."}
      ],
      areas:[
        {h:"Yurak va tomirlar", p:"Xolesterinni kamaytiradi; ateroskleroz va yurak-qon tomir kasalliklari profilaktikasi."},
        {h:"Ko‘rish", p:"Ko‘z va to‘r pardani qo‘llab-quvvatlaydi (lyutein, chernika)."},
        {h:"Miya", p:"Intellekt va miya faoliyatini qo‘llab-quvvatlaydi."},
        {h:"Antioksidantlar", p:"Antioksidant himoya va yallig‘lanishga qarshi ta’sir."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalar va 6 yoshdan katta bolalarga — kuniga 1–3 marta ovqat vaqtida 1 kapsuladan. Zarur bo‘lganda kursni mutaxassis tavsiyasiga ko‘ra takrorlash mumkin.",
      dosageStats:[{n:"300 mg",l:"Omega-3 kapsulada"},{n:"1–3",l:"kapsula kuniga"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish, 6 yoshgacha bo‘lgan bolalar."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "ascorbic-tabs": {
    cat: "capsules",
    img: "img/prod/ascorbic-tabs.webp",
    doc: "downloads/ascorbic-tabs-instrukciya.docx",
    ru: {
      name:"Аскорбик табс",
      heroSub:"Таблетки с витамином C и экстрактом зелёного чая. Для иммунитета, тонуса и бодрости — детям и взрослым.",
      introTitle:"Витамин C в таблетках",
      introText:"Аскорбик-Табс — дополнительный источник аскорбиновой кислоты и полезных компонентов зелёного чая. В комплексе они поддерживают нормальную работу нервной системы, сердца и иммунитета, улучшают аппетит и самочувствие.",
      infoCards:[
        {h:"Форма выпуска", p:"Таблетки во флаконе."},
        {h:"Состав", p:"Аскорбиновая кислота (витамин C)<br>Экстракт зелёного чая"}
      ],
      props:[
        {h:"Витамин C (аскорбиновая кислота)", p:"Повышает неспецифический иммунитет, защищает ткани от свободных радикалов, укрепляет сосудистую стенку и поддерживает нормальный обмен веществ."},
        {h:"Экстракт зелёного чая", p:"Содержит полифенолы, витамины и микроэлементы; благотворно влияет на обмен веществ, нервную и сердечно-сосудистую системы, укрепляет стенки сосудов."},
        {h:"Общее действие", p:"Повышает устойчивость к простудным процессам и стрессу, устраняет утомляемость, улучшает аппетит и самочувствие."}
      ],
      areas:[
        {h:"Иммунитет", p:"Повышает устойчивость организма к простудным процессам."},
        {h:"Тонус", p:"Устраняет утомляемость, придаёт бодрость и тонус."},
        {h:"Восстановление", p:"Рекомендуется после длительного постельного режима для восстановления сил."},
        {h:"Стресс", p:"Повышает устойчивость к перенапряжению и стрессу."}
      ],
      dosageText:"Принимается внутрь. Перед употреблением рекомендуется проконсультироваться со специалистом. Режим приёма — по назначению специалиста, во время или после еды.",
      dosageStats:[{n:"Витамин C",l:"+ зелёный чай"},{n:"1+",l:"таблетка в день"}],
      important:[
        {h:"Особые указания", p:"Перед применением рекомендуется консультация специалиста. Индивидуальная непереносимость компонентов."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."},
        {h:"Для кого", p:"Для детей и взрослых."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Ascorbic Tabs",
      heroSub:"Tablets with vitamin C and green tea extract. For immunity, tone and vitality — for children and adults.",
      introTitle:"Vitamin C in tablets",
      introText:"Ascorbic Tabs is an additional source of ascorbic acid and beneficial green-tea components. Together they support normal function of the nervous system, heart and immunity and improve appetite and well-being.",
      infoCards:[
        {h:"Form", p:"Tablets in a bottle."},
        {h:"Composition", p:"Ascorbic acid (vitamin C)<br>Green tea extract"}
      ],
      props:[
        {h:"Vitamin C (ascorbic acid)", p:"Boosts non-specific immunity, protects tissues from free radicals, strengthens the vascular wall and supports normal metabolism."},
        {h:"Green tea extract", p:"Contains polyphenols, vitamins and trace elements; benefits metabolism, the nervous and cardiovascular systems and strengthens vessel walls."},
        {h:"Overall action", p:"Increases resistance to colds and stress, relieves fatigue and improves appetite and well-being."}
      ],
      areas:[
        {h:"Immunity", p:"Increases the body's resistance to colds."},
        {h:"Tone", p:"Relieves fatigue and gives vitality and tone."},
        {h:"Recovery", p:"Recommended after prolonged bed rest to restore strength."},
        {h:"Stress", p:"Increases resistance to overexertion and stress."}
      ],
      dosageText:"Taken orally. Consultation with a specialist before use is recommended. The regimen is as advised by a specialist, during or after meals.",
      dosageStats:[{n:"Vitamin C",l:"+ green tea"},{n:"1+",l:"tablet a day"}],
      important:[
        {h:"Special instructions", p:"Consultation with a specialist is recommended before use. Individual intolerance to the components."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."},
        {h:"For whom", p:"For children and adults."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Ascorbic Tabs",
      heroSub:"Compresse con vitamina C ed estratto di tè verde. Per immunità, tono e vitalità — per bambini e adulti.",
      introTitle:"Vitamina C in compresse",
      introText:"Ascorbic Tabs è una fonte aggiuntiva di acido ascorbico e dei componenti benefici del tè verde. Insieme sostengono la normale funzione del sistema nervoso, del cuore e dell'immunità e migliorano l'appetito e il benessere.",
      infoCards:[
        {h:"Formato", p:"Compresse in flacone."},
        {h:"Composizione", p:"Acido ascorbico (vitamina C)<br>Estratto di tè verde"}
      ],
      props:[
        {h:"Vitamina C (acido ascorbico)", p:"Potenzia l'immunità non specifica, protegge i tessuti dai radicali liberi, rafforza la parete vascolare e sostiene il normale metabolismo."},
        {h:"Estratto di tè verde", p:"Contiene polifenoli, vitamine e oligoelementi; favorisce il metabolismo, i sistemi nervoso e cardiovascolare e rafforza le pareti dei vasi."},
        {h:"Azione generale", p:"Aumenta la resistenza ai raffreddori e allo stress, allevia la stanchezza e migliora appetito e benessere."}
      ],
      areas:[
        {h:"Immunità", p:"Aumenta la resistenza dell'organismo ai raffreddori."},
        {h:"Tono", p:"Allevia la stanchezza e dona vitalità e tono."},
        {h:"Recupero", p:"Raccomandato dopo un prolungato riposo a letto per recuperare le forze."},
        {h:"Stress", p:"Aumenta la resistenza al sovraffaticamento e allo stress."}
      ],
      dosageText:"Per uso orale. Si raccomanda di consultare uno specialista prima dell'uso. Il regime è secondo il consiglio dello specialista, durante o dopo i pasti.",
      dosageStats:[{n:"Vitamina C",l:"+ tè verde"},{n:"1+",l:"compressa al giorno"}],
      important:[
        {h:"Avvertenze speciali", p:"Si raccomanda di consultare uno specialista prima dell'uso. Intolleranza individuale ai componenti."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."},
        {h:"Per chi", p:"Per bambini e adulti."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Ascorbic Tabs",
      heroSub:"C vitamini va yashil choy ekstrakti bilan tabletkalar. Immunitet, tetiklik va bardamlik uchun — bolalar va kattalarga.",
      introTitle:"Tabletkalardagi C vitamini",
      introText:"Ascorbic Tabs — askorbin kislotasi va yashil choyning foydali komponentlarining qo‘shimcha manbai. Ular birgalikda asab tizimi, yurak va immunitetning normal ishlashini qo‘llab-quvvatlaydi, ishtaha va o‘zni his qilishni yaxshilaydi.",
      infoCards:[
        {h:"Formati", p:"Flakondagi tabletkalar."},
        {h:"Tarkibi", p:"Askorbin kislotasi (C vitamini)<br>Yashil choy ekstrakti"}
      ],
      props:[
        {h:"C vitamini (askorbin kislotasi)", p:"Nospetsifik immunitetni oshiradi, to‘qimalarni erkin radikallardan himoya qiladi, tomir devorini mustahkamlaydi va normal modda almashinuvini qo‘llab-quvvatlaydi."},
        {h:"Yashil choy ekstrakti", p:"Polifenollar, vitaminlar va mikroelementlar saqlaydi; modda almashinuvi, asab va yurak-qon tomir tizimlariga ijobiy ta’sir qiladi, tomir devorlarini mustahkamlaydi."},
        {h:"Umumiy ta’sir", p:"Shamollash jarayonlari va stressga chidamlilikni oshiradi, charchoqni bartaraf etadi, ishtaha va o‘zni his qilishni yaxshilaydi."}
      ],
      areas:[
        {h:"Immunitet", p:"Organizmning shamollash jarayonlariga chidamliligini oshiradi."},
        {h:"Tetiklik", p:"Charchoqni bartaraf etadi, bardamlik va tetiklik beradi."},
        {h:"Tiklanish", p:"Uzoq yotoq rejimidan keyin kuchni tiklash uchun tavsiya etiladi."},
        {h:"Stress", p:"Ortiqcha zo‘riqish va stressga chidamlilikni oshiradi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Qabul tartibi — mutaxassis tavsiyasiga ko‘ra, ovqat vaqtida yoki ovqatdan keyin.",
      dosageStats:[{n:"C vitamini",l:"+ yashil choy"},{n:"1+",l:"tabletka kuniga"}],
      important:[
        {h:"Maxsus ko‘rsatmalar", p:"Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Komponentlarga individual chidamsizlik."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."},
        {h:"Kimlar uchun", p:"Bolalar va kattalar uchun."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "sooglution-q10": {
    cat: "capsules",
    img: "img/prod/sooglution-q10.webp",
    doc: "downloads/sooglution-q10-instrukciya.docx",
    ru: {
      name:"Сооглутион-Q10",
      heroSub:"Капсулы с L-глутатионом, альфа-липоевой кислотой, коэнзимом Q10 и витамином C. Мощный антиоксидант, гепатопротектор и детоксикант.",
      introTitle:"Антиоксидантная защита и детокс",
      introText:"Сооглутион-Q10 — комплекс из сильнейшего антиоксиданта глутатиона, альфа-липоевой кислоты, коэнзима Q10 и витамина C. Поддерживает печень, нервную и сердечно-сосудистую системы, выводит токсины и замедляет старение клеток.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, №20."},
        {h:"Состав 1 капсулы", p:"L-глутатион — 300 мг<br>Альфа-липоевая кислота — 50 мг<br>Коэнзим Q10 — 100 мг · Витамин C — 45 мг"}
      ],
      props:[
        {h:"Глутатион", p:"Сильнейший гепатопротектор, антиоксидант, иммуномодулятор и детоксикант. Нейтрализует свободные радикалы, поддерживает иммунитет и очищает печень от токсинов."},
        {h:"Альфа-липоевая кислота", p:"Супер-антиоксидант, защищает нервные волокна от оксидативного стресса, повышает выработку энергии, продлевает действие витаминов C, E и коэнзима Q10."},
        {h:"Коэнзим Q10 и витамин C", p:"Q10 улучшает выработку энергии в сердечной мышце и защищает от свободных радикалов; витамин C повышает иммунитет и укрепляет сосудистую стенку."}
      ],
      areas:[
        {h:"Печень", p:"Токсические, вирусные и лекарственные поражения печени, цирроз, холестаз."},
        {h:"Нервная система", p:"Хроническая ишемия мозга, энцефалопатии, последствия травм."},
        {h:"Сердце и сосуды", p:"ИБС, гипертония, атеросклероз, диабетическая нейропатия."},
        {h:"Кожа", p:"Псориаз, витилиго, акне, дерматиты, анти-эйдж терапия."}
      ],
      dosageText:"Принимается внутрь. Взрослые — 1–2 капсулы 2 раза в день; детям с 6 лет — по 1 капсуле 1–2 раза в день. Можно принимать до или после еды. Курс — от 20 дней до 2 месяцев. При необходимости по рекомендации врача курс можно повторить.",
      dosageStats:[{n:"1–2",l:"капсулы взрослым 2 раза в день"},{n:"20–60",l:"дней курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"Индивидуальная непереносимость компонентов. При появлении побочных действий прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. При беременности и лактации — только по назначению врача. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы."
    },
    en: {
      name:"Sooglution-Q10",
      heroSub:"Capsules with L-glutathione, alpha-lipoic acid, coenzyme Q10 and vitamin C. A powerful antioxidant, hepatoprotector and detoxifier.",
      introTitle:"Antioxidant protection and detox",
      introText:"Sooglution-Q10 is a complex of the powerful antioxidant glutathione, alpha-lipoic acid, coenzyme Q10 and vitamin C. It supports the liver, nervous and cardiovascular systems, removes toxins and slows cell aging.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No.20."},
        {h:"Composition per capsule", p:"L-glutathione — 300 mg<br>Alpha-lipoic acid — 50 mg<br>Coenzyme Q10 — 100 mg · Vitamin C — 45 mg"}
      ],
      props:[
        {h:"Glutathione", p:"A powerful hepatoprotector, antioxidant, immunomodulator and detoxifier. Neutralizes free radicals, supports immunity and clears the liver of toxins."},
        {h:"Alpha-lipoic acid", p:"A super-antioxidant that protects nerve fibers from oxidative stress, boosts energy production and prolongs the action of vitamins C, E and coenzyme Q10."},
        {h:"Coenzyme Q10 and vitamin C", p:"Q10 improves energy production in the heart muscle and protects against free radicals; vitamin C boosts immunity and strengthens vessel walls."}
      ],
      areas:[
        {h:"Liver", p:"Toxic, viral and drug-induced liver damage, cirrhosis, cholestasis."},
        {h:"Nervous system", p:"Chronic brain ischemia, encephalopathy, trauma aftermath."},
        {h:"Heart & vessels", p:"Coronary disease, hypertension, atherosclerosis, diabetic neuropathy."},
        {h:"Skin", p:"Psoriasis, vitiligo, acne, dermatitis, anti-age therapy."}
      ],
      dosageText:"Taken orally. Adults — 1–2 capsules twice a day; children from 6 years — 1 capsule 1–2 times a day. May be taken before or after meals. Course: 20 days to 2 months. May be repeated on a doctor's recommendation.",
      dosageStats:[{n:"1–2",l:"capsules, adults twice a day"},{n:"20–60",l:"days course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"Individual intolerance to the components. If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. During pregnancy and lactation — only as prescribed by a doctor. Consultation with a specialist is recommended before use. Do not exceed the recommended doses."
    },
    it: {
      name:"Sooglution-Q10",
      heroSub:"Capsule con L-glutatione, acido alfa-lipoico, coenzima Q10 e vitamina C. Un potente antiossidante, epatoprotettore e disintossicante.",
      introTitle:"Protezione antiossidante e detox",
      introText:"Sooglution-Q10 è un complesso del potente antiossidante glutatione, acido alfa-lipoico, coenzima Q10 e vitamina C. Sostiene il fegato, i sistemi nervoso e cardiovascolare, elimina le tossine e rallenta l'invecchiamento cellulare.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n.20."},
        {h:"Composizione per capsula", p:"L-glutatione — 300 mg<br>Acido alfa-lipoico — 50 mg<br>Coenzima Q10 — 100 mg · Vitamina C — 45 mg"}
      ],
      props:[
        {h:"Glutatione", p:"Un potente epatoprotettore, antiossidante, immunomodulatore e disintossicante. Neutralizza i radicali liberi, sostiene l'immunità e depura il fegato dalle tossine."},
        {h:"Acido alfa-lipoico", p:"Un super-antiossidante che protegge le fibre nervose dallo stress ossidativo, aumenta la produzione di energia e prolunga l'azione delle vitamine C, E e del coenzima Q10."},
        {h:"Coenzima Q10 e vitamina C", p:"Il Q10 migliora la produzione di energia nel muscolo cardiaco e protegge dai radicali liberi; la vitamina C potenzia l'immunità e rafforza le pareti dei vasi."}
      ],
      areas:[
        {h:"Fegato", p:"Danni epatici tossici, virali e da farmaci, cirrosi, colestasi."},
        {h:"Sistema nervoso", p:"Ischemia cerebrale cronica, encefalopatie, esiti di traumi."},
        {h:"Cuore e vasi", p:"Cardiopatia ischemica, ipertensione, aterosclerosi, neuropatia diabetica."},
        {h:"Pelle", p:"Psoriasi, vitiligine, acne, dermatiti, terapia anti-age."}
      ],
      dosageText:"Per uso orale. Adulti — 1–2 capsule due volte al giorno; bambini dai 6 anni — 1 capsula 1–2 volte al giorno. Si può assumere prima o dopo i pasti. Ciclo: da 20 giorni a 2 mesi. Ripetibile su consiglio del medico.",
      dosageStats:[{n:"1–2",l:"capsule, adulti due volte al giorno"},{n:"20–60",l:"giorni di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"Intolleranza individuale ai componenti. In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. In gravidanza e allattamento — solo su prescrizione medica. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate."
    },
    uz: {
      name:"Sooglution-Q10",
      heroSub:"L-glutation, alfa-lipoy kislotasi, koenzim Q10 va C vitamini bilan kapsulalar. Kuchli antioksidant, gepatoprotektor va detoksikant.",
      introTitle:"Antioksidant himoya va detoks",
      introText:"Sooglution-Q10 — eng kuchli antioksidant glutation, alfa-lipoy kislotasi, koenzim Q10 va C vitaminidan iborat majmua. Jigar, asab va yurak-qon tomir tizimlarini qo‘llab-quvvatlaydi, toksinlarni chiqaradi va hujayralar qarishini sekinlashtiradi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, №20."},
        {h:"1 kapsula tarkibi", p:"L-glutation — 300 mg<br>Alfa-lipoy kislotasi — 50 mg<br>Koenzim Q10 — 100 mg · C vitamini — 45 mg"}
      ],
      props:[
        {h:"Glutation", p:"Eng kuchli gepatoprotektor, antioksidant, immunomodulyator va detoksikant. Erkin radikallarni zararsizlantiradi, immunitetni qo‘llab-quvvatlaydi va jigarni toksinlardan tozalaydi."},
        {h:"Alfa-lipoy kislotasi", p:"Super-antioksidant, asab tolalarini oksidlovchi stressdan himoya qiladi, energiya ishlab chiqarishni oshiradi, C, E vitaminlari va koenzim Q10 ta’sirini uzaytiradi."},
        {h:"Koenzim Q10 va C vitamini", p:"Q10 yurak mushagida energiya ishlab chiqarishni yaxshilaydi va erkin radikallardan himoya qiladi; C vitamini immunitetni oshiradi va tomir devorini mustahkamlaydi."}
      ],
      areas:[
        {h:"Jigar", p:"Jigarning toksik, virusli va dori bilan bog‘liq shikastlanishlari, sirroz, xolestaz."},
        {h:"Asab tizimi", p:"Miyaning surunkali ishemiyasi, ensefalopatiya, jarohat oqibatlari."},
        {h:"Yurak va tomirlar", p:"YuIK, gipertoniya, ateroskleroz, diabetik neyropatiya."},
        {h:"Teri", p:"Psoriaz, vitiligo, ugri, dermatitlar, anti-eyj terapiya."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalarga — kuniga 2 marta 1–2 kapsuladan; 6 yoshdan katta bolalarga — kuniga 1–2 marta 1 kapsuladan. Ovqatdan oldin yoki keyin qabul qilish mumkin. Kurs — 20 kundan 2 oygacha. Zarur bo‘lganda shifokor tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1–2",l:"kapsula kattalarga kuniga 2 marta"},{n:"20–60",l:"kunlik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Komponentlarga individual chidamsizlik. Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Homiladorlik va emizish davrida — faqat shifokor ko‘rsatmasi bilan. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang."
    }
  },

  "vitoglits": {
    cat: "capsules",
    img: "img/prod/vitoglits.webp",
    doc: "downloads/vitoglits-instrukciya.docx",
    ru: {
      name:"Витоглиц",
      heroSub:"Капсулы с ГАМК, глицином, глутамином, коэнзимом Q10 и витаминами B6, B9. Поддержка работы мозга и когнитивных функций у детей.",
      introTitle:"Энергия для мозга ребёнка",
      introText:"Витоглиц — комплекс из гамма-аминомасляной кислоты, глицина, L-глутамина, коэнзима Q10 и витаминов группы B. Улучшает преобразование головного мозга и когнитивные функции, повышает устойчивость к умственным и физическим нагрузкам.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, №30."},
        {h:"Состав 1 капсулы", p:"ГАМК — 125 мг · Глицин — 2 мг<br>Глутамин — 100 мг · Коэнзим Q10 — 20 мг<br>Витамин B6 — 0,5 мг · Витамин B9 — 0,05 мг"}
      ],
      props:[
        {h:"Гамма-аминомасляная кислота", p:"Естественный метаболит, обеспечивает нервные клетки энергией, повышает устойчивость к дефициту кислорода (антигипоксический эффект), улучшает кровообращение и выведение продуктов обмена."},
        {h:"Коэнзим Q10 и L-глутамин", p:"Q10 участвует в выработке энергии и защищает от свободных радикалов; L-глутамин влияет на нервную и эндокринную системы, защищает печень и участвует в образовании глутатиона."},
        {h:"Витамины B6, B9 и глицин", p:"Витамины B выступают катализаторами реакций в нервной и сердечно-сосудистой системах; глицин нормализует процессы защитного торможения в ЦНС, снижает напряжение и повышает умственную работоспособность."}
      ],
      areas:[
        {h:"Мозг и память", p:"Улучшает когнитивные функции и преобразование головного мозга у детей."},
        {h:"Нагрузки", p:"Повышает сопротивляемость умственным и физическим нагрузкам."},
        {h:"Иммунитет", p:"Антиоксидант, повышает иммунитет, улучшает аппетит."},
        {h:"Баланс", p:"Восстанавливает кислотно-щелочной баланс при мышечных нагрузках и гипоксии."}
      ],
      dosageText:"Принимается внутрь. Взрослым и детям старше 12 лет — по 1 капсуле 2 раза в сутки во время еды. Курс приёма — 2–3 недели. При необходимости по рекомендации специалиста курс можно повторить.",
      dosageStats:[{n:"1",l:"капсула 2 раза в сутки"},{n:"2–3",l:"недели курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Vitoglits",
      heroSub:"Capsules with GABA, glycine, glutamine, coenzyme Q10 and vitamins B6, B9. Support for brain function and cognition in children.",
      introTitle:"Energy for a child's brain",
      introText:"Vitoglits is a complex of gamma-aminobutyric acid, glycine, L-glutamine, coenzyme Q10 and B vitamins. It improves brain function and cognition and increases resistance to mental and physical load.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No.30."},
        {h:"Composition per capsule", p:"GABA — 125 mg · Glycine — 2 mg<br>Glutamine — 100 mg · Coenzyme Q10 — 20 mg<br>Vitamin B6 — 0.5 mg · Vitamin B9 — 0.05 mg"}
      ],
      props:[
        {h:"Gamma-aminobutyric acid", p:"A natural metabolite that provides energy to nerve cells, increases resistance to oxygen deficiency (anti-hypoxic effect), improves circulation and the removal of metabolic products."},
        {h:"Coenzyme Q10 and L-glutamine", p:"Q10 participates in energy production and protects against free radicals; L-glutamine affects the nervous and endocrine systems, protects the liver and helps form glutathione."},
        {h:"Vitamins B6, B9 and glycine", p:"B vitamins act as catalysts of reactions in the nervous and cardiovascular systems; glycine normalizes protective inhibition in the CNS, reduces tension and improves mental performance."}
      ],
      areas:[
        {h:"Brain & memory", p:"Improves cognitive functions and brain development in children."},
        {h:"Load", p:"Increases resistance to mental and physical stress."},
        {h:"Immunity", p:"Antioxidant, boosts immunity, improves appetite."},
        {h:"Balance", p:"Restores acid-base balance under muscle load and hypoxia."}
      ],
      dosageText:"Taken orally. Adults and children over 12 — 1 capsule twice a day with meals. Course: 2–3 weeks. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1",l:"capsule twice a day"},{n:"2–3",l:"weeks course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Vitoglits",
      heroSub:"Capsule con GABA, glicina, glutammina, coenzima Q10 e vitamine B6, B9. Sostegno alla funzione cerebrale e cognitiva nei bambini.",
      introTitle:"Energia per il cervello del bambino",
      introText:"Vitoglits è un complesso di acido gamma-amminobutirrico, glicina, L-glutammina, coenzima Q10 e vitamine del gruppo B. Migliora la funzione cerebrale e cognitiva e aumenta la resistenza agli sforzi mentali e fisici.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n.30."},
        {h:"Composizione per capsula", p:"GABA — 125 mg · Glicina — 2 mg<br>Glutammina — 100 mg · Coenzima Q10 — 20 mg<br>Vitamina B6 — 0,5 mg · Vitamina B9 — 0,05 mg"}
      ],
      props:[
        {h:"Acido gamma-amminobutirrico", p:"Un metabolita naturale che fornisce energia alle cellule nervose, aumenta la resistenza alla carenza di ossigeno (effetto anti-ipossico), migliora la circolazione e l'eliminazione dei prodotti metabolici."},
        {h:"Coenzima Q10 e L-glutammina", p:"Il Q10 partecipa alla produzione di energia e protegge dai radicali liberi; la L-glutammina agisce sui sistemi nervoso ed endocrino, protegge il fegato e contribuisce alla formazione del glutatione."},
        {h:"Vitamine B6, B9 e glicina", p:"Le vitamine B agiscono come catalizzatori delle reazioni nei sistemi nervoso e cardiovascolare; la glicina normalizza l'inibizione protettiva nel SNC, riduce la tensione e migliora le prestazioni mentali."}
      ],
      areas:[
        {h:"Cervello e memoria", p:"Migliora le funzioni cognitive e lo sviluppo cerebrale nei bambini."},
        {h:"Sforzi", p:"Aumenta la resistenza agli sforzi mentali e fisici."},
        {h:"Immunità", p:"Antiossidante, potenzia l'immunità, migliora l'appetito."},
        {h:"Equilibrio", p:"Ripristina l'equilibrio acido-base sotto sforzo muscolare e ipossia."}
      ],
      dosageText:"Per uso orale. Adulti e bambini sopra i 12 anni — 1 capsula due volte al giorno durante i pasti. Ciclo: 2–3 settimane. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1",l:"capsula due volte al giorno"},{n:"2–3",l:"settimane di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Vitoglits",
      heroSub:"GABA, glitsin, glutamin, koenzim Q10 va B6, B9 vitaminlari bilan kapsulalar. Bolalarda miya faoliyati va kognitiv funksiyalarni qo‘llab-quvvatlash.",
      introTitle:"Bola miyasi uchun energiya",
      introText:"Vitoglits — gamma-aminomoy kislotasi, glitsin, L-glutamin, koenzim Q10 va B guruhi vitaminlaridan iborat majmua. Miya faoliyati va kognitiv funksiyalarni yaxshilaydi, aqliy va jismoniy yuklamalarga chidamlilikni oshiradi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, №30."},
        {h:"1 kapsula tarkibi", p:"GABA — 125 mg · Glitsin — 2 mg<br>Glutamin — 100 mg · Koenzim Q10 — 20 mg<br>B6 vitamini — 0,5 mg · B9 vitamini — 0,05 mg"}
      ],
      props:[
        {h:"Gamma-aminomoy kislotasi", p:"Tabiiy metabolit, asab hujayralarini energiya bilan ta’minlaydi, kislorod tanqisligiga chidamlilikni oshiradi (antigipoksik ta’sir), qon aylanishini va almashinuv mahsulotlari chiqishini yaxshilaydi."},
        {h:"Koenzim Q10 va L-glutamin", p:"Q10 energiya ishlab chiqarishda ishtirok etadi va erkin radikallardan himoya qiladi; L-glutamin asab va endokrin tizimlarga ta’sir qiladi, jigarni himoya qiladi va glutation hosil bo‘lishida ishtirok etadi."},
        {h:"B6, B9 vitaminlari va glitsin", p:"B vitaminlari asab va yurak-qon tomir tizimlaridagi reaksiyalar katalizatori sifatida ishlaydi; glitsin MNSdagi himoya tormozlanish jarayonlarini me’yorlashtiradi, taranglikni kamaytiradi va aqliy ish qobiliyatini oshiradi."}
      ],
      areas:[
        {h:"Miya va xotira", p:"Bolalarda kognitiv funksiyalar va miya rivojlanishini yaxshilaydi."},
        {h:"Yuklamalar", p:"Aqliy va jismoniy yuklamalarga chidamlilikni oshiradi."},
        {h:"Immunitet", p:"Antioksidant, immunitetni oshiradi, ishtahani yaxshilaydi."},
        {h:"Muvozanat", p:"Mushak yuklamalari va gipoksiyada kislota-ishqor muvozanatini tiklaydi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalar va 12 yoshdan katta bolalarga — kuniga 2 marta ovqat vaqtida 1 kapsuladan. Kurs — 2–3 hafta. Zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1",l:"kapsula kuniga 2 marta"},{n:"2–3",l:"haftalik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "rokkulin": {
    cat: "capsules",
    img: "img/prod/rokkulin.webp",
    doc: "downloads/rokkulin-instrukciya.docx",
    ru: {
      name:"Роккулин",
      heroSub:"Мягкие капсулы с изотретиноином 10/20 мг. Эффективное средство при тяжёлых формах угревой сыпи и розацеа.",
      introTitle:"Контроль над тяжёлым акне",
      introText:"Роккулин — средство на основе изотретиноина для тяжёлых форм акне (узелково-кистозные, конглобатные) и акне, не поддающихся стандартному лечению. Применяется под контролем дерматолога.",
      infoCards:[
        {h:"Форма выпуска", p:"30 мягких капсул в упаковке."},
        {h:"Состав 1 капсулы", p:"Изотретиноин — 10 мг / 20 мг<br><span style=\"color:var(--ink-mute)\">Вспом.: масло соевых бобов, воск пчелиный жёлтый</span>"}
      ],
      props:[
        {h:"Изотретиноин", p:"Производное витамина A. Нормализует работу сальных желёз, уменьшает выработку кожного сала, оказывает противовоспалительное действие и снижает риск образования рубцов."},
        {h:"Курсовое действие", p:"Частота долгосрочной ремиссии оптимальна при курсовой дозе 120–150 мг/кг. Полной ремиссии акне часто удаётся добиться за 16–24 недели лечения."},
        {h:"Под контролем врача", p:"Дозировку и курс лечения рассчитывает дерматолог индивидуально, исходя из массы тела и переносимости. У большинства пациентов акне исчезают после одного курса."}
      ],
      areas:[
        {h:"Тяжёлое акне", p:"Узелково-кистозные и конглобатные формы, акне с риском рубцевания."},
        {h:"Устойчивое акне", p:"Акне, не поддающиеся антибактериальной и местной терапии."},
        {h:"Розацеа", p:"В составе комплексной терапии розацеа."},
        {h:"Профилактика рубцов", p:"Снижает риск формирования рубцов после акне."}
      ],
      dosageText:"Капсулы принимаются во время еды, 1–2 раза в сутки. Начинают с дозы 0,5 мг/кг в сутки; обычно доза 0,5–1,0 мг/кг массы тела в сутки. Дозу и курс подбирает дерматолог. Полной ремиссии обычно достигают за 16–24 недели. Повторный курс — не ранее чем через 8 недель после отмены.",
      dosageStats:[{n:"0,5–1,0",l:"мг/кг массы тела в сутки"},{n:"16–24",l:"недели курс лечения"}],
      important:[
        {h:"Противопоказания", p:"Беременность, период лактации, повышенная чувствительность, одновременный приём тетрациклинов, возраст до 12 лет."},
        {h:"Особые указания", p:"Женщинам детородного возраста перед применением необходимо подтвердить отсутствие беременности (тест)."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в защищённом от света и влаги месте. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Применяется под контролем специалиста (дерматолога). Перед применением женщинам детородного возраста сдать тест на отсутствие беременности. Не использовать после истечения срока годности."
    },
    en: {
      name:"Rokkulin",
      heroSub:"Soft capsules with isotretinoin 10/20 mg. An effective remedy for severe acne and rosacea.",
      introTitle:"Control over severe acne",
      introText:"Rokkulin is an isotretinoin-based product for severe forms of acne (nodulocystic, conglobate) and acne that does not respond to standard treatment. Used under a dermatologist's supervision.",
      infoCards:[
        {h:"Form", p:"30 soft capsules per pack."},
        {h:"Composition per capsule", p:"Isotretinoin — 10 mg / 20 mg<br><span style=\"color:var(--ink-mute)\">Excip.: soybean oil, yellow beeswax</span>"}
      ],
      props:[
        {h:"Isotretinoin", p:"A vitamin A derivative. Normalizes sebaceous gland activity, reduces sebum production, has an anti-inflammatory effect and lowers the risk of scarring."},
        {h:"Course action", p:"Long-term remission is optimal at a cumulative dose of 120–150 mg/kg. Full remission of acne is often achieved within 16–24 weeks of treatment."},
        {h:"Under medical supervision", p:"A dermatologist calculates the dose and course individually, based on body weight and tolerance. In most patients acne clears after a single course."}
      ],
      areas:[
        {h:"Severe acne", p:"Nodulocystic and conglobate forms, acne with scarring risk."},
        {h:"Resistant acne", p:"Acne that does not respond to antibacterial and topical therapy."},
        {h:"Rosacea", p:"As part of combined rosacea therapy."},
        {h:"Scar prevention", p:"Reduces the risk of post-acne scarring."}
      ],
      dosageText:"Capsules are taken with meals, 1–2 times a day. Start at 0.5 mg/kg per day; usually 0.5–1.0 mg/kg of body weight per day. The dose and course are selected by a dermatologist. Full remission is usually achieved in 16–24 weeks. A repeat course — no earlier than 8 weeks after discontinuation.",
      dosageStats:[{n:"0.5–1.0",l:"mg/kg body weight per day"},{n:"16–24",l:"weeks of treatment"}],
      important:[
        {h:"Contraindications", p:"Pregnancy, lactation, hypersensitivity, concurrent tetracycline therapy, age under 12 years."},
        {h:"Special instructions", p:"Women of childbearing age must confirm the absence of pregnancy (test) before use."},
        {h:"Storage", p:"At no more than 25 °C, protected from light and moisture. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Used under a specialist's (dermatologist's) supervision. Women of childbearing age must take a pregnancy test before use. Do not use after the expiry date."
    },
    it: {
      name:"Rokkulin",
      heroSub:"Capsule molli con isotretinoina 10/20 mg. Un rimedio efficace per l'acne grave e la rosacea.",
      introTitle:"Controllo dell'acne grave",
      introText:"Rokkulin è un prodotto a base di isotretinoina per le forme gravi di acne (nodulo-cistica, conglobata) e per l'acne che non risponde al trattamento standard. Si usa sotto la supervisione di un dermatologo.",
      infoCards:[
        {h:"Formato", p:"30 capsule molli per confezione."},
        {h:"Composizione per capsula", p:"Isotretinoina — 10 mg / 20 mg<br><span style=\"color:var(--ink-mute)\">Eccip.: olio di soia, cera d'api gialla</span>"}
      ],
      props:[
        {h:"Isotretinoina", p:"Un derivato della vitamina A. Normalizza l'attività delle ghiandole sebacee, riduce la produzione di sebo, ha azione antinfiammatoria e abbassa il rischio di cicatrici."},
        {h:"Azione del ciclo", p:"La remissione a lungo termine è ottimale con una dose cumulativa di 120–150 mg/kg. La remissione completa dell'acne si ottiene spesso entro 16–24 settimane di trattamento."},
        {h:"Sotto controllo medico", p:"Un dermatologo calcola la dose e il ciclo individualmente, in base al peso corporeo e alla tollerabilità. Nella maggior parte dei pazienti l'acne scompare dopo un solo ciclo."}
      ],
      areas:[
        {h:"Acne grave", p:"Forme nodulo-cistiche e conglobate, acne con rischio di cicatrici."},
        {h:"Acne resistente", p:"Acne che non risponde alla terapia antibatterica e topica."},
        {h:"Rosacea", p:"Nell'ambito della terapia combinata della rosacea."},
        {h:"Prevenzione cicatrici", p:"Riduce il rischio di cicatrici post-acne."}
      ],
      dosageText:"Le capsule si assumono durante i pasti, 1–2 volte al giorno. Si inizia con 0,5 mg/kg al giorno; di solito 0,5–1,0 mg/kg di peso corporeo al giorno. La dose e il ciclo sono stabiliti da un dermatologo. La remissione completa si ottiene di norma in 16–24 settimane. Un ciclo ripetuto — non prima di 8 settimane dopo la sospensione.",
      dosageStats:[{n:"0,5–1,0",l:"mg/kg di peso al giorno"},{n:"16–24",l:"settimane di trattamento"}],
      important:[
        {h:"Controindicazioni", p:"Gravidanza, allattamento, ipersensibilità, terapia concomitante con tetracicline, età inferiore a 12 anni."},
        {h:"Avvertenze speciali", p:"Le donne in età fertile devono confermare l'assenza di gravidanza (test) prima dell'uso."},
        {h:"Conservazione", p:"A non più di 25 °C, al riparo da luce e umidità. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si usa sotto la supervisione di uno specialista (dermatologo). Le donne in età fertile devono effettuare un test di gravidanza prima dell'uso. Non usare dopo la data di scadenza."
    },
    uz: {
      name:"Rokkulin",
      heroSub:"Izotretinoin 10/20 mg bilan yumshoq kapsulalar. Ugri toshmasi va rozatsiyaning og‘ir shakllarida samarali vosita.",
      introTitle:"Og‘ir akne ustidan nazorat",
      introText:"Rokkulin — aknening og‘ir shakllari (tugunli-kistali, konglobat) va standart davoga bo‘ysunmaydigan akne uchun izotretinoin asosidagi vosita. Dermatolog nazorati ostida qo‘llaniladi.",
      infoCards:[
        {h:"Formati", p:"Qadoqda 30 yumshoq kapsula."},
        {h:"1 kapsula tarkibi", p:"Izotretinoin — 10 mg / 20 mg<br><span style=\"color:var(--ink-mute)\">Yord.: soya moyi, sariq asalari mumi</span>"}
      ],
      props:[
        {h:"Izotretinoin", p:"A vitamini hosilasi. Yog‘ bezlari ishini me’yorlashtiradi, teri yog‘i ishlab chiqarilishini kamaytiradi, yallig‘lanishga qarshi ta’sir ko‘rsatadi va chandiq hosil bo‘lishi xavfini kamaytiradi."},
        {h:"Kurs ta’siri", p:"Uzoq muddatli remissiya chastotasi 120–150 mg/kg kurs dozasida optimal bo‘ladi. Aknening to‘liq remissiyasiga ko‘pincha 16–24 haftalik davolashda erishiladi."},
        {h:"Shifokor nazoratida", p:"Doza va davolash kursini dermatolog tana vazni va chidamlilikka qarab individual hisoblab chiqadi. Ko‘pchilik bemorlarda akne bir kursdan keyin yo‘qoladi."}
      ],
      areas:[
        {h:"Og‘ir akne", p:"Tugunli-kistali va konglobat shakllar, chandiqlanish xavfli akne."},
        {h:"Chidamli akne", p:"Antibakterial va mahalliy davoga bo‘ysunmaydigan akne."},
        {h:"Rozatsiya", p:"Rozatsiyaning majmuaviy terapiyasi tarkibida."},
        {h:"Chandiq profilaktikasi", p:"Aknedan keyin chandiq hosil bo‘lishi xavfini kamaytiradi."}
      ],
      dosageText:"Kapsulalar ovqat vaqtida, kuniga 1–2 marta qabul qilinadi. Kuniga 0,5 mg/kg dozadan boshlanadi; odatda kuniga 0,5–1,0 mg/kg tana vazni. Doza va kursni dermatolog tanlaydi. To‘liq remissiyaga odatda 16–24 haftada erishiladi. Takroriy kurs — bekor qilingandan keyin 8 haftadan oldin emas.",
      dosageStats:[{n:"0,5–1,0",l:"mg/kg tana vazni kuniga"},{n:"16–24",l:"haftalik davolash kursi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Homiladorlik, emizish davri, yuqori sezuvchanlik, tetratsiklinlarni bir vaqtda qabul qilish, 12 yoshgacha."},
        {h:"Maxsus ko‘rsatmalar", p:"Bola tug‘ish yoshidagi ayollar qo‘llashdan oldin homiladorlik yo‘qligini tasdiqlashi (test) kerak."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, yorug‘lik va namlikdan himoyalangan joyda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Mutaxassis (dermatolog) nazorati ostida qo‘llaniladi. Bola tug‘ish yoshidagi ayollar qo‘llashdan oldin homiladorlik yo‘qligiga test topshirsin. Yaroqlilik muddati o‘tgach ishlatmang."
    }
  },

  "selibum": {
    cat: "capsules",
    img: "img/prod/selibum.webp",
    doc: "downloads/selibum-instrukciya.docx",
    ru: {
      name:"Селибум",
      heroSub:"Капсулы с расторопшей, фосфатидилхолином, артишоком и L-метионином. Защита и восстановление печени.",
      introTitle:"Комплексная поддержка печени",
      introText:"Селибум — гепатопротектор на основе экстракта расторопши пятнистой, фосфатидилхолина, экстракта артишока и L-метионина. Защищает клетки печени, способствует их восстановлению и улучшает отток желчи.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы для приёма внутрь, №20."},
        {h:"Состав 1 капсулы", p:"Экстракт расторопши — 60 мг<br>Фосфатидилхолин — 300 мг<br>Экстракт артишока — 60 мг · L-метионин — 60 мг"}
      ],
      props:[
        {h:"Расторопша (силимарин)", p:"Защищает клетки печени от токсинов, стимулирует их регенерацию, обладает антиоксидантным и противовоспалительным действием."},
        {h:"Фосфатидилхолин", p:"Основной компонент клеточных мембран гепатоцитов; встраивается в повреждённые мембраны и восстанавливает структуру и функцию клеток печени."},
        {h:"Артишок и L-метионин", p:"Артишок усиливает желчеотделение и обладает детокс-эффектом; L-метионин участвует в обезвреживании токсинов и защищает печень от жирового перерождения."}
      ],
      areas:[
        {h:"Заболевания печени", p:"Острые и хронические заболевания печени, гипераммониемия."},
        {h:"Энцефалопатия", p:"Печёночная энцефалопатия (латентная или выраженная)."},
        {h:"Стеатоз", p:"Стеатозы и стеатогепатиты различного генеза."},
        {h:"Детокс", p:"Защита печени при токсических и лекарственных нагрузках."}
      ],
      dosageText:"Принимается внутрь во время еды. Взрослым и детям старше 12 лет — по 1 капсуле 2–3 раза в день. Курс приёма — 1 месяц. При необходимости по рекомендации специалиста курс можно повторить.",
      dosageStats:[{n:"1",l:"капсула 2–3 раза в день"},{n:"1",l:"месяц курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, период лактации."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в защищённом от света месте. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Selibum",
      heroSub:"Capsules with milk thistle, phosphatidylcholine, artichoke and L-methionine. Liver protection and recovery.",
      introTitle:"Comprehensive liver support",
      introText:"Selibum is a hepatoprotector based on milk thistle extract, phosphatidylcholine, artichoke extract and L-methionine. It protects liver cells, supports their recovery and improves bile flow.",
      infoCards:[
        {h:"Form", p:"Oral capsules, No.20."},
        {h:"Composition per capsule", p:"Milk thistle extract — 60 mg<br>Phosphatidylcholine — 300 mg<br>Artichoke extract — 60 mg · L-methionine — 60 mg"}
      ],
      props:[
        {h:"Milk thistle (silymarin)", p:"Protects liver cells from toxins, stimulates their regeneration and has antioxidant and anti-inflammatory action."},
        {h:"Phosphatidylcholine", p:"The main component of hepatocyte cell membranes; integrates into damaged membranes and restores the structure and function of liver cells."},
        {h:"Artichoke and L-methionine", p:"Artichoke enhances bile secretion and has a detox effect; L-methionine helps neutralize toxins and protects the liver from fatty degeneration."}
      ],
      areas:[
        {h:"Liver diseases", p:"Acute and chronic liver diseases, hyperammonemia."},
        {h:"Encephalopathy", p:"Hepatic encephalopathy (latent or overt)."},
        {h:"Steatosis", p:"Steatosis and steatohepatitis of various origins."},
        {h:"Detox", p:"Liver protection under toxic and drug load."}
      ],
      dosageText:"Taken orally with meals. Adults and children over 12 — 1 capsule 2–3 times a day. Course: 1 month. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1",l:"capsule 2–3 times a day"},{n:"1",l:"month course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, lactation."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"At no more than 25 °C, in a place protected from light. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Selibum",
      heroSub:"Capsule con cardo mariano, fosfatidilcolina, carciofo e L-metionina. Protezione e recupero del fegato.",
      introTitle:"Sostegno completo del fegato",
      introText:"Selibum è un epatoprotettore a base di estratto di cardo mariano, fosfatidilcolina, estratto di carciofo e L-metionina. Protegge le cellule epatiche, ne favorisce il recupero e migliora il flusso biliare.",
      infoCards:[
        {h:"Formato", p:"Capsule per uso orale, n.20."},
        {h:"Composizione per capsula", p:"Estratto di cardo mariano — 60 mg<br>Fosfatidilcolina — 300 mg<br>Estratto di carciofo — 60 mg · L-metionina — 60 mg"}
      ],
      props:[
        {h:"Cardo mariano (silimarina)", p:"Protegge le cellule epatiche dalle tossine, ne stimola la rigenerazione e ha azione antiossidante e antinfiammatoria."},
        {h:"Fosfatidilcolina", p:"Il componente principale delle membrane cellulari degli epatociti; si integra nelle membrane danneggiate e ripristina la struttura e la funzione delle cellule epatiche."},
        {h:"Carciofo e L-metionina", p:"Il carciofo potenzia la secrezione biliare e ha un effetto detox; la L-metionina aiuta a neutralizzare le tossine e protegge il fegato dalla degenerazione grassa."}
      ],
      areas:[
        {h:"Malattie del fegato", p:"Malattie epatiche acute e croniche, iperammoniemia."},
        {h:"Encefalopatia", p:"Encefalopatia epatica (latente o conclamata)."},
        {h:"Steatosi", p:"Steatosi e steatoepatiti di varia origine."},
        {h:"Detox", p:"Protezione del fegato sotto carico tossico e farmacologico."}
      ],
      dosageText:"Per uso orale durante i pasti. Adulti e bambini sopra i 12 anni — 1 capsula 2–3 volte al giorno. Ciclo: 1 mese. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1",l:"capsula 2–3 volte al giorno"},{n:"1",l:"mese di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"A non più di 25 °C, in luogo al riparo dalla luce. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Selibum",
      heroSub:"Tikanli sutgul, fosfatidilxolin, artishok va L-metionin bilan kapsulalar. Jigarni himoya qilish va tiklash.",
      introTitle:"Jigarni majmuaviy qo‘llab-quvvatlash",
      introText:"Selibum — tikanli sutgul ekstrakti, fosfatidilxolin, artishok ekstrakti va L-metionin asosidagi gepatoprotektor. Jigar hujayralarini himoya qiladi, ularning tiklanishiga yordam beradi va o‘t oqishini yaxshilaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik uchun kapsulalar, №20."},
        {h:"1 kapsula tarkibi", p:"Tikanli sutgul ekstrakti — 60 mg<br>Fosfatidilxolin — 300 mg<br>Artishok ekstrakti — 60 mg · L-metionin — 60 mg"}
      ],
      props:[
        {h:"Tikanli sutgul (silimarin)", p:"Jigar hujayralarini toksinlardan himoya qiladi, ularning regeneratsiyasini rag‘batlantiradi, antioksidant va yallig‘lanishga qarshi ta’sirga ega."},
        {h:"Fosfatidilxolin", p:"Gepatotsitlar hujayra membranalarining asosiy komponenti; shikastlangan membranalarga o‘rnashib, jigar hujayralarining tuzilishi va funksiyasini tiklaydi."},
        {h:"Artishok va L-metionin", p:"Artishok o‘t ajralishini kuchaytiradi va detoks ta’siriga ega; L-metionin toksinlarni zararsizlantirishda ishtirok etadi va jigarni yog‘ bosishidan himoya qiladi."}
      ],
      areas:[
        {h:"Jigar kasalliklari", p:"Jigarning o‘tkir va surunkali kasalliklari, giperammoniemiya."},
        {h:"Ensefalopatiya", p:"Jigar ensefalopatiyasi (yashirin yoki aniq ifodalangan)."},
        {h:"Steatoz", p:"Turli kelib chiqishli steatozlar va steatogepatitlar."},
        {h:"Detoks", p:"Toksik va dori yuklamalarida jigarni himoya qilish."}
      ],
      dosageText:"Ovqat vaqtida og‘iz orqali qabul qilinadi. Kattalar va 12 yoshdan katta bolalarga — kuniga 2–3 marta 1 kapsuladan. Kurs — 1 oy. Zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1",l:"kapsula kuniga 2–3 marta"},{n:"1",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish davri."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, yorug‘likdan himoyalangan joyda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "urovelin": {
    cat: "capsules",
    img: "img/prod/urovelin.webp",
    doc: "downloads/urovelin-instrukciya.docx",
    ru: {
      name:"Уровелин",
      heroSub:"Капсулы с экстрактами женьшеня и цистанхе. Повышение выносливости, тонуса и улучшение мужской половой функции.",
      introTitle:"Энергия, тонус и мужская сила",
      introText:"Уровелин — комплекс из двух мощных адаптогенов: экстракта корня женьшеня и экстракта цистанхе. Повышает работоспособность и выносливость, поддерживает мужское здоровье и сексуальную функцию.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы для приёма внутрь по 0,5 г, №30."},
        {h:"Состав 1 капсулы", p:"Экстракт корня женьшеня — 200 мг<br>Экстракт цистанхе — 270 мг"}
      ],
      props:[
        {h:"Женьшень", p:"Один из сильнейших адаптогенов: стимулирует ЦНС, повышает умственную и физическую работоспособность, улучшает память и концентрацию, поддерживает иммунитет и повышает уровень тестостерона."},
        {h:"Цистанхе", p:"Тонизирующий адаптоген: уменьшает усталость, повышает выносливость, обладает антиоксидантным и иммуномодулирующим действием, улучшает кровообращение и половую функцию."},
        {h:"Синергия компонентов", p:"Женьшень и цистанхе повышают уровень тестостерона и выработку оксида азота, что улучшает эректильную функцию, потенцию и либидо. Два компонента усиливают действие друг друга."}
      ],
      areas:[
        {h:"Мужское здоровье", p:"Улучшение эректильной функции, повышение либидо и потенции."},
        {h:"Выносливость", p:"Астенические состояния, длительные физические и психические нагрузки."},
        {h:"Работоспособность", p:"Повышение работоспособности и сопротивляемости организма."},
        {h:"Тонус", p:"Нейроциркуляторная дистония по гипотоническому типу (в комплексе)."}
      ],
      dosageText:"Принимается внутрь во время еды. Взрослым и детям старше 18 лет — по 1 капсуле 1–2 раза в сутки. При необходимости по рекомендации специалиста курс приёма можно повторить.",
      dosageStats:[{n:"1",l:"капсула 1–2 раза в сутки"},{n:"18+",l:"только для взрослых"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, кормление грудью, детям до 18 лет."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Не использовать после истечения срока годности."
    },
    en: {
      name:"Urovelin",
      heroSub:"Capsules with ginseng and cistanche extracts. Increased endurance, tone and improved male sexual function.",
      introTitle:"Energy, tone and male vitality",
      introText:"Urovelin is a complex of two powerful adaptogens: ginseng root extract and cistanche extract. It increases performance and endurance, supports men's health and sexual function.",
      infoCards:[
        {h:"Form", p:"Oral capsules 0.5 g, No.30."},
        {h:"Composition per capsule", p:"Ginseng root extract — 200 mg<br>Cistanche extract — 270 mg"}
      ],
      props:[
        {h:"Ginseng", p:"One of the strongest adaptogens: stimulates the CNS, increases mental and physical performance, improves memory and concentration, supports immunity and raises testosterone levels."},
        {h:"Cistanche", p:"A toning adaptogen: reduces fatigue, increases endurance, has antioxidant and immunomodulatory action, improves circulation and sexual function."},
        {h:"Synergy of components", p:"Ginseng and cistanche raise testosterone levels and nitric oxide production, improving erectile function, potency and libido. The two components enhance each other's action."}
      ],
      areas:[
        {h:"Men's health", p:"Improves erectile function, increases libido and potency."},
        {h:"Endurance", p:"Asthenic states, prolonged physical and mental load."},
        {h:"Performance", p:"Increases performance and the body's resistance."},
        {h:"Tone", p:"Hypotonic neurocirculatory dystonia (as part of combined therapy)."}
      ],
      dosageText:"Taken orally with meals. Adults and those over 18 — 1 capsule 1–2 times a day. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1",l:"capsule 1–2 times a day"},{n:"18+",l:"adults only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, breastfeeding, age under 18 years."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Do not use after the expiry date."
    },
    it: {
      name:"Urovelin",
      heroSub:"Capsule con estratti di ginseng e cistanche. Maggiore resistenza, tono e miglioramento della funzione sessuale maschile.",
      introTitle:"Energia, tono e vitalità maschile",
      introText:"Urovelin è un complesso di due potenti adattogeni: estratto di radice di ginseng ed estratto di cistanche. Aumenta le prestazioni e la resistenza, sostiene la salute maschile e la funzione sessuale.",
      infoCards:[
        {h:"Formato", p:"Capsule per uso orale 0,5 g, n.30."},
        {h:"Composizione per capsula", p:"Estratto di radice di ginseng — 200 mg<br>Estratto di cistanche — 270 mg"}
      ],
      props:[
        {h:"Ginseng", p:"Uno degli adattogeni più potenti: stimola il SNC, aumenta le prestazioni mentali e fisiche, migliora memoria e concentrazione, sostiene l'immunità e aumenta i livelli di testosterone."},
        {h:"Cistanche", p:"Un adattogeno tonificante: riduce la stanchezza, aumenta la resistenza, ha azione antiossidante e immunomodulante, migliora la circolazione e la funzione sessuale."},
        {h:"Sinergia dei componenti", p:"Ginseng e cistanche aumentano i livelli di testosterone e la produzione di ossido nitrico, migliorando funzione erettile, potenza e libido. I due componenti ne potenziano l'azione reciproca."}
      ],
      areas:[
        {h:"Salute maschile", p:"Migliora la funzione erettile, aumenta libido e potenza."},
        {h:"Resistenza", p:"Stati astenici, sforzi fisici e mentali prolungati."},
        {h:"Prestazioni", p:"Aumenta le prestazioni e la resistenza dell'organismo."},
        {h:"Tono", p:"Distonia neurocircolatoria ipotonica (nell'ambito della terapia combinata)."}
      ],
      dosageText:"Per uso orale durante i pasti. Adulti e maggiori di 18 anni — 1 capsula 1–2 volte al giorno. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1",l:"capsula 1–2 volte al giorno"},{n:"18+",l:"solo per adulti"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento, età inferiore a 18 anni."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Non usare dopo la data di scadenza."
    },
    uz: {
      name:"Urovelin",
      heroSub:"Jenshen va sistanxe ekstraktlari bilan kapsulalar. Chidamlilik, tetiklikni oshirish va erkaklar jinsiy faoliyatini yaxshilash.",
      introTitle:"Energiya, tetiklik va erkaklar kuchi",
      introText:"Urovelin — ikkita kuchli adaptogen: jenshen ildizi ekstrakti va sistanxe ekstraktidan iborat majmua. Ish qobiliyati va chidamlilikni oshiradi, erkaklar salomatligi va jinsiy faoliyatini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik uchun 0,5 g li kapsulalar, №30."},
        {h:"1 kapsula tarkibi", p:"Jenshen ildizi ekstrakti — 200 mg<br>Sistanxe ekstrakti — 270 mg"}
      ],
      props:[
        {h:"Jenshen", p:"Eng kuchli adaptogenlardan biri: MNSni rag‘batlantiradi, aqliy va jismoniy ish qobiliyatini oshiradi, xotira va diqqatni yaxshilaydi, immunitetni qo‘llab-quvvatlaydi va testosteron darajasini oshiradi."},
        {h:"Sistanxe", p:"Tetiklashtiruvchi adaptogen: charchoqni kamaytiradi, chidamlilikni oshiradi, antioksidant va immunomodulyator ta’sirga ega, qon aylanishi va jinsiy faoliyatni yaxshilaydi."},
        {h:"Komponentlar sinergiyasi", p:"Jenshen va sistanxe testosteron darajasi va azot oksidi ishlab chiqarilishini oshiradi, bu esa erektil funksiya, potensiya va libidoni yaxshilaydi. Ikki komponent bir-birining ta’sirini kuchaytiradi."}
      ],
      areas:[
        {h:"Erkaklar salomatligi", p:"Erektil funksiyani yaxshilash, libido va potensiyani oshirish."},
        {h:"Chidamlilik", p:"Astenik holatlar, uzoq muddatli jismoniy va ruhiy yuklamalar."},
        {h:"Ish qobiliyati", p:"Ish qobiliyati va organizm chidamliligini oshirish."},
        {h:"Tetiklik", p:"Gipotonik turdagi neyrotsirkulyator distoniya (majmuada)."}
      ],
      dosageText:"Ovqat vaqtida og‘iz orqali qabul qilinadi. Kattalar va 18 yoshdan katta bolalarga — kuniga 1–2 marta 1 kapsuladan. Zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1",l:"kapsula kuniga 1–2 marta"},{n:"18+",l:"faqat kattalar uchun"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish, 18 yoshgacha bo‘lgan bolalar."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Yaroqlilik muddati o‘tgach ishlatmang."
    }
  },

  "mio-inofol": {
    cat: "capsules",
    img: "img/prod/mio-inofol.webp",
    doc: "downloads/mio-inofol-instrukciya.docx",
    ru: {
      name:"Мио инофол",
      heroSub:"Капсулы с мио-инозитолом и фолиевой кислотой. Гормональный баланс, регуляция цикла и подготовка к беременности.",
      introTitle:"Гормональный баланс для женщин",
      introText:"Мио инофол — сочетание мио-инозитола (витамин B8) и фолиевой кислоты (витамин B9). Поддерживает баланс женских половых гормонов, способствует нормализации менструального цикла и применяется при подготовке к беременности.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, №30."},
        {h:"Состав 1 капсулы", p:"Мио-инозитол — 500 мг<br>Фолиевая кислота (вит. B9) — 100 мкг"}
      ],
      props:[
        {h:"Мио-инозитол", p:"Обеспечивает работу рецепторов половых гормонов и инсулина, поддерживает баланс женских гормонов, нормализует уровень андрогенов и пролактина, устраняет проявления гиперандрогении (включая СПКЯ)."},
        {h:"Регуляция цикла", p:"Участвует в регуляции менструального цикла и способствует его нормализации, играет роль в созревании яйцеклетки при подготовке к оплодотворению, снижает инсулинорезистентность."},
        {h:"Фолиевая кислота", p:"Необходима для клеточного деления, роста кровеносной и иммунной систем. Рекомендуется при планировании беременности и в первом триместре для гармоничного развития плода."}
      ],
      areas:[
        {h:"Менструальный цикл", p:"При нарушениях менструального цикла."},
        {h:"ПМС", p:"При предменструальном синдроме."},
        {h:"СПКЯ", p:"Гиперандрогения, синдром поликистозных яичников."},
        {h:"Планирование", p:"В период предгравидарной подготовки."}
      ],
      dosageText:"Принимается внутрь во время еды. Взрослым и детям старше 12 лет — по 1 капсуле 1–4 раза в сутки. Продолжительность приёма — 30 дней. Начало приёма возможно с любого дня цикла. При необходимости по рекомендации специалиста приём можно повторить.",
      dosageStats:[{n:"1–4",l:"капсулы в сутки"},{n:"30",l:"дней приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, детям до 12 лет."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Беременным и кормящим — по согласованию и под наблюдением врача. Перед применением рекомендуется консультация специалиста. Не использовать после истечения срока годности."
    },
    en: {
      name:"Mio Inofol",
      heroSub:"Capsules with myo-inositol and folic acid. Hormonal balance, cycle regulation and pregnancy preparation.",
      introTitle:"Hormonal balance for women",
      introText:"Mio Inofol combines myo-inositol (vitamin B8) and folic acid (vitamin B9). It supports the balance of female sex hormones, helps normalize the menstrual cycle and is used in preparation for pregnancy.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No.30."},
        {h:"Composition per capsule", p:"Myo-inositol — 500 mg<br>Folic acid (vit. B9) — 100 mcg"}
      ],
      props:[
        {h:"Myo-inositol", p:"Ensures the function of sex-hormone and insulin receptors, supports the balance of female hormones, normalizes androgen and prolactin levels and reduces signs of hyperandrogenism (including PCOS)."},
        {h:"Cycle regulation", p:"Participates in regulating the menstrual cycle and helps normalize it, plays a role in egg maturation in preparation for fertilization and reduces insulin resistance."},
        {h:"Folic acid", p:"Needed for cell division and the growth of the circulatory and immune systems. Recommended when planning pregnancy and in the first trimester for harmonious fetal development."}
      ],
      areas:[
        {h:"Menstrual cycle", p:"For menstrual cycle disorders."},
        {h:"PMS", p:"For premenstrual syndrome."},
        {h:"PCOS", p:"Hyperandrogenism, polycystic ovary syndrome."},
        {h:"Planning", p:"During pre-conception preparation."}
      ],
      dosageText:"Taken orally with meals. Adults and children over 12 — 1 capsule 1–4 times a day. Duration: 30 days. May be started on any day of the cycle. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1–4",l:"capsules a day"},{n:"30",l:"days of use"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, children under 12 years."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Pregnant and breastfeeding women — by agreement and under a doctor's supervision. Consultation with a specialist is recommended before use. Do not use after the expiry date."
    },
    it: {
      name:"Mio Inofol",
      heroSub:"Capsule con mio-inositolo e acido folico. Equilibrio ormonale, regolazione del ciclo e preparazione alla gravidanza.",
      introTitle:"Equilibrio ormonale per le donne",
      introText:"Mio Inofol combina mio-inositolo (vitamina B8) e acido folico (vitamina B9). Sostiene l'equilibrio degli ormoni sessuali femminili, aiuta a normalizzare il ciclo mestruale e si usa nella preparazione alla gravidanza.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n.30."},
        {h:"Composizione per capsula", p:"Mio-inositolo — 500 mg<br>Acido folico (vit. B9) — 100 mcg"}
      ],
      props:[
        {h:"Mio-inositolo", p:"Garantisce il funzionamento dei recettori degli ormoni sessuali e dell'insulina, sostiene l'equilibrio degli ormoni femminili, normalizza i livelli di androgeni e prolattina e riduce i segni di iperandrogenismo (inclusa la PCOS)."},
        {h:"Regolazione del ciclo", p:"Partecipa alla regolazione del ciclo mestruale e ne favorisce la normalizzazione, svolge un ruolo nella maturazione dell'ovocita in preparazione alla fecondazione e riduce l'insulino-resistenza."},
        {h:"Acido folico", p:"Necessario per la divisione cellulare e la crescita dei sistemi circolatorio e immunitario. Raccomandato nella pianificazione della gravidanza e nel primo trimestre per uno sviluppo armonioso del feto."}
      ],
      areas:[
        {h:"Ciclo mestruale", p:"In caso di disturbi del ciclo mestruale."},
        {h:"PMS", p:"In caso di sindrome premestruale."},
        {h:"PCOS", p:"Iperandrogenismo, sindrome dell'ovaio policistico."},
        {h:"Pianificazione", p:"Durante la preparazione al concepimento."}
      ],
      dosageText:"Per uso orale durante i pasti. Adulti e bambini sopra i 12 anni — 1 capsula 1–4 volte al giorno. Durata: 30 giorni. Si può iniziare in qualsiasi giorno del ciclo. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1–4",l:"capsule al giorno"},{n:"30",l:"giorni d'uso"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, bambini sotto i 12 anni."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Le donne in gravidanza e in allattamento — previo accordo e sotto controllo medico. Si raccomanda di consultare uno specialista prima dell'uso. Non usare dopo la data di scadenza."
    },
    uz: {
      name:"Mio Inofol",
      heroSub:"Mio-inozitol va foliy kislotasi bilan kapsulalar. Gormonal muvozanat, sikl tartibga solinishi va homiladorlikka tayyorgarlik.",
      introTitle:"Ayollar uchun gormonal muvozanat",
      introText:"Mio Inofol — mio-inozitol (B8 vitamini) va foliy kislotasi (B9 vitamini) uyg‘unligi. Ayol jinsiy gormonlari muvozanatini qo‘llab-quvvatlaydi, hayz siklini me’yorlashtirishga yordam beradi va homiladorlikka tayyorgarlikda qo‘llaniladi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, №30."},
        {h:"1 kapsula tarkibi", p:"Mio-inozitol — 500 mg<br>Foliy kislotasi (B9 vit.) — 100 mkg"}
      ],
      props:[
        {h:"Mio-inozitol", p:"Jinsiy gormonlar va insulin retseptorlari ishini ta’minlaydi, ayol gormonlari muvozanatini qo‘llab-quvvatlaydi, androgen va prolaktin darajasini me’yorlashtiradi, giperandrogeniya ko‘rinishlarini (shu jumladan PKTS) bartaraf etadi."},
        {h:"Siklni tartibga solish", p:"Hayz siklini tartibga solishda ishtirok etadi va uni me’yorlashtirishga yordam beradi, urug‘lanishga tayyorgarlikda tuxum hujayra yetilishida rol o‘ynaydi, insulinga chidamlilikni kamaytiradi."},
        {h:"Foliy kislotasi", p:"Hujayralar bo‘linishi, qon va immun tizimlar rivojlanishi uchun zarur. Homiladorlikni rejalashtirishda va birinchi trimestrda homilaning uyg‘un rivojlanishi uchun tavsiya etiladi."}
      ],
      areas:[
        {h:"Hayz sikli", p:"Hayz sikli buzilishlarida."},
        {h:"HOS (PMS)", p:"Hayz oldi sindromida."},
        {h:"PKTS", p:"Giperandrogeniya, polikistoz tuxumdon sindromi."},
        {h:"Rejalashtirish", p:"Homiladorlikdan oldingi tayyorgarlik davrida."}
      ],
      dosageText:"Ovqat vaqtida og‘iz orqali qabul qilinadi. Kattalar va 12 yoshdan katta bolalarga — kuniga 1–4 marta 1 kapsuladan. Qabul davomiyligi — 30 kun. Qabulni siklning istalgan kunidan boshlash mumkin. Zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra qabulni takrorlash mumkin.",
      dosageStats:[{n:"1–4",l:"kapsula kuniga"},{n:"30",l:"kunlik qabul"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, 12 yoshgacha bo‘lgan bolalar."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Homilador va emizuvchi ayollarga — kelishilgan holda va shifokor nazorati ostida. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Yaroqlilik muddati o‘tgach ishlatmang."
    }
  },

  "mastopar-bio": {
    cat: "capsules",
    img: "img/prod/mastopar-bio.webp",
    ru: {
      name:"Мастопар Био",
      heroSub:"Биологически активная добавка с L-карнитином и аргинином для поддержки здоровья молочных желёз.",
      introTitle:"Поддержка здоровья молочных желёз",
      introText:"Мастопар Био — комплекс из L-карнитина и аргинина, разработанный для поддержки здоровья молочных желёз и улучшения обменных процессов в тканях.",
      infoCards:[
        {h:"Форма выпуска", p:"№60."},
        {h:"Состав на 10 мл", p:"L-карнитин — 2,0 г<br>Аргинин — 0,20 г<br><span style=\"color:var(--ink-mute)\">Вспом.: вода очищенная</span>"}
      ],
      props:[
        {h:"L-карнитин", p:"Участвует в энергетическом обмене клеток, способствует транспорту жирных кислот и нормализации обменных процессов в тканях."},
        {h:"Аргинин", p:"Аминокислота, участвующая в синтезе оксида азота, улучшает микроциркуляцию и питание тканей, поддерживает сосудистый тонус."},
        {h:"Совместное действие", p:"Комбинация компонентов направлена на поддержку здоровья молочных желёз и улучшение тканевого обмена."}
      ],
      areas:[
        {h:"Молочные железы", p:"Поддержка здоровья молочных желёз."},
        {h:"Обмен веществ", p:"Улучшение обменных процессов в тканях."},
        {h:"Микроциркуляция", p:"Поддержка кровообращения и питания тканей."},
        {h:"Тонус", p:"Общая поддержка женского здоровья."}
      ],
      dosageText:"Принимается внутрь. Перед применением рекомендуется ознакомиться с инструкцией и проконсультироваться со специалистом.",
      dosageStats:[{n:"№60",l:"в упаковке"},{n:"2",l:"года срок годности"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Особые указания", p:"Перед применением необходимо ознакомиться с инструкцией."},
        {h:"Условия хранения", p:"Хранить в защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"2 года. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не использовать после истечения срока годности. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Mastopar Bio",
      heroSub:"A dietary supplement with L-carnitine and arginine to support breast health.",
      introTitle:"Support for breast health",
      introText:"Mastopar Bio is a complex of L-carnitine and arginine developed to support breast health and improve metabolic processes in tissues.",
      infoCards:[
        {h:"Form", p:"No.60."},
        {h:"Composition per 10 ml", p:"L-carnitine — 2.0 g<br>Arginine — 0.20 g<br><span style=\"color:var(--ink-mute)\">Excip.: purified water</span>"}
      ],
      props:[
        {h:"L-carnitine", p:"Participates in cellular energy metabolism, helps transport fatty acids and normalizes metabolic processes in tissues."},
        {h:"Arginine", p:"An amino acid involved in nitric oxide synthesis, improves microcirculation and tissue nutrition and supports vascular tone."},
        {h:"Combined action", p:"The combination of components is aimed at supporting breast health and improving tissue metabolism."}
      ],
      areas:[
        {h:"Breasts", p:"Support for breast health."},
        {h:"Metabolism", p:"Improves metabolic processes in tissues."},
        {h:"Microcirculation", p:"Supports circulation and tissue nutrition."},
        {h:"Tone", p:"General support for women's health."}
      ],
      dosageText:"Taken orally. Before use, read the instructions and consult a specialist.",
      dosageStats:[{n:"No.60",l:"per pack"},{n:"2",l:"years shelf life"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Special instructions", p:"Read the instructions before use."},
        {h:"Storage", p:"Store in a place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"2 years. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not use after the expiry date. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Mastopar Bio",
      heroSub:"Un integratore alimentare con L-carnitina e arginina per sostenere la salute del seno.",
      introTitle:"Sostegno alla salute del seno",
      introText:"Mastopar Bio è un complesso di L-carnitina e arginina sviluppato per sostenere la salute del seno e migliorare i processi metabolici nei tessuti.",
      infoCards:[
        {h:"Formato", p:"n.60."},
        {h:"Composizione per 10 ml", p:"L-carnitina — 2,0 g<br>Arginina — 0,20 g<br><span style=\"color:var(--ink-mute)\">Eccip.: acqua depurata</span>"}
      ],
      props:[
        {h:"L-carnitina", p:"Partecipa al metabolismo energetico cellulare, favorisce il trasporto degli acidi grassi e normalizza i processi metabolici nei tessuti."},
        {h:"Arginina", p:"Un aminoacido coinvolto nella sintesi dell'ossido nitrico, migliora la microcircolazione e la nutrizione dei tessuti e sostiene il tono vascolare."},
        {h:"Azione combinata", p:"La combinazione dei componenti mira a sostenere la salute del seno e a migliorare il metabolismo tissutale."}
      ],
      areas:[
        {h:"Seno", p:"Sostegno alla salute del seno."},
        {h:"Metabolismo", p:"Migliora i processi metabolici nei tessuti."},
        {h:"Microcircolazione", p:"Sostiene la circolazione e la nutrizione dei tessuti."},
        {h:"Tono", p:"Sostegno generale alla salute femminile."}
      ],
      dosageText:"Per uso orale. Prima dell'uso, leggere le istruzioni e consultare uno specialista.",
      dosageStats:[{n:"n.60",l:"per confezione"},{n:"2",l:"anni di validità"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Avvertenze speciali", p:"Leggere le istruzioni prima dell'uso."},
        {h:"Conservazione", p:"Conservare al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"2 anni. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non usare dopo la data di scadenza. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Mastopar Bio",
      heroSub:"Sut bezlari salomatligini qo‘llab-quvvatlash uchun L-karnitin va arginin bilan biologik faol qo‘shimcha.",
      introTitle:"Sut bezlari salomatligini qo‘llab-quvvatlash",
      introText:"Mastopar Bio — sut bezlari salomatligini qo‘llab-quvvatlash va to‘qimalardagi almashinuv jarayonlarini yaxshilash uchun ishlab chiqilgan L-karnitin va arginin majmuasi.",
      infoCards:[
        {h:"Formati", p:"№60."},
        {h:"10 ml tarkibi", p:"L-karnitin — 2,0 g<br>Arginin — 0,20 g<br><span style=\"color:var(--ink-mute)\">Yord.: tozalangan suv</span>"}
      ],
      props:[
        {h:"L-karnitin", p:"Hujayralarning energiya almashinuvida ishtirok etadi, yog‘ kislotalari tashilishiga va to‘qimalardagi almashinuv jarayonlarini me’yorlashtirishga yordam beradi."},
        {h:"Arginin", p:"Azot oksidi sintezida ishtirok etuvchi aminokislota, mikrotsirkulyatsiya va to‘qimalar oziqlanishini yaxshilaydi, tomir tonusini qo‘llab-quvvatlaydi."},
        {h:"Birgalikdagi ta’sir", p:"Komponentlar uyg‘unligi sut bezlari salomatligini qo‘llab-quvvatlash va to‘qima almashinuvini yaxshilashga qaratilgan."}
      ],
      areas:[
        {h:"Sut bezlari", p:"Sut bezlari salomatligini qo‘llab-quvvatlash."},
        {h:"Modda almashinuvi", p:"To‘qimalardagi almashinuv jarayonlarini yaxshilash."},
        {h:"Mikrotsirkulyatsiya", p:"Qon aylanishi va to‘qimalar oziqlanishini qo‘llab-quvvatlash."},
        {h:"Tonus", p:"Ayollar salomatligini umumiy qo‘llab-quvvatlash."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Qo‘llashdan oldin yo‘riqnoma bilan tanishib, mutaxassis bilan maslahatlashish tavsiya etiladi.",
      dosageStats:[{n:"№60",l:"qadoqda"},{n:"2",l:"yil yaroqlilik muddati"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Maxsus ko‘rsatmalar", p:"Qo‘llashdan oldin yo‘riqnoma bilan tanishish zarur."},
        {h:"Saqlash sharoiti", p:"Yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"2 yil. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Yaroqlilik muddati o‘tgach ishlatmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "fibromas": {
    cat: "capsules",
    img: "img/prod/fibromas.webp",
    doc: "downloads/fibromas-instrukciya.docx",
    ru: {
      name:"Фибромас",
      heroSub:"Капсулы с индол-3-карбинолом, фукусом, диким ямсом и EGCG. Поддержка здоровья молочной железы и женской репродуктивной системы.",
      introTitle:"Защита женского здоровья",
      introText:"Фибромас — растительный комплекс на основе индол-3-карбинола, экстрактов фукуса и дикого ямса и эпигаллокатехин-3-галлата. Поддерживает здоровье молочной железы и репродуктивной системы, регулирует гормональный баланс.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, №30."},
        {h:"Состав 1 капсулы", p:"Индол-3-карбинол — 150 мг<br>Экстракт фукуса — 50 мг<br>Экстракт дикого ямса — 50 мг · EGCG — 50 мг"}
      ],
      props:[
        {h:"Индол-3-карбинол", p:"Обладает противоопухолевым, антиканцерогенным и детокс-эффектом. Нормализует баланс эстрогенов, блокирует негормональные механизмы развития патологических клеток в матке и молочных железах, улучшает работу печени."},
        {h:"Фукус и EGCG", p:"Фукус нормализует синтез половых гормонов, снижает риск онкологии молочных желёз, действует как антиоксидант. EGCG защищает клетки от свободных радикалов и обладает антиангиогенным действием."},
        {h:"Дикий ямс (диоскорея)", p:"Содержит фитоэстрогены, нормализующие гормональный статус, регулирующие менструальный цикл, поддерживающие тонус половых органов при климаксе и защищающие от остеопороза."}
      ],
      areas:[
        {h:"Репродуктивная система", p:"Здоровье молочной железы, эндометрия, шейки матки, яичников."},
        {h:"Гормональный баланс", p:"Регуляция баланса, помощь при ПМС и климаксе."},
        {h:"Комплексная терапия", p:"Эндометриоз, аденомиоз, миома матки, гиперплазия эндометрия без атипии."},
        {h:"Профилактика", p:"Снижение риска гормонозависимых заболеваний, защита от остеопороза."}
      ],
      dosageText:"Принимается внутрь во время еды. Взрослым и детям старше 12 лет — по 1 капсуле 1 раз в сутки. При необходимости по рекомендации специалиста курс приёма можно повторить.",
      dosageStats:[{n:"1",l:"капсула 1 раз в сутки"},{n:"24",l:"месяца срок годности"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, кормление грудью."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы."
    },
    en: {
      name:"Fibromas",
      heroSub:"Capsules with indole-3-carbinol, fucus, wild yam and EGCG. Support for breast health and the female reproductive system.",
      introTitle:"Protecting women's health",
      introText:"Fibromas is a herbal complex based on indole-3-carbinol, fucus and wild yam extracts and epigallocatechin-3-gallate. It supports breast and reproductive health and regulates hormonal balance.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No.30."},
        {h:"Composition per capsule", p:"Indole-3-carbinol — 150 mg<br>Fucus extract — 50 mg<br>Wild yam extract — 50 mg · EGCG — 50 mg"}
      ],
      props:[
        {h:"Indole-3-carbinol", p:"Has antitumor, anticarcinogenic and detox effects. Normalizes estrogen balance, blocks non-hormonal mechanisms of pathological cell development in the uterus and breasts and improves liver function."},
        {h:"Fucus and EGCG", p:"Fucus normalizes sex-hormone synthesis, reduces breast cancer risk and acts as an antioxidant. EGCG protects cells from free radicals and has an anti-angiogenic effect."},
        {h:"Wild yam (dioscorea)", p:"Contains phytoestrogens that normalize hormonal status, regulate the menstrual cycle, support genital tone during menopause and protect against osteoporosis."}
      ],
      areas:[
        {h:"Reproductive system", p:"Health of the breast, endometrium, cervix and ovaries."},
        {h:"Hormonal balance", p:"Balance regulation, help with PMS and menopause."},
        {h:"Combined therapy", p:"Endometriosis, adenomyosis, uterine fibroids, endometrial hyperplasia without atypia."},
        {h:"Prevention", p:"Reduces the risk of hormone-dependent diseases, protects against osteoporosis."}
      ],
      dosageText:"Taken orally with meals. Adults and children over 12 — 1 capsule once a day. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1",l:"capsule once a day"},{n:"24",l:"months shelf life"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, breastfeeding."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses."
    },
    it: {
      name:"Fibromas",
      heroSub:"Capsule con indolo-3-carbinolo, fuco, igname selvatico ed EGCG. Sostegno alla salute del seno e del sistema riproduttivo femminile.",
      introTitle:"Protezione della salute femminile",
      introText:"Fibromas è un complesso vegetale a base di indolo-3-carbinolo, estratti di fuco e igname selvatico ed epigallocatechina-3-gallato. Sostiene la salute del seno e dell'apparato riproduttivo e regola l'equilibrio ormonale.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n.30."},
        {h:"Composizione per capsula", p:"Indolo-3-carbinolo — 150 mg<br>Estratto di fuco — 50 mg<br>Estratto di igname selvatico — 50 mg · EGCG — 50 mg"}
      ],
      props:[
        {h:"Indolo-3-carbinolo", p:"Ha effetti antitumorali, anticancerogeni e detox. Normalizza l'equilibrio degli estrogeni, blocca i meccanismi non ormonali di sviluppo di cellule patologiche nell'utero e nel seno e migliora la funzione epatica."},
        {h:"Fuco ed EGCG", p:"Il fuco normalizza la sintesi degli ormoni sessuali, riduce il rischio di cancro al seno e agisce come antiossidante. L'EGCG protegge le cellule dai radicali liberi e ha effetto anti-angiogenico."},
        {h:"Igname selvatico (dioscorea)", p:"Contiene fitoestrogeni che normalizzano lo stato ormonale, regolano il ciclo mestruale, sostengono il tono genitale durante la menopausa e proteggono dall'osteoporosi."}
      ],
      areas:[
        {h:"Apparato riproduttivo", p:"Salute di seno, endometrio, cervice e ovaie."},
        {h:"Equilibrio ormonale", p:"Regolazione dell'equilibrio, aiuto con PMS e menopausa."},
        {h:"Terapia combinata", p:"Endometriosi, adenomiosi, fibromi uterini, iperplasia endometriale senza atipia."},
        {h:"Prevenzione", p:"Riduce il rischio di malattie ormono-dipendenti, protegge dall'osteoporosi."}
      ],
      dosageText:"Per uso orale durante i pasti. Adulti e bambini sopra i 12 anni — 1 capsula una volta al giorno. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1",l:"capsula una volta al giorno"},{n:"24",l:"mesi di validità"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate."
    },
    uz: {
      name:"Fibromas",
      heroSub:"Indol-3-karbinol, fukus, yovvoyi yams va EGCG bilan kapsulalar. Sut bezi va ayol reproduktiv tizimi salomatligini qo‘llab-quvvatlash.",
      introTitle:"Ayollar salomatligini himoya qilish",
      introText:"Fibromas — indol-3-karbinol, fukus va yovvoyi yams ekstraktlari va epigallokatexin-3-gallat asosidagi o‘simlik majmuasi. Sut bezi va reproduktiv tizim salomatligini qo‘llab-quvvatlaydi, gormonal muvozanatni tartibga soladi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, №30."},
        {h:"1 kapsula tarkibi", p:"Indol-3-karbinol — 150 mg<br>Fukus ekstrakti — 50 mg<br>Yovvoyi yams ekstrakti — 50 mg · EGCG — 50 mg"}
      ],
      props:[
        {h:"Indol-3-karbinol", p:"O‘smaga qarshi, antikanserogen va detoks ta’siriga ega. Estrogenlar muvozanatini me’yorlashtiradi, bachadon va sut bezlarida patologik hujayralar rivojlanishining nogormonal mexanizmlarini bloklaydi, jigar ishini yaxshilaydi."},
        {h:"Fukus va EGCG", p:"Fukus jinsiy gormonlar sintezini me’yorlashtiradi, sut bezi onkologiyasi xavfini kamaytiradi, antioksidant sifatida ishlaydi. EGCG hujayralarni erkin radikallardan himoya qiladi va antiangiogen ta’sirga ega."},
        {h:"Yovvoyi yams (dioskoreya)", p:"Gormonal holatni me’yorlashtiruvchi, hayz siklini tartibga soluvchi, klimaks davrida jinsiy a’zolar tonusini qo‘llab-quvvatlovchi va osteoporozdan himoya qiluvchi fitoestrogenlar saqlaydi."}
      ],
      areas:[
        {h:"Reproduktiv tizim", p:"Sut bezi, endometriy, bachadon bo‘yni, tuxumdonlar salomatligi."},
        {h:"Gormonal muvozanat", p:"Muvozanatni tartibga solish, HOS va klimaksda yordam."},
        {h:"Majmuaviy terapiya", p:"Endometrioz, adenomioz, bachadon miomasi, atipiyasiz endometriy giperplaziyasi."},
        {h:"Profilaktika", p:"Gormonga bog‘liq kasalliklar xavfini kamaytirish, osteoporozdan himoya."}
      ],
      dosageText:"Ovqat vaqtida og‘iz orqali qabul qilinadi. Kattalar va 12 yoshdan katta bolalarga — kuniga 1 marta 1 kapsuladan. Zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1",l:"kapsula kuniga 1 marta"},{n:"24",l:"oy yaroqlilik muddati"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang."
    }
  },

  "solajen": {
    cat: "capsules",
    img: "img/prod/solajen.webp",
    doc: "downloads/solajen-instrukciya.docx",
    ru: {
      name:"Солажень",
      heroSub:"Капсулы с экстрактами женьшеня и солодки. Защита от простуд, укрепление иммунитета и восстановление энергии.",
      introTitle:"Иммунитет и жизненный тонус",
      introText:"Солажень — комплекс из экстракта корня женьшеня и экстракта солодкового корня. Защищает от простуд и вирусных инфекций, укрепляет иммунитет, восстанавливает энергию и повышает жизненный тонус.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, №60."},
        {h:"Состав 1 капсулы", p:"Экстракт корня женьшеня — 200 мг<br>Экстракт солодкового корня — 250 мг"}
      ],
      props:[
        {h:"Женьшень", p:"Тонизирующее и адаптогенное средство: снимает усталость, повышает работоспособность, стимулирует синтез оксида азота, нормализует уровень половых гормонов, улучшает пищеварение и стабилизирует уровень сахара."},
        {h:"Солодка голая", p:"Один из самых эффективных адаптогенов: иммуномодулирующее, противовирусное, антибактериальное, противовоспалительное и гепатопротекторное действие. Сильный антиоксидант, богата минералами."},
        {h:"Совместное действие", p:"Комбинация двух адаптогенов укрепляет иммунитет, помогает при астении и хронической усталости, оказывает омолаживающий эффект и восстанавливает гормональный баланс."}
      ],
      areas:[
        {h:"Иммунитет", p:"Профилактика ОРЗ, защита от простуд и вирусов."},
        {h:"Энергия", p:"При хронической усталости, восстановление работоспособности."},
        {h:"Детокс и обмен", p:"Детоксикация, нормализация работы щитовидной железы и обмена веществ."},
        {h:"Гормоны", p:"Восстановление гормонального баланса и половой функции."}
      ],
      dosageText:"Принимается внутрь во время еды. Взрослым и детям старше 12 лет — по 1 капсуле 1 раз в сутки. При необходимости по рекомендации специалиста курс приёма можно повторить.",
      dosageStats:[{n:"1",l:"капсула 1 раз в сутки"},{n:"60",l:"капсул в упаковке"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, кормление грудью, детям до 12 лет."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Не использовать после истечения срока годности."
    },
    en: {
      name:"Solajen",
      heroSub:"Capsules with ginseng and licorice extracts. Protection from colds, stronger immunity and energy recovery.",
      introTitle:"Immunity and vitality",
      introText:"Solajen is a complex of ginseng root extract and licorice root extract. It protects against colds and viral infections, strengthens immunity, restores energy and boosts vitality.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No.60."},
        {h:"Composition per capsule", p:"Ginseng root extract — 200 mg<br>Licorice root extract — 250 mg"}
      ],
      props:[
        {h:"Ginseng", p:"A tonic and adaptogen: relieves fatigue, increases performance, stimulates nitric oxide synthesis, normalizes sex-hormone levels, improves digestion and stabilizes blood sugar."},
        {h:"Licorice", p:"One of the most effective adaptogens: immunomodulatory, antiviral, antibacterial, anti-inflammatory and hepatoprotective action. A strong antioxidant rich in minerals."},
        {h:"Combined action", p:"The combination of two adaptogens strengthens immunity, helps with asthenia and chronic fatigue, has a rejuvenating effect and restores hormonal balance."}
      ],
      areas:[
        {h:"Immunity", p:"Prevention of acute respiratory infections, protection from colds and viruses."},
        {h:"Energy", p:"For chronic fatigue, restoration of working capacity."},
        {h:"Detox & metabolism", p:"Detoxification, normalization of thyroid function and metabolism."},
        {h:"Hormones", p:"Restoration of hormonal balance and sexual function."}
      ],
      dosageText:"Taken orally with meals. Adults and children over 12 — 1 capsule once a day. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1",l:"capsule once a day"},{n:"60",l:"capsules per pack"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, breastfeeding, children under 12 years."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Do not use after the expiry date."
    },
    it: {
      name:"Solajen",
      heroSub:"Capsule con estratti di ginseng e liquirizia. Protezione dai raffreddori, immunità più forte e recupero dell'energia.",
      introTitle:"Immunità e vitalità",
      introText:"Solajen è un complesso di estratto di radice di ginseng ed estratto di radice di liquirizia. Protegge da raffreddori e infezioni virali, rafforza l'immunità, ripristina l'energia e aumenta la vitalità.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n.60."},
        {h:"Composizione per capsula", p:"Estratto di radice di ginseng — 200 mg<br>Estratto di radice di liquirizia — 250 mg"}
      ],
      props:[
        {h:"Ginseng", p:"Un tonico e adattogeno: allevia la stanchezza, aumenta le prestazioni, stimola la sintesi di ossido nitrico, normalizza i livelli ormonali, migliora la digestione e stabilizza la glicemia."},
        {h:"Liquirizia", p:"Uno degli adattogeni più efficaci: azione immunomodulante, antivirale, antibatterica, antinfiammatoria ed epatoprotettiva. Un potente antiossidante ricco di minerali."},
        {h:"Azione combinata", p:"La combinazione di due adattogeni rafforza l'immunità, aiuta in caso di astenia e stanchezza cronica, ha effetto ringiovanente e ripristina l'equilibrio ormonale."}
      ],
      areas:[
        {h:"Immunità", p:"Prevenzione delle infezioni respiratorie, protezione da raffreddori e virus."},
        {h:"Energia", p:"In caso di stanchezza cronica, ripristino della capacità lavorativa."},
        {h:"Detox e metabolismo", p:"Disintossicazione, normalizzazione della funzione tiroidea e del metabolismo."},
        {h:"Ormoni", p:"Ripristino dell'equilibrio ormonale e della funzione sessuale."}
      ],
      dosageText:"Per uso orale durante i pasti. Adulti e bambini sopra i 12 anni — 1 capsula una volta al giorno. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1",l:"capsula una volta al giorno"},{n:"60",l:"capsule per confezione"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento, bambini sotto i 12 anni."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Non usare dopo la data di scadenza."
    },
    uz: {
      name:"Solajen",
      heroSub:"Jenshen va qizilmiya ekstraktlari bilan kapsulalar. Shamollashdan himoya, immunitetni mustahkamlash va energiyani tiklash.",
      introTitle:"Immunitet va hayotiy tetiklik",
      introText:"Solajen — jenshen ildizi ekstrakti va qizilmiya ildizi ekstraktidan iborat majmua. Shamollash va virusli infeksiyalardan himoya qiladi, immunitetni mustahkamlaydi, energiyani tiklaydi va hayotiy tetiklikni oshiradi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, №60."},
        {h:"1 kapsula tarkibi", p:"Jenshen ildizi ekstrakti — 200 mg<br>Qizilmiya ildizi ekstrakti — 250 mg"}
      ],
      props:[
        {h:"Jenshen", p:"Tetiklashtiruvchi va adaptogen vosita: charchoqni bartaraf etadi, ish qobiliyatini oshiradi, azot oksidi sintezini rag‘batlantiradi, jinsiy gormonlar darajasini me’yorlashtiradi, hazmni yaxshilaydi va qand darajasini barqarorlashtiradi."},
        {h:"Qizilmiya", p:"Eng samarali adaptogenlardan biri: immunomodulyator, virusga qarshi, antibakterial, yallig‘lanishga qarshi va gepatoprotektor ta’sir. Kuchli antioksidant, minerallar bilan boy."},
        {h:"Birgalikdagi ta’sir", p:"Ikki adaptogen uyg‘unligi immunitetni mustahkamlaydi, asteniya va surunkali charchoqda yordam beradi, yoshartiruvchi ta’sir ko‘rsatadi va gormonal muvozanatni tiklaydi."}
      ],
      areas:[
        {h:"Immunitet", p:"O‘RK profilaktikasi, shamollash va viruslardan himoya."},
        {h:"Energiya", p:"Surunkali charchoqda, ish qobiliyatini tiklash."},
        {h:"Detoks va almashinuv", p:"Detoksikatsiya, qalqonsimon bez va modda almashinuvini me’yorlashtirish."},
        {h:"Gormonlar", p:"Gormonal muvozanat va jinsiy faoliyatni tiklash."}
      ],
      dosageText:"Ovqat vaqtida og‘iz orqali qabul qilinadi. Kattalar va 12 yoshdan katta bolalarga — kuniga 1 marta 1 kapsuladan. Zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1",l:"kapsula kuniga 1 marta"},{n:"60",l:"kapsula qadoqda"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish, 12 yoshgacha bo‘lgan bolalar."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Yaroqlilik muddati o‘tgach ishlatmang."
    }
  },

  "alfa-glumin": {
    cat: "capsules",
    img: "img/prod/alfa-glumin.webp",
    doc: "downloads/alfa-glumin-instrukciya.docx",
    ru: {
      name:"Альфа-Глумин",
      heroSub:"Капсулы с адеметионином, глутатионом и альфа-липоевой кислотой. Гепатопротектор для защиты печени и здоровья кожи.",
      introTitle:"Защита и восстановление печени",
      introText:"Альфа-Глумин — комплекс гепатопротекторов и антиоксидантов: адеметионин, глутатион и альфа-липоевая кислота. Поддерживает работу печени при гепатитах различной этиологии, способствует детоксикации и здоровью кожи.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, №30."},
        {h:"Состав 1 капсулы", p:"Адеметионин — 200 мг<br>Глутатион — 150 мг<br>Альфа-липоевая кислота — 150 мг"}
      ],
      props:[
        {h:"Адеметионин", p:"Относится к группе гепатопротекторов. Оказывает желчегонное действие, обладает детоксикационным, регенерирующим, антиоксидантным, антифиброзирующим и нейропротекторным свойствами."},
        {h:"Глутатион", p:"Мощный внутриклеточный антиоксидант. Связывает свободные радикалы и токсины, поддерживает детоксикацию печени, защищает клетки от окислительного стресса."},
        {h:"Альфа-липоевая кислота", p:"Универсальный антиоксидант, участвует в энергетическом обмене, защищает клетки печени и нервную ткань, нормализует обмен липидов и углеводов."}
      ],
      areas:[
        {h:"Печень", p:"Острые и хронические гепатиты различной этиологии."},
        {h:"Кожа", p:"Кожные заболевания различной этиологии."},
        {h:"Нервная система", p:"Печёночная энцефалопатия."},
        {h:"Обмен липидов", p:"Гиперлипидемия."}
      ],
      dosageText:"Принимается внутрь во время еды. Взрослым и детям старше 12 лет — по 1 капсуле 1–2 раза в сутки. Продолжительность приёма устанавливается индивидуально, при необходимости по рекомендации специалиста курс можно повторить.",
      dosageStats:[{n:"1–2",l:"капсулы в сутки"},{n:"36",l:"месяцев срок годности"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, кормление грудью."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"36 месяцев. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы."
    },
    en: {
      name:"Alfa-Glumin",
      heroSub:"Capsules with ademetionine, glutathione and alpha-lipoic acid. A hepatoprotector for liver protection and skin health.",
      introTitle:"Liver protection and recovery",
      introText:"Alfa-Glumin is a complex of hepatoprotectors and antioxidants: ademetionine, glutathione and alpha-lipoic acid. It supports liver function in hepatitis of various etiologies, aids detoxification and skin health.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No.30."},
        {h:"Composition per capsule", p:"Ademetionine — 200 mg<br>Glutathione — 150 mg<br>Alpha-lipoic acid — 150 mg"}
      ],
      props:[
        {h:"Ademetionine", p:"Belongs to the group of hepatoprotectors. Has a choleretic action and detoxifying, regenerating, antioxidant, antifibrotic and neuroprotective properties."},
        {h:"Glutathione", p:"A powerful intracellular antioxidant. Binds free radicals and toxins, supports liver detoxification and protects cells from oxidative stress."},
        {h:"Alpha-lipoic acid", p:"A universal antioxidant, involved in energy metabolism, protects liver cells and nerve tissue and normalizes lipid and carbohydrate metabolism."}
      ],
      areas:[
        {h:"Liver", p:"Acute and chronic hepatitis of various etiologies."},
        {h:"Skin", p:"Skin diseases of various etiologies."},
        {h:"Nervous system", p:"Hepatic encephalopathy."},
        {h:"Lipid metabolism", p:"Hyperlipidemia."}
      ],
      dosageText:"Taken orally with meals. Adults and children over 12 — 1 capsule 1–2 times a day. Duration is set individually; may be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1–2",l:"capsules a day"},{n:"36",l:"months shelf life"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, breastfeeding."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"36 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses."
    },
    it: {
      name:"Alfa-Glumin",
      heroSub:"Capsule con ademetionina, glutatione e acido alfa-lipoico. Un epatoprotettore per la protezione del fegato e la salute della pelle.",
      introTitle:"Protezione e recupero del fegato",
      introText:"Alfa-Glumin è un complesso di epatoprotettori e antiossidanti: ademetionina, glutatione e acido alfa-lipoico. Sostiene la funzione epatica nelle epatiti di varia eziologia, favorisce la disintossicazione e la salute della pelle.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n.30."},
        {h:"Composizione per capsula", p:"Ademetionina — 200 mg<br>Glutatione — 150 mg<br>Acido alfa-lipoico — 150 mg"}
      ],
      props:[
        {h:"Ademetionina", p:"Appartiene al gruppo degli epatoprotettori. Ha azione coleretica e proprietà disintossicanti, rigeneranti, antiossidanti, antifibrotiche e neuroprotettive."},
        {h:"Glutatione", p:"Un potente antiossidante intracellulare. Lega radicali liberi e tossine, sostiene la disintossicazione epatica e protegge le cellule dallo stress ossidativo."},
        {h:"Acido alfa-lipoico", p:"Un antiossidante universale, coinvolto nel metabolismo energetico, protegge le cellule epatiche e il tessuto nervoso e normalizza il metabolismo di lipidi e carboidrati."}
      ],
      areas:[
        {h:"Fegato", p:"Epatiti acute e croniche di varia eziologia."},
        {h:"Pelle", p:"Malattie cutanee di varia eziologia."},
        {h:"Sistema nervoso", p:"Encefalopatia epatica."},
        {h:"Metabolismo lipidico", p:"Iperlipidemia."}
      ],
      dosageText:"Per uso orale durante i pasti. Adulti e bambini sopra i 12 anni — 1 capsula 1–2 volte al giorno. La durata è stabilita individualmente; ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1–2",l:"capsule al giorno"},{n:"36",l:"mesi di validità"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"36 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate."
    },
    uz: {
      name:"Alfa-Glumin",
      heroSub:"Ademetionin, glutation va alfa-lipoy kislotasi bilan kapsulalar. Jigarni himoya qilish va teri salomatligi uchun gepatoprotektor.",
      introTitle:"Jigarni himoya qilish va tiklash",
      introText:"Alfa-Glumin — gepatoprotektorlar va antioksidantlar majmuasi: ademetionin, glutation va alfa-lipoy kislotasi. Turli kelib chiqishli gepatitlarda jigar ishini qo‘llab-quvvatlaydi, detoksikatsiya va teri salomatligiga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, №30."},
        {h:"1 kapsula tarkibi", p:"Ademetionin — 200 mg<br>Glutation — 150 mg<br>Alfa-lipoy kislotasi — 150 mg"}
      ],
      props:[
        {h:"Ademetionin", p:"Gepatoprotektorlar guruhiga kiradi. O‘t haydovchi ta’sir ko‘rsatadi, detoksikatsion, regeneratsion, antioksidant, antifibrozlovchi va neyroprotektor xususiyatlarga ega."},
        {h:"Glutation", p:"Kuchli hujayra ichi antioksidanti. Erkin radikallar va toksinlarni bog‘laydi, jigar detoksikatsiyasini qo‘llab-quvvatlaydi, hujayralarni oksidlovchi stressdan himoya qiladi."},
        {h:"Alfa-lipoy kislotasi", p:"Universal antioksidant, energiya almashinuvida ishtirok etadi, jigar hujayralari va asab to‘qimasini himoya qiladi, lipid va uglevod almashinuvini me’yorlashtiradi."}
      ],
      areas:[
        {h:"Jigar", p:"Turli kelib chiqishli o‘tkir va surunkali gepatitlar."},
        {h:"Teri", p:"Turli kelib chiqishli teri kasalliklari."},
        {h:"Asab tizimi", p:"Jigar ensefalopatiyasi."},
        {h:"Lipid almashinuvi", p:"Giperlipidemiya."}
      ],
      dosageText:"Ovqat vaqtida og‘iz orqali qabul qilinadi. Kattalar va 12 yoshdan katta bolalarga — kuniga 1–2 marta 1 kapsuladan. Qabul davomiyligi individual belgilanadi, zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1–2",l:"kapsula kuniga"},{n:"36",l:"oy yaroqlilik muddati"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"36 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang."
    }
  },

  "luton": {
    cat: "capsules",
    img: "img/prod/luton.webp",
    doc: "downloads/luton-instrukciya.docx",
    ru: {
      name:"Лютон",
      heroSub:"Капсулы для улучшения зрения с черникой, лютеином, зеаксантином и витаминами. Защита сетчатки и снятие усталости глаз.",
      introTitle:"Здоровье и острота зрения",
      introText:"Лютон — лютеиновый комплекс с экстрактом черники, зеаксантином, цинком, селеном и витаминами А, Е, С. Защищает сетчатку от агрессивного воздействия солнечного света и помогает при зрительном напряжении.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, №30."},
        {h:"Состав 1 капсулы", p:"Черника — 100 мг · Лютеин — 10 мг<br>Зеаксантин — 2 мг · Цинк — 5 мг · Селен — 0,055 мг<br>Вит. А — 1 мг · Е — 10 мг · С — 100 мг · Рутин — 30 мг"}
      ],
      props:[
        {h:"Экстракт черники", p:"Природный каротиноид с органическими кислотами и минералами. Усиливает остроту зрения, увеличивает поле зрения и уменьшает усталость глаз."},
        {h:"Лютеин и зеаксантин", p:"Растительные пигменты-каротиноиды (ксантофиллы), критически важные для здоровья хрусталика и жёлтого пятна сетчатки."},
        {h:"Витамины и микроэлементы", p:"Цинк поддерживает уровень витамина А; витамины А, С, Е улучшают цветовое восприятие, регенерацию и защиту капилляров; селен — антиоксидант, защищающий ткани глаза."}
      ],
      areas:[
        {h:"Защита сетчатки", p:"Защита от агрессивного воздействия солнечного света."},
        {h:"Зрительное напряжение", p:"При длительном чтении и работе с компьютером."},
        {h:"Острота зрения", p:"Усиливает остроту и расширяет поле зрения."},
        {h:"Антиоксидант", p:"Защита тканей глаза от кислородных радикалов."}
      ],
      dosageText:"Принимается внутрь. Взрослым и детям старше 6 лет — по 1 капсуле 1 раз в сутки во время еды. При необходимости по рекомендации специалиста курс приёма можно повторить.",
      dosageStats:[{n:"1",l:"капсула 1 раз в сутки"},{n:"30",l:"капсул в упаковке"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, кормление грудью, детям до 6 лет."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарством."}
      ],
      legal:"БАД. Не является лекарством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Luton",
      heroSub:"Eye-health capsules with bilberry, lutein, zeaxanthin and vitamins. Retina protection and relief from eye strain.",
      introTitle:"Eye health and sharp vision",
      introText:"Luton is a lutein complex with bilberry extract, zeaxanthin, zinc, selenium and vitamins A, E and C. It protects the retina from aggressive sunlight and helps with eye strain.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No.30."},
        {h:"Composition per capsule", p:"Bilberry — 100 mg · Lutein — 10 mg<br>Zeaxanthin — 2 mg · Zinc — 5 mg · Selenium — 0.055 mg<br>Vit. A — 1 mg · E — 10 mg · C — 100 mg · Rutin — 30 mg"}
      ],
      props:[
        {h:"Bilberry extract", p:"A natural carotenoid with organic acids and minerals. Enhances visual acuity, widens the field of vision and reduces eye fatigue."},
        {h:"Lutein & zeaxanthin", p:"Plant carotenoid pigments (xanthophylls), critically important for the health of the lens and the macula of the retina."},
        {h:"Vitamins & trace elements", p:"Zinc maintains vitamin A levels; vitamins A, C, E improve color perception, regeneration and capillary protection; selenium is an antioxidant protecting eye tissue."}
      ],
      areas:[
        {h:"Retina protection", p:"Protection from aggressive sunlight."},
        {h:"Eye strain", p:"For prolonged reading and computer work."},
        {h:"Visual acuity", p:"Enhances acuity and widens the field of vision."},
        {h:"Antioxidant", p:"Protects eye tissue from oxygen radicals."}
      ],
      dosageText:"Taken orally. Adults and children over 6 — 1 capsule once a day with meals. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1",l:"capsule once a day"},{n:"30",l:"capsules per pack"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, breastfeeding, children under 6 years."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Luton",
      heroSub:"Capsule per la salute degli occhi con mirtillo, luteina, zeaxantina e vitamine. Protezione della retina e sollievo dall'affaticamento visivo.",
      introTitle:"Salute degli occhi e vista nitida",
      introText:"Luton è un complesso alla luteina con estratto di mirtillo, zeaxantina, zinco, selenio e vitamine A, E e C. Protegge la retina dalla luce solare aggressiva e aiuta in caso di affaticamento visivo.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n.30."},
        {h:"Composizione per capsula", p:"Mirtillo — 100 mg · Luteina — 10 mg<br>Zeaxantina — 2 mg · Zinco — 5 mg · Selenio — 0,055 mg<br>Vit. A — 1 mg · E — 10 mg · C — 100 mg · Rutina — 30 mg"}
      ],
      props:[
        {h:"Estratto di mirtillo", p:"Un carotenoide naturale con acidi organici e minerali. Migliora l'acuità visiva, amplia il campo visivo e riduce l'affaticamento degli occhi."},
        {h:"Luteina e zeaxantina", p:"Pigmenti carotenoidi vegetali (xantofille), di importanza critica per la salute del cristallino e della macula della retina."},
        {h:"Vitamine e oligoelementi", p:"Lo zinco mantiene i livelli di vitamina A; le vitamine A, C, E migliorano la percezione dei colori, la rigenerazione e la protezione dei capillari; il selenio è un antiossidante che protegge i tessuti oculari."}
      ],
      areas:[
        {h:"Protezione della retina", p:"Protezione dalla luce solare aggressiva."},
        {h:"Affaticamento visivo", p:"Per lettura prolungata e lavoro al computer."},
        {h:"Acuità visiva", p:"Migliora l'acuità e amplia il campo visivo."},
        {h:"Antiossidante", p:"Protegge i tessuti oculari dai radicali dell'ossigeno."}
      ],
      dosageText:"Per uso orale. Adulti e bambini sopra i 6 anni — 1 capsula una volta al giorno durante i pasti. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1",l:"capsula una volta al giorno"},{n:"30",l:"capsule per confezione"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento, bambini sotto i 6 anni."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Luton",
      heroSub:"Chernika, lyutein, zeaksantin va vitaminlar bilan ko‘rishni yaxshilash kapsulalari. To‘r pardani himoya qilish va ko‘z charchog‘ini bartaraf etish.",
      introTitle:"Ko‘z salomatligi va o‘tkir ko‘rish",
      introText:"Luton — chernika ekstrakti, zeaksantin, rux, selen va A, E, C vitaminlari bilan lyutein majmuasi. To‘r pardani quyosh nurining agressiv ta’siridan himoya qiladi va ko‘z zo‘riqishida yordam beradi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, №30."},
        {h:"1 kapsula tarkibi", p:"Chernika — 100 mg · Lyutein — 10 mg<br>Zeaksantin — 2 mg · Rux — 5 mg · Selen — 0,055 mg<br>A vit. — 1 mg · E — 10 mg · C — 100 mg · Rutin — 30 mg"}
      ],
      props:[
        {h:"Chernika ekstrakti", p:"Organik kislotalar va minerallar bilan tabiiy karotinoid. Ko‘rish o‘tkirligini kuchaytiradi, ko‘rish maydonini kengaytiradi va ko‘z charchog‘ini kamaytiradi."},
        {h:"Lyutein va zeaksantin", p:"Gavhar va to‘r parda sariq dog‘i salomatligi uchun juda muhim bo‘lgan o‘simlik pigment-karotinoidlari (ksantofillar)."},
        {h:"Vitaminlar va mikroelementlar", p:"Rux A vitamini darajasini qo‘llab-quvvatlaydi; A, C, E vitaminlari rang idrokini, regeneratsiyani va kapillyarlar himoyasini yaxshilaydi; selen — ko‘z to‘qimasini himoya qiluvchi antioksidant."}
      ],
      areas:[
        {h:"To‘r pardani himoya", p:"Quyosh nurining agressiv ta’siridan himoya."},
        {h:"Ko‘z zo‘riqishi", p:"Uzoq o‘qish va kompyuterda ishlashda."},
        {h:"Ko‘rish o‘tkirligi", p:"O‘tkirlikni kuchaytiradi va ko‘rish maydonini kengaytiradi."},
        {h:"Antioksidant", p:"Ko‘z to‘qimasini kislorod radikallaridan himoya qilish."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalar va 6 yoshdan katta bolalarga — kuniga 1 marta ovqat vaqtida 1 kapsuladan. Zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1",l:"kapsula kuniga 1 marta"},{n:"30",l:"kapsula qadoqda"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish, 6 yoshgacha bo‘lgan bolalar."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori emas."}
      ],
      legal:"BAD. Dori emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "treptovelum": {
    cat: "capsules",
    img: "img/prod/treptovelum.webp",
    doc: "downloads/treptovelum-instrukciya.docx",
    ru: {
      name:"Трептовелл УМ",
      heroSub:"Капсулы с 5-гидрокситриптофаном. Естественная поддержка настроения, стрессоустойчивости и качественного сна.",
      introTitle:"Спокойствие, настроение и сон",
      introText:"Трептовелл УМ содержит 5-гидрокситриптофан (5-HTP) — естественный предшественник серотонина и мелатонина. Уменьшает влияние стресса, улучшает настроение и способствует качественному сну.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы по 0,5 г, №20."},
        {h:"Состав 1 капсулы", p:"5-гидрокситриптофан (5-HTP) — 100 мг<br>Вспомогательные: магния стеарат, кукурузный крахмал"}
      ],
      props:[
        {h:"5-HTP — предшественник серотонина", p:"Аминокислота, входящая в состав белков и являющаяся предшественником нейромедиатора серотонина — «гормона радости» и позитивного настроя."},
        {h:"Естественный антидепрессант", p:"Нелекарственный растительный естественный антидепрессант, способствующий синтезу серотонина и мелатонина — регулятора сна и суточных биоритмов."},
        {h:"Накопительный эффект", p:"В отличие от синтетических средств, 5-HTP естественен для организма. Имеет накопительный эффект, повышает дневную активность и работоспособность."}
      ],
      areas:[
        {h:"Стресс и настроение", p:"Снижает влияние стресса, тревожность и раздражительность."},
        {h:"Сон", p:"Улучшает качество и продолжительность сна, помогает при смене часовых поясов."},
        {h:"Аппетит", p:"Помогает контролировать аппетит, снижает тягу к сладкому."},
        {h:"Когнитивные функции", p:"Улучшает память, внимание и концентрацию."}
      ],
      dosageText:"Принимается внутрь. Взрослым — по 1 капсуле 1–2 раза в день после еды. При необходимости приём можно увеличить до 4 капсул (максимальная суточная доза 400 мг). Продолжительность приёма — не менее 1 месяца, при необходимости до 6 недель.",
      dosageStats:[{n:"1–2",l:"капсулы в день"},{n:"400 мг",l:"макс. суточная доза"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Имеет накопительный эффект. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы."
    },
    en: {
      name:"Treptovell UM",
      heroSub:"Capsules with 5-HTP. Natural support for mood, stress resistance and quality sleep.",
      introTitle:"Calm, mood and sleep",
      introText:"Treptovell UM contains 5-hydroxytryptophan (5-HTP) — a natural precursor of serotonin and melatonin. It reduces the impact of stress, improves mood and promotes quality sleep.",
      infoCards:[
        {h:"Form", p:"Capsules 0.5 g, No.20."},
        {h:"Composition per capsule", p:"5-hydroxytryptophan (5-HTP) — 100 mg<br>Excipients: magnesium stearate, corn starch"}
      ],
      props:[
        {h:"5-HTP — serotonin precursor", p:"An amino acid found in proteins and a precursor of the neurotransmitter serotonin — the hormone of joy and positive mood."},
        {h:"Natural antidepressant", p:"A non-medicinal, natural plant antidepressant that promotes the synthesis of serotonin and melatonin — the regulator of sleep and circadian rhythms."},
        {h:"Cumulative effect", p:"Unlike synthetic agents, 5-HTP is natural to the body. It has a cumulative effect, increases daytime activity and performance."}
      ],
      areas:[
        {h:"Stress & mood", p:"Reduces the impact of stress, anxiety and irritability."},
        {h:"Sleep", p:"Improves sleep quality and duration, helps with jet lag."},
        {h:"Appetite", p:"Helps control appetite, reduces sugar cravings."},
        {h:"Cognitive function", p:"Improves memory, attention and concentration."}
      ],
      dosageText:"Taken orally. Adults — 1 capsule 1–2 times a day after meals. If needed, may be increased to 4 capsules (maximum daily dose 400 mg). Duration: at least 1 month, up to 6 weeks if needed.",
      dosageStats:[{n:"1–2",l:"capsules a day"},{n:"400 mg",l:"max daily dose"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Has a cumulative effect. Consultation with a specialist is recommended before use. Do not exceed the recommended doses."
    },
    it: {
      name:"Treptovell UM",
      heroSub:"Capsule con 5-HTP. Sostegno naturale per umore, resistenza allo stress e sonno di qualità.",
      introTitle:"Calma, umore e sonno",
      introText:"Treptovell UM contiene 5-idrossitriptofano (5-HTP) — un precursore naturale di serotonina e melatonina. Riduce l'impatto dello stress, migliora l'umore e favorisce un sonno di qualità.",
      infoCards:[
        {h:"Formato", p:"Capsule 0,5 g, n.20."},
        {h:"Composizione per capsula", p:"5-idrossitriptofano (5-HTP) — 100 mg<br>Eccipienti: stearato di magnesio, amido di mais"}
      ],
      props:[
        {h:"5-HTP — precursore della serotonina", p:"Un amminoacido presente nelle proteine e precursore del neurotrasmettitore serotonina — l'ormone della gioia e del buon umore."},
        {h:"Antidepressivo naturale", p:"Un antidepressivo vegetale naturale non farmacologico che favorisce la sintesi di serotonina e melatonina — il regolatore del sonno e dei ritmi circadiani."},
        {h:"Effetto cumulativo", p:"A differenza dei prodotti sintetici, il 5-HTP è naturale per l'organismo. Ha un effetto cumulativo, aumenta l'attività diurna e le prestazioni."}
      ],
      areas:[
        {h:"Stress e umore", p:"Riduce l'impatto dello stress, l'ansia e l'irritabilità."},
        {h:"Sonno", p:"Migliora la qualità e la durata del sonno, aiuta con il jet lag."},
        {h:"Appetito", p:"Aiuta a controllare l'appetito, riduce il desiderio di dolci."},
        {h:"Funzioni cognitive", p:"Migliora memoria, attenzione e concentrazione."}
      ],
      dosageText:"Per uso orale. Adulti — 1 capsula 1–2 volte al giorno dopo i pasti. Se necessario, aumentabile a 4 capsule (dose massima giornaliera 400 mg). Durata: almeno 1 mese, fino a 6 settimane se necessario.",
      dosageStats:[{n:"1–2",l:"capsule al giorno"},{n:"400 mg",l:"dose max giornaliera"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Ha un effetto cumulativo. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate."
    },
    uz: {
      name:"Treptovell UM",
      heroSub:"5-gidroksitriptofan bilan kapsulalar. Kayfiyat, stressga chidamlilik va sifatli uyquni tabiiy qo‘llab-quvvatlash.",
      introTitle:"Xotirjamlik, kayfiyat va uyqu",
      introText:"Treptovell UM tarkibida 5-gidroksitriptofan (5-HTP) — serotonin va melatoninning tabiiy o‘tmishdoshi mavjud. Stress ta’sirini kamaytiradi, kayfiyatni yaxshilaydi va sifatli uyquga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"0,5 g li kapsulalar, №20."},
        {h:"1 kapsula tarkibi", p:"5-gidroksitriptofan (5-HTP) — 100 mg<br>Yordamchi: magniy stearati, makkajo‘xori kraxmali"}
      ],
      props:[
        {h:"5-HTP — serotonin o‘tmishdoshi", p:"Oqsillar tarkibiga kiruvchi va «quvonch gormoni» hamda ijobiy kayfiyat neyromediatori serotoninning o‘tmishdoshi bo‘lgan aminokislota."},
        {h:"Tabiiy antidepressant", p:"Serotonin va uyqu hamda sutkalik bioritmlar regulyatori melatonin sinteziga yordam beruvchi nodori tabiiy o‘simlik antidepressanti."},
        {h:"To‘planuvchi ta’sir", p:"Sintetik vositalardan farqli o‘laroq, 5-HTP organizm uchun tabiiydir. To‘planuvchi ta’sirga ega, kunduzgi faollik va ish qobiliyatini oshiradi."}
      ],
      areas:[
        {h:"Stress va kayfiyat", p:"Stress ta’siri, tashvish va asabiylikni kamaytiradi."},
        {h:"Uyqu", p:"Uyqu sifati va davomiyligini yaxshilaydi, vaqt mintaqalari almashinuvida yordam beradi."},
        {h:"Ishtaha", p:"Ishtahani nazorat qilishga yordam beradi, shirinlikka moyillikni kamaytiradi."},
        {h:"Kognitiv funksiyalar", p:"Xotira, diqqat va konsentratsiyani yaxshilaydi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalarga — ovqatdan keyin kuniga 1–2 marta 1 kapsuladan. Zarur bo‘lganda qabulni 4 kapsulagacha oshirish mumkin (maksimal sutkalik doza 400 mg). Qabul davomiyligi — kamida 1 oy, zarur bo‘lganda 6 haftagacha.",
      dosageStats:[{n:"1–2",l:"kapsula kuniga"},{n:"400 mg",l:"maks. sutkalik doza"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. To‘planuvchi ta’sirga ega. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang."
    }
  },

  "demifol": {
    cat: "powders",
    img: "img/prod/demifol.webp",
    ru: {
      name:"Демифол",
      heroSub:"Порошок для приготовления раствора для приёма внутрь. Для нормализации женского гормонального баланса и общего тонуса.",
      introTitle:"Женский гормональный баланс",
      introText:"Демифол — порошок для приготовления раствора для приёма внутрь по 5 г. Способствует нормализации женского гормонального баланса, поддержанию репродуктивного здоровья и общего тонуса организма.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приготовления раствора для приёма внутрь по 5 г."},
        {h:"Назначение", p:"Нормализация женского гормонального баланса и общего тонуса."}
      ],
      props:[
        {h:"Гормональный баланс", p:"Растительный комплекс способствует мягкой регуляции женского гормонального фона."},
        {h:"Репродуктивное здоровье", p:"Поддерживает здоровье женской репродуктивной системы."},
        {h:"Общий тонус", p:"Помогает поддерживать жизненный тонус и хорошее самочувствие."}
      ],
      areas:[
        {h:"Гормональный фон", p:"Нормализация гормонального баланса."},
        {h:"Женское здоровье", p:"Поддержка репродуктивной системы."},
        {h:"Тонус", p:"Повышение общего тонуса организма."},
        {h:"Самочувствие", p:"Улучшение общего самочувствия."}
      ],
      dosageText:"Содержимое одного саше (5 г) растворить в стакане воды и принимать внутрь. Способ применения и точную дозировку уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"5 г",l:"одно саше на приём"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, кормление грудью."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Demifol",
      heroSub:"Powder for an oral solution. For the normalization of female hormonal balance and overall vitality.",
      introTitle:"Female hormonal balance",
      introText:"Demifol is a powder for preparing an oral solution (5 g sachets). It helps normalize female hormonal balance, support reproductive health and overall body tone.",
      infoCards:[
        {h:"Form", p:"Powder for an oral solution, 5 g sachets."},
        {h:"Purpose", p:"Normalization of female hormonal balance and overall vitality."}
      ],
      props:[
        {h:"Hormonal balance", p:"A herbal complex that supports gentle regulation of the female hormonal background."},
        {h:"Reproductive health", p:"Supports the health of the female reproductive system."},
        {h:"Overall tone", p:"Helps maintain vitality and wellbeing."}
      ],
      areas:[
        {h:"Hormonal background", p:"Normalization of hormonal balance."},
        {h:"Women's health", p:"Support of the reproductive system."},
        {h:"Tone", p:"Boosts overall body tone."},
        {h:"Wellbeing", p:"Improves general wellbeing."}
      ],
      dosageText:"Dissolve the contents of one sachet (5 g) in a glass of water and take orally. Check the exact method and dosage in the product leaflet or with a specialist.",
      dosageStats:[{n:"5 g",l:"one sachet per intake"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, breastfeeding."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Demifol",
      heroSub:"Polvere per soluzione orale. Per la normalizzazione dell'equilibrio ormonale femminile e della vitalità generale.",
      introTitle:"Equilibrio ormonale femminile",
      introText:"Demifol è una polvere per preparare una soluzione orale (bustine da 5 g). Aiuta a normalizzare l'equilibrio ormonale femminile, sostiene la salute riproduttiva e il tono generale dell'organismo.",
      infoCards:[
        {h:"Formato", p:"Polvere per soluzione orale, bustine da 5 g."},
        {h:"Destinazione", p:"Normalizzazione dell'equilibrio ormonale femminile e della vitalità generale."}
      ],
      props:[
        {h:"Equilibrio ormonale", p:"Un complesso vegetale che favorisce una delicata regolazione del quadro ormonale femminile."},
        {h:"Salute riproduttiva", p:"Sostiene la salute dell'apparato riproduttivo femminile."},
        {h:"Tono generale", p:"Aiuta a mantenere vitalità e benessere."}
      ],
      areas:[
        {h:"Quadro ormonale", p:"Normalizzazione dell'equilibrio ormonale."},
        {h:"Salute femminile", p:"Sostegno dell'apparato riproduttivo."},
        {h:"Tono", p:"Aumenta il tono generale dell'organismo."},
        {h:"Benessere", p:"Migliora il benessere generale."}
      ],
      dosageText:"Sciogliere il contenuto di una bustina (5 g) in un bicchiere d'acqua e assumere per via orale. Verificare il metodo esatto e il dosaggio nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"5 g",l:"una bustina per assunzione"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Demifol",
      heroSub:"Ichimlik eritmasini tayyorlash uchun kukun. Ayol gormonal muvozanati va umumiy tetiklikni me’yorlashtirish uchun.",
      introTitle:"Ayol gormonal muvozanati",
      introText:"Demifol — ichimlik eritmasini tayyorlash uchun 5 g li kukun. Ayol gormonal muvozanatini me’yorlashtirishga, reproduktiv salomatlik va organizmning umumiy tetikligini qo‘llab-quvvatlashga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasini tayyorlash uchun 5 g li kukun."},
        {h:"Vazifasi", p:"Ayol gormonal muvozanati va umumiy tetiklikni me’yorlashtirish."}
      ],
      props:[
        {h:"Gormonal muvozanat", p:"O‘simlik majmuasi ayol gormonal fonini yumshoq tartibga solishga yordam beradi."},
        {h:"Reproduktiv salomatlik", p:"Ayol reproduktiv tizimi salomatligini qo‘llab-quvvatlaydi."},
        {h:"Umumiy tetiklik", p:"Hayotiy tetiklik va yaxshi kayfiyatni qo‘llab-quvvatlashga yordam beradi."}
      ],
      areas:[
        {h:"Gormonal fon", p:"Gormonal muvozanatni me’yorlashtirish."},
        {h:"Ayollar salomatligi", p:"Reproduktiv tizimni qo‘llab-quvvatlash."},
        {h:"Tetiklik", p:"Organizmning umumiy tetikligini oshirish."},
        {h:"Kayfiyat", p:"Umumiy kayfiyatni yaxshilash."}
      ],
      dosageText:"Bitta sashe (5 g) tarkibini bir stakan suvda eritib, og‘iz orqali qabul qiling. Qo‘llash usuli va aniq dozani preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"5 g",l:"bir sashe qabulga"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "inozipraym-w": {
    cat: "powders",
    img: "img/prod/inozipraym-w.webp",
    doc: "downloads/inozipraym-w-instrukciya.docx",
    ru: {
      name:"Инозипрайм W",
      heroSub:"Научно обоснованный нутрицевтик для женского здоровья. 10 компонентов для гормонального баланса, фертильности и метаболизма.",
      introTitle:"Поддержка женского репродуктивного здоровья",
      introText:"INOZIPRAYM WOMAN — нутрицевтик из 10 клинически изученных компонентов с синергетическим действием. Ориентирован на женщин с СПКЯ, инсулинорезистентностью, гормональным дисбалансом и нарушением менструального цикла, а также для повышения фертильности.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приготовления раствора, 30 саше. 1 саше = 1 суточная доза (6 г)."},
        {h:"Состав 1 саше", p:"Мио-инозитол — 1000 мг · D-хиро-инозитол — 100 мг<br>Мака — 300 мг · Ресвератрол — 110 мг · Вит. E — 20 мг<br>Вит. B6 — 120 мг · Хром пиколинат — 200 мкг<br>Фолат (5-MTHF) — 2,6 г · Вит. D3 — 400 мкг (21 мкг)"}
      ],
      props:[
        {h:"Комплекс инозитолов (Myo + D-Chiro)", p:"Регулирует углеводный обмен, повышает чувствительность к инсулину, нормализует соотношение ЛГ/ФСГ, восстанавливает функцию яичников и овуляцию, улучшает качество ооцитов и снижает оксидативный стресс."},
        {h:"NAC + L-карнитин", p:"Антиоксидантно-детоксикационная система: NAC — предшественник глутатиона, снижает воспаление, улучшает овуляцию; L-карнитин транспортирует жирные кислоты в митохондрии и улучшает энергообмен яичников."},
        {h:"Витамины и минералы", p:"Магний бисглицинат и витамин D3 поддерживают нервную систему, иммунитет и гормональный баланс; метилфолат и B12 снижают гомоцистеин; хром и цинк улучшают толерантность к глюкозе и фолликулогенез."}
      ],
      areas:[
        {h:"СПКЯ и метаболизм", p:"Синдром поликистозных яичников, инсулинорезистентность, метаболический синдром."},
        {h:"Менструальный цикл", p:"Олиго-, аменорея, ановуляция, гормональный дисбаланс ЛГ/ФСГ."},
        {h:"Фертильность", p:"Субфертильность, прегравидарная подготовка, подготовка к ЭКО/ВРТ."},
        {h:"Все периоды жизни", p:"Нутритивная поддержка, в том числе после родов и в менопаузе."}
      ],
      dosageText:"Содержимое одного саше (6 г) растворить в 330 мл воды и принимать внутрь 1 раз в день. Курс приёма — по рекомендации специалиста. Вскрытое саше использовать сразу, не хранить.",
      dosageStats:[{n:"1",l:"саше (6 г) в сутки"},{n:"24",l:"месяца срок годности"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, I триместр беременности (только по назначению врача), тяжёлая почечная и печёночная недостаточность, дети до 12 лет."},
        {h:"Особые указания", p:"Перед приёмом проконсультируйтесь с гинекологом или эндокринологом. При сахарном диабете обязателен контроль гликемии. Уведомите врача о приёме метформина, инсулина, гормональных препаратов."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в сухом и защищённом от света месте. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Не заменяет медикаментозное лечение. Беременность и лактация — только под медицинским наблюдением. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117. Произведено по заказу «HVARA» SRL, Milano, Italy."
    },
    en: {
      name:"Inozipraym W",
      heroSub:"A science-based nutraceutical for women's health. 10 components for hormonal balance, fertility and metabolism.",
      introTitle:"Support for women's reproductive health",
      introText:"INOZIPRAYM WOMAN is a nutraceutical of 10 clinically studied components with a synergistic effect. It targets women with PCOS, insulin resistance, hormonal imbalance and menstrual cycle disorders, and supports fertility.",
      infoCards:[
        {h:"Form", p:"Powder for an oral solution, 30 sachets. 1 sachet = 1 daily dose (6 g)."},
        {h:"Composition per sachet", p:"Myo-inositol — 1000 mg · D-chiro-inositol — 100 mg<br>Maca — 300 mg · Resveratrol — 110 mg · Vit. E — 20 mg<br>Vit. B6 — 120 mg · Chromium picolinate — 200 mcg<br>Folate (5-MTHF) · Vit. D3 — 400 IU"}
      ],
      props:[
        {h:"Inositol complex (Myo + D-Chiro)", p:"Regulates carbohydrate metabolism, increases insulin sensitivity, normalizes the LH/FSH ratio, restores ovarian function and ovulation, improves oocyte quality and reduces oxidative stress."},
        {h:"NAC + L-carnitine", p:"An antioxidant-detox system: NAC is a glutathione precursor that reduces inflammation and improves ovulation; L-carnitine transports fatty acids into mitochondria and improves ovarian energy metabolism."},
        {h:"Vitamins and minerals", p:"Magnesium bisglycinate and vitamin D3 support the nervous system, immunity and hormonal balance; methylfolate and B12 lower homocysteine; chromium and zinc improve glucose tolerance and folliculogenesis."}
      ],
      areas:[
        {h:"PCOS & metabolism", p:"Polycystic ovary syndrome, insulin resistance, metabolic syndrome."},
        {h:"Menstrual cycle", p:"Oligo-/amenorrhea, anovulation, LH/FSH hormonal imbalance."},
        {h:"Fertility", p:"Subfertility, preconception preparation, IVF/ART preparation."},
        {h:"All life stages", p:"Nutritional support, including postpartum and menopause."}
      ],
      dosageText:"Dissolve the contents of one sachet (6 g) in 330 ml of water and take orally once a day. Course duration on a specialist's recommendation. Use an opened sachet immediately, do not store.",
      dosageStats:[{n:"1",l:"sachet (6 g) a day"},{n:"24",l:"months shelf life"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, first trimester of pregnancy (only as prescribed), severe renal and hepatic insufficiency, children under 12."},
        {h:"Special instructions", p:"Consult a gynecologist or endocrinologist before use. In diabetes, glycemic monitoring is mandatory. Inform your doctor about metformin, insulin or hormonal medications."},
        {h:"Storage", p:"At no more than 25 °C, in a dry place protected from light. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Not a substitute for medical treatment. Pregnancy and lactation only under medical supervision. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117. Made to order for HVARA SRL, Milan, Italy."
    },
    it: {
      name:"Inozipraym W",
      heroSub:"Un nutraceutico scientificamente fondato per la salute femminile. 10 componenti per equilibrio ormonale, fertilità e metabolismo.",
      introTitle:"Sostegno alla salute riproduttiva femminile",
      introText:"INOZIPRAYM WOMAN è un nutraceutico di 10 componenti clinicamente studiati con effetto sinergico. È destinato a donne con PCOS, insulino-resistenza, squilibrio ormonale e disturbi del ciclo mestruale, e sostiene la fertilità.",
      infoCards:[
        {h:"Formato", p:"Polvere per soluzione orale, 30 bustine. 1 bustina = 1 dose giornaliera (6 g)."},
        {h:"Composizione per bustina", p:"Mio-inositolo — 1000 mg · D-chiro-inositolo — 100 mg<br>Maca — 300 mg · Resveratrolo — 110 mg · Vit. E — 20 mg<br>Vit. B6 — 120 mg · Cromo picolinato — 200 mcg<br>Folato (5-MTHF) · Vit. D3 — 400 UI"}
      ],
      props:[
        {h:"Complesso di inositoli (Myo + D-Chiro)", p:"Regola il metabolismo dei carboidrati, aumenta la sensibilità all'insulina, normalizza il rapporto LH/FSH, ripristina la funzione ovarica e l'ovulazione, migliora la qualità degli ovociti e riduce lo stress ossidativo."},
        {h:"NAC + L-carnitina", p:"Un sistema antiossidante-detox: il NAC è un precursore del glutatione che riduce l'infiammazione e migliora l'ovulazione; la L-carnitina trasporta gli acidi grassi nei mitocondri e migliora il metabolismo energetico ovarico."},
        {h:"Vitamine e minerali", p:"Il magnesio bisglicinato e la vitamina D3 sostengono il sistema nervoso, l'immunità e l'equilibrio ormonale; il metilfolato e la B12 riducono l'omocisteina; cromo e zinco migliorano la tolleranza al glucosio e la follicologenesi."}
      ],
      areas:[
        {h:"PCOS e metabolismo", p:"Sindrome dell'ovaio policistico, insulino-resistenza, sindrome metabolica."},
        {h:"Ciclo mestruale", p:"Oligo-/amenorrea, anovulazione, squilibrio ormonale LH/FSH."},
        {h:"Fertilità", p:"Subfertilità, preparazione preconcepimento, preparazione a FIVET/PMA."},
        {h:"Tutte le fasi della vita", p:"Sostegno nutrizionale, incluso post-parto e menopausa."}
      ],
      dosageText:"Sciogliere il contenuto di una bustina (6 g) in 330 ml d'acqua e assumere per via orale una volta al giorno. Durata del ciclo su consiglio dello specialista. Usare subito la bustina aperta, non conservare.",
      dosageStats:[{n:"1",l:"bustina (6 g) al giorno"},{n:"24",l:"mesi di validità"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, primo trimestre di gravidanza (solo su prescrizione), grave insufficienza renale ed epatica, bambini sotto i 12 anni."},
        {h:"Istruzioni speciali", p:"Consultare un ginecologo o endocrinologo prima dell'uso. In caso di diabete è obbligatorio il monitoraggio glicemico. Informare il medico sull'assunzione di metformina, insulina o farmaci ormonali."},
        {h:"Conservazione", p:"A non più di 25 °C, in luogo asciutto e al riparo dalla luce. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Non sostituisce il trattamento medico. Gravidanza e allattamento solo sotto controllo medico. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117. Prodotto su ordine per HVARA SRL, Milano, Italia."
    },
    uz: {
      name:"Inozipraym W",
      heroSub:"Ayollar salomatligi uchun ilmiy asoslangan nutritsevtik. Gormonal muvozanat, fertillik va metabolizm uchun 10 komponent.",
      introTitle:"Ayol reproduktiv salomatligini qo‘llab-quvvatlash",
      introText:"INOZIPRAYM WOMAN — sinergik ta’sirga ega 10 ta klinik o‘rganilgan komponentdan iborat nutritsevtik. PKTS, insulinga chidamlilik, gormonal disbalans va hayz sikli buzilishlari bo‘lgan ayollarga mo‘ljallangan, shuningdek fertillikni oshirish uchun.",
      infoCards:[
        {h:"Formati", p:"Eritma tayyorlash uchun kukun, 30 sashe. 1 sashe = 1 sutkalik doza (6 g)."},
        {h:"1 sashe tarkibi", p:"Mio-inozitol — 1000 mg · D-xiro-inozitol — 100 mg<br>Maka — 300 mg · Resveratrol — 110 mg · E vit. — 20 mg<br>B6 vit. — 120 mg · Xrom pikolinat — 200 mkg<br>Folat (5-MTHF) · D3 vit. — 400 XB"}
      ],
      props:[
        {h:"Inozitollar majmuasi (Myo + D-Chiro)", p:"Uglevod almashinuvini tartibga soladi, insulinga sezuvchanlikni oshiradi, LG/FSG nisbatini me’yorlashtiradi, tuxumdon funksiyasi va ovulyatsiyani tiklaydi, oosit sifatini yaxshilaydi va oksidlovchi stressni kamaytiradi."},
        {h:"NAC + L-karnitin", p:"Antioksidant-detoks tizimi: NAC — glutation o‘tmishdoshi, yallig‘lanishni kamaytiradi, ovulyatsiyani yaxshilaydi; L-karnitin yog‘ kislotalarini mitoxondriyalarga tashiydi va tuxumdon energiya almashinuvini yaxshilaydi."},
        {h:"Vitaminlar va minerallar", p:"Magniy bisglitsinat va D3 vitamini asab tizimi, immunitet va gormonal muvozanatni qo‘llab-quvvatlaydi; metilfolat va B12 gomotsisteinni kamaytiradi; xrom va rux glyukozaga tolerantlikni va follikulogenezni yaxshilaydi."}
      ],
      areas:[
        {h:"PKTS va metabolizm", p:"Polikistoz tuxumdon sindromi, insulinga chidamlilik, metabolik sindrom."},
        {h:"Hayz sikli", p:"Oligo-/amenoreya, anovulyatsiya, LG/FSG gormonal disbalansi."},
        {h:"Fertillik", p:"Subfertillik, homiladorlikdan oldingi tayyorgarlik, EKO/YRT ga tayyorgarlik."},
        {h:"Hayotning barcha davrlari", p:"Nutritiv qo‘llab-quvvatlash, shu jumladan tug‘ruqdan keyin va klimaksda."}
      ],
      dosageText:"Bitta sashe (6 g) tarkibini 330 ml suvda eritib, kuniga 1 marta og‘iz orqali qabul qiling. Kurs davomiyligi — mutaxassis tavsiyasiga ko‘ra. Ochilgan sasheni darhol ishlating, saqlamang.",
      dosageStats:[{n:"1",l:"sashe (6 g) sutkada"},{n:"24",l:"oy yaroqlilik muddati"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, homiladorlikning I trimestri (faqat shifokor tayinlashi bilan), og‘ir buyrak va jigar yetishmovchiligi, 12 yoshgacha bo‘lgan bolalar."},
        {h:"Maxsus ko‘rsatmalar", p:"Qabuldan oldin ginekolog yoki endokrinolog bilan maslahatlashing. Qandli diabetda glikemiya nazorati majburiy. Metformin, insulin, gormonal preparatlar qabuli haqida shifokorni ogohlantiring."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, quruq va yorug‘likdan himoyalangan joyda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Dori-darmon davosini almashtirmaydi. Homiladorlik va emizish — faqat tibbiy nazorat ostida. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117. HVARA SRL, Milano, Italiya buyurtmasi bo‘yicha ishlab chiqarilgan."
    }
  },

  "forteks": {
    cat: "powders",
    img: "img/prod/forteks.webp",
    doc: "downloads/forteks-instrukciya.docx",
    ru: {
      name:"Фортекс",
      heroSub:"Комплекс для суставов и костей: глюкозамин, хондроитин, МСМ, кальций, магний и витамины K2/D3. Поддержка хрящевой ткани.",
      introTitle:"Здоровье суставов и костей",
      introText:"Фортекс — порошок для приёма внутрь с хондропротекторами, минералами и витаминами. Синергичное действие компонентов поддерживает метаболизм костной и хрящевой ткани, замедляет деградацию хряща и укрепляет кости.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приёма внутрь в саше-пакетиках по 5 г, №20."},
        {h:"Состав 1 саше (5 г)", p:"Глюкозамина сульфат — 750 мг · МСМ — 500 мг<br>Хондроитин сульфат — 600 мг · Кальция фосфат — 400 мг<br>Магния бисглицинат — 100 мг · Вит. K2 — 100 мкг · Вит. D3 — 400 МЕ"}
      ],
      props:[
        {h:"Глюкозамин + Хондроитин + МСМ", p:"Глюкозамин — субстрат для образования хряща и предшественник гликозаминогликанов. Хондроитин обеспечивает эластичность и упругость хряща. МСМ — источник органической серы, уменьшает боль и скованность в суставах."},
        {h:"Кальций и магний", p:"Кальция фосфат поддерживает минеральную плотность костей и работу мышц. Магния бисглицинат — кофактор более 300 реакций, важен для скелета, мышц и нервной проводимости, обладает высокой биодоступностью."},
        {h:"Витамины K2 и D3", p:"D3 усиливает всасывание кальция и регулирует обмен кальция и фосфора. K2 направляет кальций в костную матрицу, препятствуя его отложению в сосудах. Работают синергично для правильной минерализации костей."}
      ],
      areas:[
        {h:"Суставы", p:"Остеоартрит и дегенеративно-дистрофические заболевания суставов и позвоночника."},
        {h:"Профилактика", p:"Возрастные изменения костной и хрящевой ткани, периоды повышенной нагрузки на суставы."},
        {h:"Восстановление", p:"Поддержка восстановления костной ткани после травм и операций."},
        {h:"Кости", p:"Профилактика и комплексная терапия остеопороза, восполнение дефицита витамина D."}
      ],
      dosageText:"Содержимое 1 саше растворить в стакане воды (150–200 мл), тщательно перемешать и принимать внутрь во время или сразу после еды по 1 саше 1–2 раза в сутки. Продолжительность курса — обычно 1–3 месяца, при необходимости повторить.",
      dosageStats:[{n:"1–2",l:"саше в сутки"},{n:"1–3",l:"месяца курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов. При беременности, кормлении грудью и в детском возрасте — после консультации со специалистом."},
        {h:"Побочные действия", p:"Возможны индивидуальные реакции повышенной чувствительности к компонентам. При появлении прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Не использовать после истечения срока годности. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Forteks",
      heroSub:"A complex for joints and bones: glucosamine, chondroitin, MSM, calcium, magnesium and vitamins K2/D3. Cartilage support.",
      introTitle:"Joint and bone health",
      introText:"Forteks is an oral powder with chondroprotectors, minerals and vitamins. The synergistic action of its components supports bone and cartilage metabolism, slows cartilage degradation and strengthens bones.",
      infoCards:[
        {h:"Form", p:"Powder for oral use in 5 g sachets, No.20."},
        {h:"Composition per sachet (5 g)", p:"Glucosamine sulfate — 750 mg · MSM — 500 mg<br>Chondroitin sulfate — 600 mg · Calcium phosphate — 400 mg<br>Magnesium bisglycinate — 100 mg · Vit. K2 — 100 mcg · Vit. D3 — 400 IU"}
      ],
      props:[
        {h:"Glucosamine + Chondroitin + MSM", p:"Glucosamine is a substrate for cartilage formation and a precursor of glycosaminoglycans. Chondroitin provides cartilage elasticity and resilience. MSM is a source of organic sulfur, reducing pain and stiffness in joints."},
        {h:"Calcium and magnesium", p:"Calcium phosphate supports bone mineral density and muscle function. Magnesium bisglycinate is a cofactor of over 300 reactions, important for the skeleton, muscles and nerve conduction, with high bioavailability."},
        {h:"Vitamins K2 and D3", p:"D3 enhances calcium absorption and regulates calcium and phosphorus metabolism. K2 directs calcium into the bone matrix, preventing its deposition in vessels. They work synergistically for proper bone mineralization."}
      ],
      areas:[
        {h:"Joints", p:"Osteoarthritis and degenerative-dystrophic diseases of joints and spine."},
        {h:"Prevention", p:"Age-related changes in bone and cartilage tissue, periods of increased joint load."},
        {h:"Recovery", p:"Support of bone recovery after injuries and surgery."},
        {h:"Bones", p:"Prevention and combined therapy of osteoporosis, replenishment of vitamin D deficiency."}
      ],
      dosageText:"Dissolve the contents of 1 sachet in a glass of water (150–200 ml), mix thoroughly and take orally during or right after meals, 1 sachet 1–2 times a day. Course: usually 1–3 months, may be repeated.",
      dosageStats:[{n:"1–2",l:"sachets a day"},{n:"1–3",l:"months course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components. During pregnancy, breastfeeding and childhood — after consulting a specialist."},
        {h:"Side effects", p:"Individual hypersensitivity reactions to the components are possible. If they occur, stop use and consult a doctor."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Do not use after the expiry date. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Forteks",
      heroSub:"Un complesso per articolazioni e ossa: glucosamina, condroitina, MSM, calcio, magnesio e vitamine K2/D3. Sostegno della cartilagine.",
      introTitle:"Salute di articolazioni e ossa",
      introText:"Forteks è una polvere orale con condroprotettori, minerali e vitamine. L'azione sinergica dei suoi componenti sostiene il metabolismo osseo e cartilagineo, rallenta la degradazione della cartilagine e rafforza le ossa.",
      infoCards:[
        {h:"Formato", p:"Polvere per uso orale in bustine da 5 g, n.20."},
        {h:"Composizione per bustina (5 g)", p:"Glucosamina solfato — 750 mg · MSM — 500 mg<br>Condroitina solfato — 600 mg · Fosfato di calcio — 400 mg<br>Magnesio bisglicinato — 100 mg · Vit. K2 — 100 mcg · Vit. D3 — 400 UI"}
      ],
      props:[
        {h:"Glucosamina + Condroitina + MSM", p:"La glucosamina è un substrato per la formazione della cartilagine e un precursore dei glicosaminoglicani. La condroitina fornisce elasticità e resilienza alla cartilagine. L'MSM è una fonte di zolfo organico, riduce dolore e rigidità articolare."},
        {h:"Calcio e magnesio", p:"Il fosfato di calcio sostiene la densità minerale ossea e la funzione muscolare. Il magnesio bisglicinato è cofattore di oltre 300 reazioni, importante per scheletro, muscoli e conduzione nervosa, con elevata biodisponibilità."},
        {h:"Vitamine K2 e D3", p:"La D3 potenzia l'assorbimento del calcio e regola il metabolismo di calcio e fosforo. La K2 indirizza il calcio nella matrice ossea, prevenendone il deposito nei vasi. Agiscono in sinergia per una corretta mineralizzazione ossea."}
      ],
      areas:[
        {h:"Articolazioni", p:"Osteoartrite e malattie degenerative-distrofiche di articolazioni e colonna."},
        {h:"Prevenzione", p:"Cambiamenti legati all'età di ossa e cartilagine, periodi di maggiore carico articolare."},
        {h:"Recupero", p:"Sostegno al recupero osseo dopo traumi e interventi."},
        {h:"Ossa", p:"Prevenzione e terapia combinata dell'osteoporosi, reintegro della carenza di vitamina D."}
      ],
      dosageText:"Sciogliere il contenuto di 1 bustina in un bicchiere d'acqua (150–200 ml), mescolare bene e assumere per via orale durante o subito dopo i pasti, 1 bustina 1–2 volte al giorno. Ciclo: di solito 1–3 mesi, ripetibile.",
      dosageStats:[{n:"1–2",l:"bustine al giorno"},{n:"1–3",l:"mesi di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti. In gravidanza, allattamento e nell'infanzia — dopo aver consultato uno specialista."},
        {h:"Effetti collaterali", p:"Sono possibili reazioni individuali di ipersensibilità ai componenti. In tal caso interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Non usare dopo la data di scadenza. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Forteks",
      heroSub:"Bo‘g‘imlar va suyaklar uchun majmua: glyukozamin, xondroitin, MSM, kalsiy, magniy va K2/D3 vitaminlari. Tog‘ay to‘qimasini qo‘llab-quvvatlash.",
      introTitle:"Bo‘g‘imlar va suyaklar salomatligi",
      introText:"Forteks — xondroprotektorlar, minerallar va vitaminlar bilan ichimlik kukuni. Komponentlarning sinergik ta’siri suyak va tog‘ay to‘qimasi almashinuvini qo‘llab-quvvatlaydi, tog‘ay yemirilishini sekinlashtiradi va suyaklarni mustahkamlaydi.",
      infoCards:[
        {h:"Formati", p:"5 g li sashe-paketlarda ichimlik kukuni, №20."},
        {h:"1 sashe (5 g) tarkibi", p:"Glyukozamin sulfati — 750 mg · MSM — 500 mg<br>Xondroitin sulfati — 600 mg · Kalsiy fosfati — 400 mg<br>Magniy bisglitsinat — 100 mg · K2 vit. — 100 mkg · D3 vit. — 400 XB"}
      ],
      props:[
        {h:"Glyukozamin + Xondroitin + MSM", p:"Glyukozamin — tog‘ay hosil bo‘lishi uchun substrat va glikozaminglikanlar o‘tmishdoshi. Xondroitin tog‘ay elastikligi va mustahkamligini ta’minlaydi. MSM — organik oltingugurt manbai, bo‘g‘imlardagi og‘riq va qotib qolishni kamaytiradi."},
        {h:"Kalsiy va magniy", p:"Kalsiy fosfati suyaklarning mineral zichligi va mushaklar ishini qo‘llab-quvvatlaydi. Magniy bisglitsinat — 300 dan ortiq reaksiya kofaktori, skelet, mushaklar va nerv o‘tkazuvchanligi uchun muhim, yuqori biokirishga ega."},
        {h:"K2 va D3 vitaminlari", p:"D3 kalsiy so‘rilishini kuchaytiradi va kalsiy hamda fosfor almashinuvini tartibga soladi. K2 kalsiyni suyak matritsasiga yo‘naltiradi, uning tomirlarda cho‘kishiga to‘sqinlik qiladi. Suyaklarning to‘g‘ri mineralizatsiyasi uchun sinergik ishlaydi."}
      ],
      areas:[
        {h:"Bo‘g‘imlar", p:"Osteoartrit va bo‘g‘imlar hamda umurtqaning degenerativ-distrofik kasalliklari."},
        {h:"Profilaktika", p:"Suyak va tog‘ay to‘qimasidagi yoshga bog‘liq o‘zgarishlar, bo‘g‘imlarga yuklama ortishi davrlari."},
        {h:"Tiklanish", p:"Jarohatlar va operatsiyalardan keyin suyak to‘qimasi tiklanishini qo‘llab-quvvatlash."},
        {h:"Suyaklar", p:"Osteoporoz profilaktikasi va majmuaviy terapiyasi, D vitamini tanqisligini to‘ldirish."}
      ],
      dosageText:"1 sashe tarkibini bir stakan suvda (150–200 ml) eritib, yaxshilab aralashtiring va ovqat vaqtida yoki ovqatdan keyin darhol kuniga 1–2 marta 1 sashedan og‘iz orqali qabul qiling. Kurs davomiyligi — odatda 1–3 oy, zarur bo‘lganda takrorlash mumkin.",
      dosageStats:[{n:"1–2",l:"sashe sutkada"},{n:"1–3",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik. Homiladorlik, emizish va bolalik davrida — mutaxassis bilan maslahatlashgandan keyin."},
        {h:"Nojo‘ya ta’sirlar", p:"Komponentlarga individual yuqori sezuvchanlik reaksiyalari bo‘lishi mumkin. Yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Yaroqlilik muddati o‘tgach ishlatmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "neyrokentron-kids": {
    cat: "powders",
    img: "img/prod/neyrokentron-kids.webp",
    doc: "downloads/neyrokentron-kids-instrukciya.docx",
    ru: {
      name:"Нейрокентрон КИДС",
      heroSub:"Гель для приёма внутрь с цитидином, уридином, лецитином и метилфолатом. Питание и развитие нервной системы у детей.",
      introTitle:"Развитие и питание нервной системы",
      introText:"Нейрокентрон КИДС — детский нейро-комплекс на основе нуклеозидов (цитидин, уридин), лецитина и метилфолата. Поддерживает развитие нервной системы, улучшает память, внимание и обучаемость, оказывает мягкое успокаивающее действие.",
      infoCards:[
        {h:"Форма выпуска", p:"Гель для приёма внутрь по 10 мл (стики)."},
        {h:"Состав", p:"Цитидин — 10 мг · Уридин — 20 мг<br>Лецитин — 100 мг · Метилфолат — 100 мкг"}
      ],
      props:[
        {h:"Цитидин и уридин", p:"Нуклеозиды — естественные компоненты всех клеток и часть РНК. Восстанавливают мембраны нейронов, поддерживают работу нейромедиаторов и проведение нервного импульса, способствуют синаптогенезу и росту аксонов."},
        {h:"Лецитин", p:"Комплекс фосфолипидов — строительный материал нейронов. Участвует в формировании миелина, источник холина и ацетилхолина, поддерживает память и внимание, улучшает нервно-мышечную передачу. Мощный антиоксидант."},
        {h:"Метилфолат", p:"Активная форма фолиевой кислоты, фундаментальна для работы ЦНС. Снижает уровень гомоцистеина, защищает нейроны от окислительного стресса, улучшает память и восстановление нервных волокон."}
      ],
      areas:[
        {h:"Развитие ЦНС", p:"Задержка психомоторного и психоречевого развития, плохая обучаемость, гиперактивность."},
        {h:"Когнитивные функции", p:"Снижение памяти, внимания и концентрации, быстрая утомляемость мозга."},
        {h:"Нервная система", p:"Неврозы, астенизация, стрессовые ситуации, улучшение адаптации и настроения."},
        {h:"Восстановление нервов", p:"Нейропатии, невралгии, последствия травм, нейропатия лицевого нерва."}
      ],
      dosageText:"До или после еды, только для приёма внутрь. Детям с 1 года — по 1 стику 1 раз в день; с 3 лет — по 1 стику 2 раза в день. Курс — от 20 дней до 1 месяца. При необходимости по рекомендации врача курс можно повторить.",
      dosageStats:[{n:"1–2",l:"стика в день (по возрасту)"},{n:"20–30",l:"дней курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"Индивидуальная непереносимость компонентов. При появлении побочных действий прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Neurokentron KIDS",
      heroSub:"Oral gel with cytidine, uridine, lecithin and methylfolate. Nourishment and development of the nervous system in children.",
      introTitle:"Nervous system development and nourishment",
      introText:"Neurokentron KIDS is a children's neuro-complex based on nucleosides (cytidine, uridine), lecithin and methylfolate. It supports nervous system development, improves memory, attention and learning ability and has a gentle calming effect.",
      infoCards:[
        {h:"Form", p:"Oral gel, 10 ml (sticks)."},
        {h:"Composition", p:"Cytidine — 10 mg · Uridine — 20 mg<br>Lecithin — 100 mg · Methylfolate — 100 mcg"}
      ],
      props:[
        {h:"Cytidine and uridine", p:"Nucleosides — natural components of all cells and part of RNA. They restore neuron membranes, support neurotransmitter function and nerve impulse conduction, and promote synaptogenesis and axonal growth."},
        {h:"Lecithin", p:"A phospholipid complex — building material for neurons. Involved in myelin formation, a source of choline and acetylcholine, supports memory and attention and improves neuromuscular transmission. A strong antioxidant."},
        {h:"Methylfolate", p:"The active form of folic acid, fundamental for CNS function. Lowers homocysteine, protects neurons from oxidative stress, improves memory and nerve fiber recovery."}
      ],
      areas:[
        {h:"CNS development", p:"Delayed psychomotor and speech development, poor learning, hyperactivity."},
        {h:"Cognitive function", p:"Reduced memory, attention and concentration, rapid mental fatigue."},
        {h:"Nervous system", p:"Neuroses, asthenia, stressful situations, improved adaptation and mood."},
        {h:"Nerve recovery", p:"Neuropathies, neuralgia, trauma sequelae, facial nerve neuropathy."}
      ],
      dosageText:"Before or after meals, oral use only. Children from 1 year — 1 stick once a day; from 3 years — 1 stick twice a day. Course: 20 days to 1 month. May be repeated on a doctor's recommendation.",
      dosageStats:[{n:"1–2",l:"sticks a day (by age)"},{n:"20–30",l:"days course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"Individual intolerance to the components. If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Neurokentron KIDS",
      heroSub:"Gel orale con citidina, uridina, lecitina e metilfolato. Nutrimento e sviluppo del sistema nervoso nei bambini.",
      introTitle:"Sviluppo e nutrimento del sistema nervoso",
      introText:"Neurokentron KIDS è un neuro-complesso per bambini a base di nucleosidi (citidina, uridina), lecitina e metilfolato. Sostiene lo sviluppo del sistema nervoso, migliora memoria, attenzione e capacità di apprendimento e ha un delicato effetto calmante.",
      infoCards:[
        {h:"Formato", p:"Gel orale, 10 ml (stick)."},
        {h:"Composizione", p:"Citidina — 10 mg · Uridina — 20 mg<br>Lecitina — 100 mg · Metilfolato — 100 mcg"}
      ],
      props:[
        {h:"Citidina e uridina", p:"Nucleosidi — componenti naturali di tutte le cellule e parte dell'RNA. Ripristinano le membrane dei neuroni, sostengono la funzione dei neurotrasmettitori e la conduzione dell'impulso nervoso, favoriscono la sinaptogenesi e la crescita assonale."},
        {h:"Lecitina", p:"Un complesso di fosfolipidi — materiale costitutivo dei neuroni. Partecipa alla formazione della mielina, fonte di colina e acetilcolina, sostiene memoria e attenzione e migliora la trasmissione neuromuscolare. Un potente antiossidante."},
        {h:"Metilfolato", p:"La forma attiva dell'acido folico, fondamentale per la funzione del SNC. Riduce l'omocisteina, protegge i neuroni dallo stress ossidativo, migliora la memoria e il recupero delle fibre nervose."}
      ],
      areas:[
        {h:"Sviluppo del SNC", p:"Ritardo dello sviluppo psicomotorio e del linguaggio, scarso apprendimento, iperattività."},
        {h:"Funzioni cognitive", p:"Riduzione di memoria, attenzione e concentrazione, rapido affaticamento mentale."},
        {h:"Sistema nervoso", p:"Nevrosi, astenia, situazioni di stress, migliore adattamento e umore."},
        {h:"Recupero dei nervi", p:"Neuropatie, nevralgie, esiti di traumi, neuropatia del nervo facciale."}
      ],
      dosageText:"Prima o dopo i pasti, solo per uso orale. Bambini dai 1 anno — 1 stick una volta al giorno; dai 3 anni — 1 stick due volte al giorno. Ciclo: da 20 giorni a 1 mese. Ripetibile su consiglio del medico.",
      dosageStats:[{n:"1–2",l:"stick al giorno (per età)"},{n:"20–30",l:"giorni di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"Intolleranza individuale ai componenti. In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Neurokentron KIDS",
      heroSub:"Sitidin, uridin, letsitin va metilfolat bilan ichimlik geli. Bolalarda asab tizimini oziqlantirish va rivojlantirish.",
      introTitle:"Asab tizimini rivojlantirish va oziqlantirish",
      introText:"Neurokentron KIDS — nukleozidlar (sitidin, uridin), letsitin va metilfolat asosidagi bolalar neyro-majmuasi. Asab tizimi rivojlanishini qo‘llab-quvvatlaydi, xotira, diqqat va o‘quvchanlikni yaxshilaydi, yumshoq tinchlantiruvchi ta’sir ko‘rsatadi.",
      infoCards:[
        {h:"Formati", p:"10 ml li ichimlik geli (stiklar)."},
        {h:"Tarkibi", p:"Sitidin — 10 mg · Uridin — 20 mg<br>Letsitin — 100 mg · Metilfolat — 100 mkg"}
      ],
      props:[
        {h:"Sitidin va uridin", p:"Nukleozidlar — barcha hujayralarning tabiiy komponentlari va RNK qismi. Neyron membranalarini tiklaydi, neyromediatorlar ishi va nerv impulsi o‘tkazilishini qo‘llab-quvvatlaydi, sinaptogenez va akson o‘sishiga yordam beradi."},
        {h:"Letsitin", p:"Fosfolipidlar majmuasi — neyronlarning qurilish materiali. Miyelin hosil bo‘lishida ishtirok etadi, xolin va atsetilxolin manbai, xotira va diqqatni qo‘llab-quvvatlaydi, nerv-mushak o‘tkazuvchanligini yaxshilaydi. Kuchli antioksidant."},
        {h:"Metilfolat", p:"Foliy kislotasining faol shakli, MNS ishi uchun fundamental. Gomotsistein darajasini kamaytiradi, neyronlarni oksidlovchi stressdan himoya qiladi, xotira va nerv tolalari tiklanishini yaxshilaydi."}
      ],
      areas:[
        {h:"MNS rivojlanishi", p:"Psixomotor va nutq rivojlanishining kechikishi, sust o‘quvchanlik, giperfaollik."},
        {h:"Kognitiv funksiyalar", p:"Xotira, diqqat va konsentratsiyaning pasayishi, miyaning tez charchashi."},
        {h:"Asab tizimi", p:"Nevrozlar, asteniya, stressli vaziyatlar, moslashuv va kayfiyatni yaxshilash."},
        {h:"Nervlarni tiklash", p:"Neyropatiyalar, nevralgiyalar, jarohat oqibatlari, yuz nervi neyropatiyasi."}
      ],
      dosageText:"Ovqatdan oldin yoki keyin, faqat og‘iz orqali qabul qilish uchun. 1 yoshdan katta bolalarga — kuniga 1 marta 1 stikdan; 3 yoshdan — kuniga 2 marta 1 stikdan. Kurs — 20 kundan 1 oygacha. Zarur bo‘lganda shifokor tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1–2",l:"stik kuniga (yoshga qarab)"},{n:"20–30",l:"kunlik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Komponentlarga individual chidamsizlik. Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "gammalon": {
    cat: "powders",
    img: "img/prod/gammalon.webp",
    doc: "downloads/gammalon-instrukciya.docx",
    ru: {
      name:"Гаммалон Био",
      heroSub:"Нейропротекторный комплекс с ГАМК, магнием и витаминами B6/B12. Поддержка нервной системы и функций мозга.",
      introTitle:"Поддержка нервной системы и мозга",
      introText:"Гаммалон — комплексный нейропротекторный БАД на основе ГАМК, магния бисглицината и витаминов B6 и B12. Снижает нейрональную возбудимость, поддерживает память, концентрацию и здоровый сон.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок в пакетиках по 5 г, №30."},
        {h:"Состав 1 пакетика", p:"ГАМК — 500 мг · Магния бисглицинат — 200 мг<br>Витамин B6 — 1000 мкг · Витамин B12 — 500 мкг"}
      ],
      props:[
        {h:"ГАМК", p:"Один из основных регулирующих медиаторов ЦНС: снижает нейрональную возбудимость и оказывает мягкое гипотензивное действие."},
        {h:"Магний бисглицинат", p:"Обеспечивает потенциал-зависимую блокаду NMDA-рецепторов, предотвращая избыточное поступление кальция в нейроны и их гибель вследствие эксайтотоксичности."},
        {h:"Витамины B6 и B12", p:"B6 оптимизирует усвоение магния и синтез нейромедиаторов (триптофан→серотонин, глутамат→ГАМК). B12 способствует регенерации нервных волокон и поддерживает когнитивные функции через процессы метилирования."}
      ],
      areas:[
        {h:"Память и внимание", p:"Ухудшение памяти, концентрации и умственной работоспособности."},
        {h:"Когнитивные нарушения", p:"При цереброваскулярной недостаточности и после черепно-мозговых травм."},
        {h:"Тревожность и сон", p:"Повышенная тревожность, раздражительность и нарушения сна."},
        {h:"Профилактика", p:"Неврологические осложнения при дефиците витаминов группы B."}
      ],
      dosageText:"Принимать внутрь. Взрослым — по 1 пакетику 1 раз в сутки вечером после еды. Продолжительность приёма — 3 месяца. Перед применением рекомендуется проконсультироваться с врачом.",
      dosageStats:[{n:"1",l:"пакетик вечером"},{n:"3",l:"месяца курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, тяжёлая почечная недостаточность, болезнь Лебера, детский возраст, беременность и лактация."},
        {h:"Побочные действия", p:"Индивидуальная непереносимость компонентов. При появлении побочных действий прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется проконсультироваться с врачом. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Gammalon Bio",
      heroSub:"A neuroprotective complex with GABA, magnesium and vitamins B6/B12. Support for the nervous system and brain function.",
      introTitle:"Support for the nervous system and brain",
      introText:"Gammalon is a comprehensive neuroprotective supplement based on GABA, magnesium bisglycinate and vitamins B6 and B12. It reduces neuronal excitability and supports memory, concentration and healthy sleep.",
      infoCards:[
        {h:"Form", p:"Powder in 5 g sachets, No.30."},
        {h:"Composition per sachet", p:"GABA — 500 mg · Magnesium bisglycinate — 200 mg<br>Vitamin B6 — 1000 mcg · Vitamin B12 — 500 mcg"}
      ],
      props:[
        {h:"GABA", p:"One of the main regulatory neurotransmitters of the CNS: reduces neuronal excitability and has a mild hypotensive effect."},
        {h:"Magnesium bisglycinate", p:"Provides voltage-dependent blockade of NMDA receptors, preventing excessive calcium influx into neurons and their death from excitotoxicity."},
        {h:"Vitamins B6 and B12", p:"B6 optimizes magnesium absorption and neurotransmitter synthesis (tryptophan→serotonin, glutamate→GABA). B12 promotes nerve fiber regeneration and supports cognitive function through methylation."}
      ],
      areas:[
        {h:"Memory & attention", p:"Decline in memory, concentration and mental performance."},
        {h:"Cognitive impairment", p:"In cerebrovascular insufficiency and after head injuries."},
        {h:"Anxiety & sleep", p:"Increased anxiety, irritability and sleep disturbances."},
        {h:"Prevention", p:"Neurological complications in B-vitamin deficiency."}
      ],
      dosageText:"Take orally. Adults — 1 sachet once a day in the evening after meals. Duration: 3 months. Consultation with a doctor is recommended before use.",
      dosageStats:[{n:"1",l:"sachet in the evening"},{n:"3",l:"months course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, severe renal insufficiency, Leber's disease, childhood, pregnancy and lactation."},
        {h:"Side effects", p:"Individual intolerance to the components. If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a doctor is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Gammalon Bio",
      heroSub:"Un complesso neuroprotettivo con GABA, magnesio e vitamine B6/B12. Sostegno al sistema nervoso e alle funzioni cerebrali.",
      introTitle:"Sostegno al sistema nervoso e al cervello",
      introText:"Gammalon è un integratore neuroprotettivo completo a base di GABA, magnesio bisglicinato e vitamine B6 e B12. Riduce l'eccitabilità neuronale e sostiene memoria, concentrazione e sonno sano.",
      infoCards:[
        {h:"Formato", p:"Polvere in bustine da 5 g, n.30."},
        {h:"Composizione per bustina", p:"GABA — 500 mg · Magnesio bisglicinato — 200 mg<br>Vitamina B6 — 1000 mcg · Vitamina B12 — 500 mcg"}
      ],
      props:[
        {h:"GABA", p:"Uno dei principali neurotrasmettitori regolatori del SNC: riduce l'eccitabilità neuronale e ha un lieve effetto ipotensivo."},
        {h:"Magnesio bisglicinato", p:"Fornisce un blocco voltaggio-dipendente dei recettori NMDA, prevenendo l'eccessivo afflusso di calcio nei neuroni e la loro morte per eccitotossicità."},
        {h:"Vitamine B6 e B12", p:"La B6 ottimizza l'assorbimento del magnesio e la sintesi dei neurotrasmettitori (triptofano→serotonina, glutammato→GABA). La B12 favorisce la rigenerazione delle fibre nervose e sostiene le funzioni cognitive tramite la metilazione."}
      ],
      areas:[
        {h:"Memoria e attenzione", p:"Declino di memoria, concentrazione e prestazioni mentali."},
        {h:"Deterioramento cognitivo", p:"In caso di insufficienza cerebrovascolare e dopo traumi cranici."},
        {h:"Ansia e sonno", p:"Maggiore ansia, irritabilità e disturbi del sonno."},
        {h:"Prevenzione", p:"Complicanze neurologiche in caso di carenza di vitamine del gruppo B."}
      ],
      dosageText:"Assumere per via orale. Adulti — 1 bustina una volta al giorno la sera dopo i pasti. Durata: 3 mesi. Si raccomanda di consultare un medico prima dell'uso.",
      dosageStats:[{n:"1",l:"bustina la sera"},{n:"3",l:"mesi di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, grave insufficienza renale, malattia di Leber, età pediatrica, gravidanza e allattamento."},
        {h:"Effetti collaterali", p:"Intolleranza individuale ai componenti. In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare un medico prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Gammalon Bio",
      heroSub:"GABA, magniy va B6/B12 vitaminlari bilan neyroprotektor majmua. Asab tizimi va miya funksiyalarini qo‘llab-quvvatlash.",
      introTitle:"Asab tizimi va miyani qo‘llab-quvvatlash",
      introText:"Gammalon — GABA, magniy bisglitsinat va B6, B12 vitaminlari asosidagi majmuaviy neyroprotektor BAD. Neyronal qo‘zg‘aluvchanlikni kamaytiradi, xotira, konsentratsiya va sog‘lom uyquni qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"5 g li paketlarda kukun, №30."},
        {h:"1 paket tarkibi", p:"GABA — 500 mg · Magniy bisglitsinat — 200 mg<br>B6 vitamini — 1000 mkg · B12 vitamini — 500 mkg"}
      ],
      props:[
        {h:"GABA", p:"MNSning asosiy tartibga soluvchi mediatorlaridan biri: neyronal qo‘zg‘aluvchanlikni kamaytiradi va yumshoq gipotenziv ta’sir ko‘rsatadi."},
        {h:"Magniy bisglitsinat", p:"NMDA-retseptorlarining potensialga bog‘liq blokadasini ta’minlaydi, neyronlarga ortiqcha kalsiy kirishi va eksaytotoksiklik natijasida ularning nobud bo‘lishining oldini oladi."},
        {h:"B6 va B12 vitaminlari", p:"B6 magniy so‘rilishi va neyromediatorlar sintezini (triptofan→serotonin, glutamat→GABA) optimallashtiradi. B12 nerv tolalari regeneratsiyasiga yordam beradi va metillanish jarayonlari orqali kognitiv funksiyalarni qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Xotira va diqqat", p:"Xotira, konsentratsiya va aqliy ish qobiliyatining yomonlashuvi."},
        {h:"Kognitiv buzilishlar", p:"Serebrovaskulyar yetishmovchilik va bosh miya jarohatlaridan keyin."},
        {h:"Tashvish va uyqu", p:"Tashvish oshishi, asabiylik va uyqu buzilishlari."},
        {h:"Profilaktika", p:"B guruhi vitaminlari tanqisligida nevrologik asoratlar."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalarga — kuniga 1 marta kechqurun ovqatdan keyin 1 paketdan. Qabul davomiyligi — 3 oy. Qo‘llashdan oldin shifokor bilan maslahatlashish tavsiya etiladi.",
      dosageStats:[{n:"1",l:"paket kechqurun"},{n:"3",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, og‘ir buyrak yetishmovchiligi, Leber kasalligi, bolalik davri, homiladorlik va emizish."},
        {h:"Nojo‘ya ta’sirlar", p:"Komponentlarga individual chidamsizlik. Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin shifokor bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "handro": {
    cat: "powders",
    img: "img/prod/handro.webp",
    doc: "downloads/handro-instrukciya.docx",
    ru: {
      name:"Хандро",
      heroSub:"Порошок для суставов и костей: глюкозамин, хондроитин, кальций и витамин C. Поддержка хрящевой ткани и подвижности.",
      introTitle:"Здоровье суставов и подвижность",
      introText:"Хандро — источник глюкозамина, хондроитина, кальция и витамина C. Поддерживает здоровье суставов и костей, улучшает подвижность и помогает при возрастных изменениях, высоких нагрузках и в спорте.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приготовления раствора, 30 саше-пакетов."},
        {h:"Состав 1 саше (5 г)", p:"Глюкозамина сульфат — 1000 мг<br>Хондроитина сульфат — 1000 мг<br>Кальций пиколинат — 1000 мг · Витамин C — 200 мг"}
      ],
      props:[
        {h:"Глюкозамин сульфат", p:"Способствует восстановлению и поддержанию хрящевой ткани, стимулирует синтез суставной жидкости, улучшает подвижность суставов и снижает дискомфорт при нагрузках."},
        {h:"Хондроитин сульфат", p:"Участвует в формировании хряща, замедляет его разрушение, улучшает эластичность и амортизационные свойства суставов, способствует удержанию влаги в хрящевой ткани."},
        {h:"Кальций пиколинат и витамин C", p:"Кальций — источник легкоусвояемого минерала для прочности костей. Витамин C участвует в синтезе коллагена, укрепляет соединительную ткань и оказывает антиоксидантное действие."}
      ],
      areas:[
        {h:"Суставы и кости", p:"Поддержка здоровья суставов и костей."},
        {h:"Подвижность", p:"Улучшение подвижности суставов, снижение скованности и дискомфорта при нагрузках."},
        {h:"Хрящевая ткань", p:"Поддержание и восстановление хрящевой ткани."},
        {h:"Профилактика", p:"Возрастные изменения опорно-двигательного аппарата, высокие нагрузки и спорт."}
      ],
      dosageText:"Взрослым — по 1 саше (5 г) в день. Содержимое растворить в 150–200 мл воды комнатной температуры, тщательно размешать и принимать во время или после еды. Продолжительность приёма — 1 месяц, при необходимости повторить после консультации специалиста.",
      dosageStats:[{n:"1",l:"саше (5 г) в день"},{n:"1",l:"месяц курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов. Беременность и кормление грудью — по рекомендации специалиста. Детям — после консультации."},
        {h:"Побочные действия", p:"Возможны индивидуальные аллергические реакции, расстройства пищеварения. При появлении прекратить приём и обратиться к специалисту."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Handro",
      heroSub:"Powder for joints and bones: glucosamine, chondroitin, calcium and vitamin C. Support for cartilage and mobility.",
      introTitle:"Joint health and mobility",
      introText:"Handro is a source of glucosamine, chondroitin, calcium and vitamin C. It supports joint and bone health, improves mobility and helps with age-related changes, high loads and sports.",
      infoCards:[
        {h:"Form", p:"Powder for an oral solution, 30 sachets."},
        {h:"Composition per sachet (5 g)", p:"Glucosamine sulfate — 1000 mg<br>Chondroitin sulfate — 1000 mg<br>Calcium picolinate — 1000 mg · Vitamin C — 200 mg"}
      ],
      props:[
        {h:"Glucosamine sulfate", p:"Helps restore and maintain cartilage, stimulates synovial fluid synthesis, improves joint mobility and reduces discomfort under load."},
        {h:"Chondroitin sulfate", p:"Participates in cartilage formation, slows its breakdown, improves elasticity and shock-absorbing properties of joints and helps retain moisture in cartilage."},
        {h:"Calcium picolinate and vitamin C", p:"Calcium is a source of an easily absorbed mineral for bone strength. Vitamin C is involved in collagen synthesis, strengthens connective tissue and has an antioxidant effect."}
      ],
      areas:[
        {h:"Joints & bones", p:"Support of joint and bone health."},
        {h:"Mobility", p:"Improved joint mobility, reduced stiffness and discomfort under load."},
        {h:"Cartilage", p:"Maintenance and restoration of cartilage tissue."},
        {h:"Prevention", p:"Age-related changes of the musculoskeletal system, high loads and sports."}
      ],
      dosageText:"Adults — 1 sachet (5 g) a day. Dissolve the contents in 150–200 ml of room-temperature water, mix thoroughly and take during or after meals. Duration: 1 month, may be repeated after consulting a specialist.",
      dosageStats:[{n:"1",l:"sachet (5 g) a day"},{n:"1",l:"month course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components. Pregnancy and breastfeeding — on a specialist's recommendation. Children — after consultation."},
        {h:"Side effects", p:"Individual allergic reactions and digestive disturbances are possible. If they occur, stop use and consult a specialist."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Handro",
      heroSub:"Polvere per articolazioni e ossa: glucosamina, condroitina, calcio e vitamina C. Sostegno della cartilagine e della mobilità.",
      introTitle:"Salute articolare e mobilità",
      introText:"Handro è una fonte di glucosamina, condroitina, calcio e vitamina C. Sostiene la salute di articolazioni e ossa, migliora la mobilità e aiuta in caso di cambiamenti legati all'età, carichi elevati e sport.",
      infoCards:[
        {h:"Formato", p:"Polvere per soluzione orale, 30 bustine."},
        {h:"Composizione per bustina (5 g)", p:"Glucosamina solfato — 1000 mg<br>Condroitina solfato — 1000 mg<br>Calcio picolinato — 1000 mg · Vitamina C — 200 mg"}
      ],
      props:[
        {h:"Glucosamina solfato", p:"Aiuta a ripristinare e mantenere la cartilagine, stimola la sintesi del liquido sinoviale, migliora la mobilità articolare e riduce il disagio sotto carico."},
        {h:"Condroitina solfato", p:"Partecipa alla formazione della cartilagine, ne rallenta la degradazione, migliora l'elasticità e le proprietà ammortizzanti delle articolazioni e aiuta a trattenere l'umidità nella cartilagine."},
        {h:"Calcio picolinato e vitamina C", p:"Il calcio è una fonte di minerale facilmente assorbibile per la robustezza ossea. La vitamina C partecipa alla sintesi del collagene, rafforza il tessuto connettivo e ha effetto antiossidante."}
      ],
      areas:[
        {h:"Articolazioni e ossa", p:"Sostegno della salute di articolazioni e ossa."},
        {h:"Mobilità", p:"Migliore mobilità articolare, ridotta rigidità e disagio sotto carico."},
        {h:"Cartilagine", p:"Mantenimento e ripristino del tessuto cartilagineo."},
        {h:"Prevenzione", p:"Cambiamenti legati all'età dell'apparato muscolo-scheletrico, carichi elevati e sport."}
      ],
      dosageText:"Adulti — 1 bustina (5 g) al giorno. Sciogliere il contenuto in 150–200 ml di acqua a temperatura ambiente, mescolare bene e assumere durante o dopo i pasti. Durata: 1 mese, ripetibile dopo aver consultato uno specialista.",
      dosageStats:[{n:"1",l:"bustina (5 g) al giorno"},{n:"1",l:"mese di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti. Gravidanza e allattamento — su consiglio dello specialista. Bambini — dopo consulto."},
        {h:"Effetti collaterali", p:"Sono possibili reazioni allergiche individuali e disturbi digestivi. In tal caso interrompere l'uso e consultare uno specialista."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Handro",
      heroSub:"Bo‘g‘imlar va suyaklar uchun kukun: glyukozamin, xondroitin, kalsiy va C vitamini. Tog‘ay to‘qimasi va harakatchanlikni qo‘llab-quvvatlash.",
      introTitle:"Bo‘g‘imlar salomatligi va harakatchanlik",
      introText:"Handro — glyukozamin, xondroitin, kalsiy va C vitamini manbai. Bo‘g‘imlar va suyaklar salomatligini qo‘llab-quvvatlaydi, harakatchanlikni yaxshilaydi va yoshga bog‘liq o‘zgarishlar, yuqori yuklamalar va sportda yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Eritma tayyorlash uchun kukun, 30 sashe-paket."},
        {h:"1 sashe (5 g) tarkibi", p:"Glyukozamin sulfati — 1000 mg<br>Xondroitin sulfati — 1000 mg<br>Kalsiy pikolinat — 1000 mg · C vitamini — 200 mg"}
      ],
      props:[
        {h:"Glyukozamin sulfati", p:"Tog‘ay to‘qimasini tiklash va saqlashga yordam beradi, bo‘g‘im suyuqligi sintezini rag‘batlantiradi, bo‘g‘imlar harakatchanligini yaxshilaydi va yuklamalarda noqulaylikni kamaytiradi."},
        {h:"Xondroitin sulfati", p:"Tog‘ay hosil bo‘lishida ishtirok etadi, uning yemirilishini sekinlashtiradi, bo‘g‘imlarning elastikligi va amortizatsion xususiyatlarini yaxshilaydi, tog‘ay to‘qimasida namlikni ushlab turishga yordam beradi."},
        {h:"Kalsiy pikolinat va C vitamini", p:"Kalsiy — suyaklar mustahkamligi uchun oson so‘riladigan mineral manbai. C vitamini kollagen sintezida ishtirok etadi, biriktiruvchi to‘qimani mustahkamlaydi va antioksidant ta’sir ko‘rsatadi."}
      ],
      areas:[
        {h:"Bo‘g‘imlar va suyaklar", p:"Bo‘g‘imlar va suyaklar salomatligini qo‘llab-quvvatlash."},
        {h:"Harakatchanlik", p:"Bo‘g‘imlar harakatchanligini yaxshilash, yuklamalarda qotib qolish va noqulaylikni kamaytirish."},
        {h:"Tog‘ay to‘qimasi", p:"Tog‘ay to‘qimasini saqlash va tiklash."},
        {h:"Profilaktika", p:"Tayanch-harakat apparatidagi yoshga bog‘liq o‘zgarishlar, yuqori yuklamalar va sport."}
      ],
      dosageText:"Kattalarga — kuniga 1 sashedan (5 g). Tarkibini 150–200 ml xona haroratidagi suvda eritib, yaxshilab aralashtiring va ovqat vaqtida yoki ovqatdan keyin qabul qiling. Qabul davomiyligi — 1 oy, zarur bo‘lganda mutaxassis bilan maslahatlashgandan keyin takrorlash mumkin.",
      dosageStats:[{n:"1",l:"sashe (5 g) kuniga"},{n:"1",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik. Homiladorlik va emizish — mutaxassis tavsiyasiga ko‘ra. Bolalarga — maslahatdan keyin."},
        {h:"Nojo‘ya ta’sirlar", p:"Individual allergik reaksiyalar, hazm buzilishlari bo‘lishi mumkin. Yuzaga kelsa, qabulni to‘xtatib, mutaxassisga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "inozipraym-men": {
    cat: "powders",
    img: "img/prod/inozipraym-men.webp",
    doc: "downloads/inozipraym-men-ru.docx",
    doc: "downloads/inozipraym-men-instrukciya.docx",
    ru: {
      name:"Инозипрайм Men",
      heroSub:"Научно обоснованный нутрицевтик для мужского здоровья. 12 компонентов для репродукции, тонуса и гормонального баланса.",
      introTitle:"Комплексная поддержка мужского здоровья",
      introText:"Инозипрайм Men — нутрицевтик из клинически изученных компонентов для поддержки репродуктивной функции, сперматогенеза, качества спермы, гормонального баланса и жизненного тонуса. Ориентирован на мужчин со снижением качества спермы, субфертильностью и дефицитом тестостерона.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок в саше-пакетах по 5 г, №30."},
        {h:"Состав 1 саше (5 г)", p:"D-хиро-инозитол — 1000 мг · L-аргинин — 500 мг<br>Цинк цитрат — 30 мг · Вит. E — 30 мг · Мака — 200 мг<br>Йохимбе — 200 мг · Вит. C — 200 мг · Женьшень — 100 мг<br>B6 — 10 мг · B12 — 2 мкг · Селен — 55 мкг · Хром — 40 мкг"}
      ],
      props:[
        {h:"D-хиро-инозитол", p:"Улучшает чувствительность к инсулину, сперматогенез и метаболизм андрогенов. Участвует в регуляции углеводного обмена и энергетических процессов."},
        {h:"L-аргинин + тонизирующий комплекс", p:"L-аргинин — предшественник оксида азота, поддерживает сосудистый тонус, микроциркуляцию и эректильную функцию. Мака, йохимбе и женьшень поддерживают либидо, энергию и стрессоустойчивость."},
        {h:"Антиоксиданты и микронутриенты", p:"Цинк участвует в синтезе тестостерона и сперматогенезе; витамины C и E, селен и хром обеспечивают антиоксидантную защиту сперматозоидов и обменные процессы; B6 и B12 поддерживают нервную систему и энергообмен."}
      ],
      areas:[
        {h:"Либидо и эрекция", p:"Снижение либидо, нарушения эректильной функции."},
        {h:"Фертильность", p:"Снижение качества спермы, подготовка к зачатию."},
        {h:"Тонус и энергия", p:"Повышенная утомляемость, снижение общего тонуса, высокие нагрузки и стресс."},
        {h:"Гормоны", p:"Поддержка гормонального баланса и репродуктивного здоровья."}
      ],
      dosageText:"Суточная доза — 1 саше (5 г). Растворить в 50–100 мл воды комнатной температуры и принять сразу во время еды. Минимальный курс — 1 месяц, для оптимального результата — 3 месяца. Рекомендуется контроль спермограммы до курса и через 3 месяца.",
      dosageStats:[{n:"1",l:"саше (5 г) в сутки"},{n:"1–3",l:"месяца курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость, возраст до 18 лет, тяжёлая почечная и печёночная недостаточность. С осторожностью при сердечно-сосудистых заболеваниях и нарушениях давления."},
        {h:"Побочные действия", p:"При появлении побочных действий прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в сухом и защищённом от света месте. Вскрытое саше использовать немедленно."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117. Произведено по заказу HVARA SRL, Milano, Italy."
    },
    en: {
      name:"Inozipraym Men",
      heroSub:"A science-based nutraceutical for men's health. 12 components for reproduction, vitality and hormonal balance.",
      introTitle:"Comprehensive support for men's health",
      introText:"Inozipraym Men is a nutraceutical of clinically studied components supporting reproductive function, spermatogenesis, sperm quality, hormonal balance and vitality. It targets men with reduced sperm quality, subfertility and testosterone deficiency.",
      infoCards:[
        {h:"Form", p:"Powder in 5 g sachets, No.30."},
        {h:"Composition per sachet (5 g)", p:"D-chiro-inositol — 1000 mg · L-arginine — 500 mg<br>Zinc citrate — 30 mg · Vit. E — 30 mg · Maca — 200 mg<br>Yohimbe — 200 mg · Vit. C — 200 mg · Ginseng — 100 mg<br>B6 — 10 mg · B12 — 2 mcg · Selenium — 55 mcg · Chromium — 40 mcg"}
      ],
      props:[
        {h:"D-chiro-inositol", p:"Improves insulin sensitivity, spermatogenesis and androgen metabolism. Participates in regulating carbohydrate metabolism and energy processes."},
        {h:"L-arginine + tonic complex", p:"L-arginine is a nitric oxide precursor supporting vascular tone, microcirculation and erectile function. Maca, yohimbe and ginseng support libido, energy and stress resistance."},
        {h:"Antioxidants and micronutrients", p:"Zinc is involved in testosterone synthesis and spermatogenesis; vitamins C and E, selenium and chromium provide antioxidant protection of sperm and metabolic processes; B6 and B12 support the nervous system and energy metabolism."}
      ],
      areas:[
        {h:"Libido & erection", p:"Reduced libido, erectile dysfunction."},
        {h:"Fertility", p:"Reduced sperm quality, preparation for conception."},
        {h:"Tone & energy", p:"Increased fatigue, reduced overall tone, high loads and stress."},
        {h:"Hormones", p:"Support of hormonal balance and reproductive health."}
      ],
      dosageText:"Daily dose — 1 sachet (5 g). Dissolve in 50–100 ml of room-temperature water and take immediately with meals. Minimum course — 1 month, 3 months for an optimal result. A spermogram check before the course and after 3 months is recommended.",
      dosageStats:[{n:"1",l:"sachet (5 g) a day"},{n:"1–3",l:"months course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance, age under 18, severe renal and hepatic insufficiency. Use with caution in cardiovascular diseases and blood pressure disorders."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"At no more than 25 °C, in a dry place protected from light. Use an opened sachet immediately."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117. Made to order for HVARA SRL, Milan, Italy."
    },
    it: {
      name:"Inozipraym Men",
      heroSub:"Un nutraceutico scientificamente fondato per la salute maschile. 12 componenti per riproduzione, vitalità ed equilibrio ormonale.",
      introTitle:"Sostegno completo alla salute maschile",
      introText:"Inozipraym Men è un nutraceutico di componenti clinicamente studiati che sostiene la funzione riproduttiva, la spermatogenesi, la qualità dello sperma, l'equilibrio ormonale e la vitalità. È destinato a uomini con ridotta qualità dello sperma, subfertilità e carenza di testosterone.",
      infoCards:[
        {h:"Formato", p:"Polvere in bustine da 5 g, n.30."},
        {h:"Composizione per bustina (5 g)", p:"D-chiro-inositolo — 1000 mg · L-arginina — 500 mg<br>Zinco citrato — 30 mg · Vit. E — 30 mg · Maca — 200 mg<br>Yohimbe — 200 mg · Vit. C — 200 mg · Ginseng — 100 mg<br>B6 — 10 mg · B12 — 2 mcg · Selenio — 55 mcg · Cromo — 40 mcg"}
      ],
      props:[
        {h:"D-chiro-inositolo", p:"Migliora la sensibilità all'insulina, la spermatogenesi e il metabolismo degli androgeni. Partecipa alla regolazione del metabolismo dei carboidrati e dei processi energetici."},
        {h:"L-arginina + complesso tonico", p:"La L-arginina è un precursore dell'ossido nitrico che sostiene il tono vascolare, la microcircolazione e la funzione erettile. Maca, yohimbe e ginseng sostengono libido, energia e resistenza allo stress."},
        {h:"Antiossidanti e micronutrienti", p:"Lo zinco partecipa alla sintesi del testosterone e alla spermatogenesi; le vitamine C ed E, selenio e cromo forniscono protezione antiossidante agli spermatozoi e ai processi metabolici; B6 e B12 sostengono il sistema nervoso e il metabolismo energetico."}
      ],
      areas:[
        {h:"Libido ed erezione", p:"Riduzione della libido, disfunzione erettile."},
        {h:"Fertilità", p:"Ridotta qualità dello sperma, preparazione al concepimento."},
        {h:"Tono ed energia", p:"Maggiore stanchezza, ridotto tono generale, carichi elevati e stress."},
        {h:"Ormoni", p:"Sostegno dell'equilibrio ormonale e della salute riproduttiva."}
      ],
      dosageText:"Dose giornaliera — 1 bustina (5 g). Sciogliere in 50–100 ml di acqua a temperatura ambiente e assumere subito durante i pasti. Ciclo minimo — 1 mese, 3 mesi per un risultato ottimale. Si raccomanda un controllo dello spermiogramma prima del ciclo e dopo 3 mesi.",
      dosageStats:[{n:"1",l:"bustina (5 g) al giorno"},{n:"1–3",l:"mesi di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale, età inferiore a 18 anni, grave insufficienza renale ed epatica. Usare con cautela in caso di malattie cardiovascolari e disturbi della pressione."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"A non più di 25 °C, in luogo asciutto e al riparo dalla luce. Usare subito la bustina aperta."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117. Prodotto su ordine per HVARA SRL, Milano, Italia."
    },
    uz: {
      name:"Inozipraym Men",
      heroSub:"Erkaklar salomatligi uchun ilmiy asoslangan nutritsevtik. Reproduksiya, tetiklik va gormonal muvozanat uchun 12 komponent.",
      introTitle:"Erkaklar salomatligini majmuaviy qo‘llab-quvvatlash",
      introText:"Inozipraym Men — reproduktiv funksiya, spermatogenez, sperma sifati, gormonal muvozanat va hayotiy tetiklikni qo‘llab-quvvatlash uchun klinik o‘rganilgan komponentlardan iborat nutritsevtik. Sperma sifati pasaygan, subfertil va testosteron tanqisligi bo‘lgan erkaklarga mo‘ljallangan.",
      infoCards:[
        {h:"Formati", p:"5 g li sashe-paketlarda kukun, №30."},
        {h:"1 sashe (5 g) tarkibi", p:"D-xiro-inozitol — 1000 mg · L-arginin — 500 mg<br>Rux sitrat — 30 mg · E vit. — 30 mg · Maka — 200 mg<br>Yoximbe — 200 mg · C vit. — 200 mg · Jenshen — 100 mg<br>B6 — 10 mg · B12 — 2 mkg · Selen — 55 mkg · Xrom — 40 mkg"}
      ],
      props:[
        {h:"D-xiro-inozitol", p:"Insulinga sezuvchanlik, spermatogenez va androgenlar almashinuvini yaxshilaydi. Uglevod almashinuvi va energiya jarayonlarini tartibga solishda ishtirok etadi."},
        {h:"L-arginin + tetiklashtiruvchi majmua", p:"L-arginin — azot oksidi o‘tmishdoshi, tomir tonusi, mikrotsirkulyatsiya va erektil funksiyani qo‘llab-quvvatlaydi. Maka, yoximbe va jenshen libido, energiya va stressga chidamlilikni qo‘llab-quvvatlaydi."},
        {h:"Antioksidantlar va mikronutriyentlar", p:"Rux testosteron sintezi va spermatogenezda ishtirok etadi; C va E vitaminlari, selen va xrom spermatozoidlarni antioksidant himoya qiladi va almashinuv jarayonlarini ta’minlaydi; B6 va B12 asab tizimi va energiya almashinuvini qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Libido va erektsiya", p:"Libido pasayishi, erektil funksiya buzilishlari."},
        {h:"Fertillik", p:"Sperma sifati pasayishi, urug‘lanishga tayyorgarlik."},
        {h:"Tetiklik va energiya", p:"Charchoq ortishi, umumiy tetiklik pasayishi, yuqori yuklamalar va stress."},
        {h:"Gormonlar", p:"Gormonal muvozanat va reproduktiv salomatlikni qo‘llab-quvvatlash."}
      ],
      dosageText:"Sutkalik doza — 1 sashe (5 g). Xona haroratidagi 50–100 ml suvda eritib, ovqat vaqtida darhol qabul qiling. Minimal kurs — 1 oy, optimal natija uchun — 3 oy. Kursdan oldin va 3 oydan keyin spermogramma nazorati tavsiya etiladi.",
      dosageStats:[{n:"1",l:"sashe (5 g) sutkada"},{n:"1–3",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Individual chidamsizlik, 18 yoshgacha, og‘ir buyrak va jigar yetishmovchiligi. Yurak-qon tomir kasalliklari va bosim buzilishlarida ehtiyotkorlik bilan."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, quruq va yorug‘likdan himoyalangan joyda. Ochilgan sasheni darhol ishlating."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117. HVARA SRL, Milano, Italiya buyurtmasi bo‘yicha ishlab chiqarilgan."
    }
  },

  "velartrium": {
    cat: "powders",
    img: "img/prod/velartrium.webp",
    ru: {
      name:"Велартриум",
      heroSub:"Порошок для суставов и костей: глюкозамин, МСМ, хондроитин, кальций, гиалуроновая кислота, магний и витамин D3.",
      introTitle:"Комплекс для суставов и хрящей",
      introText:"Велартриум — порошок для приготовления суспензии с хондропротекторами, гиалуроновой кислотой, минералами и витамином D3. Поддерживает здоровье суставов, хрящевой ткани и костей. Без глютена и лактозы.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приготовления суспензии. Без глютена, без лактозы."},
        {h:"Состав", p:"Глюкозамина сульфат — 750 мг · МСМ — 750 мг<br>Хондроитина сульфат — 600 мг · Кальция фосфат — 500 мг<br>Гиалуроновая кислота — 100 мг · Магния глюконат — 16,2 мг · Вит. D3 — 400 МЕ"}
      ],
      props:[
        {h:"Глюкозамин + Хондроитин + МСМ", p:"Хондропротекторы, восстанавливающие и защищающие хрящевую ткань: способствуют синтезу компонентов хряща, замедляют его разрушение, улучшают эластичность и подвижность суставов."},
        {h:"Гиалуроновая кислота", p:"Важный компонент суставной (синовиальной) жидкости. Улучшает амортизацию и скольжение суставных поверхностей, способствует удержанию влаги в хрящевой ткани."},
        {h:"Кальций, магний и витамин D3", p:"Кальций и магний поддерживают прочность костей и работу мышц. Витамин D3 усиливает усвоение кальция и его направление в костную ткань."}
      ],
      areas:[
        {h:"Суставы", p:"Поддержка здоровья суставов и хрящевой ткани."},
        {h:"Подвижность", p:"Улучшение подвижности и амортизации суставов."},
        {h:"Кости", p:"Поддержание прочности костной ткани."},
        {h:"Профилактика", p:"Возрастные изменения и повышенные нагрузки на суставы."}
      ],
      dosageText:"Содержимое саше растворить в воде и принимать внутрь во время или после еды. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"1",l:"саше на приём"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов. При беременности, кормлении грудью и в детском возрасте — после консультации со специалистом."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Velartrium",
      heroSub:"Powder for joints and bones: glucosamine, MSM, chondroitin, calcium, hyaluronic acid, magnesium and vitamin D3.",
      introTitle:"A complex for joints and cartilage",
      introText:"Velartrium is a powder for an oral suspension with chondroprotectors, hyaluronic acid, minerals and vitamin D3. It supports the health of joints, cartilage and bones. Gluten- and lactose-free.",
      infoCards:[
        {h:"Form", p:"Powder for an oral suspension. Gluten-free, lactose-free."},
        {h:"Composition", p:"Glucosamine sulfate — 750 mg · MSM — 750 mg<br>Chondroitin sulfate — 600 mg · Calcium phosphate — 500 mg<br>Hyaluronic acid — 100 mg · Magnesium gluconate — 16.2 mg · Vit. D3 — 400 IU"}
      ],
      props:[
        {h:"Glucosamine + Chondroitin + MSM", p:"Chondroprotectors that restore and protect cartilage: they promote the synthesis of cartilage components, slow its breakdown and improve joint elasticity and mobility."},
        {h:"Hyaluronic acid", p:"An important component of synovial (joint) fluid. It improves cushioning and gliding of joint surfaces and helps retain moisture in cartilage."},
        {h:"Calcium, magnesium and vitamin D3", p:"Calcium and magnesium support bone strength and muscle function. Vitamin D3 enhances calcium absorption and its direction into bone tissue."}
      ],
      areas:[
        {h:"Joints", p:"Support of joint and cartilage health."},
        {h:"Mobility", p:"Improved joint mobility and cushioning."},
        {h:"Bones", p:"Maintenance of bone strength."},
        {h:"Prevention", p:"Age-related changes and increased joint load."}
      ],
      dosageText:"Dissolve the sachet contents in water and take orally during or after meals. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"1",l:"sachet per intake"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components. During pregnancy, breastfeeding and childhood — after consulting a specialist."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Velartrium",
      heroSub:"Polvere per articolazioni e ossa: glucosamina, MSM, condroitina, calcio, acido ialuronico, magnesio e vitamina D3.",
      introTitle:"Un complesso per articolazioni e cartilagine",
      introText:"Velartrium è una polvere per sospensione orale con condroprotettori, acido ialuronico, minerali e vitamina D3. Sostiene la salute di articolazioni, cartilagine e ossa. Senza glutine e lattosio.",
      infoCards:[
        {h:"Formato", p:"Polvere per sospensione orale. Senza glutine, senza lattosio."},
        {h:"Composizione", p:"Glucosamina solfato — 750 mg · MSM — 750 mg<br>Condroitina solfato — 600 mg · Fosfato di calcio — 500 mg<br>Acido ialuronico — 100 mg · Magnesio gluconato — 16,2 mg · Vit. D3 — 400 UI"}
      ],
      props:[
        {h:"Glucosamina + Condroitina + MSM", p:"Condroprotettori che ripristinano e proteggono la cartilagine: favoriscono la sintesi dei componenti cartilaginei, ne rallentano la degradazione e migliorano l'elasticità e la mobilità articolare."},
        {h:"Acido ialuronico", p:"Un componente importante del liquido sinoviale (articolare). Migliora l'ammortizzazione e lo scorrimento delle superfici articolari e aiuta a trattenere l'umidità nella cartilagine."},
        {h:"Calcio, magnesio e vitamina D3", p:"Calcio e magnesio sostengono la robustezza ossea e la funzione muscolare. La vitamina D3 potenzia l'assorbimento del calcio e il suo indirizzamento nel tessuto osseo."}
      ],
      areas:[
        {h:"Articolazioni", p:"Sostegno della salute di articolazioni e cartilagine."},
        {h:"Mobilità", p:"Migliore mobilità e ammortizzazione articolare."},
        {h:"Ossa", p:"Mantenimento della robustezza ossea."},
        {h:"Prevenzione", p:"Cambiamenti legati all'età e maggiore carico articolare."}
      ],
      dosageText:"Sciogliere il contenuto della bustina in acqua e assumere per via orale durante o dopo i pasti. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"1",l:"bustina per assunzione"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti. In gravidanza, allattamento e nell'infanzia — dopo aver consultato uno specialista."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Velartrium",
      heroSub:"Bo‘g‘imlar va suyaklar uchun kukun: glyukozamin, MSM, xondroitin, kalsiy, gialuron kislotasi, magniy va D3 vitamini.",
      introTitle:"Bo‘g‘imlar va tog‘aylar uchun majmua",
      introText:"Velartrium — xondroprotektorlar, gialuron kislotasi, minerallar va D3 vitamini bilan suspenziya tayyorlash uchun kukun. Bo‘g‘imlar, tog‘ay to‘qimasi va suyaklar salomatligini qo‘llab-quvvatlaydi. Glyuten va laktozasiz.",
      infoCards:[
        {h:"Formati", p:"Suspenziya tayyorlash uchun kukun. Glyutensiz, laktozasiz."},
        {h:"Tarkibi", p:"Glyukozamin sulfati — 750 mg · MSM — 750 mg<br>Xondroitin sulfati — 600 mg · Kalsiy fosfati — 500 mg<br>Gialuron kislotasi — 100 mg · Magniy glyukonati — 16,2 mg · D3 vit. — 400 XB"}
      ],
      props:[
        {h:"Glyukozamin + Xondroitin + MSM", p:"Tog‘ay to‘qimasini tiklovchi va himoya qiluvchi xondroprotektorlar: tog‘ay komponentlari sinteziga yordam beradi, uning yemirilishini sekinlashtiradi, bo‘g‘imlar elastikligi va harakatchanligini yaxshilaydi."},
        {h:"Gialuron kislotasi", p:"Bo‘g‘im (sinovial) suyuqligining muhim komponenti. Bo‘g‘im yuzalarining amortizatsiyasi va sirpanishini yaxshilaydi, tog‘ay to‘qimasida namlikni ushlab turishga yordam beradi."},
        {h:"Kalsiy, magniy va D3 vitamini", p:"Kalsiy va magniy suyaklar mustahkamligi va mushaklar ishini qo‘llab-quvvatlaydi. D3 vitamini kalsiy so‘rilishini va uni suyak to‘qimasiga yo‘naltirishni kuchaytiradi."}
      ],
      areas:[
        {h:"Bo‘g‘imlar", p:"Bo‘g‘imlar va tog‘ay to‘qimasi salomatligini qo‘llab-quvvatlash."},
        {h:"Harakatchanlik", p:"Bo‘g‘imlar harakatchanligi va amortizatsiyasini yaxshilash."},
        {h:"Suyaklar", p:"Suyak to‘qimasi mustahkamligini saqlash."},
        {h:"Profilaktika", p:"Yoshga bog‘liq o‘zgarishlar va bo‘g‘imlarga ortgan yuklamalar."}
      ],
      dosageText:"Sashe tarkibini suvda eritib, ovqat vaqtida yoki ovqatdan keyin og‘iz orqali qabul qiling. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"1",l:"sashe qabulga"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik. Homiladorlik, emizish va bolalik davrida — mutaxassis bilan maslahatlashgandan keyin."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "normadiz": {
    cat: "powders",
    img: "img/prod/normadiz.webp",
    doc: "downloads/normadiz-instrukciya.docx",
    ru: {
      name:"Нормадиз",
      heroSub:"Пробиотик на основе спор Bacillus clausii (4 млрд). Восстановление и баланс микрофлоры кишечника, в том числе при приёме антибиотиков.",
      introTitle:"Баланс микрофлоры кишечника",
      introText:"Нормадиз — пробиотик на основе спор Bacillus clausii, естественного обитателя кишечника. Восстанавливает нормальную микрофлору при дисбактериозе и приёме антибиотиков. Подходит взрослым и детям с 1 месяца.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приготовления суспензии, 10 флаконов по 1,55 г."},
        {h:"Состав 1 дозы", p:"Споры Bacillus clausii — 4 млрд.<br>Вспомогательные: мальтодекстрин, МКЦ, крахмал."}
      ],
      props:[
        {h:"Bacillus clausii", p:"Микроорганизм, в норме присутствующий в кишечнике. Споры устойчивы к кислоте желудочного сока и достигают кишечника в неповреждённом виде, где превращаются в активные клетки."},
        {h:"Устойчивость к антибиотикам", p:"Bacillus clausii устойчив к пенициллинам, цефалоспоринам, тетрациклинам, макролидам и другим антибиотикам, поэтому препарат можно принимать в промежутке между приёмами антибиотиков для восстановления флоры."},
        {h:"Синтез витаминов", p:"Bacillus clausii способен вырабатывать витамины группы B, что особенно важно при нарушении кишечной флоры, вызванном антибиотиками или химиотерапией."}
      ],
      areas:[
        {h:"Дисбактериоз", p:"Лечение и профилактика дисбактериоза и связанного с ним дисвитаминоза."},
        {h:"После антибиотиков", p:"Восстановление микрофлоры при лечении антибиотиками и химиотерапией."},
        {h:"ЖКТ у детей", p:"Острые и хронические ЖКТ-заболевания у младенцев при интоксикации или дисбактериозе."},
        {h:"Микрофлора", p:"Поддержание баланса микрофлоры кишечника."}
      ],
      dosageText:"Содержимое флакона развести в воде или другом напитке (молоко, чай, сок), только для приёма внутрь. Взрослым и детям — по 1 дозе (1 флакон) в сутки. Курс: дисбактериоз — 5–7 дней; при антибиотикотерапии — 5–10 дней; хронические заболевания — до 30 дней. Можно применять у детей с 1 месяца.",
      dosageStats:[{n:"1",l:"флакон (4 млрд) в сутки"},{n:"5–30",l:"дней курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Не противопоказан при беременности и лактации."},
        {h:"Побочные действия", p:"Аллергические реакции — редко. При появлении прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Normadiz",
      heroSub:"A probiotic based on Bacillus clausii spores (4 billion). Restoration and balance of gut microflora, including during antibiotic use.",
      introTitle:"Gut microflora balance",
      introText:"Normadiz is a probiotic based on Bacillus clausii spores, a natural inhabitant of the gut. It restores normal microflora in dysbacteriosis and during antibiotic use. Suitable for adults and children from 1 month.",
      infoCards:[
        {h:"Form", p:"Powder for an oral suspension, 10 vials of 1.55 g."},
        {h:"Composition per dose", p:"Bacillus clausii spores — 4 billion<br>Excipients: maltodextrin, MCC, starch."}
      ],
      props:[
        {h:"Bacillus clausii", p:"A microorganism normally present in the gut. The spores are resistant to gastric acid and reach the intestine intact, where they turn into active cells."},
        {h:"Antibiotic resistance", p:"Bacillus clausii is resistant to penicillins, cephalosporins, tetracyclines, macrolides and other antibiotics, so it can be taken between antibiotic doses to restore microflora."},
        {h:"Vitamin synthesis", p:"Bacillus clausii can produce B vitamins, which is especially important when gut flora is disturbed by antibiotics or chemotherapy."}
      ],
      areas:[
        {h:"Dysbacteriosis", p:"Treatment and prevention of dysbacteriosis and related vitamin deficiency."},
        {h:"After antibiotics", p:"Restoration of microflora during antibiotic treatment and chemotherapy."},
        {h:"GI in children", p:"Acute and chronic GI conditions in infants with intoxication or dysbacteriosis."},
        {h:"Microflora", p:"Maintenance of gut microflora balance."}
      ],
      dosageText:"Dissolve the vial contents in water or another drink (milk, tea, juice), oral use only. Adults and children — 1 dose (1 vial) a day. Course: dysbacteriosis — 5–7 days; with antibiotics — 5–10 days; chronic conditions — up to 30 days. May be used in children from 1 month.",
      dosageStats:[{n:"1",l:"vial (4 billion) a day"},{n:"5–30",l:"days course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. Not contraindicated in pregnancy and lactation."},
        {h:"Side effects", p:"Allergic reactions — rare. If they occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Normadiz",
      heroSub:"Un probiotico a base di spore di Bacillus clausii (4 miliardi). Ripristino ed equilibrio della microflora intestinale, anche durante l'uso di antibiotici.",
      introTitle:"Equilibrio della microflora intestinale",
      introText:"Normadiz è un probiotico a base di spore di Bacillus clausii, un abitante naturale dell'intestino. Ripristina la microflora normale in caso di disbatteriosi e durante l'uso di antibiotici. Adatto ad adulti e bambini dai 1 mese.",
      infoCards:[
        {h:"Formato", p:"Polvere per sospensione orale, 10 flaconi da 1,55 g."},
        {h:"Composizione per dose", p:"Spore di Bacillus clausii — 4 miliardi<br>Eccipienti: maltodestrina, MCC, amido."}
      ],
      props:[
        {h:"Bacillus clausii", p:"Un microrganismo normalmente presente nell'intestino. Le spore sono resistenti all'acido gastrico e raggiungono l'intestino intatte, dove si trasformano in cellule attive."},
        {h:"Resistenza agli antibiotici", p:"Il Bacillus clausii è resistente a penicilline, cefalosporine, tetracicline, macrolidi e altri antibiotici, quindi può essere assunto tra le dosi di antibiotico per ripristinare la microflora."},
        {h:"Sintesi di vitamine", p:"Il Bacillus clausii può produrre vitamine del gruppo B, particolarmente importante quando la flora intestinale è alterata da antibiotici o chemioterapia."}
      ],
      areas:[
        {h:"Disbatteriosi", p:"Trattamento e prevenzione della disbatteriosi e della relativa carenza vitaminica."},
        {h:"Dopo gli antibiotici", p:"Ripristino della microflora durante il trattamento antibiotico e la chemioterapia."},
        {h:"Gastrointestinale nei bambini", p:"Disturbi GI acuti e cronici nei lattanti con intossicazione o disbatteriosi."},
        {h:"Microflora", p:"Mantenimento dell'equilibrio della microflora intestinale."}
      ],
      dosageText:"Sciogliere il contenuto del flacone in acqua o altra bevanda (latte, tè, succo), solo per uso orale. Adulti e bambini — 1 dose (1 flacone) al giorno. Ciclo: disbatteriosi — 5–7 giorni; con antibiotici — 5–10 giorni; condizioni croniche — fino a 30 giorni. Utilizzabile nei bambini dai 1 mese.",
      dosageStats:[{n:"1",l:"flacone (4 mld) al giorno"},{n:"5–30",l:"giorni di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Non controindicato in gravidanza e allattamento."},
        {h:"Effetti collaterali", p:"Reazioni allergiche — rare. In tal caso interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Normadiz",
      heroSub:"Bacillus clausii sporalari (4 mlrd) asosidagi probiotik. Ichak mikroflorasini tiklash va muvozanatlash, shu jumladan antibiotiklar qabulida.",
      introTitle:"Ichak mikroflorasi muvozanati",
      introText:"Normadiz — ichakning tabiiy aholisi Bacillus clausii sporalari asosidagi probiotik. Disbakterioz va antibiotiklar qabulida normal mikroflorani tiklaydi. Kattalar va 1 oylikdan bolalarga mos.",
      infoCards:[
        {h:"Formati", p:"Suspenziya tayyorlash uchun kukun, 1,55 g li 10 flakon."},
        {h:"1 doza tarkibi", p:"Bacillus clausii sporalari — 4 mlrd.<br>Yordamchi: maltodekstrin, MKS, kraxmal."}
      ],
      props:[
        {h:"Bacillus clausii", p:"Odatda ichakda mavjud bo‘lgan mikroorganizm. Sporalar oshqozon shirasi kislotasiga chidamli va ichakka shikastlanmagan holda yetib boradi, u yerda faol hujayralarga aylanadi."},
        {h:"Antibiotiklarga chidamlilik", p:"Bacillus clausii penitsillinlar, sefalosporinlar, tetratsiklinlar, makrolidlar va boshqa antibiotiklarga chidamli, shuning uchun preparatni mikroflorani tiklash uchun antibiotiklar qabuli oralig‘ida ichish mumkin."},
        {h:"Vitaminlar sintezi", p:"Bacillus clausii B guruhi vitaminlarini ishlab chiqara oladi, bu ayniqsa antibiotiklar yoki kimyoterapiya sababli ichak florasi buzilganda muhim."}
      ],
      areas:[
        {h:"Disbakterioz", p:"Disbakterioz va u bilan bog‘liq disvitaminozni davolash va profilaktikasi."},
        {h:"Antibiotiklardan keyin", p:"Antibiotik davosi va kimyoterapiyada mikroflorani tiklash."},
        {h:"Bolalarda OIT", p:"Chaqaloqlarda intoksikatsiya yoki disbakteriozda o‘tkir va surunkali OIT kasalliklari."},
        {h:"Mikroflora", p:"Ichak mikroflorasi muvozanatini saqlash."}
      ],
      dosageText:"Flakon tarkibini suv yoki boshqa ichimlikda (sut, choy, sharbat) eritib, faqat og‘iz orqali qabul qiling. Kattalar va bolalarga — sutkasiga 1 doza (1 flakon). Kurs: disbakterioz — 5–7 kun; antibiotikoterapiyada — 5–10 kun; surunkali kasalliklar — 30 kungacha. 1 oylikdan bolalarda qo‘llash mumkin.",
      dosageStats:[{n:"1",l:"flakon (4 mlrd) sutkada"},{n:"5–30",l:"kunlik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Homiladorlik va emizishda qarshi ko‘rsatilmagan."},
        {h:"Nojo‘ya ta’sirlar", p:"Allergik reaksiyalar — kamdan-kam. Yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "levoargin": {
    cat: "solutions",
    img: "img/prod/levoargin.webp",
    ru: {
      name:"ЛевоАргин",
      heroSub:"Раствор для приёма внутрь с L-карнитином и аргинином. Энергия, сосудистый тонус и поддержка сердца.",
      introTitle:"Энергия и сосудистый тонус",
      introText:"ЛевоАргин — раствор для приёма внутрь на основе L-карнитина и аргинина. Способствует повышению энергии и работоспособности, поддерживает работу сердца, сосудов и обмен веществ.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь, 10 флаконов по 10 мл."},
        {h:"Состав на 10 мл", p:"L-карнитин — 2,0 г<br>Аргинин — 0,20 г<br>Вспомогательные: вода очищенная."}
      ],
      props:[
        {h:"L-карнитин", p:"Обеспечивает транспорт жирных кислот в митохондрии для выработки энергии, снижает утомляемость, повышает физическую и умственную работоспособность."},
        {h:"Аргинин", p:"Условно незаменимая аминокислота, предшественник оксида азота. Поддерживает тонус сосудов, микроциркуляцию и работу эндотелия."},
        {h:"Совместное действие", p:"Комбинация поддерживает энергетический обмен, сердечно-сосудистую систему и общий тонус организма при нагрузках."}
      ],
      areas:[
        {h:"Энергия", p:"Снижение утомляемости, повышение работоспособности."},
        {h:"Сердце и сосуды", p:"Поддержка сердечно-сосудистой системы и микроциркуляции."},
        {h:"Тонус", p:"Поддержка общего тонуса при физических и умственных нагрузках."},
        {h:"Обмен веществ", p:"Участие в энергетическом обмене."}
      ],
      dosageText:"Принимать внутрь. Содержимое флакона (10 мл) принимать согласно инструкции. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"10 мл",l:"один флакон"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"2 года. Отпускается без рецепта."}
      ],
      legal:"Перед применением необходимо ознакомиться с инструкцией. Производитель: ООО «HVARA», 220100, Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"LevoArgin",
      heroSub:"Oral solution with L-carnitine and arginine. Energy, vascular tone and heart support.",
      introTitle:"Energy and vascular tone",
      introText:"LevoArgin is an oral solution based on L-carnitine and arginine. It helps increase energy and performance and supports the heart, blood vessels and metabolism.",
      infoCards:[
        {h:"Form", p:"Oral solution, 10 vials of 10 ml."},
        {h:"Composition per 10 ml", p:"L-carnitine — 2.0 g<br>Arginine — 0.20 g<br>Excipients: purified water."}
      ],
      props:[
        {h:"L-carnitine", p:"Transports fatty acids into mitochondria to produce energy, reduces fatigue and increases physical and mental performance."},
        {h:"Arginine", p:"A conditionally essential amino acid and nitric oxide precursor. Supports vascular tone, microcirculation and endothelial function."},
        {h:"Combined action", p:"The combination supports energy metabolism, the cardiovascular system and overall vitality under load."}
      ],
      areas:[
        {h:"Energy", p:"Reduces fatigue, increases performance."},
        {h:"Heart & vessels", p:"Support of the cardiovascular system and microcirculation."},
        {h:"Tone", p:"Support of overall tone under physical and mental load."},
        {h:"Metabolism", p:"Participation in energy metabolism."}
      ],
      dosageText:"Take orally. Take the contents of a vial (10 ml) as directed. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"10 ml",l:"one vial"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"2 years. Available without prescription."}
      ],
      legal:"Read the instructions before use. Manufacturer: LLC HVARA, 220100, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"LevoArgin",
      heroSub:"Soluzione orale con L-carnitina e arginina. Energia, tono vascolare e sostegno al cuore.",
      introTitle:"Energia e tono vascolare",
      introText:"LevoArgin è una soluzione orale a base di L-carnitina e arginina. Aiuta ad aumentare l'energia e le prestazioni e sostiene il cuore, i vasi sanguigni e il metabolismo.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, 10 flaconi da 10 ml."},
        {h:"Composizione per 10 ml", p:"L-carnitina — 2,0 g<br>Arginina — 0,20 g<br>Eccipienti: acqua depurata."}
      ],
      props:[
        {h:"L-carnitina", p:"Trasporta gli acidi grassi nei mitocondri per produrre energia, riduce la stanchezza e aumenta le prestazioni fisiche e mentali."},
        {h:"Arginina", p:"Un amminoacido condizionatamente essenziale e precursore dell'ossido nitrico. Sostiene il tono vascolare, la microcircolazione e la funzione endoteliale."},
        {h:"Azione combinata", p:"La combinazione sostiene il metabolismo energetico, il sistema cardiovascolare e la vitalità generale sotto sforzo."}
      ],
      areas:[
        {h:"Energia", p:"Riduce la stanchezza, aumenta le prestazioni."},
        {h:"Cuore e vasi", p:"Sostegno del sistema cardiovascolare e della microcircolazione."},
        {h:"Tono", p:"Sostegno del tono generale sotto sforzo fisico e mentale."},
        {h:"Metabolismo", p:"Partecipazione al metabolismo energetico."}
      ],
      dosageText:"Assumere per via orale. Assumere il contenuto di un flacone (10 ml) secondo le indicazioni. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"10 ml",l:"un flacone"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"2 anni. Disponibile senza ricetta."}
      ],
      legal:"Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, 220100, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"LevoArgin",
      heroSub:"L-karnitin va arginin bilan ichimlik eritmasi. Energiya, tomir tonusi va yurakni qo‘llab-quvvatlash.",
      introTitle:"Energiya va tomir tonusi",
      introText:"LevoArgin — L-karnitin va arginin asosidagi ichimlik eritmasi. Energiya va ish qobiliyatini oshirishga yordam beradi, yurak, tomirlar va modda almashinuvini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, 10 ml li 10 flakon."},
        {h:"10 ml tarkibi", p:"L-karnitin — 2,0 g<br>Arginin — 0,20 g<br>Yordamchi: tozalangan suv."}
      ],
      props:[
        {h:"L-karnitin", p:"Energiya ishlab chiqarish uchun yog‘ kislotalarini mitoxondriyalarga tashiydi, charchoqni kamaytiradi, jismoniy va aqliy ish qobiliyatini oshiradi."},
        {h:"Arginin", p:"Shartli almashtirib bo‘lmaydigan aminokislota, azot oksidi o‘tmishdoshi. Tomir tonusi, mikrotsirkulyatsiya va endoteliy ishini qo‘llab-quvvatlaydi."},
        {h:"Birgalikdagi ta’sir", p:"Uyg‘unlik energiya almashinuvi, yurak-qon tomir tizimi va yuklamalarda organizmning umumiy tonusini qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Energiya", p:"Charchoqni kamaytirish, ish qobiliyatini oshirish."},
        {h:"Yurak va tomirlar", p:"Yurak-qon tomir tizimi va mikrotsirkulyatsiyani qo‘llab-quvvatlash."},
        {h:"Tonus", p:"Jismoniy va aqliy yuklamalarda umumiy tonusni qo‘llab-quvvatlash."},
        {h:"Modda almashinuvi", p:"Energiya almashinuvida ishtirok etish."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Flakon (10 ml) tarkibini yo‘riqnomaga muvofiq qabul qiling. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"10 ml",l:"bitta flakon"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik muddati · sotuv", p:"2 yil. Retseptsiz beriladi."}
      ],
      legal:"Qo‘llashdan oldin yo‘riqnoma bilan tanishish zarur. Ishlab chiqaruvchi: LLC HVARA, 220100, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "neyropress": {
    cat: "solutions",
    img: "img/prod/neyropress.webp",
    ru: {
      name:"Нейропресс",
      heroSub:"Капли для приёма внутрь с ГАМК, глицином, глутаминовой и гопантеновой кислотами и витаминами B. Поддержка когнитивной функции.",
      introTitle:"Память, внимание и ясность ума",
      introText:"Нейропресс — нейрометаболический комплекс на основе ГАМК, аминокислот и витаминов группы B. Поддерживает когнитивную функцию, снижает утомляемость и улучшает внимание и память.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли для приёма внутрь, 50 мл во флаконе."},
        {h:"Состав", p:"ГАМК — 125 мг · Глицин — 40 мг · Глутаминовая кислота — 100 мг<br>Гопантеновая кислота — 100 мг<br>Вит. B2 — 0,5 мг · B3 — 2,0 мг · B6 — 0,5 мг · B12 — 0,3 мкг"}
      ],
      props:[
        {h:"ГАМК и гопантеновая кислота", p:"Основные регулирующие медиаторы ЦНС: снижают избыточную возбудимость, оказывают мягкое успокаивающее и ноотропное действие, улучшают обмен в нервных клетках."},
        {h:"Глицин и глутаминовая кислота", p:"Аминокислоты — регуляторы обмена веществ: нормализуют процессы торможения в ЦНС, уменьшают психоэмоциональное напряжение, повышают умственную работоспособность."},
        {h:"Витамины группы B", p:"B2, B3, B6 и B12 необходимы для работы нервной системы, синтеза нейромедиаторов и энергетического обмена, поддерживают когнитивные функции."}
      ],
      areas:[
        {h:"Когнитивные функции", p:"Поддержка памяти, внимания и концентрации."},
        {h:"Утомляемость", p:"Снижение умственной утомляемости."},
        {h:"Стресс", p:"Снижение психоэмоционального напряжения, в том числе в период экзаменов и нагрузок."},
        {h:"Нервная система", p:"Поддержка нормальной работы ЦНС."}
      ],
      dosageText:"Принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"50 мл",l:"объём флакона"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Neuropress",
      heroSub:"Oral drops with GABA, glycine, glutamic and hopantenic acids and B vitamins. Support for cognitive function.",
      introTitle:"Memory, attention and mental clarity",
      introText:"Neuropress is a neurometabolic complex based on GABA, amino acids and B vitamins. It supports cognitive function, reduces fatigue and improves attention and memory.",
      infoCards:[
        {h:"Form", p:"Oral drops, 50 ml bottle."},
        {h:"Composition", p:"GABA — 125 mg · Glycine — 40 mg · Glutamic acid — 100 mg<br>Hopantenic acid — 100 mg<br>Vit. B2 — 0.5 mg · B3 — 2.0 mg · B6 — 0.5 mg · B12 — 0.3 mcg"}
      ],
      props:[
        {h:"GABA and hopantenic acid", p:"Key regulatory CNS mediators: reduce excessive excitability, provide a mild calming and nootropic effect and improve metabolism in nerve cells."},
        {h:"Glycine and glutamic acid", p:"Amino acids that regulate metabolism: normalize inhibition processes in the CNS, reduce psycho-emotional tension and increase mental performance."},
        {h:"B vitamins", p:"B2, B3, B6 and B12 are needed for nervous system function, neurotransmitter synthesis and energy metabolism, and support cognitive function."}
      ],
      areas:[
        {h:"Cognitive function", p:"Support of memory, attention and concentration."},
        {h:"Fatigue", p:"Reduction of mental fatigue."},
        {h:"Stress", p:"Reduction of psycho-emotional tension, including during exams and high loads."},
        {h:"Nervous system", p:"Support of normal CNS function."}
      ],
      dosageText:"Take orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"50 ml",l:"bottle volume"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Neuropress",
      heroSub:"Gocce orali con GABA, glicina, acido glutammico e opantenico e vitamine B. Sostegno alla funzione cognitiva.",
      introTitle:"Memoria, attenzione e lucidità mentale",
      introText:"Neuropress è un complesso neurometabolico a base di GABA, amminoacidi e vitamine del gruppo B. Sostiene la funzione cognitiva, riduce la stanchezza e migliora attenzione e memoria.",
      infoCards:[
        {h:"Formato", p:"Gocce orali, flacone da 50 ml."},
        {h:"Composizione", p:"GABA — 125 mg · Glicina — 40 mg · Acido glutammico — 100 mg<br>Acido opantenico — 100 mg<br>Vit. B2 — 0,5 mg · B3 — 2,0 mg · B6 — 0,5 mg · B12 — 0,3 mcg"}
      ],
      props:[
        {h:"GABA e acido opantenico", p:"Mediatori regolatori chiave del SNC: riducono l'eccessiva eccitabilità, hanno un lieve effetto calmante e nootropico e migliorano il metabolismo nelle cellule nervose."},
        {h:"Glicina e acido glutammico", p:"Amminoacidi che regolano il metabolismo: normalizzano i processi di inibizione nel SNC, riducono la tensione psico-emotiva e aumentano le prestazioni mentali."},
        {h:"Vitamine del gruppo B", p:"B2, B3, B6 e B12 sono necessarie per la funzione del sistema nervoso, la sintesi dei neurotrasmettitori e il metabolismo energetico, e sostengono la funzione cognitiva."}
      ],
      areas:[
        {h:"Funzione cognitiva", p:"Sostegno di memoria, attenzione e concentrazione."},
        {h:"Stanchezza", p:"Riduzione della stanchezza mentale."},
        {h:"Stress", p:"Riduzione della tensione psico-emotiva, anche durante esami e carichi elevati."},
        {h:"Sistema nervoso", p:"Sostegno della normale funzione del SNC."}
      ],
      dosageText:"Assumere per via orale. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"50 ml",l:"volume del flacone"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Neuropress",
      heroSub:"GABA, glitsin, glutamin va gopanten kislotalari va B vitaminlari bilan ichimlik tomchilari. Kognitiv funksiyani qo‘llab-quvvatlash.",
      introTitle:"Xotira, diqqat va aql tiniqligi",
      introText:"Neuropress — GABA, aminokislotalar va B guruhi vitaminlari asosidagi neyrometabolik majmua. Kognitiv funksiyani qo‘llab-quvvatlaydi, charchoqni kamaytiradi va diqqat hamda xotirani yaxshilaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik tomchilari, flakonda 50 ml."},
        {h:"Tarkibi", p:"GABA — 125 mg · Glitsin — 40 mg · Glutamin kislotasi — 100 mg<br>Gopanten kislotasi — 100 mg<br>B2 vit. — 0,5 mg · B3 — 2,0 mg · B6 — 0,5 mg · B12 — 0,3 mkg"}
      ],
      props:[
        {h:"GABA va gopanten kislotasi", p:"MNSning asosiy tartibga soluvchi mediatorlari: ortiqcha qo‘zg‘aluvchanlikni kamaytiradi, yumshoq tinchlantiruvchi va nootrop ta’sir ko‘rsatadi, asab hujayralaridagi almashinuvni yaxshilaydi."},
        {h:"Glitsin va glutamin kislotasi", p:"Modda almashinuvini tartibga soluvchi aminokislotalar: MNSdagi tormozlanish jarayonlarini me’yorlashtiradi, psixo-emotsional taranglikni kamaytiradi, aqliy ish qobiliyatini oshiradi."},
        {h:"B guruhi vitaminlari", p:"B2, B3, B6 va B12 asab tizimi ishi, neyromediatorlar sintezi va energiya almashinuvi uchun zarur, kognitiv funksiyalarni qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Kognitiv funksiyalar", p:"Xotira, diqqat va konsentratsiyani qo‘llab-quvvatlash."},
        {h:"Charchoq", p:"Aqliy charchoqni kamaytirish."},
        {h:"Stress", p:"Psixo-emotsional taranglikni, shu jumladan imtihonlar va yuklamalar davrida kamaytirish."},
        {h:"Asab tizimi", p:"MNSning normal ishini qo‘llab-quvvatlash."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"50 ml",l:"flakon hajmi"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "nifurofril": {
    cat: "solutions",
    img: "img/prod/nifurofril.webp",
    doc: "downloads/nifurofril-instrukciya.docx",
    ru: {
      name:"Нифурофрил",
      heroSub:"Суспензия для приёма внутрь с нифуроксазидом. Противодиарейное средство при острой бактериальной диарее и кишечных инфекциях.",
      introTitle:"При острой бактериальной диарее",
      introText:"Нифурофрил — кишечный антисептик на основе нифуроксазида. Действует в просвете кишечника, не нарушая равновесие микрофлоры. Подходит детям с раннего возраста и взрослым.",
      infoCards:[
        {h:"Форма выпуска", p:"Суспензия для приёма внутрь, 90 мл во флаконе."},
        {h:"Состав на 5 мл", p:"Нифуроксазид — 200 мг<br>Вспомогательные: глицерол, сорбат калия, цикламат натрия, кармеллоза, ароматизатор, вода."}
      ],
      props:[
        {h:"Нифуроксазид", p:"Противомикробное средство, производное нитрофурана. Блокирует ферменты и дыхательные цепи микробной клетки, разрушает её мембрану и снижает продукцию токсинов."},
        {h:"Широкий спектр", p:"Высоко активен в отношении Campylobacter, E. coli, Salmonella, Clostridium perfringens, Vibrio cholerae, Staphylococcus и других возбудителей кишечных инфекций."},
        {h:"Бережно к микрофлоре", p:"Не нарушает равновесие кишечной микрофлоры, восстанавливает эубиоз кишечника и препятствует бактериальной суперинфекции при вирусных поражениях."}
      ],
      areas:[
        {h:"Острая диарея", p:"Острая бактериальная диарея без ухудшения общего состояния."},
        {h:"Кишечные инфекции", p:"При кишечной инфекции."},
        {h:"Бактериальная диарея", p:"При бактериальной диарее."},
        {h:"Микрофлора", p:"Восстановление эубиоза кишечника."}
      ],
      dosageText:"Перед применением флакон тщательно взболтать. Дети до 3 лет — 2,5 мл 2–3 раза в сутки; 3–6 лет — 5 мл 3 раза; 6–18 лет — 5 мл 3–4 раза; взрослым — 5 мл 4 раза в сутки. Курс — 5–7 дней (не более 7). Если за 3 дня улучшения нет — обратиться к врачу.",
      dosageStats:[{n:"5 мл",l:"взрослым 4 раза в сутки"},{n:"5–7",l:"дней курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, период новорождённости, недоношенность. Алкоголь при приёме строго запрещён."},
        {h:"Побочные действия", p:"При появлении побочных действий прекратить применение и обратиться к врачу."},
        {h:"Особые указания", p:"При диарее необходима регидратационная терапия. Лечение детей до 3 лет — под наблюдением врача."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. Хранить при температуре не выше 25 °C."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Nifurofril",
      heroSub:"Oral suspension with nifuroxazide. An antidiarrheal for acute bacterial diarrhea and intestinal infections.",
      introTitle:"For acute bacterial diarrhea",
      introText:"Nifurofril is an intestinal antiseptic based on nifuroxazide. It acts in the intestinal lumen without disturbing microflora balance. Suitable for children from an early age and adults.",
      infoCards:[
        {h:"Form", p:"Oral suspension, 90 ml bottle."},
        {h:"Composition per 5 ml", p:"Nifuroxazide — 200 mg<br>Excipients: glycerol, potassium sorbate, sodium cyclamate, carmellose, flavoring, water."}
      ],
      props:[
        {h:"Nifuroxazide", p:"An antimicrobial agent, a nitrofuran derivative. Blocks enzymes and respiratory chains of the microbial cell, destroys its membrane and reduces toxin production."},
        {h:"Broad spectrum", p:"Highly active against Campylobacter, E. coli, Salmonella, Clostridium perfringens, Vibrio cholerae, Staphylococcus and other intestinal infection pathogens."},
        {h:"Gentle on microflora", p:"Does not disturb gut microflora balance, restores intestinal eubiosis and prevents bacterial superinfection in viral cases."}
      ],
      areas:[
        {h:"Acute diarrhea", p:"Acute bacterial diarrhea without worsening of general condition."},
        {h:"Intestinal infections", p:"For intestinal infection."},
        {h:"Bacterial diarrhea", p:"For bacterial diarrhea."},
        {h:"Microflora", p:"Restoration of intestinal eubiosis."}
      ],
      dosageText:"Shake the bottle thoroughly before use. Children under 3 — 2.5 ml 2–3 times a day; 3–6 years — 5 ml 3 times; 6–18 years — 5 ml 3–4 times; adults — 5 ml 4 times a day. Course: 5–7 days (no more than 7). If no improvement in 3 days, see a doctor.",
      dosageStats:[{n:"5 ml",l:"adults 4 times a day"},{n:"5–7",l:"days course"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, neonatal period, prematurity. Alcohol is strictly prohibited during use."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Special instructions", p:"Rehydration therapy is needed for diarrhea. Treatment of children under 3 should be under medical supervision."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Store at no more than 25 °C."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Nifurofril",
      heroSub:"Sospensione orale con nifuroxazide. Un antidiarroico per la diarrea batterica acuta e le infezioni intestinali.",
      introTitle:"Per la diarrea batterica acuta",
      introText:"Nifurofril è un antisettico intestinale a base di nifuroxazide. Agisce nel lume intestinale senza alterare l'equilibrio della microflora. Adatto a bambini fin dalla tenera età e adulti.",
      infoCards:[
        {h:"Formato", p:"Sospensione orale, flacone da 90 ml."},
        {h:"Composizione per 5 ml", p:"Nifuroxazide — 200 mg<br>Eccipienti: glicerolo, sorbato di potassio, ciclammato di sodio, carmellosa, aroma, acqua."}
      ],
      props:[
        {h:"Nifuroxazide", p:"Un agente antimicrobico, derivato del nitrofurano. Blocca gli enzimi e le catene respiratorie della cellula microbica, ne distrugge la membrana e riduce la produzione di tossine."},
        {h:"Ampio spettro", p:"Altamente attivo contro Campylobacter, E. coli, Salmonella, Clostridium perfringens, Vibrio cholerae, Staphylococcus e altri patogeni delle infezioni intestinali."},
        {h:"Delicato sulla microflora", p:"Non altera l'equilibrio della microflora intestinale, ripristina l'eubiosi intestinale e previene la superinfezione batterica nei casi virali."}
      ],
      areas:[
        {h:"Diarrea acuta", p:"Diarrea batterica acuta senza peggioramento delle condizioni generali."},
        {h:"Infezioni intestinali", p:"In caso di infezione intestinale."},
        {h:"Diarrea batterica", p:"In caso di diarrea batterica."},
        {h:"Microflora", p:"Ripristino dell'eubiosi intestinale."}
      ],
      dosageText:"Agitare bene il flacone prima dell'uso. Bambini sotto i 3 anni — 2,5 ml 2–3 volte al giorno; 3–6 anni — 5 ml 3 volte; 6–18 anni — 5 ml 3–4 volte; adulti — 5 ml 4 volte al giorno. Ciclo: 5–7 giorni (non più di 7). Se non migliora in 3 giorni, consultare un medico.",
      dosageStats:[{n:"5 ml",l:"adulti 4 volte al giorno"},{n:"5–7",l:"giorni di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, periodo neonatale, prematurità. L'alcol è severamente vietato durante l'uso."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Istruzioni speciali", p:"In caso di diarrea è necessaria la terapia di reidratazione. Il trattamento dei bambini sotto i 3 anni deve avvenire sotto controllo medico."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Conservare a non più di 25 °C."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Nifurofril",
      heroSub:"Nifuroksazid bilan ichimlik suspenziyasi. O‘tkir bakterial diareya va ichak infeksiyalarida diareyaga qarshi vosita.",
      introTitle:"O‘tkir bakterial diareyada",
      introText:"Nifurofril — nifuroksazid asosidagi ichak antiseptigi. Ichak bo‘shlig‘ida ta’sir qiladi, mikroflora muvozanatini buzmaydi. Erta yoshdagi bolalar va kattalarga mos.",
      infoCards:[
        {h:"Formati", p:"Ichimlik suspenziyasi, flakonda 90 ml."},
        {h:"5 ml tarkibi", p:"Nifuroksazid — 200 mg<br>Yordamchi: glitserol, kaliy sorbati, natriy siklamati, karmelloza, aromatizator, suv."}
      ],
      props:[
        {h:"Nifuroksazid", p:"Antimikrob vosita, nitrofuran hosilasi. Mikrob hujayrasi fermentlari va nafas zanjirlarini bloklaydi, uning membranasini buzadi va toksinlar ishlab chiqarilishini kamaytiradi."},
        {h:"Keng spektr", p:"Campylobacter, E. coli, Salmonella, Clostridium perfringens, Vibrio cholerae, Staphylococcus va boshqa ichak infeksiyasi qo‘zg‘atuvchilariga qarshi yuqori faol."},
        {h:"Mikroflorani asraydi", p:"Ichak mikroflorasi muvozanatini buzmaydi, ichak eubiozini tiklaydi va virusli shikastlanishlarda bakterial superinfeksiyaning oldini oladi."}
      ],
      areas:[
        {h:"O‘tkir diareya", p:"Umumiy holat yomonlashmasdan o‘tkir bakterial diareya."},
        {h:"Ichak infeksiyalari", p:"Ichak infeksiyasida."},
        {h:"Bakterial diareya", p:"Bakterial diareyada."},
        {h:"Mikroflora", p:"Ichak eubiozini tiklash."}
      ],
      dosageText:"Qo‘llashdan oldin flakonni yaxshilab chayqating. 3 yoshgacha bolalarga — kuniga 2–3 marta 2,5 ml; 3–6 yosh — 5 ml 3 marta; 6–18 yosh — 5 ml 3–4 marta; kattalarga — kuniga 4 marta 5 ml. Kurs — 5–7 kun (7 kundan ko‘p emas). 3 kunda yaxshilanish bo‘lmasa — shifokorga murojaat qiling.",
      dosageStats:[{n:"5 ml",l:"kattalarga kuniga 4 marta"},{n:"5–7",l:"kunlik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, chaqaloqlik davri, chala tug‘ilganlik. Qabul davrida spirtli ichimliklar qat’iyan man etiladi."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Maxsus ko‘rsatmalar", p:"Diareyada regidratatsion terapiya zarur. 3 yoshgacha bolalarni davolash — shifokor nazorati ostida."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. 25 °C dan yuqori bo‘lmagan haroratda saqlang."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "orsimax": {
    cat: "solutions",
    img: "img/prod/orsimax.webp",
    ru: {
      name:"Орсимакс плюс",
      heroSub:"Раствор для приёма внутрь с электролитами и декстрозой. Регидратация при обезвоживании организма. Со вкусом лимона и мяты.",
      introTitle:"Восполнение жидкости и электролитов",
      introText:"Орсимакс — раствор для пероральной регидратации с натрием, калием и декстрозой. Восполняет потерю жидкости и солей при обезвоживании, диарее, рвоте, перегреве и физических нагрузках.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь, 100 / 250 мл. Со вкусом лимона и мяты."},
        {h:"Состав на 1 мл", p:"Натрия гидроцитрат — 1,0 мг · Натрия хлорид — 2,1 мг<br>Калия хлорид — 1,4 мг · Натрия цитрат — 3,0 мг · Декстроза — 1,0 мг"}
      ],
      props:[
        {h:"Электролиты (Na, K)", p:"Натрий и калий восполняют потерю солей при обезвоживании, поддерживают водно-солевой баланс, работу мышц и нервной системы."},
        {h:"Цитраты", p:"Помогают скорректировать кислотно-щелочное равновесие, нарушенное при диарее и рвоте."},
        {h:"Декстроза", p:"Источник энергии, улучшает всасывание натрия и воды в кишечнике, ускоряет восстановление организма."}
      ],
      areas:[
        {h:"Обезвоживание", p:"При обезвоживании организма."},
        {h:"Рвота и диарея", p:"При рвоте и диарее."},
        {h:"Перегрев", p:"При воздействии солнца и перегреве."},
        {h:"Нагрузки и путешествия", p:"При физических нагрузках и в поездках."}
      ],
      dosageText:"Перед применением взболтать. Принимать внутрь при первых признаках обезвоживания. Точную дозировку уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"250 мл",l:"объём флакона"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"Хранить при температуре не выше указанной на упаковке. Вскрытый флакон хранить в холодильнике (+2…+8 °C) и использовать в течение 24 часов."},
        {h:"Отпуск", p:"Отпускается без рецепта."}
      ],
      legal:"Перед применением рекомендуется ознакомиться с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Orsimax plus",
      heroSub:"Oral solution with electrolytes and dextrose. Rehydration for dehydration. Lemon and mint flavor.",
      introTitle:"Replenishment of fluid and electrolytes",
      introText:"Orsimax is an oral rehydration solution with sodium, potassium and dextrose. It replenishes fluid and salt loss in dehydration, diarrhea, vomiting, overheating and physical exertion.",
      infoCards:[
        {h:"Form", p:"Oral solution, 100 / 250 ml. Lemon and mint flavor."},
        {h:"Composition per 1 ml", p:"Sodium hydrocitrate — 1.0 mg · Sodium chloride — 2.1 mg<br>Potassium chloride — 1.4 mg · Sodium citrate — 3.0 mg · Dextrose — 1.0 mg"}
      ],
      props:[
        {h:"Electrolytes (Na, K)", p:"Sodium and potassium replenish salt loss in dehydration and support water-salt balance, muscle and nervous system function."},
        {h:"Citrates", p:"Help correct the acid-base balance disturbed by diarrhea and vomiting."},
        {h:"Dextrose", p:"A source of energy that improves absorption of sodium and water in the intestine and speeds up recovery."}
      ],
      areas:[
        {h:"Dehydration", p:"For dehydration of the body."},
        {h:"Vomiting & diarrhea", p:"For vomiting and diarrhea."},
        {h:"Overheating", p:"With sun exposure and overheating."},
        {h:"Exertion & travel", p:"During physical exertion and travel."}
      ],
      dosageText:"Shake before use. Take orally at the first signs of dehydration. Check the exact dosage in the product leaflet or with a specialist.",
      dosageStats:[{n:"250 ml",l:"bottle volume"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"Store at no more than the temperature stated on the package. Keep an opened bottle refrigerated (+2…+8 °C) and use within 24 hours."},
        {h:"Dispensing", p:"Available without prescription."}
      ],
      legal:"Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Orsimax plus",
      heroSub:"Soluzione orale con elettroliti e destrosio. Reidratazione in caso di disidratazione. Gusto limone e menta.",
      introTitle:"Reintegro di liquidi ed elettroliti",
      introText:"Orsimax è una soluzione reidratante orale con sodio, potassio e destrosio. Reintegra la perdita di liquidi e sali in caso di disidratazione, diarrea, vomito, surriscaldamento e sforzo fisico.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, 100 / 250 ml. Gusto limone e menta."},
        {h:"Composizione per 1 ml", p:"Idrocitrato di sodio — 1,0 mg · Cloruro di sodio — 2,1 mg<br>Cloruro di potassio — 1,4 mg · Citrato di sodio — 3,0 mg · Destrosio — 1,0 mg"}
      ],
      props:[
        {h:"Elettroliti (Na, K)", p:"Sodio e potassio reintegrano la perdita di sali in caso di disidratazione e sostengono l'equilibrio idrosalino e la funzione muscolare e nervosa."},
        {h:"Citrati", p:"Aiutano a correggere l'equilibrio acido-base alterato da diarrea e vomito."},
        {h:"Destrosio", p:"Una fonte di energia che migliora l'assorbimento di sodio e acqua nell'intestino e accelera il recupero."}
      ],
      areas:[
        {h:"Disidratazione", p:"In caso di disidratazione dell'organismo."},
        {h:"Vomito e diarrea", p:"In caso di vomito e diarrea."},
        {h:"Surriscaldamento", p:"In caso di esposizione al sole e surriscaldamento."},
        {h:"Sforzo e viaggi", p:"Durante lo sforzo fisico e i viaggi."}
      ],
      dosageText:"Agitare prima dell'uso. Assumere per via orale ai primi segni di disidratazione. Verificare il dosaggio esatto nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"250 ml",l:"volume del flacone"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"Conservare a non più della temperatura indicata sulla confezione. Conservare il flacone aperto in frigorifero (+2…+8 °C) e usare entro 24 ore."},
        {h:"Vendita", p:"Disponibile senza ricetta."}
      ],
      legal:"Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Orsimax plus",
      heroSub:"Elektrolitlar va dekstroza bilan ichimlik eritmasi. Organizm suvsizlanishida regidratatsiya. Limon va yalpiz ta’mli.",
      introTitle:"Suyuqlik va elektrolitlarni to‘ldirish",
      introText:"Orsimax — natriy, kaliy va dekstroza bilan og‘iz orqali regidratatsiya eritmasi. Suvsizlanish, diareya, qusish, qizib ketish va jismoniy yuklamalarda suyuqlik va tuz yo‘qotilishini to‘ldiradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, 100 / 250 ml. Limon va yalpiz ta’mli."},
        {h:"1 ml tarkibi", p:"Natriy gidrositrati — 1,0 mg · Natriy xlorid — 2,1 mg<br>Kaliy xlorid — 1,4 mg · Natriy sitrat — 3,0 mg · Dekstroza — 1,0 mg"}
      ],
      props:[
        {h:"Elektrolitlar (Na, K)", p:"Natriy va kaliy suvsizlanishda tuz yo‘qotilishini to‘ldiradi, suv-tuz muvozanati, mushaklar va asab tizimi ishini qo‘llab-quvvatlaydi."},
        {h:"Sitratlar", p:"Diareya va qusishda buzilgan kislota-ishqor muvozanatini to‘g‘rilashga yordam beradi."},
        {h:"Dekstroza", p:"Energiya manbai, ichakda natriy va suv so‘rilishini yaxshilaydi, organizm tiklanishini tezlashtiradi."}
      ],
      areas:[
        {h:"Suvsizlanish", p:"Organizm suvsizlanishida."},
        {h:"Qusish va diareya", p:"Qusish va diareyada."},
        {h:"Qizib ketish", p:"Quyosh ta’siri va qizib ketishda."},
        {h:"Yuklamalar va sayohat", p:"Jismoniy yuklamalarda va sayohatda."}
      ],
      dosageText:"Qo‘llashdan oldin chayqating. Suvsizlanishning dastlabki belgilarida og‘iz orqali qabul qiling. Aniq dozani preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"250 ml",l:"flakon hajmi"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Qadoqda ko‘rsatilgandan yuqori bo‘lmagan haroratda saqlang. Ochilgan flakonni muzlatkichda (+2…+8 °C) saqlang va 24 soat ichida ishlating."},
        {h:"Sotuv", p:"Retseptsiz beriladi."}
      ],
      legal:"Qo‘llashdan oldin yo‘riqnoma bilan tanishish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "drolosit-bio": {
    cat: "solutions",
    img: "img/prod/drolosit.webp",
    doc: "downloads/drolosit-bio-instrukciya.docx",
    ru: {
      name:"Дролоцит Био",
      heroSub:"Раствор для приёма внутрь с цитиколином и витамином B12. Ноотроп для восстановления нервной системы и когнитивных функций.",
      introTitle:"Восстановление мозга и памяти",
      introText:"Дролоцит Био — ноотропный комплекс на основе цитиколина и метилкобаламина (B12). Поддерживает здоровье нервных клеток, восстановление после инсульта и черепно-мозговых травм, улучшает память, внимание и концентрацию.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь, 50 мл во флаконе."},
        {h:"Состав на 5 мл", p:"Цитиколин — 500 мг<br>Витамин B12 (метилкобаламин) — 500 мкг"}
      ],
      props:[
        {h:"Цитиколин", p:"Увеличивает выработку фосфолипидов в мозге, восстанавливает мембраны клеток мозга и укрепляет связь между нервными клетками. Один из самых эффективных ноотропов: поддерживает память, внимание и сосредоточенность."},
        {h:"Витамин B12 (метилкобаламин)", p:"Участвует в кроветворении, синтезе ДНК и белков, восстановлении нервных волокон и проводимости нервных импульсов, снижает неврологическую слабость."},
        {h:"Совместное действие", p:"Способствует нормальному энергетическому обмену, поддержке когнитивных функций и снижению утомляемости, защите функций мозга."}
      ],
      areas:[
        {h:"После инсульта", p:"Неврологические и когнитивные нарушения, связанные с инсультом."},
        {h:"После травм", p:"Расстройства, связанные с черепно-мозговыми травмами."},
        {h:"Память", p:"Возрастные проблемы с памятью, снижение концентрации."},
        {h:"Нервная система", p:"Восстановление нервных волокон, защита функций мозга."}
      ],
      dosageText:"Внутрь, во время или сразу после еды, предварительно взболтав. Детям — по 1 мл 2–3 раза в день; взрослым — по 5 мл 2–3 раза в день. Продолжительность — от 1,5 до 3 месяцев в зависимости от состояния. Дозы может изменить врач.",
      dosageStats:[{n:"5 мл",l:"взрослым 2–3 раза в день"},{n:"1,5–3",l:"месяца курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов. Беременность и кормление грудью — только по рекомендации специалиста."},
        {h:"Побочные действия", p:"Редко — аллергические реакции, расстройства пищеварения. При появлении прекратить приём и обратиться к специалисту."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. Дусова, д. 117."
    },
    en: {
      name:"Drolocit Bio",
      heroSub:"Oral solution with citicoline and vitamin B12. A nootropic for nervous system recovery and cognitive function.",
      introTitle:"Brain and memory recovery",
      introText:"Drolocit Bio is a nootropic complex based on citicoline and methylcobalamin (B12). It supports nerve cell health, recovery after stroke and head injuries, and improves memory, attention and concentration.",
      infoCards:[
        {h:"Form", p:"Oral solution, 50 ml bottle."},
        {h:"Composition per 5 ml", p:"Citicoline — 500 mg<br>Vitamin B12 (methylcobalamin) — 500 mcg"}
      ],
      props:[
        {h:"Citicoline", p:"Increases phospholipid production in the brain, restores brain cell membranes and strengthens connections between nerve cells. One of the most effective nootropics: supports memory, attention and focus."},
        {h:"Vitamin B12 (methylcobalamin)", p:"Participates in hematopoiesis, DNA and protein synthesis, nerve fiber recovery and nerve impulse conduction, and reduces neurological weakness."},
        {h:"Combined action", p:"Promotes normal energy metabolism, supports cognitive function, reduces fatigue and protects brain function."}
      ],
      areas:[
        {h:"After stroke", p:"Neurological and cognitive disorders associated with stroke."},
        {h:"After injuries", p:"Disorders associated with head injuries."},
        {h:"Memory", p:"Age-related memory problems, reduced concentration."},
        {h:"Nervous system", p:"Nerve fiber recovery, protection of brain function."}
      ],
      dosageText:"Orally, during or right after meals, after shaking. Children — 1 ml 2–3 times a day; adults — 5 ml 2–3 times a day. Duration: 1.5 to 3 months depending on condition. Doses may be adjusted by a doctor.",
      dosageStats:[{n:"5 ml",l:"adults 2–3 times a day"},{n:"1.5–3",l:"months course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components. Pregnancy and breastfeeding — only on a specialist's recommendation."},
        {h:"Side effects", p:"Rarely — allergic reactions, digestive disturbances. If they occur, stop use and consult a specialist."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, Dusov St. 117."
    },
    it: {
      name:"Drolocit Bio",
      heroSub:"Soluzione orale con citicolina e vitamina B12. Un nootropico per il recupero del sistema nervoso e la funzione cognitiva.",
      introTitle:"Recupero del cervello e della memoria",
      introText:"Drolocit Bio è un complesso nootropico a base di citicolina e metilcobalamina (B12). Sostiene la salute delle cellule nervose, il recupero dopo ictus e traumi cranici e migliora memoria, attenzione e concentrazione.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, flacone da 50 ml."},
        {h:"Composizione per 5 ml", p:"Citicolina — 500 mg<br>Vitamina B12 (metilcobalamina) — 500 mcg"}
      ],
      props:[
        {h:"Citicolina", p:"Aumenta la produzione di fosfolipidi nel cervello, ripristina le membrane delle cellule cerebrali e rafforza le connessioni tra le cellule nervose. Uno dei nootropici più efficaci: sostiene memoria, attenzione e concentrazione."},
        {h:"Vitamina B12 (metilcobalamina)", p:"Partecipa all'ematopoiesi, alla sintesi di DNA e proteine, al recupero delle fibre nervose e alla conduzione degli impulsi nervosi, e riduce la debolezza neurologica."},
        {h:"Azione combinata", p:"Favorisce il normale metabolismo energetico, sostiene la funzione cognitiva, riduce la stanchezza e protegge la funzione cerebrale."}
      ],
      areas:[
        {h:"Dopo l'ictus", p:"Disturbi neurologici e cognitivi associati all'ictus."},
        {h:"Dopo traumi", p:"Disturbi associati a traumi cranici."},
        {h:"Memoria", p:"Problemi di memoria legati all'età, ridotta concentrazione."},
        {h:"Sistema nervoso", p:"Recupero delle fibre nervose, protezione della funzione cerebrale."}
      ],
      dosageText:"Per via orale, durante o subito dopo i pasti, dopo aver agitato. Bambini — 1 ml 2–3 volte al giorno; adulti — 5 ml 2–3 volte al giorno. Durata: da 1,5 a 3 mesi a seconda delle condizioni. Le dosi possono essere modificate dal medico.",
      dosageStats:[{n:"5 ml",l:"adulti 2–3 volte al giorno"},{n:"1,5–3",l:"mesi di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti. Gravidanza e allattamento — solo su consiglio dello specialista."},
        {h:"Effetti collaterali", p:"Raramente — reazioni allergiche, disturbi digestivi. In tal caso interrompere l'uso e consultare uno specialista."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via Dusov 117."
    },
    uz: {
      name:"Drolocit Bio",
      heroSub:"Sitikolin va B12 vitamini bilan ichimlik eritmasi. Asab tizimi va kognitiv funksiyalarni tiklash uchun nootrop.",
      introTitle:"Miya va xotirani tiklash",
      introText:"Drolocit Bio — sitikolin va metilkobalamin (B12) asosidagi nootrop majmua. Asab hujayralari salomatligini, insult va bosh miya jarohatlaridan keyin tiklanishni qo‘llab-quvvatlaydi, xotira, diqqat va konsentratsiyani yaxshilaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, flakonda 50 ml."},
        {h:"5 ml tarkibi", p:"Sitikolin — 500 mg<br>B12 vitamini (metilkobalamin) — 500 mkg"}
      ],
      props:[
        {h:"Sitikolin", p:"Miyada fosfolipidlar ishlab chiqarilishini oshiradi, miya hujayralari membranalarini tiklaydi va asab hujayralari o‘rtasidagi bog‘lanishni mustahkamlaydi. Eng samarali nootroplardan biri: xotira, diqqat va jamlanishni qo‘llab-quvvatlaydi."},
        {h:"B12 vitamini (metilkobalamin)", p:"Qon yaratilishi, DNK va oqsillar sintezi, nerv tolalari tiklanishi va nerv impulslari o‘tkazilishida ishtirok etadi, nevrologik zaiflikni kamaytiradi."},
        {h:"Birgalikdagi ta’sir", p:"Normal energiya almashinuvi, kognitiv funksiyalarni qo‘llab-quvvatlash va charchoqni kamaytirishga, miya funksiyalarini himoya qilishga yordam beradi."}
      ],
      areas:[
        {h:"Insultdan keyin", p:"Insult bilan bog‘liq nevrologik va kognitiv buzilishlar."},
        {h:"Jarohatlardan keyin", p:"Bosh miya jarohatlari bilan bog‘liq buzilishlar."},
        {h:"Xotira", p:"Yoshga bog‘liq xotira muammolari, konsentratsiya pasayishi."},
        {h:"Asab tizimi", p:"Nerv tolalari tiklanishi, miya funksiyalarini himoya qilish."}
      ],
      dosageText:"Og‘iz orqali, ovqat vaqtida yoki ovqatdan keyin darhol, oldindan chayqatib. Bolalarga — kuniga 2–3 marta 1 ml; kattalarga — kuniga 2–3 marta 5 ml. Davomiyligi — holatga qarab 1,5 oydan 3 oygacha. Dozani shifokor o‘zgartirishi mumkin.",
      dosageStats:[{n:"5 ml",l:"kattalarga kuniga 2–3 marta"},{n:"1,5–3",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik. Homiladorlik va emizish — faqat mutaxassis tavsiyasiga ko‘ra."},
        {h:"Nojo‘ya ta’sirlar", p:"Kamdan-kam — allergik reaksiyalar, hazm buzilishlari. Yuzaga kelsa, qabulni to‘xtatib, mutaxassisga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, Dusov ko‘chasi 117."
    }
  },

  "yodmiks": {
    cat: "solutions",
    img: "img/prod/yodmiks.webp",
    ru: {
      name:"ЙОДмикс",
      heroSub:"Раствор йода для наружного применения. Антисептик для обработки кожи и краёв ран. Косметическое средство.",
      introTitle:"Йодный антисептик для кожи",
      introText:"ЙОДмикс — спиртовой раствор йода для наружного применения. Применяется как антисептик для обработки кожи, ссадин и краёв ран.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для наружного применения, 20 мл."},
        {h:"Состав на 1 мл", p:"Йод — 50 мг<br>Калия йодид — 20 мг<br>Спирт этиловый 96% — 0,48 мл"}
      ],
      props:[
        {h:"Йод", p:"Обладает выраженным антисептическим и противомикробным действием, обеззараживает кожу и края ран."},
        {h:"Калия йодид", p:"Способствует растворению йода и стабильности раствора."},
        {h:"Этиловый спирт", p:"Усиливает антисептический эффект, ускоряет высыхание на коже."}
      ],
      areas:[
        {h:"Обработка кожи", p:"Антисептическая обработка кожи."},
        {h:"Края ран", p:"Обработка ссадин и краёв ран."},
        {h:"Профилактика", p:"Профилактика инфицирования при мелких повреждениях."},
        {h:"Косметика", p:"Косметическое средство для наружного применения."}
      ],
      dosageText:"Только для наружного применения. Наносить на кожу ватным тампоном. Не наносить на большие поверхности и открытые раны. Точную информацию см. в инструкции.",
      dosageStats:[{n:"20 мл",l:"объём флакона"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к йоду. Только для наружного применения."},
        {h:"Побочные действия", p:"Возможно раздражение кожи. При появлении прекратить применение."},
        {h:"Условия хранения", p:"В защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Косметическое средство. Не является лекарством. Отпускается без рецепта."}
      ],
      legal:"Косметическое средство. Не является лекарственным средством. Только для наружного применения. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"YODmiks",
      heroSub:"Iodine solution for external use. An antiseptic for treating skin and wound edges. A cosmetic product.",
      introTitle:"Iodine skin antiseptic",
      introText:"YODmiks is an alcohol-based iodine solution for external use. It is used as an antiseptic for treating skin, abrasions and wound edges.",
      infoCards:[
        {h:"Form", p:"Solution for external use, 20 ml."},
        {h:"Composition per 1 ml", p:"Iodine — 50 mg<br>Potassium iodide — 20 mg<br>Ethyl alcohol 96% — 0.48 ml"}
      ],
      props:[
        {h:"Iodine", p:"Has a pronounced antiseptic and antimicrobial effect, disinfecting skin and wound edges."},
        {h:"Potassium iodide", p:"Helps dissolve iodine and stabilize the solution."},
        {h:"Ethyl alcohol", p:"Enhances the antiseptic effect and speeds up drying on the skin."}
      ],
      areas:[
        {h:"Skin treatment", p:"Antiseptic treatment of the skin."},
        {h:"Wound edges", p:"Treatment of abrasions and wound edges."},
        {h:"Prevention", p:"Prevention of infection in minor injuries."},
        {h:"Cosmetic", p:"Cosmetic product for external use."}
      ],
      dosageText:"For external use only. Apply to the skin with a cotton swab. Do not apply to large surfaces or open wounds. See the leaflet for exact information.",
      dosageStats:[{n:"20 ml",l:"bottle volume"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to iodine. For external use only."},
        {h:"Side effects", p:"Skin irritation is possible. If it occurs, stop use."},
        {h:"Storage", p:"In a place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"A cosmetic product. Not a medicine. Available without prescription."}
      ],
      legal:"A cosmetic product. Not a medicine. For external use only. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"YODmiks",
      heroSub:"Soluzione di iodio per uso esterno. Un antisettico per il trattamento della pelle e dei bordi delle ferite. Prodotto cosmetico.",
      introTitle:"Antisettico cutaneo allo iodio",
      introText:"YODmiks è una soluzione di iodio a base alcolica per uso esterno. Si usa come antisettico per il trattamento di pelle, abrasioni e bordi delle ferite.",
      infoCards:[
        {h:"Formato", p:"Soluzione per uso esterno, 20 ml."},
        {h:"Composizione per 1 ml", p:"Iodio — 50 mg<br>Ioduro di potassio — 20 mg<br>Alcol etilico 96% — 0,48 ml"}
      ],
      props:[
        {h:"Iodio", p:"Ha un marcato effetto antisettico e antimicrobico, disinfetta la pelle e i bordi delle ferite."},
        {h:"Ioduro di potassio", p:"Aiuta a sciogliere lo iodio e a stabilizzare la soluzione."},
        {h:"Alcol etilico", p:"Potenzia l'effetto antisettico e accelera l'asciugatura sulla pelle."}
      ],
      areas:[
        {h:"Trattamento cutaneo", p:"Trattamento antisettico della pelle."},
        {h:"Bordi delle ferite", p:"Trattamento di abrasioni e bordi delle ferite."},
        {h:"Prevenzione", p:"Prevenzione delle infezioni in caso di lesioni minori."},
        {h:"Cosmetico", p:"Prodotto cosmetico per uso esterno."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulla pelle con un batuffolo di cotone. Non applicare su grandi superfici o ferite aperte. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"20 ml",l:"volume del flacone"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità allo iodio. Solo per uso esterno."},
        {h:"Effetti collaterali", p:"È possibile irritazione cutanea. In tal caso interrompere l'uso."},
        {h:"Conservazione", p:"In luogo al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Prodotto cosmetico. Non è un medicinale. Disponibile senza ricetta."}
      ],
      legal:"Prodotto cosmetico. Non è un medicinale. Solo per uso esterno. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"YODmiks",
      heroSub:"Tashqi qo‘llash uchun yod eritmasi. Teri va jarohat chetlarini ishlash uchun antiseptik. Kosmetik vosita.",
      introTitle:"Teri uchun yodli antiseptik",
      introText:"YODmiks — tashqi qo‘llash uchun spirtli yod eritmasi. Teri, shilinishlar va jarohat chetlarini ishlash uchun antiseptik sifatida qo‘llaniladi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun eritma, 20 ml."},
        {h:"1 ml tarkibi", p:"Yod — 50 mg<br>Kaliy yodidi — 20 mg<br>Etil spirti 96% — 0,48 ml"}
      ],
      props:[
        {h:"Yod", p:"Aniq ifodalangan antiseptik va antimikrob ta’sirga ega, teri va jarohat chetlarini zararsizlantiradi."},
        {h:"Kaliy yodidi", p:"Yodning erishiga va eritma barqarorligiga yordam beradi."},
        {h:"Etil spirti", p:"Antiseptik ta’sirni kuchaytiradi, terida tez qurishni ta’minlaydi."}
      ],
      areas:[
        {h:"Terini ishlash", p:"Terining antiseptik ishlovi."},
        {h:"Jarohat chetlari", p:"Shilinishlar va jarohat chetlarini ishlash."},
        {h:"Profilaktika", p:"Mayda shikastlanishlarda infeksiya profilaktikasi."},
        {h:"Kosmetika", p:"Tashqi qo‘llash uchun kosmetik vosita."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Teriga paxta tampon bilan surting. Katta yuzalarga va ochiq jarohatlarga surtmang. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"20 ml",l:"flakon hajmi"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Yodga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun."},
        {h:"Nojo‘ya ta’sirlar", p:"Teri tirnalishi bo‘lishi mumkin. Yuzaga kelsa, qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"Yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Kosmetik vosita. Dori emas. Retseptsiz beriladi."}
      ],
      legal:"Kosmetik vosita. Dori vositasi emas. Faqat tashqi qo‘llash uchun. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "peremiks": {
    cat: "solutions",
    img: "img/prod/peremiks.webp",
    ru: {
      name:"ПЕРЕмикс",
      heroSub:"Раствор перекиси водорода для наружного применения. Антисептик для обработки ран и кожи.",
      introTitle:"Перекись водорода — антисептик",
      introText:"ПЕРЕмикс — раствор перекиси водорода для наружного применения. Применяется для антисептической обработки ран, ссадин и кожи.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для наружного применения, 90 мл."},
        {h:"Состав на 5 мл", p:"Водорода пероксид — 30 мг<br>Бензоат натрия — 0,5 мг · Вода очищенная — до 5 мл"}
      ],
      props:[
        {h:"Перекись водорода", p:"При контакте с тканями выделяет активный кислород, очищает раны от гноя и некротических тканей, оказывает антисептическое действие."},
        {h:"Бензоат натрия", p:"Консервант, обеспечивает стабильность раствора."},
        {h:"Механическое очищение", p:"Образующаяся пена способствует механическому удалению загрязнений с раневой поверхности."}
      ],
      areas:[
        {h:"Обработка ран", p:"Антисептическая обработка ран и ссадин."},
        {h:"Очищение", p:"Очищение раневой поверхности от загрязнений."},
        {h:"Кожа", p:"Обработка кожи при мелких повреждениях."},
        {h:"Профилактика", p:"Профилактика инфицирования."}
      ],
      dosageText:"Только для наружного применения. Перед применением встряхнуть. Наносить на раневую поверхность или кожу. Точную информацию см. в инструкции.",
      dosageStats:[{n:"90 мл",l:"объём флакона"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Только для наружного применения."},
        {h:"Побочные действия", p:"Возможно лёгкое жжение в месте нанесения."},
        {h:"Условия хранения", p:"В защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта."}
      ],
      legal:"Перед применением встряхнуть. Только для наружного применения. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"PEREmiks",
      heroSub:"Hydrogen peroxide solution for external use. An antiseptic for treating wounds and skin.",
      introTitle:"Hydrogen peroxide antiseptic",
      introText:"PEREmiks is a hydrogen peroxide solution for external use. It is used for antiseptic treatment of wounds, abrasions and skin.",
      infoCards:[
        {h:"Form", p:"Solution for external use, 90 ml."},
        {h:"Composition per 5 ml", p:"Hydrogen peroxide — 30 mg<br>Sodium benzoate — 0.5 mg · Purified water — up to 5 ml"}
      ],
      props:[
        {h:"Hydrogen peroxide", p:"On contact with tissues it releases active oxygen, cleans wounds of pus and necrotic tissue and has an antiseptic effect."},
        {h:"Sodium benzoate", p:"A preservative that ensures the stability of the solution."},
        {h:"Mechanical cleansing", p:"The foam formed helps mechanically remove contaminants from the wound surface."}
      ],
      areas:[
        {h:"Wound treatment", p:"Antiseptic treatment of wounds and abrasions."},
        {h:"Cleansing", p:"Cleansing the wound surface of contaminants."},
        {h:"Skin", p:"Treatment of skin in minor injuries."},
        {h:"Prevention", p:"Prevention of infection."}
      ],
      dosageText:"For external use only. Shake before use. Apply to the wound surface or skin. See the leaflet for exact information.",
      dosageStats:[{n:"90 ml",l:"bottle volume"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. For external use only."},
        {h:"Side effects", p:"A slight burning sensation at the application site is possible."},
        {h:"Storage", p:"In a place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription."}
      ],
      legal:"Shake before use. For external use only. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"PEREmiks",
      heroSub:"Soluzione di perossido di idrogeno per uso esterno. Un antisettico per il trattamento di ferite e pelle.",
      introTitle:"Antisettico al perossido di idrogeno",
      introText:"PEREmiks è una soluzione di perossido di idrogeno per uso esterno. Si usa per il trattamento antisettico di ferite, abrasioni e pelle.",
      infoCards:[
        {h:"Formato", p:"Soluzione per uso esterno, 90 ml."},
        {h:"Composizione per 5 ml", p:"Perossido di idrogeno — 30 mg<br>Benzoato di sodio — 0,5 mg · Acqua depurata — fino a 5 ml"}
      ],
      props:[
        {h:"Perossido di idrogeno", p:"A contatto con i tessuti libera ossigeno attivo, pulisce le ferite da pus e tessuto necrotico e ha un effetto antisettico."},
        {h:"Benzoato di sodio", p:"Un conservante che garantisce la stabilità della soluzione."},
        {h:"Pulizia meccanica", p:"La schiuma formata aiuta a rimuovere meccanicamente i contaminanti dalla superficie della ferita."}
      ],
      areas:[
        {h:"Trattamento delle ferite", p:"Trattamento antisettico di ferite e abrasioni."},
        {h:"Pulizia", p:"Pulizia della superficie della ferita dai contaminanti."},
        {h:"Pelle", p:"Trattamento della pelle in caso di lesioni minori."},
        {h:"Prevenzione", p:"Prevenzione delle infezioni."}
      ],
      dosageText:"Solo per uso esterno. Agitare prima dell'uso. Applicare sulla superficie della ferita o sulla pelle. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"90 ml",l:"volume del flacone"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Solo per uso esterno."},
        {h:"Effetti collaterali", p:"È possibile una lieve sensazione di bruciore nel punto di applicazione."},
        {h:"Conservazione", p:"In luogo al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta."}
      ],
      legal:"Agitare prima dell'uso. Solo per uso esterno. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"PEREmiks",
      heroSub:"Tashqi qo‘llash uchun vodorod peroksidi eritmasi. Jarohat va terini ishlash uchun antiseptik.",
      introTitle:"Vodorod peroksidi — antiseptik",
      introText:"PEREmiks — tashqi qo‘llash uchun vodorod peroksidi eritmasi. Jarohatlar, shilinishlar va terining antiseptik ishlovi uchun qo‘llaniladi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun eritma, 90 ml."},
        {h:"5 ml tarkibi", p:"Vodorod peroksidi — 30 mg<br>Natriy benzoati — 0,5 mg · Tozalangan suv — 5 ml gacha"}
      ],
      props:[
        {h:"Vodorod peroksidi", p:"To‘qimalar bilan aloqada faol kislorod ajratadi, jarohatlarni yiring va nekrotik to‘qimalardan tozalaydi, antiseptik ta’sir ko‘rsatadi."},
        {h:"Natriy benzoati", p:"Konservant, eritma barqarorligini ta’minlaydi."},
        {h:"Mexanik tozalash", p:"Hosil bo‘layotgan ko‘pik jarohat yuzasidan ifloslikni mexanik ravishda olib tashlashga yordam beradi."}
      ],
      areas:[
        {h:"Jarohatlarni ishlash", p:"Jarohatlar va shilinishlarning antiseptik ishlovi."},
        {h:"Tozalash", p:"Jarohat yuzasini ifloslikdan tozalash."},
        {h:"Teri", p:"Mayda shikastlanishlarda terini ishlash."},
        {h:"Profilaktika", p:"Infeksiya profilaktikasi."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin chayqating. Jarohat yuzasiga yoki teriga surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"90 ml",l:"flakon hajmi"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun."},
        {h:"Nojo‘ya ta’sirlar", p:"Surtilgan joyda yengil achishish bo‘lishi mumkin."},
        {h:"Saqlash sharoiti", p:"Yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi."}
      ],
      legal:"Qo‘llashdan oldin chayqating. Faqat tashqi qo‘llash uchun. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "betamaks": {
    cat: "solutions",
    img: "img/prod/betamaks.webp",
    ru: {
      name:"Бетамакс",
      heroSub:"Раствор для приёма внутрь — комплекс макро- и микроэлементов. Для профилактики и коррекции минерального обмена.",
      introTitle:"Минеральный комплекс",
      introText:"Бетамакс — раствор-комплекс макро- и микроэлементов. Применяется для профилактики и коррекции нарушений минерального обмена и дефицита макро- и микроэлементов.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь, 90 мл."},
        {h:"Назначение", p:"Профилактика и коррекция нарушений минерального обмена, дефицита макро- и микроэлементов."}
      ],
      props:[
        {h:"Макроэлементы", p:"Комплекс минералов в виде легкоусвояемых солей поддерживает минеральный обмен."},
        {h:"Микроэлементы", p:"Восполняют дефицит важных микроэлементов в организме."},
        {h:"Минеральный баланс", p:"Способствует поддержанию нормального минерального обмена."}
      ],
      areas:[
        {h:"Минеральный обмен", p:"Профилактика и коррекция нарушений минерального обмена."},
        {h:"Дефицит элементов", p:"Восполнение дефицита макро- и микроэлементов."},
        {h:"Баланс", p:"Поддержание минерального баланса."},
        {h:"Профилактика", p:"Профилактический приём при повышенной потребности в минералах."}
      ],
      dosageText:"Принимать внутрь согласно инструкции внутри упаковки. Точную дозировку уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"90 мл",l:"объём флакона"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к специалисту."},
        {h:"Условия хранения", p:"В защищённом от света месте, при температуре от 5 до 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Не является лекарственным средством. Отпускается без рецепта."}
      ],
      legal:"Не является лекарственным средством. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан."
    },
    en: {
      name:"Betamaks",
      heroSub:"Oral solution — a complex of macro- and microelements. For prevention and correction of mineral metabolism.",
      introTitle:"Mineral complex",
      introText:"Betamaks is a solution complex of macro- and microelements. It is used for the prevention and correction of mineral metabolism disorders and macro-/microelement deficiency.",
      infoCards:[
        {h:"Form", p:"Oral solution, 90 ml."},
        {h:"Purpose", p:"Prevention and correction of mineral metabolism disorders and macro-/microelement deficiency."}
      ],
      props:[
        {h:"Macroelements", p:"A complex of minerals as easily absorbed salts supports mineral metabolism."},
        {h:"Microelements", p:"Replenish the deficiency of important trace elements in the body."},
        {h:"Mineral balance", p:"Helps maintain normal mineral metabolism."}
      ],
      areas:[
        {h:"Mineral metabolism", p:"Prevention and correction of mineral metabolism disorders."},
        {h:"Element deficiency", p:"Replenishment of macro- and microelement deficiency."},
        {h:"Balance", p:"Maintenance of mineral balance."},
        {h:"Prevention", p:"Preventive use when mineral needs are increased."}
      ],
      dosageText:"Take orally as directed in the leaflet inside the package. Check the exact dosage in the product leaflet or with a specialist.",
      dosageStats:[{n:"90 ml",l:"bottle volume"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a specialist."},
        {h:"Storage", p:"In a place protected from light, at 5 to 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Not a medicine. Available without prescription."}
      ],
      legal:"Not a medicine. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan."
    },
    it: {
      name:"Betamaks",
      heroSub:"Soluzione orale — un complesso di macro- e microelementi. Per la prevenzione e la correzione del metabolismo minerale.",
      introTitle:"Complesso minerale",
      introText:"Betamaks è una soluzione complesso di macro- e microelementi. Si usa per la prevenzione e la correzione dei disturbi del metabolismo minerale e della carenza di macro-/microelementi.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, 90 ml."},
        {h:"Destinazione", p:"Prevenzione e correzione dei disturbi del metabolismo minerale e della carenza di macro-/microelementi."}
      ],
      props:[
        {h:"Macroelementi", p:"Un complesso di minerali in forma di sali facilmente assorbibili sostiene il metabolismo minerale."},
        {h:"Microelementi", p:"Reintegrano la carenza di importanti oligoelementi nell'organismo."},
        {h:"Equilibrio minerale", p:"Aiuta a mantenere un normale metabolismo minerale."}
      ],
      areas:[
        {h:"Metabolismo minerale", p:"Prevenzione e correzione dei disturbi del metabolismo minerale."},
        {h:"Carenza di elementi", p:"Reintegro della carenza di macro- e microelementi."},
        {h:"Equilibrio", p:"Mantenimento dell'equilibrio minerale."},
        {h:"Prevenzione", p:"Uso preventivo quando aumenta il fabbisogno di minerali."}
      ],
      dosageText:"Assumere per via orale secondo le indicazioni del foglietto all'interno della confezione. Verificare il dosaggio esatto nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"90 ml",l:"volume del flacone"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare uno specialista."},
        {h:"Conservazione", p:"In luogo al riparo dalla luce, da 5 a 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Non è un medicinale. Disponibile senza ricetta."}
      ],
      legal:"Non è un medicinale. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan."
    },
    uz: {
      name:"Betamaks",
      heroSub:"Ichimlik eritmasi — makro- va mikroelementlar majmuasi. Mineral almashinuvini profilaktika qilish va to‘g‘rilash uchun.",
      introTitle:"Mineral majmua",
      introText:"Betamaks — makro- va mikroelementlarning eritma-majmuasi. Mineral almashinuvi buzilishlari va makro- hamda mikroelementlar tanqisligini profilaktika qilish va to‘g‘rilash uchun qo‘llaniladi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, 90 ml."},
        {h:"Vazifasi", p:"Mineral almashinuvi buzilishlari va makro- hamda mikroelementlar tanqisligini profilaktika qilish va to‘g‘rilash."}
      ],
      props:[
        {h:"Makroelementlar", p:"Oson so‘riladigan tuzlar shaklidagi minerallar majmuasi mineral almashinuvni qo‘llab-quvvatlaydi."},
        {h:"Mikroelementlar", p:"Organizmdagi muhim mikroelementlar tanqisligini to‘ldiradi."},
        {h:"Mineral muvozanat", p:"Normal mineral almashinuvni saqlashga yordam beradi."}
      ],
      areas:[
        {h:"Mineral almashinuvi", p:"Mineral almashinuvi buzilishlarini profilaktika qilish va to‘g‘rilash."},
        {h:"Element tanqisligi", p:"Makro- va mikroelementlar tanqisligini to‘ldirish."},
        {h:"Muvozanat", p:"Mineral muvozanatni saqlash."},
        {h:"Profilaktika", p:"Minerallar ehtiyoji ortganda profilaktik qabul."}
      ],
      dosageText:"Qadoq ichidagi yo‘riqnomaga muvofiq og‘iz orqali qabul qiling. Aniq dozani preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"90 ml",l:"flakon hajmi"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, mutaxassisga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Yorug‘likdan himoyalangan joyda, 5 dan 25 °C gacha haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Dori vositasi emas. Retseptsiz beriladi."}
      ],
      legal:"Dori vositasi emas. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi."
    }
  },

  "solodka-sirop": {
    cat: "solutions",
    img: "img/prod/solodka-sirop.webp",
    ru: {
      name:"Сироп солодкового корня",
      heroSub:"Сироп на основе экстракта солодкового корня. Растительное средство для поддержки дыхательных путей.",
      introTitle:"Сила солодкового корня",
      introText:"Сироп солодкового корня — традиционное растительное средство на основе экстракта корня солодки. Способствует смягчению кашля и поддержке дыхательных путей.",
      infoCards:[
        {h:"Форма выпуска", p:"Сироп, 90 мл во флаконе."},
        {h:"Состав", p:"Экстракт солодкового корня — 4,0 г · Сахарный сироп — 85,6 г<br>Спирт этиловый 96% — 9,2 г"}
      ],
      props:[
        {h:"Экстракт солодки", p:"Содержит глицирризин и флавоноиды, оказывает отхаркивающее, смягчающее и противовоспалительное действие на дыхательные пути."},
        {h:"Отхаркивающее действие", p:"Способствует разжижению и выведению мокроты, облегчает кашель."},
        {h:"Растительная основа", p:"Традиционное натуральное средство для поддержки дыхательной системы."}
      ],
      areas:[
        {h:"Кашель", p:"Смягчение кашля, облегчение отхождения мокроты."},
        {h:"Дыхательные пути", p:"Поддержка дыхательной системы."},
        {h:"Простуда", p:"В комплексной поддержке при простудных состояниях."},
        {h:"Горло", p:"Смягчающее действие на горло."}
      ],
      dosageText:"Принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"90 мл",l:"объём флакона"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Содержит сахар и спирт — учитывать при сахарном диабете."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В защищённом от света месте, при температуре не выше 25 °C. После вскрытия использовать в течение 1 месяца."},
        {h:"Отпуск", p:"Не является лекарственным средством. Отпускается без рецепта."}
      ],
      legal:"Не является лекарственным средством. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Licorice root syrup",
      heroSub:"A syrup based on licorice root extract. A herbal remedy to support the respiratory tract.",
      introTitle:"The power of licorice root",
      introText:"Licorice root syrup is a traditional herbal remedy based on licorice root extract. It helps soothe cough and support the respiratory tract.",
      infoCards:[
        {h:"Form", p:"Syrup, 90 ml bottle."},
        {h:"Composition", p:"Licorice root extract — 4.0 g · Sugar syrup — 85.6 g<br>Ethyl alcohol 96% — 9.2 g"}
      ],
      props:[
        {h:"Licorice extract", p:"Contains glycyrrhizin and flavonoids, with an expectorant, soothing and anti-inflammatory effect on the respiratory tract."},
        {h:"Expectorant effect", p:"Helps thin and expel phlegm and eases cough."},
        {h:"Herbal base", p:"A traditional natural remedy to support the respiratory system."}
      ],
      areas:[
        {h:"Cough", p:"Soothing cough, easing phlegm expulsion."},
        {h:"Respiratory tract", p:"Support of the respiratory system."},
        {h:"Colds", p:"As complementary support during cold conditions."},
        {h:"Throat", p:"A soothing effect on the throat."}
      ],
      dosageText:"Take orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"90 ml",l:"bottle volume"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. Contains sugar and alcohol — consider in diabetes."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a place protected from light, at no more than 25 °C. Use within 1 month after opening."},
        {h:"Dispensing", p:"Not a medicine. Available without prescription."}
      ],
      legal:"Not a medicine. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Sciroppo di radice di liquirizia",
      heroSub:"Uno sciroppo a base di estratto di radice di liquirizia. Un rimedio vegetale per sostenere le vie respiratorie.",
      introTitle:"La forza della radice di liquirizia",
      introText:"Lo sciroppo di radice di liquirizia è un rimedio vegetale tradizionale a base di estratto di radice di liquirizia. Aiuta a lenire la tosse e a sostenere le vie respiratorie.",
      infoCards:[
        {h:"Formato", p:"Sciroppo, flacone da 90 ml."},
        {h:"Composizione", p:"Estratto di radice di liquirizia — 4,0 g · Sciroppo di zucchero — 85,6 g<br>Alcol etilico 96% — 9,2 g"}
      ],
      props:[
        {h:"Estratto di liquirizia", p:"Contiene glicirrizina e flavonoidi, con effetto espettorante, emolliente e antinfiammatorio sulle vie respiratorie."},
        {h:"Effetto espettorante", p:"Aiuta a fluidificare ed espellere il catarro e allevia la tosse."},
        {h:"Base vegetale", p:"Un rimedio naturale tradizionale per sostenere il sistema respiratorio."}
      ],
      areas:[
        {h:"Tosse", p:"Lenisce la tosse, facilita l'espulsione del catarro."},
        {h:"Vie respiratorie", p:"Sostegno del sistema respiratorio."},
        {h:"Raffreddore", p:"Come sostegno complementare durante i raffreddori."},
        {h:"Gola", p:"Effetto emolliente sulla gola."}
      ],
      dosageText:"Assumere per via orale. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"90 ml",l:"volume del flacone"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Contiene zucchero e alcol — da considerare in caso di diabete."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo al riparo dalla luce, a non più di 25 °C. Usare entro 1 mese dall'apertura."},
        {h:"Vendita", p:"Non è un medicinale. Disponibile senza ricetta."}
      ],
      legal:"Non è un medicinale. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Qizilmiya ildizi siropi",
      heroSub:"Qizilmiya ildizi ekstrakti asosidagi sirop. Nafas yo‘llarini qo‘llab-quvvatlash uchun o‘simlik vositasi.",
      introTitle:"Qizilmiya ildizi kuchi",
      introText:"Qizilmiya ildizi siropi — qizilmiya ildizi ekstrakti asosidagi an’anaviy o‘simlik vositasi. Yo‘talni yumshatishga va nafas yo‘llarini qo‘llab-quvvatlashga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Sirop, flakonda 90 ml."},
        {h:"Tarkibi", p:"Qizilmiya ildizi ekstrakti — 4,0 g · Shakar siropi — 85,6 g<br>Etil spirti 96% — 9,2 g"}
      ],
      props:[
        {h:"Qizilmiya ekstrakti", p:"Glitsirrizin va flavonoidlar saqlaydi, nafas yo‘llariga balg‘am ko‘chiruvchi, yumshatuvchi va yallig‘lanishga qarshi ta’sir ko‘rsatadi."},
        {h:"Balg‘am ko‘chiruvchi ta’sir", p:"Balg‘amni suyultirish va chiqarishga yordam beradi, yo‘talni yengillashtiradi."},
        {h:"O‘simlik asosi", p:"Nafas tizimini qo‘llab-quvvatlash uchun an’anaviy tabiiy vosita."}
      ],
      areas:[
        {h:"Yo‘tal", p:"Yo‘talni yumshatish, balg‘am ko‘chishini yengillashtirish."},
        {h:"Nafas yo‘llari", p:"Nafas tizimini qo‘llab-quvvatlash."},
        {h:"Shamollash", p:"Shamollash holatlarida majmuaviy qo‘llab-quvvatlashda."},
        {h:"Tomoq", p:"Tomoqqa yumshatuvchi ta’sir."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"90 ml",l:"flakon hajmi"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Shakar va spirt saqlaydi — qandli diabetda hisobga oling."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Ochilgandan keyin 1 oy ichida ishlating."},
        {h:"Sotuv", p:"Dori vositasi emas. Retseptsiz beriladi."}
      ],
      legal:"Dori vositasi emas. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "zelenmaks": {
    cat: "solutions",
    img: "img/prod/zelenmaks.webp",
    ru: {
      name:"Зеленмикс",
      heroSub:"Раствор бриллиантового зелёного для наружного применения. Антисептик для обработки кожи и ран. Косметическое средство.",
      introTitle:"«Зелёнка» — антисептик",
      introText:"Зеленмикс — спиртовой раствор бриллиантового зелёного для наружного применения. Антисептик для обработки кожи, ссадин и краёв ран.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для наружного применения, 20 мл."},
        {h:"Состав на 1 мл", p:"Бриллиантовый зелёный — 10 мг<br>Спирт этиловый 96% — 0,60 мл · Вода очищенная — до 1 мл"}
      ],
      props:[
        {h:"Бриллиантовый зелёный", p:"Анилиновый краситель с выраженным антисептическим действием, активен в отношении грамположительных бактерий."},
        {h:"Подсушивающее действие", p:"Спиртовая основа подсушивает кожу и ускоряет заживление мелких повреждений."},
        {h:"Обработка ран", p:"Обеззараживает кожу, края ран, ссадины и царапины."}
      ],
      areas:[
        {h:"Обработка кожи", p:"Антисептическая обработка кожи."},
        {h:"Раны и ссадины", p:"Обработка ссадин, царапин и краёв ран."},
        {h:"Профилактика", p:"Профилактика инфицирования при мелких повреждениях."},
        {h:"Косметика", p:"Косметическое средство для наружного применения."}
      ],
      dosageText:"Только для наружного применения. Наносить на кожу ватным тампоном или аппликатором. Точную информацию см. в инструкции.",
      dosageStats:[{n:"20 мл",l:"объём флакона"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Только для наружного применения. Не наносить на слизистые."},
        {h:"Побочные действия", p:"Возможно раздражение кожи. При появлении прекратить применение."},
        {h:"Условия хранения", p:"В защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Косметическое средство. Не является лекарством. Отпускается без рецепта."}
      ],
      legal:"Косметическое средство. Не является лекарственным средством. Только для наружного применения. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Zelenmiks",
      heroSub:"Brilliant green solution for external use. An antiseptic for treating skin and wounds. A cosmetic product.",
      introTitle:"Brilliant green antiseptic",
      introText:"Zelenmiks is an alcohol-based brilliant green solution for external use. An antiseptic for treating skin, abrasions and wound edges.",
      infoCards:[
        {h:"Form", p:"Solution for external use, 20 ml."},
        {h:"Composition per 1 ml", p:"Brilliant green — 10 mg<br>Ethyl alcohol 96% — 0.60 ml · Purified water — up to 1 ml"}
      ],
      props:[
        {h:"Brilliant green", p:"An aniline dye with a pronounced antiseptic effect, active against gram-positive bacteria."},
        {h:"Drying effect", p:"The alcohol base dries the skin and speeds up healing of minor injuries."},
        {h:"Wound treatment", p:"Disinfects skin, wound edges, abrasions and scratches."}
      ],
      areas:[
        {h:"Skin treatment", p:"Antiseptic treatment of the skin."},
        {h:"Wounds & abrasions", p:"Treatment of abrasions, scratches and wound edges."},
        {h:"Prevention", p:"Prevention of infection in minor injuries."},
        {h:"Cosmetic", p:"Cosmetic product for external use."}
      ],
      dosageText:"For external use only. Apply to the skin with a cotton swab or applicator. See the leaflet for exact information.",
      dosageStats:[{n:"20 ml",l:"bottle volume"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. For external use only. Do not apply to mucous membranes."},
        {h:"Side effects", p:"Skin irritation is possible. If it occurs, stop use."},
        {h:"Storage", p:"In a place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"A cosmetic product. Not a medicine. Available without prescription."}
      ],
      legal:"A cosmetic product. Not a medicine. For external use only. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Zelenmiks",
      heroSub:"Soluzione di verde brillante per uso esterno. Un antisettico per il trattamento di pelle e ferite. Prodotto cosmetico.",
      introTitle:"Antisettico al verde brillante",
      introText:"Zelenmiks è una soluzione di verde brillante a base alcolica per uso esterno. Un antisettico per il trattamento di pelle, abrasioni e bordi delle ferite.",
      infoCards:[
        {h:"Formato", p:"Soluzione per uso esterno, 20 ml."},
        {h:"Composizione per 1 ml", p:"Verde brillante — 10 mg<br>Alcol etilico 96% — 0,60 ml · Acqua depurata — fino a 1 ml"}
      ],
      props:[
        {h:"Verde brillante", p:"Un colorante di anilina con marcato effetto antisettico, attivo contro i batteri gram-positivi."},
        {h:"Effetto essiccante", p:"La base alcolica asciuga la pelle e accelera la guarigione di lesioni minori."},
        {h:"Trattamento delle ferite", p:"Disinfetta pelle, bordi delle ferite, abrasioni e graffi."}
      ],
      areas:[
        {h:"Trattamento cutaneo", p:"Trattamento antisettico della pelle."},
        {h:"Ferite e abrasioni", p:"Trattamento di abrasioni, graffi e bordi delle ferite."},
        {h:"Prevenzione", p:"Prevenzione delle infezioni in caso di lesioni minori."},
        {h:"Cosmetico", p:"Prodotto cosmetico per uso esterno."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulla pelle con un batuffolo di cotone o un applicatore. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"20 ml",l:"volume del flacone"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Solo per uso esterno. Non applicare sulle mucose."},
        {h:"Effetti collaterali", p:"È possibile irritazione cutanea. In tal caso interrompere l'uso."},
        {h:"Conservazione", p:"In luogo al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Prodotto cosmetico. Non è un medicinale. Disponibile senza ricetta."}
      ],
      legal:"Prodotto cosmetico. Non è un medicinale. Solo per uso esterno. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Zelenmiks",
      heroSub:"Tashqi qo‘llash uchun brilliant yashili eritmasi. Teri va jarohatlarni ishlash uchun antiseptik. Kosmetik vosita.",
      introTitle:"«Zelyonka» — antiseptik",
      introText:"Zelenmiks — tashqi qo‘llash uchun spirtli brilliant yashili eritmasi. Teri, shilinishlar va jarohat chetlarini ishlash uchun antiseptik.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun eritma, 20 ml."},
        {h:"1 ml tarkibi", p:"Brilliant yashili — 10 mg<br>Etil spirti 96% — 0,60 ml · Tozalangan suv — 1 ml gacha"}
      ],
      props:[
        {h:"Brilliant yashili", p:"Aniq ifodalangan antiseptik ta’sirli anilin bo‘yog‘i, gram-musbat bakteriyalarga qarshi faol."},
        {h:"Qurituvchi ta’sir", p:"Spirtli asos terini quritadi va mayda shikastlanishlar bitishini tezlashtiradi."},
        {h:"Jarohatlarni ishlash", p:"Teri, jarohat chetlari, shilinishlar va tirnalishlarni zararsizlantiradi."}
      ],
      areas:[
        {h:"Terini ishlash", p:"Terining antiseptik ishlovi."},
        {h:"Jarohatlar va shilinishlar", p:"Shilinishlar, tirnalishlar va jarohat chetlarini ishlash."},
        {h:"Profilaktika", p:"Mayda shikastlanishlarda infeksiya profilaktikasi."},
        {h:"Kosmetika", p:"Tashqi qo‘llash uchun kosmetik vosita."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Teriga paxta tampon yoki applikator bilan surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"20 ml",l:"flakon hajmi"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun. Shilliq qavatlarga surtmang."},
        {h:"Nojo‘ya ta’sirlar", p:"Teri tirnalishi bo‘lishi mumkin. Yuzaga kelsa, qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"Yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Kosmetik vosita. Dori emas. Retseptsiz beriladi."}
      ],
      legal:"Kosmetik vosita. Dori vositasi emas. Faqat tashqi qo‘llash uchun. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "glicerin": {
    cat: "solutions",
    img: "img/prod/glicerin.webp",
    ru: {
      name:"Глицерин",
      heroSub:"Глицерин (глицерол) для наружного применения. Смягчает и увлажняет кожу, защищает от сухости.",
      introTitle:"Смягчение и увлажнение кожи",
      introText:"Глицерин — раствор глицерола для наружного применения. Смягчает и увлажняет кожу, защищает её от сухости и обветривания.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для наружного применения, 90 мл."},
        {h:"Состав", p:"Глицерол (глицерин)."}
      ],
      props:[
        {h:"Увлажнение", p:"Глицерин — гигроскопичное вещество, притягивает и удерживает влагу в коже."},
        {h:"Смягчение", p:"Смягчает огрубевшую кожу, устраняет шелушение и сухость."},
        {h:"Защита", p:"Образует на коже защитную плёнку, предохраняющую от обветривания и потери влаги."}
      ],
      areas:[
        {h:"Сухость кожи", p:"При сухости и шелушении кожи."},
        {h:"Смягчение", p:"Смягчение огрубевших участков."},
        {h:"Защита", p:"Защита кожи рук и тела от обветривания."},
        {h:"Косметика", p:"Косметический уход за кожей."}
      ],
      dosageText:"Только для наружного применения. Наносить на чистую кожу. Точную информацию см. в инструкции.",
      dosageStats:[{n:"90 мл",l:"объём флакона"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность. Только для наружного применения."},
        {h:"Побочные действия", p:"Возможны индивидуальные реакции. При появлении прекратить применение."},
        {h:"Условия хранения", p:"В защищённом от света месте, при температуре не выше 25 °C. После вскрытия использовать в течение 1 месяца."},
        {h:"Отпуск", p:"Отпускается без рецепта."}
      ],
      legal:"Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117."
    },
    en: {
      name:"Glycerin",
      heroSub:"Glycerin (glycerol) for external use. Softens and moisturizes the skin and protects against dryness.",
      introTitle:"Softening and moisturizing the skin",
      introText:"Glycerin is a glycerol solution for external use. It softens and moisturizes the skin and protects it from dryness and chapping.",
      infoCards:[
        {h:"Form", p:"Solution for external use, 90 ml."},
        {h:"Composition", p:"Glycerol (glycerin)."}
      ],
      props:[
        {h:"Moisturizing", p:"Glycerin is a hygroscopic substance that attracts and retains moisture in the skin."},
        {h:"Softening", p:"Softens rough skin, eliminates flaking and dryness."},
        {h:"Protection", p:"Forms a protective film on the skin, preventing chapping and moisture loss."}
      ],
      areas:[
        {h:"Dry skin", p:"For dry and flaking skin."},
        {h:"Softening", p:"Softening of rough areas."},
        {h:"Protection", p:"Protection of hand and body skin from chapping."},
        {h:"Cosmetic", p:"Cosmetic skin care."}
      ],
      dosageText:"For external use only. Apply to clean skin. See the leaflet for exact information.",
      dosageStats:[{n:"90 ml",l:"bottle volume"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity. For external use only."},
        {h:"Side effects", p:"Individual reactions are possible. If they occur, stop use."},
        {h:"Storage", p:"In a place protected from light, at no more than 25 °C. Use within 1 month after opening."},
        {h:"Dispensing", p:"Available without prescription."}
      ],
      legal:"For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Glicerina",
      heroSub:"Glicerina (glicerolo) per uso esterno. Ammorbidisce e idrata la pelle e la protegge dalla secchezza.",
      introTitle:"Ammorbidire e idratare la pelle",
      introText:"La glicerina è una soluzione di glicerolo per uso esterno. Ammorbidisce e idrata la pelle e la protegge da secchezza e screpolature.",
      infoCards:[
        {h:"Formato", p:"Soluzione per uso esterno, 90 ml."},
        {h:"Composizione", p:"Glicerolo (glicerina)."}
      ],
      props:[
        {h:"Idratazione", p:"La glicerina è una sostanza igroscopica che attira e trattiene l'umidità nella pelle."},
        {h:"Ammorbidente", p:"Ammorbidisce la pelle ruvida, elimina desquamazione e secchezza."},
        {h:"Protezione", p:"Forma una pellicola protettiva sulla pelle, prevenendo screpolature e perdita di umidità."}
      ],
      areas:[
        {h:"Pelle secca", p:"In caso di pelle secca e desquamata."},
        {h:"Ammorbidente", p:"Ammorbidimento delle zone ruvide."},
        {h:"Protezione", p:"Protezione della pelle di mani e corpo dalle screpolature."},
        {h:"Cosmetico", p:"Cura cosmetica della pelle."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulla pelle pulita. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"90 ml",l:"volume del flacone"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità. Solo per uso esterno."},
        {h:"Effetti collaterali", p:"Sono possibili reazioni individuali. In tal caso interrompere l'uso."},
        {h:"Conservazione", p:"In luogo al riparo dalla luce, a non più di 25 °C. Usare entro 1 mese dall'apertura."},
        {h:"Vendita", p:"Disponibile senza ricetta."}
      ],
      legal:"Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Glitserin",
      heroSub:"Tashqi qo‘llash uchun glitserin (glitserol). Terini yumshatadi va namlaydi, quruqlikdan himoya qiladi.",
      introTitle:"Terini yumshatish va namlash",
      introText:"Glitserin — tashqi qo‘llash uchun glitserol eritmasi. Terini yumshatadi va namlaydi, uni quruqlik va shamoldan himoya qiladi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun eritma, 90 ml."},
        {h:"Tarkibi", p:"Glitserol (glitserin)."}
      ],
      props:[
        {h:"Namlash", p:"Glitserin — gigroskopik modda, terida namlikni tortadi va ushlab turadi."},
        {h:"Yumshatish", p:"Qo‘pol terini yumshatadi, po‘st tashlash va quruqlikni bartaraf etadi."},
        {h:"Himoya", p:"Terida himoya pardasini hosil qiladi, shamol va namlik yo‘qotilishidan asraydi."}
      ],
      areas:[
        {h:"Teri quruqligi", p:"Teri quruqligi va po‘st tashlashida."},
        {h:"Yumshatish", p:"Qo‘pol joylarni yumshatish."},
        {h:"Himoya", p:"Qo‘l va tana terisini shamoldan himoya qilish."},
        {h:"Kosmetika", p:"Terini kosmetik parvarishlash."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Toza teriga surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"90 ml",l:"flakon hajmi"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun."},
        {h:"Nojo‘ya ta’sirlar", p:"Individual reaksiyalar bo‘lishi mumkin. Yuzaga kelsa, qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"Yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Ochilgandan keyin 1 oy ichida ishlating."},
        {h:"Sotuv", p:"Retseptsiz beriladi."}
      ],
      legal:"Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "maloksimaks": {
    cat: "suspensions",
    img: "img/prod/maloksimaks.webp",
    doc: "downloads/maloksimaks-instrukciya.docx",
    ru: {
      name:"МалоксиМАКС",
      heroSub:"Суспензия-антацид в саше. Помощь при изжоге и болях в желудке. Со вкусом мяты.",
      introTitle:"Помощь при изжоге",
      introText:"МалоксиМАКС — антацид на основе магния и алюминия гидроксида. Нейтрализует избыток соляной кислоты, обладает обволакивающим и адсорбирующим действием, защищает слизистую пищевода и желудка.",
      infoCards:[
        {h:"Форма выпуска", p:"Суспензия для приёма внутрь, по 15 мл, №30."},
        {h:"Состав на 15 мл", p:"Магния гидроксид (гель) — 600 мг<br>Алюминия гидроксид (гель) — 525 мг<br>Масло мяты, лимонная кислота, маннитол"}
      ],
      props:[
        {h:"Нейтрализация кислоты", p:"Алюминия и магния гидроксид нейтрализуют свободную соляную кислоту желудочного сока, не вызывая вторичной гиперсекреции. Комбинация сбалансирована и уменьшает побочные эффекты."},
        {h:"Снижение пепсина", p:"Повышение pH желудочного сока приводит к снижению активности пепсина."},
        {h:"Защита слизистой", p:"Обладает адсорбирующим и обволакивающим действием, уменьшая воздействие повреждающих факторов на слизистую пищевода и желудка."}
      ],
      areas:[
        {h:"Изжога", p:"При изжоге и дискомфорте в эпигастрии, в т.ч. при погрешностях в диете."},
        {h:"Гастрит и язва", p:"Острый гастродуоденит, язвенная болезнь в фазе обострения."},
        {h:"Рефлюкс", p:"Рефлюкс-эзофагит, грыжа пищеводного отверстия диафрагмы."},
        {h:"Диспепсия", p:"Профилактика диспепсии при приёме НПВС и ГКС."}
      ],
      dosageText:"Принимать внутрь. Дети старше 15 лет и взрослые — содержимое 1–2 пакетиков (15–30 мл) через 1–1,5 ч после еды или при изжоге. При необходимости — дополнительная доза через 2 ч. Максимум — 12 пакетиков (180 мл) в сутки. Курс — не более 2–3 месяцев.",
      dosageStats:[{n:"1–2",l:"пакетика после еды"},{n:"180 мл",l:"макс. в сутки"}],
      important:[
        {h:"Противопоказания", p:"Беременность и кормление грудью, гипофосфатемия, тяжёлая почечная недостаточность, непереносимость фруктозы, возраст до 15 лет."},
        {h:"Побочные действия", p:"Нечасто — диарея, запор. Возможны реакции гиперчувствительности. При длительном приёме высоких доз — нарушения минерального обмена."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Произведено по заказу «Hvara» SRL, Milano, Italy. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"MaloxiMAKS",
      heroSub:"An antacid suspension in sachets. Relief for heartburn and stomach pain. Mint flavor.",
      introTitle:"Relief for heartburn",
      introText:"MaloxiMAKS is an antacid based on magnesium and aluminium hydroxide. It neutralizes excess hydrochloric acid, has a coating and adsorbing effect and protects the mucosa of the esophagus and stomach.",
      infoCards:[
        {h:"Form", p:"Oral suspension, 15 ml sachets, No.30."},
        {h:"Composition per 15 ml", p:"Magnesium hydroxide (gel) — 600 mg<br>Aluminium hydroxide (gel) — 525 mg<br>Mint oil, citric acid, mannitol"}
      ],
      props:[
        {h:"Acid neutralization", p:"Aluminium and magnesium hydroxide neutralize free hydrochloric acid without causing secondary hypersecretion. The balanced combination reduces side effects."},
        {h:"Pepsin reduction", p:"Raising the pH of gastric juice reduces pepsin activity."},
        {h:"Mucosal protection", p:"Has an adsorbing and coating effect, reducing the impact of damaging factors on the esophageal and gastric mucosa."}
      ],
      areas:[
        {h:"Heartburn", p:"For heartburn and epigastric discomfort, including dietary indiscretions."},
        {h:"Gastritis & ulcer", p:"Acute gastroduodenitis, peptic ulcer in the acute phase."},
        {h:"Reflux", p:"Reflux esophagitis, hiatal hernia."},
        {h:"Dyspepsia", p:"Prevention of dyspepsia when taking NSAIDs and corticosteroids."}
      ],
      dosageText:"Take orally. Children over 15 and adults — contents of 1–2 sachets (15–30 ml) 1–1.5 h after meals or when heartburn occurs. If needed, an additional dose after 2 h. Maximum — 12 sachets (180 ml) per day. Course: no more than 2–3 months.",
      dosageStats:[{n:"1–2",l:"sachets after meals"},{n:"180 ml",l:"max per day"}],
      important:[
        {h:"Contraindications", p:"Pregnancy and breastfeeding, hypophosphatemia, severe renal insufficiency, fructose intolerance, age under 15."},
        {h:"Side effects", p:"Infrequent — diarrhea, constipation. Hypersensitivity reactions possible. Long-term high doses may disturb mineral metabolism."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Made to order for Hvara SRL, Milan, Italy. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"MaloxiMAKS",
      heroSub:"Una sospensione antiacida in bustine. Sollievo da bruciore di stomaco e dolori gastrici. Gusto menta.",
      introTitle:"Sollievo dal bruciore di stomaco",
      introText:"MaloxiMAKS è un antiacido a base di idrossido di magnesio e alluminio. Neutralizza l'eccesso di acido cloridrico, ha un'azione protettiva e adsorbente e protegge la mucosa di esofago e stomaco.",
      infoCards:[
        {h:"Formato", p:"Sospensione orale, bustine da 15 ml, n.30."},
        {h:"Composizione per 15 ml", p:"Idrossido di magnesio (gel) — 600 mg<br>Idrossido di alluminio (gel) — 525 mg<br>Olio di menta, acido citrico, mannitolo"}
      ],
      props:[
        {h:"Neutralizzazione dell'acido", p:"Gli idrossidi di alluminio e magnesio neutralizzano l'acido cloridrico libero senza causare ipersecrezione secondaria. La combinazione bilanciata riduce gli effetti collaterali."},
        {h:"Riduzione della pepsina", p:"L'aumento del pH del succo gastrico riduce l'attività della pepsina."},
        {h:"Protezione della mucosa", p:"Ha un'azione adsorbente e protettiva, riducendo l'impatto dei fattori dannosi sulla mucosa esofagea e gastrica."}
      ],
      areas:[
        {h:"Bruciore di stomaco", p:"In caso di bruciore e disturbi epigastrici, anche per eccessi alimentari."},
        {h:"Gastrite e ulcera", p:"Gastroduodenite acuta, ulcera peptica in fase acuta."},
        {h:"Reflusso", p:"Esofagite da reflusso, ernia iatale."},
        {h:"Dispepsia", p:"Prevenzione della dispepsia durante l'assunzione di FANS e corticosteroidi."}
      ],
      dosageText:"Assumere per via orale. Bambini sopra i 15 anni e adulti — contenuto di 1–2 bustine (15–30 ml) 1–1,5 h dopo i pasti o in caso di bruciore. Se necessario, una dose aggiuntiva dopo 2 h. Massimo — 12 bustine (180 ml) al giorno. Ciclo: non più di 2–3 mesi.",
      dosageStats:[{n:"1–2",l:"bustine dopo i pasti"},{n:"180 ml",l:"max al giorno"}],
      important:[
        {h:"Controindicazioni", p:"Gravidanza e allattamento, ipofosfatemia, grave insufficienza renale, intolleranza al fruttosio, età inferiore a 15 anni."},
        {h:"Effetti collaterali", p:"Non comuni — diarrea, stitichezza. Possibili reazioni di ipersensibilità. Dosi elevate a lungo termine possono alterare il metabolismo minerale."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Prodotto su ordine per Hvara SRL, Milano, Italia. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"MaloxiMAKS",
      heroSub:"Sashedagi antatsid suspenziya. Jig‘ildon qaynashi va oshqozon og‘rig‘ida yordam. Yalpiz ta’mli.",
      introTitle:"Jig‘ildon qaynashida yordam",
      introText:"MaloxiMAKS — magniy va alyuminiy gidroksidi asosidagi antatsid. Ortiqcha xlorid kislotasini zararsizlantiradi, o‘rovchi va adsorbsion ta’sirga ega, qizilo‘ngach va oshqozon shilliq qavatini himoya qiladi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik suspenziyasi, 15 ml, №30."},
        {h:"15 ml tarkibi", p:"Magniy gidroksidi (gel) — 600 mg<br>Alyuminiy gidroksidi (gel) — 525 mg<br>Yalpiz moyi, limon kislotasi, mannitol"}
      ],
      props:[
        {h:"Kislotani zararsizlantirish", p:"Alyuminiy va magniy gidroksidi oshqozon shirasining erkin xlorid kislotasini ikkilamchi gipersekretsiya keltirmasdan zararsizlantiradi. Muvozanatli uyg‘unlik nojo‘ya ta’sirlarni kamaytiradi."},
        {h:"Pepsinni kamaytirish", p:"Oshqozon shirasi pH oshishi pepsin faolligini kamaytiradi."},
        {h:"Shilliq qavatni himoya", p:"Adsorbsion va o‘rovchi ta’sirga ega, qizilo‘ngach va oshqozon shilliq qavatiga zararli omillar ta’sirini kamaytiradi."}
      ],
      areas:[
        {h:"Jig‘ildon qaynashi", p:"Jig‘ildon qaynashi va epigastriyda noqulaylikda, shu jumladan parhez buzilishlarida."},
        {h:"Gastrit va yara", p:"O‘tkir gastroduodenit, zo‘rayish bosqichidagi yara kasalligi."},
        {h:"Reflyuks", p:"Reflyuks-ezofagit, diafragma qizilo‘ngach teshigi churrasi."},
        {h:"Dispepsiya", p:"NYaQVP va GKS qabulida dispepsiya profilaktikasi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. 15 yoshdan katta bolalar va kattalarga — ovqatdan 1–1,5 soat keyin yoki jig‘ildon qaynaganda 1–2 paket (15–30 ml). Zarur bo‘lganda 2 soatdan keyin qo‘shimcha doza. Maksimal — sutkasiga 12 paket (180 ml). Kurs — 2–3 oydan ko‘p emas.",
      dosageStats:[{n:"1–2",l:"paket ovqatdan keyin"},{n:"180 ml",l:"maks. sutkada"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Homiladorlik va emizish, gipofosfatemiya, og‘ir buyrak yetishmovchiligi, fruktoza chidamsizligi, 15 yoshgacha."},
        {h:"Nojo‘ya ta’sirlar", p:"Kamdan-kam — diareya, qabziyat. Yuqori sezuvchanlik reaksiyalari bo‘lishi mumkin. Uzoq muddat yuqori doza qabulida — mineral almashinuvi buzilishi."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Hvara SRL, Milano, Italiya buyurtmasi bo‘yicha ishlab chiqarilgan. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "dimefertin": {
    cat: "gels",
    img: "img/prod/dimefertin.webp",
    doc: "downloads/dimefertin-instrukciya.docx",
    ru: {
      name:"Димефертин",
      heroSub:"Гель для приёма внутрь с мио- и D-хиро-инозитолом. Для нормализации женского и мужского гормонального баланса и общего тонуса.",
      introTitle:"Гормональный баланс и фертильность",
      introText:"Димефертин — гель в стик-пакетах на основе мио-инозитола и D-хиро-инозитола с магнием, витаминами B6/B9 и селеном. Поддерживает гормональный баланс, репродуктивную функцию у женщин и мужчин и помогает при инсулинорезистентности.",
      infoCards:[
        {h:"Форма выпуска", p:"Гель для приёма внутрь (10 мл в стике), №30."},
        {h:"Состав 1 стика (10 мл)", p:"Мио-инозитол — 2000 мг · D-хиро-инозитол — 50 мг<br>Магний бисглицинат — 150 мг · Пиридоксин (B6) — 5 мг<br>Метилфолат — 0,5 мг · Селенметионин — 125 мкг"}
      ],
      props:[
        {h:"Мио-инозитол (B8)", p:"Обеспечивает работу рецепторов половых гормонов и инсулина, нормализует уровень андрогенов и пролактина, регулирует менструальный цикл и созревание яйцеклетки, действует как антагонист инсулинорезистентности."},
        {h:"D-хиро-инозитол", p:"Повышает чувствительность к инсулину, улучшает овуляцию при СПКЯ, регулирует гормональный баланс и липидный обмен печени, обладает антиоксидантным и противовоспалительным действием."},
        {h:"Магний, B6, B9, селен", p:"Магний и B6 снижают стресс, ПМС и спазмы, поддерживают нервную систему; фолиевая кислота важна при подготовке к беременности; селен поддерживает работу щитовидной железы."}
      ],
      areas:[
        {h:"Женское здоровье", p:"Нормализация цикла при аменорее, олигоменорее, ановуляции, подготовка к беременности, СПКЯ."},
        {h:"Мужское здоровье", p:"Улучшение количества, качества и подвижности сперматозоидов, гормональный баланс."},
        {h:"Метаболизм", p:"При метаболическом синдроме и инсулинорезистентности."},
        {h:"Тонус", p:"Снижение тревожности, поддержка нервной системы и энергии."}
      ],
      dosageText:"Принимать внутрь. Взрослым — по 1 стик-пакету 1–2 раза в сутки во время еды. Гель не разбавлять. Продолжительность приёма — 30 дней. Начало приёма возможно с любого дня цикла. При необходимости по рекомендации специалиста курс можно повторить.",
      dosageStats:[{n:"1–2",l:"стика в сутки"},{n:"30",l:"дней курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, детям до 12 лет. Беременным и кормящим — по согласованию с врачом."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Произведено по заказу «HVARA» SRL, Milano, Italy. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Dimefertin",
      heroSub:"An oral gel with myo- and D-chiro-inositol. For normalizing female and male hormonal balance and overall vitality.",
      introTitle:"Hormonal balance and fertility",
      introText:"Dimefertin is a gel in stick sachets based on myo-inositol and D-chiro-inositol with magnesium, vitamins B6/B9 and selenium. It supports hormonal balance, reproductive function in women and men and helps with insulin resistance.",
      infoCards:[
        {h:"Form", p:"Oral gel (10 ml per stick), No.30."},
        {h:"Composition per stick (10 ml)", p:"Myo-inositol — 2000 mg · D-chiro-inositol — 50 mg<br>Magnesium bisglycinate — 150 mg · Pyridoxine (B6) — 5 mg<br>Methylfolate — 0.5 mg · Selenomethionine — 125 mcg"}
      ],
      props:[
        {h:"Myo-inositol (B8)", p:"Supports the function of sex-hormone and insulin receptors, normalizes androgen and prolactin levels, regulates the menstrual cycle and egg maturation and acts as an antagonist of insulin resistance."},
        {h:"D-chiro-inositol", p:"Increases insulin sensitivity, improves ovulation in PCOS, regulates hormonal balance and liver lipid metabolism, and has antioxidant and anti-inflammatory effects."},
        {h:"Magnesium, B6, B9, selenium", p:"Magnesium and B6 reduce stress, PMS and cramps and support the nervous system; folic acid is important in pregnancy planning; selenium supports thyroid function."}
      ],
      areas:[
        {h:"Women's health", p:"Cycle normalization in amenorrhea, oligomenorrhea, anovulation, pregnancy preparation, PCOS."},
        {h:"Men's health", p:"Improved sperm count, quality and motility, hormonal balance."},
        {h:"Metabolism", p:"For metabolic syndrome and insulin resistance."},
        {h:"Vitality", p:"Reduced anxiety, support for the nervous system and energy."}
      ],
      dosageText:"Take orally. Adults — 1 stick sachet 1–2 times a day with meals. Do not dilute the gel. Duration: 30 days. Can be started on any day of the cycle. May be repeated on a specialist's recommendation.",
      dosageStats:[{n:"1–2",l:"sticks a day"},{n:"30",l:"days course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, children under 12. Pregnant and breastfeeding women — by agreement with a doctor."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Made to order for HVARA SRL, Milan, Italy. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Dimefertin",
      heroSub:"Un gel orale con mio- e D-chiro-inositolo. Per normalizzare l'equilibrio ormonale femminile e maschile e la vitalità generale.",
      introTitle:"Equilibrio ormonale e fertilità",
      introText:"Dimefertin è un gel in bustine stick a base di mio-inositolo e D-chiro-inositolo con magnesio, vitamine B6/B9 e selenio. Sostiene l'equilibrio ormonale, la funzione riproduttiva in donne e uomini e aiuta in caso di insulino-resistenza.",
      infoCards:[
        {h:"Formato", p:"Gel orale (10 ml per stick), n.30."},
        {h:"Composizione per stick (10 ml)", p:"Mio-inositolo — 2000 mg · D-chiro-inositolo — 50 mg<br>Magnesio bisglicinato — 150 mg · Piridossina (B6) — 5 mg<br>Metilfolato — 0,5 mg · Selenometionina — 125 mcg"}
      ],
      props:[
        {h:"Mio-inositolo (B8)", p:"Sostiene la funzione dei recettori degli ormoni sessuali e dell'insulina, normalizza i livelli di androgeni e prolattina, regola il ciclo mestruale e la maturazione dell'ovocita e agisce come antagonista dell'insulino-resistenza."},
        {h:"D-chiro-inositolo", p:"Aumenta la sensibilità all'insulina, migliora l'ovulazione nella PCOS, regola l'equilibrio ormonale e il metabolismo lipidico epatico e ha effetti antiossidanti e antinfiammatori."},
        {h:"Magnesio, B6, B9, selenio", p:"Magnesio e B6 riducono stress, PMS e crampi e sostengono il sistema nervoso; l'acido folico è importante nella pianificazione della gravidanza; il selenio sostiene la funzione tiroidea."}
      ],
      areas:[
        {h:"Salute femminile", p:"Normalizzazione del ciclo in amenorrea, oligomenorrea, anovulazione, preparazione alla gravidanza, PCOS."},
        {h:"Salute maschile", p:"Miglioramento di numero, qualità e motilità degli spermatozoi, equilibrio ormonale."},
        {h:"Metabolismo", p:"In caso di sindrome metabolica e insulino-resistenza."},
        {h:"Vitalità", p:"Riduzione dell'ansia, sostegno al sistema nervoso e all'energia."}
      ],
      dosageText:"Assumere per via orale. Adulti — 1 bustina stick 1–2 volte al giorno durante i pasti. Non diluire il gel. Durata: 30 giorni. Si può iniziare in qualsiasi giorno del ciclo. Ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"1–2",l:"stick al giorno"},{n:"30",l:"giorni di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, bambini sotto i 12 anni. Donne in gravidanza e allattamento — previo accordo con il medico."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Prodotto su ordine per HVARA SRL, Milano, Italia. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Dimefertin",
      heroSub:"Mio- va D-xiro-inozitol bilan ichimlik geli. Ayol va erkak gormonal muvozanati va umumiy tetiklikni me’yorlashtirish uchun.",
      introTitle:"Gormonal muvozanat va fertillik",
      introText:"Dimefertin — magniy, B6/B9 vitaminlari va selen bilan mio-inozitol va D-xiro-inozitol asosidagi stik-paketdagi gel. Gormonal muvozanat, ayol va erkaklarda reproduktiv funksiyani qo‘llab-quvvatlaydi va insulinga chidamlilikda yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik geli (stikda 10 ml), №30."},
        {h:"1 stik (10 ml) tarkibi", p:"Mio-inozitol — 2000 mg · D-xiro-inozitol — 50 mg<br>Magniy bisglitsinat — 150 mg · Piridoksin (B6) — 5 mg<br>Metilfolat — 0,5 mg · Selenometionin — 125 mkg"}
      ],
      props:[
        {h:"Mio-inozitol (B8)", p:"Jinsiy gormonlar va insulin retseptorlari ishini ta’minlaydi, androgen va prolaktin darajasini me’yorlashtiradi, hayz siklini va tuxum hujayra yetilishini tartibga soladi, insulinga chidamlilik antagonisti sifatida ishlaydi."},
        {h:"D-xiro-inozitol", p:"Insulinga sezuvchanlikni oshiradi, PKTSda ovulyatsiyani yaxshilaydi, gormonal muvozanat va jigar lipid almashinuvini tartibga soladi, antioksidant va yallig‘lanishga qarshi ta’sirga ega."},
        {h:"Magniy, B6, B9, selen", p:"Magniy va B6 stress, HOS va spazmlarni kamaytiradi, asab tizimini qo‘llab-quvvatlaydi; foliy kislotasi homiladorlikka tayyorgarlikda muhim; selen qalqonsimon bez ishini qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Ayollar salomatligi", p:"Amenoreya, oligomenoreya, anovulyatsiyada siklni me’yorlashtirish, homiladorlikka tayyorgarlik, PKTS."},
        {h:"Erkaklar salomatligi", p:"Spermatozoidlar soni, sifati va harakatchanligini yaxshilash, gormonal muvozanat."},
        {h:"Metabolizm", p:"Metabolik sindrom va insulinga chidamlilikda."},
        {h:"Tetiklik", p:"Tashvishni kamaytirish, asab tizimi va energiyani qo‘llab-quvvatlash."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalarga — ovqat vaqtida kuniga 1–2 marta 1 stik-paketdan. Gelni suyultirmang. Qabul davomiyligi — 30 kun. Qabulni siklning istalgan kunidan boshlash mumkin. Zarur bo‘lganda mutaxassis tavsiyasiga ko‘ra kursni takrorlash mumkin.",
      dosageStats:[{n:"1–2",l:"stik sutkada"},{n:"30",l:"kunlik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, 12 yoshgacha bo‘lgan bolalar. Homilador va emizuvchilarga — shifokor bilan kelishilgan holda."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. HVARA SRL, Milano, Italiya buyurtmasi bo‘yicha ishlab chiqarilgan. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "linocitin": {
    cat: "gels",
    img: "img/prod/linocitin-box.webp",
    doc: "downloads/linocitin-instrukciya.docx",
    ru: {
      name:"Линоцитин",
      heroSub:"Гель для приёма внутрь с цитиколином в саше-стиках. Поддержка памяти, когнитивных функций и здоровья мозга.",
      introTitle:"Питание для мозга",
      introText:"Линоцитин — гель в саше-стиках на основе цитиколина. Улучшает мозговой кровоток, восстанавливает мембраны клеток мозга и укрепляет связи между нервными клетками. Один из самых эффективных ноотропов.",
      infoCards:[
        {h:"Форма выпуска", p:"Гель для приёма внутрь в саше-стиках по 10 мл, №10."},
        {h:"Состав 1 саше (10 мл)", p:"Цитиколин — 500 мг<br>Вспомогательные: мальтодекстрин, карбомер, ароматизатор, калия сорбат, очищенная вода."}
      ],
      props:[
        {h:"Цитиколин", p:"Производное холина и цитидина, участвующее в биосинтезе лецитина — важного компонента клеточных мембран. Улучшает мозговой кровоток и потребление мозгом кислорода."},
        {h:"Когнитивные функции", p:"Восстанавливает мембраны клеток мозга и укрепляет связи между нервными клетками, поддерживая память, внимание и сосредоточенность."},
        {h:"Ноотроп", p:"Предпочтителен в восстановлении после инсульта, при возрастных проблемах с памятью и для защиты функций мозга. Имеет потенциал в улучшении зрительных функций."}
      ],
      areas:[
        {h:"Память и внимание", p:"Снижение памяти и концентрации, другие когнитивные нарушения."},
        {h:"После инсульта", p:"Реабилитация после цереброваскулярных нарушений (ишемический инсульт)."},
        {h:"После травм", p:"Восстановительный период после черепно-мозговых травм."},
        {h:"Сосудистые изменения", p:"Поведенческие расстройства и снижение умственной работоспособности."}
      ],
      dosageText:"Принимать внутрь во время или сразу после еды. Цитиколин — 500–1000 мг в сутки, в 1–2 приёма. Режим и продолжительность определяются врачом индивидуально; рекомендуемая продолжительность курса — 3 месяца.",
      dosageStats:[{n:"500–1000",l:"мг в сутки"},{n:"3",l:"месяца курс приёма"}],
      important:[
        {h:"Противопоказания", p:"При беременности, кормлении грудью и в детском возрасте — после консультации со специалистом. Индивидуальная чувствительность к компонентам."},
        {h:"Побочные действия", p:"Возможны индивидуальные реакции повышенной чувствительности к компонентам."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Произведено по заказу LOFTPHARM İLAÇ A.Ş., İstanbul, Türkiye. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Linocitin",
      heroSub:"An oral gel with citicoline in stick sachets. Support for memory, cognitive function and brain health.",
      introTitle:"Nourishment for the brain",
      introText:"Linocitin is a gel in stick sachets based on citicoline. It improves cerebral blood flow, restores brain cell membranes and strengthens connections between nerve cells. One of the most effective nootropics.",
      infoCards:[
        {h:"Form", p:"Oral gel in 10 ml stick sachets, No.10."},
        {h:"Composition per sachet (10 ml)", p:"Citicoline — 500 mg<br>Excipients: maltodextrin, carbomer, flavoring, potassium sorbate, purified water."}
      ],
      props:[
        {h:"Citicoline", p:"A derivative of choline and cytidine involved in the biosynthesis of lecithin — an important cell membrane component. Improves cerebral blood flow and the brain's oxygen consumption."},
        {h:"Cognitive function", p:"Restores brain cell membranes and strengthens connections between nerve cells, supporting memory, attention and focus."},
        {h:"Nootropic", p:"Preferred in recovery after stroke, age-related memory problems and protection of brain function. Has potential in improving visual function."}
      ],
      areas:[
        {h:"Memory & attention", p:"Decline in memory and concentration, other cognitive disorders."},
        {h:"After stroke", p:"Rehabilitation after cerebrovascular disorders (ischemic stroke)."},
        {h:"After injuries", p:"Recovery period after head injuries."},
        {h:"Vascular changes", p:"Behavioral disorders and reduced mental performance."}
      ],
      dosageText:"Take orally during or right after meals. Citicoline — 500–1000 mg per day, in 1–2 doses. The regimen and duration are determined individually by a doctor; recommended course — 3 months.",
      dosageStats:[{n:"500–1000",l:"mg per day"},{n:"3",l:"months course"}],
      important:[
        {h:"Contraindications", p:"During pregnancy, breastfeeding and childhood — after consulting a specialist. Individual sensitivity to the components."},
        {h:"Side effects", p:"Individual hypersensitivity reactions to the components are possible."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Made to order for LOFTPHARM İLAÇ A.Ş., Istanbul, Türkiye. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Linocitin",
      heroSub:"Un gel orale con citicolina in bustine stick. Sostegno a memoria, funzioni cognitive e salute del cervello.",
      introTitle:"Nutrimento per il cervello",
      introText:"Linocitin è un gel in bustine stick a base di citicolina. Migliora il flusso sanguigno cerebrale, ripristina le membrane delle cellule cerebrali e rafforza le connessioni tra le cellule nervose. Uno dei nootropici più efficaci.",
      infoCards:[
        {h:"Formato", p:"Gel orale in bustine stick da 10 ml, n.10."},
        {h:"Composizione per bustina (10 ml)", p:"Citicolina — 500 mg<br>Eccipienti: maltodestrina, carbomero, aroma, sorbato di potassio, acqua depurata."}
      ],
      props:[
        {h:"Citicolina", p:"Un derivato della colina e della citidina coinvolto nella biosintesi della lecitina — un importante componente delle membrane cellulari. Migliora il flusso sanguigno cerebrale e il consumo di ossigeno del cervello."},
        {h:"Funzioni cognitive", p:"Ripristina le membrane delle cellule cerebrali e rafforza le connessioni tra le cellule nervose, sostenendo memoria, attenzione e concentrazione."},
        {h:"Nootropico", p:"Preferito nel recupero dopo un ictus, nei problemi di memoria legati all'età e per la protezione della funzione cerebrale. Ha potenziale nel migliorare la funzione visiva."}
      ],
      areas:[
        {h:"Memoria e attenzione", p:"Declino di memoria e concentrazione, altri disturbi cognitivi."},
        {h:"Dopo l'ictus", p:"Riabilitazione dopo disturbi cerebrovascolari (ictus ischemico)."},
        {h:"Dopo traumi", p:"Periodo di recupero dopo traumi cranici."},
        {h:"Alterazioni vascolari", p:"Disturbi comportamentali e ridotte prestazioni mentali."}
      ],
      dosageText:"Assumere per via orale durante o subito dopo i pasti. Citicolina — 500–1000 mg al giorno, in 1–2 assunzioni. Il regime e la durata sono stabiliti individualmente dal medico; ciclo consigliato — 3 mesi.",
      dosageStats:[{n:"500–1000",l:"mg al giorno"},{n:"3",l:"mesi di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"In gravidanza, allattamento e nell'infanzia — dopo aver consultato uno specialista. Sensibilità individuale ai componenti."},
        {h:"Effetti collaterali", p:"Sono possibili reazioni di ipersensibilità individuale ai componenti."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Prodotto su ordine per LOFTPHARM İLAÇ A.Ş., Istanbul, Türkiye. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Linocitin",
      heroSub:"Sashe-stiklarda sitikolin bilan ichimlik geli. Xotira, kognitiv funksiyalar va miya salomatligini qo‘llab-quvvatlash.",
      introTitle:"Miya uchun oziq",
      introText:"Linocitin — sitikolin asosidagi sashe-stiklardagi gel. Miya qon aylanishini yaxshilaydi, miya hujayralari membranalarini tiklaydi va asab hujayralari o‘rtasidagi bog‘lanishlarni mustahkamlaydi. Eng samarali nootroplardan biri.",
      infoCards:[
        {h:"Formati", p:"10 ml li sashe-stiklarda ichimlik geli, №10."},
        {h:"1 sashe (10 ml) tarkibi", p:"Sitikolin — 500 mg<br>Yordamchi: maltodekstrin, karbomer, aromatizator, kaliy sorbati, tozalangan suv."}
      ],
      props:[
        {h:"Sitikolin", p:"Hujayra membranalarining muhim komponenti letsitin biosintezida ishtirok etuvchi xolin va sitidin hosilasi. Miya qon aylanishi va miyaning kislorod iste’molini yaxshilaydi."},
        {h:"Kognitiv funksiyalar", p:"Miya hujayralari membranalarini tiklaydi va asab hujayralari o‘rtasidagi bog‘lanishlarni mustahkamlaydi, xotira, diqqat va jamlanishni qo‘llab-quvvatlaydi."},
        {h:"Nootrop", p:"Insultdan keyin tiklanishda, yoshga bog‘liq xotira muammolarida va miya funksiyalarini himoya qilishda afzal. Ko‘rish funksiyalarini yaxshilash imkoniyatiga ega."}
      ],
      areas:[
        {h:"Xotira va diqqat", p:"Xotira va konsentratsiya pasayishi, boshqa kognitiv buzilishlar."},
        {h:"Insultdan keyin", p:"Serebrovaskulyar buzilishlardan (ishemik insult) keyin reabilitatsiya."},
        {h:"Jarohatlardan keyin", p:"Bosh miya jarohatlaridan keyingi tiklanish davri."},
        {h:"Tomir o‘zgarishlari", p:"Xulq-atvor buzilishlari va aqliy ish qobiliyatining pasayishi."}
      ],
      dosageText:"Ovqat vaqtida yoki ovqatdan keyin darhol og‘iz orqali qabul qilinadi. Sitikolin — sutkasiga 500–1000 mg, 1–2 qabulda. Tartib va davomiylik shifokor tomonidan individual belgilanadi; tavsiya etilgan kurs — 3 oy.",
      dosageStats:[{n:"500–1000",l:"mg sutkada"},{n:"3",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Homiladorlik, emizish va bolalik davrida — mutaxassis bilan maslahatlashgandan keyin. Komponentlarga individual sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Komponentlarga individual yuqori sezuvchanlik reaksiyalari bo‘lishi mumkin."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. LOFTPHARM İLAÇ A.Ş., İstanbul, Turkiya buyurtmasi bo‘yicha ishlab chiqarilgan. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "aknelit": {
    cat: "creams",
    img: "img/prod/aknelit.webp",
    doc: "downloads/aknelit-instrukciya.docx",
    ru: {
      name:"Акнелит",
      heroSub:"Гель с азелаиновой кислотой 15% для проблемной кожи. Эффективное средство против угревой сыпи и розацеа.",
      introTitle:"Против акне и розацеа",
      introText:"Акнелит — гель для наружного применения на основе азелаиновой кислоты 15%. Эффективен при угревой сыпи и розацеа, нормализует процессы ороговения кожи и обладает антибактериальным действием.",
      infoCards:[
        {h:"Форма выпуска", p:"Гель для наружного применения, туба 30 г."},
        {h:"Состав", p:"Азелаиновая кислота — 15%"}
      ],
      props:[
        {h:"Азелаиновая кислота", p:"Нормализует процессы кератинизации в фолликулах, уменьшает образование комедонов, обладает антибактериальным и противовоспалительным действием."},
        {h:"Против бактерий", p:"Снижает количество Propionibacterium acnes и Staphylococcus epidermidis на коже и в фолликулах."},
        {h:"Выравнивание тона", p:"Уменьшает поствоспалительную пигментацию, выравнивает тон кожи."}
      ],
      areas:[
        {h:"Угревая сыпь", p:"Лечение акне различной степени."},
        {h:"Розацеа", p:"Уменьшение проявлений розацеа."},
        {h:"Комедоны", p:"Снижение образования комедонов."},
        {h:"Пигментация", p:"Уменьшение поствоспалительной пигментации."}
      ],
      dosageText:"Только для наружного применения. Наносить тонким слоем на очищенную кожу 2 раза в день. Точную информацию см. в инструкции.",
      dosageStats:[{n:"30 г",l:"туба"},{n:"2",l:"раза в день"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Только для наружного применения."},
        {h:"Побочные действия", p:"Возможно местное раздражение, жжение. При выраженных реакциях прекратить применение."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. Косметическое средство."}
      ],
      legal:"Косметическое средство. Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Aknelit",
      heroSub:"A gel with 15% azelaic acid for problem skin. An effective remedy against acne and rosacea.",
      introTitle:"Against acne and rosacea",
      introText:"Aknelit is a gel for external use based on 15% azelaic acid. Effective for acne and rosacea, it normalizes skin keratinization and has an antibacterial effect.",
      infoCards:[
        {h:"Form", p:"Gel for external use, 30 g tube."},
        {h:"Composition", p:"Azelaic acid — 15%"}
      ],
      props:[
        {h:"Azelaic acid", p:"Normalizes keratinization in the follicles, reduces comedone formation and has an antibacterial and anti-inflammatory effect."},
        {h:"Against bacteria", p:"Reduces the amount of Propionibacterium acnes and Staphylococcus epidermidis on the skin and in the follicles."},
        {h:"Even tone", p:"Reduces post-inflammatory pigmentation and evens skin tone."}
      ],
      areas:[
        {h:"Acne", p:"Treatment of acne of various degrees."},
        {h:"Rosacea", p:"Reduction of rosacea manifestations."},
        {h:"Comedones", p:"Reduced comedone formation."},
        {h:"Pigmentation", p:"Reduction of post-inflammatory pigmentation."}
      ],
      dosageText:"For external use only. Apply a thin layer to cleansed skin twice a day. See the leaflet for exact information.",
      dosageStats:[{n:"30 g",l:"tube"},{n:"2",l:"times a day"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. For external use only."},
        {h:"Side effects", p:"Local irritation or burning is possible. Stop use if reactions are pronounced."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. A cosmetic product."}
      ],
      legal:"A cosmetic product. For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Aknelit",
      heroSub:"Un gel con acido azelaico al 15% per la pelle problematica. Un rimedio efficace contro acne e rosacea.",
      introTitle:"Contro acne e rosacea",
      introText:"Aknelit è un gel per uso esterno a base di acido azelaico al 15%. Efficace per acne e rosacea, normalizza la cheratinizzazione cutanea e ha un effetto antibatterico.",
      infoCards:[
        {h:"Formato", p:"Gel per uso esterno, tubo da 30 g."},
        {h:"Composizione", p:"Acido azelaico — 15%"}
      ],
      props:[
        {h:"Acido azelaico", p:"Normalizza la cheratinizzazione nei follicoli, riduce la formazione di comedoni e ha un effetto antibatterico e antinfiammatorio."},
        {h:"Contro i batteri", p:"Riduce la quantità di Propionibacterium acnes e Staphylococcus epidermidis sulla pelle e nei follicoli."},
        {h:"Tono uniforme", p:"Riduce la pigmentazione post-infiammatoria e uniforma il tono della pelle."}
      ],
      areas:[
        {h:"Acne", p:"Trattamento dell'acne di vario grado."},
        {h:"Rosacea", p:"Riduzione delle manifestazioni della rosacea."},
        {h:"Comedoni", p:"Ridotta formazione di comedoni."},
        {h:"Pigmentazione", p:"Riduzione della pigmentazione post-infiammatoria."}
      ],
      dosageText:"Solo per uso esterno. Applicare uno strato sottile sulla pelle detersa due volte al giorno. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"30 g",l:"tubo"},{n:"2",l:"volte al giorno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Solo per uso esterno."},
        {h:"Effetti collaterali", p:"Possibile irritazione locale o bruciore. Interrompere l'uso se le reazioni sono marcate."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Prodotto cosmetico."}
      ],
      legal:"Prodotto cosmetico. Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Aknelit",
      heroSub:"Muammoli teri uchun 15% azelain kislotasi bilan gel. Ugri toshmasi va rozatsiyaga qarshi samarali vosita.",
      introTitle:"Akne va rozatsiyaga qarshi",
      introText:"Aknelit — 15% azelain kislotasi asosidagi tashqi qo‘llash uchun gel. Ugri toshmasi va rozatsiyada samarali, teri muguzlanish jarayonlarini me’yorlashtiradi va antibakterial ta’sirga ega.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun gel, 30 g tuba."},
        {h:"Tarkibi", p:"Azelain kislotasi — 15%"}
      ],
      props:[
        {h:"Azelain kislotasi", p:"Follikulalarda keratinizatsiya jarayonlarini me’yorlashtiradi, komedonlar hosil bo‘lishini kamaytiradi, antibakterial va yallig‘lanishga qarshi ta’sirga ega."},
        {h:"Bakteriyalarga qarshi", p:"Teri va follikulalarda Propionibacterium acnes va Staphylococcus epidermidis miqdorini kamaytiradi."},
        {h:"Rangni tekislash", p:"Yallig‘lanishdan keyingi pigmentatsiyani kamaytiradi, teri rangini tekislaydi."}
      ],
      areas:[
        {h:"Ugri toshmasi", p:"Turli darajadagi akneni davolash."},
        {h:"Rozatsiya", p:"Rozatsiya ko‘rinishlarini kamaytirish."},
        {h:"Komedonlar", p:"Komedonlar hosil bo‘lishini kamaytirish."},
        {h:"Pigmentatsiya", p:"Yallig‘lanishdan keyingi pigmentatsiyani kamaytirish."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Tozalangan teriga kuniga 2 marta yupqa qatlamda surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"30 g",l:"tuba"},{n:"2",l:"marta kuniga"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun."},
        {h:"Nojo‘ya ta’sirlar", p:"Mahalliy tirnalish, achishish bo‘lishi mumkin. Kuchli reaksiyalarda qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. Kosmetik vosita."}
      ],
      legal:"Kosmetik vosita. Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "klinton": {
    cat: "creams",
    img: "img/prod/klinton.webp",
    doc: "downloads/klinton-instrukciya.docx",
    ru: {
      name:"Клинтон",
      heroSub:"Гель с клиндамицином и бензоила пероксидом против угревой сыпи. Двойное действие на причины акне.",
      introTitle:"Двойной удар по акне",
      introText:"Клинтон — гель для наружного применения с клиндамицином и бензоила пероксидом. Сочетает антибактериальное и кератолитическое действие для эффективной борьбы с угревой сыпью.",
      infoCards:[
        {h:"Форма выпуска", p:"Гель для наружного применения, туба 30 г."},
        {h:"Состав на 1 г", p:"Клиндамицин — 10 мг<br>Бензоила пероксид — 50 мг"}
      ],
      props:[
        {h:"Клиндамицин", p:"Антибиотик группы линкозамидов, подавляет рост бактерий Propionibacterium acnes — основной причины воспалительных элементов акне."},
        {h:"Бензоила пероксид", p:"Оказывает кератолитическое и антибактериальное действие, уменьшает количество комедонов и подсушивает воспаления."},
        {h:"Синергия", p:"Совместное действие компонентов усиливает эффект и снижает риск устойчивости бактерий."}
      ],
      areas:[
        {h:"Угревая сыпь", p:"Лечение воспалительных форм акне."},
        {h:"Комедоны", p:"Снижение образования комедонов."},
        {h:"Воспаления", p:"Уменьшение воспалительных элементов."},
        {h:"Проблемная кожа", p:"Уход за жирной и проблемной кожей."}
      ],
      dosageText:"Только для наружного применения. Наносить на очищенную кожу. Точную информацию см. в инструкции.",
      dosageStats:[{n:"30 г",l:"туба"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Только для наружного применения."},
        {h:"Побочные действия", p:"Возможны сухость, раздражение, шелушение кожи. При выраженных реакциях прекратить применение."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. Косметическое средство."}
      ],
      legal:"Косметическое средство. Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Klinton",
      heroSub:"A gel with clindamycin and benzoyl peroxide against acne. Dual action on the causes of acne.",
      introTitle:"A dual hit on acne",
      introText:"Klinton is a gel for external use with clindamycin and benzoyl peroxide. It combines antibacterial and keratolytic action to fight acne effectively.",
      infoCards:[
        {h:"Form", p:"Gel for external use, 30 g tube."},
        {h:"Composition per 1 g", p:"Clindamycin — 10 mg<br>Benzoyl peroxide — 50 mg"}
      ],
      props:[
        {h:"Clindamycin", p:"A lincosamide antibiotic that suppresses the growth of Propionibacterium acnes — the main cause of inflammatory acne elements."},
        {h:"Benzoyl peroxide", p:"Has a keratolytic and antibacterial effect, reduces comedones and dries out inflammation."},
        {h:"Synergy", p:"The combined action of the components enhances the effect and reduces the risk of bacterial resistance."}
      ],
      areas:[
        {h:"Acne", p:"Treatment of inflammatory forms of acne."},
        {h:"Comedones", p:"Reduced comedone formation."},
        {h:"Inflammation", p:"Reduction of inflammatory elements."},
        {h:"Problem skin", p:"Care for oily and problem skin."}
      ],
      dosageText:"For external use only. Apply to cleansed skin. See the leaflet for exact information.",
      dosageStats:[{n:"30 g",l:"tube"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. For external use only."},
        {h:"Side effects", p:"Dryness, irritation and flaking are possible. Stop use if reactions are pronounced."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. A cosmetic product."}
      ],
      legal:"A cosmetic product. For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Klinton",
      heroSub:"Un gel con clindamicina e perossido di benzoile contro l'acne. Doppia azione sulle cause dell'acne.",
      introTitle:"Un doppio colpo all'acne",
      introText:"Klinton è un gel per uso esterno con clindamicina e perossido di benzoile. Combina azione antibatterica e cheratolitica per combattere l'acne in modo efficace.",
      infoCards:[
        {h:"Formato", p:"Gel per uso esterno, tubo da 30 g."},
        {h:"Composizione per 1 g", p:"Clindamicina — 10 mg<br>Perossido di benzoile — 50 mg"}
      ],
      props:[
        {h:"Clindamicina", p:"Un antibiotico lincosamidico che sopprime la crescita del Propionibacterium acnes — la causa principale degli elementi infiammatori dell'acne."},
        {h:"Perossido di benzoile", p:"Ha un effetto cheratolitico e antibatterico, riduce i comedoni e asciuga le infiammazioni."},
        {h:"Sinergia", p:"L'azione combinata dei componenti potenzia l'effetto e riduce il rischio di resistenza batterica."}
      ],
      areas:[
        {h:"Acne", p:"Trattamento delle forme infiammatorie dell'acne."},
        {h:"Comedoni", p:"Ridotta formazione di comedoni."},
        {h:"Infiammazione", p:"Riduzione degli elementi infiammatori."},
        {h:"Pelle problematica", p:"Cura della pelle grassa e problematica."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulla pelle detersa. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"30 g",l:"tubo"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Solo per uso esterno."},
        {h:"Effetti collaterali", p:"Possibili secchezza, irritazione e desquamazione. Interrompere l'uso se le reazioni sono marcate."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Prodotto cosmetico."}
      ],
      legal:"Prodotto cosmetico. Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Klinton",
      heroSub:"Ugri toshmasiga qarshi klindamitsin va benzoil peroksidi bilan gel. Akne sabablariga ikki tomonlama ta’sir.",
      introTitle:"Aknega ikki tomonlama zarba",
      introText:"Klinton — klindamitsin va benzoil peroksidi bilan tashqi qo‘llash uchun gel. Ugri toshmasiga qarshi samarali kurashish uchun antibakterial va keratolitik ta’sirni birlashtiradi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun gel, 30 g tuba."},
        {h:"1 g tarkibi", p:"Klindamitsin — 10 mg<br>Benzoil peroksidi — 50 mg"}
      ],
      props:[
        {h:"Klindamitsin", p:"Linkozamidlar guruhi antibiotigi, akne yallig‘lanish elementlarining asosiy sababi Propionibacterium acnes bakteriyalari o‘sishini bostiradi."},
        {h:"Benzoil peroksidi", p:"Keratolitik va antibakterial ta’sir ko‘rsatadi, komedonlar sonini kamaytiradi va yallig‘lanishlarni quritadi."},
        {h:"Sinergiya", p:"Komponentlarning birgalikdagi ta’siri samarani kuchaytiradi va bakteriyalar chidamliligi xavfini kamaytiradi."}
      ],
      areas:[
        {h:"Ugri toshmasi", p:"Aknening yallig‘lanish shakllarini davolash."},
        {h:"Komedonlar", p:"Komedonlar hosil bo‘lishini kamaytirish."},
        {h:"Yallig‘lanishlar", p:"Yallig‘lanish elementlarini kamaytirish."},
        {h:"Muammoli teri", p:"Yog‘li va muammoli teri parvarishi."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Tozalangan teriga surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"30 g",l:"tuba"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun."},
        {h:"Nojo‘ya ta’sirlar", p:"Quruqlik, tirnalish, teri po‘st tashlashi bo‘lishi mumkin. Kuchli reaksiyalarda qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. Kosmetik vosita."}
      ],
      legal:"Kosmetik vosita. Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "anestik": {
    cat: "creams",
    img: "img/prod/anestik.webp",
    doc: "downloads/anestik-instrukciya.docx",
    ru: {
      name:"Анестик",
      heroSub:"Крем с лидокаином и прилокаином для местной анестезии. Обезболивание кожи перед процедурами.",
      introTitle:"Местное обезболивание кожи",
      introText:"Анестик — крем для наружного и местного применения с лидокаином и прилокаином. Обеспечивает поверхностную анестезию кожи перед косметическими и медицинскими процедурами.",
      infoCards:[
        {h:"Форма выпуска", p:"Крем для наружного применения, туба 30 г."},
        {h:"Состав на 1 г", p:"Лидокаин — 25 мг<br>Прилокаин — 25 мг"}
      ],
      props:[
        {h:"Лидокаин + прилокаин", p:"Комбинация местных анестетиков амидного типа. Блокирует проведение нервных импульсов, обеспечивая обезболивание кожи."},
        {h:"Поверхностная анестезия", p:"Снижает чувствительность кожи перед инъекциями, лазерными и косметическими процедурами."},
        {h:"Удобство применения", p:"Наносится наружно, действует местно, не требует инъекций."}
      ],
      areas:[
        {h:"Косметология", p:"Обезболивание перед косметическими процедурами."},
        {h:"Инъекции", p:"Снижение боли перед инъекциями и пункциями."},
        {h:"Лазерные процедуры", p:"Анестезия перед эпиляцией и лазерными процедурами."},
        {h:"Татуаж", p:"Обезболивание кожи при татуаже."}
      ],
      dosageText:"Только для наружного и местного применения. Наносить на кожу за время до процедуры согласно инструкции. Точную информацию см. в инструкции.",
      dosageStats:[{n:"30 г",l:"туба"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к местным анестетикам амидного типа. Детям до 1 года при определённых условиях."},
        {h:"Побочные действия", p:"Возможны побледнение, покраснение, лёгкий отёк кожи. При выраженных реакциях прекратить применение."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. Косметическое средство."}
      ],
      legal:"Косметическое средство. Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Anestik",
      heroSub:"A cream with lidocaine and prilocaine for local anesthesia. Numbing the skin before procedures.",
      introTitle:"Local skin anesthesia",
      introText:"Anestik is a cream for external and local use with lidocaine and prilocaine. It provides surface anesthesia of the skin before cosmetic and medical procedures.",
      infoCards:[
        {h:"Form", p:"Cream for external use, 30 g tube."},
        {h:"Composition per 1 g", p:"Lidocaine — 25 mg<br>Prilocaine — 25 mg"}
      ],
      props:[
        {h:"Lidocaine + prilocaine", p:"A combination of amide-type local anesthetics. Blocks nerve impulse conduction, providing skin anesthesia."},
        {h:"Surface anesthesia", p:"Reduces skin sensitivity before injections, laser and cosmetic procedures."},
        {h:"Easy to use", p:"Applied externally, acts locally, requires no injection."}
      ],
      areas:[
        {h:"Cosmetology", p:"Numbing before cosmetic procedures."},
        {h:"Injections", p:"Reducing pain before injections and punctures."},
        {h:"Laser procedures", p:"Anesthesia before epilation and laser procedures."},
        {h:"Tattooing", p:"Numbing the skin during tattooing."}
      ],
      dosageText:"For external and local use only. Apply to the skin ahead of the procedure as directed. See the leaflet for exact information.",
      dosageStats:[{n:"30 g",l:"tube"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to amide-type local anesthetics. Children under 1 year under certain conditions."},
        {h:"Side effects", p:"Paleness, redness or slight swelling of the skin are possible. Stop use if reactions are pronounced."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. A cosmetic product."}
      ],
      legal:"A cosmetic product. For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Anestik",
      heroSub:"Una crema con lidocaina e prilocaina per anestesia locale. Anestetizza la pelle prima delle procedure.",
      introTitle:"Anestesia locale della pelle",
      introText:"Anestik è una crema per uso esterno e locale con lidocaina e prilocaina. Fornisce un'anestesia superficiale della pelle prima di procedure cosmetiche e mediche.",
      infoCards:[
        {h:"Formato", p:"Crema per uso esterno, tubo da 30 g."},
        {h:"Composizione per 1 g", p:"Lidocaina — 25 mg<br>Prilocaina — 25 mg"}
      ],
      props:[
        {h:"Lidocaina + prilocaina", p:"Una combinazione di anestetici locali di tipo amidico. Blocca la conduzione degli impulsi nervosi, fornendo anestesia cutanea."},
        {h:"Anestesia superficiale", p:"Riduce la sensibilità della pelle prima di iniezioni, procedure laser e cosmetiche."},
        {h:"Facile da usare", p:"Si applica esternamente, agisce localmente, non richiede iniezioni."}
      ],
      areas:[
        {h:"Cosmetologia", p:"Anestesia prima delle procedure cosmetiche."},
        {h:"Iniezioni", p:"Riduzione del dolore prima di iniezioni e punture."},
        {h:"Procedure laser", p:"Anestesia prima di epilazione e procedure laser."},
        {h:"Tatuaggi", p:"Anestesia della pelle durante i tatuaggi."}
      ],
      dosageText:"Solo per uso esterno e locale. Applicare sulla pelle prima della procedura secondo le indicazioni. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"30 g",l:"tubo"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità agli anestetici locali di tipo amidico. Bambini sotto 1 anno in determinate condizioni."},
        {h:"Effetti collaterali", p:"Possibili pallore, arrossamento o lieve gonfiore della pelle. Interrompere l'uso se le reazioni sono marcate."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Prodotto cosmetico."}
      ],
      legal:"Prodotto cosmetico. Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Anestik",
      heroSub:"Mahalliy og‘riqsizlantirish uchun lidokain va prilokain bilan krem. Muolajalardan oldin terini og‘riqsizlantirish.",
      introTitle:"Terini mahalliy og‘riqsizlantirish",
      introText:"Anestik — lidokain va prilokain bilan tashqi va mahalliy qo‘llash uchun krem. Kosmetik va tibbiy muolajalardan oldin teri yuzasini og‘riqsizlantiradi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun krem, 30 g tuba."},
        {h:"1 g tarkibi", p:"Lidokain — 25 mg<br>Prilokain — 25 mg"}
      ],
      props:[
        {h:"Lidokain + prilokain", p:"Amid turdagi mahalliy anestetiklar uyg‘unligi. Nerv impulslari o‘tkazilishini bloklaydi va terini og‘riqsizlantiradi."},
        {h:"Yuza anesteziyasi", p:"In’ektsiyalar, lazerli va kosmetik muolajalardan oldin teri sezuvchanligini kamaytiradi."},
        {h:"Qulaylik", p:"Tashqi surtiladi, mahalliy ta’sir qiladi, in’ektsiya talab qilmaydi."}
      ],
      areas:[
        {h:"Kosmetologiya", p:"Kosmetik muolajalardan oldin og‘riqsizlantirish."},
        {h:"In’ektsiyalar", p:"In’ektsiya va punksiyalardan oldin og‘riqni kamaytirish."},
        {h:"Lazerli muolajalar", p:"Epilyatsiya va lazerli muolajalardan oldin anesteziya."},
        {h:"Tatuaj", p:"Tatuaj vaqtida terini og‘riqsizlantirish."}
      ],
      dosageText:"Faqat tashqi va mahalliy qo‘llash uchun. Muolajadan oldin yo‘riqnomaga muvofiq teriga surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"30 g",l:"tuba"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Amid turdagi mahalliy anestetiklarga yuqori sezuvchanlik. Ma’lum sharoitlarda 1 yoshgacha bolalar."},
        {h:"Nojo‘ya ta’sirlar", p:"Terining oqarishi, qizarishi, yengil shishi bo‘lishi mumkin. Kuchli reaksiyalarda qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. Kosmetik vosita."}
      ],
      legal:"Kosmetik vosita. Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "masfigel": {
    cat: "creams",
    img: "img/prod/masfigel.webp",
    doc: "downloads/masfigel-instrukciya.docx",
    ru: {
      name:"Масфигель",
      heroSub:"Крем-гель против мастопатии для наружного применения. Поддержка здоровья молочных желёз.",
      introTitle:"Забота о здоровье груди",
      introText:"Масфигель — крем-гель для наружного применения на основе растительных экстрактов. Способствует профилактике мастопатии и поддержанию здоровья молочных желёз.",
      infoCards:[
        {h:"Форма выпуска", p:"Крем-гель для наружного применения, туба 50 г."},
        {h:"Состав на 1 г", p:"Индол-3-карбинол — 13 мг<br>Экстракт фукуса — 40 мг · Экстракт дикого ямса — 40 мг"}
      ],
      props:[
        {h:"Растительные экстракты", p:"Способствуют нормализации состояния тканей молочных желёз, обладают противоотёчным и тонизирующим действием."},
        {h:"Местное действие", p:"Применяется наружно, воздействует локально на область молочных желёз."},
        {h:"Профилактика", p:"Поддержка при мастопатии и дискомфорте в области груди."}
      ],
      areas:[
        {h:"Мастопатия", p:"Профилактика и поддержка при мастопатии."},
        {h:"Молочные железы", p:"Поддержание здоровья молочных желёз."},
        {h:"Дискомфорт", p:"Уменьшение дискомфорта в области груди."},
        {h:"Уход", p:"Местный уход за тканями груди."}
      ],
      dosageText:"Только для наружного применения. Наносить на кожу в области молочных желёз. Точную информацию см. в инструкции.",
      dosageStats:[{n:"50 г",l:"туба"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Только для наружного применения. При заболеваниях молочных желёз — после консультации с врачом."},
        {h:"Побочные действия", p:"Возможны индивидуальные реакции. При появлении прекратить применение."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. Косметическое средство."}
      ],
      legal:"Косметическое средство. Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Masfigel",
      heroSub:"An anti-mastopathy cream-gel for external use. Support for breast health.",
      introTitle:"Caring for breast health",
      introText:"Masfigel is a cream-gel for external use based on plant extracts. It helps prevent mastopathy and maintain breast health.",
      infoCards:[
        {h:"Form", p:"Cream-gel for external use, 50 g tube."},
        {h:"Composition per 1 g", p:"Indole-3-carbinol — 13 mg<br>Fucus extract — 40 mg · Wild yam extract — 40 mg"}
      ],
      props:[
        {h:"Plant extracts", p:"Help normalize the condition of breast tissue and have a decongestant and toning effect."},
        {h:"Local action", p:"Applied externally, acts locally on the breast area."},
        {h:"Prevention", p:"Support for mastopathy and breast discomfort."}
      ],
      areas:[
        {h:"Mastopathy", p:"Prevention and support for mastopathy."},
        {h:"Breasts", p:"Maintaining breast health."},
        {h:"Discomfort", p:"Reducing discomfort in the breast area."},
        {h:"Care", p:"Local care for breast tissue."}
      ],
      dosageText:"For external use only. Apply to the skin in the breast area. See the leaflet for exact information.",
      dosageStats:[{n:"50 g",l:"tube"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. For external use only. In breast diseases — after consulting a doctor."},
        {h:"Side effects", p:"Individual reactions are possible. If they occur, stop use."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. A cosmetic product."}
      ],
      legal:"A cosmetic product. For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Masfigel",
      heroSub:"Una crema-gel anti-mastopatia per uso esterno. Sostegno alla salute del seno.",
      introTitle:"Cura della salute del seno",
      introText:"Masfigel è una crema-gel per uso esterno a base di estratti vegetali. Aiuta a prevenire la mastopatia e a mantenere la salute del seno.",
      infoCards:[
        {h:"Formato", p:"Crema-gel per uso esterno, tubo da 50 g."},
        {h:"Composizione per 1 g", p:"Indolo-3-carbinolo — 13 mg<br>Estratto di fuco — 40 mg · Estratto di igname selvatico — 40 mg"}
      ],
      props:[
        {h:"Estratti vegetali", p:"Aiutano a normalizzare la condizione del tessuto mammario e hanno un effetto decongestionante e tonificante."},
        {h:"Azione locale", p:"Si applica esternamente, agisce localmente sull'area del seno."},
        {h:"Prevenzione", p:"Sostegno in caso di mastopatia e fastidio al seno."}
      ],
      areas:[
        {h:"Mastopatia", p:"Prevenzione e sostegno in caso di mastopatia."},
        {h:"Seno", p:"Mantenimento della salute del seno."},
        {h:"Fastidio", p:"Riduzione del fastidio nell'area del seno."},
        {h:"Cura", p:"Cura locale del tessuto mammario."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulla pelle nell'area del seno. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"50 g",l:"tubo"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Solo per uso esterno. In caso di malattie del seno — dopo aver consultato un medico."},
        {h:"Effetti collaterali", p:"Sono possibili reazioni individuali. In tal caso interrompere l'uso."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Prodotto cosmetico."}
      ],
      legal:"Prodotto cosmetico. Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Masfigel",
      heroSub:"Tashqi qo‘llash uchun mastopatiyaga qarshi krem-gel. Sut bezlari salomatligini qo‘llab-quvvatlash.",
      introTitle:"Ko‘krak salomatligiga g‘amxo‘rlik",
      introText:"Masfigel — o‘simlik ekstraktlari asosidagi tashqi qo‘llash uchun krem-gel. Mastopatiya profilaktikasi va sut bezlari salomatligini saqlashga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun krem-gel, 50 g tuba."},
        {h:"1 g tarkibi", p:"Indol-3-karbinol — 13 mg<br>Fukus ekstrakti — 40 mg · Yovvoyi yams ekstrakti — 40 mg"}
      ],
      props:[
        {h:"O‘simlik ekstraktlari", p:"Sut bezlari to‘qimalari holatini me’yorlashtirishga yordam beradi, shishga qarshi va tetiklashtiruvchi ta’sirga ega."},
        {h:"Mahalliy ta’sir", p:"Tashqi surtiladi, sut bezlari sohasiga mahalliy ta’sir qiladi."},
        {h:"Profilaktika", p:"Mastopatiya va ko‘krak sohasidagi noqulaylikda qo‘llab-quvvatlash."}
      ],
      areas:[
        {h:"Mastopatiya", p:"Mastopatiyada profilaktika va qo‘llab-quvvatlash."},
        {h:"Sut bezlari", p:"Sut bezlari salomatligini saqlash."},
        {h:"Noqulaylik", p:"Ko‘krak sohasidagi noqulaylikni kamaytirish."},
        {h:"Parvarish", p:"Ko‘krak to‘qimalarini mahalliy parvarishlash."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Sut bezlari sohasidagi teriga surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"50 g",l:"tuba"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun. Sut bezlari kasalliklarida — shifokor bilan maslahatlashgandan keyin."},
        {h:"Nojo‘ya ta’sirlar", p:"Individual reaksiyalar bo‘lishi mumkin. Yuzaga kelsa, qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. Kosmetik vosita."}
      ],
      legal:"Kosmetik vosita. Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "stopinn": {
    cat: "creams",
    img: "img/prod/stopinn.webp",
    doc: "downloads/stopinn-instrukciya.docx",
    ru: {
      name:"Стоп-Инн",
      heroSub:"Крем-гель с адапаленом 0,1% против угревой сыпи. Ретиноид для лечения и профилактики акне.",
      introTitle:"Ретиноид против акне",
      introText:"Стоп-Инн — крем-гель для наружного применения с адапаленом 0,1%. Ретиноид нового поколения для лечения угревой сыпи, нормализует процессы ороговения и уменьшает воспаление.",
      infoCards:[
        {h:"Форма выпуска", p:"Крем-гель для наружного применения, туба 50 г."},
        {h:"Состав", p:"Адапален — 1 мг/г (0,1%)"}
      ],
      props:[
        {h:"Адапален", p:"Ретиноид нового поколения. Нормализует процессы кератинизации, препятствует образованию комедонов и оказывает противовоспалительное действие."},
        {h:"Против комедонов", p:"Эффективно уменьшает количество открытых и закрытых комедонов."},
        {h:"Противовоспалительное действие", p:"Снижает воспалительные элементы акне, успокаивает кожу."}
      ],
      areas:[
        {h:"Угревая сыпь", p:"Лечение и профилактика акне."},
        {h:"Комедоны", p:"Уменьшение открытых и закрытых комедонов."},
        {h:"Воспаления", p:"Снижение воспалительных элементов."},
        {h:"Проблемная кожа", p:"Уход за проблемной кожей."}
      ],
      dosageText:"Только для наружного применения. Наносить тонким слоем на очищенную кожу 1 раз в день вечером. Точную информацию см. в инструкции.",
      dosageStats:[{n:"50 г",l:"туба"},{n:"1",l:"раз в день"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность. Только для наружного применения."},
        {h:"Побочные действия", p:"Возможны сухость, покраснение, шелушение, ощущение жжения. Избегать солнца."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. Косметическое средство."}
      ],
      legal:"Косметическое средство. Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Stop-inn",
      heroSub:"A cream-gel with 0.1% adapalene against acne. A retinoid for treating and preventing acne.",
      introTitle:"A retinoid against acne",
      introText:"Stop-inn is a cream-gel for external use with 0.1% adapalene. A new-generation retinoid for treating acne, it normalizes keratinization and reduces inflammation.",
      infoCards:[
        {h:"Form", p:"Cream-gel for external use, 50 g tube."},
        {h:"Composition", p:"Adapalene — 1 mg/g (0.1%)"}
      ],
      props:[
        {h:"Adapalene", p:"A new-generation retinoid. Normalizes keratinization, prevents comedone formation and has an anti-inflammatory effect."},
        {h:"Against comedones", p:"Effectively reduces the number of open and closed comedones."},
        {h:"Anti-inflammatory effect", p:"Reduces inflammatory acne elements and soothes the skin."}
      ],
      areas:[
        {h:"Acne", p:"Treatment and prevention of acne."},
        {h:"Comedones", p:"Reduction of open and closed comedones."},
        {h:"Inflammation", p:"Reduction of inflammatory elements."},
        {h:"Problem skin", p:"Care for problem skin."}
      ],
      dosageText:"For external use only. Apply a thin layer to cleansed skin once a day in the evening. See the leaflet for exact information.",
      dosageStats:[{n:"50 g",l:"tube"},{n:"1",l:"time a day"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy. For external use only."},
        {h:"Side effects", p:"Dryness, redness, flaking or a burning sensation are possible. Avoid sun exposure."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. A cosmetic product."}
      ],
      legal:"A cosmetic product. For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Stop-inn",
      heroSub:"Una crema-gel con adapalene allo 0,1% contro l'acne. Un retinoide per trattare e prevenire l'acne.",
      introTitle:"Un retinoide contro l'acne",
      introText:"Stop-inn è una crema-gel per uso esterno con adapalene allo 0,1%. Un retinoide di nuova generazione per il trattamento dell'acne, normalizza la cheratinizzazione e riduce l'infiammazione.",
      infoCards:[
        {h:"Formato", p:"Crema-gel per uso esterno, tubo da 50 g."},
        {h:"Composizione", p:"Adapalene — 1 mg/g (0,1%)"}
      ],
      props:[
        {h:"Adapalene", p:"Un retinoide di nuova generazione. Normalizza la cheratinizzazione, previene la formazione di comedoni e ha un effetto antinfiammatorio."},
        {h:"Contro i comedoni", p:"Riduce efficacemente il numero di comedoni aperti e chiusi."},
        {h:"Effetto antinfiammatorio", p:"Riduce gli elementi infiammatori dell'acne e lenisce la pelle."}
      ],
      areas:[
        {h:"Acne", p:"Trattamento e prevenzione dell'acne."},
        {h:"Comedoni", p:"Riduzione dei comedoni aperti e chiusi."},
        {h:"Infiammazione", p:"Riduzione degli elementi infiammatori."},
        {h:"Pelle problematica", p:"Cura della pelle problematica."}
      ],
      dosageText:"Solo per uso esterno. Applicare uno strato sottile sulla pelle detersa una volta al giorno la sera. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"50 g",l:"tubo"},{n:"1",l:"volta al giorno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza. Solo per uso esterno."},
        {h:"Effetti collaterali", p:"Possibili secchezza, arrossamento, desquamazione o sensazione di bruciore. Evitare l'esposizione al sole."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Prodotto cosmetico."}
      ],
      legal:"Prodotto cosmetico. Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Stop-inn",
      heroSub:"Ugri toshmasiga qarshi 0,1% adapalen bilan krem-gel. Akneni davolash va profilaktika qilish uchun retinoid.",
      introTitle:"Aknega qarshi retinoid",
      introText:"Stop-inn — 0,1% adapalen bilan tashqi qo‘llash uchun krem-gel. Ugri toshmasini davolash uchun yangi avlod retinoidi, muguzlanish jarayonlarini me’yorlashtiradi va yallig‘lanishni kamaytiradi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun krem-gel, 50 g tuba."},
        {h:"Tarkibi", p:"Adapalen — 1 mg/g (0,1%)"}
      ],
      props:[
        {h:"Adapalen", p:"Yangi avlod retinoidi. Keratinizatsiya jarayonlarini me’yorlashtiradi, komedonlar hosil bo‘lishiga to‘sqinlik qiladi va yallig‘lanishga qarshi ta’sir ko‘rsatadi."},
        {h:"Komedonlarga qarshi", p:"Ochiq va yopiq komedonlar sonini samarali kamaytiradi."},
        {h:"Yallig‘lanishga qarshi ta’sir", p:"Akne yallig‘lanish elementlarini kamaytiradi, terini tinchlantiradi."}
      ],
      areas:[
        {h:"Ugri toshmasi", p:"Akneni davolash va profilaktika qilish."},
        {h:"Komedonlar", p:"Ochiq va yopiq komedonlarni kamaytirish."},
        {h:"Yallig‘lanishlar", p:"Yallig‘lanish elementlarini kamaytirish."},
        {h:"Muammoli teri", p:"Muammoli teri parvarishi."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Tozalangan teriga kuniga 1 marta kechqurun yupqa qatlamda surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"50 g",l:"tuba"},{n:"1",l:"marta kuniga"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik. Faqat tashqi qo‘llash uchun."},
        {h:"Nojo‘ya ta’sirlar", p:"Quruqlik, qizarish, po‘st tashlash, achishish hissi bo‘lishi mumkin. Quyoshdan saqlaning."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. Kosmetik vosita."}
      ],
      legal:"Kosmetik vosita. Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "mastopar-bio-gel": {
    cat: "creams",
    img: "img/prod/mastopar-bio-gel.webp",
    ru: {
      name:"Мастопар Био",
      heroSub:"Крем на гелевой основе — комплексное средство для профилактики мастопатии.",
      introTitle:"Профилактика мастопатии",
      introText:"Мастопар Био — крем на гелевой основе, комплексное средство для наружного применения. Способствует профилактике мастопатии и поддержанию здоровья молочных желёз.",
      infoCards:[
        {h:"Форма выпуска", p:"Крем на гелевой основе, туба 50 г."},
        {h:"Назначение", p:"Комплексное средство для профилактики мастопатии."}
      ],
      props:[
        {h:"Комплексное действие", p:"Растительные компоненты способствуют нормализации состояния тканей молочных желёз."},
        {h:"Гелевая основа", p:"Лёгкая гелевая основа быстро впитывается, удобна для нанесения."},
        {h:"Местное применение", p:"Воздействует локально на область молочных желёз."}
      ],
      areas:[
        {h:"Мастопатия", p:"Профилактика мастопатии."},
        {h:"Молочные железы", p:"Поддержание здоровья молочных желёз."},
        {h:"Дискомфорт", p:"Уменьшение дискомфорта в области груди."},
        {h:"Уход", p:"Местный уход за тканями груди."}
      ],
      dosageText:"Только для наружного применения. Наносить на кожу в области молочных желёз. Точную информацию см. в инструкции.",
      dosageStats:[{n:"50 г",l:"туба"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Только для наружного применения. При заболеваниях молочных желёз — после консультации с врачом."},
        {h:"Побочные действия", p:"Возможны индивидуальные реакции. При появлении прекратить применение."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. Косметическое средство."}
      ],
      legal:"Косметическое средство. Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Mastopar Bio",
      heroSub:"A gel-based cream — a comprehensive remedy for mastopathy prevention.",
      introTitle:"Mastopathy prevention",
      introText:"Mastopar Bio is a gel-based cream, a comprehensive product for external use. It helps prevent mastopathy and maintain breast health.",
      infoCards:[
        {h:"Form", p:"Gel-based cream, 50 g tube."},
        {h:"Purpose", p:"A comprehensive remedy for mastopathy prevention."}
      ],
      props:[
        {h:"Comprehensive action", p:"Plant components help normalize the condition of breast tissue."},
        {h:"Gel base", p:"A light gel base absorbs quickly and is easy to apply."},
        {h:"Local use", p:"Acts locally on the breast area."}
      ],
      areas:[
        {h:"Mastopathy", p:"Prevention of mastopathy."},
        {h:"Breasts", p:"Maintaining breast health."},
        {h:"Discomfort", p:"Reducing discomfort in the breast area."},
        {h:"Care", p:"Local care for breast tissue."}
      ],
      dosageText:"For external use only. Apply to the skin in the breast area. See the leaflet for exact information.",
      dosageStats:[{n:"50 g",l:"tube"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. For external use only. In breast diseases — after consulting a doctor."},
        {h:"Side effects", p:"Individual reactions are possible. If they occur, stop use."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. A cosmetic product."}
      ],
      legal:"A cosmetic product. For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Mastopar Bio",
      heroSub:"Una crema a base di gel — un rimedio completo per la prevenzione della mastopatia.",
      introTitle:"Prevenzione della mastopatia",
      introText:"Mastopar Bio è una crema a base di gel, un prodotto completo per uso esterno. Aiuta a prevenire la mastopatia e a mantenere la salute del seno.",
      infoCards:[
        {h:"Formato", p:"Crema a base di gel, tubo da 50 g."},
        {h:"Destinazione", p:"Un rimedio completo per la prevenzione della mastopatia."}
      ],
      props:[
        {h:"Azione completa", p:"I componenti vegetali aiutano a normalizzare la condizione del tessuto mammario."},
        {h:"Base in gel", p:"Una base in gel leggera si assorbe rapidamente ed è facile da applicare."},
        {h:"Uso locale", p:"Agisce localmente sull'area del seno."}
      ],
      areas:[
        {h:"Mastopatia", p:"Prevenzione della mastopatia."},
        {h:"Seno", p:"Mantenimento della salute del seno."},
        {h:"Fastidio", p:"Riduzione del fastidio nell'area del seno."},
        {h:"Cura", p:"Cura locale del tessuto mammario."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulla pelle nell'area del seno. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"50 g",l:"tubo"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Solo per uso esterno. In caso di malattie del seno — dopo aver consultato un medico."},
        {h:"Effetti collaterali", p:"Sono possibili reazioni individuali. In tal caso interrompere l'uso."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Prodotto cosmetico."}
      ],
      legal:"Prodotto cosmetico. Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Mastopar Bio",
      heroSub:"Gel asosidagi krem — mastopatiya profilaktikasi uchun majmuaviy vosita.",
      introTitle:"Mastopatiya profilaktikasi",
      introText:"Mastopar Bio — gel asosidagi krem, tashqi qo‘llash uchun majmuaviy vosita. Mastopatiya profilaktikasi va sut bezlari salomatligini saqlashga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Gel asosidagi krem, 50 g tuba."},
        {h:"Vazifasi", p:"Mastopatiya profilaktikasi uchun majmuaviy vosita."}
      ],
      props:[
        {h:"Majmuaviy ta’sir", p:"O‘simlik komponentlari sut bezlari to‘qimalari holatini me’yorlashtirishga yordam beradi."},
        {h:"Gel asosi", p:"Yengil gel asosi tez singadi, surtishga qulay."},
        {h:"Mahalliy qo‘llash", p:"Sut bezlari sohasiga mahalliy ta’sir qiladi."}
      ],
      areas:[
        {h:"Mastopatiya", p:"Mastopatiya profilaktikasi."},
        {h:"Sut bezlari", p:"Sut bezlari salomatligini saqlash."},
        {h:"Noqulaylik", p:"Ko‘krak sohasidagi noqulaylikni kamaytirish."},
        {h:"Parvarish", p:"Ko‘krak to‘qimalarini mahalliy parvarishlash."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Sut bezlari sohasidagi teriga surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"50 g",l:"tuba"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun. Sut bezlari kasalliklarida — shifokor bilan maslahatlashgandan keyin."},
        {h:"Nojo‘ya ta’sirlar", p:"Individual reaksiyalar bo‘lishi mumkin. Yuzaga kelsa, qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. Kosmetik vosita."}
      ],
      legal:"Kosmetik vosita. Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "vitin": {
    cat: "creams",
    img: "img/prod/vitin.webp",
    doc: "downloads/vitin-instrukciya.docx",
    ru: {
      name:"Витин Эффект",
      heroSub:"Гель для наружного применения, стимулирующий репигментацию при витилиго.",
      introTitle:"Репигментация при витилиго",
      introText:"Витин Эффект — гель для наружного применения на основе растительных экстрактов. Способствует стимуляции репигментации кожи при витилиго.",
      infoCards:[
        {h:"Форма выпуска", p:"Гель для наружного применения, туба 30 г."},
        {h:"Состав 1 г геля", p:"Экстракт корня тропической мяты (форсколин) — 22 мг<br>Экстракт стручков чёрной кассии — 115 мг<br>Экстракт плодов амми большой (фурокумарины) — 164 мг"}
      ],
      props:[
        {h:"Растительные экстракты", p:"Комплекс растительных компонентов способствует стимуляции меланогенеза и репигментации кожи."},
        {h:"Местное действие", p:"Применяется наружно на участки кожи, поражённые витилиго."},
        {h:"Косметический уход", p:"Поддерживает выравнивание тона кожи при депигментации."}
      ],
      areas:[
        {h:"Витилиго", p:"Стимуляция репигментации при витилиго."},
        {h:"Депигментация", p:"При депигментированных участках кожи."},
        {h:"Тон кожи", p:"Поддержка выравнивания тона кожи."},
        {h:"Уход", p:"Местный косметический уход."}
      ],
      dosageText:"Только для наружного применения. Наносить на депигментированные участки кожи. Точную информацию см. в инструкции.",
      dosageStats:[{n:"30 г",l:"туба"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Только для наружного применения."},
        {h:"Побочные действия", p:"Возможны индивидуальные реакции. При появлении прекратить применение."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. Косметическое средство."}
      ],
      legal:"Косметическое средство. Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Vitin Effect",
      heroSub:"A gel for external use that stimulates repigmentation in vitiligo.",
      introTitle:"Repigmentation in vitiligo",
      introText:"Vitin Effect is a gel for external use based on plant extracts. It helps stimulate skin repigmentation in vitiligo.",
      infoCards:[
        {h:"Form", p:"Gel for external use, 30 g tube."},
        {h:"Composition per 1 g", p:"Tropical mint root extract (forskolin) — 22 mg<br>Black cassia pod extract — 115 mg<br>Ammi majus fruit extract (furocoumarins) — 164 mg"}
      ],
      props:[
        {h:"Plant extracts", p:"A complex of plant components helps stimulate melanogenesis and skin repigmentation."},
        {h:"Local action", p:"Applied externally to skin areas affected by vitiligo."},
        {h:"Cosmetic care", p:"Supports evening of skin tone in depigmentation."}
      ],
      areas:[
        {h:"Vitiligo", p:"Stimulation of repigmentation in vitiligo."},
        {h:"Depigmentation", p:"For depigmented skin areas."},
        {h:"Skin tone", p:"Support for evening skin tone."},
        {h:"Care", p:"Local cosmetic care."}
      ],
      dosageText:"For external use only. Apply to depigmented skin areas. See the leaflet for exact information.",
      dosageStats:[{n:"30 g",l:"tube"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. For external use only."},
        {h:"Side effects", p:"Individual reactions are possible. If they occur, stop use."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. A cosmetic product."}
      ],
      legal:"A cosmetic product. For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Vitin Effect",
      heroSub:"Un gel per uso esterno che stimola la ripigmentazione nella vitiligine.",
      introTitle:"Ripigmentazione nella vitiligine",
      introText:"Vitin Effect è un gel per uso esterno a base di estratti vegetali. Aiuta a stimolare la ripigmentazione della pelle nella vitiligine.",
      infoCards:[
        {h:"Formato", p:"Gel per uso esterno, tubo da 30 g."},
        {h:"Composizione per 1 g", p:"Estratto di radice di menta tropicale (forscolina) — 22 mg<br>Estratto di baccelli di cassia nera — 115 mg<br>Estratto di frutti di ammi maggiore (furocumarine) — 164 mg"}
      ],
      props:[
        {h:"Estratti vegetali", p:"Un complesso di componenti vegetali aiuta a stimolare la melanogenesi e la ripigmentazione della pelle."},
        {h:"Azione locale", p:"Si applica esternamente sulle aree cutanee colpite dalla vitiligine."},
        {h:"Cura cosmetica", p:"Sostiene l'uniformazione del tono della pelle in caso di depigmentazione."}
      ],
      areas:[
        {h:"Vitiligine", p:"Stimolazione della ripigmentazione nella vitiligine."},
        {h:"Depigmentazione", p:"Per le aree cutanee depigmentate."},
        {h:"Tono della pelle", p:"Sostegno all'uniformazione del tono della pelle."},
        {h:"Cura", p:"Cura cosmetica locale."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulle aree cutanee depigmentate. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"30 g",l:"tubo"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Solo per uso esterno."},
        {h:"Effetti collaterali", p:"Sono possibili reazioni individuali. In tal caso interrompere l'uso."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Prodotto cosmetico."}
      ],
      legal:"Prodotto cosmetico. Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Vitin Effect",
      heroSub:"Vitiligoda repigmentatsiyani rag‘batlantiruvchi tashqi qo‘llash uchun gel.",
      introTitle:"Vitiligoda repigmentatsiya",
      introText:"Vitin Effect — o‘simlik ekstraktlari asosidagi tashqi qo‘llash uchun gel. Vitiligoda teri repigmentatsiyasini rag‘batlantirishga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun gel, 30 g tuba."},
        {h:"1 g gel tarkibi", p:"Tropik yalpiz ildizi ekstrakti (forskolin) — 22 mg<br>Qora kassiya qini ekstrakti — 115 mg<br>Katta ammi mevasi ekstrakti (furokumarinlar) — 164 mg"}
      ],
      props:[
        {h:"O‘simlik ekstraktlari", p:"O‘simlik komponentlari majmuasi melanogenez va teri repigmentatsiyasini rag‘batlantirishga yordam beradi."},
        {h:"Mahalliy ta’sir", p:"Vitiligo ta’sir qilgan teri qismlariga tashqi surtiladi."},
        {h:"Kosmetik parvarish", p:"Depigmentatsiyada teri rangini tekislashni qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Vitiligo", p:"Vitiligoda repigmentatsiyani rag‘batlantirish."},
        {h:"Depigmentatsiya", p:"Depigmentatsiyalangan teri qismlarida."},
        {h:"Teri rangi", p:"Teri rangini tekislashni qo‘llab-quvvatlash."},
        {h:"Parvarish", p:"Mahalliy kosmetik parvarish."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Depigmentatsiyalangan teri qismlariga surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"30 g",l:"tuba"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun."},
        {h:"Nojo‘ya ta’sirlar", p:"Individual reaksiyalar bo‘lishi mumkin. Yuzaga kelsa, qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. Kosmetik vosita."}
      ],
      legal:"Kosmetik vosita. Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "ateron": {
    cat: "creams",
    img: "img/prod/ateron.webp",
    doc: "downloads/ateron-instrukciya.docx",
    ru: {
      name:"А-Треон",
      heroSub:"Крем для наружного применения с витамином A. Эффективное средство от прыщей и угрей на коже лица.",
      introTitle:"Против прыщей и угрей",
      introText:"А-Треон — крем для наружного применения на основе витамина A (ретинола). Эффективное средство от прыщей и угрей на коже лица, нормализует процессы обновления кожи.",
      infoCards:[
        {h:"Форма выпуска", p:"Крем для наружного применения, туба 30 г."},
        {h:"Состав 1 г крема", p:"Третиноин — 0,5 мг<br>Экстракты ячменя, мандарина и камелии"}
      ],
      props:[
        {h:"Витамин A (ретинол)", p:"Нормализует процессы кератинизации и обновления кожи, уменьшает образование комедонов, улучшает состояние проблемной кожи."},
        {h:"Против акне", p:"Эффективное средство от прыщей и угрей на коже лица."},
        {h:"Обновление кожи", p:"Стимулирует регенерацию и улучшает текстуру кожи."}
      ],
      areas:[
        {h:"Прыщи и угри", p:"Эффективное средство от прыщей и угрей на коже лица."},
        {h:"Комедоны", p:"Снижение образования комедонов."},
        {h:"Проблемная кожа", p:"Уход за проблемной кожей лица."},
        {h:"Текстура кожи", p:"Улучшение текстуры и обновление кожи."}
      ],
      dosageText:"Только для наружного применения. Наносить на очищенную кожу лица. Точную информацию см. в инструкции.",
      dosageStats:[{n:"30 г",l:"туба"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам. Только для наружного применения."},
        {h:"Побочные действия", p:"Возможны сухость, лёгкое раздражение. При выраженных реакциях прекратить применение."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. Косметическое средство."}
      ],
      legal:"Косметическое средство. Только для наружного применения. Перед применением ознакомьтесь с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"A-Treon",
      heroSub:"A cream for external use with vitamin A. An effective remedy against pimples and acne on the face.",
      introTitle:"Against pimples and acne",
      introText:"A-Treon is a cream for external use based on vitamin A (retinol). An effective remedy against pimples and acne on facial skin, it normalizes skin renewal.",
      infoCards:[
        {h:"Form", p:"Cream for external use, 30 g tube."},
        {h:"Composition per 1 g", p:"Tretinoin — 0.5 mg<br>Barley, mandarin and camellia extracts"}
      ],
      props:[
        {h:"Vitamin A (retinol)", p:"Normalizes keratinization and skin renewal, reduces comedone formation and improves the condition of problem skin."},
        {h:"Against acne", p:"An effective remedy against pimples and acne on facial skin."},
        {h:"Skin renewal", p:"Stimulates regeneration and improves skin texture."}
      ],
      areas:[
        {h:"Pimples & acne", p:"An effective remedy against pimples and acne on the face."},
        {h:"Comedones", p:"Reduced comedone formation."},
        {h:"Problem skin", p:"Care for problem facial skin."},
        {h:"Skin texture", p:"Improved texture and skin renewal."}
      ],
      dosageText:"For external use only. Apply to cleansed facial skin. See the leaflet for exact information.",
      dosageStats:[{n:"30 g",l:"tube"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components. For external use only."},
        {h:"Side effects", p:"Dryness or mild irritation are possible. Stop use if reactions are pronounced."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. A cosmetic product."}
      ],
      legal:"A cosmetic product. For external use only. Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"A-Treon",
      heroSub:"Una crema per uso esterno con vitamina A. Un rimedio efficace contro brufoli e acne sul viso.",
      introTitle:"Contro brufoli e acne",
      introText:"A-Treon è una crema per uso esterno a base di vitamina A (retinolo). Un rimedio efficace contro brufoli e acne sulla pelle del viso, normalizza il rinnovamento cutaneo.",
      infoCards:[
        {h:"Formato", p:"Crema per uso esterno, tubo da 30 g."},
        {h:"Composizione per 1 g", p:"Tretinoina — 0,5 mg<br>Estratti di orzo, mandarino e camelia"}
      ],
      props:[
        {h:"Vitamina A (retinolo)", p:"Normalizza la cheratinizzazione e il rinnovamento cutaneo, riduce la formazione di comedoni e migliora la condizione della pelle problematica."},
        {h:"Contro l'acne", p:"Un rimedio efficace contro brufoli e acne sulla pelle del viso."},
        {h:"Rinnovamento cutaneo", p:"Stimola la rigenerazione e migliora la texture della pelle."}
      ],
      areas:[
        {h:"Brufoli e acne", p:"Un rimedio efficace contro brufoli e acne sul viso."},
        {h:"Comedoni", p:"Ridotta formazione di comedoni."},
        {h:"Pelle problematica", p:"Cura della pelle problematica del viso."},
        {h:"Texture della pelle", p:"Texture migliorata e rinnovamento cutaneo."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulla pelle del viso detersa. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"30 g",l:"tubo"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti. Solo per uso esterno."},
        {h:"Effetti collaterali", p:"Possibili secchezza o lieve irritazione. Interrompere l'uso se le reazioni sono marcate."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Prodotto cosmetico."}
      ],
      legal:"Prodotto cosmetico. Solo per uso esterno. Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"A-Treon",
      heroSub:"A vitamini bilan tashqi qo‘llash uchun krem. Yuz terisidagi husnbuzar va ugrilarga qarshi samarali vosita.",
      introTitle:"Husnbuzar va ugrilarga qarshi",
      introText:"A-Treon — A vitamini (retinol) asosidagi tashqi qo‘llash uchun krem. Yuz terisidagi husnbuzar va ugrilarga qarshi samarali vosita, teri yangilanish jarayonlarini me’yorlashtiradi.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun krem, 30 g tuba."},
        {h:"1 g krem tarkibi", p:"Tretinoin — 0,5 mg<br>Arpa, mandarin va kameliya ekstraktlari"}
      ],
      props:[
        {h:"A vitamini (retinol)", p:"Keratinizatsiya va teri yangilanish jarayonlarini me’yorlashtiradi, komedonlar hosil bo‘lishini kamaytiradi, muammoli teri holatini yaxshilaydi."},
        {h:"Aknega qarshi", p:"Yuz terisidagi husnbuzar va ugrilarga qarshi samarali vosita."},
        {h:"Terini yangilash", p:"Regeneratsiyani rag‘batlantiradi va teri teksturasini yaxshilaydi."}
      ],
      areas:[
        {h:"Husnbuzar va ugrilar", p:"Yuz terisidagi husnbuzar va ugrilarga qarshi samarali vosita."},
        {h:"Komedonlar", p:"Komedonlar hosil bo‘lishini kamaytirish."},
        {h:"Muammoli teri", p:"Yuzning muammoli terisini parvarishlash."},
        {h:"Teri teksturasi", p:"Teksturani yaxshilash va terini yangilash."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Tozalangan yuz terisiga surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"30 g",l:"tuba"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun."},
        {h:"Nojo‘ya ta’sirlar", p:"Quruqlik, yengil tirnalish bo‘lishi mumkin. Kuchli reaksiyalarda qo‘llashni to‘xtating."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. Kosmetik vosita."}
      ],
      legal:"Kosmetik vosita. Faqat tashqi qo‘llash uchun. Qo‘llashdan oldin yo‘riqnoma bilan tanishing. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "ginobalance": {
    cat: "gels",
    img: "img/prod/ginobalance.webp",
    doc: "downloads/ginobalance-instrukciya.docx",
    ru: {
      name:"Гинобаланс",
      heroSub:"Гель для приёма внутрь с мио- и D-хиро-инозитолом, магнием и витамином B6/B9. Для женского гормонального баланса.",
      introTitle:"Баланс женского здоровья",
      introText:"Гинобаланс — гель в стик-пакетах на основе мио-инозитола и D-хиро-инозитола с магнием, витамином B6 и метилфолатом. Поддерживает гормональный баланс, регулярность менструального цикла и репродуктивное здоровье женщин.",
      infoCards:[
        {h:"Форма выпуска", p:"Гель для приёма внутрь в стик-пакетах по 10 мл."},
        {h:"Состав 1 стика (10 мл)", p:"Мио-инозитол — 1800 мг · D-хиро-инозитол — 50 мг<br>Магний бисглицинат — 150 мг<br>Витамин B6 — 5000 мкг · Метилфолат — 800 мкг"}
      ],
      props:[
        {h:"Мио-инозитол", p:"Участвует в клеточных сигнальных процессах, регулирует чувствительность тканей к инсулину и обмен глюкозы. Поддерживает функцию яичников, регулярность цикла и нормальную овуляцию."},
        {h:"D-хиро-инозитол", p:"Повышает чувствительность к инсулину, регулирует гормональный баланс и метаболические процессы, связанные с репродуктивным здоровьем, особенно при СПКЯ."},
        {h:"Магний, B6, метилфолат", p:"Магний и B6 снижают стресс, ПМС и спазмы, поддерживают нервную систему; метилфолат (активная форма фолиевой кислоты) важен при подготовке к беременности."}
      ],
      areas:[
        {h:"Цикл", p:"Поддержка регулярности менструального цикла и овуляции."},
        {h:"СПКЯ", p:"При синдроме поликистозных яичников и инсулинорезистентности."},
        {h:"Репродуктивное здоровье", p:"Подготовка к беременности, поддержка функции яичников."},
        {h:"Тонус", p:"Снижение ПМС, стресса и нервного напряжения."}
      ],
      dosageText:"Принимать внутрь. Взрослым — по 1 стик-пакету 1–2 раза в сутки. Гель не разбавлять. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"1–2",l:"стика в сутки"},{n:"10 мл",l:"один стик"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов. Беременным и кормящим — по согласованию с врачом."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Ginobalance",
      heroSub:"An oral gel with myo- and D-chiro-inositol, magnesium and vitamins B6/B9. For female hormonal balance.",
      introTitle:"Balance for women's health",
      introText:"Ginobalance is a gel in stick sachets based on myo-inositol and D-chiro-inositol with magnesium, vitamin B6 and methylfolate. It supports hormonal balance, menstrual cycle regularity and women's reproductive health.",
      infoCards:[
        {h:"Form", p:"Oral gel in 10 ml stick sachets."},
        {h:"Composition per stick (10 ml)", p:"Myo-inositol — 1800 mg · D-chiro-inositol — 50 mg<br>Magnesium bisglycinate — 150 mg<br>Vitamin B6 — 5000 mcg · Methylfolate — 800 mcg"}
      ],
      props:[
        {h:"Myo-inositol", p:"Participates in cell signaling, regulates tissue insulin sensitivity and glucose metabolism. Supports ovarian function, cycle regularity and normal ovulation."},
        {h:"D-chiro-inositol", p:"Increases insulin sensitivity, regulates hormonal balance and metabolic processes related to reproductive health, especially in PCOS."},
        {h:"Magnesium, B6, methylfolate", p:"Magnesium and B6 reduce stress, PMS and cramps and support the nervous system; methylfolate (the active form of folic acid) is important for pregnancy planning."}
      ],
      areas:[
        {h:"Cycle", p:"Support of menstrual cycle and ovulation regularity."},
        {h:"PCOS", p:"For polycystic ovary syndrome and insulin resistance."},
        {h:"Reproductive health", p:"Pregnancy planning, support of ovarian function."},
        {h:"Vitality", p:"Reduced PMS, stress and nervous tension."}
      ],
      dosageText:"Take orally. Adults — 1 stick sachet 1–2 times a day. Do not dilute the gel. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"1–2",l:"sticks a day"},{n:"10 ml",l:"one stick"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components. Pregnant and breastfeeding women — by agreement with a doctor."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Ginobalance",
      heroSub:"Un gel orale con mio- e D-chiro-inositolo, magnesio e vitamine B6/B9. Per l'equilibrio ormonale femminile.",
      introTitle:"Equilibrio per la salute femminile",
      introText:"Ginobalance è un gel in bustine stick a base di mio-inositolo e D-chiro-inositolo con magnesio, vitamina B6 e metilfolato. Sostiene l'equilibrio ormonale, la regolarità del ciclo mestruale e la salute riproduttiva femminile.",
      infoCards:[
        {h:"Formato", p:"Gel orale in bustine stick da 10 ml."},
        {h:"Composizione per stick (10 ml)", p:"Mio-inositolo — 1800 mg · D-chiro-inositolo — 50 mg<br>Magnesio bisglicinato — 150 mg<br>Vitamina B6 — 5000 mcg · Metilfolato — 800 mcg"}
      ],
      props:[
        {h:"Mio-inositolo", p:"Partecipa alla segnalazione cellulare, regola la sensibilità dei tessuti all'insulina e il metabolismo del glucosio. Sostiene la funzione ovarica, la regolarità del ciclo e la normale ovulazione."},
        {h:"D-chiro-inositolo", p:"Aumenta la sensibilità all'insulina, regola l'equilibrio ormonale e i processi metabolici legati alla salute riproduttiva, specialmente nella PCOS."},
        {h:"Magnesio, B6, metilfolato", p:"Magnesio e B6 riducono stress, PMS e crampi e sostengono il sistema nervoso; il metilfolato (forma attiva dell'acido folico) è importante per la pianificazione della gravidanza."}
      ],
      areas:[
        {h:"Ciclo", p:"Sostegno alla regolarità del ciclo mestruale e dell'ovulazione."},
        {h:"PCOS", p:"In caso di sindrome dell'ovaio policistico e insulino-resistenza."},
        {h:"Salute riproduttiva", p:"Pianificazione della gravidanza, sostegno della funzione ovarica."},
        {h:"Vitalità", p:"Riduzione di PMS, stress e tensione nervosa."}
      ],
      dosageText:"Assumere per via orale. Adulti — 1 bustina stick 1–2 volte al giorno. Non diluire il gel. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"1–2",l:"stick al giorno"},{n:"10 ml",l:"uno stick"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti. Donne in gravidanza e allattamento — previo accordo con il medico."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Ginobalance",
      heroSub:"Mio- va D-xiro-inozitol, magniy va B6/B9 vitaminlari bilan ichimlik geli. Ayol gormonal muvozanati uchun.",
      introTitle:"Ayollar salomatligi muvozanati",
      introText:"Ginobalance — magniy, B6 vitamini va metilfolat bilan mio-inozitol va D-xiro-inozitol asosidagi stik-paketdagi gel. Gormonal muvozanat, hayz sikli muntazamligi va ayollar reproduktiv salomatligini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Stik-paketlarda 10 ml li ichimlik geli."},
        {h:"1 stik (10 ml) tarkibi", p:"Mio-inozitol — 1800 mg · D-xiro-inozitol — 50 mg<br>Magniy bisglitsinat — 150 mg<br>B6 vitamini — 5000 mkg · Metilfolat — 800 mkg"}
      ],
      props:[
        {h:"Mio-inozitol", p:"Hujayra signal jarayonlarida ishtirok etadi, to‘qimalarning insulinga sezuvchanligi va glyukoza almashinuvini tartibga soladi. Tuxumdon funksiyasi, sikl muntazamligi va normal ovulyatsiyani qo‘llab-quvvatlaydi."},
        {h:"D-xiro-inozitol", p:"Insulinga sezuvchanlikni oshiradi, gormonal muvozanat va reproduktiv salomatlik bilan bog‘liq metabolik jarayonlarni, ayniqsa PKTSda tartibga soladi."},
        {h:"Magniy, B6, metilfolat", p:"Magniy va B6 stress, HOS va spazmlarni kamaytiradi, asab tizimini qo‘llab-quvvatlaydi; metilfolat (foliy kislotasining faol shakli) homiladorlikka tayyorgarlikda muhim."}
      ],
      areas:[
        {h:"Sikl", p:"Hayz sikli va ovulyatsiya muntazamligini qo‘llab-quvvatlash."},
        {h:"PKTS", p:"Polikistoz tuxumdon sindromi va insulinga chidamlilikda."},
        {h:"Reproduktiv salomatlik", p:"Homiladorlikka tayyorgarlik, tuxumdon funksiyasini qo‘llab-quvvatlash."},
        {h:"Tetiklik", p:"HOS, stress va asabiy taranglikni kamaytirish."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Kattalarga — kuniga 1–2 marta 1 stik-paketdan. Gelni suyultirmang. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"1–2",l:"stik sutkada"},{n:"10 ml",l:"bitta stik"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik. Homilador va emizuvchilarga — shifokor bilan kelishilgan holda."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "gopanteval": {
    cat: "solutions",
    img: "img/prod/gopanteval.webp",
    doc: "downloads/gopanteval-instrukciya.docx",
    ru: {
      name:"Гопантевал",
      heroSub:"Раствор для приёма внутрь на основе гопантеновой кислоты. Ноотропное средство для нервной системы и когнитивных функций.",
      introTitle:"Ноотроп для нервной системы",
      introText:"Гопантевал — раствор для приёма внутрь на основе гопантеновой кислоты. Ноотропное средство, поддерживает память, внимание и работоспособность, снижает нервную возбудимость.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь, 100 мл во флаконе."},
        {h:"Активное вещество", p:"Гопантеновая кислота"}
      ],
      props:[
        {h:"Гопантеновая кислота", p:"Ноотропное средство, производное ГАМК. Сочетает мягкое стимулирующее и успокаивающее действие, улучшает обмен в нервных клетках и устойчивость мозга к нагрузкам."},
        {h:"Когнитивные функции", p:"Поддерживает память, внимание и умственную работоспособность."},
        {h:"Снижение возбудимости", p:"Уменьшает нервную возбудимость, способствует нормализации поведения и сна."}
      ],
      areas:[
        {h:"Когнитивные нарушения", p:"При органических поражениях мозга, после нейроинфекций и черепно-мозговых травм."},
        {h:"Перегрузки", p:"При психоэмоциональных перегрузках, снижении работоспособности, для концентрации и памяти."},
        {h:"У детей", p:"При задержке развития, ДЦП и гиперактивности с дефицитом внимания (СДВГ)."},
        {h:"Мочеиспускание", p:"При нейрогенных расстройствах мочеиспускания, в т.ч. энурезе."}
      ],
      dosageText:"Принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"100 мл",l:"объём флакона"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта."}
      ],
      legal:"Перед применением рекомендуется ознакомиться с инструкцией. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Gopanteval",
      heroSub:"An oral solution based on hopantenic acid. A nootropic for the nervous system and cognitive function.",
      introTitle:"A nootropic for the nervous system",
      introText:"Gopanteval is an oral solution based on hopantenic acid. A nootropic that supports memory, attention and performance and reduces nervous excitability.",
      infoCards:[
        {h:"Form", p:"Oral solution, 100 ml bottle."},
        {h:"Active substance", p:"Hopantenic acid"}
      ],
      props:[
        {h:"Hopantenic acid", p:"A nootropic, a GABA derivative. Combines a mild stimulating and calming effect, improves metabolism in nerve cells and the brain's resistance to load."},
        {h:"Cognitive function", p:"Supports memory, attention and mental performance."},
        {h:"Reduced excitability", p:"Reduces nervous excitability and helps normalize behavior and sleep."}
      ],
      areas:[
        {h:"Memory & attention", p:"Support of memory, attention and concentration."},
        {h:"Nervous excitability", p:"Reduction of nervous excitability and irritability."},
        {h:"Performance", p:"Increased mental and physical performance."},
        {h:"Nervous system", p:"Support of normal nervous system function."}
      ],
      dosageText:"Take orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"100 ml",l:"bottle volume"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription."}
      ],
      legal:"Read the instructions before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Gopanteval",
      heroSub:"Una soluzione orale a base di acido opantenico. Un nootropico per il sistema nervoso e le funzioni cognitive.",
      introTitle:"Un nootropico per il sistema nervoso",
      introText:"Gopanteval è una soluzione orale a base di acido opantenico. Un nootropico che sostiene memoria, attenzione e prestazioni e riduce l'eccitabilità nervosa.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, flacone da 100 ml."},
        {h:"Principio attivo", p:"Acido opantenico"}
      ],
      props:[
        {h:"Acido opantenico", p:"Un nootropico, derivato del GABA. Combina un lieve effetto stimolante e calmante, migliora il metabolismo nelle cellule nervose e la resistenza del cervello allo sforzo."},
        {h:"Funzioni cognitive", p:"Sostiene memoria, attenzione e prestazioni mentali."},
        {h:"Ridotta eccitabilità", p:"Riduce l'eccitabilità nervosa e aiuta a normalizzare comportamento e sonno."}
      ],
      areas:[
        {h:"Memoria e attenzione", p:"Sostegno di memoria, attenzione e concentrazione."},
        {h:"Eccitabilità nervosa", p:"Riduzione dell'eccitabilità nervosa e dell'irritabilità."},
        {h:"Prestazioni", p:"Aumento delle prestazioni mentali e fisiche."},
        {h:"Sistema nervoso", p:"Sostegno della normale funzione del sistema nervoso."}
      ],
      dosageText:"Assumere per via orale. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"100 ml",l:"volume del flacone"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta."}
      ],
      legal:"Leggere le istruzioni prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Gopanteval",
      heroSub:"Gopanten kislotasi asosidagi ichimlik eritmasi. Asab tizimi va kognitiv funksiyalar uchun nootrop vosita.",
      introTitle:"Asab tizimi uchun nootrop",
      introText:"Gopanteval — gopanten kislotasi asosidagi ichimlik eritmasi. Nootrop vosita, xotira, diqqat va ish qobiliyatini qo‘llab-quvvatlaydi, asabiy qo‘zg‘aluvchanlikni kamaytiradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, flakonda 100 ml."},
        {h:"Faol modda", p:"Gopanten kislotasi"}
      ],
      props:[
        {h:"Gopanten kislotasi", p:"Nootrop vosita, GABA hosilasi. Yumshoq rag‘batlantiruvchi va tinchlantiruvchi ta’sirni birlashtiradi, asab hujayralaridagi almashinuvni va miyaning yuklamalarga chidamliligini yaxshilaydi."},
        {h:"Kognitiv funksiyalar", p:"Xotira, diqqat va aqliy ish qobiliyatini qo‘llab-quvvatlaydi."},
        {h:"Qo‘zg‘aluvchanlikni kamaytirish", p:"Asabiy qo‘zg‘aluvchanlikni kamaytiradi, xulq-atvor va uyquni me’yorlashtirishga yordam beradi."}
      ],
      areas:[
        {h:"Kognitiv buzilishlar", p:"Miyaning organik shikastlanishlarida, neyroinfeksiyalar va bosh miya jarohatlaridan keyin."},
        {h:"Ortiqcha yuklamalar", p:"Psixo-emotsional ortiqcha yuklamalarda, ish qobiliyati pasayishida, diqqat va xotira uchun."},
        {h:"Bolalarda", p:"Rivojlanishning kechikishi, BMSh va diqqat yetishmovchiligi bilan giperfaollikda (DYuGS)."},
        {h:"Siyish", p:"Neyrogen siyish buzilishlarida, shu jumladan enurezda."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"100 ml",l:"flakon hajmi"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi."}
      ],
      legal:"Qo‘llashdan oldin yo‘riqnoma bilan tanishish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "nefrolon": {
    cat: "solutions",
    img: "img/prod/nefrolon.webp",
    doc: "downloads/nefrolon-instrukciya.docx",
    ru: {
      name:"Нефролон Био",
      heroSub:"Раствор для приёма внутрь с экстрактами леспедецы и аниса звездчатого. Поддержка почек и мочевыделительной системы.",
      introTitle:"Забота о почках",
      introText:"Нефролон Био — раствор для приёма внутрь на основе экстрактов леспедецы головчатой и аниса звездчатого. Обладает противоазотемическим, противовоспалительным и мягким мочегонным действием, поддерживает работу почек и мочевыводящих путей.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для приёма внутрь, 100 мл во флаконе."},
        {h:"Состав", p:"Экстракт леспедецы головчатой (Lespedeza capitata) — 750 мг<br>Экстракт семян аниса звездчатого (Illicium verum) — 5 мг"}
      ],
      props:[
        {h:"Экстракт леспедецы", p:"Содержит катехины (действуют подобно витамину P), флавоноиды, аскорбиновую кислоту и алкалоиды. Обладает выраженным противоазотемическим и противовоспалительным действием."},
        {h:"Анис звездчатый", p:"Содержит фенолы, цинеол и терпены. Мочегонные свойства используют при заболеваниях мочевого пузыря, в частности при цистите и олигурии."},
        {h:"Совместное действие", p:"Поддерживает выделительную функцию почек, способствует выведению азотистых продуктов обмена и уменьшению воспаления."}
      ],
      areas:[
        {h:"Почки", p:"Поддержка выделительной функции почек."},
        {h:"Мочевой пузырь", p:"При цистите и нарушениях мочеиспускания."},
        {h:"Азотемия", p:"Противоазотемическое действие при нарушениях обмена."},
        {h:"Воспаление", p:"Противовоспалительная поддержка мочевыводящих путей."}
      ],
      dosageText:"Принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"100 мл",l:"объём флакона"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам, беременность, кормление грудью. Содержит этиловый спирт."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Nefrolon Bio",
      heroSub:"An oral solution with lespedeza and star anise extracts. Support for the kidneys and urinary system.",
      introTitle:"Caring for the kidneys",
      introText:"Nefrolon Bio is an oral solution based on extracts of Lespedeza capitata and star anise. It has an anti-azotemic, anti-inflammatory and mild diuretic effect and supports kidney and urinary tract function.",
      infoCards:[
        {h:"Form", p:"Oral solution, 100 ml bottle."},
        {h:"Composition", p:"Lespedeza capitata extract — 750 mg<br>Star anise seed extract (Illicium verum) — 5 mg"}
      ],
      props:[
        {h:"Lespedeza extract", p:"Contains catechins (acting like vitamin P), flavonoids, ascorbic acid and alkaloids. Has a pronounced anti-azotemic and anti-inflammatory effect."},
        {h:"Star anise", p:"Contains phenols, cineole and terpenes. Its diuretic properties are used for bladder conditions, in particular cystitis and oliguria."},
        {h:"Combined action", p:"Supports the kidneys' excretory function, helps remove nitrogenous metabolic products and reduces inflammation."}
      ],
      areas:[
        {h:"Kidneys", p:"Support of the kidneys' excretory function."},
        {h:"Bladder", p:"For cystitis and urination disorders."},
        {h:"Azotemia", p:"Anti-azotemic effect in metabolic disorders."},
        {h:"Inflammation", p:"Anti-inflammatory support of the urinary tract."}
      ],
      dosageText:"Take orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"100 ml",l:"bottle volume"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components, pregnancy, breastfeeding. Contains ethyl alcohol."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Nefrolon Bio",
      heroSub:"Una soluzione orale con estratti di lespedeza e anice stellato. Sostegno ai reni e al sistema urinario.",
      introTitle:"Cura dei reni",
      introText:"Nefrolon Bio è una soluzione orale a base di estratti di Lespedeza capitata e anice stellato. Ha un effetto anti-azotemico, antinfiammatorio e diuretico delicato e sostiene la funzione renale e delle vie urinarie.",
      infoCards:[
        {h:"Formato", p:"Soluzione orale, flacone da 100 ml."},
        {h:"Composizione", p:"Estratto di Lespedeza capitata — 750 mg<br>Estratto di semi di anice stellato (Illicium verum) — 5 mg"}
      ],
      props:[
        {h:"Estratto di lespedeza", p:"Contiene catechine (con azione simile alla vitamina P), flavonoidi, acido ascorbico e alcaloidi. Ha un marcato effetto anti-azotemico e antinfiammatorio."},
        {h:"Anice stellato", p:"Contiene fenoli, cineolo e terpeni. Le sue proprietà diuretiche sono usate per i disturbi della vescica, in particolare cistite e oliguria."},
        {h:"Azione combinata", p:"Sostiene la funzione escretoria dei reni, aiuta a eliminare i prodotti azotati del metabolismo e riduce l'infiammazione."}
      ],
      areas:[
        {h:"Reni", p:"Sostegno della funzione escretoria dei reni."},
        {h:"Vescica", p:"In caso di cistite e disturbi della minzione."},
        {h:"Azotemia", p:"Effetto anti-azotemico nei disturbi metabolici."},
        {h:"Infiammazione", p:"Sostegno antinfiammatorio delle vie urinarie."}
      ],
      dosageText:"Assumere per via orale. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"100 ml",l:"volume del flacone"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti, gravidanza, allattamento. Contiene alcol etilico."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Nefrolon Bio",
      heroSub:"Lespedeza va yulduzsimon anis ekstraktlari bilan ichimlik eritmasi. Buyraklar va siydik ajratish tizimini qo‘llab-quvvatlash.",
      introTitle:"Buyraklarga g‘amxo‘rlik",
      introText:"Nefrolon Bio — kallakli lespedeza va yulduzsimon anis ekstraktlari asosidagi ichimlik eritmasi. Azotemiyaga qarshi, yallig‘lanishga qarshi va yumshoq siydik haydovchi ta’sirga ega, buyraklar va siydik yo‘llari ishini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik eritmasi, flakonda 100 ml."},
        {h:"Tarkibi", p:"Kallakli lespedeza (Lespedeza capitata) ekstrakti — 750 mg<br>Yulduzsimon anis (Illicium verum) urug‘i ekstrakti — 5 mg"}
      ],
      props:[
        {h:"Lespedeza ekstrakti", p:"Katexinlar (P vitaminiga o‘xshash ta’sir qiladi), flavonoidlar, askorbin kislotasi va alkaloidlar saqlaydi. Aniq ifodalangan azotemiyaga qarshi va yallig‘lanishga qarshi ta’sirga ega."},
        {h:"Yulduzsimon anis", p:"Fenollar, sineol va terpenlar saqlaydi. Siydik haydovchi xususiyatlari qovuq kasalliklarida, xususan tsistit va oliguriyada qo‘llaniladi."},
        {h:"Birgalikdagi ta’sir", p:"Buyraklarning ajratuv funksiyasini qo‘llab-quvvatlaydi, azotli almashinuv mahsulotlarini chiqarishga va yallig‘lanishni kamaytirishga yordam beradi."}
      ],
      areas:[
        {h:"Buyraklar", p:"Buyraklarning ajratuv funksiyasini qo‘llab-quvvatlash."},
        {h:"Qovuq", p:"Tsistit va siyish buzilishlarida."},
        {h:"Azotemiya", p:"Almashinuv buzilishlarida azotemiyaga qarshi ta’sir."},
        {h:"Yallig‘lanish", p:"Siydik yo‘llarini yallig‘lanishga qarshi qo‘llab-quvvatlash."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"100 ml",l:"flakon hajmi"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik, homiladorlik, emizish. Etil spirti saqlaydi."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "spirtomaks": {
    cat: "solutions",
    img: "img/prod/spirtomaks.webp",
    ru: {
      name:"Спиртомакс",
      heroSub:"Раствор спирта этилового 96% для наружного применения. Антисептическое и обеззараживающее средство.",
      introTitle:"Спиртовой антисептик",
      introText:"Спиртомакс — раствор этилового спирта 96% для наружного применения. Антисептическое средство для обработки кожи и обеззараживания.",
      infoCards:[
        {h:"Форма выпуска", p:"Раствор для наружного применения, 20 / 50 / 1000 мл."},
        {h:"Состав на 1 мл", p:"Спирт этиловый 96% — 0,414 мл<br>Вода очищенная — до 1 мл"}
      ],
      props:[
        {h:"Этиловый спирт", p:"Обладает выраженным антисептическим и обеззараживающим действием в отношении бактерий и вирусов."},
        {h:"Обработка кожи", p:"Применяется для антисептической обработки кожи перед инъекциями и процедурами."},
        {h:"Подсушивание", p:"Подсушивает и обеззараживает поверхность кожи."}
      ],
      areas:[
        {h:"Антисептика", p:"Антисептическая обработка кожи."},
        {h:"Перед процедурами", p:"Обработка кожи перед инъекциями и манипуляциями."},
        {h:"Обеззараживание", p:"Обеззараживание поверхности кожи."},
        {h:"Гигиена", p:"Гигиеническая обработка."}
      ],
      dosageText:"Только для наружного применения. Наносить на кожу ватным тампоном. Точную информацию см. в инструкции.",
      dosageStats:[{n:"96%",l:"спирт этиловый"},{n:"нар.",l:"только наружно"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность. Только для наружного применения. Не для приёма внутрь."},
        {h:"Побочные действия", p:"Возможна сухость кожи. Избегать попадания на слизистые и в глаза."},
        {h:"Условия хранения", p:"Вдали от огня, в защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Отпуск", p:"Косметическое средство. Не является лекарством. Отпускается без рецепта."}
      ],
      legal:"Косметическое средство. Не является лекарственным средством. Только для наружного применения. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Spirtomaks",
      heroSub:"A 96% ethyl alcohol solution for external use. An antiseptic and disinfecting agent.",
      introTitle:"An alcohol antiseptic",
      introText:"Spirtomaks is a 96% ethyl alcohol solution for external use. An antiseptic for skin treatment and disinfection.",
      infoCards:[
        {h:"Form", p:"Solution for external use, 20 / 50 / 1000 ml."},
        {h:"Composition per 1 ml", p:"Ethyl alcohol 96% — 0.414 ml<br>Purified water — up to 1 ml"}
      ],
      props:[
        {h:"Ethyl alcohol", p:"Has a pronounced antiseptic and disinfecting effect against bacteria and viruses."},
        {h:"Skin treatment", p:"Used for antiseptic skin treatment before injections and procedures."},
        {h:"Drying", p:"Dries and disinfects the skin surface."}
      ],
      areas:[
        {h:"Antisepsis", p:"Antiseptic skin treatment."},
        {h:"Before procedures", p:"Skin treatment before injections and manipulations."},
        {h:"Disinfection", p:"Disinfection of the skin surface."},
        {h:"Hygiene", p:"Hygienic treatment."}
      ],
      dosageText:"For external use only. Apply to the skin with a cotton swab. See the leaflet for exact information.",
      dosageStats:[{n:"96%",l:"ethyl alcohol"},{n:"ext.",l:"external use only"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity. For external use only. Not for internal use."},
        {h:"Side effects", p:"Skin dryness is possible. Avoid contact with mucous membranes and eyes."},
        {h:"Storage", p:"Away from fire, in a place protected from light, at no more than 25 °C."},
        {h:"Dispensing", p:"A cosmetic product. Not a medicine. Available without prescription."}
      ],
      legal:"A cosmetic product. Not a medicine. For external use only. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Spirtomaks",
      heroSub:"Una soluzione di alcol etilico al 96% per uso esterno. Un agente antisettico e disinfettante.",
      introTitle:"Un antisettico alcolico",
      introText:"Spirtomaks è una soluzione di alcol etilico al 96% per uso esterno. Un antisettico per il trattamento e la disinfezione della pelle.",
      infoCards:[
        {h:"Formato", p:"Soluzione per uso esterno, 20 / 50 / 1000 ml."},
        {h:"Composizione per 1 ml", p:"Alcol etilico 96% — 0,414 ml<br>Acqua depurata — fino a 1 ml"}
      ],
      props:[
        {h:"Alcol etilico", p:"Ha un marcato effetto antisettico e disinfettante contro batteri e virus."},
        {h:"Trattamento cutaneo", p:"Usato per il trattamento antisettico della pelle prima di iniezioni e procedure."},
        {h:"Essiccazione", p:"Asciuga e disinfetta la superficie cutanea."}
      ],
      areas:[
        {h:"Antisepsi", p:"Trattamento antisettico della pelle."},
        {h:"Prima delle procedure", p:"Trattamento della pelle prima di iniezioni e manipolazioni."},
        {h:"Disinfezione", p:"Disinfezione della superficie cutanea."},
        {h:"Igiene", p:"Trattamento igienico."}
      ],
      dosageText:"Solo per uso esterno. Applicare sulla pelle con un batuffolo di cotone. Vedere il foglietto per informazioni esatte.",
      dosageStats:[{n:"96%",l:"alcol etilico"},{n:"est.",l:"solo uso esterno"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità. Solo per uso esterno. Non per uso interno."},
        {h:"Effetti collaterali", p:"È possibile secchezza cutanea. Evitare il contatto con mucose e occhi."},
        {h:"Conservazione", p:"Lontano dal fuoco, in luogo al riparo dalla luce, a non più di 25 °C."},
        {h:"Vendita", p:"Prodotto cosmetico. Non è un medicinale. Disponibile senza ricetta."}
      ],
      legal:"Prodotto cosmetico. Non è un medicinale. Solo per uso esterno. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Spirtomaks",
      heroSub:"Tashqi qo‘llash uchun 96% etil spirti eritmasi. Antiseptik va zararsizlantiruvchi vosita.",
      introTitle:"Spirtli antiseptik",
      introText:"Spirtomaks — tashqi qo‘llash uchun 96% etil spirti eritmasi. Terini ishlash va zararsizlantirish uchun antiseptik vosita.",
      infoCards:[
        {h:"Formati", p:"Tashqi qo‘llash uchun eritma, 20 / 50 / 1000 ml."},
        {h:"1 ml tarkibi", p:"Etil spirti 96% — 0,414 ml<br>Tozalangan suv — 1 ml gacha"}
      ],
      props:[
        {h:"Etil spirti", p:"Bakteriya va viruslarga qarshi aniq ifodalangan antiseptik va zararsizlantiruvchi ta’sirga ega."},
        {h:"Terini ishlash", p:"In’ektsiya va muolajalardan oldin terini antiseptik ishlash uchun qo‘llaniladi."},
        {h:"Quritish", p:"Teri yuzasini quritadi va zararsizlantiradi."}
      ],
      areas:[
        {h:"Antiseptika", p:"Terining antiseptik ishlovi."},
        {h:"Muolajalardan oldin", p:"In’ektsiya va manipulyatsiyalardan oldin terini ishlash."},
        {h:"Zararsizlantirish", p:"Teri yuzasini zararsizlantirish."},
        {h:"Gigiyena", p:"Gigiyenik ishlov."}
      ],
      dosageText:"Faqat tashqi qo‘llash uchun. Teriga paxta tampon bilan surting. Aniq ma’lumot uchun yo‘riqnomaga qarang.",
      dosageStats:[{n:"96%",l:"etil spirti"},{n:"tash.",l:"faqat tashqi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Yuqori sezuvchanlik. Faqat tashqi qo‘llash uchun. Ichishga mo‘ljallanmagan."},
        {h:"Nojo‘ya ta’sirlar", p:"Teri quruqligi bo‘lishi mumkin. Shilliq qavatlar va ko‘zga tegishidan saqlaning."},
        {h:"Saqlash sharoiti", p:"Olovdan uzoqda, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Sotuv", p:"Kosmetik vosita. Dori emas. Retseptsiz beriladi."}
      ],
      legal:"Kosmetik vosita. Dori vositasi emas. Faqat tashqi qo‘llash uchun. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "hyacoll": {
    cat: "powders",
    img: "img/prod/hyacoll.webp",
    doc: "downloads/hyacoll-ru.docx",
    ru: {
      name:"HyaColl 10000",
      heroSub:"Морской гидролизованный коллаген 10 000 мг в саше с гиалуроновой кислотой и витаминами. Красота изнутри: кожа, волосы, ногти, суставы.",
      introTitle:"Красота и здоровье изнутри",
      introText:"HyaColl — комплекс морского гидролизованного коллагена (10 000 мг) с гиалуроновой и альфа-липоевой кислотами, глутатионом, биотином, витаминами и микроэлементами. Поддерживает упругость и гидратацию кожи, здоровье волос, ногтей и суставов.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приёма внутрь в саше-пакетах по 10 г, №30."},
        {h:"Состав 1 саше (15 г)", p:"Коллаген — 10 000 мг · Гиалуроновая кислота — 100 мг · Альфа-липоевая кислота — 50 мг · Глутатион — 30 мг<br>D-Биотин — 2,5 мг · Селенит натрия — 120 мкг · Витамин C — 250 мг · Цинк цитрат — 88 мг<br>B3 — 16 мг · Витамин E — 6 мг · B5 — 6 мг · B6 — 1,4 мг · B12 — 2,5 мкг · Коэнзим Q10 — 30 мг"}
      ],
      props:[
        {h:"Морской коллаген", p:"Гидролизованный коллаген легко усваивается, способствует выработке собственного коллагена, поддерживает упругость кожи и здоровье суставов и соединительных тканей."},
        {h:"Гиалуроновая кислота", p:"Обеспечивает гидратацию кожи, удерживает влагу, поддерживает её эластичность и гладкость."},
        {h:"Антиоксиданты и витамины", p:"Альфа-липоевая кислота, глутатион, витамин C, селен и коэнзим Q10 обеспечивают антиоксидантную защиту; биотин и цинк укрепляют волосы и ногти; витамины группы B поддерживают иммунитет."}
      ],
      areas:[
        {h:"Кожа", p:"Упругость, гидратация и сияние кожи."},
        {h:"Волосы и ногти", p:"Здоровые, крепкие волосы и ногти."},
        {h:"Суставы", p:"Поддержка суставов и соединительных тканей."},
        {h:"Иммунитет", p:"Антиоксидантная защита и поддержка иммунитета."}
      ],
      dosageText:"Содержимое 1 саше (15 г) растворить в 200 мл тёплой воды и принимать внутрь 1 раз в день. Курс приёма — 1 месяц.",
      dosageStats:[{n:"1",l:"саше в день"},{n:"1",l:"месяц курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, беременность, кормление грудью."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"HyaColl 10000",
      heroSub:"Marine hydrolyzed collagen 10,000 mg in sachets with hyaluronic acid and vitamins. Beauty from within: skin, hair, nails, joints.",
      introTitle:"Beauty and health from within",
      introText:"HyaColl is a complex of marine hydrolyzed collagen (10,000 mg) with hyaluronic and alpha-lipoic acids, glutathione, biotin, vitamins and trace elements. It supports skin firmness and hydration and the health of hair, nails and joints.",
      infoCards:[
        {h:"Form", p:"Powder for oral use in 10 g sachets, No.30."},
        {h:"Composition per sachet (15 g)", p:"Collagen — 10,000 mg · Hyaluronic acid — 100 mg · Alpha-lipoic acid — 50 mg · Glutathione — 30 mg<br>D-Biotin — 2.5 mg · Sodium selenite — 120 mcg · Vitamin C — 250 mg · Zinc citrate — 88 mg<br>B3 — 16 mg · Vitamin E — 6 mg · B5 — 6 mg · B6 — 1.4 mg · B12 — 2.5 mcg · Coenzyme Q10 — 30 mg"}
      ],
      props:[
        {h:"Marine collagen", p:"Hydrolyzed collagen is easily absorbed, promotes the body's own collagen production and supports skin firmness and the health of joints and connective tissue."},
        {h:"Hyaluronic acid", p:"Provides skin hydration, retains moisture and maintains elasticity and smoothness."},
        {h:"Antioxidants & vitamins", p:"Alpha-lipoic acid, glutathione, vitamin C, selenium and coenzyme Q10 provide antioxidant protection; biotin and zinc strengthen hair and nails; B vitamins support immunity."}
      ],
      areas:[
        {h:"Skin", p:"Firmness, hydration and radiance of the skin."},
        {h:"Hair & nails", p:"Healthy, strong hair and nails."},
        {h:"Joints", p:"Support of joints and connective tissue."},
        {h:"Immunity", p:"Antioxidant protection and immune support."}
      ],
      dosageText:"Dissolve the contents of 1 sachet (15 g) in 200 ml of warm water and take orally once a day. Course: 1 month.",
      dosageStats:[{n:"1",l:"sachet a day"},{n:"1",l:"month course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, pregnancy, breastfeeding."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"HyaColl 10000",
      heroSub:"Collagene marino idrolizzato 10.000 mg in bustine con acido ialuronico e vitamine. Bellezza dall'interno: pelle, capelli, unghie, articolazioni.",
      introTitle:"Bellezza e salute dall'interno",
      introText:"HyaColl è un complesso di collagene marino idrolizzato (10.000 mg) con acido ialuronico e alfa-lipoico, glutatione, biotina, vitamine e oligoelementi. Sostiene la compattezza e l'idratazione della pelle e la salute di capelli, unghie e articolazioni.",
      infoCards:[
        {h:"Formato", p:"Polvere per uso orale in bustine da 10 g, n.30."},
        {h:"Composizione per bustina (15 g)", p:"Collagene — 10.000 mg · Acido ialuronico — 100 mg · Acido alfa-lipoico — 50 mg · Glutatione — 30 mg<br>D-Biotina — 2,5 mg · Selenito di sodio — 120 mcg · Vitamina C — 250 mg · Zinco citrato — 88 mg<br>B3 — 16 mg · Vitamina E — 6 mg · B5 — 6 mg · B6 — 1,4 mg · B12 — 2,5 mcg · Coenzima Q10 — 30 mg"}
      ],
      props:[
        {h:"Collagene marino", p:"Il collagene idrolizzato è facilmente assorbito, favorisce la produzione di collagene endogeno e sostiene la compattezza della pelle e la salute di articolazioni e tessuto connettivo."},
        {h:"Acido ialuronico", p:"Fornisce idratazione alla pelle, trattiene l'umidità e ne mantiene elasticità e levigatezza."},
        {h:"Antiossidanti e vitamine", p:"Acido alfa-lipoico, glutatione, vitamina C, selenio e coenzima Q10 forniscono protezione antiossidante; biotina e zinco rafforzano capelli e unghie; le vitamine del gruppo B sostengono l'immunità."}
      ],
      areas:[
        {h:"Pelle", p:"Compattezza, idratazione e luminosità della pelle."},
        {h:"Capelli e unghie", p:"Capelli e unghie sani e forti."},
        {h:"Articolazioni", p:"Sostegno di articolazioni e tessuto connettivo."},
        {h:"Immunità", p:"Protezione antiossidante e sostegno immunitario."}
      ],
      dosageText:"Sciogliere il contenuto di 1 bustina (15 g) in 200 ml di acqua tiepida e assumere per via orale una volta al giorno. Ciclo: 1 mese.",
      dosageStats:[{n:"1",l:"bustina al giorno"},{n:"1",l:"mese di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, gravidanza, allattamento."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"HyaColl 10000",
      heroSub:"Sashedagi dengiz gidrolizlangan kollageni 10 000 mg, gialuron kislotasi va vitaminlar bilan. Ichdan go‘zallik: teri, soch, tirnoq, bo‘g‘imlar.",
      introTitle:"Ichdan go‘zallik va salomatlik",
      introText:"HyaColl — gialuron va alfa-lipoy kislotalari, glutation, biotin, vitaminlar va mikroelementlar bilan dengiz gidrolizlangan kollageni (10 000 mg) majmuasi. Teri elastikligi va namligini, soch, tirnoq va bo‘g‘imlar salomatligini qo‘llab-quvvatlaydi.",
      infoCards:[
        {h:"Formati", p:"10 g li sashe-paketlarda ichimlik kukuni, №30."},
        {h:"1 sashe (15 g) tarkibi", p:"Kollagen — 10 000 mg · Gialuron kislotasi — 100 mg · Alfa-lipoy kislotasi — 50 mg · Glutation — 30 mg<br>D-biotin — 2,5 mg · Natriy selenit — 120 mkg · C vitamini — 250 mg · Rux sitrat — 88 mg<br>B3 — 16 mg · E vitamini — 6 mg · B5 — 6 mg · B6 — 1,4 mg · B12 — 2,5 mkg · Koenzim Q10 — 30 mg"}
      ],
      props:[
        {h:"Dengiz kollageni", p:"Gidrolizlangan kollagen oson so‘riladi, o‘z kollageni ishlab chiqarilishiga yordam beradi, teri elastikligi va bo‘g‘imlar hamda biriktiruvchi to‘qimalar salomatligini qo‘llab-quvvatlaydi."},
        {h:"Gialuron kislotasi", p:"Teri namligini ta’minlaydi, namlikni ushlab turadi, uning elastikligi va silliqligini qo‘llab-quvvatlaydi."},
        {h:"Antioksidantlar va vitaminlar", p:"Alfa-lipoy kislotasi, glutation, C vitamini, selen va koenzim Q10 antioksidant himoya beradi; biotin va rux soch va tirnoqni mustahkamlaydi; B guruhi vitaminlari immunitetni qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Teri", p:"Teri elastikligi, namligi va nur sochishi."},
        {h:"Soch va tirnoq", p:"Sog‘lom, mustahkam soch va tirnoqlar."},
        {h:"Bo‘g‘imlar", p:"Bo‘g‘imlar va biriktiruvchi to‘qimalarni qo‘llab-quvvatlash."},
        {h:"Immunitet", p:"Antioksidant himoya va immunitetni qo‘llab-quvvatlash."}
      ],
      dosageText:"1 sashe (15 g) tarkibini 200 ml iliq suvda eritib, kuniga 1 marta og‘iz orqali qabul qiling. Kurs — 1 oy.",
      dosageStats:[{n:"1",l:"sashe kuniga"},{n:"1",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, homiladorlik, emizish."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "defenza": {
    cat: "powders",
    img: "img/prod/defenza.webp",
    doc: "downloads/defenza-ru.docx",
    ru: {
      name:"Дефенза",
      heroSub:"Пастилки для поддержки иммунитета с витамином C, бузиной, цинком, D3, имбирём и эхинацеей. Защита, энергия и устойчивость организма.",
      introTitle:"Надёжная защита иммунитета",
      introText:"Дефенза — пастилки для поддержки иммунитета, энергии и устойчивости организма. Комплекс витамина C, экстрактов бузины, имбиря и эхинацеи с цинком и витамином D3 помогает защититься в сезон простуд.",
      infoCards:[
        {h:"Форма выпуска", p:"Пастилки, №20."},
        {h:"Состав активных компонентов", p:"Витамин C — 60 мг · Экстракт бузины — 60 мг<br>Цинк (цитрат) — 100 мг · Витамин D3 — 600 МЕ<br>Экстракт имбиря — 50 мг · Экстракт эхинацеи — 50 мг"}
      ],
      props:[
        {h:"Витамин C и цинк", p:"Поддерживают нормальную работу иммунной системы, обладают антиоксидантным действием, повышают сопротивляемость организма."},
        {h:"Бузина и эхинацея", p:"Растительные экстракты с иммуноподдерживающим действием, традиционно применяются в сезон простуд."},
        {h:"Имбирь и витамин D3", p:"Имбирь оказывает согревающее и тонизирующее действие; витамин D3 поддерживает иммунитет и общее самочувствие."}
      ],
      areas:[
        {h:"Иммунитет", p:"Поддержка иммунитета и сопротивляемости организма."},
        {h:"Энергия", p:"Повышение энергии и устойчивости к нагрузкам."},
        {h:"Сезон простуд", p:"Профилактическая поддержка в холодное время года."},
        {h:"Антиоксиданты", p:"Антиоксидантная защита организма."}
      ],
      dosageText:"Взрослым и детям старше 6 лет — по 1 пастилке в день. Точную продолжительность курса уточняйте в инструкции или у специалиста.",
      dosageStats:[{n:"1",l:"пастилка в день"},{n:"20",l:"пастилок в упаковке"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Defenza",
      heroSub:"Lozenges for immune support with vitamin C, elderberry, zinc, D3, ginger and echinacea. Protection, energy and body resilience.",
      introTitle:"Reliable immune protection",
      introText:"Defenza is a lozenge for supporting immunity, energy and body resilience. A complex of vitamin C, elderberry, ginger and echinacea extracts with zinc and vitamin D3 helps protect during the cold season.",
      infoCards:[
        {h:"Form", p:"Lozenges, No.20."},
        {h:"Active components", p:"Vitamin C — 60 mg · Elderberry extract — 60 mg<br>Zinc (citrate) — 100 mg · Vitamin D3 — 600 IU<br>Ginger extract — 50 mg · Echinacea extract — 50 mg"}
      ],
      props:[
        {h:"Vitamin C and zinc", p:"Support normal immune function, have an antioxidant effect and increase the body's resilience."},
        {h:"Elderberry and echinacea", p:"Plant extracts with immune-supporting action, traditionally used during the cold season."},
        {h:"Ginger and vitamin D3", p:"Ginger has a warming and toning effect; vitamin D3 supports immunity and overall wellbeing."}
      ],
      areas:[
        {h:"Immunity", p:"Support of immunity and body resilience."},
        {h:"Energy", p:"Increased energy and resilience to load."},
        {h:"Cold season", p:"Preventive support during the cold season."},
        {h:"Antioxidants", p:"Antioxidant protection of the body."}
      ],
      dosageText:"Adults and children over 6 — 1 lozenge a day. Check the exact course duration in the leaflet or with a specialist.",
      dosageStats:[{n:"1",l:"lozenge a day"},{n:"20",l:"lozenges per pack"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Defenza",
      heroSub:"Pastiglie per il sostegno immunitario con vitamina C, sambuco, zinco, D3, zenzero ed echinacea. Protezione, energia e resilienza.",
      introTitle:"Protezione immunitaria affidabile",
      introText:"Defenza è una pastiglia per sostenere immunità, energia e resilienza dell'organismo. Un complesso di vitamina C, estratti di sambuco, zenzero ed echinacea con zinco e vitamina D3 aiuta a proteggersi nella stagione fredda.",
      infoCards:[
        {h:"Formato", p:"Pastiglie, n.20."},
        {h:"Componenti attivi", p:"Vitamina C — 60 mg · Estratto di sambuco — 60 mg<br>Zinco (citrato) — 100 mg · Vitamina D3 — 600 UI<br>Estratto di zenzero — 50 mg · Estratto di echinacea — 50 mg"}
      ],
      props:[
        {h:"Vitamina C e zinco", p:"Sostengono la normale funzione immunitaria, hanno un effetto antiossidante e aumentano la resilienza dell'organismo."},
        {h:"Sambuco ed echinacea", p:"Estratti vegetali con azione di sostegno immunitario, tradizionalmente usati nella stagione fredda."},
        {h:"Zenzero e vitamina D3", p:"Lo zenzero ha un effetto riscaldante e tonificante; la vitamina D3 sostiene l'immunità e il benessere generale."}
      ],
      areas:[
        {h:"Immunità", p:"Sostegno dell'immunità e della resilienza dell'organismo."},
        {h:"Energia", p:"Maggiore energia e resilienza allo sforzo."},
        {h:"Stagione fredda", p:"Sostegno preventivo nella stagione fredda."},
        {h:"Antiossidanti", p:"Protezione antiossidante dell'organismo."}
      ],
      dosageText:"Adulti e bambini sopra i 6 anni — 1 pastiglia al giorno. Verificare la durata esatta del ciclo nel foglietto o con uno specialista.",
      dosageStats:[{n:"1",l:"pastiglia al giorno"},{n:"20",l:"pastiglie per confezione"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Defenza",
      heroSub:"C vitamini, buzina, rux, D3, zanjabil va exinatseya bilan immunitetni qo‘llab-quvvatlash pastilkalari. Himoya, energiya va organizm chidamliligi.",
      introTitle:"Immunitetning ishonchli himoyasi",
      introText:"Defenza — immunitet, energiya va organizm chidamliligini qo‘llab-quvvatlash pastilkalari. C vitamini, buzina, zanjabil va exinatseya ekstraktlari rux va D3 vitamini bilan sovuq mavsumda himoyalanishga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Pastilkalar, №20."},
        {h:"Faol komponentlar tarkibi", p:"C vitamini — 60 mg · Buzina ekstrakti — 60 mg<br>Rux (sitrat) — 100 mg · D3 vitamini — 600 XB<br>Zanjabil ekstrakti — 50 mg · Exinatseya ekstrakti — 50 mg"}
      ],
      props:[
        {h:"C vitamini va rux", p:"Immun tizimning normal ishlashini qo‘llab-quvvatlaydi, antioksidant ta’sirga ega, organizm chidamliligini oshiradi."},
        {h:"Buzina va exinatseya", p:"Immunitetni qo‘llab-quvvatlovchi ta’sirli o‘simlik ekstraktlari, an’anaviy ravishda sovuq mavsumda qo‘llaniladi."},
        {h:"Zanjabil va D3 vitamini", p:"Zanjabil isituvchi va tetiklashtiruvchi ta’sir ko‘rsatadi; D3 vitamini immunitet va umumiy o‘zni his qilishni qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Immunitet", p:"Immunitet va organizm chidamliligini qo‘llab-quvvatlash."},
        {h:"Energiya", p:"Energiya va yuklamalarga chidamlilikni oshirish."},
        {h:"Sovuq mavsum", p:"Sovuq mavsumda profilaktik qo‘llab-quvvatlash."},
        {h:"Antioksidantlar", p:"Organizmni antioksidant himoya qilish."}
      ],
      dosageText:"Kattalar va 6 yoshdan katta bolalarga — kuniga 1 pastilkadan. Aniq kurs davomiyligini yo‘riqnomadan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"1",l:"pastilka kuniga"},{n:"20",l:"pastilka qadoqda"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "mikrolife": {
    cat: "powders",
    img: "img/prod/mikrolife.webp",
    doc: "downloads/mikrolife-instrukciya.docx",
    ru: {
      name:"Микролайф",
      heroSub:"Порошок для приготовления суспензии, обогащённый цинком. Регуляция работы кишечника и поддержка пищеварения.",
      introTitle:"Поддержка работы кишечника",
      introText:"Микролайф — порошок для приготовления суспензии, обогащённый цинком. Способствует регуляции физиологии толстой кишки, размягчению стула и поддержанию нормального пищеварения.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приготовления суспензии, ампулы по 15 мл."},
        {h:"Особенность", p:"Обогащён цинком (Zn). Отпускается без рецепта."}
      ],
      props:[
        {h:"Цинк", p:"Участвует в обменных процессах, поддерживает работу кишечника, иммунитет и регенерацию слизистой."},
        {h:"Регуляция кишечника", p:"Способствует регуляции физиологии толстой кишки и размягчению стула в медицинских целях."},
        {h:"Поддержка ЖКТ", p:"Применяется при лечении печёночной комы или прекомы и для нормализации работы кишечника."}
      ],
      areas:[
        {h:"Кишечник", p:"Регуляция физиологии толстой кишки."},
        {h:"Стул", p:"Размягчение стула в медицинских целях."},
        {h:"Печень", p:"Поддержка при печёночной коме или прекоме."},
        {h:"Пищеварение", p:"Нормализация пищеварения."}
      ],
      dosageText:"Содержимое ампулы развести согласно инструкции и принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"15 мл",l:"ампула"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Mikrolife",
      heroSub:"A powder for an oral suspension, enriched with zinc. Regulation of bowel function and digestive support.",
      introTitle:"Support for bowel function",
      introText:"Mikrolife is a powder for an oral suspension, enriched with zinc. It helps regulate large-intestine physiology, soften stool and maintain normal digestion.",
      infoCards:[
        {h:"Form", p:"Powder for an oral suspension, 15 ml ampoules."},
        {h:"Feature", p:"Enriched with zinc (Zn). Available without prescription."}
      ],
      props:[
        {h:"Zinc", p:"Participates in metabolic processes, supports bowel function, immunity and mucosal regeneration."},
        {h:"Bowel regulation", p:"Helps regulate large-intestine physiology and soften stool for medical purposes."},
        {h:"GI support", p:"Used in the treatment of hepatic coma or precoma and to normalize bowel function."}
      ],
      areas:[
        {h:"Intestine", p:"Regulation of large-intestine physiology."},
        {h:"Stool", p:"Stool softening for medical purposes."},
        {h:"Liver", p:"Support in hepatic coma or precoma."},
        {h:"Digestion", p:"Normalization of digestion."}
      ],
      dosageText:"Dissolve the ampoule contents as directed and take orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"15 ml",l:"ampoule"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"At no more than 25 °C, out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Mikrolife",
      heroSub:"Una polvere per sospensione orale, arricchita con zinco. Regolazione della funzione intestinale e sostegno digestivo.",
      introTitle:"Sostegno alla funzione intestinale",
      introText:"Mikrolife è una polvere per sospensione orale, arricchita con zinco. Aiuta a regolare la fisiologia dell'intestino crasso, ad ammorbidire le feci e a mantenere una normale digestione.",
      infoCards:[
        {h:"Formato", p:"Polvere per sospensione orale, fiale da 15 ml."},
        {h:"Caratteristica", p:"Arricchito con zinco (Zn). Disponibile senza ricetta."}
      ],
      props:[
        {h:"Zinco", p:"Partecipa ai processi metabolici, sostiene la funzione intestinale, l'immunità e la rigenerazione della mucosa."},
        {h:"Regolazione intestinale", p:"Aiuta a regolare la fisiologia dell'intestino crasso e ad ammorbidire le feci a fini medici."},
        {h:"Sostegno gastrointestinale", p:"Usato nel trattamento del coma o precoma epatico e per normalizzare la funzione intestinale."}
      ],
      areas:[
        {h:"Intestino", p:"Regolazione della fisiologia dell'intestino crasso."},
        {h:"Feci", p:"Ammorbidimento delle feci a fini medici."},
        {h:"Fegato", p:"Sostegno in caso di coma o precoma epatico."},
        {h:"Digestione", p:"Normalizzazione della digestione."}
      ],
      dosageText:"Sciogliere il contenuto della fiala secondo le indicazioni e assumere per via orale. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"15 ml",l:"fiala"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"A non più di 25 °C, fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Mikrolife",
      heroSub:"Rux bilan boyitilgan suspenziya tayyorlash uchun kukun. Ichak ishini tartibga solish va hazmni qo‘llab-quvvatlash.",
      introTitle:"Ichak ishini qo‘llab-quvvatlash",
      introText:"Mikrolife — rux bilan boyitilgan suspenziya tayyorlash uchun kukun. Yo‘g‘on ichak fiziologiyasini tartibga solishga, najasni yumshatishga va normal hazmni saqlashga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Suspenziya tayyorlash uchun kukun, 15 ml li ampulalar."},
        {h:"Xususiyati", p:"Rux (Zn) bilan boyitilgan. Retseptsiz beriladi."}
      ],
      props:[
        {h:"Rux", p:"Almashinuv jarayonlarida ishtirok etadi, ichak ishini, immunitet va shilliq qavat regeneratsiyasini qo‘llab-quvvatlaydi."},
        {h:"Ichakni tartibga solish", p:"Yo‘g‘on ichak fiziologiyasini tartibga solishga va tibbiy maqsadlarda najasni yumshatishga yordam beradi."},
        {h:"OIT qo‘llab-quvvatlash", p:"Jigar komasi yoki prekomasini davolashda va ichak ishini me’yorlashtirishda qo‘llaniladi."}
      ],
      areas:[
        {h:"Ichak", p:"Yo‘g‘on ichak fiziologiyasini tartibga solish."},
        {h:"Najas", p:"Tibbiy maqsadlarda najasni yumshatish."},
        {h:"Jigar", p:"Jigar komasi yoki prekomasida qo‘llab-quvvatlash."},
        {h:"Hazm", p:"Hazmni me’yorlashtirish."}
      ],
      dosageText:"Ampula tarkibini yo‘riqnomaga muvofiq eritib, og‘iz orqali qabul qiling. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"15 ml",l:"ampula"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, bolalar yeta olmaydigan joyda."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "begamovit-neo": {
    cat: "powders",
    img: "img/prod/begamovit-neo.webp",
    doc: "downloads/begamovit-neo-instrukciya.docx",
    ru: {
      name:"Бегамовит Нео",
      heroSub:"Гель для приёма внутрь с β-глюканом, инулином, витамином C и цинком. Поддержка иммунитета и микрофлоры кишечника.",
      introTitle:"Иммунитет и здоровье кишечника",
      introText:"Бегамовит Нео — гель в саше на основе бета-глюкана и инулина с витамином C, цинком и селеном. Активизирует иммунную защиту, поддерживает микрофлору кишечника, помогает при ОРВИ и гриппе.",
      infoCards:[
        {h:"Форма выпуска", p:"Гель для приёма внутрь, стики по 5 мл, №30."},
        {h:"Состав на 5 мл", p:"β-глюкан — 100 мг · Инулин — 150 мг<br>Витамин C — 40 мг · Цинк лактат — 5 мг · Селен — 30 мкг"}
      ],
      props:[
        {h:"β-глюкан", p:"Природный полисахарид, активизирует клетки иммунной системы (макрофаги, NK-клетки), повышает сопротивляемость организма к инфекциям."},
        {h:"Инулин", p:"Натуральный пребиотик, поддерживает рост полезной кишечной микрофлоры и нормализует пищеварение. Косвенно поддерживает иммунитет через кишечник."},
        {h:"Витамин C, цинк, селен", p:"Антиоксидантный комплекс, поддерживает нормальную работу иммунной системы и защиту клеток от окислительного стресса."}
      ],
      areas:[
        {h:"ОРВИ и грипп", p:"Поддержка при ОРВИ и гриппе."},
        {h:"Иммунитет", p:"Активизация иммунной защиты организма."},
        {h:"Микрофлора", p:"Поддержка микрофлоры кишечника."},
        {h:"Пищеварение", p:"Нормализация пищеварения."}
      ],
      dosageText:"Содержимое 1 стика (5 мл) принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"1",l:"стик (5 мл) в день"},{n:"30",l:"саше в упаковке"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, беременность, кормление грудью."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Не превышать рекомендуемые дозы. Произведено по заказу «Hvara» SRL, Milano, Italy. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Begamovit Neo",
      heroSub:"An oral gel with β-glucan, inulin, vitamin C and zinc. Support for immunity and gut microflora.",
      introTitle:"Immunity and gut health",
      introText:"Begamovit Neo is a gel in sachets based on beta-glucan and inulin with vitamin C, zinc and selenium. It activates immune defense, supports gut microflora and helps with acute respiratory infections and flu.",
      infoCards:[
        {h:"Form", p:"Oral gel, 5 ml sticks, No.30."},
        {h:"Composition per 5 ml", p:"β-glucan — 100 mg · Inulin — 150 mg<br>Vitamin C — 40 mg · Zinc lactate — 5 mg · Selenium — 30 mcg"}
      ],
      props:[
        {h:"β-glucan", p:"A natural polysaccharide that activates immune cells (macrophages, NK cells) and increases the body's resistance to infections."},
        {h:"Inulin", p:"A natural prebiotic that supports the growth of beneficial gut microflora and normalizes digestion. Indirectly supports immunity through the gut."},
        {h:"Vitamin C, zinc, selenium", p:"An antioxidant complex that supports normal immune function and protects cells from oxidative stress."}
      ],
      areas:[
        {h:"ARI & flu", p:"Support for acute respiratory infections and flu."},
        {h:"Immunity", p:"Activation of the body's immune defense."},
        {h:"Microflora", p:"Support of gut microflora."},
        {h:"Digestion", p:"Normalization of digestion."}
      ],
      dosageText:"Take the contents of 1 stick (5 ml) orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"1",l:"stick (5 ml) a day"},{n:"30",l:"sachets per pack"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, pregnancy, breastfeeding."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Do not exceed the recommended doses. Made to order for Hvara SRL, Milan, Italy. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Begamovit Neo",
      heroSub:"Un gel orale con β-glucano, inulina, vitamina C e zinco. Sostegno all'immunità e alla microflora intestinale.",
      introTitle:"Immunità e salute intestinale",
      introText:"Begamovit Neo è un gel in bustine a base di beta-glucano e inulina con vitamina C, zinco e selenio. Attiva le difese immunitarie, sostiene la microflora intestinale e aiuta in caso di infezioni respiratorie e influenza.",
      infoCards:[
        {h:"Formato", p:"Gel orale, stick da 5 ml, n.30."},
        {h:"Composizione per 5 ml", p:"β-glucano — 100 mg · Inulina — 150 mg<br>Vitamina C — 40 mg · Lattato di zinco — 5 mg · Selenio — 30 mcg"}
      ],
      props:[
        {h:"β-glucano", p:"Un polisaccaride naturale che attiva le cellule immunitarie (macrofagi, cellule NK) e aumenta la resistenza dell'organismo alle infezioni."},
        {h:"Inulina", p:"Un prebiotico naturale che sostiene la crescita della microflora intestinale benefica e normalizza la digestione. Sostiene indirettamente l'immunità attraverso l'intestino."},
        {h:"Vitamina C, zinco, selenio", p:"Un complesso antiossidante che sostiene la normale funzione immunitaria e protegge le cellule dallo stress ossidativo."}
      ],
      areas:[
        {h:"Infezioni e influenza", p:"Sostegno in caso di infezioni respiratorie e influenza."},
        {h:"Immunità", p:"Attivazione delle difese immunitarie dell'organismo."},
        {h:"Microflora", p:"Sostegno della microflora intestinale."},
        {h:"Digestione", p:"Normalizzazione della digestione."}
      ],
      dosageText:"Assumere per via orale il contenuto di 1 stick (5 ml). Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"1",l:"stick (5 ml) al giorno"},{n:"30",l:"bustine per confezione"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, gravidanza, allattamento."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Non superare le dosi raccomandate. Prodotto su ordine per Hvara SRL, Milano, Italia. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Begamovit Neo",
      heroSub:"β-glyukan, inulin, C vitamini va rux bilan ichimlik geli. Immunitet va ichak mikroflorasini qo‘llab-quvvatlash.",
      introTitle:"Immunitet va ichak salomatligi",
      introText:"Begamovit Neo — C vitamini, rux va selen bilan beta-glyukan va inulin asosidagi sashedagi gel. Immun himoyani faollashtiradi, ichak mikroflorasini qo‘llab-quvvatlaydi, O‘RVI va grippda yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik geli, 5 ml li stiklar, №30."},
        {h:"5 ml tarkibi", p:"β-glyukan — 100 mg · Inulin — 150 mg<br>C vitamini — 40 mg · Rux laktati — 5 mg · Selen — 30 mkg"}
      ],
      props:[
        {h:"β-glyukan", p:"Tabiiy polisaxarid, immun tizim hujayralarini (makrofaglar, NK-hujayralar) faollashtiradi, organizmning infeksiyalarga chidamliligini oshiradi."},
        {h:"Inulin", p:"Tabiiy prebiotik, foydali ichak mikroflorasi o‘sishini qo‘llab-quvvatlaydi va hazmni me’yorlashtiradi. Ichak orqali immunitetni bilvosita qo‘llab-quvvatlaydi."},
        {h:"C vitamini, rux, selen", p:"Antioksidant majmua, immun tizimning normal ishlashini qo‘llab-quvvatlaydi va hujayralarni oksidlovchi stressdan himoya qiladi."}
      ],
      areas:[
        {h:"O‘RVI va gripp", p:"O‘RVI va grippda qo‘llab-quvvatlash."},
        {h:"Immunitet", p:"Organizmning immun himoyasini faollashtirish."},
        {h:"Mikroflora", p:"Ichak mikroflorasini qo‘llab-quvvatlash."},
        {h:"Hazm", p:"Hazmni me’yorlashtirish."}
      ],
      dosageText:"1 stik (5 ml) tarkibini og‘iz orqali qabul qiling. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"1",l:"stik (5 ml) kuniga"},{n:"30",l:"sashe qadoqda"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, homiladorlik, emizish."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Tavsiya etilgan dozalardan oshirmang. Hvara SRL, Milano, Italiya buyurtmasi bo‘yicha ishlab chiqarilgan. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "biovell": {
    cat: "powders",
    img: "img/prod/biovell.webp",
    doc: "downloads/biovell-ru.docx",
    ru: {
      name:"Биовелл",
      heroSub:"Мультиштаммовый синбиотик (пробиотик + пребиотик) в саше. Восстановление микробиоты кишечника, в том числе при приёме антибиотиков.",
      introTitle:"Восстановление микробиоты кишечника",
      introText:"Биовелл — современный мультиштаммовый синбиотик с клинически доказанными пробиотическими штаммами и пребиотическими компонентами. Трёхуровневая защита микробиоты: пробиотики, пребиотики и барьерное действие.",
      infoCards:[
        {h:"Форма выпуска", p:"Саше, №20. Итого 12,5 × 10⁹ КОЕ — 4 штамма + 3 типа пребиотиков."},
        {h:"Состав", p:"S. boulardii CNCM I-745 — 2,5 × 10⁹ · LGG — 5 × 10⁹<br>L. plantarum — 3 × 10⁹ · B. lactis — 2 × 10⁹ КОЕ<br>FOS/GOS — 300 мг · MOS — 200 мг"}
      ],
      props:[
        {h:"Уровень 1 — пробиотики", p:"4 штамма с доказанной эффективностью: S. boulardii (при антибиотик-ассоциированной диарее и C. difficile), Lactobacillus rhamnosus GG, Bifidobacterium lactis и Lactobacillus plantarum — восстанавливают баланс микрофлоры и укрепляют иммунный барьер кишечника."},
        {h:"Уровень 2 — пребиотики", p:"FOS/GOS питают полезные лакто- и бифидобактерии; MOS (маннаноолигосахариды) связывают патогены (E. coli, Salmonella) и выводят их, защищая эпителий кишечника."},
        {h:"Уровень 3 — барьерный", p:"Синергия пробиотиков и пребиотиков восстанавливает барьерную функцию кишечника, снижает «лекарственную» проницаемость, нормализует продукцию секреторного IgA."}
      ],
      areas:[
        {h:"После антибиотиков", p:"Профилактика антибиотик-ассоциированной диареи, приём через 2–3 часа после антибиотика."},
        {h:"Микробиота", p:"Восстановление и баланс микробиоты кишечника."},
        {h:"Пищеварение", p:"Нормализация стула, профилактика запоров, уменьшение вздутия."},
        {h:"Иммунитет", p:"Укрепление местного иммунного барьера кишечника."}
      ],
      dosageText:"Содержимое саше растворить в 50–100 мл воды комнатной температуры (не горячее 37 °C — горячая вода убивает пробиотики). Принимать до или после еды. При приёме антибиотиков — через 2–3 часа после антибиотика. Безопасно при беременности и лактации (с 1 триместра).",
      dosageStats:[{n:"1",l:"саше на приём"},{n:"12,5×10⁹",l:"КОЕ, 4 штамма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, дети до 1 года (без назначения врача)."},
        {h:"Беременность и лактация", p:"Безопасно: штаммы изучены в РКИ у беременных и кормящих, не проникают в системный кровоток."},
        {h:"Условия хранения", p:"При температуре не выше 25 °C, в сухом месте, защищать от прямого солнечного света. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца (КОЕ гарантируется в течение срока годности). Отпускается без рецепта. БАД."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется проконсультироваться с врачом. Произведено по заказу Welfar Central İlaç A.Ş., İstanbul, Türkiye. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Biovell",
      heroSub:"A multi-strain synbiotic (probiotic + prebiotic) in sachets. Restoration of gut microbiota, including during antibiotic use.",
      introTitle:"Restoration of gut microbiota",
      introText:"Biovell is a modern multi-strain synbiotic with clinically proven probiotic strains and prebiotic components. A three-level microbiota defense: probiotics, prebiotics and a barrier effect.",
      infoCards:[
        {h:"Form", p:"Sachets, No.20. Total 12.5 × 10⁹ CFU — 4 strains + 3 prebiotic types."},
        {h:"Composition", p:"S. boulardii CNCM I-745 — 2.5 × 10⁹ · LGG — 5 × 10⁹<br>L. plantarum — 3 × 10⁹ · B. lactis — 2 × 10⁹ CFU<br>FOS/GOS — 300 mg · MOS — 200 mg"}
      ],
      props:[
        {h:"Level 1 — probiotics", p:"4 strains with proven efficacy: S. boulardii (for antibiotic-associated diarrhea and C. difficile), Lactobacillus rhamnosus GG, Bifidobacterium lactis and Lactobacillus plantarum — restore microflora balance and strengthen the gut immune barrier."},
        {h:"Level 2 — prebiotics", p:"FOS/GOS feed beneficial lacto- and bifidobacteria; MOS (mannan-oligosaccharides) bind pathogens (E. coli, Salmonella) and remove them, protecting the gut epithelium."},
        {h:"Level 3 — barrier", p:"The synergy of probiotics and prebiotics restores the gut barrier function, reduces drug-induced permeability and normalizes secretory IgA production."}
      ],
      areas:[
        {h:"After antibiotics", p:"Prevention of antibiotic-associated diarrhea; take 2–3 hours after the antibiotic."},
        {h:"Microbiota", p:"Restoration and balance of gut microbiota."},
        {h:"Digestion", p:"Stool normalization, constipation prevention, reduced bloating."},
        {h:"Immunity", p:"Strengthening the gut local immune barrier."}
      ],
      dosageText:"Dissolve the sachet contents in 50–100 ml of room-temperature water (no hotter than 37 °C — hot water kills probiotics). Take before or after meals. With antibiotics — 2–3 hours after the antibiotic. Safe during pregnancy and lactation (from the 1st trimester).",
      dosageStats:[{n:"1",l:"sachet per intake"},{n:"12.5×10⁹",l:"CFU, 4 strains"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, children under 1 year (without a doctor's prescription)."},
        {h:"Pregnancy & lactation", p:"Safe: the strains have been studied in RCTs in pregnant and breastfeeding women and do not enter the systemic bloodstream."},
        {h:"Storage", p:"At no more than 25 °C, in a dry place, protected from direct sunlight. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months (CFU guaranteed throughout shelf life). Available without prescription. Dietary supplement."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a doctor is recommended before use. Made to order for Welfar Central İlaç A.Ş., Istanbul, Türkiye. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Biovell",
      heroSub:"Un sinbiotico multiceppo (probiotico + prebiotico) in bustine. Ripristino della microbiota intestinale, anche durante l'uso di antibiotici.",
      introTitle:"Ripristino della microbiota intestinale",
      introText:"Biovell è un moderno sinbiotico multiceppo con ceppi probiotici clinicamente provati e componenti prebiotici. Una difesa della microbiota a tre livelli: probiotici, prebiotici ed effetto barriera.",
      infoCards:[
        {h:"Formato", p:"Bustine, n.20. Totale 12,5 × 10⁹ UFC — 4 ceppi + 3 tipi di prebiotici."},
        {h:"Composizione", p:"S. boulardii CNCM I-745 — 2,5 × 10⁹ · LGG — 5 × 10⁹<br>L. plantarum — 3 × 10⁹ · B. lactis — 2 × 10⁹ UFC<br>FOS/GOS — 300 mg · MOS — 200 mg"}
      ],
      props:[
        {h:"Livello 1 — probiotici", p:"4 ceppi con efficacia provata: S. boulardii (per la diarrea associata agli antibiotici e C. difficile), Lactobacillus rhamnosus GG, Bifidobacterium lactis e Lactobacillus plantarum — ripristinano l'equilibrio della microflora e rafforzano la barriera immunitaria intestinale."},
        {h:"Livello 2 — prebiotici", p:"FOS/GOS nutrono i lacto- e bifidobatteri benefici; i MOS (mannano-oligosaccaridi) legano i patogeni (E. coli, Salmonella) e li eliminano, proteggendo l'epitelio intestinale."},
        {h:"Livello 3 — barriera", p:"La sinergia di probiotici e prebiotici ripristina la funzione barriera intestinale, riduce la permeabilità indotta dai farmaci e normalizza la produzione di IgA secretoria."}
      ],
      areas:[
        {h:"Dopo gli antibiotici", p:"Prevenzione della diarrea associata agli antibiotici; assumere 2–3 ore dopo l'antibiotico."},
        {h:"Microbiota", p:"Ripristino ed equilibrio della microbiota intestinale."},
        {h:"Digestione", p:"Normalizzazione delle feci, prevenzione della stitichezza, riduzione del gonfiore."},
        {h:"Immunità", p:"Rafforzamento della barriera immunitaria locale intestinale."}
      ],
      dosageText:"Sciogliere il contenuto della bustina in 50–100 ml di acqua a temperatura ambiente (non più calda di 37 °C — l'acqua calda uccide i probiotici). Assumere prima o dopo i pasti. Con gli antibiotici — 2–3 ore dopo l'antibiotico. Sicuro in gravidanza e allattamento (dal 1° trimestre).",
      dosageStats:[{n:"1",l:"bustina per assunzione"},{n:"12,5×10⁹",l:"UFC, 4 ceppi"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, bambini sotto 1 anno (senza prescrizione medica)."},
        {h:"Gravidanza e allattamento", p:"Sicuro: i ceppi sono stati studiati in RCT su donne in gravidanza e allattamento e non entrano nel circolo sistemico."},
        {h:"Conservazione", p:"A non più di 25 °C, in luogo asciutto, al riparo dalla luce solare diretta. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi (UFC garantite per tutta la durata). Disponibile senza ricetta. Integratore alimentare."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare un medico prima dell'uso. Prodotto su ordine per Welfar Central İlaç A.Ş., Istanbul, Türkiye. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Biovell",
      heroSub:"Sashedagi ko‘p shtammli sinbiotik (probiotik + prebiotik). Ichak mikrobiotasini tiklash, shu jumladan antibiotiklar qabulida.",
      introTitle:"Ichak mikrobiotasini tiklash",
      introText:"Biovell — klinik isbotlangan probiotik shtammlar va prebiotik komponentlar bilan zamonaviy ko‘p shtammli sinbiotik. Mikrobiotani uch bosqichli himoya qilish: probiotiklar, prebiotiklar va bar’er ta’siri.",
      infoCards:[
        {h:"Formati", p:"Sashe, №20. Jami 12,5 × 10⁹ KHB — 4 shtamm + 3 tur prebiotik."},
        {h:"Tarkibi", p:"S. boulardii CNCM I-745 — 2,5 × 10⁹ · LGG — 5 × 10⁹<br>L. plantarum — 3 × 10⁹ · B. lactis — 2 × 10⁹ KHB<br>FOS/GOS — 300 mg · MOS — 200 mg"}
      ],
      props:[
        {h:"1-daraja — probiotiklar", p:"Isbotlangan samaradorlikka ega 4 shtamm: S. boulardii (antibiotik bilan bog‘liq diareya va C. difficileda), Lactobacillus rhamnosus GG, Bifidobacterium lactis va Lactobacillus plantarum — mikroflora muvozanatini tiklaydi va ichakning immun bar’erini mustahkamlaydi."},
        {h:"2-daraja — prebiotiklar", p:"FOS/GOS foydali lakto- va bifidobakteriyalarni oziqlantiradi; MOS (mannan-oligosaxaridlar) patogenlarni (E. coli, Salmonella) bog‘laydi va chiqaradi, ichak epiteliysini himoya qiladi."},
        {h:"3-daraja — bar’er", p:"Probiotik va prebiotiklar sinergiyasi ichak bar’er funksiyasini tiklaydi, «dori» o‘tkazuvchanligini kamaytiradi, sekretor IgA ishlab chiqarilishini me’yorlashtiradi."}
      ],
      areas:[
        {h:"Antibiotiklardan keyin", p:"Antibiotik bilan bog‘liq diareya profilaktikasi, antibiotikdan 2–3 soat keyin qabul."},
        {h:"Mikrobiota", p:"Ichak mikrobiotasini tiklash va muvozanatlash."},
        {h:"Hazm", p:"Najasni me’yorlashtirish, qabziyat profilaktikasi, dam bo‘lishni kamaytirish."},
        {h:"Immunitet", p:"Ichakning mahalliy immun bar’erini mustahkamlash."}
      ],
      dosageText:"Sashe tarkibini xona haroratidagi 50–100 ml suvda eriting (37 °C dan issiq emas — issiq suv probiotiklarni o‘ldiradi). Ovqatdan oldin yoki keyin qabul qiling. Antibiotiklar qabulida — antibiotikdan 2–3 soat keyin. Homiladorlik va emizish davrida xavfsiz (1-trimestrdan).",
      dosageStats:[{n:"1",l:"sashe qabulga"},{n:"12,5×10⁹",l:"KHB, 4 shtamm"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, 1 yoshgacha bolalar (shifokor tayinlashisiz)."},
        {h:"Homiladorlik va emizish", p:"Xavfsiz: shtammlar homilador va emizuvchi ayollarda RNTda o‘rganilgan, tizimli qon oqimiga o‘tmaydi."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, quruq joyda, to‘g‘ridan-to‘g‘ri quyosh nuridan himoyalang. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy (KHB yaroqlilik muddati davomida kafolatlanadi). Retseptsiz beriladi. BAD."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin shifokor bilan maslahatlashish tavsiya etiladi. Welfar Central İlaç A.Ş., İstanbul, Turkiya buyurtmasi bo‘yicha ishlab chiqarilgan. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "evilife": {
    cat: "capsules",
    img: "img/prod/evilife.webp",
    doc: "downloads/evilife-ru.docx",
    ru: {
      name:"Е-Вилайф",
      heroSub:"Капсулы витамина E (альфа-токоферол 400 мг). Антиоксидант для сосудов, иммунитета, репродуктивной системы и мышц.",
      introTitle:"Сила витамина E",
      introText:"Е-Вилайф — источник витамина E (альфа-токоферола ацетат 400 мг). Мощный антиоксидант: поддерживает сосуды, иммунитет, репродуктивную и нервную системы, защищает клетки от окислительного стресса.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы для приёма внутрь по 0,5 г, №30."},
        {h:"Состав 1 капсулы", p:"Альфа-токоферола ацетат (витамин E) — 400 мг<br>Вспомогательное вещество: масло подсолнечное."}
      ],
      props:[
        {h:"Сосуды и сердце", p:"Влияет на свёртываемость крови, помогая предупреждать образование тромбов, улучшает эластичность крупных и мелких сосудов, замедляет образование холестериновых бляшек."},
        {h:"Репродуктивная система", p:"Жизненно необходим для нормальной работы репродуктивной системы: улучшает выработку сперматозоидов у мужчин, у женщин участвует в регуляции менструального цикла и смягчает симптомы климакса."},
        {h:"Мышцы, нервы, иммунитет", p:"Регулирует энергетический обмен в мышцах (накопление гликогена), улучшает работу нервной системы, укрепляет иммунитет, способствует усвоению витамина D и защищает витамин A от разрушения."}
      ],
      areas:[
        {h:"Гиповитаминоз E", p:"Повышенная потребность в витамине E, в т.ч. у детей при недостаточном поступлении с пищей."},
        {h:"Мышцы и нервы", p:"Мышечная дистрофия, миастения, миопатия, астенический и неврастенический синдром."},
        {h:"Кожа", p:"Заболевания кожи (дерматозы)."},
        {h:"Антиоксидант", p:"Антиоксидантная защита организма."}
      ],
      dosageText:"Принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"400 мг",l:"витамин E в капсуле"},{n:"30",l:"капсул в упаковке"}],
      important:[
        {h:"Противопоказания", p:"Повышенная чувствительность к компонентам."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Произведено по заказу «HVARA» SRL, Piazza IV Novembre 4, 20124 Milano, Italy. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"E-Vilife",
      heroSub:"Vitamin E capsules (alpha-tocopherol 400 mg). An antioxidant for blood vessels, immunity, the reproductive system and muscles.",
      introTitle:"The power of vitamin E",
      introText:"E-Vilife is a source of vitamin E (alpha-tocopherol acetate 400 mg). A powerful antioxidant: it supports blood vessels, immunity, the reproductive and nervous systems and protects cells from oxidative stress.",
      infoCards:[
        {h:"Form", p:"Capsules for oral use, 0.5 g, No.30."},
        {h:"Composition per capsule", p:"Alpha-tocopherol acetate (vitamin E) — 400 mg<br>Excipient: sunflower oil."}
      ],
      props:[
        {h:"Vessels and heart", p:"Affects blood clotting, helping to prevent thrombosis, improves the elasticity of large and small vessels and slows cholesterol plaque formation."},
        {h:"Reproductive system", p:"Vital for normal reproductive function: improves sperm production in men, and in women participates in regulating the menstrual cycle and eases menopausal symptoms."},
        {h:"Muscles, nerves, immunity", p:"Regulates energy metabolism in muscles (glycogen storage), improves nervous system function, strengthens immunity, aids vitamin D absorption and protects vitamin A from breakdown."}
      ],
      areas:[
        {h:"Vitamin E deficiency", p:"Increased need for vitamin E, including in children with insufficient dietary intake."},
        {h:"Muscles and nerves", p:"Muscular dystrophy, myasthenia, myopathy, asthenic and neurasthenic syndrome."},
        {h:"Skin", p:"Skin conditions (dermatoses)."},
        {h:"Antioxidant", p:"Antioxidant protection of the body."}
      ],
      dosageText:"Take orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"400 mg",l:"vitamin E per capsule"},{n:"30",l:"capsules per pack"}],
      important:[
        {h:"Contraindications", p:"Hypersensitivity to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Made to order for HVARA SRL, Piazza IV Novembre 4, 20124 Milan, Italy. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"E-Vilife",
      heroSub:"Capsule di vitamina E (alfa-tocoferolo 400 mg). Un antiossidante per vasi sanguigni, immunità, sistema riproduttivo e muscoli.",
      introTitle:"La forza della vitamina E",
      introText:"E-Vilife è una fonte di vitamina E (alfa-tocoferolo acetato 400 mg). Un potente antiossidante: sostiene vasi sanguigni, immunità, sistema riproduttivo e nervoso e protegge le cellule dallo stress ossidativo.",
      infoCards:[
        {h:"Formato", p:"Capsule per uso orale, 0,5 g, n.30."},
        {h:"Composizione per capsula", p:"Alfa-tocoferolo acetato (vitamina E) — 400 mg<br>Eccipiente: olio di girasole."}
      ],
      props:[
        {h:"Vasi e cuore", p:"Influisce sulla coagulazione del sangue, aiutando a prevenire la trombosi, migliora l'elasticità dei vasi grandi e piccoli e rallenta la formazione di placche di colesterolo."},
        {h:"Sistema riproduttivo", p:"Essenziale per la normale funzione riproduttiva: migliora la produzione di spermatozoi negli uomini e nelle donne partecipa alla regolazione del ciclo mestruale e allevia i sintomi della menopausa."},
        {h:"Muscoli, nervi, immunità", p:"Regola il metabolismo energetico nei muscoli (deposito di glicogeno), migliora la funzione del sistema nervoso, rafforza l'immunità, favorisce l'assorbimento della vitamina D e protegge la vitamina A dalla degradazione."}
      ],
      areas:[
        {h:"Carenza di vitamina E", p:"Maggiore fabbisogno di vitamina E, anche nei bambini con apporto alimentare insufficiente."},
        {h:"Muscoli e nervi", p:"Distrofia muscolare, miastenia, miopatia, sindrome astenica e nevrastenica."},
        {h:"Pelle", p:"Patologie cutanee (dermatosi)."},
        {h:"Antiossidante", p:"Protezione antiossidante dell'organismo."}
      ],
      dosageText:"Assumere per via orale. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"400 mg",l:"vitamina E per capsula"},{n:"30",l:"capsule per confezione"}],
      important:[
        {h:"Controindicazioni", p:"Ipersensibilità ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Prodotto su ordine per HVARA SRL, Piazza IV Novembre 4, 20124 Milano, Italia. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"E-Vilife",
      heroSub:"E vitamini kapsulalari (alfa-tokoferol 400 mg). Tomirlar, immunitet, reproduktiv tizim va mushaklar uchun antioksidant.",
      introTitle:"E vitamini kuchi",
      introText:"E-Vilife — E vitamini (alfa-tokoferol atsetat 400 mg) manbai. Kuchli antioksidant: tomirlar, immunitet, reproduktiv va asab tizimlarini qo‘llab-quvvatlaydi, hujayralarni oksidlovchi stressdan himoya qiladi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik uchun 0,5 g li kapsulalar, №30."},
        {h:"1 kapsula tarkibi", p:"Alfa-tokoferol atsetat (E vitamini) — 400 mg<br>Yordamchi modda: kungaboqar moyi."}
      ],
      props:[
        {h:"Tomirlar va yurak", p:"Qon ivishiga ta’sir qiladi, tromb hosil bo‘lishining oldini olishga yordam beradi, katta va mayda tomirlar elastikligini yaxshilaydi, xolesterin blyashkalari hosil bo‘lishini sekinlashtiradi."},
        {h:"Reproduktiv tizim", p:"Reproduktiv tizimning normal ishlashi uchun juda zarur: erkaklarda spermatozoidlar ishlab chiqarilishini yaxshilaydi, ayollarda hayz siklini tartibga solishda ishtirok etadi va klimaks belgilarini yumshatadi."},
        {h:"Mushaklar, nervlar, immunitet", p:"Mushaklardagi energiya almashinuvini (glikogen to‘planishi) tartibga soladi, asab tizimi ishini yaxshilaydi, immunitetni mustahkamlaydi, D vitamini so‘rilishiga yordam beradi va A vitaminini yemirilishdan himoya qiladi."}
      ],
      areas:[
        {h:"E gipovitaminozi", p:"E vitaminiga ehtiyoj ortishi, shu jumladan ovqat bilan yetarlicha kelmasa bolalarda."},
        {h:"Mushaklar va nervlar", p:"Mushak distrofiyasi, miasteniya, miopatiya, astenik va nevrastenik sindrom."},
        {h:"Teri", p:"Teri kasalliklari (dermatozlar)."},
        {h:"Antioksidant", p:"Organizmni antioksidant himoya qilish."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"400 mg",l:"E vitamini kapsulada"},{n:"30",l:"kapsula qadoqda"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga yuqori sezuvchanlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. HVARA SRL, Piazza IV Novembre 4, 20124 Milano, Italiya buyurtmasi bo‘yicha ishlab chiqarilgan. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "manefro": {
    cat: "capsules",
    img: "img/prod/manefro.webp",
    doc: "downloads/manefro-ru.docx",
    ru: {
      name:"Манефро",
      heroSub:"Капсулы для здоровья почек и мочевыделительной системы. Растительный комплекс с D-маннозой и экстрактом клюквы. Поддерживает водный баланс.",
      introTitle:"Здоровье почек и водный баланс",
      introText:"Манефро — комплексный нутрицевтик с целевым синергическим действием на мочевыделительную систему. Сочетает три механизма защиты: антиадгезивный (D-манноза + клюква), мочегонный и антисептический растительный, антилитический.",
      infoCards:[
        {h:"Форма выпуска", p:"Капсулы для приёма внутрь, №20."},
        {h:"Состав 1 капсулы", p:"D-манноза — 100 мг · Экстракт клюквы (с PAC) — 50 мг<br>Экстракт горца птичьего — 15 мг · Золототысячник — 10 мг<br>Любисток лекарственный — 10 мг · Розмарин — 10 мг"}
      ],
      props:[
        {h:"D-манноза + клюква (антиадгезия)", p:"D-манноза блокирует FimH-адгезию уропатогенной E. coli; проантоцианидины клюквы (≥36 мг PAC) препятствуют прикреплению бактерий к уротелию, оказывая противомикробный эффект."},
        {h:"Растительные диуретики и антисептики", p:"Золототысячник, любисток и розмарин оказывают мочегонное, спазмолитическое, антисептическое и противовоспалительное действие на мочевые пути, поддерживают водный баланс."},
        {h:"Антилитический эффект", p:"Экстракт горца птичьего (спорыш) препятствует камнеобразованию и действует как антисептик мочевых путей."}
      ],
      areas:[
        {h:"Здоровье почек", p:"Поддержка функции почек и мочевыделительной системы."},
        {h:"Мочевые пути", p:"Профилактика инфекций мочевыводящих путей (антиадгезия E. coli)."},
        {h:"Водный баланс", p:"Поддержание водного баланса организма."},
        {h:"Профилактика камней", p:"Антилитическое действие — препятствует камнеобразованию."}
      ],
      dosageText:"Принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"20",l:"капсул в упаковке"},{n:"3",l:"механизма защиты"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, беременность, кормление грудью."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"Хранить при температуре не выше 25 °C, в сухом, защищённом от света и недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Произведено по заказу Welfar Central İlaç A.Ş., Istanbul, Türkiye. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Manefro",
      heroSub:"Capsules for kidney and urinary tract health. A herbal complex with D-mannose and cranberry extract. Supports water balance.",
      introTitle:"Kidney health and water balance",
      introText:"Manefro is a comprehensive nutraceutical with targeted synergistic action on the urinary system. It combines three protection mechanisms: anti-adhesive (D-mannose + cranberry), herbal diuretic and antiseptic, and anti-lithic.",
      infoCards:[
        {h:"Form", p:"Capsules for oral use, No.20."},
        {h:"Composition per capsule", p:"D-mannose — 100 mg · Cranberry extract (with PAC) — 50 mg<br>Knotgrass extract — 15 mg · Centaury — 10 mg<br>Lovage — 10 mg · Rosemary — 10 mg"}
      ],
      props:[
        {h:"D-mannose + cranberry (anti-adhesion)", p:"D-mannose blocks FimH adhesion of uropathogenic E. coli; cranberry proanthocyanidins (≥36 mg PAC) prevent bacteria from attaching to the urothelium, providing an antimicrobial effect."},
        {h:"Herbal diuretics and antiseptics", p:"Centaury, lovage and rosemary have a diuretic, antispasmodic, antiseptic and anti-inflammatory effect on the urinary tract and support water balance."},
        {h:"Anti-lithic effect", p:"Knotgrass extract prevents stone formation and acts as a urinary tract antiseptic."}
      ],
      areas:[
        {h:"Kidney health", p:"Support of kidney and urinary system function."},
        {h:"Urinary tract", p:"Prevention of urinary tract infections (E. coli anti-adhesion)."},
        {h:"Water balance", p:"Maintaining the body's water balance."},
        {h:"Stone prevention", p:"Anti-lithic action — prevents stone formation."}
      ],
      dosageText:"Take orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"20",l:"capsules per pack"},{n:"3",l:"protection mechanisms"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, pregnancy, breastfeeding."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"Store at no more than 25 °C, in a dry place protected from light and out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Made to order for Welfar Central İlaç A.Ş., Istanbul, Türkiye. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Manefro",
      heroSub:"Capsule per la salute di reni e vie urinarie. Un complesso vegetale con D-mannosio ed estratto di mirtillo rosso. Sostiene l'equilibrio idrico.",
      introTitle:"Salute dei reni ed equilibrio idrico",
      introText:"Manefro è un nutraceutico completo con azione sinergica mirata sul sistema urinario. Combina tre meccanismi di protezione: anti-adesivo (D-mannosio + mirtillo rosso), diuretico e antisettico vegetale, e anti-litiasico.",
      infoCards:[
        {h:"Formato", p:"Capsule per uso orale, n.20."},
        {h:"Composizione per capsula", p:"D-mannosio — 100 mg · Estratto di mirtillo rosso (con PAC) — 50 mg<br>Estratto di poligono — 15 mg · Centaurea — 10 mg<br>Levistico — 10 mg · Rosmarino — 10 mg"}
      ],
      props:[
        {h:"D-mannosio + mirtillo rosso (anti-adesione)", p:"Il D-mannosio blocca l'adesione FimH dell'E. coli uropatogeno; le proantocianidine del mirtillo rosso (≥36 mg PAC) impediscono ai batteri di aderire all'urotelio, con effetto antimicrobico."},
        {h:"Diuretici e antisettici vegetali", p:"Centaurea, levistico e rosmarino hanno un effetto diuretico, antispasmodico, antisettico e antinfiammatorio sulle vie urinarie e sostengono l'equilibrio idrico."},
        {h:"Effetto anti-litiasico", p:"L'estratto di poligono previene la formazione di calcoli e agisce come antisettico delle vie urinarie."}
      ],
      areas:[
        {h:"Salute dei reni", p:"Sostegno della funzione renale e del sistema urinario."},
        {h:"Vie urinarie", p:"Prevenzione delle infezioni delle vie urinarie (anti-adesione dell'E. coli)."},
        {h:"Equilibrio idrico", p:"Mantenimento dell'equilibrio idrico dell'organismo."},
        {h:"Prevenzione dei calcoli", p:"Azione anti-litiasica — previene la formazione di calcoli."}
      ],
      dosageText:"Assumere per via orale. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"20",l:"capsule per confezione"},{n:"3",l:"meccanismi di protezione"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, gravidanza, allattamento."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"Conservare a non più di 25 °C, in luogo asciutto, al riparo dalla luce e fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Prodotto su ordine per Welfar Central İlaç A.Ş., Istanbul, Türkiye. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Manefro",
      heroSub:"Buyraklar va siydik ajratish tizimi salomatligi uchun kapsulalar. D-mannoza va klyukva ekstrakti bilan o‘simlik majmuasi. Suv muvozanatini qo‘llab-quvvatlaydi.",
      introTitle:"Buyraklar salomatligi va suv muvozanati",
      introText:"Manefro — siydik tizimiga maqsadli sinergik ta’sir qiluvchi majmuaviy nutritsevtik. Uch himoya mexanizmini birlashtiradi: adgeziyaga qarshi (D-mannoza + klyukva), o‘simlik siydik haydovchi va antiseptik, toshga qarshi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik uchun kapsulalar, №20."},
        {h:"1 kapsula tarkibi", p:"D-mannoza — 100 mg · Klyukva ekstrakti (PAC bilan) — 50 mg<br>Qushturaqi ekstrakti — 15 mg · Zolototisyachnik — 10 mg<br>Dorivor lyubistok — 10 mg · Rozmarin — 10 mg"}
      ],
      props:[
        {h:"D-mannoza + klyukva (adgeziyaga qarshi)", p:"D-mannoza uropatogen E. colining FimH-adgeziyasini bloklaydi; klyukva proantotsianidinlari (≥36 mg PAC) bakteriyalarning uroteliyga yopishishiga to‘sqinlik qiladi va antimikrob ta’sir ko‘rsatadi."},
        {h:"O‘simlik siydik haydovchi va antiseptiklar", p:"Zolototisyachnik, lyubistok va rozmarin siydik yo‘llariga siydik haydovchi, spazmga qarshi, antiseptik va yallig‘lanishga qarshi ta’sir ko‘rsatadi, suv muvozanatini qo‘llab-quvvatlaydi."},
        {h:"Toshga qarshi ta’sir", p:"Qushturaqi ekstrakti tosh hosil bo‘lishiga to‘sqinlik qiladi va siydik yo‘llari antiseptigi sifatida ishlaydi."}
      ],
      areas:[
        {h:"Buyraklar salomatligi", p:"Buyraklar va siydik tizimi funksiyasini qo‘llab-quvvatlash."},
        {h:"Siydik yo‘llari", p:"Siydik yo‘llari infeksiyalari profilaktikasi (E. coli adgeziyasiga qarshi)."},
        {h:"Suv muvozanati", p:"Organizm suv muvozanatini saqlash."},
        {h:"Tosh profilaktikasi", p:"Toshga qarshi ta’sir — tosh hosil bo‘lishiga to‘sqinlik qiladi."}
      ],
      dosageText:"Og‘iz orqali qabul qilinadi. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"20",l:"kapsula qadoqda"},{n:"3",l:"himoya mexanizmi"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, homiladorlik, emizish."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"25 °C dan yuqori bo‘lmagan haroratda, quruq, yorug‘likdan himoyalangan va bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Welfar Central İlaç A.Ş., İstanbul, Turkiya buyurtmasi bo‘yicha ishlab chiqarilgan. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "instimol": {
    cat: "powders",
    img: "img/prod/instimol.webp",
    ru: {
      name:"Инстимол",
      heroSub:"Растительные гранулы от гриппа и простуды. Симптоматическое средство при ОРВИ — горячий напиток со вкусом для облегчения симптомов.",
      introTitle:"От гриппа и простуды",
      introText:"Инстимол — растительные гранулы для приготовления горячего напитка. Симптоматическое средство при гриппе и простуде (ОРВИ): облегчает симптомы, поддерживает иммунитет. Растворяется мгновенно.",
      infoCards:[
        {h:"Форма выпуска", p:"Гранулы для приготовления раствора, 5 саше."},
        {h:"Назначение", p:"Симптоматическое лечение гриппа и простуды (ОРВИ). Растительный состав. Без сахара."}
      ],
      props:[
        {h:"Симптоматическое действие", p:"Облегчает основные симптомы ОРВИ и простуды — горячий напиток смягчает течение заболевания."},
        {h:"Растительный комплекс", p:"Растительные компоненты с традиционным применением при простудных состояниях, иммуноподдерживающим действием."},
        {h:"Без сахара", p:"Содержит подсластитель вместо сахара — подходит при контроле углеводов."}
      ],
      areas:[
        {h:"Грипп и простуда", p:"Симптоматическое лечение гриппа и простуды (ОРВИ)."},
        {h:"Иммунитет", p:"Иммуноподдерживающее действие в сезон простуд."},
        {h:"Облегчение симптомов", p:"Смягчает течение простудных заболеваний."},
        {h:"Тёплый напиток", p:"Согревающий горячий напиток, растворяется мгновенно."}
      ],
      dosageText:"Содержимое саше растворить в горячей воде и принимать внутрь. Точную дозировку и продолжительность курса уточняйте в инструкции к препарату или у специалиста.",
      dosageStats:[{n:"5",l:"саше в упаковке"},{n:"—",l:"по инструкции"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов, беременность, кормление грудью."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Instimol",
      heroSub:"Herbal granules for flu and colds. A symptomatic remedy for acute respiratory infections — a flavored hot drink to ease symptoms.",
      introTitle:"For flu and colds",
      introText:"Instimol is herbal granules for a hot drink. A symptomatic remedy for flu and colds (ARI): it eases symptoms and supports immunity. Dissolves instantly.",
      infoCards:[
        {h:"Form", p:"Granules for a solution, 5 sachets."},
        {h:"Purpose", p:"Symptomatic treatment of flu and colds (ARI). Herbal formula. Sugar-free."}
      ],
      props:[
        {h:"Symptomatic action", p:"Eases the main symptoms of ARI and colds — a hot drink that softens the course of the illness."},
        {h:"Herbal complex", p:"Plant components traditionally used for cold conditions, with an immune-supporting effect."},
        {h:"Sugar-free", p:"Contains a sweetener instead of sugar — suitable for carbohydrate control."}
      ],
      areas:[
        {h:"Flu and colds", p:"Symptomatic treatment of flu and colds (ARI)."},
        {h:"Immunity", p:"Immune-supporting effect during the cold season."},
        {h:"Symptom relief", p:"Softens the course of cold illnesses."},
        {h:"Warm drink", p:"A warming hot drink that dissolves instantly."}
      ],
      dosageText:"Dissolve the sachet contents in hot water and take orally. Check the exact dosage and course duration in the product leaflet or with a specialist.",
      dosageStats:[{n:"5",l:"sachets per pack"},{n:"—",l:"as per leaflet"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components, pregnancy, breastfeeding."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Instimol",
      heroSub:"Granuli vegetali per influenza e raffreddore. Un rimedio sintomatico per le infezioni respiratorie — una bevanda calda aromatizzata per alleviare i sintomi.",
      introTitle:"Per influenza e raffreddore",
      introText:"Instimol è in granuli vegetali per una bevanda calda. Un rimedio sintomatico per influenza e raffreddore: allevia i sintomi e sostiene l'immunità. Si scioglie all'istante.",
      infoCards:[
        {h:"Formato", p:"Granuli per soluzione, 5 bustine."},
        {h:"Destinazione", p:"Trattamento sintomatico di influenza e raffreddore. Formula vegetale. Senza zucchero."}
      ],
      props:[
        {h:"Azione sintomatica", p:"Allevia i principali sintomi di raffreddore e infezioni respiratorie — una bevanda calda che attenua il decorso della malattia."},
        {h:"Complesso vegetale", p:"Componenti vegetali tradizionalmente usati per i raffreddori, con effetto di sostegno immunitario."},
        {h:"Senza zucchero", p:"Contiene un dolcificante al posto dello zucchero — adatto al controllo dei carboidrati."}
      ],
      areas:[
        {h:"Influenza e raffreddore", p:"Trattamento sintomatico di influenza e raffreddore."},
        {h:"Immunità", p:"Effetto di sostegno immunitario nella stagione fredda."},
        {h:"Sollievo dai sintomi", p:"Attenua il decorso dei raffreddori."},
        {h:"Bevanda calda", p:"Una bevanda calda riscaldante che si scioglie all'istante."}
      ],
      dosageText:"Sciogliere il contenuto della bustina in acqua calda e assumere per via orale. Verificare il dosaggio esatto e la durata del ciclo nel foglietto illustrativo o con uno specialista.",
      dosageStats:[{n:"5",l:"bustine per confezione"},{n:"—",l:"secondo foglietto"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti, gravidanza, allattamento."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Instimol",
      heroSub:"Gripp va shamollashga qarshi o‘simlik granulalari. O‘RVIda simptomatik vosita — belgilarni yengillashtiruvchi ta’mli issiq ichimlik.",
      introTitle:"Gripp va shamollashga qarshi",
      introText:"Instimol — issiq ichimlik tayyorlash uchun o‘simlik granulalari. Gripp va shamollashda (O‘RVI) simptomatik vosita: belgilarni yengillashtiradi, immunitetni qo‘llab-quvvatlaydi. Bir zumda eriydi.",
      infoCards:[
        {h:"Formati", p:"Eritma tayyorlash uchun granulalar, 5 sashe."},
        {h:"Vazifasi", p:"Gripp va shamollashning (O‘RVI) simptomatik davosi. O‘simlik tarkibi. Shakarsiz."}
      ],
      props:[
        {h:"Simptomatik ta’sir", p:"O‘RVI va shamollashning asosiy belgilarini yengillashtiradi — issiq ichimlik kasallik kechishini yumshatadi."},
        {h:"O‘simlik majmuasi", p:"Shamollash holatlarida an’anaviy qo‘llaniladigan, immunitetni qo‘llab-quvvatlovchi o‘simlik komponentlari."},
        {h:"Shakarsiz", p:"Shakar o‘rniga shirinlashtiruvchi saqlaydi — uglevodlarni nazorat qilishda mos."}
      ],
      areas:[
        {h:"Gripp va shamollash", p:"Gripp va shamollashning (O‘RVI) simptomatik davosi."},
        {h:"Immunitet", p:"Sovuq mavsumda immunitetni qo‘llab-quvvatlovchi ta’sir."},
        {h:"Belgilarni yengillashtirish", p:"Shamollash kasalliklari kechishini yumshatadi."},
        {h:"Iliq ichimlik", p:"Isituvchi issiq ichimlik, bir zumda eriydi."}
      ],
      dosageText:"Sashe tarkibini issiq suvda eritib, og‘iz orqali qabul qiling. Aniq doza va kurs davomiyligini preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang.",
      dosageStats:[{n:"5",l:"sashe qadoqda"},{n:"—",l:"yo‘riqnomaga ko‘ra"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik, homiladorlik, emizish."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  },

  "aminobelin-kids": {
    cat: "drops",
    img: "img/prod/aminobelin-kids.webp",
    doc: "downloads/aminobelin-kids-ru.docx",
    ru: {
      name:"Аминобелин KIDS",
      heroSub:"Капли для приёма внутрь — комплекс аминокислот с витамином C. Поддержка в период активного роста ребёнка. Для детей с рождения (0+).",
      introTitle:"Поддержка в период активного роста",
      introText:"Аминобелин KIDS — детский комплекс аминокислот (L-лизин, L-триптофан) с витамином C в форме капель. Способствует гармоничному развитию мозга и нервной системы, росту и формированию тканей, поддержке иммунитета и улучшению аппетита.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли для приёма внутрь, флакон 50 мл."},
        {h:"Состав (2 мл раствора)", p:"Комплекс из 20 аминокислот: L-лейцин 3,76 мг, L-лизин 5 мг, L-метионин 1,84 мг, L-валин, L-изолейцин, L-треонин, L-аргинин, глицин и др.<br>Витамин C — 120 мг"}
      ],
      props:[
        {h:"L-лизин", p:"Незаменимая аминокислота, необходимая для роста и формирования тканей, синтеза белка, коллагена и усвоения кальция. Поддерживает иммунитет."},
        {h:"L-триптофан", p:"Незаменимая аминокислота, предшественник серотонина и мелатонина. Способствует гармоничному развитию нервной системы, спокойствию и здоровому сну ребёнка."},
        {h:"Витамин C", p:"Антиоксидант, укрепляет иммунитет в сезон вирусов, повышает усвояемость железа, участвует в синтезе коллагена и энергетическом обмене."}
      ],
      areas:[
        {h:"Развитие мозга", p:"Гармоничное развитие мозга и нервной системы."},
        {h:"Рост и ткани", p:"Поддержка роста и формирования тканей."},
        {h:"Иммунитет", p:"Помощь иммунной системе в сезон вирусов."},
        {h:"Аппетит", p:"Улучшение аппетита и усвоения пищи."}
      ],
      dosageText:"Перед применением взбалтывать. Принимать внутрь. Допускается наличие осадка (характерно для компонентов растительного происхождения). Точную дозировку по возрасту уточняйте в инструкции к препарату или у специалиста. Подходит детям с рождения (0+).",
      dosageStats:[{n:"0+",l:"для детей с рождения"},{n:"10 мл",l:"флакон"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов."},
        {h:"Побочные действия", p:"При появлении побочных действий следует прекратить применение и обратиться к врачу."},
        {h:"Условия хранения", p:"Хранить в сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Отпуск", p:"Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Произведено по заказу «HVARA» SRL, Piazza IV Novembre 4, 20124 Milano, Italy. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, д. 117."
    },
    en: {
      name:"Aminobelin KIDS",
      heroSub:"Oral drops — an amino-acid complex with vitamin C. Support during a child's active growth. For children from birth (0+).",
      introTitle:"Support during active growth",
      introText:"Aminobelin KIDS is a children's amino-acid complex (L-lysine, L-tryptophan) with vitamin C in drop form. It promotes harmonious brain and nervous system development, growth and tissue formation, immune support and improved appetite.",
      infoCards:[
        {h:"Form", p:"Oral drops, 50 ml bottle."},
        {h:"Composition (per 2 ml)", p:"A complex of 20 amino acids: L-leucine 3.76 mg, L-lysine 5 mg, L-methionine 1.84 mg, L-valine, L-isoleucine, L-threonine, L-arginine, glycine and others<br>Vitamin C — 120 mg"}
      ],
      props:[
        {h:"L-lysine", p:"An essential amino acid needed for growth and tissue formation, protein and collagen synthesis and calcium absorption. Supports immunity."},
        {h:"L-tryptophan", p:"An essential amino acid, a precursor of serotonin and melatonin. Promotes harmonious nervous system development, calmness and healthy sleep in children."},
        {h:"Vitamin C", p:"An antioxidant that strengthens immunity during the virus season, improves iron absorption and participates in collagen synthesis and energy metabolism."}
      ],
      areas:[
        {h:"Brain development", p:"Harmonious brain and nervous system development."},
        {h:"Growth and tissues", p:"Support of growth and tissue formation."},
        {h:"Immunity", p:"Help for the immune system during the virus season."},
        {h:"Appetite", p:"Improved appetite and food absorption."}
      ],
      dosageText:"Shake before use. Take orally. A sediment may be present (typical of plant-origin components). Check the exact age-based dosage in the product leaflet or with a specialist. Suitable for children from birth (0+).",
      dosageStats:[{n:"0+",l:"for children from birth"},{n:"10 ml",l:"bottle"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Side effects", p:"If side effects occur, stop use and consult a doctor."},
        {h:"Storage", p:"Store in a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Dispensing", p:"Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Made to order for HVARA SRL, Piazza IV Novembre 4, 20124 Milan, Italy. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117."
    },
    it: {
      name:"Aminobelin KIDS",
      heroSub:"Gocce orali — un complesso di amminoacidi con vitamina C. Sostegno durante la crescita attiva del bambino. Per bambini dalla nascita (0+).",
      introTitle:"Sostegno durante la crescita attiva",
      introText:"Aminobelin KIDS è un complesso di amminoacidi per bambini (L-lisina, L-triptofano) con vitamina C in gocce. Favorisce lo sviluppo armonioso del cervello e del sistema nervoso, la crescita e la formazione dei tessuti, il sostegno immunitario e il miglioramento dell'appetito.",
      infoCards:[
        {h:"Formato", p:"Gocce orali, flacone da 50 ml."},
        {h:"Composizione (per 2 ml)", p:"Un complesso di 20 amminoacidi: L-leucina 3,76 mg, L-lisina 5 mg, L-metionina 1,84 mg, L-valina, L-isoleucina, L-treonina, L-arginina, glicina e altri<br>Vitamina C — 120 mg"}
      ],
      props:[
        {h:"L-lisina", p:"Un amminoacido essenziale necessario per la crescita e la formazione dei tessuti, la sintesi di proteine e collagene e l'assorbimento del calcio. Sostiene l'immunità."},
        {h:"L-triptofano", p:"Un amminoacido essenziale, precursore di serotonina e melatonina. Favorisce lo sviluppo armonioso del sistema nervoso, la calma e un sonno sano nei bambini."},
        {h:"Vitamina C", p:"Un antiossidante che rafforza l'immunità nella stagione dei virus, migliora l'assorbimento del ferro e partecipa alla sintesi del collagene e al metabolismo energetico."}
      ],
      areas:[
        {h:"Sviluppo cerebrale", p:"Sviluppo armonioso del cervello e del sistema nervoso."},
        {h:"Crescita e tessuti", p:"Sostegno della crescita e della formazione dei tessuti."},
        {h:"Immunità", p:"Aiuto al sistema immunitario nella stagione dei virus."},
        {h:"Appetito", p:"Miglioramento dell'appetito e dell'assorbimento del cibo."}
      ],
      dosageText:"Agitare prima dell'uso. Assumere per via orale. Può essere presente un sedimento (tipico dei componenti di origine vegetale). Verificare il dosaggio esatto in base all'età nel foglietto illustrativo o con uno specialista. Adatto ai bambini dalla nascita (0+).",
      dosageStats:[{n:"0+",l:"per bambini dalla nascita"},{n:"10 ml",l:"flacone"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Effetti collaterali", p:"In caso di effetti collaterali, interrompere l'uso e consultare un medico."},
        {h:"Conservazione", p:"Conservare in luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Vendita", p:"Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Prodotto su ordine per HVARA SRL, Piazza IV Novembre 4, 20124 Milano, Italia. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117."
    },
    uz: {
      name:"Aminobelin KIDS",
      heroSub:"Ichimlik tomchilari — C vitamini bilan aminokislotalar majmuasi. Bola faol o‘sishi davrida qo‘llab-quvvatlash. Tug‘ilishdan (0+) bolalarga.",
      introTitle:"Faol o‘sish davrida qo‘llab-quvvatlash",
      introText:"Aminobelin KIDS — C vitamini bilan bolalar aminokislotalar majmuasi (L-lizin, L-triptofan) tomchi shaklida. Miya va asab tizimining uyg‘un rivojlanishiga, o‘sish va to‘qimalar shakllanishiga, immunitetni qo‘llab-quvvatlash va ishtahani yaxshilashga yordam beradi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik tomchilari, flakon 50 ml."},
        {h:"Tarkibi (2 ml eritma)", p:"20 aminokislotadan iborat majmua: L-leysin 3,76 mg, L-lizin 5 mg, L-metionin 1,84 mg, L-valin, L-izoleysin, L-treonin, L-arginin, glitsin va boshqalar<br>C vitamini — 120 mg"}
      ],
      props:[
        {h:"L-lizin", p:"O‘sish va to‘qimalar shakllanishi, oqsil va kollagen sintezi hamda kalsiy so‘rilishi uchun zarur almashtirib bo‘lmaydigan aminokislota. Immunitetni qo‘llab-quvvatlaydi."},
        {h:"L-triptofan", p:"Almashtirib bo‘lmaydigan aminokislota, serotonin va melatonin o‘tmishdoshi. Bolada asab tizimining uyg‘un rivojlanishi, xotirjamlik va sog‘lom uyquga yordam beradi."},
        {h:"C vitamini", p:"Antioksidant, virus mavsumida immunitetni mustahkamlaydi, temir so‘rilishini oshiradi, kollagen sintezi va energiya almashinuvida ishtirok etadi."}
      ],
      areas:[
        {h:"Miya rivojlanishi", p:"Miya va asab tizimining uyg‘un rivojlanishi."},
        {h:"O‘sish va to‘qimalar", p:"O‘sish va to‘qimalar shakllanishini qo‘llab-quvvatlash."},
        {h:"Immunitet", p:"Virus mavsumida immun tizimga yordam."},
        {h:"Ishtaha", p:"Ishtaha va ovqat so‘rilishini yaxshilash."}
      ],
      dosageText:"Qo‘llashdan oldin chayqating. Og‘iz orqali qabul qilinadi. Cho‘kma bo‘lishi mumkin (o‘simlik kelib chiqishli komponentlar uchun xos). Yoshga qarab aniq dozani preparat yo‘riqnomasidan yoki mutaxassisdan aniqlang. Tug‘ilishdan (0+) bolalarga mos.",
      dosageStats:[{n:"0+",l:"tug‘ilishdan bolalarga"},{n:"10 ml",l:"flakon"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik."},
        {h:"Nojo‘ya ta’sirlar", p:"Nojo‘ya ta’sirlar yuzaga kelsa, qabulni to‘xtatib, shifokorga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda saqlang. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Sotuv", p:"Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. HVARA SRL, Piazza IV Novembre 4, 20124 Milano, Italiya buyurtmasi bo‘yicha ishlab chiqarilgan. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117."
    }
  }

  ,"ferment-flor-bio": {
    cat: "drops",
    img: "img/prod/ferment-flor-bio.webp",
    doc: "downloads/ferment-flor-bio-ru.docx",
    ru: {
      name:"Фермент Флор Био",
      heroSub:"Пробиотик в каплях с тиндализированными молочнокислыми бактериями и витамином E. Для нормализации кишечной микрофлоры.",
      introTitle:"Баланс кишечной микрофлоры",
      introText:"Фермент Флор Био — пробиотический комплекс в каплях на основе тиндализированных молочнокислых бактерий с витамином E. Поддерживает баланс микрофлоры, улучшает пищеварение и иммунитет. Тиндализированная форма сохраняет биологическую активность без риска размножения бактерий.",
      infoCards:[
        {h:"Форма выпуска", p:"Капли для приёма внутрь, флакон 15 мл."},
        {h:"Состав (1 капля)", p:"Тиндализированный L. rhamnosus — 11 мг<br>Тиндализированный B. infantis — 22 мг<br>Тиндализированный S. thermophilus — 22 мг · Витамин E — 66,67 мг"}
      ],
      props:[
        {h:"Lactobacillus rhamnosus", p:"Способствует балансу кишечной микрофлоры, укреплению защитных функций, улучшению пищеварения и снижению дискомфорта со стороны ЖКТ."},
        {h:"Bifidobacterium + Streptococcus", p:"B. infantis поддерживает микрофлору и иммунную защиту; S. thermophilus улучшает пищеварение и помогает при тяжести и нарушениях работы кишечника."},
        {h:"Витамин E", p:"Мощный антиоксидант: защищает клетки от окислительного стресса, поддерживает иммунитет и восстановление слизистой кишечника."}
      ],
      areas:[
        {h:"Микрофлора", p:"Поддержка нормальной микрофлоры кишечника."},
        {h:"Пищеварение", p:"Улучшение пищеварения, снижение вздутия и нарушений стула."},
        {h:"После антибиотиков", p:"Восстановление микрофлоры после стрессов, диеты или антибактериальных средств."},
        {h:"Иммунитет", p:"Поддержка иммунной системы."}
      ],
      dosageText:"Взрослым — по 10 капель 1 раз в день, растворив в небольшом количестве воды или принимая внутрь. Перед применением взболтать. Продолжительность приёма — 2–4 недели, при необходимости повторить после консультации специалиста.",
      dosageStats:[{n:"10",l:"капель 1 раз в день"},{n:"2–4",l:"недели курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов. Беременность, лактация и детский возраст — по рекомендации специалиста."},
        {h:"Побочные действия", p:"Редко — аллергические реакции или кратковременный дискомфорт ЖКТ в начале приёма. При появлении прекратить применение и обратиться к специалисту."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта. БАД, не является лекарственным средством."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, Хорезмская обл., г. Ургенч, ул. И. Дусова, 117. Дистрибьютор: «БИОГЕН ФАРМ», Кыргызская Республика, г. Бишкек."
    },
    en: {
      name:"Enzyme Flor Bio",
      heroSub:"A probiotic in drops with tyndallized lactic-acid bacteria and vitamin E. For normalizing gut microflora.",
      introTitle:"Gut microflora balance",
      introText:"Enzyme Flor Bio is a probiotic complex in drops based on tyndallized lactic-acid bacteria with vitamin E. It supports microflora balance, improves digestion and immunity. The tyndallized form preserves biological activity without the risk of bacterial overgrowth.",
      infoCards:[
        {h:"Form", p:"Oral drops, 15 ml bottle."},
        {h:"Composition (per drop)", p:"Tyndallized L. rhamnosus — 11 mg<br>Tyndallized B. infantis — 22 mg<br>Tyndallized S. thermophilus — 22 mg · Vitamin E — 66.67 mg"}
      ],
      props:[
        {h:"Lactobacillus rhamnosus", p:"Helps balance gut microflora, strengthens defenses, improves digestion and reduces GI discomfort."},
        {h:"Bifidobacterium + Streptococcus", p:"B. infantis supports microflora and immune defense; S. thermophilus improves digestion and helps with heaviness and bowel disorders."},
        {h:"Vitamin E", p:"A powerful antioxidant: protects cells from oxidative stress, supports immunity and restoration of the intestinal mucosa."}
      ],
      areas:[
        {h:"Microflora", p:"Support of normal gut microflora."},
        {h:"Digestion", p:"Improved digestion, reduced bloating and stool disorders."},
        {h:"After antibiotics", p:"Microflora restoration after stress, diet changes or antibacterial treatment."},
        {h:"Immunity", p:"Support of the immune system."}
      ],
      dosageText:"Adults — 10 drops once a day, dissolved in a small amount of water or taken directly. Shake before use. Duration: 2–4 weeks; may be repeated after consulting a specialist.",
      dosageStats:[{n:"10",l:"drops once a day"},{n:"2–4",l:"weeks course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components. Pregnancy, lactation and childhood — on a specialist's recommendation."},
        {h:"Side effects", p:"Rarely — allergic reactions or brief GI discomfort at the start. If they occur, stop use and consult a specialist."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription. Dietary supplement, not a medicine."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, Khorezm region, Urgench, I. Dusov St. 117. Distributor: BIOGEN PHARM, Kyrgyz Republic, Bishkek."
    },
    it: {
      name:"Enzima Flor Bio",
      heroSub:"Un probiotico in gocce con batteri lattici tindalizzati e vitamina E. Per normalizzare la microflora intestinale.",
      introTitle:"Equilibrio della microflora intestinale",
      introText:"Enzima Flor Bio è un complesso probiotico in gocce a base di batteri lattici tindalizzati con vitamina E. Sostiene l'equilibrio della microflora, migliora la digestione e l'immunità. La forma tindalizzata preserva l'attività biologica senza rischio di proliferazione batterica.",
      infoCards:[
        {h:"Formato", p:"Gocce orali, flacone da 15 ml."},
        {h:"Composizione (per goccia)", p:"L. rhamnosus tindalizzato — 11 mg<br>B. infantis tindalizzato — 22 mg<br>S. thermophilus tindalizzato — 22 mg · Vitamina E — 66,67 mg"}
      ],
      props:[
        {h:"Lactobacillus rhamnosus", p:"Aiuta a equilibrare la microflora intestinale, rafforza le difese, migliora la digestione e riduce il disagio gastrointestinale."},
        {h:"Bifidobacterium + Streptococcus", p:"Il B. infantis sostiene la microflora e la difesa immunitaria; lo S. thermophilus migliora la digestione e aiuta in caso di pesantezza e disturbi intestinali."},
        {h:"Vitamina E", p:"Un potente antiossidante: protegge le cellule dallo stress ossidativo, sostiene l'immunità e il ripristino della mucosa intestinale."}
      ],
      areas:[
        {h:"Microflora", p:"Sostegno della normale microflora intestinale."},
        {h:"Digestione", p:"Migliore digestione, riduzione di gonfiore e disturbi delle feci."},
        {h:"Dopo gli antibiotici", p:"Ripristino della microflora dopo stress, cambiamenti alimentari o trattamenti antibatterici."},
        {h:"Immunità", p:"Sostegno del sistema immunitario."}
      ],
      dosageText:"Adulti — 10 gocce una volta al giorno, sciolte in poca acqua o assunte direttamente. Agitare prima dell'uso. Durata: 2–4 settimane; ripetibile su consiglio dello specialista.",
      dosageStats:[{n:"10",l:"gocce una volta al giorno"},{n:"2–4",l:"settimane di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti. Gravidanza, allattamento e infanzia — su consiglio dello specialista."},
        {h:"Effetti collaterali", p:"Raramente — reazioni allergiche o breve disagio gastrointestinale all'inizio. In tal caso interrompere l'uso e consultare uno specialista."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta. Integratore alimentare, non è un medicinale."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, regione di Khorezm, Urgench, Via I. Dusov 117. Distributore: BIOGEN PHARM, Repubblica del Kirghizistan, Bishkek."
    },
    uz: {
      name:"Ferment Flor Bio",
      heroSub:"Tindalizatsiyalangan sut-kislotali bakteriyalar va E vitamini bilan tomchi shaklidagi probiotik. Ichak mikroflorasini me’yorlashtirish uchun.",
      introTitle:"Ichak mikroflorasi muvozanati",
      introText:"Ferment Flor Bio — E vitamini bilan tindalizatsiyalangan sut-kislotali bakteriyalar asosidagi tomchi shaklidagi probiotik majmua. Mikroflora muvozanatini qo‘llab-quvvatlaydi, hazm va immunitetni yaxshilaydi. Tindalizatsiyalangan shakl bakteriyalar ko‘payishi xavfisiz biologik faollikni saqlaydi.",
      infoCards:[
        {h:"Formati", p:"Ichimlik tomchilari, flakon 15 ml."},
        {h:"Tarkibi (1 tomchi)", p:"Tindalizatsiyalangan L. rhamnosus — 11 mg<br>Tindalizatsiyalangan B. infantis — 22 mg<br>Tindalizatsiyalangan S. thermophilus — 22 mg · E vitamini — 66,67 mg"}
      ],
      props:[
        {h:"Lactobacillus rhamnosus", p:"Ichak mikroflorasi muvozanatiga, himoya funksiyalarini mustahkamlashga, hazmni yaxshilashga va OIT noqulayligini kamaytirishga yordam beradi."},
        {h:"Bifidobacterium + Streptococcus", p:"B. infantis mikroflora va immun himoyani qo‘llab-quvvatlaydi; S. thermophilus hazmni yaxshilaydi va og‘irlik hamda ichak ishi buzilishlarida yordam beradi."},
        {h:"E vitamini", p:"Kuchli antioksidant: hujayralarni oksidlovchi stressdan himoya qiladi, immunitet va ichak shilliq qavati tiklanishini qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Mikroflora", p:"Ichakning normal mikroflorasini qo‘llab-quvvatlash."},
        {h:"Hazm", p:"Hazmni yaxshilash, dam bo‘lish va najas buzilishlarini kamaytirish."},
        {h:"Antibiotiklardan keyin", p:"Stress, parhez yoki antibakterial vositalardan keyin mikroflorani tiklash."},
        {h:"Immunitet", p:"Immun tizimni qo‘llab-quvvatlash."}
      ],
      dosageText:"Kattalarga — kuniga 1 marta 10 tomchidan, oz miqdordagi suvda eritib yoki og‘iz orqali qabul qiling. Qo‘llashdan oldin chayqating. Qabul davomiyligi — 2–4 hafta, zarur bo‘lganda mutaxassis bilan maslahatlashgandan keyin takrorlash mumkin.",
      dosageStats:[{n:"10",l:"tomchi kuniga 1 marta"},{n:"2–4",l:"haftalik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Komponentlarga individual chidamsizlik. Homiladorlik, emizish va bolalik davri — mutaxassis tavsiyasiga ko‘ra."},
        {h:"Nojo‘ya ta’sirlar", p:"Kamdan-kam — allergik reaksiyalar yoki qabul boshida qisqa muddatli OIT noqulayligi. Yuzaga kelsa, qabulni to‘xtatib, mutaxassisga murojaat qiling."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi. BAD, dori vositasi emas."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, Xorazm viloyati, Urganch, I. Dusova, 117. Distribyutor: «BIOGEN FARM», Qirg‘iziston Respublikasi, Bishkek."
    }
  }
  ,"miramaks": {
    cat: "sprays",
    img: "img/prod/miramaks.webp",
    ru: {
      name:"Мирамакс",
      heroSub:"Антисептический раствор для местного применения 300 мл с насадкой для спринцевания. Бактерицидное, противогрибковое и противовирусное действие.",
      introTitle:"Антисептик широкого спектра",
      introText:"Мирамакс — раствор на основе бензилдиметил-аммоний хлорида с экстрактами ромашки и алоэ вера. Оказывает выраженное бактерицидное, противогрибковое и противовирусное действие, активизирует процессы регенерации. Применяется в акушерстве, гинекологии и для индивидуальной профилактики ИППП.",
      infoCards:[
        {h:"Форма выпуска", p:"Жидкость по 300 мл в полимерных или стеклянных флаконах с насадками для спринцевания."},
        {h:"Состав на 100 мл", p:"Бензилдиметил[3-(миристоиламино)пропил] аммоний хлорид — 10 мг<br>Экстракт ромашки — 25 мг · Экстракт алоэ вера — 25 мг<br>Вспомогательное: очищенная вода."}
      ],
      props:[
        {h:"Бактерицидное действие", p:"Активен в отношении грамположительных (Staphylococcus, Streptococcus, S. pneumoniae) и грамотрицательных (Pseudomonas aeruginosa, E. coli, Klebsiella) бактерий, аэробных и анаэробных."},
        {h:"Противогрибковое и противовирусное", p:"Действует на аскомицеты, дрожжевые и дрожжеподобные грибы (Candida albicans, tropicalis, krusei), дерматофиты; активен против сложноустроенных вирусов, включая герпес и ВИЧ. Действует на возбудителей ИППП (хламидии, трихомонады, гонококки)."},
        {h:"Регенерация и иммунитет", p:"Активизирует процессы регенерации, стимулирует защитные реакции за счёт активации фагоцитов, потенцирует моноцитарно-макрофагальную систему. Не обладает местнораздражающим и аллергизирующим действием."}
      ],
      areas:[
        {h:"Акушерство и гинекология", p:"Профилактика и лечение нагноений послеродовых травм, ран промежности и влагалища, послеродовых инфекций, вульвовагинит, эндометрит."},
        {h:"Профилактика ИППП", p:"Индивидуальная профилактика сифилиса, гонореи, хламидиоза, трихомониаза, генитального герпеса и кандидоза."},
        {h:"Послеоперационная обработка", p:"Обработка влагалища и матки при кесаревом сечении, послеоперационные тампоны."},
        {h:"Венерология", p:"Эффективен при применении не позднее 2 ч после полового акта."}
      ],
      dosageText:"Местно, препарат готов к применению. Снять колпачок, присоединить насадку-распылитель к флакону, активировать нажатием на дозатор и ввести во влагалище, накачивая дозатор до введения 50 мл раствора. В акушерстве/гинекологии — влагалищные орошения по 50 мл (до родов 5–7 дней, в послеродовом периоде 5–6 дней). После процедуры рекомендуется не мочиться 2 ч.",
      dosageStats:[{n:"50 мл",l:"объём орошения"},{n:"2 ч",l:"не мочиться после"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов содержимого флакона."},
        {h:"Особые указания", p:"Гигиеническое средство. Не является лекарственным средством. Не применять использованную трубку оросителя повторно!"},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C."},
        {h:"Срок годности · отпуск", p:"36 месяцев. Отпускается без рецепта."}
      ],
      legal:"Гигиеническое средство. Не является лекарственным средством. Производитель: ООО «HVARA», Республика Узбекистан, 220100, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117. Тел.: +99893 594 44 64, www.hvara.uz"
    },
    en: {
      name:"Miramax",
      heroSub:"An antiseptic solution for topical use, 300 ml with a douching nozzle. Bactericidal, antifungal and antiviral action.",
      introTitle:"A broad-spectrum antiseptic",
      introText:"Miramax is a solution based on benzyldimethyl ammonium chloride with chamomile and aloe vera extracts. It has a pronounced bactericidal, antifungal and antiviral effect and activates regeneration. Used in obstetrics, gynecology and for individual STI prevention.",
      infoCards:[
        {h:"Form", p:"Liquid, 300 ml in polymer or glass bottles with douching nozzles."},
        {h:"Composition per 100 ml", p:"Benzyldimethyl[3-(myristoylamino)propyl] ammonium chloride — 10 mg<br>Chamomile extract — 25 mg · Aloe vera extract — 25 mg<br>Excipient: purified water."}
      ],
      props:[
        {h:"Bactericidal action", p:"Active against gram-positive (Staphylococcus, Streptococcus, S. pneumoniae) and gram-negative (Pseudomonas aeruginosa, E. coli, Klebsiella) bacteria, aerobic and anaerobic."},
        {h:"Antifungal and antiviral", p:"Acts on ascomycetes, yeast and yeast-like fungi (Candida albicans, tropicalis, krusei), dermatophytes; active against complex viruses including herpes and HIV. Acts on STI pathogens (chlamydia, trichomonas, gonococci)."},
        {h:"Regeneration and immunity", p:"Activates regeneration, stimulates defenses by activating phagocytes and potentiates the monocyte-macrophage system. No local irritant or allergenic effect."}
      ],
      areas:[
        {h:"Obstetrics & gynecology", p:"Prevention and treatment of postpartum trauma suppuration, perineal and vaginal wounds, postpartum infections, vulvovaginitis, endometritis."},
        {h:"STI prevention", p:"Individual prevention of syphilis, gonorrhea, chlamydia, trichomoniasis, genital herpes and candidiasis."},
        {h:"Post-surgical treatment", p:"Treatment of the vagina and uterus during cesarean section, post-operative tampons."},
        {h:"Venereology", p:"Effective when used no later than 2 hours after intercourse."}
      ],
      dosageText:"Topical, ready to use. Remove the cap, attach the spray nozzle to the bottle, activate by pressing the dispenser and insert into the vagina, pumping until 50 ml is delivered. In obstetrics/gynecology — vaginal irrigations of 50 ml (5–7 days before delivery, 5–6 days postpartum). Avoid urinating for 2 hours after the procedure.",
      dosageStats:[{n:"50 ml",l:"irrigation volume"},{n:"2 h",l:"no urinating after"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Special instructions", p:"A hygiene product. Not a medicine. Do not reuse the irrigator tube!"},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C."},
        {h:"Shelf life · dispensing", p:"36 months. Available without prescription."}
      ],
      legal:"A hygiene product. Not a medicine. Manufacturer: LLC HVARA, Republic of Uzbekistan, 220100, Khorezm region, Urgench, I. Dusov St. 117. Tel.: +99893 594 44 64, www.hvara.uz"
    },
    it: {
      name:"Miramax",
      heroSub:"Una soluzione antisettica per uso topico, 300 ml con ugello per lavanda. Azione battericida, antifungina e antivirale.",
      introTitle:"Un antisettico ad ampio spettro",
      introText:"Miramax è una soluzione a base di benzildimetil ammonio cloruro con estratti di camomilla e aloe vera. Ha un marcato effetto battericida, antifungino e antivirale e attiva la rigenerazione. Usato in ostetricia, ginecologia e per la prevenzione individuale delle IST.",
      infoCards:[
        {h:"Formato", p:"Liquido, 300 ml in flaconi di polimero o vetro con ugelli per lavanda."},
        {h:"Composizione per 100 ml", p:"Benzildimetil[3-(miristoilammino)propil] ammonio cloruro — 10 mg<br>Estratto di camomilla — 25 mg · Estratto di aloe vera — 25 mg<br>Eccipiente: acqua depurata."}
      ],
      props:[
        {h:"Azione battericida", p:"Attivo contro batteri gram-positivi (Staphylococcus, Streptococcus, S. pneumoniae) e gram-negativi (Pseudomonas aeruginosa, E. coli, Klebsiella), aerobi e anaerobi."},
        {h:"Antifungino e antivirale", p:"Agisce su ascomiceti, lieviti e funghi simili ai lieviti (Candida albicans, tropicalis, krusei), dermatofiti; attivo contro virus complessi inclusi herpes e HIV. Agisce sui patogeni delle IST (clamidia, trichomonas, gonococchi)."},
        {h:"Rigenerazione e immunità", p:"Attiva la rigenerazione, stimola le difese attivando i fagociti e potenzia il sistema monocita-macrofago. Nessun effetto irritante locale o allergenico."}
      ],
      areas:[
        {h:"Ostetricia e ginecologia", p:"Prevenzione e trattamento di suppurazioni di traumi post-partum, ferite perineali e vaginali, infezioni post-partum, vulvovaginite, endometrite."},
        {h:"Prevenzione IST", p:"Prevenzione individuale di sifilide, gonorrea, clamidia, tricomoniasi, herpes genitale e candidosi."},
        {h:"Trattamento post-chirurgico", p:"Trattamento di vagina e utero durante il cesareo, tamponi post-operatori."},
        {h:"Venereologia", p:"Efficace se usato entro 2 ore dal rapporto."}
      ],
      dosageText:"Topico, pronto all'uso. Rimuovere il tappo, collegare l'ugello spray al flacone, attivare premendo il dosatore e introdurre in vagina pompando fino a erogare 50 ml. In ostetricia/ginecologia — irrigazioni vaginali da 50 ml (5–7 giorni prima del parto, 5–6 giorni dopo). Evitare di urinare per 2 ore dopo la procedura.",
      dosageStats:[{n:"50 ml",l:"volume irrigazione"},{n:"2 h",l:"non urinare dopo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Avvertenze", p:"Prodotto per l'igiene. Non è un medicinale. Non riutilizzare il tubo dell'irrigatore!"},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C."},
        {h:"Scadenza · vendita", p:"36 mesi. Disponibile senza ricetta."}
      ],
      legal:"Prodotto per l'igiene. Non è un medicinale. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, 220100, regione di Khorezm, Urgench, Via I. Dusov 117. Tel.: +99893 594 44 64, www.hvara.uz"
    },
    uz: {
      name:"Miramax",
      heroSub:"Mahalliy qo‘llash uchun antiseptik eritma 300 ml, sprintsovka nasadkasi bilan. Bakteritsid, zamburug‘ga qarshi va virusga qarshi ta’sir.",
      introTitle:"Keng spektrli antiseptik",
      introText:"Miramax — moychechak va aloe vera ekstraktlari bilan benzildimetil-ammoniy xlorid asosidagi eritma. Aniq ifodalangan bakteritsid, zamburug‘ga qarshi va virusga qarshi ta’sir ko‘rsatadi, regeneratsiya jarayonlarini faollashtiradi. Akusherlik, ginekologiyada va JYIYuK individual profilaktikasida qo‘llaniladi.",
      infoCards:[
        {h:"Formati", p:"Sprintsovka nasadkalari bilan polimer yoki shisha flakonlarda 300 ml suyuqlik."},
        {h:"100 ml tarkibi", p:"Benzildimetil[3-(miristoilamino)propil] ammoniy xlorid — 10 mg<br>Moychechak ekstrakti — 25 mg · Aloe vera ekstrakti — 25 mg<br>Yordamchi: tozalangan suv."}
      ],
      props:[
        {h:"Bakteritsid ta’sir", p:"Gram-musbat (Staphylococcus, Streptococcus, S. pneumoniae) va gram-manfiy (Pseudomonas aeruginosa, E. coli, Klebsiella) bakteriyalarga, aerob va anaeroblarga qarshi faol."},
        {h:"Zamburug‘ga va virusga qarshi", p:"Askomitsetlar, achitqi va achitqisimon zamburug‘lar (Candida albicans, tropicalis, krusei), dermatofitlarga ta’sir qiladi; germes va OIV shu jumladan murakkab viruslarga qarshi faol. JYIYuK qo‘zg‘atuvchilariga (xlamidiya, trixomonada, gonokokk) ta’sir qiladi."},
        {h:"Regeneratsiya va immunitet", p:"Regeneratsiya jarayonlarini faollashtiradi, fagotsitlarni faollashtirib himoya reaksiyalarini rag‘batlantiradi, monotsitar-makrofagal tizimni kuchaytiradi. Mahalliy ta’sirlantiruvchi va allergizatsiyalovchi ta’sirga ega emas."}
      ],
      areas:[
        {h:"Akusherlik va ginekologiya", p:"Tug‘ruqdan keyingi jarohatlar, oraliq va qin jarohatlari yiringlashi, tug‘ruqdan keyingi infeksiyalar, vulvovaginit, endometrit profilaktikasi va davolashda."},
        {h:"JYIYuK profilaktikasi", p:"Sifilis, gonoreya, xlamidioz, trixomoniaz, jinsiy germes va kandidozning individual profilaktikasi."},
        {h:"Operatsiyadan keyingi ishlov", p:"Kesar kesish vaqtida qin va bachadonni ishlash, operatsiyadan keyingi tamponlar."},
        {h:"Venerologiya", p:"Jinsiy aloqadan keyin 2 soatdan kechiktirmay qo‘llansa samarali."}
      ],
      dosageText:"Mahalliy, preparat qo‘llashga tayyor. Qopqoqni yeching, purkagich-nasadkani flakonga ulang, dozatorni bosib faollashtiring va 50 ml eritma kiritilguncha dozatorni bosib qinga kiriting. Akusherlik/ginekologiyada — 50 ml li qin yuvishlari (tug‘ruqdan oldin 5–7 kun, tug‘ruqdan keyingi davrda 5–6 kun). Muolajadan keyin 2 soat siymaslik tavsiya etiladi.",
      dosageStats:[{n:"50 ml",l:"yuvish hajmi"},{n:"2 soat",l:"keyin siymaslik"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Flakon tarkibidagi komponentlarga individual chidamsizlik."},
        {h:"Maxsus ko‘rsatmalar", p:"Gigiyenik vosita. Dori vositasi emas. Ishlatilgan yuvgich naychasini qayta ishlatmang!"},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda."},
        {h:"Yaroqlilik muddati · sotuv", p:"36 oy. Retseptsiz beriladi."}
      ],
      legal:"Gigiyenik vosita. Dori vositasi emas. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, 220100, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117. Tel.: +99893 594 44 64, www.hvara.uz"
    }
  }
  ,"biokoll": {
    cat: "powders",
    img: "img/prod/biokoll.webp",
    ru: {
      name:"Биоколл",
      heroSub:"Порошок в саше с коллагеном, гиалуроновой кислотой и витаминами. Красота и здоровье кожи, волос, ногтей и суставов изнутри.",
      introTitle:"Коллаген и красота изнутри",
      introText:"Биоколл — комплекс коллагена с гиалуроновой и альфа-липоевой кислотами, глутатионом, биотином, цинком, селеном и витаминами. Поддерживает упругость и гидратацию кожи, здоровье волос, ногтей и суставов, обеспечивает антиоксидантную защиту.",
      infoCards:[
        {h:"Форма выпуска", p:"Порошок для приготовления раствора, саше-пакеты."},
        {h:"Состав 1 саше", p:"Коллаген — 10 г · Гиалуроновая кислота — 100 мг · Альфа-липоевая кислота — 50 мг · Глутатион — 30 мг<br>Биотин (D-биотин) — 2,5 мг · Селен — 55 мкг · Витамин C — 250 мг · Витамин E — 250 мг<br>B3 — 16 мг · B5 — 6 мг · B6 — 1,4 мг · B12 — 2,5 мкг"}
      ],
      props:[
        {h:"Коллаген", p:"Основной структурный белок соединительной ткани. Отвечает за упругость и плотность кожи, поддерживает её состояние, улучшает состояние волос и ногтей."},
        {h:"Гиалуроновая кислота", p:"Обеспечивает гидратацию кожи, входит в состав синовиальной жидкости суставов, уменьшает дискомфорт в межпозвоночных дисках и суставах."},
        {h:"Антиоксиданты и витамины", p:"Альфа-липоевая кислота, глутатион, витамины C, E, селен — мощная антиоксидантная защита; биотин и цинк укрепляют волосы и ногти; витамины группы B поддерживают обмен веществ и сосуды."}
      ],
      areas:[
        {h:"Кожа", p:"Упругость, гидратация и молодость кожи."},
        {h:"Волосы и ногти", p:"Укрепление волос и ногтей."},
        {h:"Суставы", p:"Поддержка соединительной ткани и суставов."},
        {h:"Иммунитет и тонус", p:"Антиоксидантная защита, поддержка иммунитета, снижение утомляемости."}
      ],
      dosageText:"Содержимое 1 саше растворить в стакане (200 мл) тёплой воды и выпить во время еды 1 раз в день. Курс приёма — 1 месяц, при необходимости повторить.",
      dosageStats:[{n:"1",l:"саше в день"},{n:"1",l:"месяц курс приёма"}],
      important:[
        {h:"Противопоказания", p:"Индивидуальная непереносимость компонентов продукции."},
        {h:"Особые указания", p:"БАД. Не является лекарственным средством! Беременным и кормящим — по согласованию с врачом. Не превышать рекомендуемые дозы."},
        {h:"Условия хранения", p:"В сухом, защищённом от света месте, при температуре не выше 25 °C. Хранить в недоступном для детей месте."},
        {h:"Срок годности · отпуск", p:"24 месяца. Отпускается без рецепта."}
      ],
      legal:"БАД. Не является лекарственным средством. Перед применением рекомендуется консультация специалиста. Производитель: ООО «HVARA», Республика Узбекистан, 220100, Хорезмская обл., г. Ургенч, ул. И. Дусов, д. 117. Дистрибьютор: «БИОГЕН ФАРМ», Кыргызская Республика, г. Бишкек."
    },
    en: {
      name:"Biocoll",
      heroSub:"A powder in sachets with collagen, hyaluronic acid and vitamins. Beauty and health of skin, hair, nails and joints from within.",
      introTitle:"Collagen and beauty from within",
      introText:"Biocoll is a collagen complex with hyaluronic and alpha-lipoic acids, glutathione, biotin, zinc, selenium and vitamins. It supports skin firmness and hydration, the health of hair, nails and joints, and provides antioxidant protection.",
      infoCards:[
        {h:"Form", p:"Powder for a solution, sachets."},
        {h:"Composition per sachet", p:"Collagen — 10 g · Hyaluronic acid — 100 mg · Alpha-lipoic acid — 50 mg · Glutathione — 30 mg<br>Biotin (D-biotin) — 2.5 mg · Selenium — 55 mcg · Vitamin C — 250 mg · Vitamin E — 250 mg<br>B3 — 16 mg · B5 — 6 mg · B6 — 1.4 mg · B12 — 2.5 mcg"}
      ],
      props:[
        {h:"Collagen", p:"The main structural protein of connective tissue. Responsible for skin firmness and density and improves the condition of hair and nails."},
        {h:"Hyaluronic acid", p:"Provides skin hydration, is part of joint synovial fluid and reduces discomfort in intervertebral discs and joints."},
        {h:"Antioxidants and vitamins", p:"Alpha-lipoic acid, glutathione, vitamins C, E and selenium provide strong antioxidant protection; biotin and zinc strengthen hair and nails; B vitamins support metabolism and blood vessels."}
      ],
      areas:[
        {h:"Skin", p:"Firmness, hydration and youthful skin."},
        {h:"Hair & nails", p:"Strengthening of hair and nails."},
        {h:"Joints", p:"Support of connective tissue and joints."},
        {h:"Immunity & tone", p:"Antioxidant protection, immune support, reduced fatigue."}
      ],
      dosageText:"Dissolve the contents of 1 sachet in a glass (200 ml) of warm water and drink with meals once a day. Course: 1 month, repeat if needed.",
      dosageStats:[{n:"1",l:"sachet a day"},{n:"1",l:"month course"}],
      important:[
        {h:"Contraindications", p:"Individual intolerance to the components."},
        {h:"Special instructions", p:"Dietary supplement. Not a medicine. Pregnant and breastfeeding women — by agreement with a doctor. Do not exceed the recommended doses."},
        {h:"Storage", p:"In a dry place protected from light, at no more than 25 °C. Keep out of reach of children."},
        {h:"Shelf life · dispensing", p:"24 months. Available without prescription."}
      ],
      legal:"Dietary supplement. Not a medicine. Consultation with a specialist is recommended before use. Manufacturer: LLC HVARA, Republic of Uzbekistan, 220100, Khorezm region, Urgench, I. Dusov St. 117. Distributor: BIOGEN PHARM, Kyrgyz Republic, Bishkek."
    },
    it: {
      name:"Biocoll",
      heroSub:"Una polvere in bustine con collagene, acido ialuronico e vitamine. Bellezza e salute di pelle, capelli, unghie e articolazioni dall'interno.",
      introTitle:"Collagene e bellezza dall'interno",
      introText:"Biocoll è un complesso di collagene con acido ialuronico e alfa-lipoico, glutatione, biotina, zinco, selenio e vitamine. Sostiene la compattezza e l'idratazione della pelle, la salute di capelli, unghie e articolazioni e fornisce protezione antiossidante.",
      infoCards:[
        {h:"Formato", p:"Polvere per soluzione, bustine."},
        {h:"Composizione per bustina", p:"Collagene — 10 g · Acido ialuronico — 100 mg · Acido alfa-lipoico — 50 mg · Glutatione — 30 mg<br>Biotina (D-biotina) — 2,5 mg · Selenio — 55 mcg · Vitamina C — 250 mg · Vitamina E — 250 mg<br>B3 — 16 mg · B5 — 6 mg · B6 — 1,4 mg · B12 — 2,5 mcg"}
      ],
      props:[
        {h:"Collagene", p:"La principale proteina strutturale del tessuto connettivo. Responsabile della compattezza e densità della pelle e migliora lo stato di capelli e unghie."},
        {h:"Acido ialuronico", p:"Fornisce idratazione alla pelle, fa parte del liquido sinoviale articolare e riduce il disagio nei dischi intervertebrali e nelle articolazioni."},
        {h:"Antiossidanti e vitamine", p:"Acido alfa-lipoico, glutatione, vitamine C, E e selenio offrono una forte protezione antiossidante; biotina e zinco rafforzano capelli e unghie; le vitamine del gruppo B sostengono il metabolismo e i vasi."}
      ],
      areas:[
        {h:"Pelle", p:"Compattezza, idratazione e giovinezza della pelle."},
        {h:"Capelli e unghie", p:"Rafforzamento di capelli e unghie."},
        {h:"Articolazioni", p:"Sostegno del tessuto connettivo e delle articolazioni."},
        {h:"Immunità e tono", p:"Protezione antiossidante, sostegno immunitario, riduzione della stanchezza."}
      ],
      dosageText:"Sciogliere il contenuto di 1 bustina in un bicchiere (200 ml) di acqua tiepida e bere durante i pasti una volta al giorno. Ciclo: 1 mese, ripetibile se necessario.",
      dosageStats:[{n:"1",l:"bustina al giorno"},{n:"1",l:"mese di ciclo"}],
      important:[
        {h:"Controindicazioni", p:"Intolleranza individuale ai componenti."},
        {h:"Avvertenze", p:"Integratore alimentare. Non è un medicinale. Donne in gravidanza e allattamento — previo accordo con il medico. Non superare le dosi raccomandate."},
        {h:"Conservazione", p:"In luogo asciutto e al riparo dalla luce, a non più di 25 °C. Tenere fuori dalla portata dei bambini."},
        {h:"Scadenza · vendita", p:"24 mesi. Disponibile senza ricetta."}
      ],
      legal:"Integratore alimentare. Non è un medicinale. Si raccomanda di consultare uno specialista prima dell'uso. Produttore: LLC HVARA, Repubblica dell'Uzbekistan, 220100, regione di Khorezm, Urgench, Via I. Dusov 117. Distributore: BIOGEN PHARM, Repubblica del Kirghizistan, Bishkek."
    },
    uz: {
      name:"Biocoll",
      heroSub:"Kollagen, gialuron kislotasi va vitaminlar bilan sashedagi kukun. Teri, soch, tirnoq va bo‘g‘imlarning ichdan go‘zalligi va salomatligi.",
      introTitle:"Kollagen va ichdan go‘zallik",
      introText:"Biocoll — gialuron va alfa-lipoy kislotalari, glutation, biotin, rux, selen va vitaminlar bilan kollagen majmuasi. Teri elastikligi va namligini, soch, tirnoq va bo‘g‘imlar salomatligini qo‘llab-quvvatlaydi, antioksidant himoya beradi.",
      infoCards:[
        {h:"Formati", p:"Eritma tayyorlash uchun kukun, sashe-paketlar."},
        {h:"1 sashe tarkibi", p:"Kollagen — 10 g · Gialuron kislotasi — 100 mg · Alfa-lipoy kislotasi — 50 mg · Glutation — 30 mg<br>Biotin (D-biotin) — 2,5 mg · Selen — 55 mkg · C vitamini — 250 mg · E vitamini — 250 mg<br>B3 — 16 mg · B5 — 6 mg · B6 — 1,4 mg · B12 — 2,5 mkg"}
      ],
      props:[
        {h:"Kollagen", p:"Biriktiruvchi to‘qimaning asosiy struktura oqsili. Teri elastikligi va zichligi uchun javobgar, uning holatini qo‘llab-quvvatlaydi, soch va tirnoq holatini yaxshilaydi."},
        {h:"Gialuron kislotasi", p:"Teri namligini ta’minlaydi, bo‘g‘imlar sinovial suyuqligi tarkibiga kiradi, umurtqalararo disklar va bo‘g‘imlardagi noqulaylikni kamaytiradi."},
        {h:"Antioksidantlar va vitaminlar", p:"Alfa-lipoy kislotasi, glutation, C, E vitaminlari, selen — kuchli antioksidant himoya; biotin va rux soch va tirnoqni mustahkamlaydi; B guruhi vitaminlari modda almashinuvi va tomirlarni qo‘llab-quvvatlaydi."}
      ],
      areas:[
        {h:"Teri", p:"Teri elastikligi, namligi va yoshligi."},
        {h:"Soch va tirnoq", p:"Soch va tirnoqni mustahkamlash."},
        {h:"Bo‘g‘imlar", p:"Biriktiruvchi to‘qima va bo‘g‘imlarni qo‘llab-quvvatlash."},
        {h:"Immunitet va tetiklik", p:"Antioksidant himoya, immunitetni qo‘llab-quvvatlash, charchoqni kamaytirish."}
      ],
      dosageText:"1 sashe tarkibini bir stakan (200 ml) iliq suvda eritib, kuniga 1 marta ovqat vaqtida iching. Kurs — 1 oy, zarur bo‘lganda takrorlang.",
      dosageStats:[{n:"1",l:"sashe kuniga"},{n:"1",l:"oylik kurs"}],
      important:[
        {h:"Qarshi ko‘rsatmalar", p:"Mahsulot komponentlariga individual chidamsizlik."},
        {h:"Maxsus ko‘rsatmalar", p:"BAD. Dori vositasi emas! Homilador va emizuvchilarga — shifokor bilan kelishilgan holda. Tavsiya etilgan dozalardan oshirmang."},
        {h:"Saqlash sharoiti", p:"Quruq, yorug‘likdan himoyalangan joyda, 25 °C dan yuqori bo‘lmagan haroratda. Bolalar yeta olmaydigan joyda saqlang."},
        {h:"Yaroqlilik muddati · sotuv", p:"24 oy. Retseptsiz beriladi."}
      ],
      legal:"BAD. Dori vositasi emas. Qo‘llashdan oldin mutaxassis bilan maslahatlashish tavsiya etiladi. Ishlab chiqaruvchi: LLC HVARA, O‘zbekiston Respublikasi, 220100, Xorazm viloyati, Urganch, I. Dusov ko‘chasi 117. Distribyutor: «BIOGEN FARM», Qirg‘iziston Respublikasi, Bishkek."
    }
  }

};
