Chart.js 또는 D3.js를 통해 그래프를 생성해 봅니다.
================

chart.js이용해서 그래프를 생성해보려고 합니다.

chart.js를 이용한 차트 선언 함수
-----------
``` r        
<div id="chartJsContainer" align="center" style="position: relative; left:50px; height:1000px; width:1200px">
   <canvas id="barChart" width="800" height="450"></canvas>
   <script src="Calender_2.js"></script>
</div>
```
``` r
var chartjs = new Chart(document.getElementById("barChart"), {
      type: 'bar',
```
chart.js는 d3.js와는 다르게 canvas를 사용합니다.
canvas 태그는 자체적으로 크기 조절이 안되기 때문에 relative를 통해 상위 태그에 맞춰서 크기가 조절 됩니다.
chartjs를 통해 bar차트를 생성하였습니다

chart 변수를 가져와 삽입
-----------

``` r        
for(var i = 0; i < queueData.length; i++){
    chartjs.data.datasets[0].data[i] = queueData[i];
  }
   chartjs.update();
```
기존에 있던 chart의 수치를 가져와 대체로 삽입하였습니다.

#### 실습간 난이도 있었던 부분

chartjs가 이미 구축되어 있는 라이브러리라 자체적으로 사용은 쉬웠습니다.
다만 svg내부의 태그를 가져와 차트에 넣는 과정에서 많은 고민이 있었습니다. 