//Common uses of this

//Within Object Methods:
//this is often used to refer to the object containing the method.

const pessoa = {
  nome: "João",
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
};

pessoa.saudacao(); // "Olá, meu nome é João."

//*************************************************** */

// Constructor Functions:
//When you create objects using constructor functions, this refers to the newly created instance.

function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

const meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.marca); // "Toyota"

//*************************************************** */


//Prototype Methods:
//this is used to refer to the object on which the method is called.

function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.apresentacao = function() {
  console.log(`Meu nome é ${this.nome}.`);
};

const pessoa1 = new Pessoa("Maria");
pessoa1.apresentacao(); // "Meu nome é Maria."

//*************************************************** */

//Event handlers:
//In event handlers, this refers to the DOM element that triggered the event.

const botao = document.querySelector("#meuBotao");

botao.addEventListener("click", function() {
  console.log(this); // Referência ao elemento <button>
});

//***************************************************

//Arrow functions:
//In arrow functions, this holds the value from the nearest lexical context.

const objeto = {
  nome: "Alice",
  saudacao: () => {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
};

objeto.saudacao(); // "Olá, meu nome é undefined" (o valor de this não é o objeto)