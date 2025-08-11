const hiragana = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ"
]
const hiraganaKor = [
    "아", "이", "우", "에", "오",
    "카", "키", "쿠", "케", "코",
    "사", "시", "스", "세", "소",
    "타", "치", "츠", "테", "토",
    "나", "니", "누", "네", "노",
    "하", "히", "후", "헤", "호"
]
let flag = true;
let counting = 0;

function randomPick(){
    if (flag) {
        flag = !flag;
        return hiragana[Math.floor(Math.random() * hiragana.length)];
    }    
    else {
        flag = !flag;
        return hiraganaKor[Math.floor(Math.random() * hiragana.length)];
    }    
}
function findAnswer(){    
    if (!flag) {
        const index = hiragana.indexOf(document.getElementById("question-box").innerHTML);
        return hiraganaKor[index];
    }    
    else {
        const index = hiraganaKor.indexOf(document.getElementById("question-box").innerHTML);
        return hiragana[index];
    }    
}
function clickNext() {
  document.getElementById("question-box").innerHTML = randomPick();
  document.getElementById("answer-text").innerHTML = "";
  counting += 1;
  document.getElementById("answer-text").innerHTML = counting;
}
function clickAnswer() {
  document.getElementById("answer-text").innerHTML = findAnswer();
}