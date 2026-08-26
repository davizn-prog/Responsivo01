$(function(){
    $('nav a').click(function(){ /*pega o <a> das nav e aplica a função*/
        var href = $(this).attr('href'); /*variavel href recebe o conteudo do href de a*/

        /* abaixo a varriavel offsettop recebe o a distancia em pixels do topo da pagina ate o conteudo de href (que é o conteudo do href de <a> que neste caso está dendo o id de uma tag)*/
        var offSetTop = $(href).offset().top; 

        /* abaixo animamos a pagina com a propriedade scrollTop do .animate para rolar o scroll em direção às coordenadas de offsetTop */
        $('html,body').animate({'scrollTop':offSetTop});

        /* abaixo retorna falso pro site nao entender que voce foi pruma outra pagina ja que é um href que da pra mesma pagina*/
        return false; 
    })
})