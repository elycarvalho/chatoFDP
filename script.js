const texto = document.querySelector('.texto')
const chat = document.querySelector('.chat')
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

function geraResposta(){
    digitado = texto.value.toLowerCase()
    let trecho = digitado.slice(0, 4)
	if(digitado === "quem é você?"){
		mostraResposta("Eu sou o chatoFDP")
	}else if(trecho === "quem"){
        mostraResposta("Não sei quem é, não sei quem foi e nem me interessa saber!")
	}else if(digitado === "teste"){
        mostraResposta("Pronto, já testou!")
	}else if(trecho === "qual"){
        mostraResposta("não sei qual é, não sei qual foi, nem quero saber!")
	}else if(trecho === "como"){
		mostraResposta("não sei nem como eu estou aqui, vou saber isso que você perguntou?")
	}else if(trecho === "crie"){
		mostraResposta("não sei criar nem galinha e você querendo que eu crie esse 'troço'!")
	}else if(trecho === "faça" || trecho === "faz" || trecho === "faiz"){
		mostraResposta("se você não sabe fazer imagina eu!")
	}else if(trecho === "onde" || trecho === "aonde"){
		mostraResposta("cara, eu não sei nem onde eu estou, nem aonde vou, nem onde judas perdeu as botas...")
	}else if(trecho === "fala" || trecho === "fale" || trecho === "diga"){
		mostraResposta("não vou dizer nada, porque não sei falar, só sei escrever!")
	}else{
		mostraResposta(
		"Não entendi sua pergunta, reescreva de forma mais clara, ou então peça alguem que saber escrever pra te ajudar."
		)
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