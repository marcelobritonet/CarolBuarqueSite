$(document).ready(function () {
    /* magnificPopup global options */
    var magnificPopupSettings = {
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        tClose: 'Fechar (tecla Esc)',
        tLoading: 'Carregando...',
        gallery: {
            enabled: true,
            tPrev: 'Anterior (tecla ←)',
            tNext: 'Próximo (tecla ➝)',
            tCounter: '%curr% de %total%'
        },
        image: {
            tError: '<a href="%url%">A imagem</a> não pôde ser carregada.'
        },
        ajax: {
            tError: '<a href="%url%">O conteúdo</a> não pôde ser carregado.'
        }
    }

    $('.lista-interna').magnificPopup(magnificPopupSettings);

    magnificPopupSettings.type = 'iframe';
    $('.contato-page .mapa').magnificPopup(magnificPopupSettings)
});
