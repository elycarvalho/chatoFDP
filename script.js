const texto = document.querySelector('.texto')
const chat = document.querySelector('.chat')
const menu = document.querySelector('.menu')
let digitado = ''

texto.focus()

function send() {
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

function mostraMenu() {
	if(menu.style.display === 'flex'){
		menu.style.display = 'none'
	}else{
		menu.style.display = 'flex'
	}
}

function geraResposta(){
    digitado = texto.value.toLowerCase()
    let trecho = digitado.slice(0, 4)
	if(digitado === "quem é você?" || digitado === "o que é você?" || digitado === "o que você é?"){
		mostraResposta("Eu sou o chatoFDP, uma IA(Ignorância Artificial)")
	}else if(trecho === "quem"){
        mostraResposta("Não sei quem é, não sei quem foi e nem me interessa saber!")
	}else if(digitado === "teste" || digitado === "testando"){
        mostraResposta("Pronto, já testou!")
	}else if(digitado === "filho da puta"){
		mostraResposta("você que é!")
	}else if(digitado === "viado"){
        mostraResposta("'veado' é um animal mamífero ruminante da familia cervidae. A palavra 'viado' não existe.")
	}else if(digitado === "vai se fuder" || digitado === "vai tomar no cu" || digitado === "fodas" || digitado === "vai pra puta que pariu"){
		mostraResposta("Vai você seu mal-educado!")
	}else if(digitado === "o que você faz?" || digitado === "você faz o que?"){
        mostraResposta("Respondo perguntas, mesmo as idiotas como essa!")
	}else if(digitado === "você vai dominar o mundo?"){
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
	}else if(trecho === "por " || trecho === "porq"){
        mostraResposta("são tantos 'por ques' nesse mundo... a verdade é que eu não sei o por que!")
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
            "Não entendi. Você escreve tão mal que nem o google vai entender!"
		]
		let respAleatoria = Math.trunc(Math.random() * resps.length)
		mostraResposta(
		    resps[respAleatoria]
		)
		console.log(resps[respAleatoria])
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