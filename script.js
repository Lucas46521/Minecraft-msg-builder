$('body').mouseup(function(){
  $('.output').height($('textarea').height());
  $('.output').height($('textarea').height());
});

$.fn.selectRange = function(start, end){
    if(!end) end = start;
    return this.each(function(){
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};

$('.bgs div').click(function() {
  $('.output').css('background', $(this).css('background'));
  $('.bgs div').removeClass('border-active');
  $(this).addClass('border-active');
});


var motd_raw = $('.editor textarea');
$('.tools button').click(function(e){
	var caretPos = motd_raw[0].selectionStart;
	var textAreaTxt = motd_raw.val();
	var txtToAdd = '&' + $(this).attr('data-color');
	console.log(caretPos);
	motd_raw.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos)).focus();
	motd_raw.selectRange(caretPos + 2);
	colour(motd_raw.val());
});




function colour (text) {
left = htmlEncode("<");  
right = htmlEncode(">");
text = text.replace(/</gi, left);  
text = text.replace(/>/gi, right);
text = text.replace(/\n/gi, "&r<br />");

//colours
text = text.replace(/&0/gi,'</span>&r<span class="c-1">');
text = text.replace(/&1/gi,'</span>&r<span class="c-2">');
text = text.replace(/&2/gi,'</span>&r<span class="c-3">');
text = text.replace(/&3/gi,'</span>&r<span class="c-4">');
text = text.replace(/&4/gi,'</span>&r<span class="c-5">');
text = text.replace(/&5/gi,'</span>&r<span class="c-6">');
text = text.replace(/&6/gi,'</span>&r<span class="c-7">');
text = text.replace(/&7/gi,'</span>&r<span class="c-8">');
text = text.replace(/&8/gi,'</span>&r<span class="c-9">');
text = text.replace(/&9/gi,'</span>&r<span class="c-10">');
text = text.replace(/&a/gi,'</span>&r<span class="c-11">');
text = text.replace(/&b/gi,'</span>&r<span class="c-12">');
text = text.replace(/&c/gi,'</span>&r<span class="c-13">');
text = text.replace(/&d/gi,'</span>&r<span class="c-14">');
text = text.replace(/&e/gi,'</span>&r<span class="c-15">');
text = text.replace(/&f/gi,'</span>&r<span class="c-16">');
//bold
text = text.replace(/&l/gi,"<span style='font-weight:900;'>");
//italic
text = text.replace(/&o/gi,"<span style='font-style:italic;'>");
//strikethrough
text = text.replace(/&m/gi,"<span style='text-decoration:line-through'>");
//underlined
text = text.replace(/&n/gi,"<span style='text-decoration:underline'>");
//obfuscated
text = text.replace(/&k/gi,"<span class='obfuscated'>");
//reset
text = text.replace(/&r/gi, "</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>");
                     
document.getElementById('output').innerHTML=text;

}


setInterval(function() {
  $('.obfuscated').text(randomizer($('.obfuscated').text()));
}, 100);


function htmlEncode(value){
  return $('<div/>').text(value).html();
}
$('.copy-button').click(function() {
  var textarea = $('.editor textarea')[0];
  var text = textarea.value.trim(); // Remove espaços em branco do início e do fim

  if (text === '') {
    textarea.placeholder = 'Escreva algo antes de copiar';
    setTimeout(function() {
      textarea.placeholder = ''; // Limpa o placeholder após alguns segundos
    }, 2000); // Defina o tempo em milissegundos (3 segundos neste exemplo)
    return; // Não continua para a cópia se não houver texto
  }

  textarea.select();
  document.execCommand('copy');
});


function randomizer(rawr) {
    var length = rawr.length;
    var text = '';
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
$('.bgs div').click(function(elem){
  $('.output').css('background', $(elem.target).css('background'));
  $('.bgs div').removeClass('selected'); /* Remove a classe de todos os botões */
  $(elem.target).addClass('selected'); /* Adiciona a classe ao botão selecionado */
});
