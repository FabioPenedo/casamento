presentsJson.map((item) => {
  // Seleciona a div com o id 'area-grid'
  const areaGrid = document.querySelector('#area-grid');
  console.log(areaGrid)
  
  // Cria a estrutura principal da nova div
  const newDiv = document.createElement('div');
  
  // Cria o elemento img
  const img = document.createElement('img');
  img.src = item.image; // Define o caminho da imagem (propriedade `image` do objeto)
  img.alt = item.name; // Define o texto alternativo

  // Cria o elemento span para o nome
  const nameSpan = document.createElement('span');
  nameSpan.textContent = item.name;

  // Cria o elemento span para o preço
  const priceSpan = document.createElement('span');
  priceSpan.textContent = `R$${item.price.toFixed(2)}`; // Formata o preço

  // Adiciona os elementos criados dentro da nova div
  newDiv.appendChild(img);
  newDiv.appendChild(nameSpan);
  newDiv.appendChild(priceSpan);
  
  // Adiciona a nova div ao 'area-grid'
  areaGrid.appendChild(newDiv);
});

