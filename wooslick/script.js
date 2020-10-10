
$(document).ready(function() {
$(".kirman_kategori").slideUp()
$(".kirman_btn_kategori").click(function() {
$(".kirman_kategori").slideToggle()
});
//Add aos into element
$('.kirman_page .products .product').attr('data-aos', 'fade-up');
$('.kirman_page img').attr('data-aos', 'flip-right');
$(".kirman_categ img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAKE0lEQVR4Ae3ZYUpcURCE0YzM/pfnanQm4AKk4OmtKTn5m46vc/ryQcjt/f39+c8vAgQIDAi8DexoRQIECHwJCJaHQIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDAjIBgzZzKogQICJY3QIDA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")
$(".baner1 img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAC0CAYAAAAuPxHvAAAFRUlEQVR4Ae3UgQkAIAwDQXX/+bqOgls8XCcIl5I9M3c5AgQIBAROIKOIBAgQ+AIGyyMQIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQOABt9QE6QQH+94AAAAASUVORK5CYII=")
//Add element to my account
$('<li><a href="/wp-admin/profile.php">Edit profile</a></li>').insertAfter(".woocommerce-MyAccount-navigation ul li.woocommerce-MyAccount-navigation-link--dashboard")
});
//SIDENAV
$(document).ready(function() {
$(".kirman-btn-sidenav").click(function() {
$(".kirman_sidenav").addClass("kirman_sidenav_active")
$(".kirman_overlay").addClass("kirman_overlay_active")
});
});
$(document).ready(function() {
$(".kirman_overlay, .kirman_sidenav a").click(function() {
$(".kirman_sidenav").removeClass("kirman_sidenav_active")
$(".kirman_overlay").removeClass("kirman_overlay_active")
});
//Cart kirman
$(".kirman_cart_ajax_con").slideUp()
$(".kirman_cart").click(function() {
$(".kirman_cart_ajax_con").slideToggle()
});
});

// Mengatur waktu akhir perhitungan mundur
var kirman_get_flash_deal = $(".kirman_get_flash_deal").text();
var countDownDate = new Date(kirman_get_flash_deal).getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

// Untuk mendapatkan tanggal dan waktu hari ini
var now = new Date().getTime();

// Temukan jarak antara sekarang dan tanggal hitung mundur
var distance = countDownDate - now;

// Perhitungan waktu untuk hari, jam, menit dan detik
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Keluarkan hasil dalam elemen dengan id = "kirman_time_count_down"
document.getElementById("kirman_time_count_down").innerHTML = days + "<div class='k_day'>:</div>" + hours + "<div class='k_hour'>:</div>"
+ minutes + "<div class='k_menit'>:</div>" + seconds + "<div class='k_second'></div>";

// Jika hitungan mundur selesai, tulis beberapa teks
if (distance < 0) {
clearInterval(x);
document.getElementById("kirman_time_count_down").innerHTML = "EXPIRED";
}
}, 1000);

/* Whatsapp Settings */
var kirman_wa_telpon = $("#kirman_wa_telpon").text();

