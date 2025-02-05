// 30 farklı cevap, her biri için özel metin ve arka plan rengi
const answers = [
  { text: "Evet", bg: "#4CAF50" },
  { text: "Hayır", bg: "#F44336" },
  { text: "Kesinlikle!", bg: "#2196F3" },
  { text: "Belki", bg: "#FFC107" },
  { text: "Şüpheli", bg: "#9C27B0" },
  { text: "Daha sonra sor", bg: "#FF9800" },
  { text: "Emin değilim", bg: "#3F51B5" },
  { text: "Kesinlikle hayır", bg: "#E91E63" },
  { text: "Harika bir fikir!", bg: "#009688" },
  { text: "Olağanüstü", bg: "#00BCD4" },
  { text: "İmkansız", bg: "#673AB7" },
  { text: "Yapabilirsin", bg: "#8BC34A" },
  { text: "Bunu denemelisin", bg: "#CDDC39" },
  { text: "Güven bana", bg: "#FF5722" },
  { text: "Belki de denemelisin", bg: "#795548" },
  { text: "Öyle görünüyor", bg: "#607D8B" },
  { text: "Kesinlikle", bg: "#4CAF50" },
  { text: "Deneyelim", bg: "#F44336" },
  { text: "Asla", bg: "#2196F3" },
  { text: "Zamanla", bg: "#FFC107" },
  { text: "Yakın zamanda", bg: "#9C27B0" },
  { text: "Kesin değil", bg: "#FF9800" },
  { text: "Düşünmelisin", bg: "#3F51B5" },
  { text: "Mümkün", bg: "#E91E63" },
  { text: "Olağanüstü olacak", bg: "#009688" },
  { text: "Başarılı olacaksın", bg: "#00BCD4" },
  { text: "İnan bana", bg: "#673AB7" },
  { text: "Söylemesem yarar", bg: "#8BC34A" },
  { text: "Kendin dene", bg: "#CDDC39" },
  { text: "Şansın yaver gidecek", bg: "#FF5722" }
];

function shakeBall() {
  const questionInput = document.getElementById("question");
  const responseText = document.getElementById("response-text");
  const answerDiv = document.getElementById("answer");

  // Eğer soru girilmemişse uyarı ver
  if (questionInput.value.trim() === "") {
    responseText.innerText = "Lütfen önce bir soru sor!";
    return;
  }

  // Sallama efektini ekle
  const ball = document.querySelector(".ball");
  ball.classList.add("shaking");

  setTimeout(() => {
    // Rastgele bir cevap seç
    const randomIndex = Math.floor(Math.random() * answers.length);
    const chosenAnswer = answers[randomIndex];

    // Cevabı güncelle
    answerDiv.innerText = chosenAnswer.text;
    responseText.innerText = `Cevap: ${chosenAnswer.text}`;

    // Web sitesinin arka plan rengini seçilen cevabın rengine ayarla
    document.body.style.backgroundColor = chosenAnswer.bg;

    // Sallama efektini kaldır
    ball.classList.remove("shaking");
  }, 500);
}
