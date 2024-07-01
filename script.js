const allQuestions = [
  {
    question: "Em que cidade brasileira ocorre o Círio de Nazaré?",
    options: ["Em Belém, no estado do Pará.", "Em Manaus, no estado do Amazonas.", "Em Salvador, no estado da Bahia.", "Em Recife, no estado de Pernambuco."],
    correctAnswer: "Em Belém, no estado do Pará."
  },
  {
    question: "Em que ano o Círio de Nazaré passou a ser realizado pela manhã?",
    options: ["Em 1822.", "Em 1854.", "Em 1900.", "Em 1950."],
    correctAnswer: "Em 1854."
  },
  {
    question: "Quais outras cidades na Região Norte do Brasil têm representações significativas do Círio de Nazaré, devido à migração de paraenses?",
    options: ["Boa Vista, Porto Velho e Cruzeiro do Sul.", "Macapá, Rio Branco e Manaus.", "Parintins, Itacoatiara e Tabatinga.", "Santarém, Altamira e Tucuruí."],
    correctAnswer: "Macapá, Rio Branco e Manaus."
  },
  {
    question: "Em que mês e dia é celebrado o Círio de Nazaré em Portugal?",
    options: ["No dia 8 de setembro.", "No dia 15 de agosto.", "No dia 25 de dezembro.", "No dia 1º de maio."],
    correctAnswer: "No dia 8 de setembro."
  },
  {
    question: "Em que ano o Círio de Nazaré foi declarado Patrimônio Cultural da Humanidade pela UNESCO?",
    options: ["Foi declarado Patrimônio Cultural da Humanidade pela UNESCO em janeiro de 2005.,Foi declarado Patrimônio Cultural da Humanidade pela UNESCO em dezembro de 2013.", "Foi declarado Patrimônio Cultural da Humanidade pela UNESCO em novembro de 2010.", "Parintins, Itacoatiara e Tabatinga.", "Foi declarado Patrimônio Cultural da Humanidade pela UNESCO em março de 2017."],
    correctAnswer: "Foi declarado Patrimônio Cultural da Humanidade pela UNESCO em dezembro de 2013."
  },
  {
    question: "Onde teve origem a estátua da Virgem Maria mencionada na Lenda da Nazaré?",
    options: ["Na cidade de Belém (Israel).", "Na cidade de Fátima (Portugal).", "Na cidade de Nazaré (Israel).", "Na cidade de Jerusalém (Israel)."],
    correctAnswer: "Na cidade de Nazaré (Israel)."
  },
  {
    question: "Quem mandou erguer a Capela da Memória?",
    options: ["O bispo D. Pedro Alvares Cabral.", "O rei D. Afonso Henriques.", "O arcebispo D. Nuno Álvares Pereira.", "O cavaleiro D. Fuas Roupinho."],
    correctAnswer: "O cavaleiro D. Fuas Roupinho."
  },
  {
    question: "Por qual rei foi fundado o Santuário de Nossa Senhora da Nazaré?",
    options: ["Rei D. Fernando.", "Rei D. João II.", "Rei D. Manuel I.", "Rei D. João IV."],
    correctAnswer: "Rei D. Fernando."
  },
  {
    question: "Em que mês os portugueses se reúnem anualmente para reverenciar Nossa Senhora da Nazaré?",
    options: ["Em agosto.", "Em setembro.", "Em outubro.", "Em novembro."],
    correctAnswer: "Em setembro."
  },
  {
    question: "Qual é o nome da principal romaria portuguesa e de onde ela se inicia?",
    options: ["A Romaria do Senhor dos Passos, que se inicia em Fátima., Porto Velho e Cruzeiro do Sul.", "A Romaria da Senhora do Monte, que se inicia no Conselho de Sintra.", "O Círio da Prata Grande, que se inicia no Conselho de Mafra.", "A Romaria da Nossa Senhora da Agonia, que se inicia no Conselho de Viana do Castelo."],
    correctAnswer: "O Círio da Prata Grande, que se inicia no Conselho de Mafra."
  },
  {
    question: "Quem encontrou a estátua deteriorada de Nossa Senhora da Nazaré no igarapé Murutucu?",
    options: ["Frei Henrique, um missionário franciscano.", "Manoel, um pescador local.", "Teresa, uma devota da região.", "Plácido, um caboclo descendente de portugueses e índios."],
    correctAnswer: "Plácido, um caboclo descendente de portugueses e índios."
  },
  {
    question: "Em que ano Plácido encontrou a estátua de Nossa Senhora da Nazaré?",
    options: ["Em 1700.", "Em 1750.", "Em 1800.", "Em 1650."],
    correctAnswer: "Em 1700."
  },
  {
    question: "Qual foi o nome do governador da Capitania do Grão-Pará que determinou a transferência da imagem para a capela do Palácio da Cidade?",
    options: ["Antônio de Albuquerque Coelho de Carvalho.", "Francisco Maurício de Sousa Coutinho.", "Bernardo José Maria de Lorena.", "João de Abreu Castelo Branco."],
    correctAnswer: "Francisco Maurício de Sousa Coutinho."
  },
  {
    question: "Em que mês e dia ocorre anualmente o Círio de Nazaré em Belém?",
    options: ["No último domingo de setembro.", "No primeiro domingo de novembro.", "No segundo domingo de outubro.", "No terceiro domingo de dezembro."],
    correctAnswer: "No segundo domingo de outubro."
  },
  {
    question: "Qual foi o nome do brigue português que naufragou em 1846 e que tinha transportado a imagem de Nossa Senhora de Nazaré para Lisboa em 1774?",
    options: ["Santa Maria da Graça.", "Nossa Senhora dos Navegantes.", "São João Batista.", "São Gabriel."],
    correctAnswer: "São João Batista."
  },
  {
    question: "Quando a corda foi introduzida pela primeira vez na procissão do Círio de Nazaré?",
    options: ["Em 1868.", "Em 1822.", "Em 1833.", "Em 1855."],
    correctAnswer: "Em 1855."
  },
  {
    question: "Em que ano o formato linear da corda foi introduzido?",
    options: ["Em 2005.", "Em 1980.", "Em 1995.", "Em 2010."],
    correctAnswer: "Em 2005."
  },
  {
    question: "Quem confeccionava os mantos da imagem de Nossa Senhora de Nazaré até 1973?",
    options: ["A irmã Helena, da Congregação das Irmãs de São José", "A irmã Alessandra, da Congregação Filhas de Sant'Anna", "A irmã Maria do Carmo, da Congregação das Missionárias Servas do Espírito Santo", "A irmã Teresa, da Congregação das Irmãs Franciscanas Missionárias de Maria"],
    correctAnswer: "A irmã Alessandra, da Congregação Filhas de Sant'Anna"
  },
  {
    question: "Em que ano o bispo Dom Francisco de Rego Maia oficializou o segundo domingo de outubro como a data do Círio de Nazaré?",
    options: ["Em 1925.", "Em 1901.", "Em 1950.", "Em 1983."],
    correctAnswer: "Em 1901."
  },
  {
    question: "Qual foi o nome do brigue português que naufragou em 1846 que tinha transportado a imagem de Nossa Senhora de Nazaré para Lisboa em 1774?",
    options: ["O navio Santa Maria.", "O brigue São Pedro.", "O brigue São João Batista", "A fragata Nossa Senhora da Conceição."],
    correctAnswer: "O brigue São João Batista"
  },
  {
    question: "Em que ano foi iniciado o culto à Nossa Senhora de Nazaré em Saquarema?",
    options: ["1650", "1620", "1630.", "1670"],
    correctAnswer: "1630."
  },
  {
    question: "Qual é o nome do caboclo que encontrou uma estátua deteriorada às margens do Igarapé Murucutu em 1700?",
    options: ["João", "Antônio", "Pedro", "Plácido."],
    correctAnswer: "Plácido."
  },
  {
    question: "Em que ano a primeira ermida para abrigar a imagem de Nossa Senhora de Nazaré foi construída?",
    options: ["1720.", "1710", "1730", "1740"],
    correctAnswer: "1720"
  },
  {
    question: "Quando foi realizada a primeira Romaria Fluvial e de onde saía inicialmente a Imagem Peregrina?",
    options: ["Em 1984", "Em 1986", "Em 1988", "Em 1990"],
    correctAnswer: "Em 1986"
  },
  {
    question: "Qual evento forçou um desvio da Berlinda pela Avenida João Alfredo e Travessa Frutuoso Guimarães durante a procissão do Círio de Nazaré em 2002?",
    options: ["Um alagamento na Rua do Aveiro", "Uma manifestação na Avenida Nazaré", "Um incêndio na Casa Chamma.", "Um desmoronamento na Rua João Diogo"],
    correctAnswer: "Um incêndio na Casa Chamma."
  },
  {
    question: "Em que ano o Transporte dos Carros passou a fazer parte das romarias oficiais do Círio de Nazaré?",
    options: ["Em 2015", "Em 2017", "Em 2021", "Em 2019."],
    correctAnswer: "Em 2019."
  },
  {
    question: "Qual é a duração aproximada do percurso da Romaria Fluvial entre Icoaraci e Belém?",
    options: ["Pode levar até 5 horas.", "Pode levar até 3 horas", "Pode levar até 4 horas", "Pode levar até 6 horas"],
    correctAnswer: "Pode levar até 5 horas"
  },
  {
    question: "Qual é o material da berlinda atual usada no Círio de Nazaré?",
    options: ["Mogno", "Cedro", "Carvalho", "Pau-brasil"],
    correctAnswer: "Cedro"
  },
  {
    question: "Qual é o comprimento médio da corda usada na procissão do Círio de Nazaré?",
    options: ["300 metros", "450 metros", "400 metros", "500 metros"],
    correctAnswer: "400 metros"
  },
  {
    question: "Quem foi responsável pela confecção do manto da imagem de Nossa Senhora de Nazaré por 19 anos?",
    options: ["Sra. Maria do Carmo Silva", "Sra. Ana Lúcia Rodrigues", "Sra. Isabel Pereira Souza", "Sra. Esther Paes França"],
    correctAnswer: "Sra. Esther Paes França"
  },
  {
    question: "Quais alimentos são tradicionalmente servidos no almoço do Círio de Nazaré?",
    options: ["Pato no tucupi, arroz branco e maniçoba.", "Moqueca de camarão, pirão e farofa.", "Carne de sol, macaxeira e feijão verde.", "Peixe assado, pirarucu de casaca e vatapá."],
    correctAnswer: "Pato no tucupi, arroz branco e maniçoba."
  },
  {
    question: "Em que bairro do Rio de Janeiro é realizada a procissão do Círio de Nazaré?",
    options: ["Ipanema", "Copacabana", "Botafogo", "Leblon"],
    correctAnswer: "Copacabana"
  },
  {
    question: "Qual cidade do Maranhão realiza o Círio de Nazaré nos mesmos moldes de Belém, mas na parte da tarde?",
    options: ["Imperatriz", "Caxias", "São Luís", "Balsas"],
    correctAnswer: "São Luís"
  },
  {
    question: "Quais são as cidades do Pará que realizam procissões semelhantes ao Círio de Belém?",
    options: ["Barcarena, Santarém, Óbidos", "Oriximiná, Tucuruí, Altamira", "Itaituba, Paragominas, Salinópolis", "Soure, Vigia, Abaetetuba"],
    correctAnswer: "Soure, Vigia, Abaetetuba"
  },
  {
    question: "Quais capitais brasileiras além de Belém realizam o Círio de Nazaré?",
    options: ["Rio de Janeiro, Brasília, Rio Branco", "Salvador, Florianópolis, Porto Alegre", "João Pessoa, Natal, Maceió", "Curitiba, Vitória, Goiânia"],
    correctAnswer: "Rio de Janeiro, Brasília, Rio Branco"
  },
  {
    question: "Quais foram as primeiras emissoras de rádio a transmitirem o Círio de Nazaré ao vivo?",
    options: ["Rádio Nacional e Rádio Bandeirantes.", "Rádio Clube do Pará e Super Rádio Marajoara.", "Rádio Globo e Rádio Tupi.", "Rádio Jovem Pan e Rádio CBN."],
    correctAnswer: "Rádio Clube do Pará e Super Rádio Marajoara."
  },
  {
    question: "Em que década surgiram os primeiros gravadores, facilitando a cobertura externa do Círio?",
    options: ["Nos anos 1950.", "Nos anos 1970.", "Nos anos 1960.", "Nos anos 1980."],
    correctAnswer: "Nos anos 1960."
  },
  {
    question: "Qual emissora de TV em Belém começou a transmitir imagens aéreas do Círio pela primeira vez, e em que ano isso ocorreu?",
    options: ["TV Guajará, em 1975.", "TV Marajoara, em 1990.", "TV Tapajós, em 1980.", "TV Liberal, em 1983."],
    correctAnswer: "TV Liberal, em 1983."
  },
  {
    question: "Quando ocorreu a primeira transmissão do Círio de Nazaré pela internet para todo o mundo?",
    options: ["Em 1997.", "Em 2005.", "Em 2010.", "Em 2020."],
    correctAnswer: "Em 1997."
  },
  {
    question: "Quais foram as emissoras que formaram o pool de transmissão do Círio em 1989?",
    options: ["TV Record, TV Gazeta e TV Bandeirantes.", "As emissoras foram TV Liberal, TVs Cultura, Guajará, TVS Belém (hoje SBT Pará) e RBA TV.", "TV Globo, TV Cultura e TV Manchete.", "TV Tupi, TV Excelsior e TV Continental."],
    correctAnswer: "As emissoras foram TV Liberal, TVs Cultura, Guajará, TVS Belém (hoje SBT Pará) e RBA TV."
  },

];


