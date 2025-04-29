// === CÓDIGO DO PLAYER ===
document.addEventListener('DOMContentLoaded', function() {
    if (!window.HTMLAudioElement) {
        document.getElementById("status").textContent = "🚫 NO AUDIO";
        return;
    }

    const audio = new Audio();
    audio.src = "https://ice1.somafm.com/defcon-128-mp3";
    audio.preload = "none";
    
    const playBtn = document.getElementById("play-btn");
    const stopBtn = document.getElementById("stop-btn");
    const statusText = document.getElementById("status");

    audio.addEventListener('error', function() {
        statusText.textContent = "🔴 STREAM ERROR";
        statusText.style.color = "#ff0000";
    });

    playBtn.addEventListener("click", function() {
        audio.play().then(function() {
            statusText.textContent = "🎧 DEFCON RADIO";
            statusText.style.color = "#0ff";
        }).catch(function(e) {
            statusText.textContent = "⚠ CLICK AGAIN";
            statusText.style.color = "#ff0";
        });
    });

    stopBtn.addEventListener("click", function() {
        audio.pause();
        statusText.textContent = "⏸ PAUSED";
        statusText.style.color = "#f0f";
    });

    // Configurar o botão CTF
    document.querySelector('.ctf-button').addEventListener('click', function() {
        alert("CTF será lançado em breve! Prepare-se para hackear o sistema!");
    });
});

// Efeito de terminal avançado
const terminalMessages = [
    "> Iniciando sequência de decodificação...",
    "> IDApro inicializando...",
    "> Procurando HexTrooper...",
    "> Buscando conexão com Daemon_zero",
    "> Acessando rede clandestina...",
    "> [WARNING] VYRA detectou atividade suspeita",
    "> Ativando protocolos de segurança...",
    "> Copiando chaves de criptografia...",
    "> Preparando desafios CTF...",
    "> Conectando com Hotmart Troopers...",
    "> Submeta a Flag...",
    "> Sistema estará pronto após a Flag!"
];

const terminal = document.getElementById('terminal-output');
let currentLine = 0;
let currentChar = 0;
let isDeleting = false;

function typeTerminal() {
    const currentMessage = terminalMessages[currentLine];
    
    if (!isDeleting && currentChar <= currentMessage.length) {
        terminal.textContent = currentMessage.substring(0, currentChar);
        currentChar++;
        setTimeout(typeTerminal, Math.random() * 50 + 30);
    } else if (isDeleting && currentChar >= 0) {
        terminal.textContent = currentMessage.substring(0, currentChar);
        currentChar--;
        setTimeout(typeTerminal, 30);
    } else {
        isDeleting = !isDeleting;
        
        if (!isDeleting) {
            currentLine = (currentLine + 1) % terminalMessages.length;
        }
        
        setTimeout(typeTerminal, isDeleting ? 1000 : 500);
    }
}

// Iniciar animação do terminal
setTimeout(typeTerminal, 1000);