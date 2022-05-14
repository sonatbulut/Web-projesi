const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rightArr");
const textDiv = document.querySelector(".texts");
let index = 0;

const texts = [
    "İç Anadolu Bölgesi’nin Orta Kızılırmak bölümünde yer alır. Yüzölçümü 6665 km²’dir. Kırşehir’in toprakları, ülke topraklarının binde 8’i, İç Anadolu Bölgesi topraklarının yüzde 2.9’u kadar olup, yüzölçümü büyüklüğü bakımından 53.sıradadır. İlin matematiksel konumu, 38°50′ – 39°50′ Kuzey enlemleri, 33°30′ – 34°50′ Doğu boylamları arasındadır.Denizden yüksekliği 985 metredir. İlin kuş uçumu denize uzaklıkları; güneyde, Akdeniz’de Anamur Burnu’na 362 Km; kuzeyde, Karadeniz’de Sinop’a 334 Km’dir.",
    "Kırşehir, Kırşehir ilinin şehir merkezidir. 1941 yılında Ankara'da toplanan I. Coğrafya Kongresi'nde bu bölgeye ve bölgenin Orta Kızılırmak Bölümü'ne alındı. Özellikle son yıllarda köylerin göç vermesiyle nüfus merkez ilçede yoğunlaşmıştır. 1927'de 13.000 olan 1990'da 73.538'e, 2000'de 88.105'e çıkmıştı. 2010'da 110.000 olan merkez ilçe nüfusu 2020 itibarıyla 158.954'tür.",
    "Şehir konumundan dolayı birçok uygarlığa ev sahipliği yapmıştır. Ayrıca birçok doğa güzelliği ile de iç açıcı manzarası vardır. Bu nedenle de şehri doğa ve tarihi gezi sevenler ziyaret etmektedir.Seyfe Gölü de bunlardan birisidir.Gölde, dünyanın en büyük flamingo topluluklarından biri ( 320 bin adet) barınmaktadır. Göl, aynı zamanda sonbaharda yüz binlerce ördeğin konaklama alanıdır.",
    "Doğal güzelliklerden bahsetmişken Japon bahçesinden de bahsetmezsek olmaz.1993 senesinde Japonya Ortadoğu Kültür Merkezi tarafından inşa edilen Japon Bahçesi, Kalehöyük kazılarının bir hatırası yaptırılmıştır. Özellikle de kış aylarında karın yağmasıyla birlikte muhteşem bir görüntüye kavuşan bahçe, fotoğraf çekimi için ideal alanların başında yer almaktadır"
]
gsap.from(".texts", .8, {y:'-100%'});

function slideLeft() {
    if (index == 0) index = texts.length - 1;
    else index--;
    gsap.to(".images", .3, { x: `${-index * 100}%` })
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, { y: -20, opacity: 0, ease: 'power3.out' })
}

function slideRight() {
    if (index == texts.length - 1) index = 0;
    else index++;
    gsap.to(".images", .3, { x: `${-index * 100}%` });
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, { y: -20, opacity: 0, ease: 'power3.out' })
}

leftArr.addEventListener("click", slideLeft);
rightArr.addEventListener("click", slideRight);




