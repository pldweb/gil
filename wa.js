(function($) {
    $(document).ready(function() {
        var salesNumber = "6281234567890";
        var encoded = btoa(salesNumber)
                        .replace(/\+/g, "-")
                        .replace(/\//g, "_")
                        .replace(/=+$/, "");

        var newUrl = "http://rentetan.nextdigital.co.id/socom?bid=fa9fe1627d9fb4170d545bf23fedfe9820708903775eeb08177f974ae2e2664b&sales_number=" + encoded;

        $("#btn-wa").attr("href", newUrl);
    });
})(jQuery);
