$(function () {

    // Tambahkan checkbox di bawah syarat & ketentuan
    $('.panel:has(a:contains("Syarat & Ketentuan")) .collapse-inner').append(`
        <div class="checkbox" style="margin-top:15px;">
            <label>
                <input type="checkbox" id="setuju-syarat">
                Saya menyetujui syarat dan ketentuan di atas.
            </label>
        </div>
    `);

    // Restore status checkbox
    if (localStorage.getItem('setuju_syarat') === '1') {
        $('#setuju-syarat').prop('checked', true);
    }

    // Simpan perubahan
    $(document).on('change', '#setuju-syarat', function () {
        localStorage.setItem(
            'setuju_syarat',
            $(this).is(':checked') ? '1' : '0'
        );
    });

    // Cegah klik tombol jika belum setuju
    $(document).on('click', '#btn-pesan-paket', function (e) {

        if (localStorage.getItem('setuju_syarat') !== '1') {
            e.preventDefault();
            e.stopImmediatePropagation();

            alert('Persyaratan dan ketentuan belum dicentang. Harap centang terlebih dahulu.');

            return false;
        }

    });

});
