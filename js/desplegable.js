$('#up-uno').on('click', function(){
    $(".contenido-uno").css("overflow","visible");
    $(".contenido-uno").css("height","215px");
    $(".contenido-uno").css("margin-bottom","3%");
    $("#up-uno").css("display","none");
    $("#down-uno").css("display","block");
});
$('#down-uno').on('click', function(){
    $(".contenido-uno").css("height","0px");
    $(".contenido-uno").css("overflow","hidden");
    $("#down-uno").css("display","none");
    $("#up-uno").css("display","block");
    $(".contenido-uno").css("margin-bottom","0%");
});

$('#up-dos').on('click', function(){
    $(".contenido-dos").css("overflow","visible");
    $(".contenido-dos").css("height","200px");
    $(".contenido-dos").css("margin-bottom","3%");
    $("#up-dos").css("display","none");
    $("#down-dos").css("display","block");
});
$('#down-dos').on('click', function(){
    $(".contenido-dos").css("overflow","hidden");
    $(".contenido-dos").css("height","0px");
    $("#down-dos").css("display","none");
    $("#up-dos").css("display","block");
    $(".contenido-dos").css("margin-bottom","0%");
});

$('#up-tres').on('click', function(){
    $(".contenido-tres").css("overflow","visible");
    $(".contenido-tres").css("height","180px");
    $(".contenido-tres").css("margin-bottom","5%");
    $("#up-tres").css("display","none");
    $("#down-tres").css("display","block");
});
$('#down-tres').on('click', function(){
    $(".contenido-tres").css("overflow","hidden");
    $(".contenido-tres").css("height","0px");
    $("#down-tres").css("display","none");
    $("#up-tres").css("display","block");
    $(".contenido-tres").css("margin-bottom","3%");
});