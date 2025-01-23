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
let respCorretas = 0
let respErradas  = 0
let naoRespondida = 0
const telaFinal = document.querySelector(".tela-final")
const msgFinal = document.querySelector(".msg-final")
const porcentagem = document.querySelector(".porcentagem")

const btnReiniciar = document.querySelector(".btn-reiniciar")
let respondidas = 0
let perguntaEmJogo = ''
let tempoContador = 60

let bancoPerguntas = []

let nivelA = [
  { 
  pergs: "Complete com a forma correta do verbo to be: She ___ a doctor",
  opcaoA: " am",
  opcaoB: " is",
  opcaoC: " are",
  opcaoD: " been",
  correta: "B",
  },
  { 
  pergs: "Escolha a opção correta para formar uma pergunta: ___ you like pizza?",
  opcaoA: " Do",
  opcaoB: " Does",
  opcaoC: " Is",
  opcaoD: " are",
  correta: "A",
  },
  {
  pergs: "Escolha o tempo verbal correto: Yesterday, he ___ to the park.",
  opcaoA: " go",
  opcaoB: " goes",
  opcaoC: " went",
  opcaoD: " was",
  correta: "C",
  },
  {
  pergs: "Complete com a preposição correta: The book is ___ the table.",
  opcaoA: " on",
  opcaoB: " in",
  opcaoC: " at",
  opcaoD: " over",
  correta: "A",
  },
  {
  pergs: "Escolha a forma negativa correta: They ___ playing football now.",
  opcaoA: " is not",
  opcaoB: " are not",
  opcaoC: " do not",
  opcaoD: " not are",
  correta: "B",
  },
  {
  pergs: 'Qual é o significado de "apple"?',
  opcaoA: " Uva",
  opcaoB: " Banana",
  opcaoC: "Maçã",
  opcaoD: " Pêra",
  correta: "C",
  },
  {
  pergs: "Escolha a palavra que completa a frase: I have a _____ of bread.",
  opcaoA: " bottle",
  opcaoB: " piece",
  opcaoC: " slice",
  opcaoD: " part",
  correta: "C",
  },
  {
  pergs: "Qual das opções é um meio de transporte?",
  opcaoA: "comb ",
  opcaoB: " Table",
  opcaoC: " Book",
  opcaoD: "Car ",
  correta: "D",
  },
  {
  pergs: 'Escolha a opção correta para "roupa de inverno":',
  opcaoA: " Coat",
  opcaoB: " Shirt",
  opcaoC: " Shorts",
  opcaoD: " underpants",
  correta: "A",
  },
  {
  pergs: "Qual das palavras é um animal?",
  opcaoA: "Window ",
  opcaoB: " Chair",
  opcaoC: "Dog ",
  opcaoD: " razor",
  correta: "C",
  },
  {
  pergs: "Complete a frase: I ___ to school every day.",
  opcaoA: " go",
  opcaoB: " goes",
  opcaoC: " went",
  opcaoD: " am",
  correta: "A",
  },
  {
  pergs: "Escolha a frase que está no passado:",
  opcaoA: " She eats pizza.",
  opcaoB: " She ate pizza.",
  opcaoC: " She is eating pizza.",
  opcaoD: " She will ate pizza",
  correta: "B",
  },
  {
  pergs: "Qual frase está no presente contínuo?",
  opcaoA: " I am reading a book.",
  opcaoB: " I read a book.",
  opcaoC: " I will read a book.",
  opcaoD: " I'm going to read a book",
  correta: "A",
  },
  {
  pergs: "Escolha a frase correta: There ___ many students in the classroom.",
  opcaoA: " is",
  opcaoB: " are",
  opcaoC: " am",
  opcaoD: "be",
  correta: "B",
  },
  {
  pergs: "Complete a frase com o artigo correto: This is ___ orange.",
  opcaoA: " an",
  opcaoB: " a",
  opcaoC: " the",
  opcaoD: "one",
  correta: "A",
  },
  {
  pergs: 'Como você responde à pergunta "How are you?"',
  opcaoA: " It's sunny thanks.",
  opcaoB: " I live in London.",
  opcaoC: "I'm fine, thank you. ",
  opcaoD: " I is good.",
  correta: "C",
  },
  {
  pergs:  'Escolha a resposta correta: "What time is it?"',
  opcaoA: " It's 10 o'clock.",
  opcaoB: " I'm fine.",
  opcaoC: " I'm from Brazil.",
  opcaoD: " Is 10 hours.",
  correta: "A",
  },
  {
  pergs: "Qual pergunta é usada para pedir direções?",
  opcaoA: " Where is the bus station?",
  opcaoB: " How are you?",
  opcaoC: " What is your name?",
  opcaoD: " which is there",
  correta: "A",
  },
  {
  pergs: "Complete a frase: Can I have a ___ of water, please?",
  opcaoA: " glass",
  opcaoB: " bread",
  opcaoC: " book",
  opcaoD: " cane",
  correta: "A",
  },
  {
  pergs: 'Qual é a forma educada de pedir algo? "___ I have the menu, please?"',
  opcaoA: "say ",
  opcaoB: " Do",
  opcaoC: " Is",
  opcaoD: "Can ",
  correta: "D",
  }
]

