var boolOperNum = false; //Operation이 마지막일경우 true 아닐경우는 false
var boolEval = true;
var calculMethod = ""; //수식에 대한 모든 string****
var queueData = []; //그래프 수식을 위한 Queue 변수
//display는 model만을 담당

function clearNumDisplay(value){ // 계산기 화면을 지우기 위한 함수
  document.getElementById("display").textContent = value;
  calculMethod = value;
  boolOperNum = false;
  boolEval = false;
}

function addNumDisplay(numValue){ //숫자를 더하는 경우
  if(boolOperNum){ //첫 숫자인 경우 화면클리어
    document.getElementById("display").textContent = "";
  }
  if(boolEval){
    clearNumDisplay("");
  }
  document.getElementById("display").textContent += numValue;
  calculMethod += numValue;
  boolOperNum = false;
  boolEval = false;
}

function operNum(operValue){
  if(boolOperNum){ //수식을 바꿀경우 -> calculMethod 변수 안 맨 끝 수식 제거
      calculMethod = calculMethod.substr(0,calculMethod.length-1);
  }
  calculMethod = eval(calculMethod);
  document.getElementById("display").textContent = calculMethod;
  if(operValue!='='){ //=이 아닐 경우에는 calculMethod에 수식 추가
      boolOperNum = true;
      boolEval = false;
      calculMethod += operValue;
  }
  else{ //= 일 경우 수식 추가 없이 그래픽 그리기
    boolEval = true;
    addDataQueue(calculMethod);
    displayBar();
  }
}

//graph function

function addDataQueue(displayedValue){ //큐에 마지막 변수 삽입
  if(queueData.length < 5){
    queueData.push(displayedValue);
  }
  else{
    queueData.shift();
    queueData.push(displayedValue);
  }
}

function displayBar(){ //queue에서 데이터를 꺼내서 표시
  var bars = document.getElementsByClassName("recBar");
  var displayedData;
  for(var i = 0; i<queueData.length; i++){
    displayedData = queueData[i];
    if(displayedData>=120){
      displayedData = 120;
    }
    bars[i].setAttribute("height", displayedData*2.916); //길이 변환(그래프 길이에 맞춰서 크기 조절)
    bars[i].setAttribute("y", 380-(displayedData*2.916));//그래프 위치에 따른 조정
  }
}

//svg maker



