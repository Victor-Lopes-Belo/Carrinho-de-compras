let totalGeral;

function limpar( ) {
    totalGeral = 0;
    document.getElementById('valor-total').innerHTML = '0';
    document.getElementById('lista-produtos').innerHTML = '';
}

limpar( )

function adicionar () {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = quantidade * valorProduto;
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`
  totalGeral = totalGeral + subTotal;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral}`;
  document.getElementById('quantidade').value = '1';
}