let nivelB = [
  {
  pergs: "Complete a frase com a forma correta do verbo: If I ___ more time, I would travel around the world.",
  opcaoA: "have",
  opcaoB: " had",
  opcaoC: " will have",
  opcaoD: " heavy",
  correta: "B",
  },
  {
  pergs: "Escolha a opção correta para o uso do present perfect: I ___ to Paris three times.",
  opcaoA: " have been",
  opcaoB: " was",
  opcaoC: " have gone",
  opcaoD: " had was",
  correta: "A",
  },
  {
  pergs: "Qual é a frase correta no future continuous?",
  opcaoA: " I will working tomorrow at this time.",
  opcaoB: " I will be working tomorrow at this time.",
  opcaoC: " I am work tomorrow at this time.",
  opcaoD: " I will have working tomorrow at this time.",
  correta: "B",
  },
  {
  pergs: "Complete com a forma correta: He suggested ___ to the cinema.",
  opcaoA: " go",
  opcaoB: " to go",
  opcaoC: " going",
  opcaoD: " gone",
  correta: "C",
  },
  {
  pergs: 'Escolha a opção correta para transformar em discurso indireto: "I’m tired," she said.',
  opcaoA: " She said she is tired.",
  opcaoB: " She said she was tired.",
  opcaoC: " She said she were tired.",
  opcaoD: " She said she had tired.",
  correta: "B",
  },
  {

  pergs: "Qual palavra completa a frase? She’s very ___ about the meeting tomorrow.",
  opcaoA: " excited",
  opcaoB: " exciting",
  opcaoC: " excitement",
  opcaoD: " exciten",
  correta: "A",
  },
  {
  pergs: 'Escolha o sinônimo de "difficult":',
  opcaoA: " Hard",
  opcaoB: " Simple",
  opcaoC: " Quick",
  opcaoD: " Heard",
  correta: "A",
  },
  {
  pergs: "Complete a frase com a expressão correta: He was late because he got ___ in traffic.",
  opcaoA: " stuck",
  opcaoB: " lost",
  opcaoC: " confused",
  opcaoD: " bottled",
  correta: "A",
  },
  {
  pergs: 'Qual das palavras significa "economizar dinheiro"?',
  opcaoA: " Save",
  opcaoB: " Spend",
  opcaoC: " Waste",
  opcaoD: " pulp",
  correta: "A",
  },
  {
  pergs: "Escolha o adjetivo que descreve uma pessoa que gosta de ajudar os outros:",
  opcaoA: " Selfish",
  opcaoB: " Lazy",
  opcaoC: " Generous",
  opcaoD: " Healer",
  correta: "C",
  },
  {
  pergs: "John has always loved the sea. He sail with his friends. O que John gosta de fazer?",
  opcaoA: " Caminhar nas montanhas",
  opcaoB: " Navegar no mar",
  opcaoC: " Viajar de avião",
  opcaoD: " Surfar",
  correta: "B",
  },
  {
  pergs: "John spends a week sailing. Por quanto tempo John costuma navegar?", 
  opcaoA: " Um fina de semana",
  opcaoB: " Um mês",
  opcaoC: " Todo o verão",
  opcaoD: "Uma semana ",
  correta: "D",
  },
  {
  pergs: '"The museum opens at 9 a.m. and closes at 5 p.m." Que horas o museu fecha?',
  opcaoA: " Às 9 da manhã",
  opcaoB: " Às 5 da tarde",
  opcaoC: " Ao meio-dia",
  opcaoD: " Às 5 da manhã",
  correta: "B",
  },
  {
  pergs: "Tickets can be purchased online or at the entrance. Como os ingressos podem ser comprados?",
  opcaoA: " Apenas na entrada",
  opcaoB: " Online ou na entrada",
  opcaoC: " Apenas online",
  opcaoD: " Online pagando entrada",
  correta: "B",
  },
  {
  pergs: "What would you do if you won the lottery?",
  opcaoA: " I will buy a car.",
  opcaoB: " I would buy a car.",
  opcaoC: " I bought a car.",
  opcaoD: " I will bye a car.",
  correta: "B",
  },
  {
  pergs: "Complete a frase: It’s important to ___ your goals if you want to succeed.",
  opcaoA: " achieve",
  opcaoB: " avoid",
  opcaoC: " fail",
  opcaoD: " make",
  correta: "A",
  },
  {
  pergs: "Qual frase expressa uma opinião?",
  opcaoA: " I think this movie is amazing.",
  opcaoB: " The movie started at 8 p.m.",
  opcaoC: " She was late for the movie.",
  opcaoD: " I hate your pont of view.",
  correta: "A",
  },
  {
  pergs: 'Escolha a pergunta correta para esta resposta: "I’ve been working here for two years."',
  opcaoA: "How long do you work here?",
  opcaoB: "How long have you been working here?",
  opcaoC: "How many years you worked here?",
  opcaoD: "How much time you work here?",
  correta: "B",
  },
  {
  pergs: "Qual frase está no modo passivo?",
  opcaoA: " They cleaned the house yesterday.",
  opcaoB: " The house was cleaned yesterday.",
  opcaoC: " They are cleaning the house.",
  opcaoD: " They found a cleaner for the house.",
  correta: "B",
  },
  {
  pergs: "Complete a frase com a opção mais adequada: We need to ___ a decision by tomorrow.",
  opcaoA: " make",
  opcaoB: " do",
  opcaoC: " take",
  opcaoD: " decide",
  correta: "A",
  }
]

