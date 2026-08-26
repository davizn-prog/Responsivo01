$(function(){
    var delay = 3000;
    var indiceAtual = 0;
    var quantidade;

    initSlider();
    autoPlay();

    function initSlider(){
        quantidade = $('.container-autor').length;
        var tamanhoEquipe = 100 * quantidade;
        var tamanhoAutor = 100 / quantidade;
        $('.container-autor').css('width',tamanhoAutor+'%');
        $('.container-equipe').css('width',tamanhoEquipe+'%');

        for(var i = 0; i < quantidade; i++){
            if(i == 0)
                $('.container-indice-autor').append('<div class="indice2" style="background-color: var(--cor1)"></div>');
            else
                $('.container-indice-autor').append('<div class="indice2"></div>');
        }
    }

    function autoPlay(){
        setInterval(function(){
            indiceAtual++;
            if(indiceAtual == quantidade)
                indiceAtual = 0;
            goToSlider(indiceAtual);
        },delay)
    }

    function goToSlider(indiceAtual){
        var offSetX = $('.container-autor').eq(indiceAtual).offset().left - $('.container-equipe').offset().left;
        $('.indice2').css('background-color','rgb(200,200,200)');
        $('.indice2').eq(indiceAtual).css('background-color','var(--cor1)');
        $('.container-overflow').stop().animate({'scrollLeft':offSetX+'px'});
    }

    $(window).resize(function(){
        $('.container-overflow').stop().animate({'scrollLeft':0});
    })

}) 