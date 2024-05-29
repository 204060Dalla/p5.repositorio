let xBolinha = 300
let yBolinha = 200
let diametro = 30 

let velocidadexBolinha = 5
let velocidadeyBolinha = 5
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostraBolinha()
  movimentoBolinha()
  verificacaoColisaoBordas()
  
  function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro)
  }
  
  function movimentoBolinha(){
xBolinha += velocidadexBolinha
  yBolinha += velocidadeyBolinha 
  }
  function verificacaoColisaoBordas(){
  if(xBolinha +15 > width || xBolinha -15 < 0)
  velocidadexBolinha *= -1
    if(yBolinha +15 > height || yBolinha -15 < 0)
      velocidadeyBolinha *= -1
  }
}
