const {bot} = require('../bot')


bot.onText(/\/felicidade/, (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;
    
    // Define a porcentagem de felicidade aleatoriamente entre 0 e 100
    const felicidade = Math.floor(Math.random() * 101);
  
    // Define uma frase baseada na porcentagem de felicidade
    let frase;
    if (felicidade <= 20) {
      frase = 'Estou me sentindo um pouco triste hoje...';
    } else if (felicidade <= 40) {
      frase = 'Não estou muito feliz...';
    } else if (felicidade <= 60) {
        frase = 'Estou me sentindo feliz.';
    } else if (felicidade <= 80) {
        frase = 'Estou me sentindo muito feliz!';
    } else {
      frase = 'Estou me sentindo extremamente feliz!!!';
    }
  
    // Define o emoji baseado na porcentagem de felicidade
    let emoji;
    if (felicidade <= 20) {
      emoji = '😔';
    } else if (felicidade <= 40) {
        emoji = '😕'
      } else if (felicidade <= 60) {
        emoji = '😊'
      } else if (felicidade <= 80) {
        emoji = '😃'
    } else {
      emoji = '😃';
    }
  
    // Cria um gráfico de barra com a porcentagem de felicidade
    let grafico = '';
    for (let i = 0; i < 10; i++) {
      if (felicidade >= i * 10) {
        grafico += '🟩';
      } else {
        grafico += '⬜️';
      }
    }
  
    // Cria a mensagem de resposta com a frase, o emoji e o gráfico
    const resposta = `*Nível de Felicidade* \n\nSua felicidade hoje está em ${felicidade}% \n\n${frase}${emoji}\n${grafico} *${felicidade}%*`;
  
    // Envia a mensagem de resposta para o usuário que enviou o comando /felicidade
    bot.sendMessage(msg.chat.id, resposta, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});




bot.onText(/\/raiva/, (msg) => {
    // Gerando o nível de raiva aleatório entre 0 e 100
    const nivelRaiva = Math.floor(Math.random() * 101);
  
    // Definindo a frase de acordo com o nível de raiva
    let fraseRaiva;
    if (nivelRaiva <= 25) {
      fraseRaiva = "Estou calmo como um monge.";
    } else if (nivelRaiva <= 40) {
      fraseRaiva = "Não sinto raiva";
    } else if (nivelRaiva <= 60) {
      fraseRaiva = "Estou um pouco irritado.";
    } else if (nivelRaiva <= 80) {
      fraseRaiva = "Estou um muito irritado.";
    } else if (nivelRaiva <= 90) {
      fraseRaiva = "Estou bastante irritado!";
    } else {
      fraseRaiva = "Eu estou prestes a explodir!!!";
    }
  
    // Definindo o emoji de acordo com o nível de raiva
    let emojiRaiva;
    if (nivelRaiva <= 25) {
      emojiRaiva = "😌";
    } else if (nivelRaiva <= 40) {
      emojiRaiva = "😐";
    } else if (nivelRaiva <= 60) {
      emojiRaiva = "😠";
    } else if (nivelRaiva <= 50) {
      emojiRaiva = "😤";
    } else if (nivelRaiva <= 75) {
      emojiRaiva = "😡";
    } else {
      emojiRaiva = "🤬";
    }
  
    // Cria um gráfico de barra com a porcentagem de raiva
    let graficoRaiva = '';
    for (let i = 0; i < 10; i++) {
      if (nivelRaiva >= i * 10) {
        graficoRaiva += '🟧';
      } else {
        graficoRaiva += '⬜️';
      }
    }
  
    // Cria a mensagem de resposta com a frase, o emoji e o gráfico
    const respostaRaiva = `*Nível de raiva* \n\nSua raiva hoje está em ${nivelRaiva}% \n\n${fraseRaiva}${emojiRaiva}\n${graficoRaiva} *${nivelRaiva}%*`;
  
    // Envia a mensagem de resposta para o usuário que enviou o comando /raiva
    bot.sendMessage(msg.chat.id, respostaRaiva, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  });



  bot.onText(/\/apaixonado/, (msg) => {
    // Gerando o nível de paixão aleatório entre 0 e 100
    const nivelPaixao = Math.floor(Math.random() * 101);
    
    // Definindo a frase de acordo com o nível de paixão
    let frasePaixao;
    if (nivelPaixao <= 20) {
      frasePaixao = "Não estou apaixonado(a) por ninguém no momento.";
    } else if (nivelPaixao <= 40) {
      frasePaixao = "Estou começando a sentir algo por alguém.";
    } else if (nivelPaixao <= 60) {
      frasePaixao = "Só penso nele(a), afs.";
    } else if (nivelPaixao <= 80) {
      frasePaixao = "Já não sai da minha mente, to bobinho(a) de apaxionado(a).";
    } else if (nivelPaixao <= 90) {
      frasePaixao = "Estou completamente apaixonado(a)!";
    } else {
      frasePaixao = "Eu nunca me senti assim antes, estou perdidamente apaixonado(a)!!!";
    }
    
    // Definindo o emoji de acordo com o nível de paixão
    let emojiPaixao;
    if (nivelPaixao <= 20) {
      emojiPaixao = "😐";
    } else if (nivelPaixao <= 40) {
      emojiPaixao = "😻";
    } else if (nivelPaixao <= 60) {
      emojiPaixao = "😍";
    } else if (nivelPaixao <= 80) {
      emojiPaixao = "💗";
    } else if (nivelPaixao <= 75) {
      emojiPaixao = "❤️‍🔥";
    } else {
      emojiPaixao = "💘";
    }
    
    // Cria um gráfico de barra com a porcentagem de paixão
    let graficoPaixao = '';
    for (let i = 0; i < 10; i++) {
      if (nivelPaixao >= i * 10) {
        graficoPaixao += '🟥';
      } else {
        graficoPaixao += '⬜️';
      }
    }
    
    // Cria a mensagem de resposta com a frase, o emoji e o gráfico
    const respostaPaixao = `*Nível de paixão*\n\nO meu nível de paixão está em ${nivelPaixao}%\n\n${frasePaixao}${emojiPaixao}\n${graficoPaixao} *${nivelPaixao}%*`;
    
    // Envia a mensagem de resposta para o usuário que enviou o comando /apaixonado
    bot.sendMessage(msg.chat.id, respostaPaixao, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  });
  



  bot.onText(/\/chato/, (msg) => {
    // Gera aleatoriamente o nível de chatice entre 0 e 100
    const nivelGado = Math.floor(Math.random() * 101);
  
    // Define a frase de acordo com o nível de chatice
    let fraseGado;
    if (nivelGado <= 10) {
      fraseGado = "Não estou sendo chato(a) com ninguém no momento.";
    } else if (nivelGado <= 20) {
      fraseGado = "Chatice? Não sou nunca!";
    } else if (nivelGado <= 40) {
      fraseGado = "Estou sendo um pouco chato(a), mas prometo melhorar!";
    } else if (nivelGado <= 50) {
      fraseGado = "Nem sou chato(a) e nem Legal!";
    } else if (nivelGado <= 70) {
      fraseGado = "Chato mesmo, então ature ou surte!";
    } else if (nivelGado <= 80) {
      fraseGado = "Chatice? É comigo mesmo!";
    } else if (nivelGado <= 90) {
      fraseGado = "Estou sendo bastante chato(a) ultimamente...";
    } else {
      fraseGado = "Eu sou um verdadeiro(a) chato(a), me desculpe!";
    }
  
    // Define o emoji de acordo com o nível de chatice
    let emojiGado;
    if (nivelGado <= 20) {
      emojiGado = "😐";
    } else if (nivelGado <= 40) {
      emojiGado = "😒";
    } else if (nivelGado <= 60) {
      emojiGado = "😤";
    } else if (nivelGado <= 80) {
      emojiGado = "🤨";
    } else if (nivelGado <= 95) {
      emojiGado = "🙄";
    } else {
      emojiGado = "🤯";
    }
  
    // Cria um gráfico vertical com a porcentagem de chatice
    let graficoGado = '';
    for (let i = 10; i <= 100; i += 10) {
      if (nivelGado >= i) {
        graficoGado += '🟫';
      } else {
        graficoGado += '⬜️';
      }
    }
  
    // Cria a mensagem de resposta com a frase, o emoji e o gráfico vertical
    const respostaGado = `*Nível de chatice*\n\nO meu nível de chatice está em ${nivelGado}%\n\n${fraseGado}${emojiGado}\n${graficoGado} *${nivelGado}%*`;
  
    // Envia a mensagem de resposta para o usuário que enviou o comando /chato
    bot.sendMessage(msg.chat.id, respostaGado, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  })
  





  const estados = [
    {
      nome: 'Acre',
      frase: 'Acre, o estado da borracha',
      info: 'O Acre é um estado brasileiro localizado na região Norte, conhecido por sua produção de borracha natural.',
      gria: 'Espocar',
      emoji: '🌳'
    },
    {
      nome: 'Alagoas',
      frase: 'Alagoas, o paraíso das águas',
      info: 'Alagoas é um estado brasileiro localizado na região Nordeste, conhecido por suas belas praias e lagoas.',
      gria: 'arretado',
      emoji: '🏖'
    },
    {
      nome: 'Amazonas',
      frase: 'Amazonas, o pulmão do mundo',
      info: 'O Amazonas é um estado brasileiro localizado na região Norte, conhecido por sua extensa floresta amazônica e diversidade de fauna e flora.',
      gria: 'não tem gria conhecida',
      emoji: '🌴'
    },
    {
      nome: 'Bahia',
      frase: 'Bahia, terra de todos os santos',
      info: 'A Bahia é um estado brasileiro localizado na região Nordeste, conhecido por sua rica cultura afro-brasileira e pelas belas praias.',
      gria: 'LAELE',
      emoji: '🌊'
    },
    {
      nome: 'Ceará',
      frase: 'Ceará, terra da luz',
      info: 'O Ceará é um estado brasileiro localizado na região Nordeste, conhecido por suas belas praias, dunas e sol o ano todo.',
      gria: 'arretado',
      emoji: '🌅'
    },
    {
      nome: 'Espírito Santo',
      frase: 'Espírito Santo, o estado do cacau',
      info: 'O Espírito Santo é um estado brasileiro localizado na região Sudeste, conhecido por sua produção de cacau e pelas belas praias.',
      gria: 'firmeza',
      emoji: '🍫'
    },
    {
      nome: 'Goiás',
      frase: 'Goiás, o coração do Brasil',
      info: 'Goiás é um estado brasileiro localizado na região Centro-Oeste, conhecido por sua rica história colonial e por suas belas paisagens naturais.',
      gria: 'bão demais',
      emoji: '🏜'
    },
    {
      nome: 'Maranhão',
      frase: 'Maranhão, o estado dos lençóis',
      info: 'O Maranhão é um estado brasileiro localizado na região Nordeste, conhecido por suas belas praias, parques naturais e pelos famosos Lençóis Maranhenses.',
      gria: 'massa',
      emoji: '🏞'
    },
    {
      nome: 'Mato Grosso',
      frase: 'Mato Grosso, a grande planície',
      info: 'O Mato Grosso é um estado brasileiro localizado na região Centro-Oeste, conhecido por sua vasta planície e pela biodiversidade de animais.',
      gria: 'tudo de bom',
      emoji: '🌿'
    },
    {
    nome: 'Mato Grosso do Sul',
    frase: 'Mato Grosso do Sul, o estado do Pantanal',
    info: 'Mato Grosso do Sul é um estado brasileiro localizado na região Centro-Oeste, conhecido por abrigar o maior pantanal do mundo e pelas belas paisagens naturais.',
    gria: 'firmeza',
    emoji: '🐆'
    },
    {
    nome: 'Minas Gerais',
    frase: 'Minas Gerais, terra do pão de queijo',
    info: 'Minas Gerais é um estado brasileiro localizado na região Sudeste, conhecido por sua rica história, culinária e pela Serra do Curral, símbolo da capital Belo Horizonte.',
    gria: 'uai',
    emoji: '🧀'
    },
    {
    nome: 'Pará',
    frase: 'Pará, a porta da Amazônia',
    info: 'O Pará é um estado brasileiro localizado na região Norte, conhecido por sua exuberante floresta amazônica, rica cultura e gastronomia.',
    gria: 'bacana',
    emoji: '🍴'
    },
    {
    nome: 'Paraíba',
    frase: 'Paraíba, o estado do sol nascente',
    info: 'A Paraíba é um estado brasileiro localizado na região Nordeste, conhecido por suas belas praias, pela gastronomia e pelo folclore.',
    gria: 'bora',
    emoji: '☀️'
    },
    {
    nome: 'Paraná',
    frase: 'Paraná, estado das Cataratas',
    info: 'O Paraná é um estado brasileiro localizado na região Sul, conhecido por suas belas paisagens naturais, como as Cataratas do Iguaçu e pela produção agropecuária.',
    gria: 'piazada',
    emoji: '🌲'
    },
    {
    nome: 'Pernambuco',
    frase: 'Pernambuco, a terra do frevo',
    info: 'Pernambuco é um estado brasileiro localizado na região Nordeste, conhecido por sua rica cultura, pelo frevo, pelo maracatu e pelas belas praias.',
    gria: 'boy',
    emoji: '🎭'
    },
    {
    nome: 'Piauí',
    frase: 'Piauí, o estado das emoções',
    info: 'O Piauí é um estado brasileiro localizado na região Nordeste, conhecido por suas paisagens exóticas, pela rica história e cultura.',
    gria: 'firmeza',
    emoji: '🌵'
    },
    {
    nome: 'Rio de Janeiro',
    frase: 'Rio de Janeiro, cidade maravilhosa',
    info: 'O Rio de Janeiro é um estado brasileiro localizado na região Sudeste, conhecido por suas belas praias, montanhas e pela cidade do Rio de Janeiro, que é mundialmente famosa por seu carnaval, Cristo Redentor e Pão de Açúcar.',
    gria: 'os crias',
    emoji: '🏖️'
    },
    {
      nome: 'Rio Grande do Norte',
      frase: 'Rio Grande do Norte, o estado do sol',
      info: 'Rio Grande do Norte é um estado brasileiro localizado na região Nordeste, conhecido por suas praias paradisíacas, pelo clima quente e pelas dunas de areia.',
      gria: 'valeu a pena',
      emoji: '🌞'
      },
      {
      nome: 'Rio Grande do Sul',
      frase: 'Rio Grande do Sul, o estado dos gaúchos',
      info: 'Rio Grande do Sul é um estado brasileiro localizado na região Sul, conhecido por sua forte tradição cultural gaúcha, pelos vinhedos da Serra Gaúcha e pelos cânions do Parque Nacional de Aparados da Serra.',
      gria: 'tchê',
      emoji: '🐄'
      },
      {
      nome: 'Rondônia',
      frase: 'Rondônia, o estado da Amazônia Ocidental',
      info: 'Rondônia é um estado brasileiro localizado na região Norte, conhecido por abrigar uma parte da floresta amazônica e por sua produção de café e carne.',
      gria: 'da hora',
      emoji: '🦜'
      },
      {
      nome: 'Roraima',
      frase: 'Roraima, o estado das águas',
      info: 'Roraima é um estado brasileiro localizado na região Norte, conhecido por sua diversidade cultural, por sua biodiversidade e por ser o estado mais setentrional do Brasil.',
      gria: 'suave',
      emoji: '🏞️'
      },
      {
      nome: 'Santa Catarina',
      frase: 'Santa Catarina, o estado das praias e da serra',
      info: 'Santa Catarina é um estado brasileiro localizado na região Sul, conhecido por suas belas praias, pela Serra Catarinense e pela produção de vinho e de ostras.',
      gria: 'teia',
      emoji: '🏔️'
      },
      {
      nome: 'São Paulo',
      frase: 'São Paulo, a locomotiva do Brasil',
      info: 'São Paulo é um estado brasileiro localizado na região Sudeste, conhecido por sua grande metrópole, por sua forte economia, por suas universidades e pela cultura cosmopolita.',
      gria: 'mano',
      emoji: '🏙️'
      },
      {
      nome: 'Sergipe',
      frase: 'Sergipe, o estado do cangaço',
      info: 'Sergipe é um estado brasileiro localizado na região Nordeste, conhecido por sua rica história do cangaço, pelas praias e pelo folclore.',
      gria: 'bora',
      emoji: '🌴'
      },
      {
      nome: 'Tocantins',
      frase: 'Tocantins, o coração do Brasil',
      info: 'Tocantins é um estado brasileiro localizado na região Norte, conhecido por sua biodiversidade, pelas cachoeiras e pela produção de grãos e carne.',
      gria: 'show de bola',
      emoji: '🌻'
      },
      ];
  
  bot.onText(/\/estado/, (msg) => {
    const chatId = msg.chat.id;
    const estadoAleatorio = estados[Math.floor(Math.random() * estados.length)];
    const resposta = `*Seu Estado é ${estadoAleatorio.nome}* ${estadoAleatorio.emoji} \n\n*Informações básicas:* ${estadoAleatorio.info}\n\n*Gíria típica:* "${estadoAleatorio.gria}" \n\n🌎 ${estadoAleatorio.frase}`;
    bot.sendMessage(chatId, resposta, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  });
  



  bot.onText(/\/gado/, (msg) => {
    // Gera aleatoriamente o nível de chatice entre 0 e 100
    const nivelGado = Math.floor(Math.random() * 101);
  
    // Define a frase de acordo com o nível de chatice
    let fraseGado;
    if (nivelGado <= 10) {
      fraseGado = "Não estou sendo gado(a) com ninguém no momento.";
    } else if (nivelGado <= 20) {
      fraseGado = "gado(a)? Nunca nem fui!";
    } else if (nivelGado <= 40) {
      fraseGado = "Gado(a) nem nos sonhos kkkkk!";
    } else if (nivelGado <= 50) {
      fraseGado = "Laele, sou gado não fi!";
    } else if (nivelGado <= 70) {
      fraseGado = "Sou gadinho, meu chifres estão nascendo!";
    } else if (nivelGado <= 80) {
      fraseGado = "Estou até mugiando, muuuuuuu!";
    } else if (nivelGado <= 90) {
      fraseGado = "Não posso ver uma gadice, que já quero passar kkk!";
    } else {
      fraseGado = "Sou um gado(a) supremo!!!";
    }
  
    // Define o emoji de acordo com o nível de chatice
    let emojiGado;
    if (nivelGado <= 20) {
      emojiGado = "😐";
    } else if (nivelGado <= 40) {
      emojiGado = "😄";
    } else if (nivelGado <= 60) {
      emojiGado = "🌚";
    } else if (nivelGado <= 80) {
      emojiGado = "👀";
    } else if (nivelGado <= 95) {
      emojiGado = "🐮";
    } else {
      emojiGado = "🐂";
    }
  
    // Cria um gráfico vertical com a porcentagem de chatice
    let graficoGado = '';
    for (let i = 10; i <= 100; i += 10) {
      if (nivelGado >= i) {
        graficoGado += '🟫';
      } else {
        graficoGado += '⬜️';
      }
    } 
  
    // Cria a mensagem de resposta com a frase, o emoji e o gráfico vertical
    const respostaGado = `*Nível de gado*\n\nA sua gadice está em ${nivelGado}%\n\n${fraseGado}${emojiGado}\n${graficoGado} *${nivelGado}%*`;
  
    // Envia a mensagem de resposta para o usuário que enviou o comando /chato
    bot.sendMessage(msg.chat.id, respostaGado, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  })
  


  function gerarDataAleatoria() {
    // Seleciona um ano aleatório entre 2024 e 2050
    const ano = Math.floor(Math.random() * (2050 - 2024 + 1)) + 2024;
    // Seleciona um mês aleatório entre 0 e 11 (0 = janeiro, 11 = dezembro)
    const mes = Math.floor(Math.random() * 12);
    // Seleciona um dia aleatório entre 1 e 28
    let dia = Math.floor(Math.random() * 28) + 1;
    
    // Verifica se o mês selecionado é fevereiro
    if (mes === 1) {
      // Se for, verifica se o ano é bissexto (divisível por 4 e não por 100, ou divisível por 400)
      const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
      // Se for bissexto, o dia máximo é 29, caso contrário, é 28
      dia = bissexto ? Math.min(dia, 29) : Math.min(dia, 28);
    // Verifica se o mês selecionado é abril, junho, setembro ou novembro (meses com 30 dias)
    } else if ([3, 5, 8, 10].includes(mes)) {
      // Se for, o dia máximo é 30
      dia = Math.min(dia, 30);
    }
    
    // Retorna a data como uma string formatada "DD/MM/AAAA"
    return `${dia.toString().padStart(2, '0')}/${(mes+1).toString().padStart(2, '0')}/${ano}`;
  }
  
  const datasCasamento = [
    { data: gerarDataAleatoria(), emoji: '💍' },
    { data: gerarDataAleatoria(), emoji: '👰' },
    { data: gerarDataAleatoria(), emoji: '🤵' },
    { data: gerarDataAleatoria(), emoji: '❤️' },
  ];
  
  function selecionaCasamentoAleatorio() {
    return datasCasamento[Math.floor(Math.random() * datasCasamento.length)];
  }
  
  bot.onText(/\/casamento/, (msg) => {
    const chatId = msg.chat.id;
  
    const casamento = selecionaCasamentoAleatorio();
    const respostacasamento = `*Data do casamento*\n\nVocê irá se casar em ${casamento.data} ${casamento.emoji} \n\n👩‍❤️‍👨 Parabéns, já sabe com quem vai ser?`;

    bot.sendMessage(chatId, respostacasamento, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  });
  
  
  
  
  

  function gerarDataAleatoriaNascimento() {
    // Seleciona um ano aleatório entre 1970 e 2005
    const ano = Math.floor(Math.random() * (2005 - 1970 + 1)) + 1970;
    // Seleciona um mês aleatório entre 0 e 11 (0 = janeiro, 11 = dezembro)
    const mes = Math.floor(Math.random() * 12);
    // Seleciona um dia aleatório entre 1 e 28
    let dia = Math.floor(Math.random() * 28) + 1;
    
    // Verifica se o mês selecionado é fevereiro
    if (mes === 1) {
      // Se for, verifica se o ano é bissexto (divisível por 4 e não por 100, ou divisível por 400)
      const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
      // Se for bissexto, o dia máximo é 29, caso contrário, é 28
      dia = bissexto ? Math.min(dia, 29) : Math.min(dia, 28);
    // Verifica se o mês selecionado é abril, junho, setembro ou novembro (meses com 30 dias)
    } else if ([3, 5, 8, 10].includes(mes)) {
      // Se for, o dia máximo é 30
      dia = Math.min(dia, 30);
    }
    
    // Retorna a data como uma string formatada "DD/MM/AAAA"
    return `${dia.toString().padStart(2, '0')}/${(mes+1).toString().padStart(2, '0')}/${ano}`;
  }
  
  const datasNascimento = [
    { data: gerarDataAleatoriaNascimento(), emoji: '👶' },
    { data: gerarDataAleatoriaNascimento(), emoji: '🎂' },
    { data: gerarDataAleatoriaNascimento(), emoji: '🎉' },
    { data: gerarDataAleatoriaNascimento(), emoji: '🎁' },
  ];
  
  function selecionaNascimentoAleatorio() {
    return datasNascimento[Math.floor(Math.random() * datasNascimento.length)];
  }
  
  bot.onText(/\/nascimento/, (msg) => {
    const chatId = msg.chat.id;
  
    const nascimento = selecionaNascimentoAleatorio();

    const respostanascimento = `*Data do seu nascimento*\n\nVocê nasceu em ${nascimento.data} ${nascimento.emoji}`;

  
    bot.sendMessage(chatId, respostanascimento, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  });




 



  function gerarDataAleatoriaMorte() {
    // Seleciona um ano aleatório entre 1970 e 2005
    const ano = Math.floor(Math.random() * (2024 - 2023 + 1)) + 2023;
    // Seleciona um mês aleatório entre 0 e 11 (0 = janeiro, 11 = dezembro)
    const mes = Math.floor(Math.random() * 12);
    // Seleciona um dia aleatório entre 1 e 28
    let dia = Math.floor(Math.random() * 28) + 1;
    
    // Verifica se o mês selecionado é fevereiro
    if (mes === 1) {
      // Se for, verifica se o ano é bissexto (divisível por 4 e não por 100, ou divisível por 400)
      const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
      // Se for bissexto, o dia máximo é 29, caso contrário, é 28
      dia = bissexto ? Math.min(dia, 29) : Math.min(dia, 28);
    // Verifica se o mês selecionado é abril, junho, setembro ou novembro (meses com 30 dias)
    } else if ([3, 5, 8, 10].includes(mes)) {
      // Se for, o dia máximo é 30
      dia = Math.min(dia, 30);
    }
    
    // Retorna a data como uma string formatada "DD/MM/AAAA"
    return `${dia.toString().padStart(2, '0')}/${(mes+1).toString().padStart(2, '0')}/${ano}`;
  } 
  
  const datasMorte = [
    { data1: gerarDataAleatoriaMorte(), emoji2: '😵' },
    { data1: gerarDataAleatoriaMorte(), emoji2: '💀' },
    { data1: gerarDataAleatoriaMorte(), emoji2: '👻' },
    { data1: gerarDataAleatoriaMorte(), emoji2: '☠️' },
  ];
  
  function selecionaMorteAleatorio() {
    return datasMorte[Math.floor(Math.random() * datasMorte.length)];
  }
  
  bot.onText(/\/morte/, (msg) => {
    const chatId = msg.chat.id;
  
    const morte = selecionaMorteAleatorio();

    const respostamorte = `*Data da sua morte*\n\nVocê morrerá em ${morte.data1} ${morte.emoji2}`;

  
    bot.sendMessage(chatId, respostamorte, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  });



  bot.onText(/\/genero/, (msg) => {
    const generos = [
      {nome: 'Heterossexual', emoji: '👫'},
      {nome: 'Homossexual', emoji: '👬👭'},
      {nome: 'Bissexual', emoji: '👬👭👫'},
      {nome: 'Pansexual', emoji: '👬👭👫💖'},
      {nome: 'Assexual', emoji: '🚫🍆💏'},
      {nome: 'Demissexual', emoji: '💑👬👭'},
      {nome: 'Graysexual', emoji: '👥🔘'},
      {nome: 'Polissexual', emoji: '👥👥👬👭'},
      {nome: 'Queer', emoji: '🏳️‍🌈'},
      {nome: 'Aromântico', emoji: '❤️🚫'},
      {nome: 'Bigênero', emoji: '⚥'},
      {nome: 'Não-binário', emoji: '🚻'},
      {nome: 'Gênero-fluido', emoji: '🌊'},
      {nome: 'Transgênero', emoji: '🏳️‍⚧️'},
      {nome: 'Cisgênero', emoji: '♂️♀️'},
      {nome: 'Intersexo', emoji: '⚧'},
      {nome: 'Dois-espíritos', emoji: '🏳️‍⚧️'},
      {nome: 'Transexual', emoji: '🚻🔀'},
    ];
    const genero = generos[Math.floor(Math.random() * generos.length)];

    const respostagenero = `O gênero sexual escolhido é *${genero.nome} ${genero.emoji}*`;


    bot.sendMessage(msg.chat.id, respostagenero, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  });
  

  bot.onText(/\/filho/, (msg, match) => {
    // Escolhe um nome e um gênero aleatoriamente
    const generos = ['masculino', 'feminino'];
    const genero = generos[Math.floor(Math.random() * generos.length)];
    const nomesMasculinos = ['Pedro', 'João', 'Miguel', 'Lucas', 'Rafael', 'Gustavo', 'Thiago', 'Arthur', 'Enzo', 'Leonardo'];
    const nomesFemininos = ['Maria', 'Ana', 'Sofia', 'Lara', 'Gabriela', 'Julia', 'Mariana', 'Isabela', 'Manuela', 'Laura'];
    const nome = genero === 'masculino' ? nomesMasculinos[Math.floor(Math.random() * nomesMasculinos.length)] : nomesFemininos[Math.floor(Math.random() * nomesFemininos.length)];
    
    // Escolhe uma data de nascimento aleatoriamente
    const ano = Math.floor(Math.random() * (2050 - 2024 + 1)) + 2024;
    const mes = Math.floor(Math.random() * 12) + 1;
    const dia = Math.floor(Math.random() * 31) + 1;
    const dataNascimento = new Date(ano, mes, dia);
    
    // Formata a data de nascimento
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dataNascimentoFormatada = dataNascimento.toLocaleDateString('pt-BR', options);

    const respostafilho = `*🎊Parabéns, você é o(a) mais novo(a) Pai/Mãe🎊* \n\n🚼 Você terá um neném do sexo *${genero}* \n🪪 Nome dele(a) será *${nome}!* \n⏳ Ele(a) nascerá em *${dataNascimentoFormatada}.*`;

    
    // Envia a mensagem com as informações do filho
    bot.sendMessage(msg.chat.id, respostafilho, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
  });
  







// lista de URLs de gifs "certo" e "errado"
const gifs = {
  certo: [
    { url: 'https://media1.tenor.com/images/d3773429c196cf5f84431b74355b5225/tenor.gif?itemid=27624796', caption: '*Parabéns, você conseguiu!*' },
  ],
  errado: [
    { url: 'https://media.tenor.com/images/7fe52d2d9bbc27937b30761ff5dd32d0/tenor.gif', caption: '*Ops, você não conseguiu. Tente novamente!*' },
  ]
};

// comando /sorte
bot.onText(/\/sorte/, (msg) => {
  // gera um número aleatório entre 0 e 1
  const randomNumber = Math.random();

  // define a mensagem de resposta com o gif correspondente
  let response;
  if (randomNumber < 0.01) {
    // 1% de chance de enviar um gif "certo"
    const index = Math.floor(Math.random() * gifs.certo.length);
    response = gifs.certo[index];
  } else {
    // 99% de chance de enviar um gif "errado"
    const index = Math.floor(Math.random() * gifs.errado.length);
    response = gifs.errado[index];
  }

  // envia a mensagem com o gif e o caption
  bot.sendDocument(msg.chat.id, response.url, { caption: response.caption, reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});








const candidatos = [
  { nome: 'Jair Bolsonaro', partido: 'PL', imagem: 'https://opopularmm.com.br/wp-content/uploads/2018/10/BOLSONARO-750x750.jpg' },
  { nome: 'Lula', partido: 'PT', imagem: 'https://asmetro.org.br/portalsn/wp-content/uploads/2022/12/lula-site.png' },
  { nome: 'Ciro Gomes', partido: 'PDT', imagem: 'https://todospelaeducacao.org.br/wordpress/wp-content/uploads/2018/08/candidato-ciro-gomes.jpg' },
  { nome: 'João Doria', partido: 'PSDB', imagem: 'https://pbs.twimg.com/profile_images/1519326494488776705/v_hRn0jz_400x400.jpg' },
  { nome: 'Marina Silva', partido: 'REDE', imagem: 'https://pbs.twimg.com/profile_images/1577255224741400576/_1Vi_i-g_400x400.jpg' },
  { nome: 'Sérgio Moro', partido: 'UB', imagem: 'https://pbs.twimg.com/profile_images/1559524571174297602/NIso6rDG_400x400.jpg' },
  { nome: 'Eduardo Leite', partido: 'PSDB', imagem: 'https://media.licdn.com/dms/image/C4E03AQEvOFeTZp40ag/profile-displayphoto-shrink_800_800/0/1650287742747?e=2147483647&v=beta&t=G1uUOJEC7t2upBZ0FrBJ5wFxRZZOQZs3iufNzALBnLk' },
  { nome: 'Geraldo Alckmin', partido: 'PSB', imagem: 'https://pbs.twimg.com/profile_images/1587509953425997824/C5aKzsY0_400x400.jpg' },
  { nome: 'Padre Kelmon', partido: 'DEM', imagem: 'https://i.em.com.br/K8JiPm7KaASNcmCOfllkz71RSNM=/820x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/09/29/1400246/padre-kelmon-candidato-do-ptb_1_53369.jpg' },
  { nome: 'Cabo Daciolo', partido: 'PATRI', imagem: 'https://pbs.twimg.com/profile_images/1591111452043223048/904rAJQl_400x400.jpg' },
  { nome: 'Guilherme Boulos', partido: 'PSOL', imagem: 'https://conteudo.imguol.com.br/c/parceiros/6a/2020/11/27/guilherme-boulos-foto-guilherme-santos-sul-21-1606514489514_v2_450x450.jpg.webp' },
  { nome: 'Luciano Huck', partido: 'Sem partido', imagem: 'https://pbs.twimg.com/profile_images/1500173998080016387/wuOSWMir_400x400.jpg' },
  { nome: 'Fernando Haddad', partido: 'PT', imagem: 'https://pbs.twimg.com/profile_images/1580018698961690624/BKkWfeFV_400x400.jpg' },
  { nome: 'Álvaro Dias', partido: 'PODE', imagem: 'https://www.senado.leg.br/senadores/img/fotos-oficiais/senador945.jpg' },
  { nome: 'Manuela D\'Ávila', partido: 'PCdoB', imagem: 'https://www.diariodocentrodomundo.com.br/wp-content/uploads/2018/07/manuela-1-640x455.jpg' },
];


bot.onText(/^\/presidente/, async (msg, match) => {
  // Sorteia um candidato aleatório
  const candidatoIndex = Math.floor(Math.random() * candidatos.length);
  const candidato = candidatos[candidatoIndex];
  const chatId = msg.chat.id;

  // Envia a imagem do candidato com a informação do candidato na caption
  await bot.sendPhoto(chatId, candidato.imagem, { 
    caption: `Seu presidente é *${candidato.nome}* (${candidato.partido})`,
    parse_mode: 'Markdown',
    reply_to_message_id: msg.message_id 
  });
});




const atores = [
  {
    nome: 'Meryl Streep',
    idade: 72,
    filmes: ['O Diabo Veste Prada', 'Kramer vs. Kramer', 'A Dama de Ferro'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Tom Hanks',
    idade: 65,
    filmes: ['Forrest Gump', 'Náufrago', 'O Resgate do Soldado Ryan'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Leonardo DiCaprio',
    idade: 47,
    filmes: ['O Lobo de Wall Street', 'Titanic', 'O Regresso'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Emma Stone',
    idade: 33,
    filmes: ['La La Land', 'Birdman', 'As Serviçais'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Denzel Washington',
    idade: 67,
    filmes: ['Dia de Treinamento', 'Malcolm X', 'Um Limite Entre Nós'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Cate Blanchett',
    idade: 52,
    filmes: ['Blue Jasmine', 'O Aviador', 'Elizabeth'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Robert De Niro',
    idade: 78,
    filmes: ['Taxi Driver', 'O Poderoso Chefão Parte II', 'Touro Indomável'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Joaquin Phoenix',
    idade: 47,
    filmes: ['Coringa', 'Gladiador', 'Ela'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Anthony Hopkins',
    idade: 84,
    filmes: ['O Silêncio dos Inocentes', 'Hannibal', 'Oito Mulheres e um Segredo'],
    oscar: true,
    emoji: '⭐️',
  },
  {
    nome: 'Morgan Freeman',
    idade: 84,
    filmes: ['Um Sonho de Liberdade', 'Conduzindo Miss Daisy', 'Truque de Mestre'],
    oscar: true,
    emoji: '⭐️',
  },
];

bot.onText(/\/ator/, (msg) => {
  const ator = atores[Math.floor(Math.random() * atores.length)];
  const { nome, idade, filmes, oscar, emoji } = ator;

  let mensagem = `*Seu ator/atriz preferido(a) ${emoji}*\n\n*Nome:* ${nome} \n*Idade:* ${idade} anos\n*Filmes:*${filmes.join(', ')}\n`;

  if (oscar) {
    mensagem += `\n*Ganhador(a) do Oscar 🏆*`;
  } else {
    mensagem += `\n*Indicado(a) ao Oscar 🎥*`;
  }

  bot.sendMessage(msg.chat.id, mensagem, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});


bot.onText(/\/religiao/, (msg) => {
  const religioes = [
    { nome: 'Cristianismo', emoji: '✝️', descricao: 'Religião que crê em Jesus Cristo como o filho de Deus e salvador da humanidade.', fundador: 'Jesus Cristo' },
    { nome: 'Islamismo', emoji: '☪️', descricao: 'Religião que segue os ensinamentos do profeta Maomé e crê em Alá como o único Deus.', fundador: 'Maomé' },
    { nome: 'Judaísmo', emoji: '✡️', descricao: 'Religião que se baseia no Antigo Testamento e acredita na vinda do Messias.', fundador: 'Abraão' },
    { nome: 'Budismo', emoji: '☸️', descricao: 'Religião que busca a iluminação através da meditação e do estudo dos ensinamentos de Buda.', fundador: 'Buda' },
    { nome: 'Hinduísmo', emoji: '🕉️', descricao: 'Religião que crê na reencarnação e no karma, e venera vários deuses e deusas.', fundador: 'Não há um fundador definido' },
    { nome: 'Siquismo', emoji: '☬', descricao: 'Religião que segue os ensinamentos do Guru Nanak e prega a igualdade e a fraternidade.', fundador: 'Guru Nanak' },
    { nome: 'Candomblé', emoji: '🔮', descricao: 'Religião afro-brasileira que cultua os orixás e entidades ancestrais africanas.', fundador: 'Não há um fundador definido' },
    { nome: 'Wicca', emoji: '🌙', descricao: 'Religião neopagã que se baseia na magia e na natureza, e celebra os ciclos da Lua.', fundador: 'Gerald Gardner' },
    { nome: 'Zoroastrismo', emoji: '🕊️', descricao: 'Religião antiga do Irã que acredita em um Deus supremo, Ahura Mazda, e na luta entre o bem e o mal.', fundador: 'Zaratustra' },
    { nome: 'Xintoísmo', emoji: '🎎', descricao: 'Religião japonesa que venera os kami, espíritos divinos da natureza e dos antepassados.', fundador: 'Não há um fundador definido' },
    { nome: 'Santo Daime', emoji: '🍃', descricao: 'Religião brasileira que utiliza um chá alucinógeno, o ayahuasca, em seus rituais.', fundador: 'Raimundo Irineu Serra' },
    { nome: 'Satanismo', emoji: '👹', descricao: 'Movimento que cultua Satanás como um símbolo da liberdade individual e da rebelião contra a moral religiosa.', fundador: 'Anton LaVey' },
    { nome: 'Jainismo', emoji: '🕉️', descricao: 'Religião indiana que prega a não-violência, o respeito a todas as formas de vida e a busca pela libertação do ciclo de reencarnação.', fundador: 'Mahavira' },
    { nome: 'Taoismo', emoji: '☯️', descricao: 'Filosofia religiosa chinesa que busca o equilíbrio entre opostos e a harmonia com a natureza.', fundador: 'Lao Tsé' },
  ];

  // Escolhe aleatoriamente a religião correspondente
  const religiao = religioes[Math.floor(Math.random() * religioes.length)];
  const respostaReligao = `Sua religão é *${religiao.nome} ${religiao.emoji}*\n\n*Dados:* ${religiao.descricao}\n\n*Fundador:* ${religiao.fundador}`;


  // Resposta ao usuário
  bot.sendMessage(msg.chat.id, respostaReligao, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});


bot.onText(/\/altura/, (msg) => {
  const altura = (Math.floor(Math.random() * 81) + 130) / 100; // Altura aleatória entre 1,30 e 2,10
  const alturaEmojis = ['👶', '🧍', '👧', '👨', '🧑', '👴', '🏋️‍♂️', '🚀', '🦍', '🦒']; // Emojis correspondentes a cada faixa de altura
  let emoji = alturaEmojis[0];
  let frase = 'Altura abaixo da média'; // Frase correspondente à faixa de altura

  // Verifica em qual faixa de altura a altura aleatória se encontra
  if (altura >= 1.31 && altura <= 1.40) {
    emoji = alturaEmojis[1];
    frase = 'Altura de um(a) hobbit';
  } else if (altura >= 1.41 && altura <= 1.50) {
    emoji = alturaEmojis[2];
    frase = 'Altura de uma pessoa baixa';
  } else if (altura >= 1.51 && altura <= 1.60) {
    emoji = alturaEmojis[3];
    frase = 'Altura de uma pessoa média';
  } else if (altura >= 1.61 && altura <= 1.70) {
    emoji = alturaEmojis[4];
    frase = 'Altura de uma pessoa alta';
  } else if (altura >= 1.71 && altura <= 1.80) {
    emoji = alturaEmojis[5];
    frase = 'Altura de um(a) modelo';
  } else if (altura >= 1.81 && altura <= 1.90) {
    emoji = alturaEmojis[6];
    frase = 'Altura de um(a) jogador(a) de basquete';
  } else if (altura >= 1.91 && altura <= 2.00) {
    emoji = alturaEmojis[7];
    frase = 'Altura de um(a) gigante';
  } else if (altura >= 2.01 && altura <= 2.10) {
    emoji = alturaEmojis[8];
    frase = 'Altura de um(a) titã';
  }

  const resposta = `*Sua altura ${emoji}* \n\nVocê mede é *${altura.toFixed(2)} m.* \n\n${frase}!`;

  bot.sendMessage(msg.chat.id, resposta, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});



bot.onText(/\/idade/, (msg) => {
  // Escolhe uma idade aleatória entre 16 e 59
  const idade = Math.floor(Math.random() * 44) + 16;

  // Monta a mensagem de resposta com a idade escolhida
  const resposta = `Você tem a idade de ${idade} anos.`;

  // Envia a mensagem de resposta
  bot.sendMessage(msg.chat.id, resposta, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});




const sistemas = [
  {
    nome: 'Capitalismo',
    codenome: 'Capitalista',
    descricao: 'Sistema econômico em que os meios de produção são de propriedade privada e as atividades econômicas são guiadas pelo mercado.',
    emoji: '💰'
  },
  {
    nome: 'Socialismo',
    codenome: 'Socialista',
    descricao: 'Sistema econômico em que os meios de produção são de propriedade coletiva e as atividades econômicas são planejadas e controladas pelo Estado.',
    emoji: '👥'
  },
  {
    nome: 'Comunismo',
    codenome: 'Comunista',
    descricao: 'Sistema político e econômico que busca a eliminação das classes sociais e a propriedade coletiva dos meios de produção.',
    emoji: '🚩'
  },
  {
    nome: 'Anarquismo',
    codenome: 'Anarquista',
    descricao: 'Filosofia política que defende a eliminação do Estado e a organização da sociedade em comunidades autônomas e auto-geridas.',
    emoji: 'Ⓐ'
  },
  {
    nome: 'Fascismo',
    codenome: 'Facista',
    descricao: 'Ideologia política autoritária que enfatiza o nacionalismo, o militarismo e o totalitarismo.',
    emoji: '🕊️'
  },
  {
    nome: 'Monarquia',
    codenome: 'Monarquista',
    descricao: 'Sistema político em que o poder é exercido por um monarca, geralmente de forma hereditária.',
    emoji: '👑'
  },
  {
    nome: 'República',
    codenome: 'Republicano',
    descricao: 'Sistema político em que o poder é exercido pelo povo ou seus representantes eleitos.',
    emoji: '🗳️'
  },
  {
    nome: 'Democracia',
    codenome: 'Democrata',
    descricao: 'Sistema político em que o poder é exercido pelo povo ou seus representantes eleitos, através de processos democráticos.',
    emoji: '🗳️'
  },
  {
    nome: 'Teocracia',
    codenome: 'Teocrata',
    descricao: 'Sistema político em que o poder é exercido por líderes religiosos ou por uma religião oficial.',
    emoji: '🕍'
  },
  {
    nome: 'Meritocracia',
    codenome: 'Meritocrata',
    descricao: 'Sistema político em que o poder é exercido por indivíduos com base em seus méritos e habilidades.',
    emoji: '🎓'
  },
  {
    nome: 'Plutocracia',
    codenome: 'Plutocrata',
    descricao: 'Sistema político em que o poder é exercido pelos mais ricos ou pelos proprietários de grandes empresas.',
    emoji: '💰'
  },
  {
    nome: 'Oligarquia',
    codenome: 'Oligárquico',
    descricao: 'Sistema político em que o poder é exercido por um pequeno grupo de pessoas.',
    emoji: '👥'
  },
  {
    nome: 'Totalitarismo',
    codenome: 'Totalitário',
    descricao: 'Sistema político em que o Estado tem controle total sobre a sociedade e a economia.',
    emoji: '🛡️'
  },
  {
    nome: 'Autocracia',
    codenome: 'Autocrata',
    descricao: 'Sistema político em que o poder é exercido por uma pessoa ou por um pequeno grupo de pessoas, sem qualquer participação popular ou limitações constitucionais.',
    emoji: '👤'
    }
    ];



bot.onText(/\/sistema/, (msg) => {
  const sistemaIndex = Math.floor(Math.random() * sistemas.length);
  const sistema = sistemas[sistemaIndex];

  
  bot.sendMessage(msg.chat.id, `Você é um *${sistema.codenome} ${sistema.emoji}* \n\n*Sistema:* ${sistema.nome}\n\n*Descrição:* ${sistema.descricao}`, {
    parse_mode: 'Markdown',
    reply_to_message_id: msg.message_id
  });
});



const profissoes = [
  {
    nome: 'Médico(a)',
    funcao: 'Cuida da saúde das pessoas e prescreve tratamentos médicos.',
    emoji: '🩺'
  },
  {
    nome: 'Psicólogo(a)',
    funcao: 'Trata de questões emocionais, mentais e comportamentais dos pacientes.',
    emoji: '🧠'
  },
  {
    nome: 'Bombeiro(a)',
    funcao: 'Combate incêndios, realiza salvamentos e presta primeiros socorros.',
    emoji: '🚒'
  },
  {
    nome: 'Policial',
    funcao: 'Mantém a segurança e a ordem pública e investiga crimes.',
    emoji: '👮‍♂️'
  },
  {
    nome: 'Contador(a)',
    funcao: 'Registra e analisa informações financeiras das empresas.',
    emoji: '🧮'
  },
  {
    nome: 'Piloto(a)',
    funcao: 'Controla a navegação de aeronaves e garante a segurança dos passageiros.',
    emoji: '✈️'
  },
  {
    nome: 'Veterinário(a)',
    funcao: 'Cuida da saúde e bem-estar dos animais.',
    emoji: '🐾'
  },
  {
    nome: 'Nutricionista',
    funcao: 'Orienta as pessoas sobre hábitos alimentares saudáveis e balanceados.',
    emoji: '🥗'
  },
  {
    nome: 'Fisioterapeuta',
    funcao: 'Trata de lesões, doenças e disfunções físicas dos pacientes.',
    emoji: '🦵'
  },
  {
    nome: 'Cientista',
    funcao: 'Realiza pesquisas e estudos em diversas áreas da ciência.',
    emoji: '🔬'
  },
  {
    nome: 'Escritor(a)',
    funcao: 'Cria e desenvolve obras literárias, como livros e roteiros.',
    emoji: '📝'
  },
  {
    nome: 'Cineasta',
    funcao: 'Dirige e produz filmes e outras produções audiovisuais.',
    emoji: '🎬'
  },
  {
    nome: 'Empresário(a)',
    funcao: 'Gerencia e administra empresas e negócios.',
    emoji: '💼'
  },
  {
    nome: 'Atleta',
    funcao: 'Pratica e compete em esportes profissionalmente.',
    emoji: '🏅'
  },
  {
    nome: 'Chef de Cozinha',
    funcao: 'Cria e desenvolve receitas e pratos culinários.',
    emoji: '👨‍🍳'
  },
  {
    nome: 'Produtor(a) Musical',
    funcao: 'Produz e grava músicas e álbuns para artistas.',
    emoji: '🎧'
  },
  {
    nome: 'Cirurgião(ã)',
    funcao: 'Realiza cirurgias e procedimentos médicos em pacientes.',
    emoji: '🔪'
  },
  {
    nome: 'Construtor(a)',
    funcao: 'Constrói edifícios, estruturas e obras de engenharia civil.',
    emoji: '🏗️'
  },
  {
    nome: 'Psiquiatra',
    funcao: 'É responsável por diagnosticar e tratar todas as questões de ordem mental, como dependência química, depressão e ansiedade, por exemplo.',
    emoji: '🩺'
  },
  {
    nome: 'Arquiteto(a)',
    funcao: 'Desenvolve projetos e planos para construções e edifícios.',
    emoji: '🏛️'
  },
  {
    nome: 'Advogado(a)',
    funcao: 'Representa e defende os interesses legais de seus clientes.',
    emoji: '👨‍💼'
  },
  {
    nome: 'Jornalista',
    funcao: 'Pesquisa, escreve e reporta notícias e informações ao público.',
    emoji: '📰'
  },
  {
    nome: 'Enfermeiro(a)',
    funcao: 'Cuida e trata de pacientes em hospitais e clínicas.',
    emoji: '👨‍⚕️'
  },
  {
    nome: 'Professor(a)',
    funcao: 'Ensina e educa alunos em instituições de ensino.',
    emoji: '👨‍🏫'
  },
  {
    nome: 'Tradutor(a)',
    funcao: 'Traduz textos e documentos de um idioma para outro.',
    emoji: '🌎'
  },
  {
    nome: 'Designer Gráfico',
    funcao: 'Cria e desenvolve projetos visuais e gráficos para empresas e marcas.',
    emoji: '🎨'
  },
  {
    nome: 'Médico(a)',
    funcao: 'Diagnostica, trata e previne doenças e condições médicas em pacientes.',
    emoji: '👨‍⚕️'
  },
  {
    nome: 'Programador(a)',
    funcao: 'Desenvolve e escreve códigos para sistemas e aplicativos de software.',
    emoji: '💻'
  },
  {
    nome: 'Músico',
    funcao: 'Cria e toca músicas e instrumentos musicais.',
    emoji: '🎵'
  },
  {
    nome: 'Psicanalista',
    funcao: 'Trata de questões emocionais e psicológicas dos pacientes.',
    emoji: '👥'
  },
  {
    nome: 'Engenheiro(a) Civil',
    funcao: 'Projeta e constrói estruturas e obras de engenharia civil.',
    emoji: '🏗️'
  },
  {
    nome: 'Artista Plástico',
    funcao: 'Cria e desenvolve obras de arte visuais e tridimensionais.',
    emoji: '🎨'
  },
  {
    nome: 'Escultor(a)',
    funcao: 'Cria e desenvolve esculturas e obras de arte tridimensionais.',
    emoji: '🗿'
  },
  {
    nome: 'Cantor(a)',
    funcao: 'Canta e apresenta músicas em público.',
    emoji: '🎤'
  },
  {
    nome: 'Técnico(a) de Informática',
    funcao: 'Instala, configura e mantém computadores e sistemas de informação.',
    emoji: '💻'
  },
  {
    nome: 'Fotógrafo(a)',
    funcao: 'Captura e produz fotografias e imagens para diversas finalidades.',
    emoji: '📷'
  },
  {
    nome: 'Biólogo(a)',
    funcao: 'Estuda e pesquisa a vida e os organismos vivos.',
    emoji: '🌱'
  },
];





bot.onText(/\/profissao/, (msg) => {
  const profissaoIndex  = Math.floor(Math.random() * profissoes.length);
  const profissao  = profissoes[profissaoIndex];

  
  bot.sendMessage(msg.chat.id, `*Sua profissão 💼* \n\n*Nome:* ${profissao.nome} ${profissao.emoji} \n*Função:* ${profissao.funcao}`, {
    parse_mode: 'Markdown',
    reply_to_message_id: msg.message_id
  });
});





bot.onText(/\/saudades/, (msg) => {
  // Gera aleatoriamente o nível de chatice entre 0 e 100
  const nivelSaudades = Math.floor(Math.random() * 101);

  // Define a frase de acordo com o nível de chatice
  let fraseSaudades;
  if (nivelSaudades <= 10) {
    fraseSaudades = "Não estou sentindo saudades.";
  } else if (nivelSaudades <= 20) {
    fraseSaudades = "Saudades? O que é isso?";
  } else if (nivelSaudades <= 40) {
    fraseSaudades = "KKKKKK nem quero saber o que isso de saudades...";
  } else if (nivelSaudades <= 50) {
    fraseSaudades = "Estou neutro, quase frio...";
  } else if (nivelSaudades <= 70) {
    fraseSaudades = "Saudades de você!";
  } else if (nivelSaudades <= 80) {
    fraseSaudades = "Estou morrendo de saudades!";
  } else if (nivelSaudades <= 90) {
    fraseSaudades = "Se eu pudesse, matava a saudade agora!";
  } else {
    fraseSaudades = "Se eu pudesse, te abraçava agora!";
  }

  // Define o emoji de acordo com o nível de chatice
  let emojiSaudades;
  if (nivelSaudades <= 20) {
    emojiSaudades = "😐";
  } else if (nivelSaudades <= 40) {
    emojiSaudades = "😕";
  } else if (nivelSaudades <= 60) {
    emojiSaudades = "🥺";
  } else if (nivelSaudades <= 80) {
    emojiSaudades = "😔";
  } else if (nivelSaudades <= 95) {
    emojiSaudades = "😢";
  } else {
    emojiSaudades = "😭";
  }

  // Cria um gráfico vertical com a porcentagem de chatice
  let graficoSaudades = '';
  for (let i = 10; i <= 100; i += 10) {
    if (nivelSaudades >= i) {
      graficoSaudades += '🟨';
    } else {
      graficoSaudades += '⬜️';
    }
  } 

  // Cria a mensagem de resposta com a frase, o emoji e o gráfico vertical
  const respostaSaudades = `*Nível de saudades*\n\nA sua saudades está em ${nivelSaudades}%\n\n${fraseSaudades}${emojiSaudades}\n${graficoSaudades} *${nivelSaudades}%*`;

  // Envia a mensagem de resposta para o usuário que enviou o comando /chato
  bot.sendMessage(msg.chat.id, respostaSaudades, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
})








bot.onText(/\/ciumes/, (msg) => {
  // Gera aleatoriamente o nível de ciúmes entre 0 e 100
  const nivelCiumes = Math.floor(Math.random() * 101);

  // Define a frase de acordo com o nível de ciúmes
  let fraseCiumes;
  if (nivelCiumes <= 10) {
    fraseCiumes = "Não estou sentindo ciúmes.";
  } else if (nivelCiumes <= 20) {
    fraseCiumes = "Ciúmes? Eu? Claro que não!";
  } else if (nivelCiumes <= 40) {
    fraseCiumes = "Não é ciúmes, é preocupação.";
  } else if (nivelCiumes <= 50) {
    fraseCiumes = "Não estou com ciúmes, só achei estranho...";
  } else if (nivelCiumes <= 70) {
    fraseCiumes = "Estou com ciúmes, mas não vou admitir.";
  } else if (nivelCiumes <= 80) {
    fraseCiumes = "Estou com ciúmes, mas não quero te sufocar.";
  } else if (nivelCiumes <= 90) {
    fraseCiumes = "Estou morrendo de ciúmes!";
  } else {
    fraseCiumes = "Se eu pudesse, te trancava em casa!";
  }

  // Define o emoji de acordo com o nível de ciúmes
  let emojiCiumes;
  if (nivelCiumes <= 20) {
    emojiCiumes = "😐";
  } else if (nivelCiumes <= 40) {
    emojiCiumes = "😕";
  } else if (nivelCiumes <= 60) {
    emojiCiumes = "😠";
  } else if (nivelCiumes <= 80) {
    emojiCiumes = "🤬";
  } else if (nivelCiumes <= 95) {
    emojiCiumes = "😡";
  } else {
    emojiCiumes = "💢";
  }

  // Cria um gráfico vertical com a porcentagem de ciúmes
  let graficoCiumes = '';
  for (let i = 10; i <= 100; i += 10) {
    if (nivelCiumes >= i) {
      graficoCiumes += '🔴';
    } else {
      graficoCiumes += '⚪';
    }
  } 

  // Cria a mensagem de resposta com a frase, o emoji e o gráfico vertical
  const respostaCiumes = `*Nível de ciúmes*\n\nO seu ciúme está em ${nivelCiumes}%\n\n${fraseCiumes}${emojiCiumes}\n${graficoCiumes} *${nivelCiumes}%*`;

  // Envia a mensagem de resposta para o usuário que enviou o comando /ciumes
  bot.sendMessage(msg.chat.id, respostaCiumes, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});





const stickers = [
  'CAACAgEAAxkBAAI372P9EexHmVfMTcT_MCJ5t926Q9yqAAIDAgACNWo5RyQSIVGbaQABni4E',
  'CAACAgEAAxkBAAI382P9EiC0kLNfI_Hm9fa7hzQluXEyAAKoAANRd4FGRA1UrSGDIhMuBA',
  'CAACAgEAAxkBAAI39WP9EjBMkIh_hoJnSlgU0vUeR4FHAALiAgACv61ZRwnoA02nk7m4LgQ',
  'CAACAgEAAxkBAAI392P9Ej6BSN0JnZuuv1qcP3dRbevAAALNAgACdUPARt-YJYI7KAwMLgQ',
  'CAACAgEAAxkBAAI3-WP9EpY9GxILI1Ag-cGCdufvLnfUAAKoAwAC43YpR2Ez7kkNmVDdLgQ',
  'CAACAgEAAxkBAAI3-2P9Eqwpz8JdcsX3QHyHCtxmBFeUAAKEAgAC5rPYRN9l-ILQZmgILgQ',
  'CAACAgEAAxkBAAI3_2P9EwagjWrmZXa0aqbbCDXZBNVqAAKmAgACJWFIRahFRq1swkXvLgQ',
  'CAACAgEAAxkBAAI4AWP9ExwP6ufGkvflfpZe5mQtruyVAAIJBQACgg-YRW7u-iSKZ0nwLgQ',
  'CAACAgEAAxkBAAI4A2P9EymeK0iNi5A6Vs3RTefltDR5AAKaAgACxuxYRogsOeOjfwABHC4E',
  'CAACAgEAAxkBAAI4BWP9Ezl6mQP7ePOkr-RZepNTm21DAAJ5AgACIe2IRCTcfyltcgHnLgQ',
  'CAACAgEAAxkBAAI4B2P9E0cdVWMHm3gTX9lmwg8E1eW_AAKsAgACkpYJRvriPDMz9Io9LgQ',
  'CAACAgEAAxkBAAI4CWP9E1QYNLMECpfHz0Naa8a1EsYmAALBBAACou6gRZrADhBMgKymLgQ',
  'CAACAgEAAxkBAAI4C2P9E2nT5TDh33wCgU-SwC5OJzy-AALGAgACPxlJRevtrl4R9gexLgQ',
  'CAACAgEAAxkBAAI4DWP9E4tSOG82QGLnn2QKpRmIJPDnAAKEAgACNQRhRm-d4gpAX_0YLgQ',
  'CAACAgEAAxkBAAI4D2P9E6vwif-4ZyXZR1H2RaqOQTVMAAL8AQAC86JgRjmei8lYtEVXLgQ',
  'CAACAgEAAxkBAAI4EWP9E73Ec5RMziA7Yn52z2yuKsuUAAIOAgACAXRgRkm3He87ZfamLgQ',
  'CAACAgEAAxkBAAI4E2P9E-Jd1gic6ILIh_Qv4nrGnEBcAAIHAgACPF94RideIGdEdIwLLgQ',
  'CAACAgEAAxkBAAI4FWP9E_13ZWcSmzEF6fXYfVueSzI1AAIcBAACHep5RRlG1_uiTiP-LgQ',
];



bot.onText(/\/stickers/, (msg) => {
  const chatId = msg.chat.id;
  const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
  bot.sendSticker(chatId, randomSticker, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});







bot.onText(/\/tpm/, (msg) => {
  // Gera aleatoriamente o nível de irritação entre 0 e 100
  const nivelIrritacao = Math.floor(Math.random() * 101);

  // Define a frase de acordo com o nível de irritação
  let fraseIrritacao;
  if (nivelIrritacao <= 10) {
    fraseIrritacao = "Não estou irritada.";
  } else if (nivelIrritacao <= 20) {
    fraseIrritacao = "Não fale comigo.";
  } else if (nivelIrritacao <= 40) {
    fraseIrritacao = "Estou sensível.";
  } else if (nivelIrritacao <= 50) {
    fraseIrritacao = "Não me encha!";
  } else if (nivelIrritacao <= 70) {
    fraseIrritacao = "Estou chateada.";
  } else if (nivelIrritacao <= 80) {
    fraseIrritacao = "Estou com muita tpm!";
  } else if (nivelIrritacao <= 90) {
    fraseIrritacao = "Se eu pudesse, matava todo mundo agora!";
  } else {
    fraseIrritacao = "Se eu pudesse, explodia agora!";
  }

  // Define o emoji de acordo com o nível de irritação
  let emojiIrritacao;
  if (nivelIrritacao <= 20) {
    emojiIrritacao = "🙅";
  } else if (nivelIrritacao <= 40) {
    emojiIrritacao = "🙎‍♀️";
  } else if (nivelIrritacao <= 60) {
    emojiIrritacao = "😤";
  } else if (nivelIrritacao <= 80) {
    emojiIrritacao = "🤬";
  } else if (nivelIrritacao <= 95) {
    emojiIrritacao = "👿";
  } else {
    emojiIrritacao = "💣";
  }

  // Cria um gráfico vertical com a porcentagem de irritação
  let graficoIrritacao = '';
  for (let i = 10; i <= 100; i += 10) {
    if (nivelIrritacao >= i) {
      graficoIrritacao += '⬛';
    } else {
      graficoIrritacao += '⬜';
    }
  } 

  // Cria a mensagem de resposta com a frase, o emoji e o gráfico vertical
  const respostaIrritacao = `*Nível de TPM*\n\nO seu nível de TPM está em ${nivelIrritacao}%\n\n${fraseIrritacao}${emojiIrritacao}\n${graficoIrritacao} *${nivelIrritacao}%*`;

  // Envia a mensagem de resposta para o usuário que enviou o comando /tpm
  bot.sendMessage(msg.chat.id, respostaIrritacao, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
})



bot.onText(/\/gostosura/, (msg) => {
  // Gera aleatoriamente o nível de gostosura entre 0 e 100
  const nivelGostosura = Math.floor(Math.random() * 101);

  // Define a mensagem de acordo com o nível de gostosura
  let mensagemGostosura;
  if (nivelGostosura <= 20) {
    mensagemGostosura = "Nada demais...";
  } else if (nivelGostosura <= 40) {
    mensagemGostosura = "Você é bonitinha(o)";
  } else if (nivelGostosura <= 60) {
    mensagemGostosura = "Você é atraente";
  } else if (nivelGostosura <= 80) {
    mensagemGostosura = "Você é muito gostosa(o)";
  } else {
    mensagemGostosura = "Você é uma deusa(dos)";
  }

  // Define o emoji de acordo com o nível de gostosura
  let emojiGostosura;
  if (nivelGostosura <= 20) {
    emojiGostosura = "🙄";
  } else if (nivelGostosura <= 40) {
    emojiGostosura = "😊";
  } else if (nivelGostosura <= 60) {
    emojiGostosura = "😍";
  } else if (nivelGostosura <= 80) {
    emojiGostosura = "😘";
  } else {
    emojiGostosura = "🔥";
  }

  // Cria um gráfico vertical com a porcentagem de gostosura
  let graficoGostosura = '';
  for (let i = 10; i <= 100; i += 10) {
    if (nivelGostosura >= i) {
      graficoGostosura += '🟪';
    } else {
      graficoGostosura += '⬜';
    }
  } 

  // Cria a mensagem de resposta com a mensagem, o emoji e o gráfico vertical
  const respostaGostosura = `*Nível de gostosura*\n\nVocê é ${mensagemGostosura}${emojiGostosura}\n${graficoGostosura} *${nivelGostosura}%*`;

  // Envia a mensagem de resposta para o usuário que enviou o comando /gostosura
  bot.sendMessage(msg.chat.id, respostaGostosura, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
})




bot.onText(/\/burro/, (msg) => {
  // Gera aleatoriamente o nível de burrice entre 0 e 100
  const nivelBurro = Math.floor(Math.random() * 101);

  // Define a frase de acordo com o nível de burrice
  let fraseBurro;
  if (nivelBurro <= 10) {
    fraseBurro = "Eu sou o Einstein perto de você.";
  } else if (nivelBurro <= 20) {
    fraseBurro = "Acho que você deveria estudar um pouco mais.";
  } else if (nivelBurro <= 40) {
    fraseBurro = "Não é o seu dia hoje, né?";
  } else if (nivelBurro <= 50) {
    fraseBurro = "Tá difícil pra você, hein?";
  } else if (nivelBurro <= 70) {
    fraseBurro = "Você é burro, mas tem outras qualidades.";
  } else if (nivelBurro <= 80) {
    fraseBurro = "Vamos trabalhar juntos para melhorar o seu desempenho.";
  } else if (nivelBurro <= 90) {
    fraseBurro = "Você precisa estudar mais e se esforçar mais.";
  } else {
    fraseBurro = "Você é tão burro que nem percebe que é burro.";
  }

  // Define o emoji de acordo com o nível de burrice
  let emojiBurro;
  if (nivelBurro <= 20) {
    emojiBurro = "🙄";
  } else if (nivelBurro <= 40) {
    emojiBurro = "😕";
  } else if (nivelBurro <= 60) {
    emojiBurro = "🤔";
  } else if (nivelBurro <= 80) {
    emojiBurro = "🤦‍♂️";
  } else {
    emojiBurro = "🤯";
  }

  // Cria um gráfico vertical com a porcentagem de burrice
  let graficoBurro = '';
  for (let i = 10; i <= 100; i += 10) {
    if (nivelBurro >= i) {
      graficoBurro += '🟫';
    } else {
      graficoBurro += '⬜️';
    }
  } 

  // Cria a mensagem de resposta com a frase, o emoji e o gráfico vertical
  const respostaBurro = `*Nível de burrice*\n\nO seu nível de burrice é ${nivelBurro}%\n\n${fraseBurro}${emojiBurro}\n${graficoBurro} *${nivelBurro}%*`;

  // Envia a mensagem de resposta para o usuário que enviou o comando /burro
  bot.sendMessage(msg.chat.id, respostaBurro, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
})


bot.onText(/\/treteiro/, (msg) => {
  // Gera aleatoriamente o nível de treteirice entre 0 e 100
  const nivelTreteiro = Math.floor(Math.random() * 101);

  // Define a frase de acordo com o nível de treteirice
  let fraseTreteiro;
  if (nivelTreteiro <= 10) {
    fraseTreteiro = "Nada de treta hoje, estou tranquilo.";
  } else if (nivelTreteiro <= 30) {
    fraseTreteiro = "Hoje não estou muito a fim de treta.";
  } else if (nivelTreteiro <= 50) {
    fraseTreteiro = "Eu até poderia arranjar uma treta, mas tô com preguiça.";
  } else if (nivelTreteiro <= 70) {
    fraseTreteiro = "Estou um pouco treteiro hoje.";
  } else if (nivelTreteiro <= 90) {
    fraseTreteiro = "Hoje é dia de treta!";
  } else {
    fraseTreteiro = "Estou pronto para a guerra das tretas!";
  }

  // Define o emoji de acordo com o nível de treteirice
  let emojiTreteiro;
  if (nivelTreteiro <= 20) {
    emojiTreteiro = "😐";
  } else if (nivelTreteiro <= 40) {
    emojiTreteiro = "😏";
  } else if (nivelTreteiro <= 60) {
    emojiTreteiro = "😈";
  } else if (nivelTreteiro <= 80) {
    emojiTreteiro = "👹";
  } else {
    emojiTreteiro = "💣";
  }

  // Cria um gráfico vertical com a porcentagem de treteirice
  let graficoTreteiro = '';
  for (let i = 10; i <= 100; i += 10) {
    if (nivelTreteiro >= i) {
      graficoTreteiro += '⚫';
    } else {
      graficoTreteiro += '⚪';
    }
  } 

  // Cria a mensagem de resposta com a frase, o emoji e o gráfico vertical
  const respostaTreteiro = `*Nível de treteiro(a)*\n\nO seu nível de treteiro(a) está em ${nivelTreteiro}%\n\n${fraseTreteiro}${emojiTreteiro}\n${graficoTreteiro} *${nivelTreteiro}%*`;

  // Envia a mensagem de resposta para o usuário que enviou o comando /treteiro
  bot.sendMessage(msg.chat.id, respostaTreteiro, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
})




bot.onText(/\/sexo/, (msg) => {
  // Gera aleatoriamente o nível de potencial na cama entre 0 e 100
  const nivelPotencial = Math.floor(Math.random() * 101);

  // Define a frase de acordo com o nível de potencial na cama
  let frasePotencial;
  if (nivelPotencial <= 10) {
    frasePotencial = "Hoje eu tô cansado, acho que não rola.";
  } else if (nivelPotencial <= 30) {
    frasePotencial = "Talvez eu esteja um pouco enferrujado.";
  } else if (nivelPotencial <= 50) {
    frasePotencial = "Eu tô mais ou menos, pode ser que role.";
  } else if (nivelPotencial <= 70) {
    frasePotencial = "Hoje eu tô bem, acho que pode ser bom.";
  } else if (nivelPotencial <= 90) {
    frasePotencial = "Eu tô muito animado, vai ser ótimo!";
  } else {
    frasePotencial = "Eu tô pronto para arrasar na cama!";
  }

  // Define o emoji de acordo com o nível de potencial na cama
  let emojiPotencial;
  if (nivelPotencial <= 20) {
    emojiPotencial = "😕";
  } else if (nivelPotencial <= 40) {
    emojiPotencial = "😏";
  } else if (nivelPotencial <= 60) {
    emojiPotencial = "😍";
  } else if (nivelPotencial <= 80) {
    emojiPotencial = "😈";
  } else {
    emojiPotencial = "🔥";
  }

  // Cria um gráfico vertical com a porcentagem de potencial na cama
  let graficoPotencial = '';
  for (let i = 10; i <= 100; i += 10) {
    if (nivelPotencial >= i) {
      graficoPotencial += '🟥';
    } else {
      graficoPotencial += '⬜️';
    }
  } 

  // Cria a mensagem de resposta com a frase, o emoji e o gráfico vertical
  const respostaPotencial = `*Potencial na cama*\n\nO seu potencial na cama está em ${nivelPotencial}%\n\n${frasePotencial}${emojiPotencial}\n${graficoPotencial} *${nivelPotencial}%*`;

  // Envia a mensagem de resposta para o usuário que enviou o comando /sexo
  bot.sendMessage(msg.chat.id, respostaPotencial, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
})




bot.onText(/\/fake/, (msg) => {
  const chatId = msg.chat.id;

  // Gerar resposta verdadeira ou falsa aleatória para cada categoria
  const isNameFake = Math.random() < 0.5;
  const isPhotoFake = Math.random() < 0.5;
  const isUsernameFake = Math.random() < 0.5;
  const isTypingStyleFake = Math.random() < 0.5;

  // Calcular a porcentagem de probabilidade de ser falso com base na quantidade de categorias falsas detectadas
  const numCategories = 4;
  const numFakeCategories = (isNameFake ? 1 : 0) + (isPhotoFake ? 1 : 0) + (isUsernameFake ? 1 : 0) + (isTypingStyleFake ? 1 : 0);
  const probability = Math.round((numFakeCategories / numCategories) * 100);

  // Gerar resposta com base nas respostas verdadeiras ou falsas aleatórias e na porcentagem de probabilidade
  let response = '*⚠️ Verificador de fake ⚠️*\n\n👮‍♂️ Iniciando análise 👮‍♂️\n\n';

  response += `*Nome:* ${isNameFake ? '❌ falso' : '✅ verdadeiro'}\n`;
  response += `*Foto:* ${isPhotoFake ? '❌ falsa' : '✅ verdadeira'}\n`;
  response += `*Username:* ${isUsernameFake ? '❌ falso' : '✅ verdadeiro'}\n`;
  response += `*Forma de escrever:* ${isTypingStyleFake ? '❌ falsa' : '✅ verdadeira'}\n\n`;

  response += `Resultado: Existe a probabilidade de *${probability}% de você ser fake.👀*`;

  bot.sendMessage(chatId, response, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});







bot.onText(/\/serbanido/, (msg) => {
  const chatId = msg.chat.id;

  // Gerar resposta verdadeira ou falsa aleatória para cada categoria
  const isNameBan = Math.random() < 0.5;
  const isPhotoBan = Math.random() < 0.5;
  const isUsernameBan = Math.random() < 0.5;
  const isTypingStyleBan = Math.random() < 0.5;

  // Calcular a porcentagem de probabilidade de ser falso com base na quantidade de categorias falsas detectadas
  const numCategories = 4;
  const numBanCategories = (isNameBan ? 1 : 0) + (isPhotoBan ? 1 : 0) + (isUsernameBan ? 1 : 0) + (isTypingStyleBan ? 1 : 0);
  const probability = Math.round((numBanCategories / numCategories) * 100);

  // Gerar resposta com base nas respostas verdadeiras ou falsas aleatórias e na porcentagem de probabilidade
  let response1 = '*⚠️ Verificador de Banimento ⚠️*\n\n👮‍♂️ Iniciando análise 👮‍♂️\n\n';

  response1 += `*Advertência:* ${isNameBan ? '❌ falso' : '✅ verdadeiro'}\n`;
  response1 += `*Mute:* ${isPhotoBan ? '❌ falsa' : '✅ verdadeira'}\n`;
  response1 += `*Kick:* ${isUsernameBan ? '❌ falso' : '✅ verdadeiro'}\n`;
  response1 += `*Forma de escrever:* ${isTypingStyleBan ? '❌ falsa' : '✅ verdadeira'}\n\n`;

  response1 += `🔄Carregando informações...🔄 \n\nResultado: Existe a probabilidade de *${probability}% de você ser Banida.👀*`;

  bot.sendMessage(chatId, response1, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});






bot.onText(/\/seradm/, (msg) => {
  const chatId = msg.chat.id;

  // Gerar resposta verdadeira ou falsa aleatória para cada categoria
  const isNameAdm = Math.random() < 0.5;
  const isPhotoAdm = Math.random() < 0.5;
  const isUsernameAdm = Math.random() < 0.5;
  const isTypingStyleAdm = Math.random() < 0.5;

  // Calcular a porcentagem de probabilidade de ser falso com base na quantidade de categorias falsas detectadas
  const numCategories = 4;
  const numAdmCategories = (isNameAdm ? 1 : 0) + (isPhotoAdm ? 1 : 0) + (isUsernameAdm ? 1 : 0) + (isTypingStyleAdm ? 1 : 0);
  const probability = Math.round((numAdmCategories / numCategories) * 100);

  // Gerar resposta com base nas respostas verdadeiras ou falsas aleatórias e na porcentagem de probabilidade
  let response2 = '*⚠️ Verificador de chances de ser adm ⚠️*\n\n👮‍♂️ Iniciando análise 👮‍♂️\n\n';

  response2 += `*Advertência:* ${isNameAdm ? '❌ falso' : '✅ verdadeiro'}\n`;
  response2 += `*Participação:* ${isPhotoAdm ? '❌ falsa' : '✅ verdadeira'}\n`;
  response2 += `*Interação:* ${isUsernameAdm ? '❌ falso' : '✅ verdadeiro'}\n`;
  response2 += `*Novas ideias para grupo:* ${isTypingStyleAdm ? '❌ falsa' : '✅ verdadeira'}\n\n`;

  response2 += `🔄Carregando informações...🔄 \n\nResultado: Existe a probabilidade de *${probability}% de você ser Adms.👀*`;

  bot.sendMessage(chatId, response2, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});



bot.onText(/\/signo/, (msg) => {
    const signos = [
      { nome: 'Áries', emoji: '♈️', descricao: 'Pessoas arianas são conhecidas por sua coragem, determinação e energia. Elas são líderes naturais e gostam de desafios.', dataInicio: '21 de março', dataFim: '19 de abril' },
      { nome: 'Touro', emoji: '♉️', descricao: 'Pessoas taurinas são conhecidas por sua perseverança, confiabilidade e sensualidade. Elas são leais e gostam de conforto e estabilidade.', dataInicio: '20 de abril', dataFim: '20 de maio' },
      { nome: 'Gêmeos', emoji: '♊️', descricao: 'Pessoas geminianas são conhecidas por sua versatilidade, curiosidade e inteligência. Elas são sociáveis e gostam de novidades e mudanças.', dataInicio: '21 de maio', dataFim: '20 de junho' },
      { nome: 'Câncer', emoji: '♋️', descricao: 'Pessoas cancerianas são conhecidas por sua sensibilidade, empatia e intuição. Elas são protetoras e gostam de estar em ambientes acolhedores.', dataInicio: '21 de junho', dataFim: '22 de julho' },
      { nome: 'Leão', emoji: '♌️', descricao: 'Pessoas leoninas são conhecidas por sua autoconfiança, criatividade e generosidade. Elas gostam de estar no centro das atenções e de serem reconhecidas.', dataInicio: '23 de julho', dataFim: '22 de agosto' },
      { nome: 'Virgem', emoji: '♍️', descricao: 'Pessoas virginianas são conhecidas por sua praticidade, perfeccionismo e inteligência. Elas são organizadas e gostam de resolver problemas.', dataInicio: '23 de agosto', dataFim: '22 de setembro' },
      { nome: 'Libra', emoji: '♎️', descricao: 'Pessoas librianas são conhecidas por sua diplomacia, equilíbrio e sociabilidade. Elas valorizam a harmonia e gostam de estar em grupos.', dataInicio: '23 de setembro', dataFim: '22 de outubro' },
      { nome: 'Escorpião', emoji: '♏️', descricao: 'Pessoas escorpianas são conhecidas por sua intensidade, mistério e paixão. Elas são profundas e gostam de ter controle sobre as situações.', dataInicio: '23 de outubro', dataFim: '21 de novembro' },
      { nome: 'Sagitário', emoji: '♐️', descricao: 'Pessoas sagitarianas são conhecidas por sua liberdade, otimismo e espírito aventureiro. Elas gostam de explorar e descobrir coisas novas.', dataInicio: '22 de novembro', dataFim: '21 de dezembro' },
      { nome: 'Capricórnio', emoji: '♑️', descricao: 'Pessoas capricornianas são conhecidas por sua ambição, disciplina e determinação. Elas são responsáveis e gostam de alcançar metas.', dataInicio: '22 de dezembro', dataFim: '19 de janeiro' },
      { nome: 'Aquário', emoji: '♒️', descricao: 'Pessoas aquarianas são conhecidas por sua originalidade, independência e idealismo. Elas são inovadoras e gostam de quebrar padrões estabelecidos.', dataInicio: '20 de janeiro', dataFim: '18 de fevereiro' },
      { nome: 'Peixes', emoji: '♓️', descricao: 'Pessoas piscianas são conhecidas por sua sensibilidade, intuição e imaginação. Elas são empáticas e gostam de ajudar os outros.', dataInicio: '19 de fevereiro', dataFim: '20 de março' }
      ];
    
  // Escolhe aleatoriamente o signo correspondente
  const signo = signos[Math.floor(Math.random() * signos.length)];

  const respostaSigno = `*Seu signo*\n\n*Nome:* ${signo.nome} ${signo.emoji} \n\n*Descrição:* ${signo.descricao} \n\n*Início:* ${signo.dataInicio} \n\n*Fim:* ${signo.dataFim}`;
  // Resposta ao usuário
  bot.sendMessage(msg.chat.id, respostaSigno, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});


// mapeamento dos emojis numéricos
const emojisNumericos = [
  '0️⃣',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  '5️⃣',
  '6️⃣',
  '7️⃣',
  '8️⃣',
  '9️⃣',
  '🔟',
];

// manipulador para o comando /numerodasorte
bot.onText(/\/numerodasorte/, (msg) => {
  const chatId = msg.chat.id;

  // gera um número aleatório com 6 algarismos
  const numero = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  // converte cada algarismo em um emoji numérico
  const emojis = numero.split('').map((algarismo) => emojisNumericos[parseInt(algarismo)]);

  // cria uma mensagem com os emojis de número
  const mensagem = `*Número da para jogar na Mega-Sena* \n\n🎰 Seu número da sorte é: ${emojis.join('')} \n\nVai apostar?😎`;

  // envia a mensagem para o chat
  bot.sendMessage(chatId, mensagem, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});




// lista de desafios com emojis e explicações
const desafios = [
  {
    emoji: '🏋️‍♂️',
    explicacao: 'Fazer 20 flexões',
  },
  {
    emoji: '🏃‍♀️',
    explicacao: 'Correr 5 km em menos de 30 minutos',
  },
  {
    emoji: '🧘‍♂️',
    explicacao: 'Meditar por 10 minutos',
  },
  {
    emoji: '📚',
    explicacao: 'Ler um livro inteiro em um dia',
  },
  {
    emoji: '🎨',
    explicacao: 'Desenhar um retrato realista',
  },
  {
    emoji: '🎯',
    explicacao: 'Acertar 10 tiros em um alvo a 10 metros de distância',
  },
  {
    emoji: '🧗‍♂️',
    explicacao: 'Escalar uma parede de escalada com 10 metros de altura',
  },
  {
    emoji: '🏊‍♀️',
    explicacao: 'Nadar 1 km sem parar',
  },
  {
    emoji: '🎹',
    explicacao: 'Aprender a tocar uma música nova no piano',
  },
  {
    emoji: '🚴‍♂️',
    explicacao: 'Andar de bicicleta por 50 km em um dia',
  },
  {
    emoji: '🧘‍♀️',
    explicacao: 'Fazer uma aula de yoga avançada',
  },
  {
    emoji: '🎬',
    explicacao: 'Escrever, dirigir e editar um curta-metragem de 5 minutos',
  },
  {
    emoji: '🏭',
    explicacao: 'Construir uma peça de mobília do zero',
  },
  {
    emoji: '📝',
    explicacao: 'Escrever um poema ou conto curto',
  },
  {
    emoji: '🎨',
    explicacao: 'Pintar um retrato a óleo',
  },
];

// manipulador para o comando /desafio
bot.onText(/\/desafio/, (msg) => {
  const chatId = msg.chat.id;

  // escolhe um desafio aleatório da lista
  const desafio = desafios[Math.floor(Math.random() * desafios.length)];

  // cria uma mensagem com o emoji e a explicação do desafio
  const mensagem = `*🏆 VOCÊ FOI DESAFIO 🏆* \n\nVocê terá que: \n\n${desafio.emoji} ${desafio.explicacao}`;

  // envia a mensagem para o chat
  bot.sendMessage(chatId, mensagem, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});




  const categorias = [
    {
      emoji: '🎬',
      descricao: 'Ação',
      sobre: 'Filmes de ação geralmente envolvem cenas de luta, perseguições e tiroteios. São conhecidos por terem muita adrenalina e emoção.',
    },
    {
      emoji: '🎭',
      descricao: 'Drama',
      sobre: 'Filmes de drama são conhecidos por envolverem conflitos emocionais e problemas pessoais dos personagens. Podem ser baseados em histórias verdadeiras ou fictícias.',
    },
    {
      emoji: '🤖',
      descricao: 'Ficção Científica',
      sobre: 'Filmes de ficção científica apresentam conceitos e ideias futuristas, científicas ou tecnológicas. Podem envolver viagens no tempo, realidades alternativas e alienígenas.',
    },
    {
      emoji: '👻',
      descricao: 'Terror',
      sobre: 'Filmes de terror são conhecidos por assustar e causar medo no público. Podem envolver fantasmas, monstros e serial killers.',
    },
    {
      emoji: '🤠',
      descricao: 'Western',
      sobre: 'Filmes de western se passam no Velho Oeste americano e envolvem tiroteios, duelos e cavalgadas. São conhecidos por seus personagens emblemáticos, como xerifes, cowboys e foras-da-lei.',
    },
    {
      emoji: '🎥',
      descricao: 'Documentário',
      sobre: 'Filmes documentários apresentam fatos e informações sobre um determinado assunto ou evento. Podem ser sobre a natureza, história ou política, por exemplo.',
    },
    {
      emoji: '🍿',
      descricao: 'Comédia',
      sobre: 'Filmes de comédia são conhecidos por fazerem o público rir. Podem envolver piadas, situações engraçadas e personagens cômicos.',
    },
    {
      emoji: '👊',
      descricao: 'Artes Marciais',
      sobre: 'Filmes de artes marciais apresentam lutas e técnicas de combate de diferentes disciplinas, como karatê, judô e kung fu.',
    },
    {
      emoji: '🧝‍♂️',
      descricao: 'Fantasia',
      sobre: 'Filmes de fantasia envolvem elementos mágicos e sobrenaturais, como dragões, elfos e magia. Podem ser baseados em livros e lendas.',
    },
    {
      emoji: '🌊',
      descricao: 'Aventura',
      sobre: 'Filmes de aventura envolvem jornadas, explorações e descobertas. Podem envolver elementos de ação e ficção científica.',
    },
  ];
  bot.onText(/\/filme/, (msg) => {
    const chatId = msg.chat.id;

  // Escolhe aleatoriamente uma categoria
  const categoria = categorias[Math.floor(Math.random() * categorias.length)];

  const respostaFilme = `*🎬 Sua cateogria filme preferida 🎬* \n\n*Nome:* ${categoria.descricao} ${categoria.emoji} \n\n*Descrição:* ${categoria.sobre}`;

  bot.sendMessage(chatId, respostaFilme, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});




const climas = [
  {
    nome: 'Verão',
    emoji: '☀️',
    caracteristica: 'Dia ensolarado e quente',
  },
  {
    nome: 'Primavera',
    emoji: '🌸',
    caracteristica: 'Clima agradável e florescimento da natureza',
  },
  {
    nome: 'Outono',
    emoji: '🍁',
    caracteristica: 'Folhas secas e clima fresco',
  },
  {
    nome: 'Inverno',
    emoji: '❄️',
    caracteristica: 'Neve e clima frio',
  },
];

bot.onText(/\/clima/, (msg) => {
  const chatId = msg.chat.id;
  const randomIndex = Math.floor(Math.random() * climas.length);
  const clima = climas[randomIndex];
  bot.sendMessage(chatId, `*🌤Seu clima favorito🌤* \n\n*Nome:* ${clima.nome} ${clima.emoji} \n\n*Característica:* ${clima.caracteristica}`, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});




const estilosMusicais = [
  {
    nome: 'Rock',
    emoji: '🎸',
    caracteristica: 'Música com guitarras e bateria',
  },
  {
    nome: 'Pop',
    emoji: '🎤',
    caracteristica: 'Música popular e comercial',
  },
  {
    nome: 'Hip Hop',
    emoji: '🎧',
    caracteristica: 'Ritmo com batidas de rap e vocais',
  },
  {
    nome: 'Eletrônica',
    emoji: '🎧',
    caracteristica: 'Música eletrônica com batidas e sintetizadores',
  },
];

bot.onText(/\/musica/, (msg) => {
  const chatId = msg.chat.id;
  const randomIndex = Math.floor(Math.random() * estilosMusicais.length);
  const estilo = estilosMusicais[randomIndex];
  bot.sendMessage(chatId, `*🎼Seu estilo musical🎼* \n\n*Nome:* ${estilo.nome} ${estilo.emoji}  \n\n*Característica:* ${estilo.caracteristica}`, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});





const origens = [
  {
    nome: 'Pernambucano',
    emoji: '🦈',
  },
  {
    nome: 'Cearense',
    emoji: '🏖️',
  },
  {
    nome: 'Paraibano',
    emoji: '🦐',
  },
  {
    nome: 'Potiguar',
    emoji: '🍍',
  },
  {
    nome: 'Sul-Mato-Grossense',
    emoji: '🐆',
  },
  {
    nome: 'Brasiliense',
    emoji: '🏛️',
  },
  {
    nome: 'Capixaba',
    emoji: '🌊',
  },
  {
    nome: 'Catarinense',
    emoji: '🏞️',
  },
  {
    nome: 'Fluminense',
    emoji: '🌉',
  },
  {
    nome: 'Goiâno',
    emoji: '🌵',
  },
  {
    nome: 'Maranhense',
    emoji: '🍍',
  },
  {
    nome: 'Mato-Grossense',
    emoji: '🐃',
  },
  {
    nome: 'Paraense',
    emoji: '🦜',
  },
  {
    nome: 'Piauiense',
    emoji: '🌵',
  },
  {
    nome: 'Rio-Grandense',
    emoji: '🐎',
  },
  {
    nome: 'Rondoniense',
    emoji: '🐆',
  },
  {
    nome: 'Roraimense',
    emoji: '🦜',
  },
  {
    nome: 'Sergipano',
    emoji: '🌊',
  },
  {
    nome: 'Tocantinense',
    emoji: '🌵',
  },
  {
    nome: 'Acreano',
    emoji: '🐒',
  },
  {
    nome: 'Alagoano',
    emoji: '🌴',
  },
  {
    nome: 'Amapaense',
    emoji: '🦜',
  },
  {
    nome: 'Paranaibano',
    emoji: '🌲',
  },
  {
    nome: 'Paulistano',
    emoji: '🌆',
  },
];

bot.onText(/\/origem/, (msg) => {
  const chatId = msg.chat.id;
  const randomIndex = Math.floor(Math.random() * origens.length);
  const origem = origens[randomIndex];
  bot.sendMessage(chatId, `Sua origem é: *${origem.nome} ${origem.emoji}*`, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown' });
});


bot.onText(/\/jogo/, (msg) => {
  const chatId = msg.chat.id;

  // gera um número aleatório entre 0 e 5
  const randomIndex = Math.floor(Math.random() * 6);

  switch (randomIndex) {
    case 0:
      bot.sendDice(chatId, { emoji: '🎲', animation_duration: 5, reply_to_message_id: msg.message_id });
      break;
    case 1:
      bot.sendDice(chatId, { emoji: '🎯', animation_duration: 5, reply_to_message_id: msg.message_id });
      break;
    case 2:
      bot.sendDice(chatId, { emoji: '🎳', animation_duration: 5, reply_to_message_id: msg.message_id });
      break;
    case 3:
      bot.sendDice(chatId, { emoji: '⚽️', animation_duration: 5, reply_to_message_id: msg.message_id });
      break;
    case 4:
      bot.sendDice(chatId, { emoji: '🎰', animation_duration: 5, reply_to_message_id: msg.message_id });
      break;
    case 5:
      bot.sendDice(chatId, { emoji: '🏀', animation_duration: 5, reply_to_message_id: msg.message_id });
      break;
  }
});




bot.onText(/\/cor/, (msg) => {
  // Lista de cores preferidas
  const cores = ['🔴 Vermelho', '🟠 Laranja', '🟡 Amarelo', '🟢 Verde', '🔵 Azul', '🟣 Roxo', '🤍 Branco', '🖤 Preto'];

  // Escolhe uma cor aleatória
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

  // Envia a mensagem de resposta com a cor escolhida
  bot.sendMessage(msg.chat.id, `Sua cor preferida é ${corAleatoria}!`, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown'});
});


// Crie o comando /crush que irá enviar a primeira letra aleatória do crush com um emoji
bot.onText(/\/crush/, (msg) => {
  const chatId = msg.chat.id;
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const emojis = ['❤️', '❤️', '💘', '💕', '😍', '😘'];

  // Seleciona uma letra e um emoji aleatório
  const letra = letras.charAt(Math.floor(Math.random() * letras.length));
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Envia a mensagem com a letra e o emoji escolhido
  bot.sendMessage(chatId, `A primeira letra do meu crush é "${letra}" ${emoji}`, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown'});
});


bot.onText(/\/crussh/, (msg) => {
  const chatId = msg.chat.id;
  const letras = 'L';
  const emojis = ['❤️', '❤️', '💘', '💕', '😍', '😘'];

  // Seleciona uma letra e um emoji aleatório
  const letra = letras.charAt(Math.floor(Math.random() * letras.length));
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Envia a mensagem com a letra e o emoji escolhido
  bot.sendMessage(chatId, `A primeira letra do meu crush é "${letra}" ${emoji}`, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown'});
});






bot.onText(/\/help/, (msg) => {
  const commands = [
'/felicidade - medidor de nível de felicidade 🙂\n',
'/raiva - medidor de nível de raiva 🤬\n',
'/estado - adivinha qual estado você mora 🌏\n',
'/stickers - envia uma figurinha\n',
'/presidente - adivinha qual é o seu presidente 🇧🇷\n',
'/sorte - veja sua sorte\n',
'/genero - adivinha qual é o seu gênero ⚧\n',
'/casamento - adivinha a data do seu casamento 👨‍❤️‍👨\n',
'/nascimento - adivinha a data do seu nascimento\n',
'/morte - adivinha a data da sua morte 😵\n',
'/filho - adivinha o nome, gênero e quando você vai ter um filho 👶\n',
'/signo - adivinha seu signo ♈️\n',
'/religiao - adivinha sua religião 🤍\n',
'/ator - adivinha seu ator/atriz preferida 🥰\n',
'/altura - adivinha sua altura 🤏\n',
'/idade - adivinha sua idade 🎯\n',
'/sistema - adivinha seu socioeconômico-políticos 🎫\n',
'/profissao - adivinha sua profissão 💼\n',
'/saudades - escolha de 0 a 100 quanto de saudades você tem 😰\n',
'/ciumes - escolha de 0 a 100 quanto de ciúmes você tem 😠\n',
'/origem - adivinha sua origem 🌱\n',
'/apaixonado - medidor de nível de paixão 😍\n',
'/gado - medidor de nível de gado 🐮\n',
'/tpm - medidor de nível de TPM 😤\n',
'/gostosura - medidor de nível de gostosura 😈\n',
'/chato - medidor de nível de chatice 😒\n',
'/burro - medidor de nível de burrice 🥴\n',
'/treteiro - medidor de nível de tretas 🤬\n',
'/sexo - medidor de nível de potencial sexual 🔞\n',
'/fake - descobre se você é fake 🛃\n',
'/serbanido - descobre se você vai ser banido 🚷\n',
'/seradm - descobre se você pode ser adm 👮‍♀️\n',
'/filme - adivinha a categoria de filme preferido 🎬\n',
'/clima - adivinha seu clima preferido 🌪\n',
'/numerodasorte - gera seu número da sorte 🎰\n',
'/desafio - propõe um desafio para você 🏆\n',
'/musica - adivinha seu estilo musical preferido 🎼\n',
'/jogo - envia um game aleatório 🎮\n',
'/cor - adivinha sua cor preferida🔴\n',
'/crush - adivinha a primeira letra do seu crush🥰\n',
'/time - adivinha seu time do coração😂\n',
'/fruta - adivinha sua fruta preferida🍎\n',
'/curiosidade - envia aleatoriamente curiosidade sobre o mundo👀\n',
'/sigma - mede seu nível sigma🗿🍷'
  ];

  const helpMessage = 'Lista de Comandos: \n\n' + commands.join('\n');

  bot.sendMessage(msg.chat.id, helpMessage);
});






// Dados do time
const times = [
  {
    nome: 'Flamengo',
    imagemUrl: 'https://freevectorlogo.net/wp-content/uploads/2012/11/clube-de-regatas-do-flamengo-logo-vector-400x400.png',
    estadio: 'Maracanã',
    anoCriacao: '1895',
    mascote: 'Urubu',
    curiosidade: 'O Flamengo é o clube de futebol mais popular do Brasil, com a maior torcida do país.',
    brasileiroes: 8
  },
  {
    nome: 'Corinthians',
    imagemUrl: 'https://knoow.net/wp-content/uploads/2016/11/Logo-Corinthians.png',
    estadio: 'Neo Química Arena',
    anoCriacao: '1910',
    mascote: 'Mosqueteiro',
    curiosidade: 'O Corinthians é o clube de futebol com a maior torcida do estado de São Paulo.',
    brasileiroes: 7
  },
  {
    nome: 'São Paulo',
    imagemUrl: 'https://pbs.twimg.com/profile_images/1426319619200110596/m6gH60GL_400x400.jpg',
    estadio: 'Morumbi',
    anoCriacao: '1930',
    mascote: 'São Paulo Man',
    curiosidade: 'O São Paulo é o clube de futebol brasileiro com mais títulos internacionais, com 12 conquistas.',
    brasileiroes: 6
  },
  {
    nome: 'Palmeiras',
    imagemUrl: 'https://pbs.twimg.com/profile_images/1611063929916035095/se9po_Sh_400x400.jpg',
    estadio: 'Allianz Parque',
    anoCriacao: '1914',
    mascote: 'Periquito',
    curiosidade: 'O Palmeiras é o clube de futebol brasileiro com mais títulos nacionais, com 14 conquistas.',
    brasileiroes: 11
  },
  {
    nome: 'Santos',
    imagemUrl: 'https://pbs.twimg.com/profile_images/1615807063950598144/tSi5F77L_400x400.jpg',
    estadio: 'Vila Belmiro',
    anoCriacao: '1912',
    mascote: 'Baleia',
    curiosidade: 'O Santos é o clube de futebol brasileiro com mais títulos da Copa Libertadores da América, com 3 conquistas.',
    brasileiroes: 8
  },
  {
    nome: 'Internacional',
    imagemUrl: 'https://pbs.twimg.com/profile_images/1609276600582799362/iEniyUQp_400x400.png',
    estadio: 'Beira-Rio',
    anoCriacao: '1909',
    mascote: 'Sací',
    curiosidade: 'O Internacional é o clube de futebol brasileiro com mais títulos internacionais no século XX, com 7 conquistas.',
    brasileiroes: 3
    },
    {
    nome: 'Grêmio',
    imagemUrl: 'https://pbs.twimg.com/profile_images/1587444689568993280/jqTDMBmJ_400x400.jpg',
    estadio: 'Arena do Grêmio',
    anoCriacao: '1903',
    mascote: 'Mosqueteiro',
    curiosidade: 'O Grêmio é o clube de futebol brasileiro com mais títulos da Copa do Brasil, com 6 conquistas.',
    brasileiroes: 2
    },
    {
    nome: 'Atlético-MG',
    imagemUrl: 'https://pbs.twimg.com/profile_images/1467629667268112390/Ge6CuQfD_400x400.jpg',
    estadio: 'Mineirão',
    anoCriacao: '1908',
    mascote: 'Galo',
    curiosidade: 'O Atlético-MG é o clube de futebol brasileiro com mais títulos da Copa Conmebol, com 2 conquistas.',
    brasileiroes: 2
    },
    {
      nome: 'Cruzeiro',
      imagemUrl: 'https://pbs.twimg.com/media/ENQk13uW4AAU4nK?format=jpg&name=small',
      estadio: 'Mineirão',
      anoCriacao: '1921',
      mascote: 'Raposa',
      curiosidade: 'O Cruzeiro é o clube de futebol brasileiro com mais títulos da Copa do Brasil, ao lado do Grêmio, com 6 conquistas.',
      brasileiroes: 4
      },
      {
        nome: 'Fluminense',
        imagemUrl: 'https://pbs.twimg.com/profile_images/1609912077786746885/2F0rzkrh_400x400.jpg',
        estadio: 'Maracanã',
        anoCriacao: '1902',
        mascote: 'Guerreiro',
        curiosidade: 'O Fluminense é o clube de futebol brasileiro que mais conquistou o Campeonato Carioca, com 31 títulos.',
        brasileiroes: 4
        },
        {
          nome: 'Botafogo',
          imagemUrl: 'https://pbs.twimg.com/profile_images/1617191347852656641/Eb_gIMxP_400x400.jpg',
          estadio: 'Engenhão',
          anoCriacao: '1904',
          mascote: 'Alvinegro',
          curiosidade: 'O Botafogo é o clube de futebol brasileiro que mais vezes foi vice-campeão do Campeonato Brasileiro, com 5 vice-campeonatos.',
          brasileiroes: 2
          },
          {
            nome: 'Vasco',
            imagemUrl: 'https://pbs.twimg.com/profile_images/1620489733687083010/PRxiI2Jk_400x400.jpg',
            estadio: 'São Januário',
            anoCriacao: '1898',
            mascote: 'Gigante',
            curiosidade: 'O Vasco é o clube de futebol brasileiro que mais vezes foi campeão da Copa do Brasil, com 4 conquistas.',
            brasileiroes: 4
            },
            {
              nome: 'Ceará',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1587278883732217857/lro974U6_400x400.jpg',
              estadio: 'Arena Castelão',
              anoCriacao: '1914',
              mascote: 'Vozão',
              curiosidade: 'O apelido "Vozão" surgiu em 1969, quando o Ceará disputou a Taça Brasil e foi elogiado pela voz forte de sua torcida.',
              brasileiroes: 0 
            },
            {
              nome: 'Chapecoense',
              imagemUrl: 'https://pbs.twimg.com/profile_images/934097344655773696/3K95PVdH_400x400.jpg',
              estadio: 'Arena Condá',
              anoCriacao: '1973',
              mascote: 'Índio Condá',
              curiosidade: 'A Chapecoense é o único clube de Santa Catarina a conquistar um título internacional, a Copa Sul-Americana de 2016.',
              brasileiroes: 0
            },
            {
              nome: 'Coritiba',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1610677205981437953/L-ak1cT2_400x400.jpg',
              estadio: 'Couto Pereira',
              anoCriacao: '1909',
              mascote: 'Vovô Coxa',
              curiosidade: 'O Coritiba foi o primeiro time brasileiro a realizar uma excursão ao exterior, em 1928, jogando na Europa.',
              brasileiroes: 1
            },
            {
              nome: 'CSA',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1613677488726589442/de0A7nA__400x400.jpg',
              estadio: '',
              anoCriacao: '',
              mascote: '',
              curiosidade: '',
              brasileiroes: 0 
            },
            {
              nome: 'Atlético-PR',
              imagemUrl: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/03/atletico-pr-300x300.jpg',
              estadio: 'Arena da Baixada',
              anoCriacao: '1924',
              mascote: 'Furacão',
              curiosidade: 'Foi o primeiro clube do sul do país a conquistar um título internacional, a Sul-Americana de 2018.',
              brasileiroes: 1
            },
            {
              nome: 'Bahia',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1611322042212651010/ZtlPQ8BG_400x400.jpg',
              estadio: 'Arena Fonte Nova',
              anoCriacao: '1931',
              mascote: 'Super-homem',
              curiosidade: 'Foi o primeiro clube do Norte-Nordeste a conquistar um título internacional, a Copa do Nordeste de 2002.',
              brasileiroes: 2 
            },
            {
              nome: 'Goiás ',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1611755823687950336/sgvpPTvR_400x400.jpg',
              estadio: 'Serra Dourada',
              anoCriacao: '1943',
              mascote: 'Verdão',
              curiosidade: 'É o único clube goiano a ter participado da Copa Libertadores da América e a ter chegado a uma final de Copa Sul-Americana e de Copa do Brasil. ',
              brasileiroes: 0 
            },
            {
              nome: 'Red Bull Bragantino',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1609503108261978112/cFXWKxiE_400x400.jpg',
              estadio: 'Estádio Nabi Abi Chedid',
              anoCriacao: '1928',
              mascote: 'Touro',
              curiosidade: 'O clube foi fundado como Bragantino, mas em 2019 foi comprado pelo grupo Red Bull e mudou seu nome.',
              brasileiroes: 0 
            },
            {
              nome: 'Fortaleza',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1603764504126492674/iZs-LGQQ_400x400.jpg',
              estadio: 'Arena Castelão',
              anoCriacao: '1918',
              mascote: 'Leão',
              curiosidade: 'O Fortaleza foi o primeiro clube do Nordeste a disputar uma final de Campeonato Brasileiro, em 1960.',
              brasileiroes: 0 
            },
            {
              nome: 'Sport',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1620504487713546318/_iC_8nMh_400x400.jpg',
              estadio: 'Ilha do Retiro',
              anoCriacao: '1905',
              mascote: 'Leão',
              curiosidade: 'O Sport é o único clube do Nordeste a disputar a Libertadores da América.',
              brasileiroes: 1 
            },
            {
              nome: 'Santa Cruz',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1625890990383943682/eKSnyAos_400x400.jpg',
              estadio: 'Arruda',
              anoCriacao: '1914',
              mascote: 'Cobra Coral',
              curiosidade: 'O Santa Cruz é o time pernambucano que mais vezes participou do Campeonato Brasileiro.',
              brasileiroes: 0 
            },
            {
              nome: 'Vila Nova',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1610447696812285955/Nfi4_Az9_400x400.jpg',
              estadio: 'Onésio Brasileiro Alvarenga',
              anoCriacao: '1943',
              mascote: 'Tigrão',
              curiosidade: 'O Vila Nova é o único clube goiano a disputar a Série A do Campeonato Brasileiro.',
              brasileiroes: 0 
            },
            {
              nome: 'Salgueiro',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1131931961/2010_sac_topo2_400x400.jpg',
              estadio: 'Cornélio de Barros',
              anoCriacao: '1999',
              mascote: 'Carcará',
              curiosidade: 'O Salgueiro é o único clube do sertão pernambucano que disputou a Série C do Campeonato Brasileiro.',
              brasileiroes: 0 
            },
            {
              nome: 'Atlético-GO',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1229374310659379200/RpeEwctQ_400x400.jpg',
              estadio: 'Antônio Accioly',
              anoCriacao: '1937',
              mascote: 'Dragão',
              curiosidade: 'O Atlético-GO é o único clube goiano que já participou da Série A do Campeonato Brasileiro.',
              brasileiroes: 0 
            },
            {
              nome: 'Vitória',
              imagemUrl: 'https://pbs.twimg.com/profile_images/1587778873592320000/UABdZsRp_400x400.jpg',
              estadio: 'Manoel Barradas',
              anoCriacao: '1899',
              mascote: 'Leão',
              curiosidade: 'O Vitória é o clube baiano com mais participações na Série A do Campeonato Brasileiro.',
              brasileiroes: 0 
            },
      ];


// Função para gerar emojis de estrelas
function gerarEstrelas(n) {
  let estrelas = '';
  for (let i = 0; i < n; i++) {
    estrelas += '⭐️';
  }
  return estrelas;
}

// Resposta ao comando /time
bot.onText(/\/time/, (msg, match) => {
  // Seleciona um time aleatório
  const time = times[Math.floor(Math.random() * times.length)];
  // Gera emojis de estrelas para o número de brasileirões ganhos
  const estrelas = gerarEstrelas(time.brasileiroes);
  // Formata as informações do time
  const informacoes = `Seu time do coração é o *${time.nome}* ❤️\n\n*Estádio:* ${time.estadio} \n*Ano de criação:* ${time.anoCriacao} \n*Mascote:* ${time.mascote} \n*Curiosidades:* ${time.curiosidade} \n*Brasileirões:* ${estrelas}`;

  // Envia a imagem com as informações do time
  bot.sendPhoto(msg.chat.id, time.imagemUrl, { caption: informacoes, parse_mode: 'Markdown', reply_to_message_id: msg.message_id });
  console.log()
});




const frutas = [
  {
    nome: 'Banana',
    emoji: '🍌',
    beneficios: 'Rica em potássio e vitaminas C e B6. Ajuda na digestão e regula o intestino.',
    maleficios: 'Pode causar alergias em pessoas sensíveis e pode ser prejudicial para quem tem diabetes.',
    local_tipico: 'Originária do sudeste asiático, a banana é cultivada em diversas regiões tropicais do mundo.'
  },
  {
    nome: 'Maçã',
    emoji: '🍎',
    beneficios: 'Rica em fibras, vitaminas C e K. Ajuda a prevenir doenças cardíacas e melhora a digestão.',
    maleficios: 'Pode causar alergias em pessoas sensíveis e pode ser prejudicial para quem tem diabetes.',
    local_tipico: 'A maçã é uma fruta originária do Cáucaso, mas é cultivada em diversas partes do mundo.'
  },
  {
    nome: 'Abacaxi',
    emoji: '🍍',
    beneficios: 'Rico em vitamina C e bromelina, ajuda na digestão e fortalece o sistema imunológico.',
    maleficios: 'Pode causar alergias em pessoas sensíveis e pode ser prejudicial para quem tem problemas gastrointestinais.',
    local_tipico: 'Originário da América do Sul, o abacaxi é cultivado em diversas partes do mundo.'
  },
  {
    nome: 'Laranja',
    emoji: '🍊',
    beneficios: 'Rica em vitamina C e antioxidantes, ajuda a fortalecer o sistema imunológico e reduzir o risco de doenças crônicas.',
    maleficios: 'Pode causar alergias em pessoas sensíveis e o consumo excessivo pode levar a problemas dentários.',
    local_tipico: 'A laranja é uma fruta originária da Ásia, mas é cultivada em diversas partes do mundo.'
  },
  {
    nome: 'Morango',
    emoji: '🍓',
    beneficios: 'Rico em vitamina C e antioxidantes, ajuda a fortalecer o sistema imunológico e reduzir o risco de doenças crônicas.',
    maleficios: 'Pode causar alergias em pessoas sensíveis e o consumo excessivo pode levar a problemas digestivos.',
    local_tipico: 'O morango é uma fruta originária da Europa, mas é cultivado em diversas partes do mundo.'
  },
  {
    nome: 'Manga',
    emoji: '🥭',
    beneficios: 'Rica em vitamina A e antioxidantes, ajuda a manter a saúde dos olhos e da pele.',
    maleficios: 'Pode causar alergias em pessoas sensíveis e o consumo excessivo pode levar a problemas digestivos.',
    local_tipico: 'A manga é uma fruta originária da Ásia, mas é cultivada em diversas partes do mundo.'
  },
  {
    nome: 'Kiwi',
    emoji: '🥝',
    beneficios: 'Rico em vitamina C e fibras, ajuda a melhorar a digestão e a fortalecer o sistema imunológico.',
    maleficios: 'Pode causar alergias em pessoas sensíveis e o consumo excessivo pode levar a problemas digestivos.',
    local_tipico: 'O kiwi é uma fruta originária da China, mas é cultivado em diversas partes do mundo.'
  }
];




bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  if (msg.text.toLowerCase() === '/fruta') {
    const fruta = frutas[Math.floor(Math.random() * frutas.length)];
    const mensagem = `Sua fruta preferida é *${fruta.nome}* ${fruta.emoji}\n\n*Benefícios:* ${fruta.beneficios}\n*Malefícios:* ${fruta.maleficios}\n*Local típico:* ${fruta.local_tipico}`;
    
    bot.sendMessage(chatId, mensagem, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown'});
  }
});







// comando /sigma
bot.onText(/\/sigma/, (msg) => {
  // gera um nível SIGMA aleatório entre 0 e 100%
  const nivelSigma = Math.floor(Math.random() * 101);
  
  // cria um gráfico de barra vertical com base no nível SIGMA
  let graficoSigma = '';
  for (let i = 0; i < 10; i++) {
    if (i < nivelSigma / 10) {
      graficoSigma += '⬛'; // bloco preenchido
    } else {
      graficoSigma += '⬜'; // bloco vazio
    }
  }

  // seleciona uma frase aleatória com base no nível SIGMA
  let fraseSigma;
  if (nivelSigma < 10) {
    fraseSigma = 'Você está no fundo do poço...';
  } else if (nivelSigma < 20) {
    fraseSigma = 'Não desanime, você ainda pode melhorar!';
  } else if (nivelSigma < 30) {
    fraseSigma = 'Ainda tem muito a melhorar, mas já é um começo!';
  } else if (nivelSigma < 40) {
    fraseSigma = 'Está progredindo bem, continue assim!';
  } else if (nivelSigma < 50) {
    fraseSigma = 'Meio termo, não está mal!';
  } else if (nivelSigma < 60) {
    fraseSigma = 'Acima da média, bom trabalho!';
  } else if (nivelSigma < 70) {
    fraseSigma = 'Está fazendo um ótimo trabalho, parabéns!';
  } else if (nivelSigma < 80) {
    fraseSigma = 'Excelente trabalho, continue assim!';
  } else if (nivelSigma < 90) {
    fraseSigma = 'Quase lá, falta pouco para a perfeição!';
  } else {
    fraseSigma = 'Nível máximo, você é incrível!';
  }

  // seleciona um GIF aleatório para enviar com base no nível SIGMA
  let gifSigma;
  if (nivelSigma < 30) {
    gifSigma = 'https://media.tenor.com/Wg9fW_XEft0AAAAC/pout-christian-bale.gif';
  } else if (nivelSigma < 20) {
    gifSigma = 'https://media.tenor.com/Xa3KRCTJUuUAAAAd/homelander-theboysfinale.gif';
  } else if (nivelSigma < 50) {
    gifSigma = 'https://media.tenor.com/lPcexeCDyZ8AAAAd/gentleman-giga-chad.gif';
  } else if (nivelSigma < 60) {
    gifSigma = 'https://media.tenor.com/1WyZr_xNiVwAAAAC/sigma-sigma-male.gif';
  } else if (nivelSigma < 70) {
    gifSigma = 'https://media.tenor.com/V69OjtC-eFAAAAAd/sigma-male-sigma-from-ohio.gif';
  } else if (nivelSigma < 90) {
    gifSigma = 'https://media.tenor.com/Rv4pV5ppmVsAAAAC/homelander-laser-eyes.gif';
  } else {
    gifSigma = 'https://media.tenor.com/QNpimm5BA-QAAAAd/good-day-smile.gif';
  }



// envia a resposta para o usuário
bot.sendAnimation(msg.chat.id, gifSigma, {
  caption: `*SIGMA* 🍷🗿 \n\nSeu nível SIGMA é ${nivelSigma}% \n\n${fraseSigma}\n\n${graficoSigma} ${nivelSigma}%`,
  parse_mode: 'Markdown',
  reply_to_message_id: msg.message_id // adiciona o ID da mensagem original como parâmetro de resposta
  });
  });





// Array com as curiosidades
const curiosidades = [
  'A lua cheia aparece no céu por cerca de 29 dias',
  'Os cavalos não conseguem vomitar',
  'O primeiro computador foi inventado na década de 1940',
  'O som se propaga mais rápido na água do que no ar',
  'A maior montanha-russa do mundo tem mais de 140 metros de altura',
  'O olho humano é capaz de distinguir mais de 10 milhões de cores',
  'A cidade de Veneza, na Itália, é formada por 118 ilhas',
  'A Mona Lisa é o quadro mais famoso do mundo',
  'O coração bate em média 100.000 vezes por dia',
  'O elefante é o maior animal terrestre',
  'Um raio pode chegar a uma temperatura de 30.000 graus Celsius.',
  'A lua é o único satélite natural da Terra.',
  'A água é o único elemento que é encontrado naturalmente na natureza em três estados diferentes: líquido, sólido e gasoso.',
  'O cérebro humano pesa cerca de 1,3 kg.',
  'O nariz humano é capaz de distinguir mais de 1 trilhão de cheiros diferentes.',
  'A cidade mais populosa do mundo é Tóquio, com uma população de mais de 37 milhões de pessoas.',
  'O diamante é a substância mais dura conhecida pelo homem.',
  'O coração humano bate cerca de 100.000 vezes por dia.',
  'A baleia-azul é o maior animal do planeta, podendo chegar a medir mais de 30 metros de comprimento.',
  'O Sol é uma estrela e está localizado a cerca de 149,6 milhões de quilômetros da Terra.',
  'O mel é o único alimento que não estraga.',
  'O olho humano é capaz de distinguir mais de 10 milhões de cores diferentes.',
  'O crocodilo é capaz de sobreviver por mais de um ano sem comer.',
  'O território da Rússia é o maior do mundo, com mais de 17 milhões de quilômetros quadrados.',
  'A barata é capaz de sobreviver por mais de uma semana sem a cabeça.',
  'O pinguim é a única ave que é capaz de nadar, mas não voar.',
  'O canguru é capaz de pular até 3 vezes a sua própria altura.',
  'O Planeta Terra tem cerca de 4,5 bilhões de anos.',
  'O peixe-palhaço é capaz de mudar de sexo ao longo da vida, podendo nascer macho e depois se tornar fêmea.',
  'O Google é o site mais visitado do mundo.',
  'A banana é a fruta mais consumida no mundo.',
  'O recorde mundial de velocidade em terra é de 1.609 km/h, alcançado pelo carro Bloodhound SSC.',
  'O corvo é um dos poucos animais que é capaz de fabricar e utilizar ferramentas.',
  'A Gran Pirâmide de Gizé, no Egito, é a única das Sete Maravilhas do Mundo Antigo que ainda existe.',
  'Aves têm um órgão chamado pipoqueira que as ajuda a digerir alimentos duros como sementes.',
  'Os buracos negros são regiões do espaço onde a gravidade é tão forte que nem a luz consegue escapar.',
  'O tatu-bola é capaz de se enrolar completamente em uma bola para se proteger dos predadores.',
  'O Google foi criado em 1996 como um projeto de pesquisa de doutorado na Universidade de Stanford.',
  'A cidade de Istambul, na Turquia, é a única cidade que está situada em dois continentes: Europa e Ásia.',
  'O elefante é o único animal que é capaz de se reconhecer em um espelho.',
  'O tigre é o maior felino do mundo.',
  'A velocidade da luz é de aproximadamente 299.792.458 metros por segundo.',
  'A Antártida é o continente mais frio do planeta, com temperaturas que podem chegar a -89,2 graus Celsius.',
  'O besouro rinoceronte é capaz de suportar mais de 850 vezes o seu próprio peso.',
  'O maior animal terrestre do planeta é o elefante-africano.',
  'O voo comercial mais longo do mundo é feito entre Singapura e Nova York, com uma duração de mais de 18 horas.',
  'O urso polar é o único urso que é capaz de viver exclusivamente em regiões de gelo.',
  'O Monte Everest é a montanha mais alta do mundo, com uma altitude de 8.848 metros.',
  'O caranguejo-aranha-japonês é o maior artrópode do mundo, podendo medir até 3,8 metros de comprimento.',
  'O planeta Vênus é o mais quente do Sistema Solar, com uma temperatura média de 462 graus Celsius.',
  'O bico do pelicano pode comportar até 13 litros de água.',
  'O deserto do Saara é o maior deserto quente do mundo.',
  'O rinoceronte-branco é o segundo maior animal terrestre do mundo, perdendo apenas para o elefante.',
  'O coração da baleia-azul é tão grande que um ser humano adulto poderia nadar através das suas artérias.',
  'O lobo é o animal selvagem mais amplamente distribuído do mundo.',
  'O quetzal é a ave nacional da Guatemala.',
  'O animal que tem o maior tempo de vida é a tartaruga-gigante-das-galápagos, que pode viver mais de 150 anos.',
  'O hipopótamo é capaz de ficar submerso na água por até 5 minutos.',
  'A Grande Barreira de Corais é o maior sistema de recifes de coral do mundo.',
  'O crocodilo de água salgada é o maior réptil do mundo, podendo chegar a medir mais de 7 metros de comprimento.',
  'O sistema nervoso humano é capaz de transmitir sinais a uma velocidade de até 400 km/h.',
  'O nome completo do personagem Mickey Mouse é Michael Theodore Mouse.',
  'A música é capaz de ativar diversas áreas do cérebro humano.',
  'O Pólo Norte é o ponto mais ao norte da Terra.',
  'O agente secreto mais famoso do mundo é James Bond.',
  'O joelho humano é a articulação mais complexa do corpo humano.',
  'O estudo do comportamento humano é chamado de psicologia.',
  'A girafa é o animal mais alto do mundo, podendo chegar a medir mais de 5 metros de altura.',
  'O orvalho é formado pela condensação do vapor de água que se encontra no ar.',
  'A língua mais falada no mundo é o Mandarim, seguido pelo Espanhol, Inglês, Hindi e Árabe.',
  'As estrelas do mar não têm cérebros, mas têm olhos na ponta de cada braço.',
  'A luz leva aproximadamente 8 minutos para viajar do Sol até a Terra.',
  'O coração humano bate cerca de 100.000 vezes por dia.',
  'O maior mamífero do mundo é a baleia-azul, podendo chegar a medir 30 metros de comprimento.',
  'A cidade mais populosa do mundo é Tóquio, no Japão, com mais de 37 milhões de habitantes.',
  'As bactérias encontradas no intestino humano podem pesar até 2 kg.',
  'O país mais populoso do mundo é a China, com mais de 1,4 bilhões de habitantes.',
  'O relâmpago pode aquecer o ar a uma temperatura cinco vezes mais quente que a superfície do Sol.',
  'A água cobre aproximadamente 71% da superfície da Terra.',
  'O maior vulcão do sistema solar é o Monte Olimpo, em Marte, que tem três vezes a altura do Monte Everest.',
  'Os pandas gigantes são nativos apenas da China.',
  'A Antártida é o lugar mais frio da Terra, com temperaturas que podem chegar a -90°C.',
  'Apenas 5% do oceano já foi explorado pelos seres humanos.',
  'O riso reduz o estresse, fortalece o sistema imunológico e melhora a saúde mental.',
  'A maior ilha do mundo é a Groenlândia, que é cerca de 14 vezes maior que a Inglaterra.',
  'As unhas das mãos crescem mais rapidamente do que as dos pés.',
  'O ponto mais profundo do oceano é a Fossa das Marianas, que tem cerca de 11 km de profundidade.',
  'O deserto do Saara é o maior deserto quente do mundo, cobrindo uma área de 9,2 milhões de km².',
  'A abelha rainha pode viver até 5 anos, enquanto as abelhas operárias vivem apenas algumas semanas.',
  'O cérebro humano tem capacidade para armazenar até 2,5 petabytes de informação.',
  'O rio Amazonas é o rio mais longo do mundo, com cerca de 6.400 km de extensão.',
  'As formigas podem levantar até 50 vezes o seu próprio peso.',
  'O maior animal terrestre é o elefante africano, podendo pesar até 12 toneladas.',
  'O maior desfiladeiro do mundo é o Grand Canyon, nos Estados Unidos, com cerca de 446 km de comprimento.',
  'O sangue humano é composto por cerca de 55% de plasma e 45% de células.',
  'O arco-íris pode ser visto apenas quando o sol está brilhando e chovendo ao mesmo tempo.',
  'Os olhos de um avestruz são maiores do que o seu cérebro.',
  'A velocidade da luz é de cerca de 299.792.',
];

// Função para escolher uma curiosidade aleatória
function escolherCuriosidade() {
  const indice = Math.floor(Math.random() * curiosidades.length);
  return curiosidades[indice];
}

// Comando /curiosidade
bot.onText(/\/curiosidade/, (msg) => {
  const curiosidade = escolherCuriosidade();
  const mensagem = `🔍 *Você sabia?* 🔍\n\n"${curiosidade}"\n\n💡 Você sabia disso, @${msg.from.username}? `;
  bot.sendMessage(msg.chat.id, mensagem, {reply_to_message_id: msg.message_id, parse_mode: 'Markdown'});
});





























function initializeMainModule() {
    return bot;
}

module.exports = initializeMainModule;



