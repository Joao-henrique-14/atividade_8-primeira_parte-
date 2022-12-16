
 var numero= Number( prompt('digite um número'));
 var outro_numero= Number( prompt('digite outro número'));
 var operador= prompt('qual operador deseja utilizar? + - / *');
 var soma;
if(operador== '+'){
     soma= numero + outro_numero;
     alert('o resultado da soma é ' + soma )}

  else if(operador== '-'){
     subtracao= numero - outro_numero;
     alert('o resultado da subtração é ' + subtracao)}

else if( operador== '/'){
     divisao= numero / outro_numero;
     alert('o resultado da divisão é ' + divisao)}

else if(operador== '*'){
     multiplicacao= numero * outro_numero;
     alert('o resultado da multiplicação é ' +multiplicacao)}
else{
     alert('símbolo incorreto!(tente +, -, /, *')
}