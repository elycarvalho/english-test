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
  	pergs: "Como perguntar 'você é um estudante'?",
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
  	pergs: "Qual frase está no simple past tense?",
  	opcaoA: " I am eating dinner.",
    opcaoB: " She will go to the store.",
    opcaoC: " They played soccer yesterday.",
    opcaoD: " We are going to the park.",
  	correta: "C"
  },  
  {
  	pergs: '"Could you please repeat that?" significa ________.',
  	opcaoA: " Eu não entendo.",
    opcaoB: " Você poderia repetir, por favor?",
    opcaoC: " Eu não concordo.",
    opcaoD: " O que você está fazendo?",
  	correta: "B"
  },  
  {
  	pergs: "Qual frase está correta?",
  	opcaoA: " My sister is a nurse since five years.",
    opcaoB: " I have been to Paris last month.",
    opcaoC: " She has lived here for two years.",
    opcaoD: " They didn't came to the party.",
  	correta: "C"
  },  
  {
  	pergs: 'como se diz "me desculpe" em inglês?',
  	opcaoA: "me despiace",
  	opcaoB: "worry me",
  	opcaoC: "I'm fine",
  	opcaoD: "I'm sorry",
  	correta: "D"
  },  
  {
  	pergs: 'qual a forma comparativa de "good"?',
  	opcaoA: "better",
  	opcaoB: "best",
  	opcaoC: "gooder",
  	opcaoD: "more good",
  	correta: "A"
  },  
  {
  	pergs: 'qual frase está no "present continuous tense"?',
  	opcaoA: " I will travel to Europe next summer.",
    opcaoB: " She sings in a choir.",
    opcaoC: " They are studying for the exam.",
    opcaoD: " We went to the beach yesterday.",
  	correta: "C"
  },  
  {
  	pergs: 'qual a forma correta de "I have" no past tense?',
  	opcaoA: "I had",
    opcaoB: "I has",
    opcaoC: "I haven",
    opcaoD: "I haved",
  	correta: "A"
  },  
  {
  	pergs: "(Complete a frase) I have been studying English ________ five years.",
  	opcaoA: "since",
  	opcaoB: "during",
  	opcaoC: "by",
  	opcaoD: "for",
  	correta: "D"
  },  
  {
  	pergs: "(complete a expressão idiomática) can you lend me ___________?",
  	opcaoA: "an arm",
  	opcaoB: "a nose",
  	opcaoC: "a hand",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: 'qual palavra é sinônimo de "happy"?',
  	opcaoA: "joyful",
  	opcaoB: "sad",
  	opcaoC: "heavy",
  	opcaoD: "angry",
  	correta: "A"
  },
  {
    pergs:  '(complete a frase) she is taller _________ her brother.',
    opcaoA: "that",
    opcaoB: "than",
    opcaoC: "more",
    opcaoD: "beyound",
    correta: "B"
  },  
  {
    pergs: 'qual é a ordem correta dos adjetivos na frase: "He is a tall, handsome, intellingent man"?',
    opcaoA: "handsome, tall, intellingent",
    opcaoB: "tall, handsome, intellingent",
    opcaoC: "intellingent, handsome, tall",
    opcaoD: "handsome, intellingent, tall",
    correta: "A"
  },  
  {
    pergs: 'qual frase está correta?',
    opcaoA: " He don't like coffee.",
    opcaoB: " They is going to the party.",
    opcaoC: " She have two brothers.",
    opcaoD: " We have been friends for years.",
    correta: "D"
  },  
  {
    pergs: 'qual é o contrário de "hard"?',
    opcaoA: "easy",
    opcaoB: "newbie",
    opcaoC: "difficult",
    opcaoD: "rookie",
    correta: "C"
  },  
  {
    pergs:  "(complete a frase) I would like a cup of tea, ________?",
    opcaoA: " could you bring me one",
    opcaoB: " can I eat one",
    opcaoC: " do you let me one",
    opcaoD: " are you coming, please",
    correta: "A"
  } 
]

