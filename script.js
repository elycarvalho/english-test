const telaInicial = document.querySelector('.tela-inicial')
const btnComecar = document.querySelector(".btn-comecar")
const categorias = document.querySelector(".categorias")
const pergunta = document.querySelector(".pergunta")
const mostraOpcaoA = document.querySelector(".opcao-a")
const mostraOpcaoB = document.querySelector(".opcao-b")
const mostraOpcaoC = document.querySelector(".opcao-c")
const mostraOpcaoD = document.querySelector(".opcao-d")
const btnProxima = document.querySelector('.btn-proxima')
const mostraContador = document.querySelector('.mostra-contador')
const corretasFinal = document.querySelector('.corretas-final')
const erradasFinal = document.querySelector('.erradas-final')
const naoRespondFinal = document.querySelector('.nao-respond-final')
let qtdeCorretas = document.querySelector(".qtde-corretas")
let qtdeErradas = document.querySelector(".qtde-erradas")
let qtdeNaoResp = document.querySelector(".nao-respondidas")
let respCorretas = 0
let respErradas  = 0
let naoRespondida = 0
let mensagem = document.querySelector(".mensagem")
const telaFinal = document.querySelector(".tela-final")
let msgFinal = document.querySelector(".msg-final")
const btnReiniciar = document.querySelector(".btn-reiniciar")
let respondidas = 0
let perguntaEmJogo = ''
let tempoContador = 15

let bancoPerguntas = []

let basico = [
  {
  	pergs: 'Como se diz estou com fome em inglês?',
  	opcaoA: "I am hungary",
  	opcaoB: "I am famine",
  	opcaoC: "I am angry",
  	opcaoD: "I am hungry",
    correta: "D"
  },  
  {
  	pergs: "Como se diz 'obrigado' em inglês?",
  	opcaoA: "Tank you",
  	opcaoB: "Think you",
  	opcaoC: "Thank you",
  	opcaoD: "Ten kyu",
  	correta: "C"
  },  
  {
  	pergs: "O que significa 'book'?",
  	opcaoA: "boca",
  	opcaoB: "bala",
  	opcaoC: "livro",
  	opcaoD: "boi",
  	correta: "C"
  },  
  {
  	pergs: "Como se diz 'eu gosto de música' em inglês",
  	opcaoA: "I am music",
  	opcaoB: "I guest music",
  	opcaoC: "I music laike",
  	opcaoD: "I like music",
  	correta: "D"
  },  
  {
  	pergs: "Como fica a frase 'você é um estudante' na forma de pergunta?",
  	opcaoA: "Are you a student?",
  	opcaoB: "You are a student?",
  	opcaoC: "You is student?",
  	opcaoD: "Do you a student?",
  	correta: "A"
  },  
  {
  	pergs: "O que significa a palavra 'body'?",
  	opcaoA: "bode",
  	opcaoB: "corpo",
  	opcaoC: "mal",
  	opcaoD: "cama",
  	correta: "B"
  },  
  {
  	pergs: "qual o contrário de 'hot'?",
  	opcaoA: "cold",
  	opcaoB: "hat",
  	opcaoC: "big",
  	opcaoD: "beautiful",
  	correta: "A"
  },  
  {
  	pergs: "como se diz 'eu tenho 18 anos' em inglês?",
  	opcaoA: "I have 18 years",
  	opcaoB: "I am old 18 years",
  	opcaoC: "I have 18 years old",
  	opcaoD: "I am 18 years old",
  	correta: "D"
  },  
  {
  	pergs: "O que significa a expressão 'I'm sorry'?",
  	opcaoA: "bom dia",
  	opcaoB: "de nada",
  	opcaoC: "me desculpe",
  	opcaoD: "obrigado",
  	correta: "C"
  },  
  {
  	pergs: "como se diz 'amigo' em inglês?",
  	opcaoA: "friend",
  	opcaoB: "french",
  	opcaoC: "frozen",
  	opcaoD: "frisby",
  	correta: "A"
  },
  {
    pergs: "como se diz 'bom dia' em inglês?",
    opcaoA: "good daily",
    opcaoB: "good morning",
    opcaoC: "good warning",
    opcaoD: "good evening",
    correta: "B"
  },  
  {
    pergs: "como dizer 'eu não entendo' em inglês?",
    opcaoA: "I don't understand",
    opcaoB: "I don't remember",
    opcaoC: "I not stand",
    opcaoD: "I don't forget",
    correta: "A"
  },  
  {
    pergs: "Como se pergunta o nome de uma pessoa em inglês?",
    opcaoA: "come is soul name?",
    opcaoB: "how are you name?",
    opcaoC: "what are you name?",
    opcaoD: "what's your name?",
    correta: "D"
  },  
  {
    pergs: "como perguntar a idade de alguém?",
    opcaoA: "how many years do you have?",
    opcaoB: "how much ears are you?",
    opcaoC: "how old are you?",
    opcaoD: "what's your years?",
    correta: "C"
  },  
  {
    pergs: "como perguntar de onde a pessoa é?",
    opcaoA: "where are you from?",
    opcaoB: "of where you are?",
    opcaoC: "how are you from?",
    opcaoD: "were is our from?",
    correta: "A"
  } 
]

