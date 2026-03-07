const translations = {

en: {
title: "Imperial Crown Bakery",
subtitle: "Traditional Armenian Lavash & Bakery Products",
productsBtn: "Products",
contactBtn: "Contact"
},

ru: {
title: "Пекарня Imperial Crown",
subtitle: "Традиционный армянский лаваш и хлебобулочные изделия",
productsBtn: "Продукты",
contactBtn: "Контакты"
},

hy: {
title: "Imperial Crown Հացատուն",
subtitle: "Հայկական լավաշ և թարմ հացաբուլկեղեն",
productsBtn: "Ապրանքներ",
contactBtn: "Կապ"
},

ar: {
title: "مخبز الإمبراطورية كراون",
subtitle: "خبز لافاش أرمني ومنتجات مخبوزة طازجة",
productsBtn: "المنتجات",
contactBtn: "اتصل بنا"
}

}

function setLanguage(lang){

localStorage.setItem("siteLang", lang)

document.getElementById("title").innerText = translations[lang].title
document.getElementById("subtitle").innerText = translations[lang].subtitle
document.getElementById("productsBtn").innerText = translations[lang].productsBtn
document.getElementById("contactBtn").innerText = translations[lang].contactBtn

}

window.onload = function(){

let lang = localStorage.getItem("siteLang") || "en"

setLanguage(lang)

}
