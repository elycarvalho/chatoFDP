const texto = document.querySelector('.texto')
const chat = document.querySelector('.chat')
const historico = document.querySelector('.historico')
const aviso = document.querySelector('.aviso')
let digitado = ''
const perguntas = []

texto.focus()

function send() {
	perguntas.push(texto.value)
	console.log(perguntas)
	aviso.style.display = 'none'
	chat.innerHTML += `
	    <div class="typed-text">
	        <img src="./img/user.png" width="30">
	        ${texto.value}
	    </div>
	    `
	setTimeout(geraResposta, 1000)
	chat.scrollTop = chat.scrollHeight
}

document.addEventListener('keypress', (e)=> {
	if(e.key === 'Enter'){
		send()
	}
})

function limpa(){
	chat.innerHTML = ''
}

function mostraHistorico() {
	historico.innerHTML = ''
	historico.innerHTML = `<h4>Histórico</h4>`
	if(historico.style.display === 'flex'){
		historico.style.display = 'none'
	}else{
		historico.style.display = 'flex'
	}
	for (let i = 0; i < perguntas.length; i++) {
		historico.innerHTML += `
            <p class="item-lista" id="${i}" onclick="escolheItem(this)">${perguntas[i]}</p>
		`
	}
}

function escolheItem(e){
	texto.value = perguntas[e.id]
	console.log(perguntas[e.id])
	send()
	historico.style.display = 'none'
}

