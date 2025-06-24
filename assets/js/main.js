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

    document.querySelector('.ctf-button').addEventListener('click', function() {
        const hackerPhrases = [
            "Prepare-se para o hacking!!",
        ];

        const randomIndex = Math.floor(Math.random() * hackerPhrases.length);
        const randomPhrase = hackerPhrases[randomIndex];
        
        const alertBox = document.createElement('div');
        alertBox.style.position = 'fixed';
        alertBox.style.top = '50%';
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translate(-50%, -50%)';
        alertBox.style.backgroundColor = '#0a0a12';
        alertBox.style.color = '#0ff';
        alertBox.style.border = '2px solid #f0f';
        alertBox.style.padding = '20px';
        alertBox.style.borderRadius = '5px';
        alertBox.style.boxShadow = '0 0 20px #0ff';
        alertBox.style.zIndex = '9999';
        alertBox.style.fontFamily = '"Press Start 2P", cursive';
        alertBox.style.fontSize = '0.8rem';
        alertBox.style.textAlign = 'center';
        alertBox.style.maxWidth = '80%';
        
        alertBox.innerHTML = `
            <div style="margin-bottom:15px;">${randomPhrase}</div>
            <button onclick="this.parentElement.remove()" 
                    style="background:#000; color:#f0f; border:1px solid #f0f; 
                        padding:5px 10px; cursor:pointer; font-family:inherit;">
                [FECHAR TERMINAL]
            </button>
        `;
        
        document.body.appendChild(alertBox);
    }); 


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


    setTimeout(typeTerminal, 1000);
});