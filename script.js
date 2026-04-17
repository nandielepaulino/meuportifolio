// Aqui eu criei uma lista (Array) de objetos para guardar os dados dos meus projetos.
// Cada objeto {} tem informações como título, descrição, imagem e link.
const projetos = [
    {
        titulo: "Projeto 1: Landing Page",
        descricao: "Uma landing page responsiva criada com HTML e CSS para um produto fictício.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+1",
        link: "#"
    },
    {
        titulo: "Projeto 2: To-Do List",
        descricao: "Um aplicativo de lista de tarefas interativo utilizando JavaScript para manipulação do DOM.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+2",
        link: "#"
    },
    {
        titulo: "Projeto 3: Calculadora",
        descricao: "Uma calculadora funcional construída com HTML, CSS e lógica em JavaScript.",
        imagem: "https://via.placeholder.com/400x200?text=Projeto+3",
        link: "#"
    }
];

// Essa função serve para "desenhar" os meus projetos lá na página HTML.
function renderizarProjetos() {
    // Primeiro, eu pego o lugar (container) no HTML onde os projetos devem aparecer.
    const container = document.getElementById('projetos-container');
    
    // Limpo o que tiver lá dentro antes de começar, para não repetir nada se a função for chamada de novo.
    container.innerHTML = '';

    // Uso o forEach para passar por cada projeto da minha lista.
    projetos.forEach(projeto => {
        // Para cada projeto, eu crio um bloco de código HTML usando "Template Literals" (essas crases ``).
        // Assim eu consigo colocar as variáveis dentro do texto usando ${}.
        const cardHTML = `
            <div class="projeto-card">
                <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-img">
                <div class="projeto-info">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.link}" class="projeto-link" target="_blank">Ver Projeto</a>
                </div>
            </div>
        `;
        
        // No final, eu somo esse novo card ao que já existia dentro do container.
        container.innerHTML += cardHTML;
    });
}

// Isso aqui é muito importante! Ele diz para o navegador só rodar a função
// quando toda a estrutura do HTML já estiver carregada.
document.addEventListener('DOMContentLoaded', renderizarProjetos);
