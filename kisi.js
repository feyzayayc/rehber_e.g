const fs = require('fs');

const dosyadanKisiOku = function () {
    try {
        const dataBuffer = fs.readFileSync('kisiler.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }

}

const kisiEkle = function (isim, telNo) {
    // console.log(`eklenecek --> isim : ${isim}, telNo : ${telNo}`);
    const kisilerDizisi = dosyadanKisiOku();
    const ayniAdaSahipKisilerDizisi = kisilerDizisi.filter(kisi => {
        return kisi.telNo === telNo;
        // console.log(kisi);
    });
    if (ayniAdaSahipKisilerDizisi.length === 0) {
        kisilerDizisi.push({ isim: isim, telNo: telNo });
        dosyayaKisiYaz(kisilerDizisi);
        console.log(isim + " isimli kullanıcı eklendi")
    }
    else {
        console.log(telNo + " numaralı kayıt zaten var");
    }


}

const dosyayaKisiYaz = function (kisiler) {
    const jsonData = JSON.stringify(kisiler)
    fs.writeFileSync('kisiler.json', jsonData);
}

const kisiSil = function (telNo) {
    const kisilerDizisi = dosyadanKisiOku();
    const telnoKontrol = kisilerDizisi.filter(kisi => {
        return kisi.telNo !== telNo
    });
    // console.log(telnoKontrol);
    if (kisilerDizisi.length > telnoKontrol.length) {
        console.log(telNo + " silindi");
        dosyayaKisiYaz(telnoKontrol);
    }
    else {
        console.log(telNo + " numara bulunamadı");
    }
}

const kisiGoster = function (isim) {
    const tumKisiler = dosyadanKisiOku();
    const bulunanKisi = tumKisiler.find(kisi => {
        return kisi.isim === isim
    });
    if (bulunanKisi) {
        console.log("İsim: " + bulunanKisi.isim + " Numara :" + bulunanKisi.telNo)
    }
    else {
        console.log('Kişi bulunamadı');
    }
}

const kisiListele = function () {
    console.log(`tüm kisiler listelenecek`);
    const tumKisiler = dosyadanKisiOku();
    tumKisiler.forEach(kisi => {
        console.log("İsim: " + kisi.isim + " Numara :" + kisi.telNo)
    });
}

module.exports = {
    kisiEkle: kisiEkle,
    kisiSil: kisiSil,
    kisiGoster: kisiGoster,
    kisiListele: kisiListele
}