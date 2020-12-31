
var promoImages = ["/images/homepage/00001.gif", "/images/homepage/00214.gif", "/images/homepage/00313.gif", "/images/homepage/00760.gif"];
var containerElem = document.getElementById("home_img");
var idx = (promoImages.length > 1 ? Math.floor(Math.random() * promoImages.length) : 0);
var promo = promoImages[idx];
containerElem.innerHTML = '<img src="' + promo + '">';