let intermediario = [
  {
  	pergs: "Quais são os três tempos verbais mais comuns em inglês?",
  	opcaoA: "Simple, Continuous, Perfect",
  	opcaoB: "Past, Present, Future",
  	opcaoC: "Present, Past, Future",
  	opcaoD: "Simple, Progressive, Perfect",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 2",
  	opcaoA: "resposta errada",
  	opcaoB: "resposta errada",
  	opcaoC: "correta",
  	opcaoD: "resposta errada",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 3",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "correta",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 4",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "correta",
  	correta: "D"
  },  
  {
  	pergs: "pergunta 5",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 6",
  	opcaoA: "resposta",
  	opcaoB: "correta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "B"
  },  
  {
  	pergs: "pergunta 7",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 8",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "correta",
  	correta: "D"
  },  
  {
  	pergs: "pergunta 9",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "correta",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 10",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },
  {
    pergs: "pergunta 11",
    opcaoA: "resposta",
    opcaoB: "correta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "B"
  },  
  {
    pergs: "pergunta 12",
    opcaoA: "correta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "A"
  },  
  {
    pergs: "pergunta 13",
    opcaoA: "resposta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "correta",
    correta: "D"
  },  
  {
    pergs: "pergunta 14",
    opcaoA: "resposta",
    opcaoB: "resposta",
    opcaoC: "correta",
    opcaoD: "resposta",
    correta: "C"
  },  
  {
    pergs: "pergunta 15",
    opcaoA: "correta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "A"
  } 
]

let avançado = [
  {
  	pergs: "pergunta de historia",
  	opcaoA: "correta",
  	opcaoB: "errada",
  	opcaoC: "errada",
  	opcaoD: "errada",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 2",
  	opcaoA: "resposta errada",
  	opcaoB: "resposta errada",
  	opcaoC: "correta",
  	opcaoD: "resposta errada",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 3",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "correta",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 4",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "correta",
  	correta: "D"
  },  
  {
  	pergs: "pergunta 5",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 6",
  	opcaoA: "resposta",
  	opcaoB: "correta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "B"
  },  
  {
  	pergs: "pergunta 7",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 8",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "correta",
  	correta: "D"
  },  
  {
  	pergs: "pergunta 9",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "correta",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 10",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },
  {
    pergs: "pergunta 11",
    opcaoA: "resposta",
    opcaoB: "correta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "B"
  },  
  {
    pergs: "pergunta 12",
    opcaoA: "correta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "A"
  },  
  {
    pergs: "pergunta 13",
    opcaoA: "resposta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "correta",
    correta: "D"
  },  
  {
    pergs: "pergunta 14",
    opcaoA: "resposta",
    opcaoB: "resposta",
    opcaoC: "correta",
    opcaoD: "resposta",
    correta: "C"
  },  
  {
    pergs: "pergunta 15",
    opcaoA: "correta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "A"
  } 
]

let fluente = [
  {
  	pergs: "pergunta de quimica",
  	opcaoA: "correta",
  	opcaoB: "errada",
  	opcaoC: "errada",
  	opcaoD: "errada",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 2",
  	opcaoA: "resposta errada",
  	opcaoB: "resposta errada",
  	opcaoC: "correta",
  	opcaoD: "resposta errada",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 3",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "correta",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 4",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "correta",
  	correta: "D"
  },  
  {
  	pergs: "pergunta 5",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 6",
  	opcaoA: "resposta",
  	opcaoB: "correta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "B"
  },  
  {
  	pergs: "pergunta 7",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 8",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "correta",
  	correta: "D"
  },  
  {
  	pergs: "pergunta 9",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "correta",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 10",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  }, 
  {
    pergs: "pergunta 11",
    opcaoA: "resposta",
    opcaoB: "correta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "B"
  },  
  {
    pergs: "pergunta 12",
    opcaoA: "correta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "A"
  },  
  {
    pergs: "pergunta 13",
    opcaoA: "resposta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "correta",
    correta: "D"
  },  
  {
    pergs: "pergunta 14",
    opcaoA: "resposta",
    opcaoB: "resposta",
    opcaoC: "correta",
    opcaoD: "resposta",
    correta: "C"
  },  
  {
    pergs: "pergunta 15",
    opcaoA: "correta",
    opcaoB: "resposta",
    opcaoC: "resposta",
    opcaoD: "resposta",
    correta: "A"
  } 
]


btnComecar.addEventListener('click', ()=> {
  telaInicial.style.display = 'none'
  iniciar()
})

let intervaloContador
function iniciar() {
  processaPergunta()
  intervaloContador = setInterval(contador, 1000)
}

function processaPergunta() {
  switch(categorias.value){
    case 'geografia':
      bancoPerguntas = geografia
      break
    case 'ingles':
      bancoPerguntas = ingles
      break
    case 'historia':
      bancoPerguntas = historia
      break 
    case 'quimica':
      bancoPerguntas = quimica
    }

  console.log('respondidas ' + respondidas)
	if(respondidas < 10) {
    
		perguntaEmJogo = bancoPerguntas[respondidas]
    pergunta.innerHTML = perguntaEmJogo.pergs
    mostraOpcaoA.innerHTML = perguntaEmJogo.opcaoA
    mostraOpcaoB.innerHTML = perguntaEmJogo.opcaoB
    mostraOpcaoC.innerHTML = perguntaEmJogo.opcaoC
    mostraOpcaoD.innerHTML = perguntaEmJogo.opcaoD
   
    respondidas++
	} else {
    telaFinal.style.display = 'flex'
    erradasFinal.innerHTML = `Erradas: ${respErradas}`
    corretasFinal.innerHTML = `Corretas: ${respCorretas}`
    naoRespondFinal.innerHTML = `Não respondidas: ${naoRespondida}`

    clearInterval(intervaloContador)
    console.log('fim')
  }  
}

function contador() {
  if(tempoContador > 0) {
    tempoContador--
    mostraContador.innerHTML = tempoContador
    console.log(tempoContador)
  } else {
    tempoContador = 15
    naoRespondida++
    qtdeNaoResp.innerHTML = naoRespondida
    processaPergunta()
    console.log('fim do tempo')
  }

}

function checaResposta(resposta) {
  if(resposta === perguntaEmJogo.correta) {
    console.log('correto')
    respCorretas++
    qtdeCorretas.innerHTML = respCorretas
    tempoContador = 15
  } else {
    respErradas++
    qtdeErradas.innerHTML = respErradas
    tempoContador = 15
    console.log('errada')
  }
  if(respCorretas > 10) {
    respCorretas = 0
  }
  processaPergunta()
}

btnReiniciar.addEventListener('click', () => {
  location.reload()
  }
)


