let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const descricao = document.getElementById("descricao").value;
    const imagem = document.getElementById("imagem").files[0];
  
    if (nome && preco && descricao && imagem) {
      const reader = new FileReader();
  
      reader.onloadend = function () {
        const imagemUrl = reader.result;
  
        const novoProduto = {
          nome,
          preco,
          descricao,
          imagem: imagemUrl,
        };
  
        let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        produtos.push(novoProduto);
        localStorage.setItem("produtos", JSON.stringify(produtos));
  
        // Redirecionar para index.html
        window.location.href = "index.html";
      };
  
      reader.readAsDataURL(imagem);
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("imagem").value = "";
  document.getElementById("imagem-preview").innerHTML = ""; // Limpar a pré-visualização
}

function renderizarProdutos() {
  const produtosAdicionados = document.getElementById("produtos-adicionados");
  produtosAdicionados.innerHTML = "";

  produtos.forEach((produto) => {
    const produtoDiv = document.createElement("div");
    produtoDiv.className = "produto";
    produtoDiv.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" />
      <div class="produto-info">
        <h3>${produto.nome}</h3>
        <p><strong>Preço:</strong> ${produto.preco}</p>
        <p>${produto.descricao}</p>
      </div>
    `;
    produtosAdicionados.appendChild(produtoDiv);
  });
}

function exibirImagem() {
  const imagemInput = document.getElementById("imagem");
  const preview = document.getElementById("imagem-preview");

  const file = imagemInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const imgElement = document.createElement("img");
      imgElement.src = e.target.result;
      preview.innerHTML = "";
      preview.appendChild(imgElement);
    };
    reader.readAsDataURL(file);
  }
}

document.addEventListener("DOMContentLoaded", renderizarProdutos);