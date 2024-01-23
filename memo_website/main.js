<script>
        var form = document.querySelector("#memo_form");
        form.onsubmit = function(e){
            e.preventDefault();  //  submit 이라는 e(이벤트) 발생하면, 이벤트 전파를 막는! 명령~            var userInput = document.querySelector("#user_memo");
            var userInput = document.querySelector("#user_memo")

            // 1. #memo_list라는 이름의 요소(HTML)을 찾기
            var memoList = document.querySelector("#memo_list");

            // 2. data + DOM(html) 가공
            var memoLi = document.createElement("li");
            memoLi.textContent = userInput.value;

            // 3. memoList에 추가
            memoList.appendChild(memoLi);

            var countSpan = document.querySelector("#count");
            count++;
            countSpan.innerText = count + 1;
            
            // 4. #user_memo 초기화
            userInput.value = "";  
            userInput.focus(); // 포커스 적용     
        }
</script>