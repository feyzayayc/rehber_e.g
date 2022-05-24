const yargs = require('yargs');
const kisi = require('./kisi.js');
yargs.version('1.5.3'); // versiyon ataması 

yargs.command({
    command: 'ekle',
    describe: 'yeni kişi eklemeye yarar',
    builder: {
        isim: {
            describe: 'eklenecek kişi adı',
            demandOption: true,
            type: 'string'
        },
        tel: {
            describe: 'eklenecek kişi tel no',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        kisi.kisiEkle(argv.isim, argv.tel);
    },
});

yargs.command({
    command: 'sil',
    describe: 'kişi silmeye yarar',
    builder: {
        tel: {
            describe: 'silinecek tel no',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        kisi.kisiSil(argv.tel);
    }
});

yargs.command({
    command: 'goster',
    describe: 'kişi gostermeye yarar',
    builder: {
        isim: {
            describe: 'eklenecek kişi adı',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        kisi.kisiGoster(argv.isim);
    }
});

yargs.command({
    command: 'listele',
    describe: 'kişileri listelemeye yarar',
    handler(argv) {
        kisi.kisiListele();
    }
});

yargs.parse();