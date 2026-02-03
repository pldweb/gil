
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



<style>
  #ctc-chat-box {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    bottom: 0 !important;
    transition: all 0.4s ease;
  }

  #ctc-chat-box[status="display"] {
    opacity: 1 !important;
    visibility: visible !important;
    bottom: 0 !important;
  }
</style>
