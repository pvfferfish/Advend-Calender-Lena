window.onload = () => {
    const today = new Date(); // Aktuelles Datum
    const currentDay = today.getDate(); // Aktueller Tag des Monats
    const currentMonth = today.getMonth() + 1; // Aktueller Monat (JavaScript zählt Monate von 0 bis 11, daher +1)

    // Quizfragen und Antworten
    const quizQuestions = {
        1: { question: "Best Animal", answers: ["Bunnies", "Bunny", "Bnuuy"] },
        2: { question: "Which Animal does the MEOWWWW", answers: ["Katze", "Cat", "MEOW"] },
        3: { question: "Flying Dog that loves Baking", answers: ["Cinnamoroll", "cinnamoroll"] },
        4: { question: "Best Colour", answers: ["green", "pink", "Pink", "Green"] },
        5: { question: "Chocobox real name", answers: ["angelo", "Angelo"] },
        6: { question: "Your favorite food", answers: ["pancakes", "Pancake", "Pancakes", "pancake"] },
        7: { question: "Sweet or Sour?", answers: ["Sweet", "sweet"] },
        8: { question: "Hello....?(is a Cat)", answers: ["Hello Kitty", "Kitty", "kitty", "hello kitty"] },
        9: { question: "Full name of your mom (ohne nachname)", answers: ["Katrin Lisa Lotte", "katrin lisa lotte"] },
        10: { question: "NK Real Name", answers: ["Zuheer", "zuheer", "monkey"] },
        11: { question: "Does your Dad have hair?", answers: ["No", "no", "maybe"] },
        12: { question: "Green Dinosaur from Nintendo", answers: ["Yoshi", "yoshi"] },
        13: { question: "Youtuber who plays scaaaary games", answers: ["Insym", "insym"] },
        14: { question: "One of your hobbies", answers: ["Knitting", "Sleeping", "Dancing", "Drawing"] },
        15: { question: "What do you do all day?", answers: ["sleep", "Sleep"] },
        16: { question: "Would you trip over a pebble?", answers: ["Yes", "yes"] },
        17: { question: "Your Grandpas real name (yes real hust)", answers: ["Pookie", "pookie"] },
        18: { question: "Little Girl with no front teeth that loves you", answers: ["Mia", "mia"] },
        19: { question: "Little turkish boy who likes grabbing your thighs", answers: ["Muaz", "muaz"] },
        20: { question: "Your Favorite Horror game", answers: ["The Coma", "The Coma 2"] },
        21: { question: "What are you addicted with", answers: ["Nikklas", "Shopping", "shopping", "Sleeping", "sleep"] },
        22: { question: "Are you crying hamster?", answers: ["Yes", "yes"] },
        23: { question: "Your Favorite Horror game", answers: ["The Coma", "The Coma 2"] },
        24: { question: "Merry...?", answers: ["Christmas", "CHRISTMAS"] }
    };

    // Türchen-Interaktion
    const doors = document.querySelectorAll('.door');

    doors.forEach(door => {
        const day = door.dataset.day;  // Erhalte den Tag aus dem "data-day"-Attribut

        // Überprüfen, ob die Tür für heute verfügbar ist
        if (day > currentDay || (currentMonth < 12)) {
            // Wenn die Tür noch nicht verfügbar ist (vor dem jeweiligen Tag im Dezember), keine Interaktivität
            door.style.cursor = 'not-allowed'; // Den Cursor auf 'not-allowed' setzen (zeigt an, dass die Tür nicht anklickbar ist)
            door.addEventListener('click', () => {
                alert(`Tür ${day} ist noch nicht verfügbar. Sie öffnet sich am ${day}. Dezember 2024!`);
            });
        } else {
            // Wenn die Tür verfügbar ist, bleibt sie anklickbar
            door.style.cursor = 'pointer'; // Den Cursor auf 'pointer' setzen (zeigt an, dass die Tür anklickbar ist)

            door.addEventListener('click', () => {
                if (!door.classList.contains('open')) {  // Nur öffnen, wenn noch nicht offen
                    const quiz = quizQuestions[day]; // Quizfrage für den aktuellen Tag abrufen
                    const userAnswer = prompt(quiz.question); // Quizfrage stellen

                    // Überprüfen, ob die Antwort richtig ist
                    const correctAnswer = quiz.answers.map(answer => answer.toLowerCase());
                    if (userAnswer && correctAnswer.includes(userAnswer.toLowerCase())) {
                        // Tür öffnen, wenn Antwort korrekt
                        door.classList.add('open');  // Klasse "open" hinzufügen

                        // Neues Bild-Element erstellen und hinzufügen
                        const img = document.createElement('img');
                        img.src = `images/door${day}.jpg`;  // Bildquelle auf das Bild des entsprechenden Tages setzen
                        img.style.position = 'absolute';
                        img.style.top = '0';
                        img.style.left = '0';
                        img.style.width = '100%';
                        img.style.height = '100%';
                        img.style.objectFit = 'cover';
                        img.style.opacity = '0';
                        img.style.transition = 'opacity 0.5s ease'; // Übergang für das Bild
                        door.appendChild(img);
                        setTimeout(() => { img.style.opacity = '1'; }, 10);

                        // Nachricht anzeigen
                        alert(`Tür ${day} geöffnet! Überraschung wartet.`);
                    } else {
                        // Wenn die Antwort falsch ist
                        alert("Falsche Antwort! Versuch es nochmal.");
                    }
                }
            });
        }
    });

    // Schnee-Animation
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 50; // Anzahl der Schneeflocken

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = '❄';

        // Zufällige Position und Animation für Schneeflocken
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}em`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;

        snowContainer.appendChild(snowflake);
    }
};
