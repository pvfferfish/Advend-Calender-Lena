document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDate();  // Holt den heutigen Tag
    const doors = document.querySelectorAll(".door");

    doors.forEach(door => {
        const doorDay = parseInt(door.getAttribute("data-day"));

        // Türchen sperren, wenn das Datum noch nicht erreicht ist
        if (doorDay > today) {
            door.classList.add("locked");
        } else {
            door.addEventListener("click", () => openDoor(door, doorDay));
        }
    });
});

function openDoor(door, day) {
    if (door.classList.contains("locked")) return;

    if (!door.classList.contains("opened")) {
        // Türchen öffnen und eine Überraschung zeigen
        const surprise = getSurpriseForDay(day);
        alert(`Tag ${day}: ${surprise}`);
        door.classList.add("opened");
    }
}

function getSurpriseForDay(day) {
    // Einfache Aufgaben oder Nachrichten für jeden Tag
    const surprises = [
        "Quizfrage: Was ist ihre Lieblingsfarbe?",
        "Nachricht: Ich liebe dich ❤️",
        "Spiel: Zeichne ein Herz auf Papier.",
        "Quiz: Was ist mein Lieblingsfilm?",
        // ... weitere Überraschungen
        "Überraschung für den 24.: Ein besonderes Geschenk wartet auf dich! 🎁"
    ];
    return surprises[day - 1];
}
