$(document).ready(function () {

    (function ($) {
        $.fn.fullHeight = function () {
            var obj = this;
            var firstTime = 0;
            var minHeightBase = $(obj).css('min-height').split('px')[0];

            $(window).resize(function () {
                if ($(this).height() >= minHeightBase) {
                    $(obj).css('min-height', $(this).height()).parent().css('position', 'initial');
                } else {
                    $(obj).css('min-height', minHeightBase).parent().css('position', 'relative');
                }
            });

            if (!firstTime) {
                $(window).resize();
                obj.css('opacity', 1);
                firstTime = 1;
            }
        };
    }(jQuery));

    $('main .container').fullHeight();

    instagram = function () {
        var accessToken = '47452668.1677ed0.6b14653feb1d4da9849c4f53391aeef1';
        var username = "carolbuarquecakeboutique";
        var limit = 7;
        var setSize = "small";

        return {
            init: function () {
                instagram.getUser();
            },
            getUser: function () {
                var getUserURL = 'https://api.instagram.com/v1/users/search?q=' + username + '&access_token=' + accessToken + '';
                $.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    cache: false,
                    url: getUserURL,
                    success: function (data) {
                        var getUserID = data.data[0].id;
                        instagram.loadImages(getUserID);
                    }
                });
            },
            loadImages: function (userID) {
                var getImagesURL = 'https://api.instagram.com/v1/users/' + userID + '/media/recent/?access_token=' + accessToken + '';
                $.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    cache: false,
                    url: getImagesURL,
                    success: function (data) {
                        var photosList = '';

                        for (var i = 0; i < limit; i += 1) {
                            if (setSize == "small") {
                                var size = data.data[i].images.thumbnail.url;
                            } else if (setSize == "medium") {
                                var size = data.data[i].images.low_resolution.url;
                            } else {
                                var size = data.data[i].images.standard_resolution.url;
                            }
                            photosList = photosList + "<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + size + "'></img></a></li>";
                        }
                        $("#instagram .fotos").html(photosList);
                    }
                });
            }
        }
    }();

    var magnificPopupSettingsIMG = {
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',
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
        }
    };

    var magnificPopupSettingsIFRAME = {
        delegate: 'a',
        type: 'iframe',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',
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
        }
    };

    var magnificPopupSettingsAJAX = {
        type: 'ajax',
        ajax: {
            settings: null, // Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
            // For example:
            // settings: {cache:false, async:false}

            cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
            tError: '<a href="%url%">O conteúdo</a> não pôde ser carregado.'
        },
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
        tLoading: 'Carregando...'
    };

    if ($('.lista-interna')) $('.lista-interna').magnificPopup(magnificPopupSettingsIMG);
    if ($('.contato-page .mapa')) $('.contato-page .mapa').magnificPopup(magnificPopupSettingsIFRAME);
    if ($('.popup') )$('.popup').magnificPopup(magnificPopupSettingsAJAX);
});
