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
    nome: "4 Angels PÓ COMPACTO",
    preco: "R$ 15,00",
    imagens: ["imagens/1 (2).jpg", "imagens/1 (2).jpeg"],
    quantidade: 4,
    descricao: "Acabamento aveludado, cobertura leve a média e controle da oleosidade. Ideal para selar a make e deixar a pele impecável o dia todo!"
  },
  {
    nome: "Pó Banana / Bem Me Quero",
    preco: "R$ 11,00",
    imagens: ["imagens/1 (3).jpg", "imagens/1-_3_b.jpg", "imagens/1 (3)c.jpg"],
    quantidade: 4,
    descricao: "Toque suave, efeito matte e acabamento invisível. Ideal para selar a maquiagem, controlar a oleosidade e suavizar imperfeições. Pele sequinha e radiante o dia todo!"
  },
  {
    nome: "Blindagem Febella",
    preco: "R$ 20,00",
    imagens: ["imagens/1 (4).jpg", "imagens/1 (4).jpeg"],
    quantidade: 3,
    descricao: "Proteção intensa, brilho radiante e fios disciplinados! A blindagem Febella sela os cabelos, reduz o frizz e prolonga o efeito da escova ou chapinha. Resultado de salão sem sair de casa!"
  },
  {
    nome: "On The Glow Blush – Fabella",
    preco: "R$ 24,00",
    imagens: ["imagens/1 (5).jpg", "imagens/1 (26).jpg"],
    quantidade: 4,
    descricao: "Blush cremoso com efeito natural e luminoso. Textura leve, fácil de espalhar, ideal para dar aquele ar de saúde e glow instantâneo à pele!"
  },
  {
    nome: "Iluminador Líquido - Febella",
    preco: "R$ 23,00",
    imagens: ["imagens/1 (6).jpg", "imagens/1 (27).jpg"],
    quantidade: 2,
    descricao: "Textura leve, brilho sofisticado e fácil de aplicar! Realça os pontos certos do rosto com um glow radiante e natural que dura o dia inteiro."
  },
  {
    nome: "Paleta de Sombras Glam 12 S / Vivai",
    preco: "R$ 18,00",
    imagens: ["imagens/1 (25).jpg", "imagens/1 (29).jpg"],
    quantidade: 2,
    descricao: "12 cores incríveis com alta pigmentação e fácil esfumado. Acabamentos matte e cintilante para criar desde looks discretos até super glamourosos!"
  },
  {
    nome: "Máscara para Cílios Black ALL Day / Vivai",
    preco: "R$ 14,00",
    imagens: ["imagens/1 (24).jpg"],
    quantidade: 3,
    descricao: "Volume, definição e alongamento em uma única aplicação! Fixa o dia todo sem borrar, realçando o olhar com intensidade e durabilidade."
  },
  {
    nome: "Lápis Marrom com Apontador – VIVAI",
    preco: "R$ 3,00",
    imagens: ["imagens/1 (23).jpg"],
    quantidade: 2,
    descricao: "Textura macia, traço preciso e longa duração. Ideal para olhos e sobrancelhas, acompanha apontador para praticidade no dia a dia!"
  },
  {
    nome: "Sabonete Líquido Moranguinho",
    preco: "R$ 8,00",
    imagens: ["imagens/1 (22).jpg"],
    quantidade: 3,
    descricao: "Limpeza suave com cheirinho doce e envolvente de morango. Espuma cremosa que hidrata e perfuma a pele, deixando-a macia e fresquinha o dia todo!"
  },
  {
    nome: "Kit 13 Pincéis Profissionai",
    preco: "R$ 22,00",
    imagens: ["imagens/1 (20).jpg",],
    quantidade: 2,
    descricao: "Completo para olhos, rosto e acabamento! Cerdas macias, design ergonômico e resultado impecável em cada aplicação. Essencial para sua make do dia a dia ou profissional!"
  },
  {
    nome: "Esponja Chanfrada",
    preco: "R$ 5,00",
    imagens: ["imagens/1 (19).jpg"],
    quantidade:4,
    descricao: "Perfeita para aplicar base, corretivo e pó com precisão! O corte chanfrado alcança todos os cantinhos do rosto, garantindo acabamento uniforme e sem marcas."
  },
  {
    nome: "Primer Facial – Phállebeaut",
    preco: "R$ 22,00",
    imagens: ["imagens/1 (18).jpg", "imagens/1 (30).jpeg"],
    quantidade: 4,
    descricao: "Disfarça poros, controla a oleosidade e prepara a pele para uma make duradoura e uniforme. Textura leve, toque aveludado e efeito soft focus instantâneo!"
  },
  {
    nome: "Bruma Matte – Phállebeaut",
    preco: "R$ 17,00",
    imagens: ["imagens/1 (17).jpg"],
    quantidade: 3,
    descricao: "Finaliza, hidrata e controla a oleosidade com efeito matte. Prolonga a duração da maquiagem e deixa a pele com toque seco e sensação refrescante!"
  },
  {
    nome: "Kit Mini Esponjinhas – Powder Puf",
    preco: "R$ 7,00",
    imagens: ["imagens/1 (21).jpg"],
    quantidade: 2,
    descricao: "Macias, práticas e perfeitas para aplicar pó, selar corretivo e retoques. Ideais para áreas pequenas como abaixo dos olhos. Acabamento suave e profissional!"
  },
  {
    nome: "Sérum Vitamina C – Phállebeauty",
    preco: "R$ 14,00",
    imagens: ["imagens/1 (16).jpg", "imagens/1 (31).jpeg"],
    quantidade: 2,
    descricao: "Ilumina, hidrata e uniformiza o tom da pele. Com ação antioxidante, ajuda a prevenir sinais de envelhecimento e deixa a pele com um glow saudável e radiante!"
  },
  {
    nome: "Máscara Facial Gold – Phállebeauty",
    preco: "R$ 17,00",
    imagens: ["imagens/1 (15).jpg"],
    quantidade: 2,
    descricao: "Enriquecida com ouro e ativos nutritivos, essa máscara proporciona hidratação profunda, renovação celular e um brilho radiante. Pele revitalizada e radiante em minutos!"
  },
  {
    nome: "Gel Creme Hidratante Facial – Phállebeauty",
    preco: "R$ 20,00",
    imagens: ["imagens/1 (14).jpg"],
    quantidade: 2,
    descricao: "Hidratação intensa e leveza para a pele. Com textura gel-creme, proporciona toque suave, combate ressecamento e mantém a pele fresca e hidratada o dia todo."
  },
  {
    nome: "Espuma Facial Morango - Nelô",
    preco: "R$ 17,00",
    imagens: ["imagens/1 (13).jpg"],
    quantidade: 2,
    descricao: "Limpeza suave e refrescante com o delicado aroma de morango. Remove impurezas, hidrata e deixa sua pele macia e revitalizada, pronto para o dia!"
  },
  {
    nome: "Gel Incolor Fix & Antifrizz – Mia Make",
    preco: "R$ 15,00",
    imagens: ["imagens/1 (12).jpg"],
    quantidade: 3,
    descricao: "Fixação impecável e controle de frizz sem pesar. Deixa os fios disciplinados, com brilho natural e um toque suave, garantindo cabelos lindos o dia inteiro!"
  },
  {
    nome: "Base Líquida Lua e Neve",
    preco: "R$ 28,00",
    imagens: ["imagens/1 (11).jpg"],
    quantidade: 1,
    descricao: "Cobertura uniforme, textura leve e acabamento natural. Disfarça imperfeições sem pesar, garantindo uma pele radiante e confortável o dia todo!"
  },
  {
    nome: "Paleta de Contorno Febella – 6 Cores",
    preco: "R$ 23,00",
    imagens: ["imagens/1 (32).jpeg", "imagens/1 (33).jpeg"],
    quantidade: 4,
    descricao: "Contorne, ilumine e defina com perfeição! Textura macia, fácil de esfumar e tons ideais para realçar todos os tipos de pele. Resultado profissional em casa!"
  },
  {
    nome: "Paleta de Blush Febella – 3 Tonalidades",
    preco: "R$ 19,00",
    imagens: ["imagens/1 (9).jpg"],
    quantidade: 2,
    descricao: "Três cores versáteis para todos os momentos! Textura aveludada, alta pigmentação e fácil de esfumar. Ideal para criar desde looks leves até marcantes."
  },
  {
    nome: "Gloss Gold Magic – Febella",
    preco: "R$ 13,00",
    imagens: ["imagens/1 (8).jpg"],
    quantidade: 2,
    descricao: "Brilho dourado encantador, textura leve e efeito luminoso. Deixa os lábios radiantes com um toque mágico de glamour e sofisticação!"
  },
  {
    nome: "Gloss - Febella",
    preco: "R$ 19,00",
    imagens: ["imagens/1 (7).jpg", "imagens/1 (1)b.jpeg"],
    quantidade: 5,
    descricao: "Brilho intenso, textura confortável e efeito volumoso. Realce seus lábios com um toque de cor e hidratação na medida certa!"
  },
];

function renderizarProdutos(lista) {
  const container = document.getElementById("catalogo");
  container.innerHTML = "";

  lista.forEach((produto, index) => {
    const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto *${produto.nome}* que custa ${produto.preco}.`);

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