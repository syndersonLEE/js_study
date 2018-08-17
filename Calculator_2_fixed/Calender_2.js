var boolOperNum = false; //마지막 행동 확인용
var calculMethod = ""; //수식 변수

function clearNumDisplay(value){
  document.getElementById("display").innerText = value;
  calculMethod = value;
  boolOperNum = false;
}

function addNumDisplay(numValue){ //숫자를 더하는 경우
  if(boolOperNum){
    document.getElementById("display").innerText = "";
  }
  document.getElementById("display").innerText += numValue;
  calculMethod += numValue;
  boolOperNum = false;
}

function operNum(operValue){
  if(boolOperNum){ //수식을 바꿀경우
      calculMethod = calculMethod.substr(0,calculMethod.length-1);
  }
  calculMethod = eval(calculMethod);
  document.getElementById("display").innerText = calculMethod;
  if(operValue!='='){
      calculMethod += operValue;
      boolOperNum = true;
  }
}
