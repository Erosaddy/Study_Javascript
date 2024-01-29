// 우리 며칠째 버튼 누르면 디데이 결과 계산 및 표시

// 1. DOM 탐색
const dday_form = document.querySelector("#dday_form");

// 2. DOM event bind(부착)
dday_form.addEventListener("submit", showDday); // 폼은 submit 

// 3. 이벤트 처리기(=함수)
function showDday(e) {
    e.preventDefault(); // 화면 갱신 중지
    // 3-1. 오늘 날짜
    var nowDay = new Date();

    const userDate = document.querySelector("#first_date").value;

    let theDay = new Date(userDate);

    console.log(nowDay, theDay);

    let nowTime = nowDay.getTime();
    let theTime = theDay.getTime();

    let passedTime = nowTime = theTime;

    passedTime = Math.round(passedTime / (1000*86400));

    // #passDay DOM 탐색
    const passDay = document.querySelector("#passedDay");
    const resultDiv = document.querySelector("#result");
    const man = document.querySelector("#man_name").value;
    const woman = document.querySelector("#woman_name").valuer;
    const name_field1 = document.querySelector("#name1");
    const name_field2 = document.querySelector("#name2");
    // #passDay DOM 조작
    passDay.innerText = passedTime;
    
// document.querySelector("#name1").innerText = man;
// document.querySelector("#name2").innerText = woman;

    name_field1.textContent = man;
    name_field2.textContent = woman;
    resultDiv.classList.remove("d-none");
}