const numQuestionsToAsk = 7;
let questions = [];
let correctAnswersCount = 0;
let currentQuestionIndex = 0;

// Selecionar perguntas aleatórias
function selectRandomQuestions() {
  let tempQuestions = allQuestions.slice();

  for (let i = 0; i < numQuestionsToAsk; i++) {
    const randomIndex = Math.floor(Math.random() * tempQuestions.length);
    const selectedQuestion = tempQuestions[randomIndex];
    questions.push(selectedQuestion);
    tempQuestions.splice(randomIndex, 1);
  }
}

// Exibir a próxima pergunta
function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showFinalResult();
  }
}

// Exibir a pergunta atual
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option');
    button.onclick = () => checkAnswer(option, currentQuestion.correctAnswer);
    optionsContainer.appendChild(button);
  });

  updateRemainingQuestions();
}

// Verificar a resposta selecionada pelo jogador
function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    correctAnswersCount++;
    updateScore();
  } else {
    showNotification('Resposta incorreta. A resposta correta é: ' + correctAnswer, 'error');
  }
  currentQuestionIndex++;
  nextQuestion();
}

// Atualizar o contador de respostas corretas
function updateScore() {
  document.getElementById('score').textContent = 'Respostas corretas: ' + correctAnswersCount;
}

// Atualizar o contador de jogadas restantes
function updateRemainingQuestions() {
  document.getElementById('remaining').textContent = 'Jogadas: ' + currentQuestionIndex + '/' + numQuestionsToAsk;
}

// Mostrar o resultado final
function showFinalResult() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('final-score').textContent = 'Você pontuou ' + correctAnswersCount + '/' + numQuestionsToAsk;
}

// Compartilhar no WhatsApp
function shareOnWhatsApp() {
  const message = `Pontuei ${correctAnswersCount}/${numQuestionsToAsk} no Quiz do Círio de Nazaré! Venha jogar também: [https://omarcelof.github.io/Quiz/]`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Reiniciar o quiz
function restartQuiz() {
  correctAnswersCount = 0;
  currentQuestionIndex = 0;
  questions = [];
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('result-container').style.display = 'none';
  selectRandomQuestions();
  updateScore();
  updateRemainingQuestions();
  nextQuestion();
}

// Mostrar uma notificação temporária
function showNotification(message, type) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = 'notification ' + type + ' show';

  setTimeout(() => {
    notification.className = 'notification ' + type;
  }, 3000);
}

// Chamando funções
selectRandomQuestions();
nextQuestion();