let tracos = document.getElementById('tracos')
const digitadas = document.querySelector('.digitadas')
const btnComecar = document.querySelector('.btn-comecar')
const btnRecomecar = document.querySelector('.btn-recomecar')
const telaInicial = document.querySelector('.tela-inicial')
const telaFinal = document.querySelector('.tela-final')
const mensagemFinal = document.querySelector('.mensagem-final')
const todasDigitadas = document.querySelector('.todas-digitadas')
const level = document.querySelector('.level')
const palavra = document.querySelector('.palavra')
const letraDigitada = document.getElementById('letra')
const dicaPalavra = document.querySelector('.dica')
const mostraErros = document.querySelector('.mostra-erros')
const mostraPontuacao = document.querySelector('.mostra-pontuacao')
const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
let letrasDigitadas = []

const easy_level = [
  {word:'planta',tip:'caule, folhas, raiz'},{word:'amarelo',tip:'cor de alerta'},{word:'feliz',tip:'contente'},
  {word:'manhã',tip:'antes do almoço'},{word:'anoitecer',tip:'fim da tarde'},  {word:'nublado',tip:'cheio de nuvens'},
  {word:'familia',tip:'parentes'},{word:'leite',tip:'vaca'}, {word:'janela',tip:'cortina'},{word:'mamar',tip:'bebê gosta'},
  {word:'lagarto',tip:'réptil'},{word:'festa',tip:'comemoração, balada'}, {word:'melancia',tip:'fruta grande'},
  {word:'limão',tip:'fruta azeda'},{word:'laranja',tip:'fruta cítrica'},{word:'margarida',tip:'uma flôr'},
  {word:'farinha',tip:'feita de milho, trigo, mandioca'}, {word:'esmagar',tip:'espremer, apertar com força'},
  {word:'padaria',tip:'tem pão'},{word:'fazenda',tip:'tem criação de animais'},{word:'cadeira',tip:'lugar pra sentar'},
  {word:'notebook',tip:'laptop'},{word:'colorir',tip:'pintar, preencher com cor'},{word:'deletar',tip:'apagar'},
  {word:'lanterna',tip:'ilumina'},{word:'madeira',tip:'feita com árvores'},{word:'bebida',tip:'água, café, vinho...'},
  {word:'conversar',tip:'falar'},{word:'cabelo',tip:'tem na cabeça'},{word:'empilhar',tip:'formar pilhas'},
  {word:'escola',tip:'alunos'},{word:'explodir',tip:'estourar'},{word:'biblioteca',tip:'livros'},
  {word:'dinheiro',tip:'grana'},{word:'ovelha',tip:'carneiro'},{word:'oceano',tip:'mar'},{word:'mansão',tip:'casa'},
  {word:'jogador',tip:"jogo"},{word:'ontem',tip:'hoje'},{word:'chorar',tip:'derramar lágrimas'},{word:'precisar',tip:'necessitar'},
  {word:'filme',tip:'cinema'},{word:'andar',tip:'caminhar'},{word:'retrato',tip:'fotografia'},{word:'cartao',tip:'credito ou debito'},
  {word:'banco',tip:'guarda o dinheiro'},{word:'careca',tip:'sem cabelo'},{word:'obrigado',tip:'agradecimento'},
  {word:'comida',tip:'refeição'},{word:'almoço',tip:'refeição'}, {word:'caneta',tip:'usa pra escrever'},
  {word:'panela',tip:'usa pra cozinhar'},{word:'correto',tip:'certo'},{word:'copiar',tip:'replicar'},
  {word:'espalhar',tip:'antônimo de juntar'},{word:'dezembro',tip:'fim de ano'},{word:'domingo',tip:'setimo dia'},
  {word:'bicicleta',tip:'bike'},{word:'lampada',tip:'emite luz'}, {word:'menino',tip:'garoto'},{word:'mulher',tip:'homem'},
  {word:'serrote',tip:'usa para serrar'},{word:'baleia',tip:'gigante do mar'},{word:'fogueira',tip:'fogo'},
  {word:'amendoim',tip:'ingrediente da paçoca'},{word:'banda',tip:'toca musica'},{word:'musica',tip:'canção'},
  {word:'rosto',tip:'cara'},{word:'pedra',tip:'rocha'}, {word:'hospital',tip:'trata pacientes'},{word:'elefante',tip:'animal grande'},
  {word:'borboleta',tip:'inseto, asas bonitas'},{word:'potente',tip:'forte'},{word:'unicornio',tip:'cavalo com chifre'},
  {word:'colher',tip:'talher'},{word:'cavalo',tip:'pode montar nele'},{word:'dificil',tip:'não é fácil'}
]

