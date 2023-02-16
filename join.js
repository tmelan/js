//비번 일치 여부 확인

window.onload = ()=>{
    const pwd1 = document.querySelector("input[name=pwd1]");
    const pwd2 = document.querySelector("input[name=pwd2]");

    // onsubmit 제출 버튼 누를때 함수 실행되게
    const form = document.querySelector("form");
    form.onsubmit = checkPwd;

    function checkPwd(){
        if(!(pwd1.value===pwd2.value)) { //일치하지 않을때
            //alert("비번 일치하지 않습니다.");
            //비번창 색 변경하기
            pwd1.style.backgroundColor = "red";
            return false;// 함수 진행되면 안되니까
        } 
        return true;

    }
    

};

//onload 시점에 실행됨 

