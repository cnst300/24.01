const messages = [
    "Știu că nu se face primăvară cu o floare...",
    "Dar ce zici de 2?",
    "Sau 10? Sunt de ajuns?",
    "Cred că 100 ar trebui să aducă primăvara, tu ce zici?",
    "Hai că să fiu sigur că s-a făcut primăvară, uite 1001 flori! 💐"
];

const flowerCounts = [1, 2, 10, 100, 501]; // 1001 pentru ultima etapă
const backgroundColors = ["#2a2a72", "#ffb347", "#ff69b4", "#ff4081", "#ff1493"];

const messageElement = document.getElementById("message");
const flowerContainer = document.getElementById("flower-container");

function addFlowers(count) {
    for (let i = 0; i < count; i++) {
        const flower = document.createElement("dotlottie-player");
        flower.setAttribute("src", "https://lottie.host/d5efc981-55f3-4aa1-9629-dcd3db5d956c/HhCrWJalEc.lottie");
        flower.setAttribute("background", "transparent");
        flower.setAttribute("speed", "1");
        flower.setAttribute("loop", "");
        flower.setAttribute("autoplay", "");
        flower.style.position = "absolute";
        flower.style.width = "50px";
        flower.style.height = "50px";

        // Poziționare aleatorie pe ecran, fără a ieși din pagină
        const x = Math.random() * (window.innerWidth - 60);
        const y = Math.random() * (window.innerHeight - 60);
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        flowerContainer.appendChild(flower);
    }
}

function showFlowers(index) {
    if (index >= messages.length) return;

    // Schimbă mesajul rapid
    messageElement.textContent = messages[index];

    // Schimbă fundalul rapid
    document.body.style.background = backgroundColors[index];

    // Ștergem florile anterioare
    flowerContainer.innerHTML = "";

    const flowerCount = flowerCounts[index];

    // Adăugăm florile
    addFlowers(flowerCount);

    // Continuăm cu următoarea etapă
    setTimeout(() => showFlowers(index + 1), 3000); // Mărește acest timp pentru o tranziție mai lentă
}

// Începem animația
showFlowers(0);