let avançado = [
  {
  	pergs: "qual frase está na forma condicional correta?",
  	opcaoA: " If I will see her, I will say hello.",
    opcaoB: " If I see her, I would say hello.",
    opcaoC: " If I see her, I will say hello.",
    opcaoD: " If I will see her, I would say hello.",
    correta: "C"
  },  
  {
  	pergs: 'o que significa a palavra "corageous"?',
  	opcaoA: "correto",
  	opcaoB: "corajoso",
  	opcaoC: "paciente",
  	opcaoD: "carinhoso",
  	correta: "B"
  },  
  {
  	pergs: "(complete a frase) It's raining heavily, I'll take ____________",
  	opcaoA: "reindeer",
  	opcaoB: "little shadow",
  	opcaoC: "an umbrella",
  	opcaoD: "guard drain",
  	correta: "C"
  },  
  {
  	pergs: 'qual frase está na "passive voice"?',
  	opcaoA: "The teacher explained the lesson.",
    opcaoB: "They built a new bridge.",
    opcaoC: "She painted a beautiful picture.",
    opcaoD: "The book was written by a famous author.",
  	correta: "D"
  },  
  {
  	pergs: 'qual a forma correta do verbo "to go" present perfect tense, para "we"?',
  	opcaoA: "we have gone",
  	opcaoB: "went",
  	opcaoC: "has went",
  	opcaoD: "have been going",
  	correta: "A"
  },  
  {
  	pergs: 'qual palavra é o antônimo de "generous"?',
  	opcaoA: "kind",
  	opcaoB: "selfish",
  	opcaoC: "polite",
  	opcaoD: "friendly",
  	correta: "B"
  },  
  {
  	pergs: "She ________ English for many years before moving to the United States.",
  	opcaoA: "has studied",
  	opcaoB: "was studying",
  	opcaoC: "studied",
  	opcaoD: "studies",
  	correta: "A"
  },  
  {
  	pergs: 'o que significa o phrasal verb "carry out"?',
  	opcaoA: "carregar algo para fora",
  	opcaoB: "cancelar ou desistir de algo",
  	opcaoC: "explorar ou investigar algo",
  	opcaoD: "realizar ou executar algo",
  	correta: "D"
  },  
  {
  	pergs: 'o que significa a expressão "piece of cake"?',
  	opcaoA: "um bolo delicioso",
  	opcaoB: "uma obra prima",
  	opcaoC: "algo fácil ou simples de fazer",
  	opcaoD: "uma coisa frágil",
  	correta: "C"
  },  
  {
  	pergs: 'O que significa o termo "scapegoat"?',
  	opcaoA: "bode expiatório, pessoa culpada injustamente",
  	opcaoB: "um tipo de jogo de tabuleiro",
  	opcaoC: "um plano de fuga",
  	opcaoD: "um tipo de animal do deserto",
  	correta: "A"
  },
  {
    pergs: '(complete a frase) She plays the piano ________ anyone I know.',
    opcaoA: "so good as",
    opcaoB: "better than",
    opcaoC: "more good as",
    opcaoD: "the best than",
    correta: "B"
  },  
  {
    pergs: 'como fica a frase "you are good" no past perfect tense?',
    opcaoA: "you had been good",
    opcaoB: "you were good",
    opcaoC: "you have been",
    opcaoD: "you was good",
    correta: "A"
  },  
  {
    pergs: "(complete a frase) If I had studied harder, ________ the exam.",
    opcaoA: "I would pass",
    opcaoB: "I will pass",
    opcaoC: "I had been passed",
    opcaoD: "I would have passed",
    correta: "D"
  },  
  {
    pergs: 'qual o significado da expressão "get along with"?',
    opcaoA: "levar junto com",
    opcaoB: "concordar com",
    opcaoC: "ter bom relacionamento com",
    opcaoD: "dar continuidade a",
    correta: "C"
  },  
  {
    pergs: 'qual frase está usando o pronome relativo da forma correta?',
    opcaoA: "The house, where I grew up, is in a small town.",
    opcaoB: "The book, who I read last week, was very interesting.",
    opcaoC: "The person, which is standing over there, is my sister.",
    opcaoD: "The car, whom I bought yesterday, is blue.",
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
    case 'basico':
      bancoPerguntas = basico
      break
    case 'intermediario':
      bancoPerguntas = intermediario
      break
    case 'avancado':
      bancoPerguntas = avancado
      break 
    case 'fluente':
      bancoPerguntas = fluente
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