const normal_level = [
  {word:'ausencia',tip:'falta de'},{word:'memoria',tip:'lembrança'},{word:'idioma',tip:'português, inglês, etc'},
  {word:'enxaqueca',tip:'dor de cabeça'},{word:'teclado',tip:'digitar letras'},{word:'suporte',tip:'ajuda, apoio, sustentação'},
  {word:'palacio',tip:"casa do rei"},{word:'comercio',tip:'comprar e vender'},{word:'misterio',tip:'segredo, enigma'},
  {word:'camaleão',tip:'muda de cor'},{word:'apartamento',tip:'moradia, condominio'},{word:'crocodilo',tip:'réptil'},
  {word:'salario',tip:'pagamento'},{word:'refrigerador',tip:'geladeira'},{word:'navegante',tip:'aquele que navega'},
  {word:'bateria',tip:'instrumento de percursão'},{word:'bombeiro',tip:'apaga o fogo'},{word:'recordar',tip:'lembrar'},
  {word:'xampu',tip:'lava o cabelo'},{word:'intestino',tip:'parte do sistema digestivo'},{word:'camera',tip:'grava imagens'},
  {word:'supermercado',tip:'lugar de fazer compras'},{word:'enforcar', tip:'estrangular, asfixiar'},{word:'cafeina',tip:'tem no café'},
  {word:'calendario',tip:'dias, meses, semanas...'},{word:'administrador',tip:'gerente, gestor, supervisor'},
  {word:'tempestade',tip:'chuva forte'},{word:'enchente',tip:'causada por excesso de chuva'},{word:'esqueleto',tip:'ossos'},
  {word:'floresta',tip:'bosque, selva'}, {word:'vendedor',tip:'aquele que vende'},{word:'carregador',tip:'recarrega a bateria'},
  {word:'formigueiro',tip:'casa de formigas'},{word:'automatico',tip:'que funciona sozinho'},{word:'sorriso',tip:'cara feliz'},
  {word:'generosidade',tip:'bondade'},{word:'aracnideo',tip:'aranha, escorpião'}, {word:'estetoscopio',tip:'instrumento usado por médicos'},
  {word:'finlandia',tip:'pais do norte europeu'},{word:'business',tip:'market, commerce'},{word:'parlamentar',tip:'referente ao parlamento'},
  {word:'realidade',tip:'não é fantasia'},{word:'apontador',tip:'aponta'},{word:'pacificador',tip:'luta pela paz'},
  {word:'faculdade',tip:'ensino superior'},{word:'prosperidade',tip:'abundância, riqueza, fartura'},
  {word:'dicionario',tip:'vocabulário, verbetes'},{word:'selvagem',tip:'que vive na selva'},{word:'banheiro',tip:'lugar de banho, sanitário'},
  {word:'proprietario',tip:'dono de propriedade'},{word:'garrafa',tip:'ingrediente de bebida'},{word:'aeroporto',tip:'estacionamento de aviões'},
  {word:'feiticeira',tip:'bruxa, maga'},{word:'relampago',tip:'raio, clarão'},{word:'mosquiteiro',tip:'protege de mosquitos'},
  {word:'drogaria',tip:'farmácia'},{word:'cozinheiro',tip:'faz comida'},{word:'semestre',tip:'seis meses'},
  {word:'alcoolismo',tip:'dependência de álcool'},{word:'vassoura',tip:'item de limpeza'}, {word:'pacote',tip:'embalagem'},
  {word:'logomarca',tip:'símbolo de um marca'},{word:'fantasma',tip:'espirito, alma'},{word:'australia',tip:'terra do canguru'},
  {word:'matrimonio',tip:'casamento'},{word:'territorio',tip:'região, dominio'},{word:'ferradura',tip:'calçado do cavalo'},
  {word:'felicidade',tip:'alegria, contentamento'}, {word:'similar',tip:'quase idêntico'},{word:'formidavel',tip:'fantástico, fabuloso, admirável'}
]

const hard_level = [
  {word:'compreensão',tip:'entendimento'},{word:'vasectomia',tip:'esterilização masculina'}, {word:'sinonimo',tip:'mesmo significado'},
  {word:'desilusao',tip:'perda de esperança'},{word:'estagiario',tip:'faz estagio'},{word:'odontologista',tip:'dentista'},
  {word:'desorganizar',tip:'tirar da ordem'},{word:'agropecuaria',tip:'agricultura'}, {word:'comentarista', tip:'faz comentários'},
  {word:'paradisiaco', tip:'que lembra o paraiso'}, {word:'requerimento',tip:'pedido, solicitação'},{word:'propositalmente',tip:'de propósito'},
  {word:'impermeavel', tip:'que não penetra fluidos'}, {word:'hereditariedade',tip:'condição do herdeiro'},
  {word:'indefectivel',tip:'infalivel, perfeito, garantido'},{word:'desfibrilador',tip:'salva paciente com parada cardíaca'},
  {word:'tripulante',tip:'faz parte da tripulação'}, {word:'posterior',tip:'que acontece depois'},{word:'geologia',tip:'estuda a terra'},
  {word:'hipotese',tip:'teoria, especulação'},{word:'criptomoeda',tip:"moeda digital"},{word:'desintegrar',tip:'desfazer, decompor, desagregar'},
  {word:'periscopio',tip:'tem no submarino'},{word:'ovacionar',tip:'aplaudir, aclamar, saudar'},{word:'manuscrito',tip:'escrito à mão'},
  {word:'narcotrafico',tip:'tráfico de drogas'},{word:'palindromo',tip:'pode ser lido ao contrário'},{word:'aracnofobia', tip:'medo de aranha'},
]

