//UM EXIBILOR DE IMAGENS COM SLIDE E SELETOR

$(function(){

    var indiceAtual = 0;
    var indiceMaximo = $('.slide-img').length;
    var delay = 5000;
    initSlider();
    cliqueSlider();
    
    function initSlider(){
        for(var i = 0; i < indiceMaximo; i++){
            if(i == 0){
                $('.container-indices').append('<div class="indice" style="background:var(--cor1);"></div>');
            }else{
                $('.container-indices').append('<div class="indice"></div>');
            }
        }
    
        $('.slide-img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();
        },delay);
    }
    
    function cliqueSlider(){
        $('.container-indices div').click(function(){
            $('.slide-img').eq(indiceAtual).stop().fadeOut(1000);
            indiceAtual = $(this).index();
            $('.slide-img').eq(indiceAtual).stop().fadeIn(1000)
            $('.container-indices div').css('background-color','#ccc');
            $(this).css('background-color','var(--cor1)');
        });
    }
    
    function alternarSlider(){
        $('.slide-img').eq(indiceAtual).stop().fadeOut(1000);
        indiceAtual+=1;
        if(indiceAtual == indiceMaximo)
            indiceAtual = 0;
        $('.container-indices div').css('background-color','#ccc');
        $('.container-indices div').eq(indiceAtual).css('background-color','var(--cor1)');
        $('.slide-img').eq(indiceAtual).fadeIn(1000);
    }
    
    }); 
    