
(function () {
  var params = new URLSearchParams(window.location.search);
  var utmSource = params.get('utm_source') || 'Organik';

  var originalShowForm = window.showForm;
  if (typeof originalShowForm === 'function') {
    window.showForm = function () {
      window.__leadSource = utmSource;
      return originalShowForm.apply(this, arguments);
    };
  }

  var originalOpen = window.open;
  window.open = function (url, name, specs) {
    if (typeof url === 'string' && url.indexOf('wa.me') !== -1) {
      var message =
        'Halo, saya tertarik.\n' +
        'Sumber: ' + (window.__leadSource || utmSource);

      var text = encodeURIComponent(message);
      url += url.indexOf('?') !== -1 ? '&text=' + text : '?text=' + text;
    }
    return originalOpen.call(window, url, name, specs);
  };
})();


<script>
function toggleWhatsapp() {
    const box = document.getElementById("ctc-chat-box");
    if (!box) return;

    const status = box.getAttribute("status");
    if (status === "hidden") {
        box.setAttribute("status", "display");
    } else {
        box.setAttribute("status", "hidden");
    }
}
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("ctc-chat-box");
    if (box) {
        box.setAttribute("status", "display");
        box.style.display = "block"; 
    }
});
</script>

<script>
 $(document).ready(function () {
 
   var iconCeklis = '<i class="fa fa-check-circle" style="color:#1DA1F2;margin-left:5px"></i>';
   $('.ctc-cp-title').append(iconCeklis); 
   $('.ctc-contact-list').on('click', function () {
      let raw = $(this).attr('onclick');
      if (!raw) return;
      let match = raw.match(/\d+/);
      if (!match) return;
      let number = match[0];
      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get('utm_source') || 'Organik';
      setTimeout(function () {
         let text = "";
         if (number === "6281128800063") {
            text = Assalamualaikum Wr.Wb.Mohon informasi Umrah dan Haji Khusus dari PT Nur Ramadhan.Saya dapat info ini dari Web nurramadhan.co.id.Jazakallahu khoiron.;
         }
         if (number === "6281125043311") {
            text = Assalamualaikum Wr.Wb.Mohon informasi Haji Khusus dari PT Nur Ramadhan.Saya dapat info ini dari Web nurramadhan.co.id.Jazakallahu khoiron.;
         }
         if (number === "6282166236000") {
            text = Assalamualaikum Wr.Wb.Mohon informasi Umrah dari PT Nur Ramadhan.Saya dapat info ini dari Web nurramadhan.co.id.Jazakallahu khoiron.;
         } /* ========================= TAMBAHAN SUMBER ========================= */
         text += Sumber: $ {
            utmSource
         };
         $('#pesan').val(text);
      }, 100);
   });
}); < /script>