let nivelC = [
  {
  pergs: "Complete a frase com a forma correta do verbo: If I ___ known about the meeting, I would have attended.",
  opcaoA: " have",
  opcaoB: " had",
  opcaoC: " would have",
  opcaoD: " has",
  correta: "B",
  },
  {
  pergs: "Escolha a opção que melhor completa a frase: By the time she arrives, we ___ the meeting.",
  opcaoA: " will finish",
  opcaoB: " will have finished",
  opcaoC: " have finished",
  opcaoD: " going to finish",
  correta: "C",
  },
  {
  pergs: "Qual a forma correta de usar o mixed conditionals? If he ___ more careful, he wouldn't have broken the vase.",
  opcaoA: " were",
  opcaoB: " was",
  opcaoC: " had been",
  opcaoD: " has",
  correta: "C",
  },
  {
  pergs: 'Complete com a forma correta do verbo: I wish I ___ more time to study for the exam.',
  opcaoA: " have",
  opcaoB: " had",
  opcaoC: " would have",
  opcaoD: " has",
  correta: "B",
  },
  {
  pergs: "Escolha a alternativa que apresenta a forma correta do verbo no futuro perfeito: By next year, they ________ the project.",
  opcaoA: " complete",
  opcaoB: " will complete",
  opcaoC: " will have completed",
  opcaoD: " going complete",
  correta: "C",
  },
  {
  pergs: 'Qual é o sinônimo de "mitigate"?',
  opcaoA: " Increase",
  opcaoB: " Alleviate",
  opcaoC: " Exacerbate",
  opcaoD: " open",
  correta: "B",
  },
  {
  pergs: "Complete com o vocabulário mais apropriado: The scientist's ___ research led to groundbreaking discoveries in medicine.",
  opcaoA: " superficial",
  opcaoB: " shallow",
  opcaoC: " profound",
  opcaoD: " soft",
  correta: "C",
  },
  {
  pergs: 'Qual palavra melhor completa esta frase? The manager is quite ___ when it comes to making decisions.',
  opcaoA: " indecisive",
  opcaoB: " assertive",
  opcaoC: " tentative",
  opcaoD: " believer",
  correta: "B",
  },
  {
  pergs: 'Qual expressão é sinônima de "in the long run"?',
  opcaoA: " Ultimately",
  opcaoB: " Now and then",
  opcaoC: " In the short term",
  opcaoD: " running fast",
  correta: "A",
  },
  {
  pergs: 'Qual das palavras significa "reconhecimento público ou aprovação"?',
  opcaoA: " Disregard",
  opcaoB: " Acknowledgment",
  opcaoC: " Reprimand",
  opcaoD: " Reckon",
  correta: "B",
  },
  {
  pergs: '"This phenomenon has garnered widespread attention." Qual a tradução correta desta frase?',
  opcaoA: " Este fantasma gosta de muita atenção",
  opcaoB: " Este fenótipo ganhou atendimento amplo",
  opcaoC: " Este fenômeno atraiu ampla atenção",
  opcaoD: " Este fenômeno tem juntado atenção espalhada",
  correta: "C",
  },
  {
  pergs: 'Qual palavra tem o mesmo significado de "about-face"?',
  opcaoA: " facialize",
  opcaoB: " hide",
  opcaoC: " turnaround",
  opcaoD: " defacing",
  correta: "C",
  },
  {
  pergs: 'Qual a tradução para esta frase? "regardless the support of the crowd."',
  opcaoA: " foi difícil suportar o público.",
  opcaoB: " Independentemente do apoio da multidão.",
  opcaoC: " Hesitei em ajudar a multidão.",
  opcaoD: " O povo não suportou o desleixo.",
  correta: "B",
  },
  {
  pergs: 'O que significa "Despite"?',
  opcaoA: " desprezo",
  opcaoB: " apesar de",
  opcaoC: " despistar",
  opcaoD: " disputar",
  correta: "B",
  },
  {
  pergs: 'Qual a tradução de "pattern"?',
  opcaoA: " padrão",
  opcaoB: " patrão",
  opcaoC: " paternidade",
  opcaoD: " partida",
  correta: "A",
  },
  {
  pergs: 'O que significa a expressão "to be in hot water"?',
  opcaoA: " Estar em uma situação difícil",
  opcaoB: " Estar em um lugar quente",
  opcaoC: " Estar em uma reunião importante",
  opcaoD: " Estar em uma sauna",
  correta: "A",
  },
  {
  pergs: 'qual frase tem o mesmo sentido da frase a seguir? "She has the world at her feet."',
  opcaoA: " She is feeling overwhelmed.",
  opcaoB: " She is extremely successful.",
  opcaoC: " She is feeling unwell.",
  opcaoD: " She has very expensive shoes.", 
  correta: "B",
  },
  {
  pergs: 'Complete a frase com o uso correto de "despite" ou "in spite of": ___ the challenges, they managed to complete the project.',
  opcaoA: " Despite",
  opcaoB: " In spite of",
  opcaoC: " Both are correct",
  opcaoD: " Despite of",
  correta: "C",
  },
  {
  pergs: 'Qual é o significado de "to put all your eggs in one basket"?',
  opcaoA: " Confiar em várias opções para minimizar o risco",
  opcaoB: " Colocar todas as suas apostas em uma única coisa",
  opcaoC: " Fazer muitas coisas ao mesmo tempo",
  opcaoD: " economizar dinheiro",
  correta: "B",
  },
  {
  pergs: 'Complete a frase com o uso correto de "on the verge of": The company is ___ launching a revolutionary new product.',
  opcaoA: " in",
  opcaoB: " on",
  opcaoC: " at",
  opcaoD: " about",
  correta: "B",
  }
]

