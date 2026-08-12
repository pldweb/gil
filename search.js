$(function () {
    var $tabList = $('.skssl-filter-pencarian-paket .nav-quick-search-paket');
    var $tabContent = $('.skssl-filter-pencarian-paket .tab-quick-search-paket');

    if ($tabList.find('.tab-transportasi').length) return;

    var paneId = 'tab-transportasi-12go';

    var $newTab = $tabList.find('li').last().clone();
    $newTab
        .removeClass('active')
        .addClass('tab-transportasi');

    var $link = $newTab.find('a')
        .attr('data-toggle', 'tab')
        .attr('href', '#' + paneId);

    $link.find('i').removeClass().addClass('fa fa-bus');
    $link.find('span').text('Transportasi');

    $tabList.append($newTab);

    var $newPane = $('<div class="tab-pane" id="' + paneId + '" style="min-width:900px;"></div>');
    var $poweredDiv = $(
        '<div id="powered">Powered by <a href="https://12go.asia/?z=12889710" target="_blank" rel="noopener noreferrer">12Go system</a></div>'
    );
    $newPane.append($poweredDiv);
    $tabContent.append($newPane);

    var widgetLoaded = false;

    $link.on('shown.bs.tab', function () {
        if (widgetLoaded) return;
        widgetLoaded = true;

        var script = document.createElement('script');
        script.src = '//cdn0.trainbusferry.com/tools/form/en/?id=12889710&domain=muslimtravel.12go.asia';
        script.setAttribute('data-one2go', '12889710');
        script.setAttribute('data-color', 'blue');
        script.setAttribute('data-language', 'en');
        script.setAttribute('data-adaptive', '0');
        script.setAttribute('data-border', '1');
        script.setAttribute('data-radius', '50');
        script.setAttribute('data-origin-empty', 'true');
        script.setAttribute('data-destination-empty', 'true');
        script.setAttribute('data-logo', 'https://img.12go.asia/0/fit/1000/0/ce/0/plain/s3://12go-web-static/static/images/upload-media/7414.png');
        script.setAttribute('data-domain', 'muslimtravel.12go.asia');

        $newPane[0].insertBefore(script, $poweredDiv[0]);
    });
});
