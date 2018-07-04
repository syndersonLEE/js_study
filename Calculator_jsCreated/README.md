Calculator_svg 실습
================

'svg' 를 js를 통해서 생성하고 attribute를 만듭니다.

svg 생성 함수
-----------
``` r        
window.addEventListener('load', function CreateSVG () {
            var xmlns = "http://www.w3.org/2000/svg";
            var svgContainer = document.getElementById ("svgContainer");
```
``` r
<body>
  <div id="svgContainer"  align="center" text-align:center></div>
  <div id="graphContainer"  align="center" text-align:center></div>
</body>
```
기존에 있던 svg를 전부 삭제하고 svg 표현 하는 div를 두개만 남기고
window를 load할 때 실행 시키는 함수로 변경

svg 생성 함수를 만들고 및 실행
-----------

``` r        
function createButton () {
		var varRect = document.createElementNS (xmlns, "rect");
		button.appendChild (varRect);
		varRect.setAttributeNS (null, 'x', rx);
```
각 버튼이나 Label등 중복되어 생성하는 과정에서 작성을 줄이기 위해 함수를 이용해
attribute 작성을 줄이려고 함

``` r        
createButton ("40", "100", "57", "130", 'clearNumDisplay("")', 'C');
createButton ("115", "100", "132", "130", 'operNum("%")', '%');
createButton ("190", "100", "212", "130", 'operNum("/")', '/');
```

#### 실습간 미해결 과제 및 의문점

1.함수 사용 간에 필요한 특정 node만을 찾아 width 수정을 해주는 것에 실패 -> '=' 박스의 크기를 늘리지 못함(svg 선택자 관련 학습 필요)
2.코드의 중복를 함수의 사용 하나만으로 줄이기는 너무 적음 관련 방법 탐색을 위해 알고리즘 학습 필요