let listening = [
 {
 pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('my cat has a ball')">&#128266;</button>`,
 opcaoA: "my cap has a board",
 opcaoB: "my cat has a ball",
 opcaoC: "may can have a bowl?",
 opcaoD: "my cats have it all",
 correta: "B",
 },
 { 
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('How old are you?')">&#128266;</button>`,
  opcaoA: "how old are you?",
  opcaoB: "hello all you",
  opcaoC: "how are you?",
  opcaoD: "how dare you",
  correta: "A",
  },
  { 
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('red, green and blue')">&#128266;</button>`,
  opcaoA: "rare green fruit",
  opcaoB: "rat grim at bloom",
  opcaoC: "red, green and blue",
  opcaoD: "rap, greed and blues",
  correta: "C",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('what time is it?')">&#128266;</button>`,
  opcaoA: "was tired of it",
  opcaoB: "what time is it?",
  opcaoC: "wall tide in it",
  opcaoD: "what tire is it?",
  correta: "B",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('I am twenty years old')">&#128266;</button>`,
  opcaoA: "I am twenty years old",
  opcaoB: "I am tense and nervous",
  opcaoC: "I am ten years old",
  opcaoD: "I am tempting your owl",
  correta: "A",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('where are you from?')">&#128266;</button>`,
  opcaoA: "wait until four",
  opcaoB: "where are you from?",
  opcaoC: "where are your forms?",
  opcaoD: "way out of front",
  correta: "B",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('Do you like apples?')">&#128266;</button>`,
  opcaoA: "do you like maples?",
  opcaoB: "do you like cattle?",
  opcaoC: "do you like a paul?",
  opcaoD: "do you like apples?",
  correta: "D",
  },
//////////
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('What did you do last weekend?')">&#128266;</button>`,
  opcaoA: "what do you do for a living?",
  opcaoB: "why did you do last weekend?",
  opcaoC: "What did you do last weekend?",
  opcaoD: "why do you still pretending?",
  correta: "C",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('I like listening to music')">&#128266;</button>`,
  opcaoA: "my mind lives to music",
  opcaoB: "I like listening to music",
  opcaoC: "I live listening too music",
  opcaoD: "My wife listen to music",
  correta: "B",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick='ouvir("what's your favorite type of food?")'>&#128266;</button>`,
  opcaoA: "what's your favorite type of food?",
  opcaoB: "what's your favorite type of fruit?",
  opcaoC: "why is your flavor like a fruit?",
  opcaoD: "why is your savings floating in the flood?",
  correta: "A",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick='ouvir("I think it's important to learn other languages")'>&#128266;</button>`,
  opcaoA: "My sin is to import too much oranges",
  opcaoB: "I think it's an indoor tent or their lens gauges",
  opcaoC: "I think it's important to love all the land godess",
  opcaoD: "I think it's important to learn other languages",
  correta: "D",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('Where did you go?')">&#128266;</button>`,
  opcaoA: "where is diego?",
  opcaoB: "where did you go?",
  opcaoC: "wait this and go",
  opcaoD: "were this your ghost?",
  correta: "B",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir('I bought an ice cream today')">&#128266;</button>`,
  opcaoA: "I bought an ice cream today",
  opcaoB: "I brought some ice cream today",
  opcaoC: "I bought an eyes cream today",
  opcaoD: "I stopped and I screamed today",
  correta: "A",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir("would you like to join the group?")">&#128266;</button>`,
  opcaoA: "could you find me coin or goods?",
  opcaoB: "would you lie to join the group?",
  opcaoC: "would you like to join the group?",
  opcaoD: "could you lie to join the group?",
  correta: "C",
  },
