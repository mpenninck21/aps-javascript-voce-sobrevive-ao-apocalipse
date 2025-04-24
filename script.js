// Etapa 2 - Boas vindas
alert("🚨🧟Bem-vindo ao desafio: Você sobrevive ao apocalipse?🧟🚨")

// Solicita dados do jogador
let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let pontos = 0; // Pontuação inicial

// Tratamento de string: transforma o nome em letras maiúsculas
nome = nome.toUpperCase(); // 1º uso de função de string

// Etapa 3 - Entrada de dados (primeira decisão)
alert("Você acorda com barulhos estranhos do lado de fora da sua casa.");
let escolha = prompt("O que você faz?\n1 - Sair de casa.\n2 - Se esconder dentro de casa.\n----------Digite apenas 1 ou 2----------");

// Primeiro caminho: jogador sai de casa
if (escolha == "1") {
  alert("Você saiu e encontrou um grupo desconhecido.");
  let escolha2 = prompt("O que você faz agora?\n1 - Confiar no grupo\n2 - Fugir sozinho");

  // Processamento lógico com estrutura switch
  switch (escolha2) {
    case "1":
      // Caminho trágico: confiar em um grupo perigoso
      alert("Você decidiu confiar neles.\nMas eles não eram nada confiáveis. 😥\n\nFim de jogo para você.\n💀🩸");
      pontos -= 10; // Perde pontos pela má decisão
      mostrarResultado(); // Mostra resultado final
      break;

    case "2":
      // Caminho mais seguro: fugir e buscar suprimentos sozinho
      alert("Você fugiu pelas ruas desertas e se safou de um fim trágico. 😅\nAgora você terá de buscar suprimentos por conta própria!");
      pontos += 10; // Ganha pontos pela boa decisão
      buscarComida(); // Chama função para buscar comida
      break;
  }

} else if (escolha == "2") {
  // Segundo caminho: jogador se esconde em casa
  alert("Você escolheu se esconder em casa.");
  let escolha3 = prompt("Após algumas horas, você ouve batidas na porta...\n1 - Abrir a porta.\n2 - Ignorar e se esconder.");

  if (escolha3 == "1") {
    let escolha4 = prompt("Era um vizinho ferido pedindo ajuda. Você deixa ele entrar?\n1 - Sim\n2 - Não");

    if (escolha4 == "1") {
      // Jogador ajuda o vizinho e vão juntos buscar comida
      alert("Vocês se ajudam e decidem buscar comida juntos.");
      pontos += 10; // Ganho de pontos por empatia
      buscarComida();
    } else {
      // Jogador ignora o vizinho e sofre consequências
      alert("Você o ignora. No dia seguinte, sua casa é invadida.");
      pontos -= 10; // Perde pontos pela escolha egoísta
      mostrarResultado();
    }

  } else {
    // Jogador espera até a noite e sai para buscar recursos
    alert("Você se esconde até anoitecer e decide sair para procurar comida.");
    buscarComida();
  }
}

// Etapa 4 - Função de busca de comida
function buscarComida() {
  // Vetor com possíveis locais para buscar comida
  let locais = [
    "mercado abandonado",
    "lanchonete saqueada",
    "posto de gasolina vazio"
  ];

  // Loop que percorre os locais e sorteia se encontrou comida
  for (let i = 0; i < locais.length; i++) {
    alert("Você vasculha um " + locais[i] + "...");
    let achou = Math.random() < 0.5; // 50% de chance de encontrar comida

    if (achou) {
      alert("Você encontrou comida! 🍞");
      pontos += 5; // Ganha pontos por sucesso
    } else {
      alert("Nada encontrado... 😓");
    }
  }

  // Após todas as tentativas, exibe o resultado final
  mostrarResultado();
}

// Etapa 5 - Mostrar resultado final
function mostrarResultado() {
  let resultado;

  // Avalia se a pontuação é suficiente para sobreviver
  if (pontos >= 20) {
    resultado = "👏 Parabéns, " + nome + "! Você sobreviveu com honra!";
  } else if (pontos >= 10) {
    resultado = nome + ", foi difícil, mas você conseguiu sobreviver!";
  } else {
    resultado = nome + ", infelizmente você não resistiu ao apocalipse...";
  }

  // Apelido zumbi com replace - 2º tratamento de string
  let nomeApocaliptico = nome
    .replace(/A/g, "🧟")
    .replace(/E/g, "💀")
    .replace(/I/g, "☠️")
    .replace(/O/g, "🧠")
    .replace(/U/g, "🔪");

  // Exibe o nome apocalíptico junto com a mensagem final
  resultado += "\nSeu nome no apocalipse seria: " + nomeApocaliptico;

  alert(resultado);
}