let palavras = []

let palavraSecreta
let dica
let letras = []

btnComecar.addEventListener('click', () => {
  telaInicial.style.display = 'none'
  inicio()
})
 
function inicio() {
  switch(level.value) {
    case 'easy':
      palavras = easy_level
      break
    case 'normal':
      palavras = normal_level
      break
    case 'hard':
      palavras = hard_level
  }
  let numAleatorio = Math.trunc(Math.random() * palavras.length)  
  palavraSecreta = palavras[numAleatorio].word
  dica = palavras[numAleatorio].tip

  for (let y = 0; y < palavraSecreta.length; y++) {
  letras.unshift(' _')
  }

  tracos.innerHTML = letras.join(' ')
  letraDigitada.focus()
}

let tem = 0
let naoTem = 0
let erro = 0
let certas = 0
let letra 

letraDigitada.addEventListener('keyup', (e) => { 
  letra = letraDigitada.value.toLowerCase()

  //verifica se foi digitado apenas letra
  if(alfabeto.indexOf(letra) == -1) {
    letraDigitada.value = ''
    letra = ''
    erro--
    alert('Digite apenas letras!')
  }

   //verifica se a letra ja foi digitada
  for (let i = 0; i <= letrasDigitadas.length; i++) {
    if(letra.toUpperCase() == letrasDigitadas[i]){
      alert('Essa letra já foi digitada, tente outra.')
      letra = ''
      letraDigitada.focus()
      erro-- 
    }
  }
  
  if(letra != ''){letrasDigitadas.push(letra.toUpperCase())}
 
  digitadas.innerHTML = letrasDigitadas.join(' - ') 
  tem = 0
  naoTem = 0
  for (let i = 0; i <= palavraSecreta.length; i++) {
    if(palavraSecreta[i] == letra) {
      tem++
      certas++
      letras[i] = palavraSecreta[i]
      tracos.innerHTML = letras.join(' ')
    } 

    if(letra != palavraSecreta[i]) {
      naoTem++
    }
  }
    
  letraDigitada.focus()
  letraDigitada.value = ''

  if(tem == 0 && naoTem != 0) {
    erro++
  }

  let pontuacao = (1000 - Math.round(erro * 142.9))

  if(certas == palavraSecreta.length){
    telaFinal.style.display = 'flex'
    palavra.innerHTML = `A palavra era: <strong>${palavraSecreta}</strong>`
    mostraPontuacao.innerHTML = `Pontuação: ${pontuacao}`
    mensagemFinal.innerHTML = '&#127881; VOCÊ CONSEGUIU! &#127881;'
    todasDigitadas.innerHTML = `Letras que você digitou: ${letrasDigitadas.join(' - ')}`
    cabeca.innerHTML = '&#128526;'
  }

  if(erro >= 7) {
    telaFinal.style.display = 'flex'
    palavra.innerHTML = `A palavra era: <strong>${palavraSecreta}</strong>`
    mensagemFinal.innerHTML = 'VOCÊ PERDEU! &#128546;'
    todasDigitadas.innerHTML = `Letras que você digitou: ${letrasDigitadas.join(' - ')}`
  }

  switch(erro) {
    case 1:
      cabeca.style.display = 'block'
      break
    case 2:
      tronco.style.display = 'block'
      cabeca.innerHTML = '&#128552;'
      break
    case 3:
      bracoEsq.style.display = 'block'
      cabeca.innerHTML = '&#128531;'
      break
    case 4:
      bracoDir.style.display = 'block'
      cabeca.innerHTML = '&#128560;'
      break
    case 5:
      pernaEsq.style.display = 'block'
      cabeca.innerHTML = '&#128532;'
      break
    case 6:
      pernaDir.style.display = 'block'
      cabeca.innerHTML = '&#128534'
      geraDica()
      break
  }
  mostraErros.innerHTML = erro
})

function geraDica() {
  dicaPalavra.style.display = 'block'
  dicaPalavra.innerHTML = 'Dica: ' + dica
}

btnRecomecar.addEventListener('click', () => {
  telaFinal.style.display = 'none'
  dicaPalavra.style.display = 'none'
  numAleatorio = Math.trunc(Math.random() * palavras.length)
  palavraSecreta = palavras[numAleatorio].word
  dica = palavras[numAleatorio].tip
  
  letrasDigitadas = []
  digitadas.innerHTML = ''
  letras = []
  certas = 0
  erro = 0
  mostraErros.innerHTML = 0

  for (let y = 0; y < palavraSecreta.length; y++) {
  letras.unshift(' _')
  }

  cabeca.style.display = 'none'
  tronco.style.display = 'none'
  bracoEsq.style.display = 'none'
  bracoDir.style.display = 'none'
  pernaEsq.style.display = 'none'
  pernaDir.style.display = 'none'

  tracos.innerHTML = letras.join(' ')
  letraDigitada.focus()
})