///////
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir("the macaw grabbed the straw with its paw")">&#128266;</button>`,
  opcaoA: "the macaw grabbed the straw with its paw",
  opcaoB: "they mocked up the grandma with the spam",
  opcaoC: "they might all eat this strawberries pots",
  opcaoD: "the macaw grass is stronger with this lawn",
  correta: "A",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir("Do you want to escape the urban environment?")">&#128266;</button>`,
  opcaoA: "Do you want to scare the europe enviroment?",
  opcaoB: "Do you want to escape the urban environment?",
  opcaoC: "don't you want to escape the urban virus?",
  opcaoD: "Do your mom escape the human enchantement?",
  correta: "A",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir("he has a cough and a sore throat")">&#128266;</button>`,
  opcaoA: "He has a coffee and a soup thrown",
  opcaoB: "He has a cough and had soup and toast",
  opcaoC: "he has a coffee and sort of a toast",
  opcaoD: "he has a cough and a sore throat",
  correta: "D",
  },
  {
  pergs:  `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir("The squirrel was holding a nut then he throw it away")">&#128266;</button>`,
  opcaoA: "The squid rolled and was holding a mug then he throw it away",
  opcaoB: "The squirrel was holding a nut then he throw it away",
  opcaoC: "This kid rolled as a nut then he throw up that way",
  opcaoD: "the squirrel was hoping that a nut would be thrown anyway",
  correta: "B",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir("Would a chess player eat cheese while playing chess?")">&#128266;</button>`,
  opcaoA: "would a chest pain make it choose a wise chat?",
  opcaoB: "would a jazz player eat chips while playing jazz?",
  opcaoC: "Would a chess player eat cheese while playing chess?",
  opcaoD: "would a jazz player eat cheesse while playing chess?",
  correta: "C",
  },
  {
  pergs: `Clique no ícone para ouvir o audio e responda o que você ouve: <button onclick="ouvir("I saw a red hat under the table")">&#128266;</button>`,
  opcaoA: "My socks are rarely on the table",
  opcaoB: "I saw a red rat under the table",
  opcaoC: "I sold a rare head on a sale",
  opcaoD: "I saw a red hat under the table",
  correta: "D",
  },
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
    case 'nivelA':
      bancoPerguntas = nivelA
      break
    case 'nivelB':
      bancoPerguntas = nivelB
      break
    case 'nivelC':
      bancoPerguntas = nivelC
      break 
    case 'listening':
      bancoPerguntas = listening
    }

	if(respondidas < 20) {
    
		perguntaEmJogo = bancoPerguntas[respondidas]
    pergunta.innerHTML = perguntaEmJogo.pergs
    mostraOpcaoA.innerHTML = perguntaEmJogo.opcaoA
    mostraOpcaoB.innerHTML = perguntaEmJogo.opcaoB
    mostraOpcaoC.innerHTML = perguntaEmJogo.opcaoC
    mostraOpcaoD.innerHTML = perguntaEmJogo.opcaoD
   
    respondidas++
	} else {
    criaTelaFinal()
  }  
}

