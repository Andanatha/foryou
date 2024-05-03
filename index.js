



document.addEventListener('DOMContentLoaded', function () {

    
    // Menangani tombol 'Bahagia Nihh'
    document.getElementById('happy').addEventListener('click', function () {
        // Menampilkan quest2
        if (document.querySelector('.quest1').style.display !== 'none') {
            document.querySelector('.quest1').style.display = 'none';
            document.querySelector('.quest2').style.display = 'block';
        }
    });

    // Menangani tombol 'Lagi Sedih'
    document.getElementById('sad').addEventListener('click', function () {
        // Menampilkan quest4
        if (document.querySelector('.quest1').style.display !== 'none') {
            document.querySelector('.quest1').style.display = 'none';
            document.querySelector('.quest4').style.display = 'block';
        }
    });

    // Menangani tombol 'Iyaa Okeyy' di quest2
    document.getElementById('IyaOkey').addEventListener('click', function () {
        // Menampilkan quest5
        if (document.querySelector('.quest2').style.display !== 'none') {
            document.querySelector('.quest2').style.display = 'none';
            document.querySelector('.quest6').style.display = 'block';

        }
    });


    // Menangani tombol 'Iyaa Siap' di quest4
    document.getElementById('okeyy').addEventListener('click', function () {
        // Menampilkan quest5
        if (document.querySelector('.quest4').style.display !== 'none') {
            document.querySelector('.quest4').style.display = 'none';
            document.querySelector('.quest6').style.display = 'block';
        }
    });

    document.getElementById('lanjuti').addEventListener('click', function () {
        // Menampilkan quest7
        if (document.querySelector('.quest6').style.display !== 'none') {
            document.querySelector('.quest6').style.display = 'none';
            document.querySelector('.quest7').style.display = 'block';
        }
    });

    document.getElementById('lanjut1').addEventListener('click', function () {
        // Menampilkan quest7
        if (document.querySelector('.quest7').style.display !== 'none') {
            document.querySelector('.quest7').style.display = 'none';
            document.querySelector('.quest9').style.display = 'block';
        }
    });

    document.getElementById('lanjut').addEventListener('click', function () {
        // Menampilkan quest7
        if (document.querySelector('.quest9').style.display !== 'none') {
            document.querySelector('.quest9').style.display = 'none';
            document.querySelector('.quest3').style.display = 'block';
        }
    });

    

});