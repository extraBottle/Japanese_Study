const japanese = []
const kor = [
    "아", "이", "우", "에", "오",
    "카", "키", "쿠", "케", "코",
    "사", "시", "스", "세", "소",
    "타", "치", "츠", "테", "토",
    "나", "니", "누", "네", "노",
    "하", "히", "후", "헤", "호",
    "마", "미", "무", "메", "모",
    "야",       "유",      "요",
    "라", "리", "루", "레", "로",
    "와",             "오(wo)",
    "응"
]
const hiragana = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や",      "ゆ",       "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ",                 "を",
    "ん"
]
const gatakana = [
    "ア", "イ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ヤ",      "ユ",       "ヨ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ワ",                 "ヲ",
    "ン"
]
let flag = true;
let counting = 0;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("total-count").innerHTML = hiragana.length;
  japanese.push(...hiragana); 
});

function randomPick(){
    if (flag) {
        flag = !flag;
        return japanese[Math.floor(Math.random() * hiragana.length)];
    }    
    else {
        flag = !flag;
        return kor[Math.floor(Math.random() * hiragana.length)];
    }    
}
function findAnswer(){    
    if (!flag) {
        const index = japanese.indexOf(document.getElementById("question-box").innerHTML);
        return kor[index];
    }    
    else {
        const index = kor.indexOf(document.getElementById("question-box").innerHTML);
        return japanese[index];
    }    
}
function chooseRange() {
    const checkedRadio = document.querySelector('input[name="range"]:checked');
    japanese.length = 0;    
    counting = 0;
    document.getElementById("counter").innerHTML = counting;
    if (checkedRadio.value == "히라가나"){
        document.getElementById("total-count").innerHTML = hiragana.length;
        japanese.push(...hiragana);        
    }
    else if (checkedRadio.value == "가타카나"){
        document.getElementById("total-count").innerHTML = gatakana.length;
        japanese.push(...gatakana);        
    }
    document.getElementById("question-box").innerHTML = "문제";
    document.getElementById("answer-text").innerHTML = "정답";
}
function clickNext() {
  document.getElementById("question-box").innerHTML = randomPick();
  document.getElementById("answer-text").innerHTML = "";
  counting += 1;
  document.getElementById("counter").innerHTML = counting;
}
function clickAnswer() {
  document.getElementById("answer-text").innerHTML = findAnswer();
}