var walink = 'https://web.whatsapp.com/send',
phone = kirman_wa_telpon,
walink2 = 'Asalamualaikum kak 🙏😁',
text_yes = 'Terkirim.',
text_no = 'Isi semua Formulir lalu klik Send.';
$(document).on('click', '.send_form', function() {
var input_kirman = document.getElementById('wa_email');

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if ("" != input_kirman.value) {

/* Call Input Form */
var
input_name1 = $("#wa_name").val(),
input_email1 = $("#wa_email").val(),
input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var kirman_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
'*Name* : ' + input_name1 + '%0A' +
'*Email Address* : ' + input_email1 + '%0A' +
'*Pesan Singkat* : ' + input_textarea1 + '%0A';

/* Whatsapp Window Open */
window.open(kirman_whatsapp, '_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});

$(document).ready(function() {
$("#kirman_pria").appendTo("#kirman_pria_target");
//Pindahkan slider ke short code
$("#slider").appendTo(".slider_target");
//Pindahkan popular produk ke short code
$("#produk_populer_src").appendTo(".produk_popular_target");
//Pindahkan popular produk dari short code ke target ingin di tampilkan
$(".produk_popular_target").appendTo(".produk_popular_target_1");
//Pindahkan flash deal ke function
$(".flash_deal").appendTo(".kirman_flash_deal_target");
//Chat WhatsApp onclick
$("#chat_me, #chat_me1").click(function() {
$(".wa_wrap").fadeIn()
$(".overlay").fadeIn()
});
$(".btn_wa_close").click(function() {
$(".wa_wrap").fadeOut()
$(".overlay").fadeOut()
});
//Notif onclick
$(".btn_notif").click(function() {
$(".kirman_notif_wrap").fadeIn()
$(".overlay").fadeIn()
});
$(".overlay, .kirman_notif_wrap").click(function() {
$(".wa_wrap, .kirman_notif_wrap").fadeOut()
$(".overlay").fadeOut()
});
//Mengubah warna review bar pada plugin yith advanced review
$(".ywar_review_row span.ywar_perc_rating").css('background', '#ffbe00')
//Agar bintang review di tengah yith advanced review plugin
$(".product .star-rating").css('display', 'flex')
$(".product .star-rating").css('align-items', 'center')
$(".product .star-rating").css('jusify-content', 'center')
$(".product .star-rating").css('margin', 'auto')
$(".product .star-rating").css('margin-bottom', '5px')
$(".products .product .onsale").css({
'top': '10px', 'right': "10px", "padding": "0px", "border-radius": "5px"
})
//woocommerce biling input
$(".woocommerce-billing-fields__field-wrapper input, .woocommerce-shipping-fields input").css('background', '#fff')
$(".woocommerce-billing-fields__field-wrapper input, .woocommerce-shipping-fields input").css('padding', '10px')
$(".woocommerce-billing-fields__field-wrapper input, .woocommerce-shipping-fields input").css('border-radius', '10px')
$(".woocommerce-billing-fields__field-wrapper select, .woocommerce-shipping-fields select").css('border-radius', '10px')
$(".woocommerce-billing-fields__field-wrapper select, .woocommerce-shipping-fields select").css('background', '#fff')
$(".woocommerce-billing-fields__field-wrapper select, .woocommerce-shipping-fields select").css('padding', '10px')
$(".woocommerce-billing-fields__field-wrapper select, .woocommerce-shipping-fields select").css('border', '1px solid rgba(0,0,0,0.10)')
//Tampilan kupon
$(".checkout_coupon").css('display', 'block')
$(".checkout_coupon").css('border-radius', '10px')
$(".checkout_coupon input").css('background', '#fff')
//Ubah Woocommerce mesegage menjadi fadeout dalam beberapa detik
var waktu_menghilang = 4000; // 4 second
setTimeout(function() {
$('.woocommerce-message').fadeOut();
}, waktu_menghilang);
//Slider
$(".slider").slick({
infinite: true,
autoplay: true,
autoplaySpeed: 1000,
dots: true,
speed: 300,
dots: false,
slidesToShow: 1,
slidesToScroll: 1,
prevArrow: false,
nextArrow: false,
lazyLoad: 'progressive',
});

//Slider kirman_flash_item_con
$(".kirman_flash_item_con").slick({
infinite: true,
autoplay: true,
autoplaySpeed: 1000,
dots: true,
speed: 300,
dots: false,
slidesToShow: 3,
slidesToScroll: 1,
prevArrow: false,
nextArrow: false,
lazyLoad: 'progressive',
});


});
//loader
function myFunction() {
myVar = setTimeout(showPage,
500);
}
function showPage() {
$('#preloader').fadeOut("easing");
}
//lazyload gambar
function ignielLazyLoad() {
eval(function(p, a, c, k, e, d) {
e = function(c) {
return(c < a?'': e(parseInt(c/a)))+((c = c%a) > 35?String.fromCharCode(c+29): c.toString(36))}; if (!''.replace(/^/, String)) {
while (c--) {
d[e(c)] = k[c] || e(c)}k = [function(e) {
return d[e]}]; e = function() {
return'\\w+'
}; c = 1
}; while (c--) {
if (k[c]) {
p = p.replace(new RegExp('\\b'+e(c)+'\\b', 'g'), k[c])}}return p
}('u B(){Y(v e=o.1r("B"),t=0;t<e.1q;t++)Q(e[t])&&(e[t].N=e[t].1p("1n-N"))}u Q(e){v t=e.1t();Z t.1x>=0&&t.1w>=0&&t.1v<=(y.1u||o.T.1m)&&t.1k<=(y.1c||o.T.1b)}v b=["\\r\\m\\m\\D\\G\\a\\f\\c\\M\\n\\p\\c\\a\\f\\a\\k","\\h\\f","\\r\\c\\c\\r\\l\\A\\D\\G\\a\\f\\c","\\g\\h\\r\\m","\\p\\l\\k\\h\\g\\g","\\V\\1a\\1e\\R\\h\\f\\c\\a\\f\\c\\M\\h\\r\\m\\a\\m","\\w\\p\\a\\1l\\p\\c\\k\\n\\l\\c","\\r","\\1f\\w\\a\\k\\L\\1j\\a\\g\\a\\l\\c\\h\\k\\W\\g\\g","\\g\\a\\f\\q\\c\\A","\\w\\p\\a\\k\\W\\q\\a\\f\\c","\\c\\a\\p\\c","\\m\\h\\l\\w\\F\\a\\f\\c\\D\\g\\a\\F\\a\\f\\c","\\1i\\h\\m\\L","\\l\\g\\n\\l\\1g","\\p\\l\\k\\h\\g\\g\\1h\\h\\J","\\c\\h\\J","\\q\\a\\c\\S\\h\\w\\f\\m\\n\\f\\q\\R\\g\\n\\a\\f\\c\\1z\\a\\l\\c","\\A\\k\\a\\X","\\a\\1y\\a\\l","\\q\\a\\c\\D\\g\\a\\F\\a\\f\\c\\S\\L\\1F\\m","\\p\\l\\k\\h\\g\\g\\U\\a\\n\\q\\A\\c","\\n\\f\\f\\a\\k\\U\\a\\n\\q\\A\\c","\\J\\k\\a\\G\\a\\f\\c\\V\\a\\X\\r\\w\\g\\c","\\n\\c\\a\\F"];u I(d,j){y[b[0]]?y[b[0]](d,j):y[b[2]](b[1]+d,j)}I(b[3],B),I(b[4],B),o[b[0]](b[5],u(){b[6];Y(v d=o[b[8]](b[7]),j=d[b[9]],s=/1D|1B/i[b[11]](1G[b[10]])?o[b[12]]:o[b[13]],C=u(d,j,s,C){Z(d/=C/2)<1?s/2*d*d*d+j:s/2*((d-=2)*d*d+2)+j};j--;){d[b[1C]](j)[b[0]](b[14],u(d){v j,E=s[b[15]],x=o[b[1A]](/[^#]+$/[b[19]](1H[b[18]])[0])[b[17]]()[b[16]],z=s[b[1d]]-y[b[1s]],O=z>E+x?x:z-E,K=1o,H=u(d){j=j||d;v x=d-j,z=C(x,E,O,K);s[b[15]]=z,K>x&&P(H)};P(H),d[b[1E]]()})}});', 62, 106, '||||||||||x65|_0x1b5d|x74|_0xdd48x2||x6E|x6C|x6F||_0xdd48x3|x72|x63|x64|x69|document|x73|x67|x61|_0xdd48x4||function|var|x75|_0xdd48x7|window|_0xdd48x8|x68|lazy|_0xdd48x5|x45|_0xdd48x6|x6D|x76|_0xdd48xb|registerListener|x70|_0xdd48xa|x79|x4C|src|_0xdd48x9|requestAnimationFrame|isInViewport|x43|x42|documentElement|x48|x44|x41|x66|for|return|||||||||||x4F|clientWidth|innerWidth|21|x4D|x71|x6B|x54|x62|x53|left|x20|clientHeight|data|900|getAttribute|length|getElementsByClassName|22|getBoundingClientRect|innerHeight|top|right|bottom|x78|x52|20|trident|24|firefox|23|x49|navigator|this'.split('|'), 0, {}));
} eval(function(p, a, c, k, e, d) {
e = function(c) {
return c.toString(36)}; if (!''.replace(/^/, String)) {
while (c--) {
d[c.toString(a)] = k[c] || c.toString(a)}k = [function(e) {
return d[e]}]; e = function() {
return'\\w+'
}; c = 1
}; while (c--) {
if (k[c]) {
p = p.replace(new RegExp('\\b'+e(c)+'\\b', 'g'), k[c])}}return p
}('j 4=["\\7\\9\\9\\e\\d\\a\\b\\8\\i\\g\\h\\8\\a\\b\\a\\k","\\f\\c\\7\\9","\\7\\8\\8\\7\\m\\l\\e\\d\\a\\b\\8","\\c\\b\\f\\c\\7\\9"];5[4[0]]?5[4[0]](4[1],6,!1):5[4[2]]?5[4[2]](4[1],6):5[4[3]]=6;5[4[0]]?5[4[0]](4[1],6,!1):5[4[2]]?5[4[2]](4[1],6):5[4[3]]=6;', 23, 23, '||||_0xdfb4|window|ignielLazyLoad|x61|x74|x64|x65|x6E|x6F|x76|x45|x6C|x69|x73|x4C|var|x72|x68|x63'.split('|'), 0, {}));
// Aos
!function(e, t) {
"object" == typeof exports && "object" == typeof module?module.exports = t(): "function" == typeof define && define.amd?define([],
t): "object" == typeof exports?exports.AOS = t(): e.AOS = t()}(this, function() {
return function(e) {
function t(o) {
if (n[o])return n[o].exports; var i = n[o] = {
exports: {},
id: o,
loaded: !1
}; return e[o].call(i.exports, i, i.exports, t),
i.loaded=!0,
i.exports
}var n = {}; return t.m = e,
t.c = n,
t.p = "dist/",
t(0)}([function(e, t, n) {
"use strict"; function o(e) {
return e && e.__esModule?e: {
default: e
}}var i = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
var n = arguments[t]; for (var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])}return e
},
r = n(1),
a = (o(r), n(6)),
u = o(a),
c = n(7),
s = o(c),
f = n(8),
d = o(f),
l = n(9),
p = o(l),
m = n(10),
b = o(m),
v = n(11),
y = o(v),
g = n(14),
h = o(g),
w = [],
k=!1,
x = {
offset: 120,
delay: 0,
easing: "ease",
duration: 400,
disable: !1,
once: !1,
startEvent: "DOMContentLoaded",
throttleDelay: 99,
debounceDelay: 50,
disableMutationObserver: !1
},
j = function() {
var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (e && (k=!0), k)return w = (0, y.default)(w, x),
(0, b.default)(w, x.once),
w
},
O = function() {
w = (0, h.default)(),
j()},
M = function() {
w.forEach(function(e, t) {
e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")})},
S = function(e) {
return e===!0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e()===!0
},
_ = function(e) {
x = i(x, e),
w = (0, h.default)(); var t = document.all&&!window.atob; return S(x.disable) || t?M(): (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver=!0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState)>-1?j(!0): "load" === x.startEvent?window.addEventListener(x.startEvent, function() {
j(!0)}): document.addEventListener(x.startEvent, function() {
j(!0)}), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {(0, b.default)(w, x.once)}, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w)}; e.exports = {
init: _,
refresh: j,
refreshHard: O
}},
function(e, t) {},,,,,function(e, t) {(function(t) {
"use strict"; function n(e, t, n) {
function o(t) {
var n = b, o = v; return b = v = void 0, k = t, g = e.apply(o, n)}function r(e) {
return k = e, h = setTimeout(f, t), M?o(e): g
}function a(e) {
var n = e-w, o = e-k, i = t-n; return S?j(i, y-o): i
}function c(e) {
var n = e-w, o = e-k; return void 0 === w || n >= t || n < 0 || S && o >= y
}function f() {
var e = O(); return c(e)?d(e): void(h = setTimeout(f, a(e)))}function d(e) {
return h = void 0, _ && b?o(e): (b = v = void 0, g)}function l() {
void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
}function p() {
return void 0 === h?g: d(O())}function m() {
var e = O(), n = c(e); if (b = arguments, v = this, w = e, n) {
if (void 0 === h)return r(w); if (S)return h = setTimeout(f, t),
o(w)}return void 0 === h && (h = setTimeout(f, t)),
g
}var b,
v,
y,
g,
h,
w,
k = 0,
M=!1,
S=!1,
_=!0; if ("function" != typeof e)throw new TypeError(s); return t = u(t) || 0,
i(n) && (M=!!n.leading, S = "maxWait"in n, y = S?x(u(n.maxWait) || 0, t): y, _ = "trailing"in n?!!n.trailing: _),
m.cancel = l,
m.flush = p,
m
}function o(e, t, o) {
var r=!0,
a=!0; if ("function" != typeof e)throw new TypeError(s); return i(o) && (r = "leading"in o?!!o.leading: r, a = "trailing"in o?!!o.trailing: a),
n(e, t, {
leading: r, maxWait: t, trailing: a
})}function i(e) {
var t = "undefined" == typeof e?"undefined": c(e); return!!e && ("object" == t || "function" == t)}function r(e) {
return!!e && "object" == ("undefined" == typeof e?"undefined": c(e))}function a(e) {
return"symbol" == ("undefined" == typeof e?"undefined": c(e)) || r(e) && k.call(e) == d
}function u(e) {
if ("number" == typeof e)return e; if (a(e))return f; if (i(e)) {
var t = "function" == typeof e.valueOf?e.valueOf(): e; e = i(t)?t+"": t
}if ("string" != typeof e)return 0 === e?e: +e; e = e.replace(l, ""); var n = m.test(e); return n || b.test(e)?v(e.slice(2), n?2: 8): p.test(e)?f: +e
}var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator?function(e) {
return typeof e
}:function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype?"symbol": typeof e
},
s = "Expected a function",
f = NaN,
d = "[object Symbol]",
l = /^\s+|\s+$/g,
p = /^[-+]0x[0-9a-f]+$/i,
m = /^0b[01]+$/i,
b = /^0o[0-7]+$/i,
v = parseInt,
y = "object" == ("undefined" == typeof t?"undefined": c(t)) && t && t.Object === Object && t,
g = "object" == ("undefined" == typeof self?"undefined": c(self)) && self && self.Object === Object && self,
h = y || g || Function("return this")(),
w = Object.prototype,
k = w.toString,
x = Math.max,
j = Math.min,
O = function() {
return h.Date.now()}; e.exports = o
}).call(t,
function() {
return this
}())}, function(e,
t) {(function(t) {
"use strict"; function n(e, t, n) {
function i(t) {
var n = b,
o = v; return b = v = void 0,
O = t,
g = e.apply(o, n)}function r(e) {
return O = e,
h = setTimeout(f, t),
M?i(e): g
}function u(e) {
var n = e-w,
o = e-O,
i = t-n; return S?x(i, y-o): i
}function s(e) {
var n = e-w,
o = e-O; return void 0 === w || n >= t || n < 0 || S && o >= y
}function f() {
var e = j(); return s(e)?d(e): void(h = setTimeout(f, u(e)))}function d(e) {
return h = void 0,
_ && b?i(e): (b = v = void 0, g)}function l() {
void 0 !== h && clearTimeout(h),
O = 0,
b = w = v = h = void 0
}function p() {
return void 0 === h?g: d(j())}function m() {
var e = j(),
n = s(e); if (b = arguments, v = this, w = e, n) {
if (void 0 === h)return r(w); if (S)return h = setTimeout(f, t),
i(w)}return void 0 === h && (h = setTimeout(f, t)),
g
}var b,
v,
y,
g,
h,
w,
O = 0,
M=!1,
S=!1,
_=!0; if ("function" != typeof e)throw new TypeError(c); return t = a(t) || 0,
o(n) && (M=!!n.leading, S = "maxWait"in n, y = S?k(a(n.maxWait) || 0, t): y, _ = "trailing"in n?!!n.trailing: _),
m.cancel = l,
m.flush = p,
m
}function o(e) {
var t = "undefined" == typeof e?"undefined": u(e); return!!e && ("object" == t || "function" == t)}function i(e) {
return!!e && "object" == ("undefined" == typeof e?"undefined": u(e))}function r(e) {
return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
AOS.init();
</script>
<script type="text/javascript" charset="utf-8">
//Lightgallery lightbox
!function(e) {
if ("object" == typeof exports && "undefined" != typeof module)module.exports = e(); else if ("function" == typeof define && define.amd)define([], e); else {("undefined" != typeof window?window: "undefined" != typeof global?global: "undefined" != typeof self?self: this).Lightgallery = e()}}(function() {
return function() {
return function e(t, s, l) {
function i(r, a) {
if (!s[r]) {
if (!t[r]) {
var d = "function" == typeof require && require; if (!a && d)return d(r, !0); if (o)return o(r, !0); var n = new Error("Cannot find module '"+r+"'"); throw n.code = "MODULE_NOT_FOUND",
n
}var u = s[r] = {
exports: {}}; t[r][0].call(u.exports, function(e) {
return i(t[r][1][e] || e)}, u, u.exports, e, t, s, l)}return s[r].exports
}for (var o = "function" == typeof require && require, r = 0; r < l.length; r++)i(l[r]); return i
}}()({
1: [function(e, t, s) {
!function(e, t) {
if (void 0 !== s)t(s); else {
var l = {
exports: {}}; t(l.exports),
e.lgUtils = l.exports
}}(this, function(e) {
"use strict"; Object.defineProperty(e, "__esModule", {
value: !0
}); var t = {
getAttribute: function(e, t) {
return e[t]}, setAttribute: function(e, t, s) {
e[t] = s
}, wrap: function(e, t) {
if (e) {
var s = document.createElement("div"); s.className = t,
e.parentNode.insertBefore(s, e),
e.parentNode.removeChild(e),
s.appendChild(e)}},
addClass: function(e, t) {
e && (e.classList?e.classList.add(t): e.className += " "+t)},
removeClass: function(e, t) {
e && (e.classList?e.classList.remove(t): e.className = e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)", "gi"), " "))},
hasClass: function(e, t) {
return e.classList?e.classList.contains(t): new RegExp("(^| )"+t+"( |$)", "gi").test(e.className)},
setVendor: function(e, t, s) {
e && (e.style[t.charAt(0).toLowerCase()+t.slice(1)] = s, e.style["webkit"+t] = s, e.style["moz"+t] = s, e.style["ms"+t] = s, e.style["o"+t] = s)},
trigger: function(e, t) {
var s = arguments.length > 2 && void 0 !== arguments[2]?arguments[2]: null; if (e) {
var l = new CustomEvent(t, {
detail: s
}); e.dispatchEvent(l)}},
Listener: {
uid: 0
},
on: function(e, s, l) {
var i = this; e && s.split(" ").forEach(function(s) {
var o = i.getAttribute(e, "lg-event-uid") || ""; t.Listener.uid++, o += "&"+t.Listener.uid, i.setAttribute(e, "lg-event-uid", o), t.Listener[s+t.Listener.uid] = l, e.addEventListener(s.split(".")[0], l, !1)})},
off: function(e, s) {
if (e) {
var l = this.getAttribute(e, "lg-event-uid"); if (l) {
l = l.split("&"); for (var i = 0; i < l.length; i++)if (l[i]) {
var o = s+l[i]; if ("." === o.substring(0, 1))for (var r in t.Listener)t.Listener.hasOwnProperty(r) && r.split(".").indexOf(o.split(".")[1])>-1 && (e.removeEventListener(r.split(".")[0], t.Listener[r]), this.setAttribute(e, "lg-event-uid", this.getAttribute(e, "lg-event-uid").replace("&"+l[i], "")), delete t.Listener[r]); else e.removeEventListener(o.split(".")[0], t.Listener[o]),
this.setAttribute(e, "lg-event-uid", this.getAttribute(e, "lg-event-uid").replace("&"+l[i], "")),
delete t.Listener[o]}}}},
param: function(e) {
return Object.keys(e).map(function(t) {
return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}}; e.default = t
})}, {}], 2: [function(e,
t,
s) {
!function(t,
l) {
if (void 0 !== s)l(e("./lg-utils")); else {
l(t.lgUtils),
t.lightgallery = {}}}(this, function(e) {
"use strict"; var t, s = (t = e) && t.__esModule?t: {
default: t
}; var l = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
var s = arguments[t]; for (var l in s)Object.prototype.hasOwnProperty.call(s, l) && (e[l] = s[l])}return e
}; !function() {
if ("function" == typeof window.CustomEvent)return!1; function e(e, t) {
t = t || {
bubbles: !1,
cancelable: !1,
detail: void 0
}; var s = document.createEvent("CustomEvent"); return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
s
}e.prototype = window.Event.prototype,
window.CustomEvent = e
}(),
window.utils = s.default,
window.lgData = {
uid: 0
},
window.lgModules = {}; var i = {
mode: "lg-slide",
cssEasing: "ease",
easing: "linear",
speed: 600,
height: "100%",
width: "100%",
addClass: "",
startClass: "lg-start-zoom",
backdropDuration: 150,
hideBarsDelay: 6e3,
useLeft: !1,
ariaLabelledby: "",
ariaDescribedby: "",
closable: !0,
loop: !0,
escKey: !0,
keyPress: !0,
controls: !0,
slideEndAnimatoin: !0,
hideControlOnEnd: !1,
mousewheel: !1,
getCaptionFromTitleOrAlt: !0,
appendSubHtmlTo: ".lg-sub-html",
subHtmlSelectorRelative: !1,
preload: 1,
showAfterLoad: !0,
selector: "",
selectWithin: "",
nextHtml: "",
prevHtml: "",
index: !1,
iframeMaxWidth: "100%",
download: !0,
counter: !0,
appendCounterTo: ".lg-toolbar",
swipeThreshold: 50,
enableSwipe: !0,
enableDrag: !0,
dynamic: !1,
dynamicEl: [],
galleryId: 1
}; function o(e, t) {
if (this.el = e, this.s = l({}, i, t), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array."; return this.modules = {},
this.lGalleryOn=!1,
this.lgBusy=!1,
this.hideBartimeout=!1,
this.isTouch = "ontouchstart"in document.documentElement,
this.s.slideEndAnimatoin && (this.s.hideControlOnEnd=!1),
this.items = [],
this.s.dynamic?this.items = this.s.dynamicEl: "this" === this.s.selector?this.items.push(this.el): "" !== this.s.selector?this.s.selectWithin?this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector): this.items = this.el.querySelectorAll(this.s.selector): this.items = this.el.children,
this.___slide = "",
this.outer = "",
this.init(),
this
}o.prototype.init = function() {
var e = this; e.s.preload > e.items.length && (e.s.preload = e.items.length); var t = window.location.hash; if (t.indexOf("lg="+this.s.galleryId) > 0 && (e.index = parseInt(t.split("&slide=")[1], 10), s.default.addClass(document.body, "lg-from-hash"), s.default.hasClass(document.body, "lg-on") || (s.default.addClass(document.body, "lg-on"), setTimeout(function() {
e.build(e.index)}))), e.s.dynamic)s.default.trigger(this.el, "onBeforeOpen"),
e.index = e.s.index || 0,
s.default.hasClass(document.body, "lg-on") || (s.default.addClass(document.body, "lg-on"), setTimeout(function() {
e.build(e.index)})); else for (var l = 0; l < e.items.length; l++)!function(t) {
s.default.on(e.items[t], "click.lgcustom", function(l) {
l.preventDefault(), s.default.trigger(e.el, "onBeforeOpen"), e.index = e.s.index || t, s.default.hasClass(document.body, "lg-on") || (e.build(e.index), s.default.addClass(document.body, "lg-on"))})}(l)},
o.prototype.build = function(e) {
var t = this; for (var l in t.structure(), window.lgModules)t.modules[l] = new window.lgModules[l](t.el); t.slide(e, !1, !1),
t.s.keyPress && t.keyPress(),
t.items.length > 1 && (t.arrow(), setTimeout(function() {
t.enableDrag(), t.enableSwipe()}, 50), t.s.mousewheel && t.mousewheel()),
t.counter(),
t.closeGallery(),
s.default.trigger(t.el, "onAfterOpen"),
s.default.on(t.outer, "mousemove.lg click.lg touchstart.lg", function() {
s.default.removeClass(t.outer, "lg-hide-items"), clearTimeout(t.hideBartimeout), t.hideBartimeout = setTimeout(function() {
s.default.addClass(t.outer, "lg-hide-items")}, t.s.hideBarsDelay)})},
o.prototype.structure = function() {
var e,
t = "",
l = "",
i = 0,
o = "",
r = this; for (document.body.insertAdjacentHTML("beforeend", '<div class="lg-backdrop"></div>'), s.default.setVendor(document.querySelector(".lg-backdrop"), "TransitionDuration", this.s.backdropDuration+"ms"), i = 0; i < this.items.length; i++)t += '<div class="lg-item"></div>'; if (this.s.controls && this.items.length > 1 && (l = '<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div role="status" aria-live="polite" class="lg-sub-html"></div>'), e = '<div tabindex="-1" aria-modal="true" '+(this.s.ariaLabelledby?'aria-labelledby="'+this.s.ariaLabelledby+'"': "")+" "+(this.s.ariaDescribedby?'aria-describedby="'+this.s.ariaDescribedby+'"': "")+' role="dialog" class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+t+'</div><div class="lg-toolbar group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>'+l+o+"</div></div>", document.body.insertAdjacentHTML("beforeend",e),this.outer=document.querySelector(".lg-outer"),this.outer.focus(),this.___slide=this.outer.querySelectorAll(".lg-item"),this.s.useLeft?(s.default.addClass(this.outer,"lg-use-left"),this.s.mode="lg-slide"):s.default.addClass(this.outer,"lg-use-css3"),r.setTop(),s.default.on(window,"resize.lg orientationchange.lg",function(){setTimeout(function(){r.setTop()},100)}),s.default.addClass(this.___slide[this.index],"lg-current"),this.doCss()?s.default.addClass(this.outer,"lg-css3"):(s.default.addClass(this.outer,"lg-css"),this.s.speed=0),s.default.addClass(this.outer,this.s.mode),this.s.enableDrag&&this.items.length>1&&s.default.addClass(this.outer,"lg-grab"),this.s.showAfterLoad&&s.default.addClass(this.outer,"lg-show-after-load"),this.doCss()){var a=this.outer.querySelector(".lg-inner");s.default.setVendor(a,"TransitionTimingFunction",this.s.cssEasing),s.default.setVendor(a,"TransitionDuration",this.s.speed+"ms")}setTimeout(function(){s.default.addClass(document.querySelector(".lg-backdrop"),"in")}),setTimeout(function(){s.default.addClass(r.outer,"lg-visible")},this.s.backdropDuration),this.s.download&&this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop},o.prototype.setTop=function(){if("100%"!==this.s.height){var e=window.innerHeight,t=(e-parseInt(this.s.height,10))/2,s=this.outer.querySelector(".lg");e>=parseInt(this.s.height,10)?s.style.top=t+"px":s.style.top="0px"}},o.prototype.doCss=function(){return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,s=0;for(s=0;s<e.length;s++)if(e[s]in t.style)return!0}()},o.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.items[t].getAttribute("data-html"),!e&&s)return{html5:!0};var l=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),i=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return l?{youtube:l}:i?{vimeo:i}:o?{dailymotion:o}:r?{vk:r}:void 0},o.prototype.counter=function(){this.s.counter&&this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")},o.prototype.addHtml=function(e){var t,l=null;if(this.s.dynamic?l=this.s.dynamicEl[e].subHtml:(l=(t=this.items[e]).getAttribute("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!l&&(l=t.getAttribute("title"))&&t.querySelector("img")&&(l=t.querySelector("img").getAttribute("alt"))),null!=l){var i=l.substring(0,1);"."!==i&&"#"!==i||(l=this.s.subHtmlSelectorRelative&&!this.s.dynamic?t.querySelector(l).innerHTML:document.querySelector(l).innerHTML)}else l="";".lg-sub-html"===this.s.appendSubHtmlTo?this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=l:this.___slide[e].insertAdjacentHTML("beforeend",l),null!=l&&(""===l?s.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html"):s.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")),s.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})},o.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},o.prototype.loadContent=function(e,t,l){var i,o,r,a,d,n,u,c=this,g=!1,f=function(e){for(var t=[],s=[],l=0;l<e.length;l++){var i=e[l].split(" ");""===i[0]&&i.splice(0,1),s.push(i[0]),t.push(i[1])}for(var r=window.innerWidth,a=0;a<t.length;a++)if(parseInt(t[a],10)>r){o=s[a];break}};if(c.s.dynamic){if(c.s.dynamicEl[e].poster&&(g=!0,r=c.s.dynamicEl[e].poster),n=c.s.dynamicEl[e].html,o=c.s.dynamicEl[e].src,u=c.s.dynamicEl[e].alt,c.s.dynamicEl[e].responsive)f(c.s.dynamicEl[e].responsive.split(","));a=c.s.dynamicEl[e].srcset,d=c.s.dynamicEl[e].sizes}else{if(c.items[e].getAttribute("data-poster")&&(g=!0,r=c.items[e].getAttribute("data-poster")),n=c.items[e].getAttribute("data-html"),o=c.items[e].getAttribute("href")||c.items[e].getAttribute("data-src"),u=c.items[e].getAttribute("title"),c.items[e].querySelector("img")&&(u=u||c.items[e].querySelector("img").getAttribute("alt")),c.items[e].getAttribute("data-responsive"))f(c.items[e].getAttribute("data-responsive").split(","));a=c.items[e].getAttribute("data-srcset"),d=c.items[e].getAttribute("data-sizes")}var h=!1;c.s.dynamic?c.s.dynamicEl[e].iframe&&(h=!0):"true"===c.items[e].getAttribute("data-iframe")&&(h=!0);var m=c.isVideo(o,e);if(!s.default.hasClass(c.___slide[e],"lg-loaded")){if(h)c.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+c.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+o+'"  allowfullscreen="true"></iframe></div></div>');else if(g){var p="";p=m&&m.youtube?"lg-has-youtube":m&&m.vimeo?"lg-has-vimeo":"lg-has-html5",c.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+r+'" /></div></div>')}else m?(c.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>'),s.default.trigger(c.el,"hasVideo",{index:e,src:o,html:n})):(u=u?'alt="'+u+'"':"",c.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" '+u+' src="'+o+'" /></div>'));if(s.default.trigger(c.el,"onAferAppendSlide",{index:e}),i=c.___slide[e].querySelector(".lg-object"),d&&i.setAttribute("sizes",d),a){i.setAttribute("srcset",a);try{picturefill({elements:[i[0]]})}catch(e){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&c.addHtml(e),s.default.addClass(c.___slide[e],"lg-loaded")}s.default.on(c.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){var t=0;l&&!s.default.hasClass(document.body,"lg-from-hash")&&(t=l),setTimeout(function(){s.default.addClass(c.___slide[e],"lg-complete"),s.default.trigger(c.el,"onSlideItemLoad",{index:e,delay:l||0})},t)}),m&&m.html5&&!g&&s.default.addClass(c.___slide[e],"lg-complete"),!0===t&&(s.default.hasClass(c.___slide[e],"lg-complete")?c.preload(e):s.default.on(c.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){c.preload(e)}))},o.prototype.slide=function(e,t,l){for(var i=0,o=0;o<this.___slide.length;o++)if(s.default.hasClass(this.___slide[o],"lg-current")){i=o;break}var r=this;if(!r.lGalleryOn||i!==e){var a=this.___slide.length,d=r.lGalleryOn?this.s.speed:0,n=!1,u=!1;if(!r.lgBusy){var c;if(this.s.download)(c=r.s.dynamic?!1!==r.s.dynamicEl[e].downloadUrl&&(r.s.dynamicEl[e].downloadUrl||r.s.dynamicEl[e].src):"false"!==r.items[e].getAttribute("data-download-url")&&(r.items[e].getAttribute("data-download-url")||r.items[e].getAttribute("href")||r.items[e].getAttribute("data-src")))?(document.getElementById("lg-download").setAttribute("href",c),s.default.removeClass(r.outer,"lg-hide-download")):s.default.addClass(r.outer,"lg-hide-download");if(s.default.trigger(r.el,"onBeforeSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:l}),r.lgBusy=!0,clearTimeout(r.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){r.addHtml(e)},d),this.arrowDisable(e),t){var g=e-1,f=e+1;0===e&&i===a-1?(f=0,g=a-1):e===a-1&&0===i&&(f=0,g=a-1),s.default.removeClass(r.outer.querySelector(".lg-prev-slide"),"lg-prev-slide"),s.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),s.default.removeClass(r.outer.querySelector(".lg-next-slide"),"lg-next-slide"),s.default.addClass(r.___slide[g],"lg-prev-slide"),s.default.addClass(r.___slide[f],"lg-next-slide"),s.default.addClass(r.___slide[e],"lg-current")}else{s.default.addClass(r.outer,"lg-no-trans");for(var h=0;h<this.___slide.length;h++)s.default.removeClass(this.___slide[h],"lg-prev-slide"),s.default.removeClass(this.___slide[h],"lg-next-slide");e<i?(u=!0,0!==e||i!==a-1||l||(u=!1,n=!0)):e>i&&(n=!0,e!==a-1||0!==i||l||(u=!0,n=!1)),u?(s.default.addClass(this.___slide[e],"lg-prev-slide"),s.default.addClass(this.___slide[i],"lg-next-slide")):n&&(s.default.addClass(this.___slide[e],"lg-next-slide"),s.default.addClass(this.___slide[i],"lg-prev-slide")),setTimeout(function(){s.default.removeClass(r.outer.querySelector(".lg-current"),"lg-current"),s.default.addClass(r.___slide[e],"lg-current"),s.default.removeClass(r.outer,"lg-no-trans")},50)}r.lGalleryOn?(setTimeout(function(){r.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){r.lgBusy=!1,s.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:l})},this.s.speed)):(r.loadContent(e,!0,r.s.backdropDuration),r.lgBusy=!1,s.default.trigger(r.el,"onAfterSlide",{prevIndex:i,index:e,fromTouch:t,fromThumb:l})),r.lGalleryOn=!0,this.s.counter&&document.getElementById("lg-counter-current")&&(document.getElementById("lg-counter-current").innerHTML=e+1)}}},o.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.___slide.length?(t.index++,s.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,s.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(s.default.addClass(t.outer,"lg-right-end"),setTimeout(function(){s.default.removeClass(t.outer,"lg-right-end")},400)))},o.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,s.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.items.length-1,s.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(s.default.addClass(t.outer,"lg-left-end"),setTimeout(function(){s.default.removeClass(t.outer,"lg-left-end")},400)))},o.prototype.keyPress=function(){var e=this;this.items.length>1&&s.default.on(window,"keyup.lg",function(t){e.items.length>1&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))}),s.default.on(window,"keydown.lg",function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),s.default.hasClass(e.outer,"lg-thumb-open")?s.default.removeClass(e.outer,"lg-thumb-open"):e.destroy())})},o.prototype.arrow=function(){var e=this;s.default.on(this.outer.querySelector(".lg-prev"),"click.lg",function(){e.goToPrevSlide()}),s.default.on(this.outer.querySelector(".lg-next"),"click.lg",function(){e.goToNextSlide()})},o.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var t=this.outer.querySelector(".lg-next"),l=this.outer.querySelector(".lg-prev");e+1<this.___slide.length?(t.removeAttribute("disabled"),s.default.removeClass(t,"disabled")):(t.setAttribute("disabled","disabled"),s.default.addClass(t,"disabled")),e>0?(l.removeAttribute("disabled"),s.default.removeClass(l,"disabled")):(l.setAttribute("disabled","disabled"),s.default.addClass(l,"disabled"))}},o.prototype.setTranslate=function(e,t,l){this.s.useLeft?e.style.left=t:s.default.setVendor(e,"Transform","translate3d("+t+"px, "+l+"px, 0px)")},o.prototype.touchMove=function(e,t){var l=t-e;Math.abs(l)>15&&(s.default.addClass(this.outer,"lg-dragging"),this.setTranslate(this.___slide[this.index],l,0),this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+l,0),this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+l,0))},o.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&s.default.addClass(t.outer,"lg-slide");for(var l=0;l<this.___slide.length;l++)s.default.hasClass(this.___slide[l],"lg-current")||s.default.hasClass(this.___slide[l],"lg-prev-slide")||s.default.hasClass(this.___slide[l],"lg-next-slide")||(this.___slide[l].style.opacity="0");setTimeout(function(){s.default.removeClass(t.outer,"lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&s.default.trigger(t.el,"onSlideClick");for(var l=0;l<t.___slide.length;l++)t.___slide[l].removeAttribute("style")}),setTimeout(function(){s.default.hasClass(t.outer,"lg-dragging")||"lg-slide"===t.s.mode||s.default.removeClass(t.outer,"lg-slide")},t.s.speed+100)},o.prototype.enableSwipe=function(){var e=this,t=0,l=0,i=!1;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var o=0;o<e.___slide.length;o++)s.default.on(e.___slide[o],"touchstart.lg",function(l){s.default.hasClass(e.outer,"lg-zoomed")||e.lgBusy||(l.preventDefault(),e.manageSwipeClass(),t=l.targetTouches[0].pageX)});for(var r=0;r<e.___slide.length;r++)s.default.on(e.___slide[r],"touchmove.lg",function(o){s.default.hasClass(e.outer,"lg-zoomed")||(o.preventDefault(),l=o.targetTouches[0].pageX,e.touchMove(t,l),i=!0)});for(var a=0;a<e.___slide.length;a++)s.default.on(e.___slide[a],"touchend.lg",function(){s.default.hasClass(e.outer,"lg-zoomed")||(i?(i=!1,e.touchEnd(l-t)):s.default.trigger(e.el,"onSlideClick"))})}},o.prototype.enableDrag=function(){var e=this,t=0,l=0,i=!1,o=!1;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var r=0;r<e.___slide.length;r++)s.default.on(e.___slide[r],"mousedown.lg",function(l){s.default.hasClass(e.outer,"lg-zoomed")||(s.default.hasClass(l.target,"lg-object")||s.default.hasClass(l.target,"lg-video-play"))&&(l.preventDefault(),e.lgBusy||(e.manageSwipeClass(),t=l.pageX,i=!0,e.outer.scrollLeft+=1,e.outer.scrollLeft-=1,s.default.removeClass(e.outer,"lg-grab"),s.default.addClass(e.outer,"lg-grabbing"),s.default.trigger(e.el,"onDragstart")))});s.default.on(window,"mousemove.lg",function(r){i&&(o=!0,l=r.pageX,e.touchMove(t,l),s.default.trigger(e.el,"onDragmove"))}),s.default.on(window,"mouseup.lg",function(r){o?(o=!1,e.touchEnd(l-t),s.default.trigger(e.el,"onDragend")):(s.default.hasClass(r.target,"lg-object")||s.default.hasClass(r.target,"lg-video-play"))&&s.default.trigger(e.el,"onSlideClick"),i&&(i=!1,s.default.removeClass(e.outer,"lg-grabbing"),s.default.addClass(e.outer,"lg-grab"))})}},o.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,l=this.___slide.length;this.s.loop&&(0===this.index?t=l-1:this.index===l-1&&(e=0));for(var i=0;i<this.___slide.length;i++)s.default.removeClass(this.___slide[i],"lg-next-slide"),s.default.removeClass(this.___slide[i],"lg-prev-slide");t>-1&&s.default.addClass(this.___slide[t],"lg-prev-slide"),s.default.addClass(this.___slide[e],"lg-next-slide")},o.prototype.mousewheel=function(){var e=this;s.default.on(e.outer,"mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},o.prototype.closeGallery=function(){var e=this,t=!1;s.default.on(this.outer.querySelector(".lg-close"),"click.lg",function(){e.destroy()}),e.s.closable&&(s.default.on(e.outer,"mousedown.lg",function(e){t=!!(s.default.hasClass(e.target,"lg-outer")||s.default.hasClass(e.target,"lg-item")||s.default.hasClass(e.target,"lg-img-wrap"))}),s.default.on(e.outer,"mouseup.lg",function(l){(s.default.hasClass(l.target,"lg-outer")||s.default.hasClass(l.target,"lg-item")||s.default.hasClass(l.target,"lg-img-wrap")&&t)&&(s.default.hasClass(e.outer,"lg-dragging")||e.destroy())}))},o.prototype.destroy=function(e){var t=this;if(e||s.default.trigger(t.el,"onBeforeClose"),document.body.scrollTop=t.prevScrollTop,document.documentElement.scrollTop=t.prevScrollTop,e){if(!t.s.dynamic)for(var l=0;l<this.items.length;l++)s.default.off(this.items[l],".lg"),s.default.off(this.items[l],".lgcustom");var i=t.el.getAttribute("lg-uid");delete window.lgData[i],t.el.removeAttribute("lg-uid")}for(var o in s.default.off(this.el,".lgtm"),window.lgModules)t.modules[o]&&t.modules[o].destroy(e);this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,s.default.off(window,".lg"),s.default.removeClass(document.body,"lg-on"),s.default.removeClass(document.body,"lg-from-hash"),t.outer&&s.default.removeClass(t.outer,"lg-visible"),s.default.removeClass(document.querySelector(".lg-backdrop"),"in"),setTimeout(function(){try{t.outer&&t.outer.parentNode.removeChild(t.outer),document.querySelector(".lg-backdrop")&&document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),e||s.default.trigger(t.el,"onCloseAfter"),t.el.focus()}catch(e){}},t.s.backdropDuration+50)},window.lightGallery=function(e,t){if(e)try{if(e.getAttribute("lg-uid"))try{window.lgData[e.getAttribute("lg-uid")].init()}catch(e){console.error("lightGallery has not initiated properly")}else{var s="lg"+window.lgData.uid++;window.lgData[s]=new o(e,t),e.setAttribute("lg-uid",s)}}catch(e){console.error("lightGallery has not initiated properly")}}})},{"./lg-utils":1}]},{},[2])(2)});
lightGallery(document.querySelector('.woocommerce-product-gallery__image'));

