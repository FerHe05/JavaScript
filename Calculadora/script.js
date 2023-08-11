const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = "";
//adicionar evento aos botões, chama calculate() ao clickar

const calculate = (btnValue) => {
  if(btnValue === "=" && output !== ""){
    output = eval(output.replace("%" , "/100"));
  }else if (btnValue === "AC"){
    output="";
  }else if(btnValue ==="DEL"){
    output = output.toString().slice(0, -1);
  }else{
    if(output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click" , (e) => calculate(e.target.dataset.value));
});
/*  
  Este código está usando a funcionalidade de Event Listeners do JavaScript 
para executar uma função quando um botão é clicado. 

  buttons.forEach((button) => { ... });: Isso indica que estamos percorrendo uma coleção de elementos 
(provavelmente botões) usando o método forEach

  button.addEventListener("click", (e) => calculate(e.target.dataset.value));:
 Para cada botão na coleção, estamos adicionando um 
 ouvinte de evento para o evento "click" (clique). Isso significa que 
 quando um botão é clicado, a função fornecida será executada.

(e) => calculate(e.target.dataset.value): Esta é a função de callback que será 
executada quando um botão for clicado. Ela recebe um único parâmetro e, que é o 
evento de clique. Dentro desta função, estamos chamando outra função chamada 
calculate e passando um valor como argumento. O valor passado é obtido do atributo 
data-value do botão que foi clicado. O e.target se refere ao elemento que disparou 
o evento, ou seja, o botão clicado, e dataset.value acessa o valor do atributo 
data-value desse botão.

Portanto, toda vez que um botão é clicado, a função calculate é chamada com o 
valor do atributo data-value do botão como argumento.
*/
