let dzien = 0;
let guzik = document.getElementById('box');
let number = document.getElementById('number');
let message = document.getElementById('message');
let body = document.body;
let audio = document.getElementById('audio');
audio.firstElementChild.src = "rorate.mp3";
audio.load();
audio.pause();
let title = document.getElementById('title');

let flame1 = document.getElementById('flame1');
let flame2 = document.getElementById('flame2');
let flame3 = document.getElementById('flame3');
let flame4 = document.getElementById('flame4');

let zyczenia = ["Nowy, dobry początek - niech także tak szczęśliwa będzie Twoja droga przez cały rok.", 
"Bądź sobą - Taką Bóg Cię stworzył i taką Cię kocha. Miej odwagę, by iść swoją drogą.",
"Pamiętaj, Bóg zawsze czuwa i będzie Cię prowadził. Miej uszy otwarte na Jego głos.",
"Nie daj się rozproszyć codziennym sprawom. Obyś zawsze znajdowała czas na modlitwę i rozmowę z Bogiem.",
"Dąż prosto do celu bez zawahania. Gdybyś nie wiedziała co dalej, On zawsze jest właściwą Drogą.",
"Niech Kościół będzie dla Ciebie domem, w którym zawsze znajdziesz wsparcie i zrozumienie.",
"Łagodność Maryi niech będzie Twoją siłą w trudnych chwilach. Ucz się od Niej pokory i cierpliwości.",
"Świętuj każdy sukces, nawet ten najmniejszy. To one budują Twoją drogę do wielkich rzeczy.",
"Życzę Ci każdego dnia wiary tak mocnej, jak ta, która przenosi góry.",
"Spokoju w rodzinie, polepszenia się relacji, i radości z każdego wspólnie spędzonego czasu.",
"Bezpieczeństwa i łaski od anioła stróża na każdy dzień.",
"Niech modlitwa będzie Twoją siłą i oparciem w każdej sytuacji. Odczuwaj w niej radość i pokój.",
"Przyjaciół którzy będą przy Tobie w każdej sytuacji. Abyś nie czuła się nigdy samotna - bo nie jesteś.",
"Pociechy i radości od Frodusia. Niech Cię wspiera w trudnych chwilach jak tylko potrafi.",
"Dużo uśmiechu na Twojej twarzy i w Twoim sercu. Jest powód do radości każdego dnia - nie skrywaj jej.",
"Rozwijaj swoje pasje i zainteresowania. Niech Cię rozwijają i przynoszą Ci satysfakcję i spełnienie.",
"Nie wstydź się wiary i okazuj ją innym. Niech Twoje świadectwo będzie inspiracją dla wielu osób.",
"Uwierz w Boży plan dla Ciebie, nawet jeśli teraz go nie rozumiesz. On wie, co jest dla Ciebie najlepsze.",
"Staraj się zauważać Boga Żywego w codziennym życiu. On jest obecny w każdej chwili i w każdym miejscu.",
"Czerp radość z uwielbienia Boga. Niech Twoje serce zawsze śpiewa Jemu pieśni wdzięczności.",
"Bóg zstępuje na ziemię, aby być bliżej Ciebie. Wykorzystuj tę bliskość, aby pogłębić swoją relację z Nim.",
"\"Gaudete, gaudete! Christus est natus ex Maria virgine, gaudete!\"" ];

function createSnowflakes(count) {
    const snowflakes = [];

    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('img');
        snowflake.src = 'snowflake.png';
        snowflake.alt = 'Snowflake';
        snowflake.className = 'snowflake';

        snowflake.style.position = 'fixed';
        snowflake.style.top = `-${Math.random() * 1000}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.width = `${Math.random() * 30 + 20}px`;

        document.body.appendChild(snowflake);

        snowflakes.push({
            element: snowflake,
            speed: Math.random() * 2 + 1, 
        });
    }


    function animateSnowflakes() {
        snowflakes.forEach((snowflake) => {
            const currentTop = parseFloat(snowflake.element.style.top);

            snowflake.element.style.top = `${currentTop + snowflake.speed}px`;

            if (currentTop > window.innerHeight) {
                snowflake.element.style.top = '-50px'; 
                snowflake.element.style.left = `${Math.random() * 100}vw`; 
            }
        });

        requestAnimationFrame(animateSnowflakes);
    }

    animateSnowflakes();
}
const santa = document.getElementById('santa');
let santaPosX = 120;
let santaPosY = 110;
function animateSanta() {
    santaPosX -= 0.2;
    santaPosY -= 0.1;
    santa.style.left = `${santaPosX}%`;
    santa.style.top = `${santaPosY}%`;
    if (santaPosX <-30) {santaPosX = 120}
    if (santaPosY <-20) {santaPosY = 110}
    requestAnimationFrame(animateSanta);
}

function handleClick() {
    flame1.style.visibility = "visible";
    if (dzien >= 21) {
        body.style.animation = "backgroundwinter 10s infinite ease-in-out" ;
        santa.style.visibility = "visible";
        if (dzien === 21) {
            dzien ++;
            audio.pause();
            audio.firstElementChild.src = "koleda.m4a";
            audio.load();
            audio.play();
            title.textContent = "Wesołych Świąt!";
        }
    } else if (dzien >= 12 && dzien <= 17) {
        dzien++;
        body.style.animation = "backgroundpink 10s infinite ease-in-out";
    } else {
        dzien++;
        body.style.animation = "backgroundpurple 10s infinite ease-in-out";
    }
    number.textContent = "Zarwane noce: " + dzien;
    message.textContent = zyczenia[dzien - 1] || "Wesołych Świąt!";

    if (dzien === 7) {
        flame2.style.visibility = "visible";
    } else if (dzien === 13) {
        flame3.style.visibility = "visible";
    } else if (dzien === 19) {
        flame4.style.visibility = "visible";
    } else if (dzien === 1) {
        audio.play();
    }

}


animateSanta();
createSnowflakes(50);
