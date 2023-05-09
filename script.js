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
        mostraResposta("Não sei quem é, nem me interessa saber!")
	}else{
		mostraResposta("Não entendi sua pergunta, reescreva de forma mais clara.")
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