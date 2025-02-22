const messages = [
    "Știu că nu se face primăvară cu o floare..😔",
    "Dar ce zici de 2?🤔",
    "Sau 10? Sunt de ajuns?😄",
    "Cred că 100 ar trebui să aducă primăvara, tu ce zici?🥰",
    "Hai ca să fiu sigur că s-a făcut primăvară, uite 1001 flori!🌻💕",
    "Și un sincer iartă-mă! Îmi pare rău că te pun în situații de genul, chiar încerc să las obiceiurile astea proaste. Ultimul lucru pe care îl vreau e să te supăr.. Te iubesc! ❤"
];

const flowerCounts = [1, 2, 10, 100, 1001, 0];
const backgroundColors = ["#2a2a72", "#ffb347", "#ff69b4", "#ff4081", "#ff1493", "red"];

const messageElement = document.getElementById("message");
const flowerContainer = document.getElementById("flower-container");

function addFlowers(count) {
    
    for (let i = 0; i < count; i++) {
        const flower = document.createElement("dotlottie-player");
        flower.setAttribute("src", "https://lottie.host/d47fe17d-6d74-4804-8990-4ad195d4a242/SRnUDoTRCO.json");
        flower.setAttribute("background", "transparent");
        flower.setAttribute("speed", "0.75");
        flower.setAttribute("loop", "");
        flower.setAttribute("autoplay", "");
        flower.style.position = "absolute";
        flower.style.width = "50px";
        flower.style.height = "50px";

        const x = Math.random() * (window.innerWidth - 60);
        const y = Math.random() * (window.innerHeight - 60);
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        flowerContainer.appendChild(flower);
    }
}

function showFlowers(index) {
    if (index >= messages.length) return;

    messageElement.textContent = messages[index];

    document.body.style.background = backgroundColors[index];

    flowerContainer.innerHTML = "";

    const flowerCount = flowerCounts[index];

    let flowersAdded = 0;
    const interval = setInterval(() => {
        addFlowers(1);  // Adaugă câte o floare la fiecare 100ms
        flowersAdded++;

        if (flowersAdded >= flowerCount) {
            clearInterval(interval); // Oprire când ajungem la numărul dorit
        }
    }, 100);

    setTimeout(() => showFlowers(index + 1), index * 1500 + 1500);
}


showFlowers(0);
