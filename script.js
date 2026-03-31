const desafios = [
    { emoji: "🏠💻", resposta: "home office" },
    { emoji: "🍕🎬", resposta: "noite de filme" },
    { emoji: "🐍💻", resposta: "programação em python" },
    { emoji: "🎓📚", resposta: "estudar" },
    { emoji: "🌍🔥", resposta: "aquecimento global" },
    { emoji: "🚀🌕", resposta: "viagem espacial" },
    { emoji: "🎧🎵", resposta: "ouvir música" },
    { emoji: "📸🌅", resposta: "tirar foto do pôr do sol" },
    { emoji: "💤😴", resposta: "dormir" },
    { emoji: "❤️🐶", resposta: "amor por cachorros" }
];

let pontos = 0;
let rodada = {};

function novaRodada() {
    rodada = desafios[Math.floor(Math.random() * desafios.length)];
    document.getElementById("emoji").textContent = rodada.emoji;
    document.getElementById("resposta").value = "";
    document.getElementById("mensagem").textContent = "";
}

function verificar() {
    const resposta = document.getElementById("resposta").value.toLowerCase().trim();

    if (resposta === rodada.resposta) {
        document.getElementById("mensagem").textContent = "🎉 Acertou!";
        document.getElementById("mensagem").style.color = "green";
        pontos++;
    } else {
        document.getElementById("mensagem").textContent =
            "❌ Quase! A resposta era: " + rodada.resposta;
        document.getElementById("mensagem").style.color = "red";
    }

    document.getElementById("pontos").textContent = "Pontuação: " + pontos + " ⭐";
    novaRodada();
}

function reiniciar() {
    pontos = 0;
    document.getElementById("pontos").textContent = "Pontuação: 0 ⭐";
    novaRodada();
}

novaRodada();