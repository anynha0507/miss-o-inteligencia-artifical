const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se encontra em uma floresta conhecida por ser conhceido por suas árvores antigas e ruidos que ecoam no interior dela, uma lenda diz que há um tesouro escondido e aguarda corajos para desvendar seus segredos, o sol começa a se por atigindo o céu de laranja e roxo. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Ir para esquerda, pelo caminho mais escuro",
                afirmacao: "Leva a uma clareira úmida com uma árvore grotesca e oca no centro, sob a fraca luz da lua. "
            },
            {
                texto: "Ir para direita, caminho claro e ígreme",
                afirmacao: "Leva a um planalto rochoso com uma torre de pedra desmoronada, com uma entrada escura."
            }
        ]
    },
    {
        enunciado: "O ar da floresta se torna pesado, carregado de um perfume doce e floral, que te atrai para uma fonte borbulhante. A luz do luar ilumina a água, revelando brilhos estranhos. Qual atitude você toma?",
        alternativas: [
            {
                texto: " Beber da água cintilante..",
                afirmacao: "Uma sensação de calor se espalha pelo seu corpo, e você sente seus sentidos se aguçarem, como se pudesse ouvir o sussurro das folhas a quilômetros de distância."
            },
            {
                texto: " Ignorar a fonte e procurar um caminho seco.",
                afirmacao: "Ao se afastar, você encontra uma trilha estreita que leva a uma gruta escondida atrás de uma cachoeira, onde a escuridão parece ainda mais profunda."
            }
        ]
    },
    {
        enunciado: "Você chega a um grande campo aberto, com uma névoa rasteira que obscurece a paisagem. No centro, há uma fogueira apagada, rodeada por troncos de árvores. O único som é o grito distante de uma coruja. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Acender a fogueira com a madeira que você coletou.",
                afirmacao: "Assim que as chamas se acendem, um feixe de luz sobe para o céu, revelando a silhueta de uma antiga constelação que não está em nenhum mapa."
            },
            {
                texto: "Procurar por outros sinais na névoa.",
                afirmacao: "SVocê encontra um totem de madeira esculpido com símbolos estranhos. Ao tocá-lo, a névoa se dissipa instantaneamente, revelando um caminho de pedra em direção ao leste."
            }
        ]
    },
    {
        enunciado: "Enquanto você caminha, a trilha se torna mais estreita e as árvores se fecham sobre sua cabeça. Você ouve o som de um riacho e vê a luz do luar refletindo na água à frente. Há uma ponte de madeira velha e bamba sobre o riacho. E agora?",
        alternativas: [
            {
                texto: "Atravessar a ponte, com cuidado.",
                afirmacao: "A ponte range e balança, mas você consegue atravessar. Do outro lado, você encontra uma trilha que leva a uma gruta escondida atrás de uma cachoeira, onde a escuridão parece ainda mais profunda."
            },
            {
                texto: "Procurar um local para pular sobre as pedras.",
                afirmacao: "A água é mais funda e escorregadia do que parecia. Ao pular, você escorrega e cai, mas consegue se segurar em uma raiz. Você encontra um anel de ouro maciço com uma pedra vermelha cravada em uma fenda da raiz."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