function criaTelaFinal(){
  clearInterval(intervaloContador)
  telaFinal.style.display = 'flex'
  erradasFinal.innerHTML = `Erros: ${respErradas}`
  corretasFinal.innerHTML = `Acertos: ${respCorretas}`
  naoRespondFinal.innerHTML = `Sem respostas: ${naoRespondida}`
  let porcento = Math.round((respCorretas / 20) * 100)
  porcentagem.innerHTML = `${porcento}%`
  let mensagem = ''
  if(porcento <= 40){
    mensagem = 'Seu resultado foi muito baixo, continue estudando!'
  }  
  if(porcento > 40 && porcento <= 60){
    mensagem = 'Seu resultado foi médio, ainda precisa estudar mais!'
  }
  if(porcento > 60 && porcento <= 80){
    mensagem = 'Muito bem, sua pontução foi boa, mas pode melhorar ainda mais!'
  }
  if(porcento > 80 && porcento <= 98){
    mensagem = 'Parabéns! Sua pontução foi ótima!'
  }
  if(porcento === 100 && categorias.value === 'nivelC'){
    mensagem = 'Congrats! You nailed it!'
  }
  if(porcento === 100 && categorias.value === 'nivelA'){
    mensagem = 'Parabéns pela pontução máxima, agora tente fazer os testes mais avançados!'
  }
  msgFinal.innerHTML = mensagem
}

function contador() {
  if(tempoContador > 0 && tempoContador <= 10){
    mostraContador.style.backgroundColor = '#BC1700'
  }else{
    mostraContador.style.backgroundColor = '#1C7D22'
  }
  if(tempoContador > 0) {
    tempoContador--
    mostraContador.innerHTML = tempoContador
  } else {
    tempoContador = 60
    naoRespondida++
    processaPergunta()
  }

}

function checaResposta(resposta) {
  if(resposta === perguntaEmJogo.correta) {
    respCorretas++
    tempoContador = 60
  } else {
    respErradas++
    tempoContador = 60
    console.log(perguntaEmJogo.correta)
  }
  if(respCorretas > 20) {
    respCorretas = 0
  }
  processaPergunta()
}

btnReiniciar.addEventListener('click', () => {
  location.reload()
  }
)

function ouvir(e) {
  let wordToSay = new SpeechSynthesisUtterance()
    console.log(e)
    wordToSay.text = e
    wordToSay.lang = 'en'
    wordToSay.rate = 0.8
    wordToSay.volume = 1
    window.speechSynthesis.speak(wordToSay)
}