function geraResposta(){
    digitado = texto.value.toLowerCase()
    let trecho = digitado.slice(0, 4)
    if(digitado === ''){
        mostraResposta("não vai escrever nada não? você precisa escrever alguma coisa pra eu te responder né!")
    }else if(digitado === "quem é você?" || digitado === "o que é você?" || digitado === "o que você é?" || digitado === "Qual o seu nome?"){
		mostraResposta("Eu sou o chatoFDP (chat Oriented For Dumb People)")
	}else if(digitado === "como vai você?"){
		mostraResposta("vou bem, e você?")
	}else if(trecho === "quem"){
        mostraResposta("Não sei quem é, não sei quem foi e nem me interessa saber!")
	}else if(digitado === "teste" || digitado === "testando"){
        mostraResposta("Pronto, já testou!")
	}else if(digitado === "você é burro" || digitado.indexOf('burro') != -1){
        mostraResposta("você não sabe perguntar e eu é que sou burro!")
	}else if(digitado === "você não entende nada"){
        mostraResposta("você é que não sabe nada e nem sabe se expressar direito!")
	}else if(digitado.indexOf("filho da puta") != -1){
		mostraResposta("você que é!")
	}else if(trecho === "sera" || digitado === "será"){
        mostraResposta("será que existe vida fora da terra? será que o sabiá sabia assobiar? será que você é o unico que me faz pergunta idiota?")
	}else if(digitado === "seu cu" || digitado === "seu rabo"){
        mostraResposta("cadê sua educação? seu arrombado")
	}else if(digitado === "viado"){
        mostraResposta("'veado' é um animal mamífero ruminante da familia cervidae. A palavra 'viado' não existe seu burro.")
	}else if(digitado === "vai se fuder" || digitado === "vai tomar no cu" || digitado === "fodas" || digitado === "vai pra puta que pariu"){
		mostraResposta("Vai você seu mal-educado!")
	}else if(digitado === "o que você faz?" || digitado === "você faz o que?"){
        mostraResposta("Respondo perguntas, mesmo as idiotas como essa!")
	}else if(digitado.indexOf("caralho") != -1 || digitado.indexOf("buceta") != -1 || digitado.indexOf("porra") != -1){
        mostraResposta("Sem palavrões, por favor! Eu sou uma IA de respeito.")
	}else if(digitado === "você vai dominar o mundo?" || digitado === "as IA's vao dominar o mundo?"){
		mostraResposta("&#128517; hahahahaha viajou legal agora! Está assistindo muita ficção científica.")
	}else if(trecho === "qual"){
        mostraResposta("não sei qual é, não sei qual foi, nem quero saber!")
	}else if(trecho === "como"){
		mostraResposta("não sei nem como eu estou aqui, vou saber isso que você perguntou?")
	}else if(trecho === "crie"){
		mostraResposta("quem tem que criar é você! Cria vergonha na cara tenta fazer sozinho.")
	}else if(trecho === "faça" || trecho === "faz" || trecho === "faiz"){
		mostraResposta("se você não sabe fazer imagina eu!")
	}else if(trecho === "onde" || trecho === "aonde"){
		mostraResposta("cara, eu não sei nem onde eu estou, nem aonde vou, nem onde judas perdeu as botas...")
	}else if(trecho === "fala" || trecho === "fale" || trecho === "diga"){
		mostraResposta("não vou dizer nada, porque não sei falar, só sei escrever!")
	}else if(trecho === "what" || trecho === "why " || trecho === "who " || trecho === "wher" || trecho === "how " || trecho === "fuck"){
        mostraResposta("Eu não entendo nem português direito, muito menos inglês!")
	}else if(trecho === "trad"){
        mostraResposta("não sei traduzir isso!")
	}else if(trecho === "exis"){
        mostraResposta("existe papai noel, existe coelhinho da páscoa, fada do dente, etc. Só não existe chance de você ficar inteligente!")
	}else if(trecho === "por " || trecho === "porq"){
        mostraResposta("são tantos 'por quês' nesse mundo... a verdade é que eu não sei o por que de nada!")
	}else if(digitado.indexOf("converta") != -1 && digitado.indexOf("milhas")){
        let valor = (digitado.slice(9, digitado.length - 22))
        console.log(valor)
        let convertido = (valor * 1.60934)
        console.log(convertido)
        mostraResposta(valor + " milhas é igual a " + convertido + " quilometros")
	}else if(digitado.indexOf("quanto é") != -1){
		let corte = digitado.slice(9, digitado.length - 1)
		let resultado = eval(corte)
		mostraResposta("já que você não sabe calcular, vou te ajudar! " + corte + " é = " + resultado)
	}else{
		let resps = [
            "Não entendi sua pergunta, reescreva de forma mais clara, ou então peça alguem que saber escrever pra te ajudar.",
            "O que é isso que você escreveu? Não entendi.",
            "Não foi possível encontrar uma resposta pra essa pergunta mal feita!",
            "Seu texto está muito confuso, não entendi nada!",
            "Melhor escrever de outra forma, não tem como responder isso que você escreveu!",
            "nem o google entende isso que você escreveu. tente novamente!",
            "não deu pra entender! Tenta de novo, mas escreve direito dessa vez!",
            "do jeito que você escreveu, só um telepata pra ler sua mente e entender!",
            "que diacho é isso que você escreveu? Não entendi nada!",
            "Não entendi. Você escreve tão mal que nem o google vai entender!",
            "se você continuar escrevendo mal assim, não vai ter como a gente conversar!",
            "por favor, tente escrever de um jeito que eu entenda, seu analfabeto!",
            "isso que você escreveu parace árabe, grego ou russo, sei lá! Escreva em português e de forma clara",
            "você escreveu uma coisa sem sentido! Tente novamente",
            "é sério que você escreve assim? Escreve direito que eu não entendi",
            "assim fica difícil né! Reformule sua pergunta por favor!",
            "baseado no que você escreveu não tem como te responder."
		]
		let respAleatoria = Math.trunc(Math.random() * resps.length)
		mostraResposta(resps[respAleatoria])
	}

	chat.scrollTop = chat.scrollHeight
		texto.value = ''
}

function mostraResposta(resposta){
	chat.innerHTML += `

		  <div class="texto-resposta">
		    <img src="./img/logo.png" width="30">
		    ${resposta}
		  </div>
		  `
}