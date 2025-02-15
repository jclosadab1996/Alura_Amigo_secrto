// Array para almacenar los participantes
let participants = [];

// Elementos del DOM
const participantInput = document.getElementById('participantInput');
const addButton = document.getElementById('addButton');
const participantsList = document.getElementById('participantsList');
const selectWinnerButton = document.getElementById('selectWinner');
const winnerSection = document.getElementById('winnerSection');
const winnerName = document.getElementById('winnerName');

// Función para agregar un participante
function addParticipant() {
  const name = participantInput.value.trim();
  
  // Validación del nombre
  if (name === '') {
    alert('Por favor, ingresa un nombre');
    return;
  }
  
  if (participants.includes(name)) {
    alert('Este participante ya está en la lista');
    return;
  }
  
  // Agregar el nombre al array y actualizar la lista
  participants.push(name);
  updateParticipantsList();
  
  // Limpiar el input
  participantInput.value = '';
}

// Función para actualizar la lista visual de participantes
function updateParticipantsList() {
  participantsList.innerHTML = '';
  participants.forEach(participant => {
    const li = document.createElement('li');
    li.textContent = participant;
    participantsList.appendChild(li);
  });
  
  // Mostrar/ocultar el botón de seleccionar ganador
  selectWinnerButton.style.display = participants.length > 1 ? 'block' : 'none';
}

// Función para seleccionar un ganador aleatorio
function selectWinner() {
  if (participants.length < 2) {
    alert('Se necesitan al menos 2 participantes');
    return;
  }
  
  // Seleccionar ganador aleatorio
  const randomIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[randomIndex];
  
  // Mostrar el ganador con animación
  winnerSection.classList.remove('hidden');
  setTimeout(() => {
    winnerSection.classList.add('show');
    winnerName.textContent = winner;
  }, 100);
}

// Event Listeners
addButton.addEventListener('click', addParticipant);

participantInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addParticipant();
  }
});

selectWinnerButton.addEventListener('click', selectWinner);

// Inicialización
selectWinnerButton.style.display = 'none';