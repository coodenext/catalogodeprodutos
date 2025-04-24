const numeroWhatsApp = "5587992437345"; // Coloque seu número com DDD e código do país (ex: 55)

// Adicionar produtos
const produtos = [
  {
    nome: "4 Angels Corretivo Líquido",
    preco: "R$ 15,00",
    imagens: ["imagens/1 (1).jpg", "imagens/1 (1)b.jpeg"],
    quantidade: 7,
    descricao: "O Corretivo Líquido Alta Cobertura Belle cobre imperfeições e olheiras, proporcionando um acabamento natural e duradouro."
  },
  {
    nome: "Base Líquida",
    preco: "R$ 49,90",
    imagens: ["imagens/1 (2).jpg"],
    quantidade: 3,
    descricao: "Base líquida com cobertura média, ideal para o dia a dia."
  },
  {
    nome: "Paleta de Sombras",
    preco: "R$ 59,90",
    imagens: ["imagens/1 (3).jpg", "imagens/1 (3)b.jpg", "imagens/1 (3)c.jpg"],
    quantidade: 7,
    descricao: "Paleta com tons versáteis e pigmentação intensa."
  },
  {
    nome: "Batom Nude",
    preco: "R$ 32,90",
    imagens: ["imagens/1 (4).jpg"],
    quantidade: 2,
    descricao: "Batom nude de longa duração com textura cremosa."
  },
  {
    nome: "Batom Nude",
    preco: "R$ 32,90",
    imagens: ["imagens/1 (4).jpg"],
    quantidade: 2,
    descricao: "Batom nude de longa duração com textura cremosa."
  }
];

function renderizarProdutos(lista) {
  const container = document.getElementById("catalogo");
  container.innerHTML = "";

  lista.forEach((produto, index) => {
    const linkImagem = `${window.location.origin}/${produto.imagens[0]}`;
    const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto *${produto.nome}* que custa ${produto.preco}. Veja a imagem: ${linkImagem}`);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    const card = document.createElement("div");
    card.className = "produto";
    card.innerHTML = `
      <img src="${produto.imagens[0]}" alt="${produto.nome}" onclick="abrirLightbox(${index}, 0)" />
      <div class="produto-info">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
        <p><strong>Disponível:</strong> ${produto.quantidade} unidades</p>
        <a href="${linkWhatsApp}" target="_blank" class="botao-whatsapp">Comprar via WhatsApp</a>
      </div>
    `;
    container.appendChild(card);
  });
}

window.onload = () => renderizarProdutos(produtos);

let imagemAtual = 0;
let produtoAtual = 0;

function abrirLightbox(indexProduto, indexImagem) {
  produtoAtual = indexProduto;
  imagemAtual = indexImagem;
  const img = document.getElementById("lightbox-img");
  const desc = document.getElementById("lightbox-descricao");

  img.src = produtos[produtoAtual].imagens[imagemAtual];
  desc.textContent = produtos[produtoAtual].descricao || "";
  document.getElementById("lightbox").style.display = "flex";
}

function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function mudarImagem(direcao, event) {
  event.stopPropagation();
  const total = produtos[produtoAtual].imagens.length;
  imagemAtual = (imagemAtual + direcao + total) % total;
  document.getElementById("lightbox-img").src = produtos[produtoAtual].imagens[imagemAtual];
}