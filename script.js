// script.js (corrigido com localStorage)
const produtos = [
  {
    id: 1,
    nome: "4 Angels Corretivo Líquido",
    preco: 15.00,
    imagens: ["imagens/1 (1).jpg", "imagens/1 (1)b.jpeg"], // Múltiplas imagens
    descricao: "O Corretivo Líquido Alta Cobertura Belle cobre imperfeições e olheiras, proporcionando um acabamento natural e duradouro.",
    estoque: 5 // Quantidade em estoque
  },
  {
    id: 2,
    nome: "Base Líquida",
    preco: 29.99,
    imagens: ["imagens/1 (2).jpg", "imagens/1 (2).jpeg"],
    descricao: "Acabamento aveludado, cobertura leve a média e controle da oleosidade. Ideal para selar a make e deixar a pele impecável o dia todo!",
    estoque: 3
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  {
    id: 3,
    nome: "Máscara de Cílios",
    preco: 24.99,
    imagens: ["imagens/rimel.jpg"],
    descricao: "Máscara que alonga e dá volume aos cílios.",
    estoque: 0 // Produto fora de estoque
  },
  
];


const catalogo = document.getElementById("catalogo");

function carregarAvaliacoes() {
  return JSON.parse(localStorage.getItem("avaliacoes")) || {};
}

function salvarAvaliacoes(avaliacoes) {
  localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
}

function criarEstrelas(id, notaAtual) {
  const estrelas = document.createElement("div");
  estrelas.className = "estrelas";
  for (let i = 1; i <= 5; i++) {
    const estrela = document.createElement("span");
    estrela.innerHTML = i <= notaAtual ? "★" : "☆";
    estrela.classList.add("estrela");
    estrela.dataset.produtoId = id;
    estrela.dataset.valor = i;
    estrela.style.cursor = "pointer";
    estrela.onclick = avaliarProduto;
    estrelas.appendChild(estrela);
  }
  return estrelas;
}

function avaliarProduto(event) {
  const produtoId = event.target.dataset.produtoId;
  const nota = parseInt(event.target.dataset.valor);
  const avaliacoes = carregarAvaliacoes();
  avaliacoes[produtoId] = nota;
  salvarAvaliacoes(avaliacoes);
  carregarProdutos();
}

function carregarProdutos() {
  catalogo.innerHTML = "";
  const avaliacoes = carregarAvaliacoes();

  produtos.forEach(produto => {
    const div = document.createElement("div");
    div.className = "produto";

    // Carrossel de imagens
    const carousel = document.createElement("div");
    carousel.className = "carousel";

    const imageContainer = document.createElement("div");
    imageContainer.className = "carousel-images";

    // Inicializa o índice da imagem
    let currentIndex = 0;

    // Exibe a primeira imagem
    const img = document.createElement("img");
    img.src = produto.imagens[currentIndex];
    img.alt = produto.nome;
    img.className = "carousel-image";
    img.onclick = () => abrirLightbox(produto);
    imageContainer.appendChild(img);

    const prevBtn = document.createElement("button");
    prevBtn.className = "prev";
    prevBtn.textContent = "‹";
    prevBtn.onclick = () => {
      currentIndex = (currentIndex - 1 + produto.imagens.length) % produto.imagens.length;
      img.src = produto.imagens[currentIndex];
    };

    const nextBtn = document.createElement("button");
    nextBtn.className = "next";
    nextBtn.textContent = "›";
    nextBtn.onclick = () => {
      currentIndex = (currentIndex + 1) % produto.imagens.length;
      img.src = produto.imagens[currentIndex];
    };

    carousel.appendChild(prevBtn);
    carousel.appendChild(imageContainer);
    carousel.appendChild(nextBtn);
    div.appendChild(carousel);

    // Informações do produto
const info = document.createElement("div");
info.className = "produto-info";

const nome = document.createElement("h3");
nome.textContent = produto.nome;

const preco = document.createElement("p");
preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

const estoque = document.createElement("p");
estoque.textContent = `Estoque: ${produto.estoque}`;

const estrelas = criarEstrelas(produto.id, avaliacoes[produto.id] || 0);

    // Botão WhatsApp
    const botao = document.createElement("a");
    botao.className = "button";
    if (produto.estoque <= 0) {
      botao.textContent = "Indisponível";
      botao.classList.add("disabled");
      botao.removeAttribute("href"); // Remove link
      botao.style.pointerEvents = "none"; // Impede clique
      botao.style.opacity = "0.6"; // Visualmente mais claro
    } else {
    
      botao.textContent = "Comprar no WhatsApp";
      const mensagem = `Olá, tenho interesse neste produto!\n\nNome: ${produto.nome}\nValor: R$ ${produto.preco.toFixed(2)}`;
      const link = `https://wa.me/5587992437345?text=${encodeURIComponent(mensagem)}`;
      botao.href = link;
      botao.target = "_blank";
    }

    info.appendChild(nome);
    info.appendChild(preco);
    info.appendChild(estoque); // Adiciona o estoque abaixo do preço
    info.appendChild(estrelas);
    info.appendChild(botao);
    

    div.appendChild(info);
    catalogo.appendChild(div);
  });
}

function abrirLightbox(produto) {
  // Cria a estrutura do lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  
  // Cria a imagem dentro do lightbox
  const lightboxImg = document.createElement('img');
  lightboxImg.src = produto.imagens[currentIndex];
  lightboxImg.alt = produto.nome;

  // Função para fechar o lightbox
  lightbox.onclick = () => {
    lightbox.remove();
  };

  // Adiciona a imagem no lightbox e o lightbox na página
  lightbox.appendChild(lightboxImg);
  document.body.appendChild(lightbox);
}


function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filtrarProdutos() {
  const termo = document.getElementById("buscarProduto").value.toLowerCase();

  // Normalizando o termo de busca (removendo acentos)
  const termoNormalizado = termo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const produtosFiltrados = produtos.filter(produto => {
    // Normalizando o nome do produto (removendo acentos)
    const nomeProdutoNormalizado = produto.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return nomeProdutoNormalizado.includes(termoNormalizado);
  });

  catalogo.innerHTML = "";
  const avaliacoes = carregarAvaliacoes();

  produtosFiltrados.forEach(produto => {
    const div = document.createElement("div");
    div.className = "produto";

    // Carrossel de imagens
    const carousel = document.createElement("div");
    carousel.className = "carousel";
    const imageContainer = document.createElement("div");
    imageContainer.className = "carousel-images";
    
    let currentIndex = 0;
    const img = document.createElement("img");
    img.src = produto.imagens[currentIndex];
    img.alt = produto.nome;
    img.className = "carousel-image";
    img.onclick = () => abrirLightbox(produto);
    imageContainer.appendChild(img);

    const prevBtn = document.createElement("button");
    prevBtn.className = "prev";
    prevBtn.textContent = "‹";
    prevBtn.onclick = () => {
      currentIndex = (currentIndex - 1 + produto.imagens.length) % produto.imagens.length;
      img.src = produto.imagens[currentIndex];
    };

    const nextBtn = document.createElement("button");
    nextBtn.className = "next";
    nextBtn.textContent = "›";
    nextBtn.onclick = () => {
      currentIndex = (currentIndex + 1) % produto.imagens.length;
      img.src = produto.imagens[currentIndex];
    };

    carousel.appendChild(prevBtn);
    carousel.appendChild(imageContainer);
    carousel.appendChild(nextBtn);
    div.appendChild(carousel);

    // Informações do produto
    const info = document.createElement("div");
    info.className = "produto-info";

    const nome = document.createElement("h3");
    nome.textContent = produto.nome;

    const preco = document.createElement("p");
    preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

    const estoque = document.createElement("p");
    estoque.textContent = `Estoque: ${produto.estoque}`;

    const estrelas = criarEstrelas(produto.id, avaliacoes[produto.id] || 0);

    // Botão WhatsApp
    const botao = document.createElement("a");
    botao.className = "button";
    if (produto.estoque <= 0) {
      botao.textContent = "Indisponível";
      botao.classList.add("disabled");
      botao.removeAttribute("href"); // Remove link
      botao.style.pointerEvents = "none"; // Impede clique
      botao.style.opacity = "0.6"; // Visualmente mais claro
    } else {
      botao.textContent = "Comprar no WhatsApp";
      const mensagem = `Olá, tenho interesse neste produto!\n\nNome: ${produto.nome}\nValor: R$ ${produto.preco.toFixed(2)}`;
      const link = `https://wa.me/5587992437345?text=${encodeURIComponent(mensagem)}`;
      botao.href = link;
      botao.target = "_blank";
    }

    info.appendChild(nome);
    info.appendChild(preco);
    info.appendChild(estoque); // Adiciona o estoque abaixo do preço
    info.appendChild(estrelas);
    info.appendChild(botao);

    div.appendChild(info);
    catalogo.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  carregarProdutos();

  // Quando digitar no campo de busca
  document.getElementById("buscarProduto").addEventListener("input", filtrarProdutos);

  // Se tiver um botão de buscar (opcional)
  const botaoBuscar = document.getElementById("btnBuscar");
  if (botaoBuscar) {
    botaoBuscar.addEventListener("click", filtrarProdutos);
  }
});


let slideIndex = 0;
  const slides = document.querySelectorAll(".banner-slide");

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    mostrarSlide(slideIndex);
  }

  // Inicializa o primeiro slide corretamente
  mostrarSlide(slideIndex);

  // Opcional: rotação automática a cada 5 segundos
  setInterval(() => changeSlide(1), 5000);


// Função de navegação manual
function mudarSlide(direcao) {
  currentIndex += direcao;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  atualizarBanner();
}

// Atualiza a posição do banner
function atualizarBanner() {
  const offset = -currentIndex * 100;
  document.querySelector('.banner').style.transform = `translateX(${offset}%)`;
}

// Mostrar o botão ao rolar a página
window.onscroll = function() {
  let botao = document.getElementById("btnTopo");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
};

// Função para rolar até o topo
document.getElementById("btnTopo").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


// Rolar a página para o topo ao clicar no botão
document.getElementById("btnTopo").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function transicaoAutomatica() {
  // Código da transição automática (exemplo)
  console.log("Transição automática acionada");
}
