const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timerInterval;
let timeLeft = 30; // Temporizador inicial de 30 segundos

// Función para actualizar el temporizador
function updateTimer() {
    timerDisplay.textContent = `${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`;
}

// Función para iniciar el temporizador
startBtn.addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("¡El tiempo se ha agotado!");
        }
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
});

// Función para detener el temporizador
stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

// Función para reiniciar el temporizador
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timeLeft = 30; // Reiniciar a 30 segundos
    updateTimer();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});

// Inicializar el temporizador al cargar la página
updateTimer();