$(document).ready(function () {

    if (!$('.intro-paket-area').length || $('.arsy-cta').length) {
        return;
    }

    $('<style>').text(`
        .arsy-cta{
            padding:30px 0;
        }

        .arsy-container{
            max-width:1140px;
            margin:auto;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:60px;
        }

        .arsy-text{
            flex:7;
            border-left:5px solid #FFD633;
            padding-left:22px;
        }

        .arsy-text h2{
            margin:0 0 10px;
            color:#22377e;
            font-size:36px;
            font-weight:700;
            line-height:1.25;
        }

        .arsy-text p{
            margin:0;
            color:#666;
            font-size:17px;
            line-height:1.9;
        }

        .arsy-action{
            flex:3;
            display:flex;
            flex-direction:column;
            gap:12px;
            align-items:flex-end;
        }

        .arsy-btn{
            width:290px;
            display:flex;
            align-items:center;
            justify-content:center;
            gap:10px;
            padding:10px 24px;
            background:#FFD633;
            color:#22377e !important;
            text-decoration:none !important;
            border-radius:999px;
            font-size:15px;
            font-weight:700;
            line-height:1.2;
            transition:.25s;
            box-shadow:0 4px 12px rgba(0,0,0,.08);
        }

        .arsy-btn:hover{
            background:#FFC400;
            color:#22377e !important;
            transform:translateY(-2px);
        }

        .arsy-btn i{
            font-size:18px;
            color:#25D366;
        }

        @media(max-width:768px){

            .arsy-cta{
                padding:24px 15px;
            }

            .arsy-container{
                flex-direction:column;
                gap:24px;
            }

            .arsy-text{
                width:100%;
                border-left:none;
                border-top:4px solid #FFD633;
                padding-left:0;
                padding-top:18px;
                text-align:center;
            }

            .arsy-text h2{
                font-size:26px;
            }

            .arsy-text p{
                font-size:15px;
                line-height:1.8;
            }

            .arsy-action{
                width:100%;
                align-items:center;
            }

            .arsy-btn{
                width:100%;
                max-width:360px;
                padding:10px 20px;
            }
        }
    `).appendTo('head');

    var ctaHtml = `
        <section class="arsy-cta">
            <div class="arsy-container">

                <div class="arsy-text">
                    <h2>Temukan Paket Umrah Terbaik untuk Anda</h2>
                    <p>
                        Pilih jadwal keberangkatan yang sesuai, lalu konsultasikan kebutuhan
                        perjalanan ibadah Anda bersama tim <strong>Arsytour</strong>.
                    </p>
                </div>

                <div class="arsy-action">

                    <a href="https://wa.me/6285215553300?text=Assalamu%27alaikum%20Saya%20ingin%20konsultasi%20paket%20Umrah.%20Saya%20mendapatkan%20kontak%20ini%20dari%20Website.%20Terimakasih."
                       target="_blank"
                       class="arsy-btn">
                        <i class="fab fa-whatsapp"></i>
                        Konsultasi via CS WA 1
                    </a>

                    <a href="https://wa.me/628217846768?text=Assalamu%27alaikum%20Saya%20ingin%20konsultasi%20paket%20Umrah.%20Saya%20mendapatkan%20kontak%20ini%20dari%20Website.%20Terimakasih."
                       target="_blank"
                       class="arsy-btn">
                        <i class="fab fa-whatsapp"></i>
                        Konsultasi via CS WA 2
                    </a>

                    <a href="https://wa.me/6281399231109?text=Assalamu%27alaikum%20Saya%20ingin%20konsultasi%20paket%20Umrah.%20Saya%20mendapatkan%20kontak%20ini%20dari%20Website.%20Terimakasih."
                       target="_blank"
                       class="arsy-btn">
                        <i class="fab fa-whatsapp"></i>
                        Konsultasi via CS WA 3
                    </a>

                </div>

            </div>
        </section>
    `;

    $('.intro-paket-area').after(ctaHtml);

});
