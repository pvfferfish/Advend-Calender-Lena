window.onload = () => {
    // Türchen-Interaktion
    const doors = document.querySelectorAll('.door');

    doors.forEach(door => {
        door.addEventListener('click', () => {
            // Beispiel: Tür öffnen und Nachricht anzeigen
            door.style.backgroundColor = "#ff6f61";  // Tür öffnet sich
            alert(`Tür ${door.dataset.day} geöffnet! Überraschung wird bald folgen.`);
        });
    });
};