window.addEventListener('load', function CreateSVG () {
            var xmlns = "http://www.w3.org/2000/svg";
            var svgContainer = document.getElementById ("svgContainer");
            var svgElem = document.createElementNS (xmlns, "svg");
            svgContainer.appendChild (svgElem);
            svgElem.setAttributeNS (null, "width", 360);
            svgElem.setAttributeNS (null, "height", 500);
            svgElem.setAttributeNS (null, "text-align", "center");

            var calculBack = document.createElementNS (xmlns, "rect");
            svgElem.appendChild (calculBack);
            calculBack.setAttributeNS (null, 'rx', "20");
            calculBack.setAttributeNS (null, 'ry', "20");
            calculBack.setAttributeNS (null, 'width', "360");
            calculBack.setAttributeNS (null, 'height', "470");
            calculBack.setAttributeNS (null, 'style', "fill:#9C8DCA;stroke:red;stroke-width:5;opacity:0.5;");

            var calculPanel = document.createElementNS (xmlns, "g");
            svgElem.appendChild (calculPanel);
            calculPanel.setAttributeNS (null, 'class', "calculPanel");
            calculPanel.setAttributeNS (null, 'width', "400");
            calculPanel.setAttributeNS (null, 'font-family', "Comic Sans MS");

            var displayBox =  document.createElementNS (xmlns, "rect");
            calculPanel.appendChild (displayBox);
            displayBox.setAttributeNS (null, 'x', "30");
            displayBox.setAttributeNS (null, 'y', "10");
            displayBox.setAttributeNS (null, 'rx', "20");
            displayBox.setAttributeNS (null, 'ry', "20");
            displayBox.setAttributeNS (null, 'width', "300");
            displayBox.setAttributeNS (null, 'height', "70");
            displayBox.setAttributeNS (null, 'style', "fill:#ccffff;");

            var displayScreen = document.createElementNS (xmlns, "text");
            calculPanel.appendChild (displayScreen);
            displayScreen.setAttributeNS (null, 'id', "display");
            displayScreen.setAttributeNS (null, 'font-size', "16");
            displayScreen.setAttributeNS (null, 'x', "60");
            displayScreen.setAttributeNS (null, 'y', "50");

            var button = document.createElementNS (xmlns, "g");
            svgElem.appendChild (button);
            button.setAttributeNS (null, 'class', "button");

            function createButton (rx, ry, tx, ty, func, t) {
                var varRect = document.createElementNS (xmlns, "rect");
                var varText = document.createElementNS (xmlns, "text");
                button.appendChild (varRect);
                button.appendChild (varText);
                varRect.setAttributeNS (null, 'x', rx);
                varRect.setAttributeNS (null, 'y', ry);
                varText.setAttributeNS (null, 'class', "textRec");
                varRect.setAttributeNS (null, 'width', "50");
                varRect.setAttributeNS (null, 'height', "50");
                varRect.setAttributeNS (null, 'onclick', func);
                varText.setAttributeNS (null, 'x', tx);
                varText.setAttributeNS (null, 'y', ty);
                varText.setAttributeNS (null, 'class', "textButton");
                varText.setAttributeNS (null, 'fill', "black");
                varText.setAttributeNS (null, 'stroke-width', "0");
                varText.setAttributeNS (null, 'onclick', func);
                varText.innerHTML = t;
            }

            createButton ("40", "100", "57", "130", 'clearNumDisplay("")', 'C');
            createButton ("115", "100", "132", "130", 'operNum("%")', '%');
            createButton ("190", "100", "212", "130", 'operNum("/")', '/');
            createButton ("265", "100", "287", "130", 'addNumDisplay(".")', '.');
            createButton ("40", "170", "59", "202", 'addNumDisplay("7")', '7');
            createButton ("115", "170", "134", "202", 'addNumDisplay("8")', '8');
            createButton ("190", "170", "210", "202", 'addNumDisplay("9")', '9');
            createButton ("265", "170", "286", "202", 'operNum("*")', '*');
            createButton ("40", "240", "59", "270", 'addNumDisplay("4")', '4');
            createButton ("115", "240", "134", "270", 'addNumDisplay("5")', '5');
            createButton ("190", "240", "210", "270", 'addNumDisplay("6")', '6');
            createButton ("265", "240", "286", "270", 'operNum("-")', '-');
            createButton ("40", "310", "59", "340", 'addNumDisplay("1")', '1');
            createButton ("115", "310", "134", "340", 'addNumDisplay("2")', '2');
            createButton ("190", "310", "210", "340", 'addNumDisplay("3")', '3');
            createButton ("265", "310", "284", "340", 'operNum("+")', '+');
            createButton ("40", "380", "59", "410", 'addNumDisplay("0")', '0');
            createButton ("115", "380", "134", "410", 'operNum("=")', '=');
            // 115 380 210 410
            // var equalButton = document.getElementsByClassName("textRec")[17];
            // equalButton.setAttributeNS(null, "width", "200");

            //draw GRAPH
            var graphContainer = document.getElementById ("svgContainer");
            var svgGraph = document.createElementNS (xmlns, "svg");
            graphContainer.appendChild (svgGraph);
            svgGraph.setAttributeNS (null, 'width', "1000");
            svgGraph.setAttributeNS (null, 'height', "430");

            var axisLine = document.createElementNS (xmlns, "path");
            svgGraph.appendChild (axisLine);
            axisLine.setAttributeNS (null, 'd', "M300 30 L300 380 L1000 380");
            axisLine.setAttributeNS (null, 'stroke', "black");
            axisLine.setAttributeNS (null, 'fill', "none");

            var gridLine = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (gridLine);
            gridLine.setAttributeNS (null, 'class', "grid");

            function makeLine (makeClassName, x1, x2, y1, y2){
              var varLine = document.createElementNS (xmlns, "line");
              gridLine.appendChild (varLine);
              varLine.setAttributeNS (null, 'class', makeClassName);
              varLine.setAttributeNS (null, 'x1', x1);
              varLine.setAttributeNS (null, 'x2', x2);
              varLine.setAttributeNS (null, 'y1', y1);
              varLine.setAttributeNS (null, 'y2', y2);
            }

            makeLine("xGridLine", 416.6,416.6,30,380);
            makeLine("xGridLine", 533.2,533.2,30,380);
            makeLine("xGridLine", 650,650.2,30,380);
            makeLine("xGridLine", 766.6,766.6,30,380);
            makeLine("xGridLine", 883.3,883.3,30,380);
            makeLine("yGridLine", 300,1000,88.3,88.3);
            makeLine("yGridLine", 300,1000,146.6,146.6);
            makeLine("yGridLine", 300,1000,205,205);
            makeLine("yGridLine", 300,1000,263.3,263.3);
            makeLine("yGridLine", 300,1000,321.6,321.6);

            var xyLabel = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (xyLabel);
            xyLabel.setAttributeNS (null, 'class', "xyLabel");

            function makeLabel (makeClassName, x, y, t){
              var varText = document.createElementNS (xmlns, "text");
              xyLabel.appendChild (varText);
              varText.setAttributeNS (null, 'class', makeClassName);
              varText.setAttributeNS (null, 'x', x);
              varText.setAttributeNS (null, 'y', y);
              varText.innerHTML = t;
            }

            makeLabel("xLabel", 403, 410, "First");
            makeLabel("xLabel", 508, 410, "Second");
            makeLabel("xLabel", 632, 410, "Third");
            makeLabel("xLabel", 744, 410, "Fourth");
            makeLabel("xLabel", 870, 410, "Fifth");
            makeLabel("yLabel", 250, 30, "120");
            makeLabel("yLabel", 250, 88.3, "100");
            makeLabel("yLabel", 250, 146.6, "80");
            makeLabel("yLabel", 250, 205, "60");
            makeLabel("yLabel", 250, 263.3, "40");
            makeLabel("yLabel", 250, 321.6, "20");
            makeLabel("yLabel", 250, 380, "0");
            makeLabel("Results", 180, 40, "Results");

            var fifthBar = document.createElementNS (xmlns, "g");
            svgGraph.appendChild (fifthBar);

            function makeBar (x, y){
              var varBar = document.createElementNS (xmlns, "rect");
              fifthBar.appendChild (varBar);
              varBar.setAttributeNS (null, 'class', "recBar");
              varBar.setAttributeNS (null, 'x', x);
              varBar.setAttributeNS (null, 'y', y);
              varBar.setAttributeNS (null, 'width', 40);
              varBar.setAttributeNS (null, 'height', 0);
            }

            makeBar(396.6, 30);
            makeBar(513.2, 30);
            makeBar(630, 30);
            makeBar(736.6, 30);
            makeBar(853.3, 30);

})
