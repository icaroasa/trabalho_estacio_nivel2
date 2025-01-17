let stringJson = '[{"nome": "Arroz de Couve-Flor", "ingredientes": ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"], "preparo": "Deixe a couve-flor picada. Adicione os igredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.","imagem": "11_arroz-de-couve-flor_08a1f6ed41.jpg","alt":"Imagem de um arroz com couve-flor."},{"nome": "Bolo de Café","ingredientes": ["Farinha de Trigo","Açucar","Café Coado","Chocolate em Pó", "Ovos"],"preparo": "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.","imagem": "Bolo-de-cafe-e-chocolate.jpg","alt": "Imagem de um bolo de café com cobertura."},{"nome": "Coxinha de Brigadeiro","ingredientes": ["Leite Condensado","Chocolate em Pó","Manteiga","Morango","Chocolate Granulado"],"preparo": "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.","imagem": "ca2e326d86d10c8be26f9b90d1aaec2d.jpg","alt": "Imagem de uma coxinha de brigadeiro pela metade com um morango dentro."}]';
let receitas = JSON.parse(stringJson)
const elementoParaInserirReceitas = document.getElementById('pnlCatalogo')


function exibirDadosNaTela(){
    elementoParaInserirReceitas.innerHTML = ''
    console.log(receitas[0]);
    receitas.forEach(receita => {
    elementoParaInserirReceitas.innerHTML += `
    <div class="receita card bg-white col-md-3 mb-3">
        <img class="card-img-top" src="${receita.imagem}" alt="${receita.alt}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 5px;">
        <div class="card-body">
            <h1 class="card-title">${receita.nome}</h1>
            <hr>
            <h2 class="card-text">Ingredientes</h2>
            <ul>
            ${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
            </ul>
            <hr>
            <h3 class="card-text">Modo de Preparo</h3>
            <p>${receita.preparo}</p>
        </div>
    </div>
        `
    })
}