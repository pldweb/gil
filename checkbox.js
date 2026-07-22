$(function () {

    $('.panel:has(a:contains("Syarat & Ketentuan")) .collapse-inner').append(`
        <div class="checkbox" style="margin-top:15px;">
            <label>
                <input type="checkbox" id="setuju-syarat">
                <span style="color: red;">Saya menyetujui syarat dan ketentuan di atas </span>
            </label>
        </div>
    `);

    $(document).on('click', '#btn-pesan-paket', function (e) {

        if (!$('#setuju-syarat').is(':checked')) {
            e.preventDefault();

            alert('Syarat & Ketentuan belum dicentang. Harap centang terlebih dahulu.');

            return false;
        }

    });

});
