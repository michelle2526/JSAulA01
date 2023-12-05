 var btnTema = $('#trocarTema');
  var body = $('body');


 btnTema.on('click',function(){
    if (btnTema.hasClass('temaClaro')){
        //btnTema.classlist.replace('temaClaro,TemaEscuro')
       btnTema.removeClass('temaClaro');
       btnTema.addClass('temaEscuro');
       btnTema.text("tema escuro");


       body.removeClass('temaClaro');
       body.addClass('temaEscuro');
       
    }else{
        btnTema.removeClass('temaEscuro');
        btnTema.addClass('temaClaro');
        btnTema.text("tema claro")

        body.removeClass('temaEscuro');
        body.addClass('temaClaro');
    }
 })