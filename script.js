
const questions = [
    {
        prefecture: "北海道",
        capital: "札幌市",
        options: ["函館市", "旭川市", "釧路市"],
        trivia: "札幌市は雪まつりで有名です。"
    },
    {
        prefecture: "愛知県",
        capital: "名古屋市",
        options: ["豊田市", "岡崎市", "一宮市"],
        trivia: "名古屋市は味噌カツや名古屋城で有名です。"
    }
];

let current = 0;

function showQuestion() {
    const q = questions[current];
    const options = [q.capital, ...q.options].sort(() => Math.random() - 0.5);
    document.getElementById("question").textContent = `${q.prefecture}の県庁所在地はどこ？`;
    document.getElementById("options").innerHTML = options.map(opt => 
        `<button onclick="checkAnswer('${opt}')">${opt}</button>`
    ).join("<br>");
    document.getElementById("feedback").textContent = "";
}

function checkAnswer(selected) {
    const q = questions[current];
    if (selected === q.capital) {
        document.getElementById("feedback").textContent = "正解！ " + q.trivia;
    } else {
        document.getElementById("feedback").textContent = "不正解... 正解は " + q.capital + " です。 " + q.trivia;
    }
}

function nextQuestion() {
    current = (current + 1) % questions.length;
    showQuestion();
}

window.onload = showQuestion;
