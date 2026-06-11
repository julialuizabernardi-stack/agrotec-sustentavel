// 1. Criação Dinâmica de Partículas para o Fundo Animado Colorido
const particlesContainer = document.getElementById('particles-container');

function criarParticula() {
    const particula = document.createElement('div');
    particula.classList.add('particle');
    
    // Tamanho aleatório entre 10px e 35px
    const tamanho = Math.random() * 25 + 10;
    particula.style.width = `${tamanho}px`;
    particula.style.height = `${tamanho}px`;
    
    // Posição horizontal aleatória
    particula.style.left = `${Math.random() * 100}vw`;
    
    // Tempo de subida aleatório entre 6s e 12s
    const duracao = Math.random() * 6 + 6;
    particula.style.animationDuration = `${duracao}s`;
    
    // Variação de cores quentes e naturais do Agrinho (Verdes, Amarelos, Laranjas suaves)
    const cores = [
        'rgba(76, 175, 80, 0.25)',   // Verde folha
        'rgba(139, 195, 74, 0.25)',  // Verde limão
        'rgba(255, 235, 59, 0.25)',  // Amarelo Sol
        'rgba(255, 152, 0, 0.15)'    // Laranja suave
    ];
    particula.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    
    // Adiciona ao container
    particlesContainer.appendChild(particula);
    
    // Remove a partícula após o fim da animação para economizar memória
    setTimeout(() => {
        particula.remove();
    }, duracao * 1000);
}

// Gera uma nova partícula a cada 400 milissegundos
setInterval(criarParticula, 400);

// 2. Sistema de Modal Interativo para Detalhes dos Pilares
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const informacoes = {
    sustentabilidade: `
        <h2 style="color: #2e7d32; margin-bottom: 15px;"><i class="fa-solid fa-leaf"></i> Sustentabilidade Ampliada</h2>
        <p style="line-height: 1.6; color: #455a64;">A sustentabilidade no agronegócio envolve o plantio direto na palha, preservação de matas ciliares ao redor de rios, o uso racional da água e a rotação de culturas para que a terra nunca perca seus nutrientes fundamentais. Cuidar hoje garante o alimento de amanhã!</p>
    `,
    tecnologia: `
        <h2 style="color: #f57c00; margin-bottom: 15px;"><i class="fa-solid fa-tractor"></i> Tecnologia e Inovação</h2>
        <p style="line-height: 1.6; color: #455a64;">O campo moderno é ultra tecnológico! Produtores usam GPS nos tratores para evitar desperdício de sementes, usam drones para mapear a saúde das plantas e aplicativos de celular que avisam o momento exato de aplicar água ou colher.</p>
    `,
    cidadania: `
        <h2 style="color: #0288d1; margin-bottom: 15px;"><i class="fa-solid fa-users"></i> Cidadania e Comunidade</h2>
        <p style="line-height: 1.6; color: #455a64;">Ser cidadão no campo significa respeitar as leis trabalhistas, apoiar pequenos produtores locais, cooperar com a comunidade escolar e garantir que o conhecimento chegue a todos, conectando o produtor rural ao consumidor urbano com total transparência.</p>
    `
};

function mostrarDetalhes(pilar) {
    modalBody.innerHTML = informacoes[pilar];
    modal.style.display = 'flex';
}

function fecharModal() {
    modal.style.display = 'none';
}

// Fecha o modal caso o usuário clique fora da caixa branca
window.onclick = function(event) {
    if (event.target === modal) {
        fecharModal();
    }
}

// 3. Sistema Prático de Interação do Quiz
function responderQuiz(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    if (isCorrect) {
        feedback.innerText = "🎉 Parabéns! Resposta Correta. O gotejamento evita a evaporação excessiva e economiza muita água!";
        feedback.style.color = "#2e7d32";
    } else {
        feedback.innerText = "❌ Ops! Tente novamente. Regar ao sol forte faz a água evaporar muito rápido, gerando desperdício.";
        feedback.style.color = "#d32f2f";
    }
}
