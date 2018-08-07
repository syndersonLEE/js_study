Chart.js, Billboard.js, Google Chart, Toast UI Chart 정리
================

각 차트를 그려보고 각 차트에 대한 차이점을 비교합니다.

####라이브러리 호출
-----------
chart.js
``` r        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
```
billboard.js
``` r
    <link rel="stylesheet" href="lib/billboard.css">
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="lib/billboard.js"></script>
```
Google Chart
``` r        
   <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script
```
Toast UI
``` r
    <link rel="stylesheet" href="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.css">
    <script type='text/javascript' src='https://rawgit.com/nhnent/tui.code-snippet/v1.3.0/dist/tui-code-snippet.js'></script>
    <script type='text/javascript' src='https://rawgit.com/nhnent/raphael/v2.2.0b/raphael.js'></script>
    <script src="https://uicdn.toast.com/tui.chart/latest/tui-chart.min.js"></script>
```

각 라이브러리의 호출식에서 chart.js와 google Chart와는 다르게 billboard와 Toast는 불러오는 moudule의 양이 많다. billboard는 D3위에 추가로 적용한 방식이라 속도면에서 나머지 두 라이브러리에 비해 느릴것으로 예상된다.

####실행 속도
-----------
console.time을 통한 프로그램 실행 결과에 따르면
Chart.js는 평균적으로 50~70ms, Billboard.js는 250~270ms, Google Chart는 2 ~ 4ms, Toast UI는 250~260ms의 속도가 나온다.
평균적으로 불러오는 라이브러리가 많은 만큼 BillBoard와 Toast UI는 상대적으로 실행하는데에 많은 시간을 소요한다.


####차트 실행 난이도
-----------
chart.js
``` r        
new Chart(document.getElementById(""), {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
          data: [],
          label: "",
        }, {
          data: [],
          label: "",
        },
      ]
    },
  });
```
billboard.js
``` r        
bb.generate({
    data:{},
    size: {},
    bindto: "#~~"
  });
```
Google Chart
``` r
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawGoogleLineChart);
function drawGoogleLineChart(){
  var data = new google.visualization.arrayToDataTable([
  ]);
      var options = {
      };
      var chart = new google.charts.Line(document.getElementById(''));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }
```
Toast UI
``` r
function tuiLineChart(){
  var lineContainer = document.getElementById('');
  var lineData = {
      categories: [],
      series: [
          {
              name: '',
              data: []
          },
      ]
  };
  var lineOptions = {
      chart: {
          width: 500,
          height: 250,
      },
      series: {
          showDot: true,
          zoomable: false
      },
  };
  var chart = tui.chart.lineChart(lineContainer, lineData, lineOptions);
}
```
각 라이브러리는 Data와 함수 디자인을 분리하여 표현하였는데, 약간은 다르지만 chartjs와 billboard.js는 new chart와 bb.generate함수 안에서 모든 data와 style을 선언해주어, html의 id를 가져와 그 차트를 표현해 주지만, google Chart와 toast는 style과 data 및 theme에 대한 각각의 object를 개별적으로 값을 가진다음 그 값에 대해 마지막 함수를 통해 호출하여 주는 방식입니다. 이는 사소해 보이지만, interactive하게 주기적으로 차트를 업데이트하기에는 프로그래밍적으로 후자에 비해 전자는 어려울 것으로 생각합니다.


#### 라이브러리별 차트 다양성 및 디자인
Line, Bar, Rader, Bubble, Scatter, Dount, Pie Chart - All Chart
Gauge Chart - Billboard.js, google Chart
Map Chart, TreeMap Chart - Google Chart, Toast Chart 
Org, Calendar Chart - Google Chart

D3가 아닌 다른 차트들은 기존에 정해져 있는 틀에서 차트를 작성할 수 밖에 없다는 단점이 있습니다.
디자인에 있어서 Google Chart가 가장 단순한 디자인 형태를 띄고, 데이터 추가나 여러면에 있어 제약이 있지만 독특한 차트가 많고 다양합니다.
Billboard나 Canvas는 디자인에 있어 매끄러운 형태를 보이지만, 가장 단순한 9가지의 형태를 제외하고 그 이상의 차트 형식을 그리기가 어렵습니다.
2개 이상의 다른 형태의 차트를 그리는 데에 있어 bar과 line을 혼재가능한 라이브러리는 google chart를 제외한 나머지가 가능하고, 이중 Pie Chart는 Google Chart와 Toast Chart가 가능합니다. 특히 Toast는 Line+Scatter, Line+Area등 ComboChart의 다양성을 보입니다.
Billboard.js는 다른 차트에 없는 특이한 기능이 존재하는데, 각 차트별로 Chart를 TransForm기능을 통해 차트의 형태를 Bar<->Line<->Scatter 같이 상호 변경 가능합니다.

Toast UI Chart는 함수의 사용법이나 그래프에 종류에 있어서 Google Chart와 비슷한 것으로 보입니다.
특히 Google Chart와 Toast Chart의 특이한 차트로 맵차트가 있는데, 각각의 차트는 Naver와 Google Map Api를 이용해 지형을 통한 차트를 생성가능합니다.

