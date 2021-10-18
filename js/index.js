let n1 = parseFloat(prompt('Digite a primeira Nota: '));
let n2 = parseFloat(prompt('Digite a segunda Nota: '));
let n3 = parseFloat(prompt('Digite a terceira Nota: '));
let n4 = parseFloat(prompt('Digite a quarta Nota: '));
let media = (n1 + n2 + n3 +n4 )/2;

function mediaNotasAlert(){
    if(isNaN(n1)&&isNaN(n2)&&isNaN(n3)&&isNaN(n4)){
        alert('Digite apenas números');
     }
     if(media > 6){
         alert('Parabens APROVADO! ' + media);
     }if(media >=5 && media <=6){
         alert('RECUPERAÇÃO! ' + media);
     }if (media < 5){
         alert('Estude mais, REPROVADO! '+ media);
     }
}

function mediaNotasNavegador(){
    if(isNaN(n1)&&isNaN(n2)&&isNaN(n3)&&isNaN(n4)){
        document.querySelector('#output').innerHTML = 'Digite apenas números.';
     }
     if(media > 6){
        document.querySelector('#output').innerHTML = 'Parabens!!! APROVADO'+ '<br>'+ '(' +n1 +' + '+n2+ ' + '+ n3+' + ' +n4+ ')'+ ' / ' +' 2 '+ '<br>'+
        'Sua média: ' + media;
     }if(media >=5 && media <=6){
        document.querySelector('#output').innerHTML = 'RECUPERAÇÃO!!! '+ '<br>'+ '('+n1 +' + '+n2+ ' + '+ n3+' + '+n4+ ')' + ' / ' + ' 2 ' + '<br>'+
        'Sua média: ' + media;
     }if (media < 5){
        document.querySelector('#output').innerHTML = 'Estude mais REPROVADO!!! '+ '<br>'+ '(' +n1 +' + '+n2+ ' + '+ n3+ ' + ' +n4+ ')' + ' / ' +' 2 '+ '<br>'+ 
        'Sua média: ' + media;
     }
}