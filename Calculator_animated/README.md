Chart.js 또는 D3.js를 통해 그래프를 생성해 봅니다.
Using Chart.js and D3.js to make a Graph
================

D3.js를 이용한 축 및 배경 그리기
Draw Axis & Background using D3.js
-----------
``` r        
function drawD3Axis(){
    var axisGroup = initSvg.append("g")
        .attr('class', 'axisGroup');
```
``` r
  var xLabel = xGroup.selectAll("text")
        .data(xLabelData)
        .enter()
        .append("text")
```
D3에서 svg를 선언하여 틀을 만들고 svg에서 진행했던 것 처럼 grid, axis별로 line과 path를 이용해 그려준다.
Declare svg to make graph shape in D3.js.   
Draw axis using line and path like doing at svg.

bar을 변수에서 가져와 삽입
-----------
``` r
function drawD3Bar(){
  var datasets = [];
  for (var i = 0; i < queueData.length; i++) {
    if(queueData[i]){
      datasets[i] = queueData[i];
    }
    else{
      datasets[i] = 0;
    }
  }
```
``` r        
  var bars = initSvg.selectAll('rect')
          .data(datasets)
          .enter()
          .append('rect')
          .attr('x', function(d, i){
            return (i*116.6+padding);
          })
```
function 선언 부분에서 데이터를 queuedata에서 가져온 변수로 넣습니다.
이 때에 queueData의 최대 크기 계산에 따라 bar의 enter과 append여부가 달라짐으로
if else문을 통해서 두 부분을 분리하였습니다.
In function declare part, put the variables that takes from queuedata at  


#### 실습간 두 과정의 차이점
chart.js와는 다르게 svg태그를 사용하여 직접 짜는 것 간의 큰 차이점을 느끼지 못하였습니다.
Data를 행렬화하여 넣기 쉽다는 점에 있어서는 svg에서 발전된 부분으로 느껴집니다.

chart.js와의 큰 차이점으로는 chart.js에서는 이미 canvas를 활용하여 많은 부분에서 부드럽게 작동하고,
구현되어 있는 차트 안에서의 작성이 크게 어렵지 않았습니다.
하지만 커스터마이징을 통한 차트의 변경은 사실상 거의 불가능한 라이브러리라고 생각됩니다.

d3.js는 선하나 그림 하나하나에서 구현하는 데에 svg만큼 직접 그리고 조작해야 한다는 점에서 어려움이 있었습니다.
다만 이렇게 함으로서, 새로운 차트를 직접 그리는 데에는 여러 모로 도움이 많이 될 것이라 생각합니다.

#### 실습 외에 추가적으로 진행한 부분
기존 코드를 전부 기능별로 js파일로 분리하여 파일을 만들었습니다.
그 과정에서 js파일별 동작 순서에 따라 프로그램 실행이 되느냐 안되느냐가 결정되었었던 어려움이 존재하였습니다.
다른 부분 보다 계산기에서 입력한 queueData변수가 전역적으로 쓰이고, 다른 함수에서 사용하였지만, 
함수간 coupling이 높아져 재사용의 어려움이 보여 다른 부분으로 돌리는 것이 필요하여 보입니다.