let palavra;

function setup() {
  createCanvas(400, 400);//criando cenário

  palavra = palavraAleatoria();//palavra aleatória
}

function palavraAleatoria(){//palavra aleatória
  let palavras = ["dalmagro", "dalmagro", "dalmagro"];//colocando palavras//dizer palavras dalmagro
  return random(palavras);//retorno das palavras
}

function inicializaCores() {//iniciar cores

  background("grey");//cor do fundo//cinza cor do fundo
  fill("green");//cor da palavra//verde cor da palavra
  textSize(64);//tamanho da fonte//tamanho da fonte em 64
  textAlign(CENTER, CENTER);//centralizando 
}

function palavraParcial(minimo, maximo) {//palavra parcial no mínimo e máximo 
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);//0 quantidade
  return parcial;//retorno da parcial
}

function draw() {

  inicializaCores();//iniciar cores

  let texto = palavraParcial(0, width);
  text(texto, 200, 200);//tamanho texto 200
}
