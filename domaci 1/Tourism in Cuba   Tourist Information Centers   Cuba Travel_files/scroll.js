(function ($) {
  $(document).ready(function () {
    var cbpAnimatedHeader = (function () {
    var docElem = document.documentElement,
        header = document.querySelector('.ct-header'),
        resultalt = document.querySelector('.result'),
        btnreservamain = document.querySelector('.btn-reserva-main'),
        tituloLogoDestino = document.querySelector('.titulo-logo-destino'),
          didScroll = false,
          changeHeaderOn = 250;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                if(header) classie.add(header, 'header-shrink');
                if(btnreservamain) classie.add(btnreservamain, 'btn-reserva-main-shrink');
                if(resultalt) classie.add(resultalt, 'result-shrink');
                if(tituloLogoDestino) classie.add(tituloLogoDestino, 'titulo-logo-destino-shrink');
            }
            else {
                if(header) classie.remove(header, 'header-shrink');
                if(btnreservamain) classie.remove(btnreservamain, 'btn-reserva-main-shrink');
                if(resultalt) classie.remove(resultalt, 'result-shrink');
                if(tituloLogoDestino) classie.remove(tituloLogoDestino, 'titulo-logo-destino-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }
        init();
        
        if(!$('#searchInput').length){
            $('#top-search-cont').removeClass('hide');
        }

        $('html').click(function() { 
            $('#search-box-menu').hide(); 
        }) 

        $('.ct-submenu #search-box-menu').click(function(e){ 
            e.stopPropagation(); 
        }); 

        $('.menu-buscar').click(function(e) {
            $('#search-box-menu').toggle();
            e.stopPropagation(); 
        });

        $('#searchbox').keypress(function (e) {
            if (e.which == 13) {
                DoSearch();
            }  
        });

        var DoSearch = function(){
            var term = $('#searchbox').val();
            if(term) window.location.href = searchTab + '?Search=' + $('#searchbox').val() + '&dscope=' + destinationScope;
        }

        $('#searchiboxicon').click(function(e){
            DoSearch();
        })

    })();
  });
})(jQuery)
 
