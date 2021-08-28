if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function jogar() {
    println('funfando');
    var tabuleiroArray = [new Int32Array([0, 0, 0]), new Int32Array([0, 0, 0]), new Int32Array([0, 0, 0])];
    var tabuleiro = document.getElementById('tabuleiro');
    if (tabuleiro != null)
      tabuleiro.innerHTML = '\n        <html>\n        <table>\n                <tr>\n                    <td><button id="b00" onclick="main.botaoPressionado(id)" value="0">00<\/button><\/td>\n                    <td><button id="b01" onclick="main.botaoPressionado(id)" value="0">01<\/button><\/td>\n                    <td><button id="b02" onclick="main.botaoPressionado(id)" value="0">02<\/button><\/td>\n                <\/tr>\n                <tr>\n                    <td><button id="b10" onclick="main.botaoPressionado(id)" value="0">10<\/button><\/td>\n                    <td><button id="b11" onclick="main.botaoPressionado(id)" value="0">11<\/button><\/td>\n                    <td><button id="b12" onclick="main.botaoPressionado(id)" value="0">12<\/button><\/td>\n                <\/tr>\n                <tr>\n                    <td><button id="b20" onclick="main.botaoPressionado(id)" value="0">20<\/button><\/td>\n                    <td><button id="b21" onclick="main.botaoPressionado(id)" value="0">21<\/button><\/td>\n                    <td><button id="b22" onclick="main.botaoPressionado(id)" value="0">22<\/button><\/td>\n                <\/tr>\n            <\/table>\n        <\/html> \n        ';
  }
  var testeglobal;
  function botaoPressionado(id) {
    var botao = document.getElementById(id);
    if (botao != null)
      if (testeglobal === 1) {
        botao.innerHTML = 'X';
        testeglobal = testeglobal - 1 | 0;
      } else {
        botao.innerHTML = 'O';
        testeglobal = testeglobal + 1 | 0;
      }
  }
  _.jogar = jogar;
  Object.defineProperty(_, 'testeglobal', {
    get: function () {
      return testeglobal;
    },
    set: function (value) {
      testeglobal = value;
    }
  });
  _.botaoPressionado = botaoPressionado;
  testeglobal = 1;
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
