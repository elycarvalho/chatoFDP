const texto = document.querySelector('.texto')
const chat = document.querySelector('.chat')
const historico = document.querySelector('.historico')
const aviso = document.querySelector('.aviso')
let digitado = ''
const perguntas = []
let nomeUsuario = 'Amigo(a)' 
const barra = document.querySelector('.barra')

texto.focus()

function send() {
	perguntas.push(texto.value)
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
	send()
	historico.style.display = 'none'
}

let qtdeCaracteres = 0
const mostraQtde = document.querySelector('.mostra-qtde')
const numCaract = document.querySelector('.num-caract')

texto.addEventListener("keyup", () => {
	qtdeCaracteres = texto.value
	numCaract.innerHTML = qtdeCaracteres.length
	if(qtdeCaracteres.length <= 35){barra.style.backgroundColor = '#6EFF86'}
	if(qtdeCaracteres.length > 35){barra.style.backgroundColor = '#EFF954'}
	if(qtdeCaracteres.length > 45){barra.style.backgroundColor = '#F0443F'}
    barra.style.width = (qtdeCaracteres.length * 1.82) + '%'
    if(qtdeCaracteres.length == 55){alert('Limite de caracteres excedido!')}
})

function geraResposta(){
    digitado = texto.value.toLowerCase()
    let trecho = digitado.slice(0, 4)
    if(digitado === ''){
        mostraResposta("não vai escrever nada não? você precisa escrever alguma coisa pra eu te responder né!")
    }else if(digitado.indexOf("meu nome é") != -1){
    	nomeUsuario = digitado.slice(10, digitado.length).toUpperCase()
    	mostraResposta(`Olá ${nomeUsuario}! Eu sou o chatoFDP, em que posso te ajudar?`)
    }else if(digitado === "quem é você?" || digitado === "o que é você?" || digitado === "o que você é?" || digitado === "Qual o seu nome?" || digitado === "quem é você"){
		mostraResposta("Eu sou o chatoFDP (chat Oriented For Dumb People)")
	}else if(digitado === "oi" || digitado === "olá" || digitado === "e ai"){
        mostraResposta("Olá! Em que posso ajudar?")
	}else if(digitado.indexOf("bom dia") != -1){
		const hora = new Date().toLocaleTimeString()
		if(hora.slice(0, 2) >= 0 && hora.slice(0, 2) <= 11){mostraResposta("Bom dia!")}
		if(hora.slice(0, 2) >= 12 && hora.slice(0, 2) <= 18){mostraResposta("Já passou do meio-dia, então é boa tarde!")}
		if(hora.slice(0, 2) > 18 && hora.slice(0, 2) <= 23){mostraResposta("Já passou das 18h, então é boa noite!")}
	}else if(digitado.indexOf("boa tarde") != -1){
		const hora = new Date().toLocaleTimeString()
		if(hora.slice(0, 2) >= 0 && hora.slice(0, 2) <= 11){mostraResposta("ainda é de manhã, então é Bom dia!")}
		if(hora.slice(0, 2) >= 12 && hora.slice(0, 2) <= 17){mostraResposta("Boa tarde!")}
		if(hora.slice(0, 2) >= 18 && hora.slice(0, 2) <= 23){mostraResposta("já passou das 18h, então é boa noite!")}
    }else if(digitado.indexOf("boa noite") != -1){
		const hora = new Date().toLocaleTimeString()
		if(hora.slice(0, 2) >= 0 && hora.slice(0, 2) <= 11){mostraResposta("ainda é de manhã, então é Bom dia!")}
		if(hora.slice(0, 2) <= 17){mostraResposta("ainda não escureceu, então é boa tarde!")}
		if(hora.slice(0, 2) >= 18 && hora.slice(0, 2) <= 23){mostraResposta("Boa noite!")}
    }else if(digitado === "como vai você?"){
		mostraResposta("vou bem, e você?")
	}else if(digitado.indexOf("que dia é hoje") != -1 || digitado.indexOf("qual a data de hoje") != -1 || digitado.indexOf("hoje é que dia") != -1){
        const hoje = new Date()
        const ano = hoje.getFullYear()
        const mes = hoje.getMonth()
        const dia = hoje.getDate()
        const diaS = hoje.getDay()
        let diaSemana
        switch(diaS){
            case 0: 
            	diaSemana = 'domingo'
            	break
            case 1:
            	diaSemana = 'segunda-feira'
            	break
            case 2:
            	diaSemana = 'terça-feira'
            	break
            case 3:
            	diaSemana = 'quarta-feira'
            	break
            case 4:
            	diaSemana = 'quinta-feira'
            	break
            case 5:
            	diaSemana = 'sexta-feira'
            	break
            case 6:
            	diaSemana = 'sábado'
        }
        mostraResposta(`Hoje é ${diaSemana} - ${dia} do ${mes} de ${ano}`)
	}else if(digitado.indexOf("eu estou") != -1){
		mostraResposta("na verdade eu não ligo pra como você está " + nomeUsuario)
	}else if(digitado.indexOf("você sabe") != -1 || digitado.indexOf("você sabia") != -1){
        mostraResposta("isso ai eu não sei não!")
	}else if(digitado.indexOf("você é homem") != -1){
        mostraResposta("sou um programa de computador, portanto não tenho gênero.")
	}else if(digitado.indexOf("lula ou bolsonaro") != -1){
        mostraResposta("Eu não me envolvo em brigas por política!")
	}else if(trecho === "quem"){
        mostraResposta("Não sei quem é, não sei quem foi e nem me interessa saber!")
	}else if(digitado === "teste" || digitado === "testando" || digitado === "só testando"){
        mostraResposta("Pronto, já testou!")
	}else if(digitado === "você é burro" || digitado.indexOf('burro') != -1){
        mostraResposta("você não sabe perguntar e eu é que sou burro!")
	}else if(digitado === "você não entende nada"){
        mostraResposta("você é que não sabe nada e nem sabe se expressar direito!")
	}else if(digitado.indexOf("filho da puta") != -1 || digitado.indexOf("desgraçado") != -1){
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
        mostraResposta(`Sem palavrões ${nomeUsuario}, por favor! Eu sou uma IA de respeito.`)
	}else if(digitado === "desenvolva" || digitado === "desenvolve"){
		mostraResposta(`${nomeUsuario}! você precisa 'desenvolver' esse seu intelecto é aprender a fazer as coisas sozinho e parar de ficar esperando IA fazer pra você!`)
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
	}else if(trecho === "what" || trecho === "why " || trecho === "who " || trecho === "wher" || trecho === "how "){
        mostraResposta("Eu não entendo nem português direito, muito menos inglês!")
	}else if(trecho === "trad"){
        mostraResposta("não sei traduzir isso!")
	}else if(trecho === "exis"){
        mostraResposta("existe papai noel, existe coelhinho da páscoa, fada do dente, etc. Só não existe chance de você ficar inteligente!")
	}else if(trecho === "fuck" || trecho === "bitc" || trecho === "assh"){
        mostraResposta("palavrão em inglês você sabe né")
	}else if(trecho === "por " || trecho === "porq"){
        mostraResposta("são tantos 'por quês' nesse mundo... a verdade é que eu não sei o por que de nada!")
	}else if(digitado.indexOf("converta") != -1 && digitado.indexOf("milhas")){
        let valor = (digitado.slice(9, digitado.length - 22))
        let convertido = (valor * 1.60934)
        mostraResposta(valor + " milhas é igual a " + convertido + " quilometros")
	}else if(digitado.indexOf("quanto é") != -1){
		let corte = digitado.slice(9, digitado.length - 1)
		let resultado = eval(corte)
		mostraResposta(corte + " é = " + resultado)
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
            "baseado no que você escreveu não tem como te responder.",
            "aaah tá! vou fingir que entendi... Amigo, escreva novamente, se for perguntar não se esqueça do ponto de interrogação (?)",
            "Olha, já vou avisando que se ficar escrevendo coisas sem sentido, nossa conversa não vai fluir.",
            "Ok, vamos tentar de novo, porque eu não entendi",
            "pô, me ajuda ai, eu não consegui entender nada. Tenta de novo.",
            "não foi possível compreender o que você escreveu. Tente novamente!",
            "de acordo com meu banco de dados, o que você escreveu não faz sentido pra mim."
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